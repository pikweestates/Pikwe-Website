"use client";

import React, {useRef, ReactNode} from 'react'
import gsap from "gsap"
import {SplitText} from "gsap/SplitText"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Copy = ({children, animateOnScroll = true, delay = 0}: {children: ReactNode, animateOnScroll: boolean, delay: number}) => {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);

  useGSAP(() => {
    if(!containerRef.current){
      
    }

  }, {scope: containerRef, dependencies: [animateOnScroll, delay]})

  return React.cloneElement(children, {ref: containerRef})
}

export default Copy