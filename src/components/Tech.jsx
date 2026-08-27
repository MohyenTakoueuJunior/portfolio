import { motion } from 'framer-motion';
import { BallsCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Tech = () => {
  const isLg = useMediaQuery('(min-width: 1025px)');
  const isSm = useMediaQuery('(min-width: 640px)');
  const columns = isLg ? 6 : isSm ? 4 : 3;
  const rows = Math.ceil(technologies.length / columns);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div
        className="mt-14 w-full max-w-[1000px] mx-auto"
        style={{ aspectRatio: `${columns} / ${rows}` }}>
        <BallsCanvas technologies={technologies} columns={columns} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
