import { ETERNAL_PURPOSE_ROUTES } from "./catechesis/eternal-purpose";
import { THE_LIFE_IN_CHRIST_ROUTES } from "./catechesis/the-life-in-christ";

export const routes = {
  en: {
    "/catechesis": "/catechesis",
    "/catechesis/elementary-principles": "/catechesis/elementary-principles",
    "/teaching": "/teaching",
    "/catechesis/elementary-principles/jesus-exist-before-all-things":
      "/catechesis/elementary-principles/jesus-exist-before-all-things",
    "/catechesis/elementary-principles/he-became-a-man":
      "/catechesis/elementary-principles/he-became-a-man",
    "/catechesis/elementary-principles/his-life-was-perfect-and-blameless":
      "/catechesis/elementary-principles/his-life-was-perfect-and-blameless",
    "/catechesis/elementary-principles/his-work-was-great-and-glorious":
      "/catechesis/elementary-principles/his-work-was-great-and-glorious",
    "/catechesis/elementary-principles/he-died-for-our-sins":
      "/catechesis/elementary-principles/he-died-for-our-sins",
    "/catechesis/elementary-principles/he-rose-again":
      "/catechesis/elementary-principles/he-rose-again",
    "/catechesis/elementary-principles/he-was-exalted":
      "/catechesis/elementary-principles/he-was-exalted",
    "/catechesis/elementary-principles/he-will-return":
      "/catechesis/elementary-principles/he-will-return",
    ...ETERNAL_PURPOSE_ROUTES.en,
    ...THE_LIFE_IN_CHRIST_ROUTES.en,
  },
  es: {
    "/catechesis": "/catequesis",
    "/catechesis/elementary-principles": "/catequesis/principios-elementales",
    "/teaching": "/enseñanza",
    "/catechesis/elementary-principles/jesus-exist-before-all-things":
      "/catequesis/principios-elementales/jesus-existia-antes-de-todas-las-cosas",
    "/catechesis/elementary-principles/he-became-a-man":
      "/catequesis/principios-elementales/el-se-hizo-hombre",
    "/catechesis/elementary-principles/his-life-was-perfect-and-blameless":
      "/catequesis/principios-elementales/su-vida-fue-perfecta-e-inrreprensible",
    "/catechesis/elementary-principles/his-work-was-great-and-glorious":
      "/catequesis/principios-elementales/su-obra-fue-tremenda-y-grandiosa",
    "/catechesis/elementary-principles/he-died-for-our-sins":
      "/catequesis/principios-elementales/murio-por-nuestros-pecados",
    "/catechesis/elementary-principles/he-rose-again":
      "/catequesis/principios-elementales/resucito",
    "/catechesis/elementary-principles/he-was-exalted":
      "/catequesis/principios-elementales/fue-exaltado",
    "/catechesis/elementary-principles/he-will-return":
      "/catequesis/principios-elementales/el-volvera",
    ...ETERNAL_PURPOSE_ROUTES.es,
    ...THE_LIFE_IN_CHRIST_ROUTES.es,
  },
  pt: {
    "/catechesis": "/catequese",
    "/catechesis/elementary-principles": "/catequese/principios-elementares",
    "/teaching": "/ensino",
    "/catechesis/elementary-principles/jesus-exist-before-all-things":
      "/catequese/principios-elementares/jesus-existia-antes-de-todas-as-coisas",
    "/catechesis/elementary-principles/he-became-a-man":
      "/catequese/principios-elementares/tornou-se-homem",
    "/catechesis/elementary-principles/his-life-was-perfect-and-blameless":
      "/catequese/principios-elementares/sua-vida-foi-perfeita-e-irrepreensivel",
    "/catechesis/elementary-principles/his-work-was-great-and-glorious":
      "/catequese/principios-elementares/sua-obra-foi-tremenda-e-grandiosa",
    "/catechesis/elementary-principles/he-died-for-our-sins":
      "/catequese/principios-elementares/morreu-pelos-nossos-pecados",
    "/catechesis/elementary-principles/he-rose-again":
      "/catequese/principios-elementares/ressuscitou",
    "/catechesis/elementary-principles/he-was-exalted":
      "/catequese/principios-elementares/foi-exaltado",
    "/catechesis/elementary-principles/he-will-return":
      "/catequese/principios-elementares/e-voltara",
    ...ETERNAL_PURPOSE_ROUTES.pt,
    ...THE_LIFE_IN_CHRIST_ROUTES.pt,
  },
};
