import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

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
            Passionate about building for the web
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            With over 5 years of experience in web development, I specialize in creating
            beautiful, functional, and user-friendly websites. My approach combines
            technical expertise with creative problem-solving to deliver exceptional
            digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
