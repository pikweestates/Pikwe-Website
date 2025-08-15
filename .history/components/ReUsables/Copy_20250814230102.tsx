"use client";

import React, {useRef, Reac} from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';

const Copy = ({children}: {children: ReactNode}) => {
  const containerRef = useRef(null)
  return React.cloneElement(children, {ref: containerRef})
}

export default Copy