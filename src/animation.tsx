import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

export function useRevealAnimation() {
  useGSAP(() => {
    const containers = document.querySelectorAll(".reveal");
    containers.forEach((container) => {
      const image = container.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });

      tl.set(container, {
        autoAlpha: 1,
      });

      tl.from(
        container,
        {
          xPercent: 100,
          ease: "power2.out",
        },
      ).duration(2);

      tl.from(
        image,
        {
          xPercent: 0,
          scale: 1,
          ease: "power2.out",
        },
      )
        .duration(2)
        .delay(-1);
    });
  });
}

export function useTextAnimations() {
  useGSAP(() => {
    const animatedTextElements = document.querySelectorAll(".text-anime");

    animatedTextElements.forEach(
      (element: Element & { split?: SplitText; animation?: unknown }) => {
        element["split"] = new SplitText(element, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });
        gsap.set(element, { perspective: 400 });

        gsap.set(element["split"].chars, {
          opacity: 0,
          x: "50",
        });

        element["animation"] = gsap.to(element["split"].chars, {
          scrollTrigger: { trigger: element, start: "top 90%" },
          x: "0",
          y: "0",
          rotateX: "0",
          opacity: 1,
          duration: 1,
          ease: "back.out",
          stagger: 0.02,
        });
      },
    );
  });
}
