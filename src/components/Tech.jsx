import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Tech = () => {
  // Every BallCanvas opens its own WebGL context. Mobile browsers cap the
  // number of live contexts (~8) and silently drop the oldest ones, which
  // blanked the first few balls. Fall back to flat icons on small screens.
  const showBalls = useMediaQuery('(min-width: 640px)');

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {showBalls ? (
              <BallCanvas icon={technology.icon} />
            ) : (
              <div
                className="w-full h-full rounded-full bg-jetLight 
                  flex justify-center items-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  loading="lazy"
                  className="w-3/5 h-3/5 object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
