import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import nur from '../../assets/nurislam1.png'

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-primary/40 to-secondary/40 flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-white"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Hi, I'm <span className="text-secondary">Md. Nur Islam</span>
          </h1>
          <h2 className="text-3xl font-semibold mt-3">
            Crafting seamless web experiences with{' '}
            <span className="underline decoration-secondary">MERN Stack magic</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg font-light">
            Passionate about building user-friendly, responsive, and accessible web interfaces that make a difference.
          </p>

          {/* Buttons and Socials */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="btn btn-secondary btn-wide text-white font-semibold shadow-lg hover:shadow-xl"
            >
              Download Resume
            </a>

            <div className="flex space-x-8 text-3xl">
              <a
                href="https://github.com/nurislam243"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/md-nur-islam-360b372a0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex-1"
        >
          <div className="avatar mx-auto md:mx-0">
            <div className="w-60 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 shadow-lg">
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
