// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import styles from "../../styles/Navigation/preloader.module.scss";

// const AnimatedPhrase = ({ phrase, setAnimFinished }: { phrase: string, setAnimFinished: React.Dispatch<React.SetStateAction<boolean>> }) => {
//   const refs = useRef<HTMLSpanElement[]>([]);
//   const refsContainer = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     createAnimations();
//   });

//   const createAnimations = () => {
//     gsap.to(refs.current, {
//       opacity: 1,
//       ease: "none",
//       stagger: 0.05,
//       onComplete: () => setAnimFinished(true)
//     });
//   };

//   const splitWords = () => {
//     return phrase.split(" ").map((word, i) => (
//       <p key={i} className={styles.word}>
//         {splitLetters(word)}
//       </p>
//     ));
//   };

//   const splitLetters = (word: string) => {
//     return word.split("").map((letter, index) => (
//       <span
//         key={index}
//         className={styles.letter}
//         ref={(el) => {
//           if (el && !refs.current.includes(el)) {
//             refs.current.push(el);
//           }
//           // Note: No value is returned from this function.
//         }}
//       >
//         {letter}
//       </span>
//     ));
//   };

//   return (
//     <div ref={refsContainer} className={styles.animated__phrase}>
//       {splitWords()}
//     </div>
//   );
// };

// export default AnimatedPhrase;
// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import styles from "../../styles/Navigation/preloader.module.scss";

// const AnimatedPhrase = ({
//   phrase,
//   setAnimFinished,
// }: {
//   phrase: string;
//   setAnimFinished: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   const refs = useRef<HTMLSpanElement[]>([]);
//   const refsContainer = useRef<HTMLDivElement>(null);
//   const tl = useRef<gsap.core.Timeline | null>(null);

//   // Rebuild refs each render so they match the current DOM
//   refs.current = [];

//   useLayoutEffect(() => {
//     // Kill any previous timeline
//     tl.current?.kill();

//     // Ensure all letters start hidden
//     gsap.set(refs.current, { opacity: 0 });

//     // Build a single timeline for this phrase
//     tl.current = gsap.timeline({
//       defaults: { ease: "none", duration: 0.6 },
//       onComplete: () => setAnimFinished(true),
//     });

//     tl.current.to(refs.current, {
//       opacity: 1,
//       stagger: 0.05,
//       // overwrite prevents old tweens from interfering
//       overwrite: "auto",
//     });

//     // Cleanup on unmount or when phrase changes
//     return () => {
//       tl.current?.kill();
//       tl.current = null;
//     };
//   }, [phrase, setAnimFinished]);

//   const splitWords = () => {
//     return phrase.split(" ").map((word, i) => (
//       <p key={`${word}-${i}`} className={styles.word}>
//         {splitLetters(word)}
//       </p>
//     ));
//   };

//   const splitLetters = (word: string) => {
//     return word.split("").map((letter, index) => (
//       <span
//         key={`${word}-${index}`}
//         className={styles.letter}
//         ref={(el) => {
//           if (el) refs.current.push(el);
//         }}
//       >
//         {letter}
//       </span>
//     ));
//   };

//   return (
//     <div ref={refsContainer} className={styles.animated__phrase}>
//       {splitWords()}
//     </div>
//   );
// };

// export default AnimatedPhrase;
