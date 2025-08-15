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
//   useLayoutEffect,
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
//   useLayoutEffect(() => {
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
  useCallback,
  useLayoutEffect,
  Comp
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

  // Hide until ready
  const [hidden, setHidden] = useState(true);

  const startAnimation = useCallback(() => {
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
        mask: "lines",
        linesClass: "split-line++",
      });

      splitRef.current.push(split);

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

    gsap.set(lines.current, { yPercent: 100 });
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
          immediateRender: false,
        },
      });
      ScrollTrigger.refresh();
    } else {
      gsap.to(lines.current, animationProps);
    }
  }, [animateOnScroll, delay]);

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

  useLayoutEffect(() => {
    if (animationFinished === true) startAnimation();
  }, [animationFinished, startAnimation]);

  if (Children.count(children) === 1 && React.isValidElement(children)) {
    return cloneElement(children as ReactElement<HTMLElement>, {
      ref: containerRef,
      className: [
        (children as ReactElement<HTMLElement>).props?.className ?? "",
        hidden ? "copy-hidden" : "",
      ]
        .join(" ")
        .trim(),
    });
  }
  // Only one child and valid element
  // if (Children.count(children) === 1 && React.isValidElement(children)) {
  //   return (
  //     <div ref={containerRef} className={hidden ? "copy-hidden" : ""}>
  //       {children}
  //     </div>
  //   );
  // }

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
