import { ELEMENTARY_PRINCIPLES_ROUTES } from "./catechesis/elementary-principles";
import { ETERNAL_PURPOSE_ROUTES } from "./catechesis/eternal-purpose";
import { THE_LIFE_IN_CHRIST_ROUTES } from "./catechesis/the-life-in-christ";
import { THE_FAMILY_ROUTES } from "./catechesis/the-family";
import { THE_GOSPEL_OF_THE_KINGDOM_ROUTES } from "./catechesis/the-gospel-of-the-kingdom";
import { SONGS_ROUTES } from "./songs";

export const routes = {
  en: {
        "/teaching": "/teaching",
        "/contact":"/contact",
    ...ELEMENTARY_PRINCIPLES_ROUTES.en,
    ...ETERNAL_PURPOSE_ROUTES.en,
    ...THE_LIFE_IN_CHRIST_ROUTES.en,
    ...THE_FAMILY_ROUTES.en,
    ...THE_GOSPEL_OF_THE_KINGDOM_ROUTES.en,
    ...SONGS_ROUTES.en,
  },
  es: {
        "/teaching": "/ensenanza",
        "/contact":"/contacto",
    ...ELEMENTARY_PRINCIPLES_ROUTES.es,
    ...ETERNAL_PURPOSE_ROUTES.es,
    ...THE_LIFE_IN_CHRIST_ROUTES.es,
    ...THE_FAMILY_ROUTES.es,
    ...THE_GOSPEL_OF_THE_KINGDOM_ROUTES.es,
    ...SONGS_ROUTES.es,
  },
  pt: {
        "/teaching": "/ensino",
        "/contact":"/contato",
    ...ELEMENTARY_PRINCIPLES_ROUTES.pt,
    ...ETERNAL_PURPOSE_ROUTES.pt,
    ...THE_LIFE_IN_CHRIST_ROUTES.pt,
    ...THE_FAMILY_ROUTES.pt,
    ...THE_GOSPEL_OF_THE_KINGDOM_ROUTES.pt,
    ...SONGS_ROUTES.pt,
  },
};
