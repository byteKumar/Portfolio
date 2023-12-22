"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3.8",
  },
];

const AchievementsSection = () => {
 
};

export default AchievementsSection;
