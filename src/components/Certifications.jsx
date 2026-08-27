import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const CertificationCard = ({ index, name, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-32 h-32 flex justify-center items-center">
      <img src={icon} alt={name} className="w-full h-full object-contain drop-shadow-lg" />
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My achievements</p>
        <h2 className={styles.sectionHeadTextLight}>Certifications.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.name} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, 'certifications');
