import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
      tl.from(container, 1, {
        xPercent: -100,
        ease: "power2.out",
      });

      tl.from(image, 1, {
        xPercent: 100,
        scale: 1,
        delay: -1,
      });
    });
  });
}

export function useTextAnimations() {
  useGSAP(() => {
    const staggerAmount1 = 0.05,
      delayValue1 = 0.5,
      animatedTextElements1 = document.querySelectorAll(".text-anime-style-1");

    animatedTextElements1.forEach((element) => {
      const animationSplitText = new SplitText(element, {
        type: "chars, words",
      });
      gsap.from(animationSplitText.words, {
        duration: 1,
        delay: delayValue1,
        x: 20,
        autoAlpha: 0,
        stagger: staggerAmount1,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });

    const animatedTextElements3 = document.querySelectorAll(
      ".text-anime-style-3",
    );

    const staggerAmount2 = 0.03,
      translateXValue = 20,
      delayValue2 = 0.1,
      easeType = "power2.out",
      animatedTextElements2 = document.querySelectorAll(".text-anime-style-2");

    animatedTextElements2.forEach((element) => {
      const animationSplitText2 = new SplitText(element, {
        type: "chars, words",
      });
      gsap.from(animationSplitText2.chars, {
        duration: 1,
        delay: delayValue2,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount2,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });

    animatedTextElements3.forEach(
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
