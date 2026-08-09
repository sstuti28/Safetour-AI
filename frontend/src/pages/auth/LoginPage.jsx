import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiShield, FiUser, FiBriefcase, FiLock, FiMail } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext'; // Adjust path if needed

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth() || {}; // Fallback if AuthContext is not fully set up
  
  const [role, setRole] = useState('tourist'); // 'tourist' or 'authority'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulate Login (In production, backend returns the user role)
    if (login) {
      login({ name: role === 'tourist' ? 'Rahul (Tourist)' : 'Inspector Sharma', role });
    } else {
      localStorage.setItem('user', JSON.stringify({ name: role === 'tourist' ? 'Rahul' : 'Admin', role }));
    }

    // Role-Based Redirection!
    if (role === 'authority') {
      navigate('/authority/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <FiShield className="text-3xl" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 text-sm mt-2">Sign in to the SafeTour platform</p>
        </div>

        {/* Role Selector */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
          <button
            type="button"
            onClick={() => setRole('tourist')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
              role === 'tourist' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <FiUser /> Tourist
          </button>
          <button
            type="button"
            onClick={() => setRole('authority')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
              role === 'authority' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <FiBriefcase /> Authority
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-slate-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={role === 'tourist' ? "tourist@example.com" : "police@gov.in"}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-slate-400" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-slate-600 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 font-medium hover:text-blue-500">Forgot password?</a>
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-xl text-white font-bold transition shadow-lg flex justify-center items-center gap-2 ${
              role === 'tourist' 
                ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/30' 
                : 'bg-slate-800 hover:bg-slate-900 shadow-slate-800/30'
            }`}
          >
            {role === 'tourist' ? 'Login as Tourist' : 'Access Command Center'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-blue-600 hover:text-blue-500 transition">
            Create Digital ID
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;