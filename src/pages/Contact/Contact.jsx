import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import contactAnimation from '../../assets/contactAnimation.json';
import Lottie from 'lottie-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-[100px] sm:pt-[120px] pb-[100px] sm:pb-[120px] bg-base-200 px-4 @min-[400px]:px-6 @min-[500px]:px-7 @min-[600px]:px-9 @min-[900px]:px-10 @min-[1100px]:px-[52px] @min-[1400px]:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-14">
          Contact Me
        </h2>


        <div className="bg-base-100 rounded-xl shadow-xl">
          <div className="flex justify-center">
            <Lottie className='w-[250px]' animationData={contactAnimation} loop={true} />
          </div>
          <div className="grid md:grid-cols-2 gap-10 py-4 px-3 @min-[318px]:p-4 @min-[360px]:p-8 border-t border-gray-800">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-secondary mt-1" />
                <div>
                  <h4 className="text-lg text-gray-400 font-semibold">Email</h4>
                  <p className="text-sm @min-[320px]:text-base text-base-content wrap-anywhere">mdnurislam15177@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl text-secondary mt-1" />
                <div>
                  <h4 className="text-lg text-gray-400 font-semibold">Phone</h4>
                  <p className="text-sm @min-[320px]:text-base text-base-content">+8801778249088</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaWhatsapp className="text-2xl text-secondary mt-1" />
                <div>
                  <h4 className="text-lg text-gray-400 font-semibold">WhatsApp</h4>
                  <p className="text-sm @min-[320px]:text-base text-base-content">+8801778249088</p>
                </div>
              </div>
            </div>

            {/* Contact Form (non-functional for now) */}
            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button className="btn btn-primary w-full mt-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
