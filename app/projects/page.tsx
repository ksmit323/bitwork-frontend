"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  ArrowUpRight,
  EclipseIcon as Ethereum,
  Bitcoin,
  Wallet,
  Clock,
  DollarSign,
  Star,
} from "lucide-react"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "DeFi Dashboard Frontend Developer",
      description:
        "Looking for a React developer to build a modern DeFi dashboard with real-time data visualization and wallet integration.",
      blockchain: "Ethereum",
      skills: ["React", "TypeScript", "Web3.js"],
      budget: "5,000 USDC",
      duration: "4 weeks",
      postedAt: "2 days ago",
      featured: true,
    },
    {
      id: 2,
      title: "Smart Contract Developer for NFT Marketplace",
      description:
        "Need an experienced Solidity developer to create and audit smart contracts for our upcoming NFT marketplace.",
      blockchain: "Ethereum",
      skills: ["Solidity", "ERC-721", "OpenZeppelin"],
      budget: "8,000 USDC",
      duration: "6 weeks",
      postedAt: "1 day ago",
      featured: true,
    },
    {
      id: 3,
      title: "Solana Program Developer",
      description:
        "Looking for a Rust developer to build a Solana program for our DeFi protocol. Experience with Anchor framework required.",
      blockchain: "Solana",
      skills: ["Rust", "Anchor", "Solana"],
      budget: "10,000 USDC",
      duration: "8 weeks",
      postedAt: "3 days ago",
      featured: false,
    },
    {
      id: 4,
      title: "Full-Stack Developer for Crypto Exchange",
      description:
        "Seeking a full-stack developer to help build our crypto exchange platform with a focus on performance and security.",
      blockchain: "Multiple",
      skills: ["React", "Node.js", "PostgreSQL", "Redis"],
      budget: "12,000 USDC",
      duration: "3 months",
      postedAt: "5 days ago",
      featured: false,
    },
  ]

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
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
            <Link href="/projects" className="text-sm font-medium underline underline-offset-4">
              Projects
            </Link>
            <Link
              href="/developers"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
              <h1 className="text-3xl font-bold tracking-tighter">Browse Projects</h1>
              <p className="text-muted-foreground">Find crypto projects that match your skills</p>
            </div>
            <div className="flex gap-2">
              <Link href="/post-project">
                <Button>Post a Project</Button>
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
                  <h4 className="text-sm font-medium">Blockchain</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="ethereum" className="rounded text-primary" />
                      <label htmlFor="ethereum" className="text-sm flex items-center gap-1">
                        <Ethereum className="h-3 w-3" /> Ethereum
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="solana" className="rounded text-primary" />
                      <label htmlFor="solana" className="text-sm">
                        Solana
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="bitcoin" className="rounded text-primary" />
                      <label htmlFor="bitcoin" className="text-sm flex items-center gap-1">
                        <Bitcoin className="h-3 w-3" /> Bitcoin
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="polygon" className="rounded text-primary" />
                      <label htmlFor="polygon" className="text-sm">
                        Polygon
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Skills</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="react" className="rounded text-primary" />
                      <label htmlFor="react" className="text-sm">
                        React
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="solidity" className="rounded text-primary" />
                      <label htmlFor="solidity" className="text-sm">
                        Solidity
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="rust" className="rounded text-primary" />
                      <label htmlFor="rust" className="text-sm">
                        Rust
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="typescript" className="rounded text-primary" />
                      <label htmlFor="typescript" className="text-sm">
                        TypeScript
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Project Duration</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="short" className="rounded text-primary" />
                      <label htmlFor="short" className="text-sm">
                        Less than 1 month
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="medium" className="rounded text-primary" />
                      <label htmlFor="medium" className="text-sm">
                        1-3 months
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="long" className="rounded text-primary" />
                      <label htmlFor="long" className="text-sm">
                        3+ months
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects list */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid gap-4">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            {project.title}
                            {project.featured && (
                              <Badge variant="secondary" className="ml-2">
                                <Star className="h-3 w-3 mr-1 fill-current" /> Featured
                              </Badge>
                            )}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              {project.blockchain === "Ethereum" ? (
                                <Ethereum className="h-3 w-3" />
                              ) : project.blockchain === "Bitcoin" ? (
                                <Bitcoin className="h-3 w-3" />
                              ) : (
                                <></>
                              )}
                              {project.blockchain}
                            </Badge>
                            {project.skills.slice(0, 3).map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                            {project.skills.length > 3 && (
                              <Badge variant="secondary">+{project.skills.length - 3}</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {project.postedAt}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-4 mt-4 text-sm">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          <span className="font-medium">{project.budget}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="text-sm text-muted-foreground">Payment: Solana USDC</div>
                      <Button size="sm" className="gap-1">
                        Apply <ArrowUpRight className="h-3 w-3" />
                      </Button>
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

