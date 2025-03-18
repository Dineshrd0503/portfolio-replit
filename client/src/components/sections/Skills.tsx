import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiPostgresql, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
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
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeIn}
                className="flex flex-col items-center"
              >
                <dt className="text-center">
                  <skill.icon className={`h-16 w-16 ${skill.color}`} />
                  <p className="mt-4 text-lg font-semibold leading-7">{skill.name}</p>
                </dt>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
