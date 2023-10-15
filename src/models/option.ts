import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Option {
  index: number;
  cash: boolean;
  gem: boolean;
  status: boolean;
  opened: boolean;
  icon: IconDefinition;
  colorClass: string;
  bgClass: string;
}
