import { Linkedin, Github } from "lucide-react";

export default function MemberRow({ member }) {
  return (
    <div className="group flex items-center justify-between p-4 border-b border-slate-50 hover:bg-blue-50/40 transition-colors rounded-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs">
          {member.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
          <p className="text-slate-400 text-[10px] uppercase font-medium tracking-wider">{member.role} • Batch {member.batch}</p>
        </div>
      </div>
      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
        <a href={member.linkedin} className="text-slate-300 hover:text-blue-600 transition-colors"><Linkedin size={16} /></a>
        <a href={member.github} className="text-slate-300 hover:text-slate-900 transition-colors"><Github size={16} /></a>
      </div>
    </div>
  );
}
