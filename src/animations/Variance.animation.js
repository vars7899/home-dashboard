// Animation for scale up or down || default --> "scale up"
export function alterScale(direction = "up") {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0.5, 1.05, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },

    exit: {
      opacity: 0,
    },
  };
}
