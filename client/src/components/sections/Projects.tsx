import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Management Tool",
    description: "Collaborative project management application with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tech: ["TypeScript", "Express", "Socket.IO"],
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management and monitoring",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    tech: ["React", "D3.js", "TailwindCSS"],
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with workout planning",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tech: ["React Native", "GraphQL", "MongoDB"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
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
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
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
