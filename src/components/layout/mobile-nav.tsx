"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { MenuIcon } from "lucide-react";
import { NAV_LINKS } from "@/src/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 pt-16">
        <motion.nav
          className="flex flex-col gap-6 text-lg"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {NAV_LINKS.map((link) => (
            <motion.div key={link.href} variants={item}>
              <SheetClose asChild>
                <Link
                  href={link.href}
                  className="flex items-center py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </SheetClose>
            </motion.div>
          ))}
          <motion.div variants={item} className="pt-4">
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </SheetClose>
          </motion.div>
        </motion.nav>
      </SheetContent>
    </Sheet>
  );
}