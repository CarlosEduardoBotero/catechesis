import { LYRICS } from "../lyrics";
import { toAsciiSlug } from "../../utils/toAsciiSlug";

export const SONGS = {
  en: Object.entries(LYRICS).map(([number, song]) => ({
    pathname: `/songs/${toAsciiSlug(song.title)}`,
    title: song.title,
    songNumber: Number(number),
    lyrics: song.lyrics,
  })),
  es: Object.entries(LYRICS).map(([number, song]) => ({
    pathname: `/canciones/${toAsciiSlug(song.title)}`,
    title: song.title,
    songNumber: Number(number),
    lyrics: song.lyrics,
  })),
  pt: Object.entries(LYRICS).map(([number, song]) => ({
    pathname: `/musicas/${toAsciiSlug(song.title)}`,
    title: song.title,
    songNumber: Number(number),
    lyrics: song.lyrics,
  })),
};
