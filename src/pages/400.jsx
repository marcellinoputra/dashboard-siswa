import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../assets/lottie.json";

export default function Error() {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    
  };

  const { View } = useLottie(options);
  return <div>{View}</div>;
}
