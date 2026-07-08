import { motion } from 'motion/react';

const stats = [
  { id: 1, name: 'Expected Participants', value: '500+' },
  { id: 2, name: 'Countries Represented', value: '20+' },
  { id: 3, name: 'Research Papers', value: '150+' },
  { id: 4, name: 'Keynote Speakers', value: '15+' },
];

export function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-5xl font-semibold tracking-tight text-navy-900 sm:text-6xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
