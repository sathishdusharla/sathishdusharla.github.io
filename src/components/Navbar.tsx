import { Link, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="fixed w-full bg-gradient-to-r from-slate-900 to-slate-800 border-b border-blue-600/20 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Lock className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              BlockvoteX
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" text="Home" />
            <NavLink to="/about" text="About" />
            <NavLink to="/contact" text="Contact" />
            <NavLink to="/help" text="Help" />
            
            {/* Conditionally render Admin button only on the homepage */}
            {location.pathname === '/' && (
              <Link 
                to="/admin-login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, text }: { to: string; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-300 hover:text-blue-500 transition-colors duration-200"
  >
    <span>{text}</span>
  </Link>
);

export default Navbar;
