import { motion } from 'motion/react';
import { Brain, Shield, Cloud, Cpu, Database, Network } from 'lucide-react';

const themes = [
  {
    name: 'Artificial Intelligence',
    description: 'Machine Learning, Deep Learning, NLP, and Cognitive Computing applications.',
    icon: Brain,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    name: 'Cyber Security',
    description: 'Cryptography, Network Security, Blockchain, and Privacy Preserving techniques.',
    icon: Shield,
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    name: 'Cloud Computing',
    description: 'Edge Computing, Serverless Architecture, and Distributed Systems.',
    icon: Cloud,
    color: 'bg-sky-500/10 text-sky-600',
  },
  {
    name: 'Quantum Computing',
    description: 'Quantum Algorithms, Error Correction, and Quantum Cryptography.',
    icon: Cpu,
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    name: 'Data Science',
    description: 'Big Data Analytics, Predictive Modeling, and Data Visualization.',
    icon: Database,
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    name: 'IoT & Networks',
    description: '5G/6G Networks, Sensor Networks, and Smart City Applications.',
    icon: Network,
    color: 'bg-rose-500/10 text-rose-600',
  },
];

export function Themes() {
  return (
    <div id="themes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-royal-600">Tracks</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Conference Sub-themes
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Submit your research papers to one of our designated technical tracks.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md group"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${theme.color} transition-transform group-hover:scale-110`}>
                  <theme.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-navy-900">{theme.name}</h3>
                <p className="text-gray-600 leading-relaxed">{theme.description}</p>
                
                {/* Decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
