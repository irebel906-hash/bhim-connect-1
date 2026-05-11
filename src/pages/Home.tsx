import { motion } from 'motion/react';
import { BookOpen, Briefcase, Heart, Building2, Landmark, PhoneCall } from 'lucide-react';
import { Link } from 'react-router';

function FeatureCard({ to, icon: Icon, title, subtitle, gradient }: any) {
  return (
    <Link to={to} className="block active:scale-95 transition-transform">
      <div className={`rounded-3xl p-5 flex flex-col justify-between h-40 ${gradient} shadow-md border border-white/20 relative overflow-hidden group`}>
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-110 transition-transform"></div>
        <div className="bg-white/20 w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-sm">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-white text-base leading-tight drop-shadow-sm">{title}</h3>
          <p className="text-white/80 text-xs mt-1 font-medium">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-full pb-8">
      {/* Trending News Section */}
      <div className="bg-white px-4 pt-6 pb-8 shadow-sm rounded-b-[2.5rem] relative z-10 border-b border-gray-100">
        <div className="flex justify-between items-center mb-4 pl-1">
          <div>
            <h2 className="text-gray-900 font-extrabold text-xl">Top News</h2>
            <p className="text-gray-500 text-sm font-medium">Updates from the community</p>
          </div>
          <Link to="/news" className="text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full text-sm font-bold active:scale-95 transition-transform">
            View All
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group block rounded-3xl overflow-hidden shadow-lg shadow-blue-900/5 ring-1 ring-black/5"
        >
          <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop" alt="News" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="text-[10px] font-bold text-blue-900 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Featured</span>
            <h3 className="font-bold text-white mt-1 text-xl leading-tight drop-shadow-md">Annual Buddhist Convention Planned for Next Month</h3>
            <p className="text-gray-200 text-sm mt-2 line-clamp-1 font-medium drop-shadow">Thousands are expected to gather to discuss community progress and education.</p>
          </div>
        </motion.div>
      </div>

      <div className="px-5 mt-8">
        <h2 className="text-gray-900 font-extrabold text-xl mb-1 pl-1">Services</h2>
        <p className="text-gray-500 text-sm font-medium mb-5 pl-1">Explore community resources</p>
        
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard 
            to="/matrimonial" 
            icon={Heart} 
            title="Matrimonial" 
            subtitle="Find your partner"
            gradient="bg-gradient-to-br from-rose-500 to-rose-600" 
          />
          <FeatureCard 
            to="/business" 
            icon={Building2} 
            title="Business" 
            subtitle="Community directory"
            gradient="bg-gradient-to-br from-emerald-500 to-emerald-600" 
          />
          <FeatureCard 
            to="/books" 
            icon={BookOpen} 
            title="Books" 
            subtitle="Literature & PDFs"
            gradient="bg-gradient-to-br from-indigo-500 to-indigo-600" 
          />
          <FeatureCard 
            to="/schemes" 
            icon={Landmark} 
            title="Govt Schemes" 
            subtitle="Explore support"
            gradient="bg-gradient-to-br from-amber-500 to-amber-600" 
          />
          <FeatureCard 
            to="/jobs" 
            icon={Briefcase} 
            title="Jobs" 
            subtitle="Career opportunities"
            gradient="bg-gradient-to-br from-blue-500 to-blue-600" 
          />
          <FeatureCard 
            to="/help" 
            icon={PhoneCall} 
            title="Help" 
            subtitle="Emergency contacts"
            gradient="bg-gradient-to-br from-red-500 to-red-600" 
          />
        </div>
      </div>
    </div>
  );
}
