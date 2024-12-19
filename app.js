import { animate, scroll } from motion;

const projects = document.querySelectorAll(".project-item")

animate(projects,
  element,
  { rotate: 90 },
  { type: "spring", stiffness: 300 }
);


document.querySelectorAll("section > div").forEach((item) => {
    scroll(animate(item, { opacity: [0, 1, 1, 0] }, { ease: "linear" }), {
      target: item,
      offset: ["start end", "end end", "start start", "end start"],
    });
  });

  //console.log();