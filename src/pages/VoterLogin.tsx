import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const VoterLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);

    const response = await fetch('https://script.google.com/macros/s/AKfycbwmyVk0E_apJzK-bgzWWWk-BEgxfCFBl_b1aXnwQfwsUtYvXkKksSl7DGH3uy2LzQ-zLw/exec', {
      method: 'POST',
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      setMessage(data.message);
      setTimeout(() => {
        navigate(`/voter_dashboard?email=${data.email}`);
      }, 2000);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col bg-slate-900">
      <div className="flex-grow container mx-auto px-4 flex items-center justify-center">
        <div className="w-full md:w-1/2 bg-slate-800 p-8 rounded-lg shadow-xl border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Voter Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md bg-slate-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="block w-full rounded-md bg-slate-700 border-gray-600 text-white pr-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Login
            </button>
          </form>

          <p id="message" className={`mt-4 text-center ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>

          <p className="mt-4 text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/voter-registration" className="text-blue-500 hover:text-blue-400">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoterLogin;