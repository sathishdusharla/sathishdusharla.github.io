import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz-bqzrbrFegOXj1swTiM2hkHitbV2LWajCMeFl8oMm3p8rRqonKUMUOEwmPLPn5eqYWA/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${encodeURIComponent(formData.email)}&password=${encodeURIComponent(formData.password)}`
      });

      const data = await response.json();

      if (data.status === 'success') {
        setMessage('Admin added successfully! Redirecting...');
        setTimeout(() => {
          navigate('/admin-dashboard');
        }, 2000); // 2 second delay
      } else {
        setMessage(data.message || 'Error adding admin. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Add Admin</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
            <img src="/Admindashimg.png" alt="Admin illustration" className="w-full rounded-lg shadow-xl" />
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Add Admin</h2>
            <form id="adminForm" onSubmit={handleSubmit}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-slate-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
              />

              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-slate-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Add Admin
              </button>
            </form>
            <p id="message" className="mt-4 text-center text-gray-400">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;