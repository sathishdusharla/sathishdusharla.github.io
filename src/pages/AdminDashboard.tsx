import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleAddAdminClick = () => {
    navigate('/admin/add-admin');
  };

  const handleConductElectionsClick = () => {
    navigate('/admin/conduct-elections');
  };

  const handleResultsClick = () => {
    navigate('/results');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center px-8 py-12">
      <div className="bg-slate-800 rounded-lg p-8 shadow-xl w-full max-w-4xl">
        <div className="flex items-center mb-6">
          <Shield className="w-8 h-8 text-blue-500" />
          <h2 className="ml-3 text-3xl font-bold text-white">Admin Dashboard</h2>
        </div>

        <div className="flex justify-between items-center">
          {/* Left Section: Buttons */}
          <div className="flex flex-col gap-4 w-1/3">
            <button
              onClick={handleAddAdminClick}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Add Admin
            </button>

            <button
              onClick={handleConductElectionsClick}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Conduct Elections
            </button>

            <button
              onClick={handleResultsClick}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Results
            </button>
          </div>

          {/* Center Section: Image */}
          <div className="flex justify-center items-center w-1/3">
            <img src="/Admindashimg.png" alt="Admin Dashboard Illustration" className="max-w-xs" />
          </div>
        </div>

        {/* Restricted Access Text */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Access restricted to authorized administrators only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
