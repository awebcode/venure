"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Bell } from "lucide-react";
import Image from "next/image";
import { NavNotificationDropdown } from "./navbar_dropdown/nav-notification-dropdown";
import { LoginRegisterDropdown } from "./navbar_dropdown/nav-login-dropdown";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-primaryBlue text-primaryBlue-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/">
             <Image
            src="/logo.svg"
            alt="venue logo"
            width={120}
            height={40}
            className="cursor-pointer"
            />
            </Link>
        </div>

        {/* Everything else on the right */}
        <div className="flex items-center space-x-4">
          {/* Hidden on smaller screens */}
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-sm font-medium bg-white hover:bg-white/90 text-gray-600">
              VENUE CONSULTATION
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium bg-primaryDark text-primaryDark-foreground hover:bg-primaryDark/90 hover:text-white"
            >
              LIST YOUR VENUE
            </Button>
          </div>

          {/* THB */}
          <Button
            variant="ghost"
            className="hidden md:inline-flex text-sm font-medium text-gray-600"
          >
            THB
          </Button>

          {/* Dropdown Menu for Flag */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src="/nav_flag.png"
                alt="venue flag"
                width={40}
                height={40}
                className="cursor-pointer w-8 h-8 rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Thai</DropdownMenuItem>
              <DropdownMenuItem>Japanese</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="inline-flex text-sm font-medium text-gray-200"
              >
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <NavNotificationDropdown />
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Login/Sign Up */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-black hover:bg-primaryDark/90 hover:text-primaryDark-foreground">
                LOGIN / SIGN UP
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <LoginRegisterDropdown />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Button variant="ghost" className="w-full justify-start">
                  VENUE CONSULTATION
                </Button>
                <Button
                  variant="ghost"
                  className="w-full bg-primaryDark hover:bg-primaryDark/90 text-white justify-start"
                >
                  LIST YOUR VENUE
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  THB
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
