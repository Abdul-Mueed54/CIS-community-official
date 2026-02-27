import FadeIn from "../../Hooks/FadeIn";
import Avatar from "../UI/Avatar";
import { useNavigate } from "react-router-dom";
import { Users, Lightbulb, History, Trophy, ChevronRight } from "lucide-react";
import { STATS, LEADERSHIP, COMMUNITY } from "../../Database/Database";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* ── Hero: Logo + Dept Photo ── */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        {/* Department photo as background */}
        <img
          src={COMMUNITY.deptPhoto}
          alt="Department"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/70" />

        {/* Centered logo + name */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white px-6 text-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-black">{COMMUNITY.name}</h1>
            <p className="text-blue-200 mt-1 text-lg">{COMMUNITY.university} · Est. {COMMUNITY.founded}</p>
          </div>
          <p className="text-white/80 max-w-lg text-sm md:text-base">{COMMUNITY.tagline}</p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="w-full max-w-4xl mx-auto px-6 py-12">

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <FadeIn delay={0}>
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all h-full">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5 text-blue-900" />
              </div>
              <h2 className="text-xl font-black text-blue-900 mb-2">Our Mission</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{COMMUNITY.mission}</p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all h-full">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-5 h-5 text-blue-900" />
              </div>
              <h2 className="text-xl font-black text-blue-900 mb-2">Our Vision</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{COMMUNITY.vision}</p>
            </div>
          </FadeIn>
        </div>

        {/* History */}
        <FadeIn className="mb-10">
          <div className="bg-white rounded-2xl shadow-md p-6  transition-all">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <History className="w-5 h-5 text-blue-900" />
            </div>
            <h2 className="text-xl font-black text-blue-900 mb-2">Our Story</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{COMMUNITY.history}</p>
          </div>
        </FadeIn>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 80}>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center border-2 border-transparent hover:border-blue-500 transition-all w-40 md:w-55 cursor-pointer" onClick={() => { navigate(`${stat.navigate}`) }}>
                <p className="text-3xl font-black text-blue-900">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1 tracking-wide">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Leadership */}
        <FadeIn className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-900" />
            </div>
            <h2 className="text-xl font-black text-blue-900">Founders</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP.map((person, i) => (
            <FadeIn key={person.name} delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center border-2 border-transparent hover:border-blue-500 transition-all">
                <Avatar name={person.name} photo={person.photo} />
                <h3 className="text-lg font-black text-gray-800">{person.name}</h3>
                <p className="text-blue-900 font-medium text-sm mt-1">{person.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>

          <div className="flex justify-end mt-4">
            <button className=" group border-2 hover:border-blue-400 w-50 h-12 rounded-2xl bg-dblue font-black text-white p-2 transition-all cursor-pointer " onClick={() => { navigate('/teams') }}> Meet Our Team
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
