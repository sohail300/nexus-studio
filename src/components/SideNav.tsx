import React from "react";
import { motion } from "framer-motion";
import FlipText from "./FlipText";
import UnderLineText from "./ui/UnderLineText";

const socialLinks = [
  {
    label: "GitHub",
    link: "https://github.com/sohail300/",
  },
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/md-sohail-ansari-b51201278/",
  },
  {
    label: "X",
    link: "https://x.com/sohail_twts/",
  }
];

const menuItems = [
  {
    label: "What we do",
    link: "/#what-we-do",
  },
  {
    label: "About us",
    link: "/#about-us",
  },
  {
    label: "Projects",
    link: "/#projects",
  },

  {
    label: "Design Inspo",
    link: "/#design-inspiration",
  },
  {
    label: "Contacts",
    link: "/#contact",
  },
];

const SideNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {/* Overlay for closing SideNav when clicking outside */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${
          isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {isOpen && (
        <h1
          className="text-3xl md:text-2xl px-7 md:px-12 pt-7 md:pt-6 fixed text-black md:text-white font-semibold z-60 duration-1000 transition-all ease-in-out"
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          Nexus Studio
        </h1>
      )}

      {/* Side Navigation Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full md:w-1/2 w-full bg-white text-black shadow-lg flex flex-col items-center justify-center gap-6 z-40 transition-opacity duration-700"
      >
        <div className="md:px-20 md:pt-36 md:pb-16 px-12 pt-56 pb-24 w-full h-full flex flex-col">
          <motion.div
            className="flex transition-opacity duration-700"
            transition={{ type: "", duration: 0.6, ease: "easeInOut" }}
          >
            <div className="h-full w-1/2 md:visible md:flex flex-col hidden">
              <h1 className="text-sm text-black/30 font-light-regular pb-12">
                Social media
              </h1>
              <div className="text-base font-light-regular flex flex-col">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FlipText href={link.link} target="_blank" className="pb-4 w-fit">{link.label}</FlipText>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col h-full w-1/2">
              <h1 className="text-lg md:text-sm text-black/30 font-light-regular pb-8 md:pb-12">
                Menu
              </h1>
              <div className="text-5xl font-light-regular flex flex-col tracking-tighter">
                {menuItems.map((item: { label: string, link: string }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FlipText href={item.link} className="pb-6 md:pb-4 w-fit">{item.label}</FlipText>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col h-full justify-end">
            <h1 className="text-xl md:text-sm text-black/30 font-light-regular pb-4">
              Get in touch
            </h1>
            <div className="flex text-base md:text-xl">
              <UnderLineText href="mailto:sohailatwork10@gmail.com" target="_blank" className="w-1/2">sohailatwork10@gmail.com</UnderLineText>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideNav;
