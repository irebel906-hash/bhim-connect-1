import { Outlet, Navigate, useLocation, useNavigate, Link } from 'react-router';
import { Bell, Search, User, ArrowLeft, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/home': return 'BhimConnect';
      case '/news': return 'Community News';
      case '/matrimonial': return 'Matrimonial';
      case '/jobs': return 'Jobs & Careers';
      case '/books': return 'Books';
      case '/business': return 'Business Directory';
      case '/schemes': return 'Govt Schemes';
      case '/help': return 'Emergency Help';
      case '/profile': return 'My Profile';
      default: return 'BhimConnect';
    }
  };

  const title = getPageTitle(location.pathname);
  const isHome = location.pathname === '/home';

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center w-full">
      {/* Mobile container constraint to simulate app */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl relative overflow-x-hidden flex flex-col">
        
        {/* Top App Bar */}
        <header className="bg-blue-700 text-white sticky top-0 z-40 shadow-md">
          <div className="flex items-center justify-between px-4 h-16 relative">
            {isHome ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-blue-700 border-dashed rounded-full animate-spin-slow"></div>
                  </div>
                  <h1 className="font-semibold text-xl tracking-wide">BhimConnect</h1>
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="text-blue-100 hover:text-white transition-colors active:scale-95 border-none outline-none">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="text-blue-100 hover:text-white relative transition-colors active:scale-95 border-none outline-none">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full border border-blue-700"></span>
                  </button>
                  <Link to="/profile" className="text-blue-100 hover:text-white transition-colors active:scale-95">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-400">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <button 
                  onClick={() => navigate(-1)} 
                  className="p-2 -ml-2 rounded-full text-blue-50 active:bg-blue-600 transition-colors flex items-center justify-center w-10 h-10 border-none outline-none"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="font-bold text-lg text-white tracking-wide absolute left-1/2 -translate-x-1/2 w-3/5 text-center truncate">
                  {title}
                </h1>
                <button 
                  onClick={() => navigate('/home')} 
                  className="p-2 -mr-2 rounded-full text-blue-50 active:bg-blue-600 transition-colors flex items-center justify-center w-10 h-10 border-none outline-none"
                >
                  <Home className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="w-full flex-1 bg-gray-50 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
