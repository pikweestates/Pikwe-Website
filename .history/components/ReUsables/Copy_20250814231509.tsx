"use client";

import React, {useRef, ReactNode} from 'react'
import gsap from "gsap"
import {SplitText} from "gsap/SplitText"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Copy = ({children, animateOnScroll = true, delay = 0}: {children: ReactNode, animateOnScroll: boolean, delay: number}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);

  useGSAP(() => {
    if(!containerRef.current) return;

    splitRef.current = [];
    elementRef.current = [];
    lines.current = [];

    let elements = [];
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children);
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      elementRef.current.push(element);

      const split = SplitText.create(element, {
        type: "lines",
        mask: "lines",
        linesClass: "line++"
      });

      splitRef
    })

  }, {scope: containerRef, dependencies: [animateOnScroll, delay]})

  return React.cloneElement(children, {ref: containerRef})
}

export default Copy