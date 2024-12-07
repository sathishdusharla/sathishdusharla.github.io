import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Shield } from 'lucide-react';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState<JSX.Element | string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz32hKqtDnI0_oaZdG2Iy6Jx9ChyXixKHdshXsvXzGuywZogAczJkyCPudlv2zo794Pjg/exec', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setMessage(<p style={{ color: 'green' }}>{data.message}</p>);
        setTimeout(() => {
          navigate(`/admin-dashboard?email=${data.email}`);
        }, 2000);
      } else {
        setMessage(<p style={{ color: 'red' }}>{data.message}</p>);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage(<p style={{ color: 'red' }}>An error occurred. Please try again.</p>);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col bg-slate-900">
      <div className="flex-grow container mx-auto px-4 flex items-center justify-center">
        <div className="w-full md:w-1/2 bg-slate-800 p-8 rounded-lg shadow-xl border border-blue-500/20">
          <div className="flex items-center space-x-3 mb-6 justify-center">
            <Shield className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-white">Admin Login</h2>
          </div>

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

          <div id="message" className="mt-6 text-center">
            {message}
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Access restricted to authorized administrators only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;