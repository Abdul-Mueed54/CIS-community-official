import React, { useState } from 'react';
import { User, Mail, Send, GraduationCap, School, Hash } from 'lucide-react';

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        university: '',
        batch: '',
        department: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    setTimeout(() => {
        console.log('Form Submitted:', formData);
        setIsSubmitting(false)
        setIsSuccess(true)

        setTimeout(()=>{setIsSubmitting(false),5000},2000)

    })

    return (
        <div className="min-h-screen bg-blue-400 flex flex-col items-center justify-center p-6 md:p-12">
            <h1 className="text-4xl md:text-6xl text-white font-extrabold mb-10 tracking-tight">
                Contact Us
            </h1>

            <div className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Section: Branding */}
                <div className="hidden md:flex bg-blue-900 flex-col items-center justify-center p-10 relative overflow-hidden">
                    <div className="absolute top-10 left-10 text-yellow-400 font-bold text-2xl rotate-12 select-none">△</div>
                    <div className="absolute bottom-20 right-10 text-yellow-400 font-bold text-2xl -rotate-12 select-none">△</div>
                    <div className="absolute top-20 right-20 text-red-500 text-xl select-none">●</div>
                    <div className="absolute bottom-40 left-20 text-green-500 text-xl select-none">●</div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <img
                            src="src/Logo/CIS-Community-Main-Logo.png"
                            alt="CIS Logo"
                            className="w-64 h-auto drop-shadow-2xl mb-6"
                        />
                        <h3 className="text-white text-2xl font-bold mb-2">Contact the Community</h3>
                        <p className="text-blue-200 font-medium max-w-xs leading-relaxed">
                            Fill out your academic details and we'll get back to you shortly.
                        </p>
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className="p-8 md:p-12 bg-white">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in touch</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-transparent outline-none focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-transparent outline-none focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all"
                                required
                            />
                        </div>

                        {/* University Input */}
                        <div className="relative">
                            <School className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                name="university"
                                type="text"
                                placeholder="University"
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-transparent outline-none focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all"
                                required
                            />
                        </div>

                        {/* Batch & Department Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    name="batch"
                                    type="text"
                                    placeholder="Batch (e.g. 2024)"
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-transparent outline-none focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    name="department"
                                    type="text"
                                    placeholder="Department"
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-transparent outline-none focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Your Message..."
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-gray-50 border border-transparent outline-none focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all resize-none"
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                        >
                            <span>Send Message</span>
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;