import React from 'react';
import { User, Mail, Send } from 'lucide-react'; // Optional: npm install lucide-react

const ContactUs = () => {
    return (
        <div className='min-h-0 bg-blue-400 flex flex-col items-center justify-center p-4 md:p-10'>
            {/* Header */}
            <h1 className='text-4xl md:text-6xl text-white font-extrabold mb-10 tracking-tight'>
                Contact Us
            </h1>

            {/* Main Card Container */}
            <div className='bg-white w-full max-w-5xl rounded-4xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2'>
                
                {/* Left Section: Illustration (Hidden/Stacked) */}
                <div className='bg-blue-900 flex flex-col items-center justify-center p-10 relative overflow-hidden'>
                    {/* Decorative Shapes  */}
                    <div className="absolute top-10 left-10 text-yellow-400 font-bold text-2xl rotate-12">△</div>
                    <div className="absolute bottom-20 right-10 text-yellow-400 font-bold text-2xl -rotate-12">△</div>
                    <div className="absolute top-20 right-20 text-red-500 text-xl">●</div>
                    <div className="absolute bottom-40 left-20 text-green-500 text-xl">●</div>

                    {/* Main Illustration/Logo */}
                    <div className="relative z-10 flex flex-col items-center">
                        <img 
                            src="src/Logo/CIS-Community-Main-Logo.png" 
                            alt="Illustration" 
                            className="w-64 h-auto drop-shadow-xl"
                        />
                        <p className="mt-6 text-gray-400 font-medium text-center max-w-xs">
                            We're here to help and answer any question you might have.
                        </p>
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className='p-8 md:p-16 bg-white'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-8'>Get in touch</h2>
                    
                    <form onSubmit={(e) => {e.preventDefault()}} className="space-y-4">
                        {/* Name Input */}
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                                type="text" 
                                placeholder="Name"
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 outline-none focus:ring-3 focus:ring-blue-900 focus:shadow-[0_0_80px_5px_rgba(30,58,138,0.4)] transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                                type="email" 
                                placeholder="Email"
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 outline-none focus:ring-3 focus:ring-blue-900 focus:shadow-[0_0_80px_5px_rgba(30,58,138,0.4)] transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Message Input */}
                        <textarea 
                            rows="5"
                            placeholder="Message..."
                            className="w-full p-5 rounded-2xl bg-gray-100 outline-none focus:ring-3 focus:ring-blue-900 focus:shadow-[0_0_80px_5px_rgba(30,58,138,0.4)] transition-all placeholder:text-gray-400 resize-none"
                        ></textarea>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-200 transform transition-all active:scale-95 flex items-center justify-center gap-2"
                            
                        >
                            Send
                        </button>
                        
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;