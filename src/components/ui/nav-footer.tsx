import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Nav() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10 ml-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 relative transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.svg"
                alt="ProtoWeave Logo"
                width={32}
                height={32}
                className="w-full h-full"
              />
            </div>
            <span className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              ProtoWeave
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <div className="relative group flex items-center">
              <button
                className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white group-hover:text-gray-900 dark:group-hover:text-white"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-50 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <Link
                    href="/asset-intelligence"
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Asset Intelligence & Tagging
                  </Link>
                  <Link
                    href="/design-to-code"
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Workflow Integration
                  </Link>
                  <Link
                    href="/content-automation"
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Content Automation & QA
                  </Link>
                  <Link
                    href="/personalization"
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Personalization & Optimization
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/enterprise"
              className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Enterprise
            </Link>
            <Link
              href="/signup"
              className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-950 dark:border-gray-800">
      <div className="container flex flex-col gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 items-center justify-center gap-4 md:justify-start">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ProtoWeave. All rights reserved.
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 md:justify-end">
          <Link
            href="/terms"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
