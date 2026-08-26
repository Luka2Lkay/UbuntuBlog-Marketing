import { motion } from "framer-motion"
import { features } from "@/features/home/data/platform_features"
import Technode from "@/features/home/components/platform_features/Technode";

function PlatformFeatures() {
  return (
    <section id="features" className="border-t border-gray-100 bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Features
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">Everything you need to manage business content.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            UbuntuBlog provides the content infrastructure businesses need
            without forcing them to rebuild their websites around a specific
            CMS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ backgroundColor: "#fafafa" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white p-7 transition-colors duration-300"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-gray-950 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 font-semibold text-gray-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{feature.description}</p>
              </motion.article>
            )

          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-950"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500">Build for flexibility</p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Your content should not dictate your technology.</h3>
              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                UbuntuBlog handles the content layer while your business
                remains free to build its website with React, Vue, Angular,
                or any other technology capable of consuming an API.
              </p>
            </div>

            <div className="relative flex min-h-70 items-center justify-center border-t border-white/10 p-8 lg:border-l lg:border-t-0">
              <div className="relative w-full max-w-sm">
                <Technode label="UbuntuBlog API" />
                <div className="mx-auto h-8 w-px bg-white/10" />

                <div className="grid grid-cols-3 gap-2">
                  <Technode label="React" small />
                  <Technode label="Angular" small />
                  <Technode label="Vue" small />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlatformFeatures