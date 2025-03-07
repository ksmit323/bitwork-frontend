"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "BitWork has completely transformed how I find crypto projects. No more wasting money on connects or dealing with KYC. Just pure work and crypto payments.",
      author: "Alex Chen",
      role: "Solidity Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As a project founder, finding qualified crypto developers used to be a nightmare. BitWork made it simple to connect with pre-vetted talent who understand blockchain.",
      author: "Sarah Johnson",
      role: "DeFi Protocol Founder",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "Getting paid in USDC directly to my wallet is a game-changer. No more waiting for bank transfers or dealing with currency conversion fees.",
      author: "Michael Rodriguez",
      role: "Full-Stack Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Join the growing community of crypto freelancers and employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="flex-1 text-muted-foreground mb-6">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

