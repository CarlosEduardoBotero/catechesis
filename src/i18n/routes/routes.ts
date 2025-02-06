import { ETERNAL_PURPOSE_ROUTES } from "./catechesis/eternal-purpose";

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
  },
  es: {
    "/catechesis": "/catequesis",
    "/catechesis/elementary-principles": "/catequesis/principios-elementales",
    "/teaching": "/enseñanza",
    "/catechesis/jesus-exist-before-all-things":
      "/catequesis/jesus-existia-antes-de-todas-las-cosas",
    "/catechesis/he-became-a-man": "/catequesis/el-se-hizo-hombre",
    "/catechesis/his-life-was-perfect-and-blameless":
      "/catequesis/su-vida-fue-perfecta-e-inrreprensible",
    "/catechesis/his-work-was-great-and-glorious":
      "/catequesis/su-obra-fue-tremenda-y-grandiosa",
    "/catechesis/he-died-for-our-sins":
      "/catequesis/murio-por-nuestros-pecados",
    "/catechesis/he-rose-again": "/catequesis/resucito",
    "/catechesis/he-was-exalted": "/catequesis/fue-exaltado",
    "/catechesis/he-will-return": "/catequesis/el-volvera",
  },
  pt: {
    "/catechesis": "/catequese",
    "/catechesis/elementary-principles": "/catequese/principios-elementares",
    "/teaching": "/ensino",
    "/catechesis/jesus-exist-before-all-things":
      "/catequese/jesus-existia-antes-de-todas-as-coisas",
    "/catechesis/he-became-a-man": "/catequese/tornou-se-homem",
    "/catechesis/his-life-was-perfect-and-blameless":
      "/catequese/sua-vida-foi-perfeita-e-irrepreensivel",
    "/catechesis/his-work-was-great-and-glorious":
      "/catequese/sua-obra-foi-tremenda-e-grandiosa",
    "/catechesis/he-died-for-our-sins":
      "/catequese/morreu-pelos-nossos-pecados",
    "/catechesis/he-rose-again": "/catequese/ressuscitou",
    "/catechesis/he-was-exalted": "/catequese/foi-exaltado",
    "/catechesis/he-will-return": "/catequese/e-voltara",
  },
};
