import { motion } from 'motion/react';
import { ArrowRight, FileText, MapPin, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-royal-600/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
          Submissions Open until October 15th
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
        >
          International Conference on <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-royal-600 to-purple-500">
            Advanced Computing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Join global researchers and industry leaders to explore the frontiers of AI, Cybersecurity, and Quantum Computing. Shaping the future, together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-white text-navy-900 hover:bg-gray-100 transition-all"
          >
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#submit"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10"
          >
            <FileText className="w-5 h-5 mr-2" />
            Submit Paper
          </a>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Calendar className="w-6 h-6 text-royal-600" />
            <div className="text-left">
              <p className="text-sm text-gray-400">Date</p>
              <p className="font-medium text-white">November 24 - 26, 2027</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-6 h-6 text-purple-500" />
            <div className="text-left">
              <p className="text-sm text-gray-400">Venue</p>
              <p className="font-medium text-white">Tech Innovation Campus</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
