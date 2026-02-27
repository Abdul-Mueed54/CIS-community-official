import { useState } from "react";
import { Award, ChevronRight, Users } from "lucide-react";
import FadeIn from "../../Hooks/FadeIn";
import MemberRow from "../UI/MemberRow.jsx";
import FlipCard from "../UI/FlipCard";
import { EXECUTIVES, TEAMS } from "../../Database/Database.jsx";

export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState("tech");
  return (
    <div className="min-h-screen bg-[#FDFDFD] py-24 px-6 font-sans">


      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h1 className="text-5xl font-black text-blue-900 tracking-tight mb-4">Our Teams</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            The visionary leaders and dedicated members behind the CIS Community ecosystem.
          </p>
        </FadeIn>

        {/* EXECUTIVES SECTION */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12 text-blue-600">
            <h2 className="text-sm font-bold uppercase tracking-[0.25em]">Executive Board</h2>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXECUTIVES.map((person, i) => (
              <FadeIn key={i} delay={i * 100}>
                <FlipCard person={person} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* DEPARTMENT SECTION */}
        <section className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Sidebar Navigation */}
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Departments</h3>
              <div className="space-y-3">
                {Object.keys(TEAMS).map((id) => (
                  <button
                    key={id}
                    onClick={() => setActiveTeam(id)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl font-bold transition-all ${activeTeam === id ? "bg-blue-600 text-white shadow-xl shadow-blue-200" : "bg-white text-slate-500 hover:bg-white/80 border border-slate-100"
                      }`}
                  >
                    {TEAMS[id].name}
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
              <FadeIn key={activeTeam}>
                <div className="bg-white rounded-4xl p-8 shadow-sm border border-slate-200/60 min-h-125 flex flex-col">

                  {/* HIERARCHY: Lead & Co-Leads */}
                  <div className="mb-10 space-y-3">
                    {/* Primary Lead */}
                    <div className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                      <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                        <Award size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-black text-blue-600 tracking-widest">{TEAMS[activeTeam].lead.role}</p>
                        <h4 className="text-xl font-black text-slate-900">{TEAMS[activeTeam].lead.name}</h4>
                      </div>
                    </div>

                    {/* Co-Leads Array Mapping */}
                    {TEAMS[activeTeam].coleads && TEAMS[activeTeam].coleads.length > 0 && (
                      <div className="space-y-2 ml-8">
                        {TEAMS[activeTeam].coleads.map((colead, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 border-dashed"
                          >
                            <Users size={16} className="text-slate-400 ml-1" />
                            <div>
                              <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">{colead.role}</p>
                              <h5 className="text-sm font-bold text-slate-700">{colead.name}</h5>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Member List */}
                  <div className="grow flex flex-col">
                    <div className="flex items-center justify-between px-4 mb-4">
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Active Members</p>
                      <span className="text-xs font-bold text-slate-300">{TEAMS[activeTeam].members.length} members</span>
                    </div>

                    {/* The Scrollable Area */}
                    <div className="max-h-72 overflow-y-auto pr-4 custom-scrollbar space-y-1">
                      {TEAMS[activeTeam].members.map((m, i) => (
                        <MemberRow key={i} member={m} />
                      ))}
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}