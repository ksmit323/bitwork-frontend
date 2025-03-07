"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, Lightbulb } from "lucide-react"

export function Resources() {
  const resources = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Crypto Freelancing Guide",
      description: "Learn how to thrive as a freelancer in the crypto space with our comprehensive guide.",
      link: "#",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Smart Contract Best Practices",
      description: "Discover the latest security standards and best practices for writing secure smart contracts.",
      link: "#",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Web3 Project Ideas",
      description: "Explore innovative project ideas and opportunities in the rapidly evolving Web3 ecosystem.",
      link: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Crypto Community & Resources</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Stay updated with the latest trends and insights in the crypto space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{resource.icon}</div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-1" asChild>
                    <a href={resource.link}>
                      Read More <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

