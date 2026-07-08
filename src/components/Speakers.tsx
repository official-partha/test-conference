import { motion } from 'motion/react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Professor of Computer Science',
    organization: 'Stanford University',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600',
    bio: 'Pioneering researcher in Artificial General Intelligence and neural network architectures.',
  },
  {
    name: 'Prof. James Wilson',
    role: 'Director of AI Lab',
    organization: 'MIT',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=600',
    bio: 'Leading expert in reinforcement learning and robotics with over 200 published papers.',
  },
  {
    name: 'Dr. Elena Rodriguez',
    role: 'Chief Data Scientist',
    organization: 'Quantum Tech Inc',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=600',
    bio: 'Specializes in quantum algorithms for large-scale data processing and cryptography.',
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    organization: 'CloudSystems',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600',
    bio: 'Architect behind next-generation distributed systems and edge computing frameworks.',
  }
];

export function Speakers() {
  return (
    <div id="speakers" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base/7 font-semibold text-royal-600">Guests</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Keynote Speakers
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Learn from the brightest minds shaping the future of technology and computing.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full ring-4 ring-gray-50 bg-gray-100">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-900">{speaker.name}</h3>
              <p className="text-sm font-medium text-royal-600 mb-2">{speaker.role}</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">{speaker.organization}</p>
              <p className="text-sm text-gray-600 line-clamp-3 mb-6">
                {speaker.bio}
              </p>
              <div className="flex gap-4 text-gray-400 mt-auto">
                <a href="#" className="hover:text-royal-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-royal-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-royal-600 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
