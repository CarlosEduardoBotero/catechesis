import { ui, defaultLang, showDefaultLang, routes } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  console.log({ lang });
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

type RoutesType = typeof routes;
export type LangType = keyof RoutesType;
type pathNameType = keyof (typeof routes)[LangType];

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: LangType = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][pathName as pathNameType] !== undefined;
    const translatedPath = hasTranslation
      ? "/" + routes[l][pathName as pathNameType]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();
  console.log({ path });

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path as pathNameType] !== undefined
      ? route[path as pathNameType]
      : undefined;
  }

  // return path;
  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);
  console.log({ reversedKey, currentLang });
  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
