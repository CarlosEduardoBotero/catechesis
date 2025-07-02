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
  },
  pt: {
    "/catechesis": "/catequese",
    "/catechesis/elementary-principles/elementary-principles":
      "/catequese/principios-elementares",
    "/teaching": "/ensino",
    "/catechesis/elementary-principles/jesus-exist-before-all-things":
      "/catequese/jesus-existia-antes-de-todas-as-coisas",
    "/catechesis/elementary-principles/he-became-a-man":
      "/catequese/tornou-se-homem",
    "/catechesis/elementary-principles/his-life-was-perfect-and-blameless":
      "/catequese/sua-vida-foi-perfeita-e-irrepreensivel",
    "/catechesis/elementary-principles/his-work-was-great-and-glorious":
      "/catequese/sua-obra-foi-tremenda-e-grandiosa",
    "/catechesis/elementary-principles/he-died-for-our-sins":
      "/catequese/morreu-pelos-nossos-pecados",
    "/catechesis/elementary-principles/he-rose-again": "/catequese/ressuscitou",
    "/catechesis/elementary-principles/he-was-exalted":
      "/catequese/foi-exaltado",
    "/catechesis/elementary-principles/he-will-return": "/catequese/e-voltara",
    ...ETERNAL_PURPOSE_ROUTES.pt,
  },
};
