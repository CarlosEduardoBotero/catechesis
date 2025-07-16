import { ELEMENTARY_PRINCIPLES_ROUTES } from "./catechesis/elementary-principles";
import { ETERNAL_PURPOSE_ROUTES } from "./catechesis/eternal-purpose";
import { THE_LIFE_IN_CHRIST_ROUTES } from "./catechesis/the-life-in-christ";
import { THE_FAMILY_ROUTES } from "./catechesis/the-family";

export const routes = {
  en: {
    ...ELEMENTARY_PRINCIPLES_ROUTES.en,
    ...ETERNAL_PURPOSE_ROUTES.en,
    ...THE_LIFE_IN_CHRIST_ROUTES.en,
    ...THE_FAMILY_ROUTES.en,
  },
  es: {
    ...ELEMENTARY_PRINCIPLES_ROUTES.es,
    ...ETERNAL_PURPOSE_ROUTES.es,
    ...THE_LIFE_IN_CHRIST_ROUTES.es,
    ...THE_FAMILY_ROUTES.es,
  },
  pt: {
    ...ELEMENTARY_PRINCIPLES_ROUTES.pt,
    ...ETERNAL_PURPOSE_ROUTES.pt,
    ...THE_LIFE_IN_CHRIST_ROUTES.pt,
    ...THE_FAMILY_ROUTES.pt,
  },
};
