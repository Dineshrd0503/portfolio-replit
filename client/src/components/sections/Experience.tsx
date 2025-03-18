import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Journey
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto mt-16 max-w-2xl"
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Java Developer Intern</h3>
                      <p className="text-muted-foreground">Nexus Logic Technologies</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">Remote</span>
                      <p className="text-sm text-muted-foreground mt-1">July 2024 - August 2024</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Designed and developed an Inventory Management System using Java, SQL, JDBC</li>
                    <li>Developed the backend using MYSQL Database and JDBC to handle the CRUD operations</li>
                    <li>Connected the backend to a MySQL database using JDBC enabling faster retrievals and included the Prepared Statements to prevent SQL Injection attacks</li>
                    <li>Developed the project using Incremental model to take the feedback from the users and to add the new features, ensuring robust and smooth deployment through close collaboration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}