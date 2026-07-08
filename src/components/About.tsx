import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      name: 'Global Networking',
      description: 'Connect with leading minds across academia and industry from over 20 countries.',
      icon: Users,
    },
    {
      name: 'Cutting-edge Research',
      description: 'Explore the latest advancements in AI, Data Science, and Cybersecurity.',
      icon: Lightbulb,
    },
    {
      name: 'Future Forward',
      description: 'Engage in workshops and panel discussions aimed at solving real-world challenges.',
      icon: Target,
    },
  ];

  return (
    <div id="about" className="overflow-hidden bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:grid text-center lg:text-left">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base/7 font-semibold text-royal-600"
              >
                About Conference
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-2 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl"
              >
                Shaping the Digital Frontier
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg/8 text-gray-600"
              >
                The International Conference on Advanced Computing serves as a premier platform for researchers, academicians, and industry professionals to present their latest findings and discuss future directions in computing technologies.
              </motion.p>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none text-left">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="relative pl-12"
                  >
                    <dt className="inline font-semibold text-navy-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-6 text-royal-600" />
                      {feature.name}.
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-end mt-16 lg:mt-0"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gray-100 overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              {/* Decorative elements representing abstract tech */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 via-royal-600 to-purple-500 opacity-90" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
