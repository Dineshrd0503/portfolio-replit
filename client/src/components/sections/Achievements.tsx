import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Book, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "JAVASPRING 2K24 Workshop Organizer",
    description: "Organised One Day Workshop on Huge Scale level apps using Spring Boot and Spring By IEEE SB at NBKRIST"
  },
  {
    icon: Code,
    title: "Team Leadership",
    description: "Team Leader of JAVA Programming Group Of IEEE SB NBKIRST"
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Solved Over 200 Coding Questions and attained a peak contest rating of 2888 on CodingNinjas"
  },
  {
    icon: Book,
    title: "NPTEL Certifications",
    description: "Completed MOOC Courses On C Programming and Ethical Hacking, strengthening Programming and networks knowledge"
  },
  {
    icon: Award,
    title: "Java Certification",
    description: "Certified Intermediate Core Java developer by Udemy"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Achievements</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Accomplishments & Recognition
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mx-auto mt-16 max-w-2xl space-y-8"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.title} variants={fadeIn}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-primary/10">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
