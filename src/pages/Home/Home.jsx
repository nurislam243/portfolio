import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import nur from '../../assets/nurislam1.png';
import { FaDownload } from 'react-icons/fa';
import SocialLink from '../../components/Shared/SocialLink';
import { Typewriter } from 'react-simple-typewriter';

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
            Crafting seamless web experiences with <br /> {' '}
            <span className="text-primary font-bold">
              <Typewriter
                words={['MERN Stack', 'React.js', 'Tailwind CSS']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>{' '}
            magic
          </h2>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg font-light">
            Passionate about building user-friendly, responsive, and accessible web interfaces that make a difference.
          </p>

          {/* Buttons and Socials */}
          <div className="mt-8  flex items-center gap-6 justify-center md:justify-start">
            <div className="flex flex-col @min-[490px]:flex-row gap-4">              
              <div className="">
                <a
                  href="https://drive.google.com/file/d/1uQpwXBAV1hPAtFnyVCZYBb-pzG2_bGuQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 px-3 py-1.5 rounded justify-center  bg-primary items-center"
                >
                  <FaDownload></FaDownload> Resume
                </a>
              </div>

              <SocialLink style={`space-x-6 lg:space-x-7 text-2xl  @min-[490px]:text-3xl`}></SocialLink>
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
            <div className="w-[200px] @min-[308px]:w-[250px] @min-[370px]:w-[300px] h-[300px] @min-[308px]:h-[350px] @min-[370px]:h-[376px] mb-[60px] md:mb-0 shadow-primary shadow-lg border-primary border-l-9 border-b-9 border rounded-tl-[50px] rounded-br-[50px]">
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
