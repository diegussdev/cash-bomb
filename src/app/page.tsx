"use client";

import { Game } from "@/components/game";
import { Menu } from "@/components/menu";
import { useGameStore } from "@/store/useGameStore";
import { useEffect, useState } from "react";

export default function Home() {
  const isStarted = useGameStore((state) => state.isStarted);
  const [content, setContent] = useState(<></>);

  useEffect(() => {
    setContent(isStarted ? <Game /> : <Menu />);
  }, [isStarted]);

  return (
    <div className="flex flex-col gap-4 w-full h-screen justify-center items-center bg-gray-900">
      <h1 className="text-white text-2xl">Cash or Bomb</h1>
      <div className="flex flex-wrap justify-center items-center gap-2 w-96 p-2 bg-gray-600 rounded-md">
        {content}
      </div>
    </div>
  );
}
