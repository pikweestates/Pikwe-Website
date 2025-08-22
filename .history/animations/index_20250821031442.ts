import { Variants } from "framer-motion";


export const ImageModalAnim: Variants = {
  initial: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", opacity: 0},

  enter: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  }
};

export const sideBarAnim: Variants = {
  initial: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
    opacity: 0,
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
};

export const CookieAnim: Variants = {
  initial: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    opacity: 0,
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
};

export const agendaAnimation: Variants = {
  initial: { opacity: 0 },

  enter: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.3, 0, 0.7, 0] },
  },
};