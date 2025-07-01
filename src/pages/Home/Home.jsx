import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import nur from '../../assets/nurislam1.png'
import SocialLink from '../../components/Shared/SocialLink';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex pt-[120px] md:pt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl w-full px-4 @min-[400px]:px-6 @min-[500px]:px-7 @min-[600px]:px-9 @min-[900px]:px-10 @min-[1100px]:px-[52px] @min-[1400px]:px-0 mx-auto flex flex-col md:flex-row items-center gap-12 text-white -mt-20"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
            Hi, I'm <span className="text-primary">Nur Islam</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
            Crafting seamless web experiences with{' '}
            <span className="bold"><span className='text-primary'>MERN</span> Stack </span>magic
          </h2>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg font-light">
            Passionate about building user-friendly, responsive, and accessible web interfaces that make a difference.
          </p>

          {/* Buttons and Socials */}
          <div className="mt-8  flex items-center gap-6 justify-center md:justify-start">
            <div className="">
              <SocialLink></SocialLink>
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary btn-wide text-white font-semibold shadow-lg hover:shadow-xl"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex-1 flex justify-end"
        >
          <div className="avatar mx-auto md:mx-0">
            <div className="w-[300px] h-[376px] shadow-primary shadow-lg border-primary border-l-9 border-b-9 border rounded-tl-[50px] rounded-br-[50px]">
              <img
                src={nur}
                alt="Md Nur Islam"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
