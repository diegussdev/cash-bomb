"use client";

import { useGameStore } from "@/store/useGameStore";
import { faDice, faGem, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Menu() {
  const games = useGameStore((state) => state.games);
  const record = useGameStore((state) => state.record);
  const gems = useGameStore((state) => state.gems);
  const bombsQuantities = useGameStore((state) => state.bombsQuantities);
  const bombs = useGameStore((state) => state.bombs);
  const setBombs = useGameStore((state) => state.setBombs);
  const startGame = useGameStore((state) => state.startGame);

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <div className="flex w-full gap-2 mb-6">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full justify-center items-center text-lg text-gray-300">
            <FontAwesomeIcon icon={faDice} className="" />
            <span>Games</span>
          </div>
          <div className="flex w-full justify-center items-center text-2xl bg-gray-300 rounded-md shadow-lg">
            {games}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full justify-center items-center text-lg text-gray-300">
            <FontAwesomeIcon icon={faTrophy} className="" />
            <span>Record</span>
          </div>
          <div className="flex w-full justify-center items-center text-2xl bg-gray-300 rounded-md shadow-lg">
            {record}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full justify-center items-center text-lg text-gray-300">
            <FontAwesomeIcon icon={faGem} className="" />
            <span>Gems</span>
          </div>
          <div className="flex w-full justify-center items-center text-2xl bg-gray-300 rounded-md shadow-lg">
            {gems}
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        {bombsQuantities.map((bombsQuantity) => (
          <button
            key={`bomb-quanity-${bombsQuantity}`}
            onClick={() => setBombs(+bombsQuantity)}
            className={`${
              bombs === +bombsQuantity ? "bg-green-400" : "bg-white"
            } text-2xl px-4 py-2 rounded-md shadow-lg`}
          >
            {bombsQuantity}
          </button>
        ))}
      </div>

      <button
        onClick={() => startGame()}
        className="w-full bg-green-400 py-1 px-2 text-xl rounded-md shadow-lg"
      >
        Start
      </button>
    </div>
  );
}
