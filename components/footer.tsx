import Link from "next/link"
import { Wallet } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">BitWork</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Streamlined crypto freelancing. No connects. No KYC. Just work.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-muted-foreground hover:text-primary">
                  Find Developers
                </Link>
              </li>
              <li>
                <Link href="/post-project" className="text-muted-foreground hover:text-primary">
                  Post a Project
                </Link>
              </li>
              <li>
                <Link href="/create-profile" className="text-muted-foreground hover:text-primary">
                  Create Developer Profile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-primary">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BitWork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

