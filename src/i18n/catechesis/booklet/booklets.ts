import { ELEMENTARY_PRINCIPLES_CATECHESIS } from "../booklet/elementary-principles";
import { ETERNAL_PURPOSE_CATECHESIS } from "../booklet/eternal-purpose";
import { THE_LIFE_IN_CHRIST_CATECHESIS } from "../booklet/the-life-in-christ";
import { THE_FAMILY_CATECHESIS } from "../booklet/the-family";
import { THE_GOSPEL_OF_THE_KINGDOM_CATECHESIS } from "../booklet/the-gospel-of-the-kingdom";

export const BOOKLETS = {
  en: [
    {
      pathname: "/catechesis/elementary-principles",
      title: "Elementary Principles",
      bookletId: "elementary-principles",
      booklet: ELEMENTARY_PRINCIPLES_CATECHESIS["en"],
    },
    {
      pathname: "/catechesis/eternal-purpose",
      title: "Eternal Purpose",
      bookletId: "eternal-purpose",
      booklet: ETERNAL_PURPOSE_CATECHESIS["en"],
    },
    {
      pathname: "/catechesis/the-life-in-christ",
      title: "The Life in Christ",
      bookletId: "the-life-in-christ",
      booklet: THE_LIFE_IN_CHRIST_CATECHESIS["en"],
    },
    {
      pathname: "/catechesis/the-family",
      title: "The Family",
      bookletId: "the-family",
      booklet: THE_FAMILY_CATECHESIS["en"],
    },
    {
      pathname: "/catechesis/the-gospel-of-the-kingdom",
      title: "The Gospel of the Kingdom",
      bookletId: "the-gospel-of-the-kingdom",
      booklet: THE_GOSPEL_OF_THE_KINGDOM_CATECHESIS["en"],
    },
  ],
  es: [
    {
      pathname: "/catequesis/principios-elementales",
      title: "Principios Elementales",
      bookletId: "principios-elementales",
      booklet: ELEMENTARY_PRINCIPLES_CATECHESIS["es"],
    },
    {
      pathname: "/catequesis/proposito-eterno-de-dios",
      title: "Propósito Eterno",
      bookletId: "proposito-eterno-de-dios",
      booklet: ETERNAL_PURPOSE_CATECHESIS["es"],
    },
    {
      pathname: "/catequesis/la-vida-en-cristo",
      title: "La Vida en Cristo",
      bookletId: "la-vida-en-cristo",
      booklet: THE_LIFE_IN_CHRIST_CATECHESIS["es"],
    },
    {
      pathname: "/catequesis/la-familia",
      title: "La Familia",
      bookletId: "la-familia",
      booklet: THE_FAMILY_CATECHESIS["es"],
    },
    {
      pathname: "/catequesis/el-evangelio-del-reino",
      title: "El Evangelio del Reino",
      bookletId: "el-evangelio-del-reino",
      booklet: THE_GOSPEL_OF_THE_KINGDOM_CATECHESIS["es"],
    },
  ],
  pt: [
    {
      pathname: "/catequese/principios-elementares",
      title: "Princípios Elementares",
      bookletId: "principios-elementares",
      booklet: ELEMENTARY_PRINCIPLES_CATECHESIS["pt"],
    },
    {
      pathname: "/catequese/proposito-eterno-de-deus",
      title: "Propósito Eterno",
      bookletId: "proposito-eterno-de-deus",
      booklet: ETERNAL_PURPOSE_CATECHESIS["pt"],
    },
    {
      pathname: "/catequese/a-vida-em-cristo",
      title: "A Vida em Cristo",
      bookletId: "a-vida-em-cristo",
      booklet: THE_LIFE_IN_CHRIST_CATECHESIS["pt"],
    },
    {
      pathname: "/catequese/a-familia",
      title: "A Família",
      bookletId: "a-familia",
      booklet: THE_FAMILY_CATECHESIS["pt"],
    },
    {
      pathname: "/catequese/o-evangelho-do-reino",
      title: "O Evangelho do Reino",
      bookletId: "o-evangelho-do-reino",
      booklet: THE_GOSPEL_OF_THE_KINGDOM_CATECHESIS["pt"],
    },
  ],
};
