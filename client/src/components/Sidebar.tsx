import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  FaBandAid,
  FaBell,
  FaHome,
  FaMoneyBill,
  FaUser,
  FaWifi,
} from "react-icons/fa";

import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaShield,
} from "react-icons/fa6";

import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({
  isOpen,
  setIsOpen,
}: SidebarProps) {

  const navLinks = [
    {
      name: "Home",
      to: "/",
      icon: <FaHome />,
    },
    {
      name: "Users",
      to: "/users",
      icon: <FaUser />,
    },
    {
      name: "Payments",
      to: "/payments",
      icon: <FaMoneyBill />,
    },
    {
      name: "Packages",
      to: "/packages",
      icon: <FaWifi />,
    },
    {
      name: "Reports",
      to: "/reports",
      icon: <FaShield />,
    },
    {
      name: "Notifications",
      to: "/notifications",
      icon: <FaBell />,
    },
    {
      name: "Support Ticket",
      to: "/support",
      icon: <FaBandAid />,
    },
  ];

  return (
    <section
      className={`
        fixed top-0 left-0 z-50
        h-screen bg-white/10 backdrop-blur-xl shadow-xl
        p-4 flex flex-col gap-4
        transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer transition duration-300 hover:scale-110 mb-4 relative self-end"
      >
        {isOpen ? (
          <FaCircleArrowLeft
            size={24}
            color="orange"
            className="absolute top-0 -right-3"
          />
        ) : (
          <FaCircleArrowRight
            size={24}
            color="orange"
            className="absolute top-0 -right-3"
          />
        )}
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2 mt-2">
        <img
          src={assets.logo}
          alt="ISP-logo"
          className={`w-6 h-6 ${isOpen ? "" : "relative left-2"}`}
        />

        {isOpen && (
          <h1 className="text-lg md:text-xl font-bold underline underline-offset-4 decoration-2 bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text whitespace-nowrap">
            Internet <span className="text-orange-400">Billing</span>
          </h1>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1">
        <ul className="flex flex-col gap-4">

          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `
                  flex items-center gap-4
                  text-base md:text-lg
                  font-serif
                  px-2 py-2
                  rounded-lg
                  transition-all duration-300
                  hover:scale-105
                  ${
                    isActive
                      ? "bg-orange-400 text-white shadow-lg"
                      : "bg-transparent hover:bg-orange-100"
                  }
                `
                }
              >
                <span className="text-xl">
                  {link.icon}
                </span>

                {isOpen && (
                  <span className="whitespace-nowrap">
                    {link.name}
                  </span>
                )}
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </section>
  );
}

export default Sidebar;