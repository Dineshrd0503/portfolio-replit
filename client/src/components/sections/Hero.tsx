import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-primary/10 hover:ring-primary/20 mb-8"
        >
          <span className="text-muted-foreground">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Professional headshot"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            John Doe
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View my work</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
