"use client";

import React, {useRef, ReactNode} from 'react'
import gsap from "gsap"
import {SplitText} from "gsap/SplitText"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Copy = ({children, animateOnScroll={true}: {children: ReactNode}) => {
  const containerRef = useRef(null);

  return React.cloneElement(children, {ref: containerRef})
}

export default Copy