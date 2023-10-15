import { Option } from "@/models/option";
import { bombOption, cashOption, gemOption } from "@/components/option";
import { shuffle } from "@/helpers/arrays";

export function generateGame(
  optionsCount: number,
  bombCount: number
): Option[] {
  const options: Option[] = [];
  const randomGem = Math.random() < 0.4;

  for (let i = 0; i < optionsCount; i++) {
    if (i < bombCount) {
      options.push({ index: i, ...bombOption });
    } else if (randomGem && i < bombCount + 1) {
      options.push({ index: i, ...gemOption });
    } else {
      options.push({ index: i, ...cashOption });
    }
  }

  return shuffle(options);
}
