import React from "react";
import { SiJavascript, SiPython, SiC, SiReact, SiHtml5, SiCss, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillsData = [
    { name: "JavaScript", icon: <SiJavascript size={32} className="text-[#F7DF1E] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "Python", icon: <SiPython size={32} className="text-[#3776AB] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "Java", icon: <FaJava size={32} className="text-[#5382A1] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "C", icon: <SiC size={32} className="text-[#A8B9CC] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "React", icon: <SiReact size={32} className="text-[#61DAFB] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "HTML5", icon: <SiHtml5 size={32} className="text-[#E34F26] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "CSS3", icon: <SiCss size={32} className="text-[#1572B6] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={32} className="text-[#06B6D4] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "Node.js", icon: <SiNodedotjs size={32} className="text-[#339933] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "Express", icon: <SiExpress size={32} className="text-ink transition-transform duration-300 group-hover:scale-110" /> },
    { name: "MongoDB", icon: <SiMongodb size={32} className="text-[#47A248] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "MySQL", icon: <SiMysql size={32} className="text-[#4479A1] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "Git", icon: <SiGit size={32} className="text-[#F05032] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "VS Code", icon: <VscVscode size={32} className="text-[#007ACC] transition-transform duration-300 group-hover:scale-110" /> },
    { name: "Postman", icon: <SiPostman size={32} className="text-[#FF6C37] transition-transform duration-300 group-hover:scale-110" /> },
  ];

  return (
    <section id="skills" className="pt-24 pb-20 bg-page">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <div className="mb-10 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 cursor-default">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="uppercase tracking-[0.18em] text-[0.68rem]">Tech stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mb-8 opacity-80"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
            >
              <div className="h-16 w-16 bg-surface-hover rounded-full flex items-center justify-center mb-4 border border-border shadow-inner group-hover:bg-primary/10 transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="text-text font-medium text-sm group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
