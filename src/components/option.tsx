"use client";

import { Option } from "@/models/option";
import { useGameStore } from "@/store/useGameStore";

import {
  faBomb,
  faDollar,
  faGem,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  option: Option;
}

export const bombOption = {
  cash: false,
  status: false,
  opened: false,
  gem: false,
  icon: faBomb,
  colorClass: "text-white",
  bgClass: "bg-red-600",
};

export const cashOption = {
  cash: true,
  status: false,
  opened: false,
  gem: false,
  icon: faDollar,
  colorClass: "text-gray-950",
  bgClass: "bg-yellow-400",
};

export const gemOption = {
  cash: true,
  status: false,
  opened: false,
  gem: true,
  icon: faGem,
  colorClass: "text-white",
  bgClass: "bg-blue-500",
};

export function Option({ option }: Props) {
  const openOption = useGameStore((state) => state.openOption);

  return (
    <button
      onClick={() => openOption(option)}
      disabled={option.status}
      className={`
        ${
          option.opened
            ? `${option.bgClass} ${option.colorClass}`
            : "bg-gray-400 hover:bg-gray-300"
        } 
        game-option h-16 w-16 rounded-md shadow-lg transition-all duration-500`}
    >
      <FontAwesomeIcon
        icon={option.status ? option.icon : faStar}
        className={`${option.status ? "" : "text-gray-500"} text-2xl`}
      />
    </button>
  );
}
