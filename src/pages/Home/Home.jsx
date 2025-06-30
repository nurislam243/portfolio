import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-[#4A148C] to-[#6A1B9A] flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-white"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Hi, I'm <span className="text-green-500">Md. Nur Islam</span>
          </h1>
          <h2 className="text-3xl font-semibold mt-3">
            Crafting seamless web experiences with{' '}
            <span className="underline decoration-green-500">MERN Stack magic</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg font-light">
            Passionate about building user-friendly, responsive, and accessible web interfaces that make a difference.
          </p>

          {/* Buttons and Socials */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="bg-green-500 text-white font-semibold px-8 py-3 rounded shadow-lg hover:bg-green-600 transition"
            >
              Download Resume
            </a>

            <div className="flex space-x-8 text-3xl">
              {/* social icons */}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex-1"
        >
          <img
            src="https://via.placeholder.com/350"
            alt="Nur Islam"
            className="rounded-full shadow-2xl mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
