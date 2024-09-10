'use client';
import { hExtraBold } from "@/fonts/fonts";
import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

const spring = { damping: 90, stiffness: 900 };

export default function MouseFollow({ targetRef }) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);
  const opacity = useMotionValue(1);

  useEffect(() => {
    const element = targetRef.current;

    if (!element) return;

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      const rect = element.getBoundingClientRect();

      // Calculamos la posición relativa al elemento objetivo
      const xRelative = clientX - rect.left;
      const yRelative = clientY - rect.top;

      // Limitamos la posición del follower dentro del div
      const clampedX = Math.max(0, Math.min(xRelative, rect.width));
      const clampedY = Math.max(0, Math.min(yRelative, rect.height));

      xPoint.set(clampedX);
      yPoint.set(clampedY);

      // Calculamos la opacidad basada en la distancia a los bordes
      const distanceFromEdgeX = Math.min(clampedX, rect.width - clampedX);
      const distanceFromEdgeY = Math.min(clampedY, rect.height - clampedY);
      const minDistance = Math.min(distanceFromEdgeX, distanceFromEdgeY);
      const fadeDistance = 50; // Distancia en píxeles desde el borde donde comienza el desvanecimiento
      const newOpacity = Math.min(minDistance / fadeDistance, 1);

      opacity.set(newOpacity);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [targetRef]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: -50,
        top: -50,
        x,
        y,
        opacity,
        width: "180px",
        height: "180px",

        borderRadius: "50%",
        pointerEvents: "none",
        transform: 'translate(-50%, -50%)',
        transition: "all 100ms ease-out",


      }}
      className={`flex justify-center items-center ${hExtraBold.className} backdrop-saturate-100 opacity-[10%] `}
    >
      {/* <svg  width="182" height="182" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M91 0a91 91 0 1 0 0 182A91 91 0 0 0 91 0ZM28 90v4h3c-1 2-2 2-3 2-3 0-4-1-4-4l1-4 2-1c2 0 3 1 3 2h6l-2-5-7-2c-3 0-5 1-7 3l-2 7 2 6c2 2 4 3 7 3l5-2 1 2h3V90h-8Zm13 9 7 2 7-2 2-7-2-7c-2-2-5-3-7-3-3 0-6 1-7 3-2 1-3 4-3 7 0 2 1 5 3 7Zm7-3-3-1-1-3 1-4 3-1 2 1 1 4-1 3-2 1Zm23-14v10l-2-3-4-7h-6v19h6V91l1 3 4 7h6V82h-5Zm23 14h-8l3-4 5-5v-5H78v5h8l-3 4-5 5v5h16v-5Zm14 5h6l-6-19h-7l-6 19h5l1-3h7v3Zm-6-7 2-4v-3l1 3 1 4h-4Zm19 2V82h-6v19h14v-5h-8Zm25-9v-5h-15v19h15v-5h-10v-2h9v-5h-9v-2h10Zm17 9h-8l3-4 5-5v-5h-16v5h8l-3 4-5 5v5h16v-5Z" fill="#E847C8"/></svg> */}
      {/* <svg style={{backgroundColor:"transparent"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 182 182"><path fill="#05050E" fill-opacity=".2" fill-rule="evenodd" d="M91 182A91 91 0 1 0 91 0a91 91 0 0 0 0 182ZM36 87v4h2l-2 2c-3 0-4-2-4-4l1-3 3-1 2 1h5l-2-4-6-2-6 3-2 6 2 6 6 2 5-2v2h3V87h-7Zm11 8 6 2 6-2c2-2 2-4 2-6 0-3 0-5-2-6-1-2-3-3-6-3l-4 1-2 2c-2 1-2 3-2 6 0 2 0 4 2 6Zm6-2-2-1-1-3 1-3 2-1 2 1 1 3v2l-1 1-2 1Zm20-12v8l-2-3-3-5h-5v16h5v-9l1 3 4 6h5V81h-5Zm20 11h-7l3-3 4-5v-3H80v4h7l-3 3-4 5v4h13v-5Zm13 5h5l-6-16h-6l-5 16h5l1-3h5l1 3Zm-5-6 1-4v-2l1 2 1 4h-3Zm16 1V81h-5v16h12v-5h-7Zm21-7v-4h-13v16h13v-5h-8v-1h8v-4h-8v-2h8Zm15 7h-7l3-3 4-5v-3h-13v4h7l-3 3-4 5v4h13v-5Z" clip-rule="evenodd"/></svg> */}

      {/* <svg style={{backgroundColor:"transparent"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 424 424"><g filter="url(#a)"><circle cx="212" cy="212" r="91" fill="#F200FF"/></g><g filter="url(#b)"><circle cx="212" cy="212" r="69" fill="#FCC9FF"/></g><defs><filter id="a" width="423.2" height="423.2" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_220_82" stdDeviation="60.3"/></filter><filter id="b" width="379.2" height="379.2" x="22" y="22" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_220_82" stdDeviation="60.3"/></filter></defs></svg> */}
      <svg style={{backgroundColor:"transparent"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 424 424"><g filter="url(#a)"><circle cx="212" cy="212" r="91" fill="#F200FF"/></g><g filter="url(#b)"><circle cx="212" cy="212" r="69" fill="#FCC9FF"/></g><defs><filter id="a" width="423.2" height="423.2" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_220_82" stdDeviation="60.3"/></filter><filter id="b" width="379.2" height="379.2" x="22" y="22" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_220_82" stdDeviation="60.3"/></filter></defs></svg>



    </motion.div>
  );
}