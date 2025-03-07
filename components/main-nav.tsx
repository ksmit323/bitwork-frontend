import Link from "next/link"
import { Wallet } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Wallet className="h-6 w-6 text-primary" />
        <span className="font-bold inline-block text-xl">BitWork</span>
      </Link>
      <nav className="flex gap-6">
        <Link
          href="/projects"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Projects
        </Link>
        <Link
          href="/developers"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Developers
        </Link>
        <Link
          href="/how-it-works"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          How It Works
        </Link>
      </nav>
    </div>
  )
}

