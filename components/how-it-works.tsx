"use client"

import { motion } from "framer-motion"
import { FileText, Users, Code, CreditCard } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Post or Browse",
      description: "Post your project or browse available opportunities",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Connect",
      description: "Connect directly with developers or employers",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Work",
      description: "Collaborate and deliver quality work",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Get Paid in Crypto",
      description: "Receive payment in Solana USDC or other cryptocurrencies",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            BitWork simplifies crypto freelancing with a straightforward process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

