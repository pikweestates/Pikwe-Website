// "use client";

// import React, {
//   useRef,
//   ReactNode,
//   ReactElement,
//   cloneElement,
//   Children,
// } from "react";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// interface CopyProps {
//   children: ReactNode;
//   animateOnScroll?: boolean;
//   delay?: number;
// }

// const Copy = ({ children, animateOnScroll = true, delay = 0 }: CopyProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Correctly type these as arrays
//   const elementRef = useRef<HTMLElement[]>([]);
//   const splitRef = useRef<SplitText[]>([]);
//   const lines = useRef<HTMLElement[]>([]);

//   useGSAP(
//     () => {
//       if (!containerRef.current) return;

//       splitRef.current = [];
//       elementRef.current = [];
//       lines.current = [];

//       let elements: HTMLElement[] = [];
//       if (containerRef.current.hasAttribute("data-copy-wrapper")) {
//         elements = Array.from(containerRef.current.children) as HTMLElement[];
//       } else {
//         elements = [containerRef.current];
//       }

//       elements.forEach((element) => {
//         elementRef.current.push(element);

//         const split = new SplitText(element, {
//           type: "lines",
//           mask: "lines",
//           linesClass: "line++",
//         });

//         splitRef.current.push(split);

//         const computedStyle = window.getComputedStyle(element);
//         const textIndent = computedStyle.textIndent;

//         if (textIndent && textIndent !== "0px") {
//           if (split.lines.length > 0) {
//             (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
//           }
//           element.style.textIndent = "0";
//         }

//         lines.current.push(...(split.lines as HTMLElement[]));
//       });

//       gsap.set(lines.current, { y: "100%" });

//       const animationProps = {
//         y: "0%",
//         duration: 1,
//         stagger: 0.1,
//         ease: "power4.out",
//         delay: delay,
//       };

//       if (animateOnScroll) {
//         gsap.to(lines.current, {
//           ...animationProps,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 75%",
//             once: true,
//           },
//         });
//       } else {
//         gsap.to(lines.current, animationProps);
//       }

//       return () => {
//         splitRef.current.forEach((split) => {
//           split?.revert();
//         });
//       };
//     },
//     { scope: containerRef, dependencies: [animateOnScroll, delay] }
//   );

//   // Fix the cloneElement type issue by narrowing to ReactElement
//   if (Children.count(children) === 1 && React.isValidElement(children)) {
//     return cloneElement(children as ReactElement<any>, {
//       ref: containerRef,
//     });
//   }

//   return (
//     <div ref={containerRef} data-copy-wrapper="true">
//       {children}
//     </div>
//   );
// };

// export default Copy;












// "use client";

// import React, {
//   useRef,
//   ReactNode,
//   ReactElement,
//   cloneElement,
//   Children,
//   useEffect,
// } from "react";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// interface CopyProps {
//   children: ReactNode;
//   animateOnScroll?: boolean;
//   delay?: number;
//   animationFinished?: boolean; // NEW optional prop
// }

// const Copy = ({
//   children,
//   animateOnScroll = true,
//   delay = 0,
//   animationFinished,
// }: CopyProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const elementRef = useRef<HTMLElement[]>([]);
//   const splitRef = useRef<SplitText[]>([]);
//   const lines = useRef<HTMLElement[]>([]);
//   const animationStarted = useRef(false); // to avoid re-running

//   const startAnimation = () => {
//     if (animationStarted.current || !containerRef.current) return;
//     animationStarted.current = true;

//     splitRef.current = [];
//     elementRef.current = [];
//     lines.current = [];

//     let elements: HTMLElement[] = [];
//     if (containerRef.current.hasAttribute("data-copy-wrapper")) {
//       elements = Array.from(containerRef.current.children) as HTMLElement[];
//     } else {
//       elements = [containerRef.current];
//     }

//     elements.forEach((element) => {
//       elementRef.current.push(element);

//       const split = new SplitText(element, {
//         type: "lines",
//         mask: "lines",
//         linesClass: "line++",
//       });

//       splitRef.current.push(split);

//       const computedStyle = window.getComputedStyle(element);
//       const textIndent = computedStyle.textIndent;

//       if (textIndent && textIndent !== "0px") {
//         if (split.lines.length > 0) {
//           (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
//         }
//         element.style.textIndent = "0";
//       }

//       lines.current.push(...(split.lines as HTMLElement[]));
//     });

//     gsap.set(lines.current, { y: "100%" });

//     const animationProps = {
//       y: "0%",
//       duration: 1,
//       stagger: 0.1,
//       ease: "power4.out",
//       delay: delay,
//     };

//     if (animateOnScroll) {
//       gsap.to(lines.current, {
//         ...animationProps,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 75%",
//           once: true,
//         },
//       });
//     } else {
//       gsap.to(lines.current, animationProps);
//     }
//   };

//   // Initial mount: If animationFinished is undefined, run immediately
//   useGSAP(() => {
//     if (animationFinished === undefined) {
//       startAnimation();
//     }
//     return () => {
//       splitRef.current.forEach((split) => split?.revert());
//     };
//   }, { scope: containerRef, dependencies: [animateOnScroll, delay] });

//   // Watch for animationFinished turning true
//   useEffect(() => {
//     if (animationFinished === true) {
//       startAnimation();
//     }
//   }, [animationFinished]);

//   if (Children.count(children) === 1 && React.isValidElement(children)) {
//     return cloneElement(children as ReactElement<any>, {
//       ref: containerRef,
//     });
//   }

//   return (
//     <div ref={containerRef} data-copy-wrapper="true">
//       {children}
//     </div>
//   );
// };

// export default Copy;

"use client";

import React, {
  useRef,
  ReactNode,
  ReactElement,
  cloneElement,
  Children,
  useEffect,
  useState,
} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  /** If provided: block animation until this becomes true */
  animationFinished?: boolean;
}

const Copy = ({
  children,
  animateOnScroll = true,
  delay = 0,
  animationFinished,
}: CopyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  const animationStarted = useRef(false);

  // Hide on first paint to avoid unmasked flash
  const [hidden, setHidden] = useState(true);

  const startAnimation = () => {
    if (animationStarted.current || !containerRef.current) return;
    animationStarted.current = true;

    splitRef.current = [];
    elementRef.current = [];
    lines.current = [];

    let elements: HTMLElement[] = [];
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children) as HTMLElement[];
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      elementRef.current.push(element);

      const split = new SplitText(element, {
        type: "lines",
        // ✅ Use a valid class name – GSAP will add "split-line" and "split-line1", "split-line2", ...
        linesClass: "split-line++",
        // (the "++" here means: add both "split-line" and a numbered class. In CSS, target ".split-line")
      });

      splitRef.current.push(split);

      // Keep text-indent visually identical after the split
      const computedStyle = window.getComputedStyle(element);
      const textIndent = computedStyle.textIndent;
      if (textIndent && textIndent !== "0px") {
        if (split.lines.length > 0) {
          (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
        }
        element.style.textIndent = "0";
      }

      lines.current.push(...(split.lines as HTMLElement[]));
    });

    // 1) Immediately set initial masked state (no animation)
    gsap.set(lines.current, { yPercent: 100 });
    // 2) Reveal the container only after masking is in place
    gsap.set(containerRef.current, { visibility: "visible", opacity: 1 });
    setHidden(false);

    const animationProps = {
      yPercent: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay,
    };

    if (animateOnScroll) {
      gsap.to(lines.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
          // Important for page-load-in-view elements
          immediateRender: false,
        },
      });

      // Make sure ScrollTrigger has the right measurements after splitting
      ScrollTrigger.refresh();
    } else {
      gsap.to(lines.current, animationProps);
    }
  };

  // If animationFinished is undefined: run on mount (original behavior)
  useGSAP(
    () => {
      if (animationFinished === undefined) {
        startAnimation();
      }
      return () => {
        splitRef.current.forEach((split) => split?.revert());
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  // If animationFinished is controlled from outside, wait for true
  useEffect(() => {
    if (animationFinished === true) startAnimation();
  }, [animationFinished]);

  // Clone single child to pass the ref
  if (Children.count(children) === 1 && React.isValidElement(children)) {
    return cloneElement(children as ReactElement<any>, {
      ref: containerRef,
      // Hide on first paint to avoid flash
      className: [
        (children as any).props?.className ?? "",
        hidden ? "copy-hidden" : "",
      ]
        .join(" ")
        .trim(),
    });
  }

  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      className={hidden ? "copy-hidden" : ""}
    >
      {children}
    </div>
  );
};

export default Copy;


