import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add contact form submission logic here
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about BlockvoteX? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  info="blockvotex@gmail.com"
                />
                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  info="+1-800-123-4567"
                />
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Address"
                  info="1234 Blockchain Blvd, Tech City, Innovation State 56789"
                />
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Support Hours</h2>
              <p className="text-gray-400">
                Our support team is available Monday to Friday, 9 AM to 6 PM (UTC)
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, info }: { icon: React.ReactNode; title: string; info: string }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 text-blue-500">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{info}</p>
    </div>
  </div>
);

export default Contact;