import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "N.B.K.R Institute Of Science & Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sep. 2022 – May 2026",
    grade: "9.1/10 CGPA",
    location: "Tirupathi, Andhra Pradesh"
  },
  {
    school: "Narayana Junior College",
    degree: "Higher Secondary",
    period: "June 2020 – May 2022",
    grade: "94%",
    location: "Nellore, Andhra Pradesh"
  },
  {
    school: "Little Angels School",
    degree: "Secondary",
    period: "Jun. 2018 – May 2019",
    grade: "10/10 GPA",
    location: "Nellore, Andhra Pradesh"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">About Me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Education & Background
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto mt-16 max-w-2xl space-y-8"
        >
          {education.map((edu) => (
            <Card key={edu.school} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{edu.school}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="font-medium text-primary">{edu.grade}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}