"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ArrowUpRight, Wallet, Star, MapPin, MessageSquare } from "lucide-react"

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock developer data
  const developers = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Senior Solidity Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "DeFi"],
      rate: "120 USDC/hr",
      location: "Remote (GMT-5)",
      availability: "Available now",
      featured: true,
      bio: "Experienced Solidity developer with 5+ years building DeFi protocols and NFT marketplaces. Previously worked at Aave and Uniswap.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Full-Stack Blockchain Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      skills: ["React", "Node.js", "Solidity", "Web3.js"],
      rate: "100 USDC/hr",
      location: "Remote (GMT+8)",
      availability: "Available in 2 weeks",
      featured: true,
      bio: "Full-stack developer specializing in blockchain applications. Built multiple DEXs and wallet interfaces with seamless UX.",
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      title: "Rust & Solana Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      skills: ["Rust", "Solana", "Anchor", "TypeScript"],
      rate: "130 USDC/hr",
      location: "Remote (GMT-3)",
      availability: "Available now",
      featured: false,
      bio: "Solana ecosystem expert with experience building high-performance programs and integrating with wallets and other protocols.",
    },
    {
      id: 4,
      name: "Aisha Patel",
      title: "Frontend DApp Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      skills: ["React", "TypeScript", "ethers.js", "UI/UX"],
      rate: "90 USDC/hr",
      location: "Remote (GMT+5:30)",
      availability: "Available now",
      featured: false,
      bio: "Frontend specialist focused on creating beautiful, intuitive interfaces for decentralized applications with a focus on accessibility.",
    },
  ]

  const filteredDevelopers = developers.filter(
    (developer) =>
      developer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      developer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      developer.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">BitWork</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link href="/developers" className="text-sm font-medium underline underline-offset-4">
              Developers
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container px-4 md:px-6 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">Browse Developers</h1>
              <p className="text-muted-foreground">Find the perfect talent for your crypto project</p>
            </div>
            <div className="flex gap-2">
              <Link href="/create-profile">
                <Button>Create Developer Profile</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
            {/* Filters sidebar */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Filters
                </h3>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Skills</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="solidity-skill" className="rounded text-primary" />
                      <label htmlFor="solidity-skill" className="text-sm">
                        Solidity
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="rust-skill" className="rounded text-primary" />
                      <label htmlFor="rust-skill" className="text-sm">
                        Rust
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="react-skill" className="rounded text-primary" />
                      <label htmlFor="react-skill" className="text-sm">
                        React
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="typescript-skill" className="rounded text-primary" />
                      <label htmlFor="typescript-skill" className="text-sm">
                        TypeScript
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Availability</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="available-now" className="rounded text-primary" />
                      <label htmlFor="available-now" className="text-sm">
                        Available now
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="available-soon" className="rounded text-primary" />
                      <label htmlFor="available-soon" className="text-sm">
                        Available within 2 weeks
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Hourly Rate</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="rate-low" className="rounded text-primary" />
                      <label htmlFor="rate-low" className="text-sm">
                        Under 80 USDC
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="rate-medium" className="rounded text-primary" />
                      <label htmlFor="rate-medium" className="text-sm">
                        80-120 USDC
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="rate-high" className="rounded text-primary" />
                      <label htmlFor="rate-high" className="text-sm">
                        120+ USDC
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developers list */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search developers..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                    <TabsTrigger value="available">Available Now</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid gap-4">
                {filteredDevelopers.map((developer) => (
                  <Card key={developer.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex gap-4">
                        <img
                          src={developer.avatar || "/placeholder.svg"}
                          alt={developer.name}
                          className="rounded-full h-16 w-16 object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold flex items-center gap-2">
                                {developer.name}
                                {developer.featured && (
                                  <Badge variant="secondary" className="ml-2">
                                    <Star className="h-3 w-3 mr-1 fill-current" /> Featured
                                  </Badge>
                                )}
                              </h3>
                              <p className="text-muted-foreground">{developer.title}</p>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                developer.availability === "Available now"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  : ""
                              }
                            >
                              {developer.availability}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {developer.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{developer.bio}</p>
                      <div className="flex flex-wrap gap-4 mt-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Wallet className="h-4 w-4 text-green-500" />
                          <span className="font-medium">{developer.rate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-blue-500" />
                          <span>{developer.location}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="text-sm text-muted-foreground">Payment accepted: Solana USDC</div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <MessageSquare className="h-3 w-3" /> Message
                        </Button>
                        <Button size="sm" className="gap-1">
                          Hire <ArrowUpRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

