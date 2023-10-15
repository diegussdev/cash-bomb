import { generateGame } from "@/helpers/genereteGame";
import { Option } from "@/models/option";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Game {
  size: number;
  bombs: number;
  bombsQuantities: string[];
  options: Option[];
  points: number;
  isStarted: boolean;
  opened: number;
  games: number;
  record: number;
  gems: number;
  setBombs: (bombs: number) => void;
  startGame: () => void;
  addPoints: (points: number) => void;
  openOption: (option: Option) => void;
  finishGame: (win: boolean) => void;
}

export const useGameStore = create(
  persist<Game>(
    (set, get) => ({
      size: 25,
      bombs: 4,
      bombsQuantities: ["04", "08", "12", "16"],
      options: [],
      points: 0,
      isStarted: false,
      opened: 0,
      games: 0,
      record: 0,
      gems: 0,
      setBombs: (bombs) => set({ bombs }),
      startGame: () =>
        set({
          options: generateGame(get().size, get().bombs),
          isStarted: true,
          games: get().games + 1,
        }),
      addPoints: (points) => set({ points: get().points + points }),
      openOption: (option) => {
        const newOptions: Option[] = [];

        const isGameOver = option?.cash !== true;
        var isFinishGame = option?.gem === true;

        if (isFinishGame) {
          set({ gems: get().gems + 1 });
        }

        get().options.forEach((currentOption) => {
          if (!option || currentOption.index === option.index) {
            currentOption.status = true;

            if (option) {
              currentOption.opened = true;
              set({ opened: get().opened + 1 });

              if (currentOption.cash) {
                get().addPoints(1);
              }
            }
          }

          newOptions.push(currentOption);
        });

        set({ options: newOptions });

        if (get().opened - get().bombs === get().size) {
          isFinishGame = true;
        }

        if (isFinishGame || isGameOver) {
          get().finishGame(isFinishGame);
        }
      },
      finishGame: (win) => {
        const newOptions: Option[] = [];

        get().options.forEach((currentOption) => {
          currentOption.status = true;
          currentOption.opened = win ? currentOption.cash : !currentOption.cash;
          newOptions.push(currentOption);
        });

        set({ options: newOptions });
        const record =
          get().points > get().record ? get().points : get().record;

        setTimeout(() => {
          set({
            options: [],
            points: 0,
            isStarted: false,
            opened: 0,
            record,
          });
        }, 1250);
      },
    }),
    {
      name: "game",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
