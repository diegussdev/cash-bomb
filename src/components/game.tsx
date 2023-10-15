"use client";

import { Display } from "@/components/display";
import { Option as OptionComponent } from "@/components/option";
import { useGameStore } from "@/store/useGameStore";

export function Game() {
  const points = useGameStore((state) => state.points);
  const options = useGameStore((state) => state.options);

  return (
    <>
      <Display data={points} />
      {options.map((option) => (
        <OptionComponent key={option.index} option={option} />
      ))}
    </>
  );
}
