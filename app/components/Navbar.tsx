"use client";
import { useState } from "react";
import DarkMode from "./DarkMode";
import NavItems from "./NavItems";
import { SiEsphome } from "react-icons/si";
import { FaBookJournalWhills } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import Container from "./Container";
import { BarIcon, XMarkIcon } from "../common/IconifyIcons";
import { BsStars } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa6";
import { BsClipboardDataFill } from "react-icons/bs";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full items-center left-0 py-4 md:mx-2 sm:mx-auto bg-transparent absolute z-10">
      <div className={`${navbarOpen && "sticky top-0"}`}>
        <Container>
          <div className="flex flex-wrap justify-between">
            <NavItems title="KenePortfolio" address="/" Icon={SiEsphome} />
            <div className="flex md:hidden">
              <div className="mt-1">
                <DarkMode />
              </div>
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 mb-1"
                >
                  <BarIcon className="h-5 w-5" size={28} />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 mb-1"
                >
                  <XMarkIcon className="h-5 w-5" size={28} />
                </button>
              )}
            </div>
            <div className="hidden md:flex px-4">
              <NavItems title="My Skills" address="#skills" Icon={BsStars} />
              <NavItems
                title="Education"
                address="#education"
                Icon={FaUserGraduate}
              />
              <NavItems
                title="About"
                address="#about"
                Icon={FaBookJournalWhills}
              />
              <NavItems
                title="Contact"
                address="#contact"
                Icon={BsClipboardDataFill}
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
            <div className="w-full md:hidden bg-[rgba(226,232,240,.9)] dark:bg-[rgba(29,29,29,.9)]">
              <ul className="w-full flex flex-col py-4 items-center">
                <span className="pb-3">
                  <NavItems
                    title="My Skills"
                    address="#skills"
                    Icon={BsStars}
                  />
                </span>
                <span className="pb-3">
                  <NavItems
                    title="Education"
                    address="#education"
                    Icon={FaUserGraduate}
                  />
                </span>
                <span className="pb-3">
                  <NavItems
                    title="About"
                    address="#about"
                    Icon={FaBookJournalWhills}
                  />
                </span>
                <span className="pb-3">
                  <NavItems
                    title="Contact"
                    address="#contact"
                    Icon={BsClipboardDataFill}
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
            </div>
          ) : null}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
