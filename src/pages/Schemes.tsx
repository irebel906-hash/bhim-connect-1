import { motion } from 'motion/react';
import { Award, GraduationCap, Banknote, Users, CheckCircle, Clock } from 'lucide-react';

export default function Schemes() {
  const schemes = [
    {
      id: 1,
      title: "Post Matric Scholarship",
      department: "Social Justice Dept, Maharashtra",
      category: "Education",
      eligibility: "SC/ST/OBC students pursuing higher education.",
      benefits: "100% tuition fee waiver + maintenance allowance.",
      documents: "Caste Certificate, Income Cert, Aadhar, Bank Passbook",
      deadline: "30 Nov 2026",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-700"
    },
    {
      id: 2,
      title: "Mahajyoti UPSC Training",
      department: "Mahajyoti Institute",
      category: "Training",
      eligibility: "Graduates preparing for UPSC Civil Services.",
      benefits: "Free coaching in Delhi + ₹10,000/month stipend.",
      documents: "Degree Cert, Caste Cert, Domicile",
      deadline: "15 Aug 2026",
      icon: Award,
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      id: 3,
      title: "Stand-Up India Loan",
      department: "Govt of India",
      category: "Business",
      eligibility: "SC/ST and Women entrepreneurs.",
      benefits: "Bank loans between ₹10 lakh and ₹1 crore.",
      documents: "Project Report, KYC, Caste Cert",
      deadline: "Open All Year",
      icon: Banknote,
      color: "bg-orange-50 text-orange-700"
    },
    {
      id: 4,
      title: "Swadhar Yojana",
      department: "Social Justice Dept",
      category: "Accommodation",
      eligibility: "SC students studying in cities without hostel allocation.",
      benefits: "₹51,000/year for food and accommodation.",
      documents: "College ID, Rent Agreement, Caste Cert",
      deadline: "31 Oct 2026",
      icon: Users,
      color: "bg-purple-50 text-purple-700"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-8 p-4">
      <div className="mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <h2 className="text-2xl font-bold mb-2">Empower Yourself</h2>
        <p className="text-amber-100 text-sm">Discover and apply for government schemes crafted for community upliftment and education.</p>
        <div className="mt-4 flex gap-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">Scholarships</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">Business Loans</span>
        </div>
      </div>

      <div className="space-y-4">
        {schemes.map((scheme) => {
          const Icon = scheme.icon;
          return (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-4 border-b border-gray-50">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${scheme.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{scheme.title}</h3>
                    <p className="text-xs text-gray-500 font-medium mt-1">{scheme.department}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-3 bg-gray-50/50">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Eligibility</p>
                  <p className="text-sm text-gray-700">{scheme.eligibility}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Benefits</p>
                  <p className="text-sm text-green-700 font-medium bg-green-50 px-3 py-2 rounded-lg border border-green-100">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    {scheme.benefits}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Req. Documents</p>
                  <p className="text-xs text-gray-600">{scheme.documents}</p>
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-1 text-red-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold">Ends: {scheme.deadline}</span>
                </div>
                <button className="bg-blue-700 text-white font-bold text-sm px-6 py-2 rounded-xl active:scale-95 transition-transform shadow-md shadow-blue-700/20">
                  Apply Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
