import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { DiJava, DiPython } from "react-icons/di";
import { SiSpringboot, SiMysql, SiGit, SiHtml5, SiIntellijidea, SiCplusplus } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: DiJava, color: "text-[#007396]" },
      { name: "Python", icon: DiPython, color: "text-[#3776AB]" },
      { name: "C", icon: SiCplusplus, color: "text-[#00599C]" },
    ]
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "HTML/CSS", icon: SiHtml5, color: "text-[#E34F26]" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "IntelliJ", icon: SiIntellijidea, color: "text-[#000000]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGit, color: "text-[#181717]" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Skills</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Expertise
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mx-auto mt-16 max-w-2xl space-y-16 sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="group hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <skill.icon className={`h-12 w-12 ${skill.color} group-hover:scale-110 transition-transform`} />
                      <p className="mt-4 font-medium">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}