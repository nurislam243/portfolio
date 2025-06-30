import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200 py-20 px-6">
      <div className="max-w-7xl px-4 mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 bg-base-100 p-8 rounded-xl shadow-xl">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-secondary mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-700">mdnurislam15177@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-secondary mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-700">+8801778249088</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-2xl text-secondary mt-1" />
              <div>
                <h4 className="text-lg font-semibold">WhatsApp</h4>
                <p className="text-gray-700">+8801778249088</p>
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
    </section>
  );
};

export default Contact;
