import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, ArrowLeft, Send, School, Mail, Github, Linkedin, Hash, File, ImageUp, Contact } from 'lucide-react';

const Registerations = () => {
      const [step, setStep] = useState(0); // 0 = Selection, 1 = Form
      const [role, setRole] = useState(null); // 'student' or 'alumni'

      const selectRole = (selectedRole) => {
            setRole(selectedRole);
            setStep(1);
      };

      const goBack = () => {
            setStep(0);
      };

      const [formData, setFormData] = useState({ fullName: ""})

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form Submitted:', formData);
      };

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
                  <div className="w-full max-w-4xl relative overflow-hidden">

                        {/* STEP 0: Role Selection Cards */}
                        <div className={`transition-all duration-500 rounded-4xl h-200 md:h-100 ease-in-out flex flex-col items-center ${step === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute'}`}>
                              <h1 className="text-4xl font-black text-blue-900 mb-2">Welcome!</h1>
                              <p className="text-gray-500 mb-10 text-lg">Tell us who you are to get started</p>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                    {/* Student Card */}
                                    <div
                                          onClick={() => selectRole('student')}
                                          className="group cursor-pointer bg-white p-10 rounded-4xl shadow-xl border-2 border-transparent hover:border-blue-500 hover:shadow-2xl transition-all flex flex-col items-center text-center"
                                    >
                                          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <GraduationCap className="w-10 h-10 text-blue-600" />
                                          </div>
                                          <h3 className="text-2xl font-bold text-gray-800">I am a Student</h3>
                                          <p className="text-gray-500 mt-2">I want to enroll in current activity.</p>
                                    </div>

                                    {/* Alumni Card */}
                                    <div
                                          onClick={() => selectRole('alumni')}
                                          className="group cursor-pointer bg-white p-10 rounded-4xl shadow-xl border-2 border-transparent hover:border-blue-900 hover:shadow-2xl transition-all flex flex-col items-center text-center"
                                    >
                                          <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <Briefcase className="w-10 h-10 text-slate-800" />
                                          </div>
                                          <h3 className="text-2xl font-bold text-gray-800">I am an Alumnus</h3>
                                          <p className="text-gray-500 mt-2">I want to mentor and share experience.</p>
                                    </div>
                              </div>
                        </div>

                        {/* STEP 1: The Form (Slides in from Right) */}
                        <div className={`transition-all duration-500 ease-in-out bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 ${step === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'}`}>
                              {/* Back Button */}
                              <button onClick={goBack} className="flex items-center gap-2 text-gray-400 hover:text-blue-900 mb-6 transition-colors font-medium">
                                    <ArrowLeft className="w-4 h-4" /> Back
                              </button>

                              <h2 className="text-3xl font-black text-gray-800 mb-2">
                                    {role === 'student' ? 'Student Registration' : 'Alumni Registration'}
                              </h2>
                              <p className="text-gray-500 mb-8">Please provide your details to register yourself.</p>

                              <form onSubmit={handleSubmit} className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 space-x-2">
                                    <div className="relative">
                                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                          <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>

                                    <div className="relative">
                                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                          <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>

                                    {/* Conditional Field: University/Company */}
                                    <div className="relative">
                                          {role === 'student' ? <School className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" /> : <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />}
                                          <input type="text" placeholder={role === 'student' ? "University Name" : "Current Company"} className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>

                                    <div className="relative">
                                          <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                          <input type="text" placeholder={role === 'student' ? "Seat No (e.g CS-24117)" : "Batch (e.g 2024)"} className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>

                                    <div className="relative">
                                          <Contact className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                          <input type="text" placeholder="Contact No" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>


                                    {/* Conditional Field: Github/LinkedIn */}
                                    <div className="relative col-span-1 md:col-span-2">
                                          {role === 'student' ? <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" /> : <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />}
                                          <input type="url" placeholder={role === 'student' ? "Github URL" : "LinkedIn URL"} pattern={role === 'student' ? "https://.*linkedin.com/in/.*" : "https://.*github.com/.*"} className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>

                                    {/* Conditional Field: IDCard/Pic */}
                                    <div className="relative col-span-1 md:col-span-2">
                                          {role === 'student' ? <File className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" /> : <ImageUp className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />}
                                          <input type={role === 'student' ? "file" : "file"} placeholder='your Pic' className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>

                                    <button className="col-span-1 md:col-span-2 bg-blue-900 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-2 group mt-4">
                                          <span>Register as {role === 'student' ? 'Student' : 'Alumni'}</span>
                                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                              </form>
                        </div>

                  </div>
            </div>
      );
};

export default Registerations;