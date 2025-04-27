import React from 'react';
import { FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








const Contact = () => {

    const handleGmailSend = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const subject = `Message from ${name}`;
        const body = `${message}`;

        // Gmail compose link
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shettymithesh4@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Gmail compose in new tab
        window.open(mailtoLink, "_blank");

        toast.success("Opening Gmail to send your message...");

        e.target.reset();
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-950 via-violet-950 to-purple-900 text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 text-center">Contact Me</h2>

            <form
                onSubmit={handleGmailSend}
                className="w-full max-w-xl bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-lg border border-white/20 space-y-6"
            >

                <div>
                    <label className="block text-lg mb-2">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-lg mb-2">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-lg mb-2">Your Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        required
                        className="w-full p-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-purple-800 hover:bg-purple-700 rounded-lg text-xl font-semibold transition-all"
                >
                    Send Message
                </button>
            </form>
            <ToastContainer />



            <div className="mt-16 w-full max-w-2xl text-center space-y-8 text-xl md:text-2xl font-medium">
                <div className="flex items-center justify-center gap-4">
                    <FaPhoneAlt className="text-3xl" />
                    <span>+91 7755926055</span>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <MdEmail className="text-4xl" />
                    <a
                        href="mailto:shettymithesh4@gmail.com?subject=Let's%20Connect&body=Hey%20Mithesh,%20I%20checked%20out%20your%20portfolio.%20Let's%20connect!"
                        className="hover:underline"
                    >
                        shettymithesh4@gmail.com
                    </a>

                </div>

                <div className="flex items-center justify-center gap-8 mt-6 text-4xl">
                    <a
                        href="https://www.linkedin.com/in/mithesh-shetty-36660a267/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Gameywood"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
};



export default Contact;
