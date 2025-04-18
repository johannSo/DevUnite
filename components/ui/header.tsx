'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background shadow-md dark:border-b dark:border-gray-700">
      <div className="w-full px-5 shadow-sm dark:shadow-gray-700/20">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Logo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-700" asChild>
                    <Link href="/#">Home</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-700" asChild>
                    <Link href="/#/impressum">Impressum</Link>
                  </Button>
                </li>
              </ul>
            </nav>
            <Button
              variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-700"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Change theme</span>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-700" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="pt-2 pb-4">
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-700 w-full justify-start" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/">Home</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-700 w-full justify-start" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/impressum">Impressum</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-700 w-full justify-start"
                    onClick={() => {
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                      setIsMenuOpen(false)
                    }}
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2" />
                    Change theme
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}