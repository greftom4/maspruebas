'use client';
import { hExtraBold } from "@/fonts/fonts";
import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

const spring = { damping: 40, stiffness: 400 };

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
        backgroundColor: "#FF51F3E6",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: 'translate(-50%, -50%)',
        transition: "all 100ms ease-out"
      }}
      className={`flex justify-center items-center ${hExtraBold.className} `}
    >
    <h2 className="text-white">ENTRAR</h2>  
    </motion.div>
  );
}