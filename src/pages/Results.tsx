import { useState, useEffect } from 'react';
import { Download, Trophy } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface VoteResult {
  candidate: string;
  party: string;
  votes: number;
}

const Results = () => {
  const [results, setResults] = useState<VoteResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchElectionData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyAjah4_zrxQDfoRptMoNLRSDhDAlIrAFjzz_C6xZv9r-hFVANjv7nFG1rvGSLKzK4k/exec');
        const data = await response.json();
        setResults(data.candidates.map((candidate: any) => ({
          candidate: candidate[0],
          party: candidate[2],
          votes: parseInt(candidate[3], 10)
        })));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching election data:', error);
        setLoading(false);
      }
    };

    fetchElectionData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const winner = [...results].sort((a, b) => b.votes - a.votes)[0];

  const chartData = {
    labels: results.map(r => r.candidate),
    datasets: [
      {
        label: 'Votes',
        data: results.map(r => r.votes),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(59, 130, 246, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(59, 130, 246)'
        ],
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Election Results',
        color: 'white',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'white'
        }
      }
    }
  };

  const downloadResults = () => {
    const doc = new jsPDF();
  
    // Title
    doc.setFontSize(18);
    doc.text('BlockvoteX - Election Results', 105, 10, { align: 'center' });
  
    // Election name
    const electionName = 'Election Name'; // Replace with actual election name if available
    doc.setFontSize(14);
    doc.text(`Election: ${electionName}`, 105, 20, { align: 'center' });
  
    // Collect data for the table
    const tableData = results.map(r => [
      r.party,
      r.candidate,
      r.votes.toString()
    ]);
  
    // Generate table with autoTable
    autoTable(doc, {
      startY: 30,
      head: [['Party', 'Candidate Name', 'Votes']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185] }, // Optional styling
      margin: { top: 10 },
    });
  
    // Winner
    const winner = results.sort((a, b) => b.votes - a.votes)[0];
    doc.setFontSize(14);
    doc.text(`Winner: ${winner.candidate} (${winner.party})`, 105, (doc as any).lastAutoTable.finalY + 10, { align: 'center' });
  
    // Voter count
    const totalVotes = results.reduce((acc, curr) => acc + curr.votes, 0);
    doc.setFontSize(12);
    doc.text(`Total Voters: ${totalVotes}`, 105, (doc as any).lastAutoTable.finalY + 20, { align: 'center' });
  
    // Footer with clickable GitHub profile
    doc.setFontSize(10);
    doc.textWithLink('Developed by Sathish Dusharla | @thedusharla', 105, doc.internal.pageSize.height - 10, {
      url: 'https://github.com/sathishdusharla',
      align: 'center'
    });
  
    // Save PDF
    doc.save('election-results.pdf');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Election Results</h1>
          <p className="text-xl text-gray-400">
            Final tally of votes for all candidates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-slate-800 rounded-lg p-6 border border-blue-500/20">
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">Winner</h2>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {winner.candidate}
              </h3>
              <p className="text-gray-400 mb-4">{winner.party}</p>
              <div className="text-3xl font-bold text-blue-500 mb-6">
                {winner.votes} votes
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Detailed Results</h2>
            <button
              onClick={downloadResults}
              className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 text-left text-gray-300">Candidate</th>
                  <th className="py-3 text-left text-gray-300">Party</th>
                  <th className="py-3 text-right text-gray-300">Votes</th>
                  <th className="py-3 text-right text-gray-300">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3 text-white">{result.candidate}</td>
                    <td className="py-3 text-gray-400">{result.party}</td>
                    <td className="py-3 text-right text-white">{result.votes}</td>
                    <td className="py-3 text-right text-gray-400">
                      {((result.votes / results.reduce((acc, curr) => acc + curr.votes, 0)) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;