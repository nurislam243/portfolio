import { FaGithub, FaLinkedin,  FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialLink = () => {
    return (
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a href="https://github.com/nurislam243" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-black transition" />
        </a>
        <a href="https://linkedin.com/in/md-nur-islam-360b372a0/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-600 transition" />
        </a>
        <a href="https://www.facebook.com/nur.islam.568309/" target="_blank" rel="noreferrer">
          <FaFacebook className="hover:text-blue-500 transition" />
        </a>
        <a href="https://x.com/MdNurIslam55434" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-sky-400 transition" />
        </a>
      </div>
    );
};

export default SocialLink;