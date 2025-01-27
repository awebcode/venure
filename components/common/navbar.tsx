"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Bell } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="venure logo" width={120} height={40} />
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-sm font-medium text-gray-600">
              VENUE CONSULTATION
            </Button>
            <Button variant="ghost" className="text-sm font-medium text-gray-600">
              LIST YOUR VENUE
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden md:inline-flex text-sm font-medium text-gray-600"
          >
            THB
          </Button>

          <Button
            variant="ghost"
            size={"icon"}
            className="hidden md:inline-flex text-sm font-medium text-gray-600"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button className="bg-evenure-blue text-white hover:bg-blue-600">
            LOGIN / SIGN UP
          </Button>
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
                <Button variant="ghost" className="w-full justify-start">
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
