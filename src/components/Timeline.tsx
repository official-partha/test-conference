import { motion } from 'motion/react';

const timeline = [
  {
    name: 'Abstract Submission',
    date: 'August 15, 2027',
    description: 'Deadline for submitting the abstract of your research paper.',
    status: 'past',
  },
  {
    name: 'Full Paper Submission',
    date: 'October 15, 2027',
    description: 'Final deadline for full length paper submission.',
    status: 'current',
  },
  {
    name: 'Acceptance Notification',
    date: 'November 1, 2027',
    description: 'Authors will be notified about the status of their papers.',
    status: 'upcoming',
  },
  {
    name: 'Camera Ready Paper',
    date: 'November 10, 2027',
    description: 'Final version of the paper formatted as per guidelines.',
    status: 'upcoming',
  },
  {
    name: 'Conference Dates',
    date: 'November 24-26, 2027',
    description: 'The main event takes place.',
    status: 'upcoming',
  },
];

export function Timeline() {
  return (
    <div id="timeline" className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base/7 font-semibold text-royal-600">Schedule</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Important Deadlines
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative border-l border-gray-200 ml-3 md:ml-0 md:border-none">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between group"
                  >
                    {/* Desktop layout: Left side */}
                    <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-8' : 'order-last pl-8'}`}>
                      <h3 className="text-xl font-bold text-navy-900">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-royal-600">{item.date}</p>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>

                    {/* Node */}
                    <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 flex h-3 w-3 items-center justify-center rounded-full bg-white ring-4 ring-[#FAFAFA]">
                      <div className={`h-2.5 w-2.5 rounded-full ${
                        item.status === 'past' ? 'bg-gray-400' :
                        item.status === 'current' ? 'bg-royal-600 animate-pulse' :
                        'bg-gray-200 border-2 border-gray-300'
                      }`} />
                    </div>

                    {/* Mobile Layout (and Desktop right side placeholder) */}
                    <div className={`pl-8 md:hidden`}>
                      <h3 className="text-xl font-bold text-navy-900">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-royal-600">{item.date}</p>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
