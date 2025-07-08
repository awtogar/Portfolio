/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Aboutme = () => {
   return (
    <section className='my-32 bg-shade-100 text-shade-800 overflow-hidden'>
      {/* <div className="absolute inset-0"></div> */}
      <div className='relative z-[1] container mx-auto px-8 lg:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto justify-center flex items-center h-full"
        >
          <p className=' text-[5.5vw] uppercase text-center max-w-[60vw] leading-none'>
            it's just <span className='font-medium italic text-accent-100'>how</span>
            <br />
            <span className="text-shade-800"><span className='font-medium italic text-accent-100'>we</span> made it</span>
            <br />
            everything is
            <br />
            <span className="text-shade-800"><span className='italic text-accent-100'>come</span> and <span className='text-accent-100'>go</span></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;
