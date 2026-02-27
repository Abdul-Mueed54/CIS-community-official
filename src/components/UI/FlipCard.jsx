import { useState } from "react";
import Avatar from "./Avatar";
import { Info, Linkedin, Github} from "lucide-react";

export default function FlipCard({ person }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="relative group perspective-1000 h-70 w-full cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center group-hover:border-blue-400 transition-all">
          <Avatar name={person.name} photo={person.photo} />
          <div className="mt-4">
            <h3 className="font-bold text-slate-900 text-lg leading-tight">{person.name}</h3>
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mt-1">{person.role}</p>
          </div>
          <Info className="w-4 h-4 text-slate-300 mt-4 group-hover:text-blue-400 transition-colors" />
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-blue-900 rounded-3xl p-6 shadow-xl flex flex-col items-center justify-center text-center border border-blue-800">
          <p className="text-blue-100 text-xs leading-relaxed line-clamp-4 mb-6 italic">"{person.bio}"</p>
          <div className="flex gap-4">
            <a href={person.linkedin} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href={person.github} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
              <Github className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}