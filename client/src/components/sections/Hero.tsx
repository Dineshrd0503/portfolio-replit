import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";

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
            B.Tech Student in Computer Science & Engineering
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Rajasekhar Dinesh
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Java Developer with a passion for building scalable applications and solving complex problems
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <Button asChild className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="gap-2 hover:bg-primary/5"
            >
              <a 
                href="https://drive.google.com/file/d/12QrQWiIBIfuWlHRHSe-PrPuWyBYT8nFa/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 items-center">
            <Button variant="outline" size="icon" asChild>
              <a href="http://Github.com/Dineshrd0503" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:ananddinesh00399@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
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