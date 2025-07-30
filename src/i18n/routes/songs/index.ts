import { toAsciiSlug } from "../../../utils/toAsciiSlug";
import { LYRICS } from "../../lyrics";

export const SONGS_ROUTES = {
  en: Object.assign(
    { "/songs": "/songs" },
    ...Object.entries(LYRICS).map(([number, song]) => ({
      [`/songs/${toAsciiSlug(song.title)}`]: `/songs/${toAsciiSlug(song.title)}`,
    }))
  ),
  es: Object.assign(
    { "/songs": "/canciones" },
    ...Object.entries(LYRICS).map(([number, song]) => ({
      [`/songs/${toAsciiSlug(song.title)}`]: `/canciones/${toAsciiSlug(song.title)}`,
    }))
  ),
  pt: Object.assign(
    { "/songs": "/musicas" },
    ...Object.entries(LYRICS).map(([number, song]) => ({
      [`/songs/${toAsciiSlug(song.title)}`]: `/musicas/${toAsciiSlug(song.title)}`,
    }))
  ),
};
