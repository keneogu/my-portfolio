"use client";
import { useState } from "react";
import DarkMode from "./DarkMode";
import NavItems from "./NavItems";
import { SiEsphome } from "react-icons/si";
import { FaBookJournalWhills } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import Container from "./Container";
import { BarIcon, XMarkIcon } from "../common/IconifyIcons";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full items-center left-0 py-4 md:mx-2 sm:mx-auto bg-transparent absolute">
      <div className={`${navbarOpen && "sticky top-0"}`}>
        <Container>
          <div className="flex flex-wrap justify-between">
            <NavItems title="KenePortfolio" address="/" Icon={SiEsphome} />
            <div className="block md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded"
                >
                  <BarIcon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
            <div className="hidden md:flex px-4">
              <NavItems
                title="About"
                address="#About"
                Icon={FaBookJournalWhills}
              />
              <NavItems
                title="Projects"
                address="#projects"
                Icon={GrProjects}
              />
              <DarkMode />
            </div>
          </div>
          {navbarOpen ? (
            <ul className="w-full flex flex-col py-4 items-center bg-slate-400 z-30">
              <span className="pb-3">
                <NavItems
                  title="About"
                  address="#About"
                  Icon={FaBookJournalWhills}
                />
              </span>
              <span>
                <NavItems
                  title="Projects"
                  address="#projects"
                  Icon={GrProjects}
                />
              </span>
            </ul>
          ) : null}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
