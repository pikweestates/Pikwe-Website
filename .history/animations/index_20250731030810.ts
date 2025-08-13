export const sideBarAnimation = {
  initial: { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },

  enter: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
};