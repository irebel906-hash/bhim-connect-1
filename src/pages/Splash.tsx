import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex bg-blue-700 min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-500">
           {/* Placeholder for Ashoka Chakra or Buddhist symbol */}
          <div className="w-16 h-16 rounded-full border-4 border-blue-700 border-dashed animate-spin-slow"></div>
        </div>
        <h1 className="text-4xl font-bold text-white tracking-wider">BhimConnect</h1>
        <p className="text-yellow-500 mt-2 font-medium tracking-wide">United By Ideology</p>
      </motion.div>
    </div>
  );
}
