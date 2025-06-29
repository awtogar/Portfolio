/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Aboutme = () => {
   return (
    <section className='my-32 bg-shade-100 text-shade-800 overflow-hidden'>
      <div className="absolute inset-0"></div>
      <div className='relative z-10 container mx-auto px-8 lg:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto justify-center flex items-center h-full"
        >
          <p className=' text-[7.5vw] uppercase text-center max-w-[50vw] leading-none'>
            The quick brown fox
            <br />
            <span className="text-slate-400">jumps over</span>
            <br />
            the lazy dog
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;
