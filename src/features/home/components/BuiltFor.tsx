import { motion } from 'framer-motion'
import { businessTypes } from '@/features/home/data/business_types'

function BuiltFor() {
    return (
        <section className='border-y border-gray-100 border-gray-50/50 py-10'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='text-center text-sm font-medium text-gray-500'
                >
                    Built for businesses accross industries.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'
                >
                    {businessTypes.map((type) => (
                        <span key={type} className='text-sm font-semibold tracking-wide text-gray-400'>{type}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default BuiltFor