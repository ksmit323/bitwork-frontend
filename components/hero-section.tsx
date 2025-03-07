"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, Code, Briefcase } from "lucide-react"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("developer")

  return (
    <section className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Streamlined Crypto Freelancing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto">
            No Connects. No KYC. Just Work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto mb-12"
        >
          <Tabs defaultValue="developer" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="developer" className="text-base py-3">
                <Code className="mr-2 h-4 w-4" />
                I'm a Developer
              </TabsTrigger>
              <TabsTrigger value="employer" className="text-base py-3">
                <Briefcase className="mr-2 h-4 w-4" />
                I'm Hiring
              </TabsTrigger>
            </TabsList>
            <TabsContent value="developer" className="space-y-4">
              <h2 className="text-2xl font-bold">Find Crypto Projects That Match Your Skills</h2>
              <p className="text-muted-foreground">
                Browse a curated list of crypto projects, filter by blockchain and skillset, and get paid in crypto.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/projects">
                  <Button size="lg" className="gap-2">
                    Browse Projects <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="employer" className="space-y-4">
              <h2 className="text-2xl font-bold">Hire Top Crypto Talent Without The Hassle</h2>
              <p className="text-muted-foreground">
                Post your project or browse developer profiles to find the perfect match for your crypto project.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/post-project">
                  <Button size="lg" className="gap-2 mr-4">
                    Post a Project <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/developers">
                  <Button size="lg" variant="outline" className="gap-2">
                    Browse Developers <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Ethereum
          </div>
          <div className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            Solana
          </div>
          <div className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Polygon
          </div>
          <div className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            Bitcoin
          </div>
          <div className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            Avalanche
          </div>
        </motion.div>
      </div>
    </section>
  )
}

