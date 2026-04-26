"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { DiscordIcon } from "@/assests/svgs";
import Link from "next/link";
import { LINKS, LandingPageLinks } from "./config";
import { Sidebar } from "./Sidebar";

const Header = () => {
  return (
    <div className="px-4 relative z-50" style={{ backgroundColor: "#0B2F1F" }}>
      <div className="middle h-[60px] flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center gap-1">
            <Image src="/Logo's/logo.png" alt="Cosmos Market" width={40} height={40} />
            <span className="text-xl font-bold PoseidonFont">Cosmos Market</span>
          </div>
        </Link>
        <div className="hidden md:flex flex-row items-center gap-2">
          {LandingPageLinks?.map((link, index) => (
            <Link key={link.name} href={link.link}>
              <div
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: '1.5rem',
                  fontSize: '0.875rem',
                  transition: 'background 0.3s ease, color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    'linear-gradient(90deg, #34A350, #1a5228)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'inherit';
                }}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </div>
        <Link className="hidden md:flex" href={LINKS.DISCORD} target="_blank">
          <Button variant={"brand"}>
            <DiscordIcon className="text-white h-[18px] w-[18px]" />
            <span className="ml-2">Discord</span>
          </Button>
        </Link>
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;