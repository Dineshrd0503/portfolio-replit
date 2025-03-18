import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Online Banking System",
    description: "Built a secure online banking system with transaction handling and ACID properties to prevent data corruption. Users can effortlessly access accounts and transfer funds securely.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
    tech: ["Java", "SQL", "JDBC", "MySQL"],
    date: "Nov 2024"
  },
  {
    title: "Hospital Management System",
    description: "Developed a comprehensive hospital management system for managing patients and doctor appointments. Implemented exclusive DBA privileges for administrative tasks.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    tech: ["Java", "JDBC", "SQL", "MySQL"],
    date: "Dec 2024"
  },
  {
    title: "Responsive GYM Website",
    description: "Created an engaging website showcasing gym infrastructure and trainers. Features a query section for user interactions and responsive design for all devices.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    tech: ["HTML", "CSS", "JavaScript"],
    date: "May 2024"
  },
  {
    title: "Online Examination System",
    description: "Developed an examination system for schools and universities. Utilized Core Java concepts like Map for student details and implemented a random module for test generation.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    tech: ["Core Java", "Data Structures"],
    date: "Sep 2024"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Work
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A showcase of my technical projects, demonstrating expertise in Java development,
            database management, and web technologies.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeIn}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <CardDescription className="mb-4 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
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