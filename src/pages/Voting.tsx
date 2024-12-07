import { useState, useEffect } from 'react';
import { Vote, AlertCircle } from 'lucide-react';

const Voting = () => {
  const [electionName, setElectionName] = useState<string | null>(null);
  const [candidates, setCandidates] = useState<any[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [uniqueId, setUniqueId] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userEmail = params.get('email');
    const userUniqueId = params.get('uniqueId');

    if (!userEmail || !userUniqueId) {
      alert('Email and Unique ID are required to vote.');
      window.location.href = '/voter-login';
      return;
    }

    setEmail(userEmail);
    setUniqueId(userUniqueId);

    const fetchElectionData = async () => {
      try {
        // Fetch election details
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbx2PXOlLJpQWvzrnCMDWr1MW5BouafYNfrl3HPqm2-zVTOdjOONCIzBmK4CC92AjBeG/exec'
        );
        const data = await response.text();
        const rows = data.split('\n').map(row => row.split('\t'));

        setElectionName(rows[0][0]);

        const fetchedCandidates = rows.slice(1).map((row, index) => ({
          id: (index + 1).toString(),
          name: row[0],
          party: row[2],
        }));
        setCandidates(fetchedCandidates);

        // Check if the user has already voted
        const voteCheckResponse = await fetch(
          'https://script.google.com/macros/s/AKfycb_check_voted_status/exec',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              email: userEmail,
              uniqueId: userUniqueId,
            }).toString(),
          }
        );

        const voteCheckData = await voteCheckResponse.json();
        if (voteCheckData.hasVoted) {
          setHasVoted(true);
          alert('You have already cast your vote.');
        }
      } catch (error) {
        console.error('Error fetching election data or vote status:', error);
      }
    };

    fetchElectionData();
  }, []);

  const handleVote = () => {
    if (selectedCandidate) {
      setShowConfirmation(true);
    }
  };

  const confirmVote = async () => {
    if (!selectedCandidate || !email || !uniqueId) return;

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbw_EzoxksYtXJjdbQcvH3B2klnKnxP6Ez_BUfoyzNQTPCOzSZx-qydrPyL5cAo4BGP6/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            contestant: selectedCandidate,
            email,
            uniqueId,
          }).toString(),
        }
      );

      const data = await response.json();
      if (data.hasVoted) {
        alert('You have already voted!');
      } else {
        alert('Vote cast successfully!');
        window.location.href = `/voter_dashboard?email=${encodeURIComponent(email)}`;
      }
    } catch (error) {
      console.error('Error casting vote:', error);
    } finally {
      setShowConfirmation(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{electionName || 'Election'}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select your preferred candidate below. Your vote is secure and anonymous.
          </p>
        </div>

        {!hasVoted ? (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {candidates.map(candidate => (
                <div
                  key={candidate.id}
                  className={`bg-slate-800 rounded-lg p-6 border transition-all duration-300 ${
                    selectedCandidate === candidate.name
                      ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'border-blue-500/20 hover:border-blue-500/50'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white text-center mb-2">
                    {candidate.name}
                  </h3>
                  <p className="text-gray-400 text-center mb-4">{candidate.party}</p>
                  <button
                    onClick={() => setSelectedCandidate(candidate.name)}
                    className={`w-full py-2 px-4 rounded-md transition-colors duration-200 ${
                      selectedCandidate === candidate.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    Select Candidate
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={handleVote}
                disabled={!selectedCandidate}
                className={`inline-flex items-center space-x-2 px-8 py-3 rounded-full transition-all duration-300 ${
                  selectedCandidate
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-slate-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Vote className="w-5 h-5" />
                <span>Cast Vote</span>
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-300">You have already cast your vote. Thank you!</p>
          </div>
        )}

        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-lg p-8 max-w-md w-full">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-semibold text-white">Confirm Your Vote</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Are you sure you want to cast your vote? This action cannot be undone.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={confirmVote}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 bg-slate-700 text-white py-2 rounded-md hover:bg-slate-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;
