"use client";

import Link from "next/link";
import React from "react";
import { LINKS, NOTIFICATION } from "./config";
import { Bell, ExternalLink } from "lucide-react";

const showNotification = NOTIFICATION.showNotification;
const notificationText = NOTIFICATION.notificationText;
const notificationLink = NOTIFICATION.notificationLink;

const TopNotification = () => {
  return (
    showNotification && (
      <Link href={notificationLink} target="_blank" className="block">
        <div 
          className="relative overflow-hidden text-center text-sm py-3 px-4 transition-all duration-300 hover:opacity-90"
          style={{ 
            background: "linear-gradient(90deg, #34A350, #1a5228, #34A350)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s ease-in-out infinite"
          }}
        >
          <div className="flex items-center justify-center gap-2 text-white font-medium">
            <Bell size={16} className="animate-pulse" />
            <span>{notificationText}</span>
            <ExternalLink size={14} className="opacity-70" />
          </div>
          <style jsx>{`
            @keyframes shimmer {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
        </div>
      </Link>
    )
  );
};

export default TopNotification;
