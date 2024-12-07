import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VoterDashboard = () => {
  const [voterData, setVoterData] = useState({
    name: 'Loading...',
    email: 'Loading...',
    validID: 'Loading...',
    uniqueID: 'Loading...',
    mobile: 'Loading...',
    qrCode: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const email = new URLSearchParams(window.location.search).get('email');
    if (email) {
      fetchVoterData(email);
    } else {
      alert('No email provided. Please log in again.');
      navigate('/voter-login');
    }
  }, [navigate]);

  const fetchVoterData = async (email: string) => {
    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbwmyVk0E_apJzK-bgzWWWk-BEgxfCFBl_b1aXnwQfwsUtYvXkKksSl7DGH3uy2LzQ-zLw/exec?email=${email}`);
      const data = await response.json();
      if (data.error) {
        alert('Voter not found!');
        navigate('/voter-login');
      } else {
        setVoterData(data);
      }
    } catch (error) {
      console.error('Error fetching voter data:', error);
      alert('An error occurred while fetching voter data.');
    }
  };

  const handleVoteClick = () => {
    navigate(`/voting?email=${encodeURIComponent(voterData.email)}&uniqueId=${encodeURIComponent(voterData.uniqueID)}`);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col bg-slate-900">
      <div className="flex-grow container mx-auto px-4 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-slate-800 p-12 rounded-lg shadow-xl border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Voter Dashboard</h2>
          
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-300">
                <strong>Name:</strong> {voterData.name}
              </p>
              <p className="block text-sm font-medium text-gray-300">
                <strong>Email:</strong> {voterData.email}
              </p>
              <p className="block text-sm font-medium text-gray-300">
                <strong>Valid ID:</strong> {voterData.validID}
              </p>
              <p className="block text-sm font-medium text-gray-300">
                <strong>Unique ID:</strong> {voterData.uniqueID}
              </p>
              <p className="block text-sm font-medium text-gray-300">
                <strong>Mobile:</strong> {voterData.mobile}
              </p>
              <p className="block text-sm font-medium text-gray-300">
                <strong>Unique QR:</strong>
              </p>
              <img src={voterData.qrCode} alt="QR Code" className="mt-2 max-w-xs" />
            </div>

            <button
              onClick={handleVoteClick}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Cast Your Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterDashboard;