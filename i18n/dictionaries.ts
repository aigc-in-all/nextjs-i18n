import { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
}

// export const getDictionary = async (locale: string) => dictionaries[locale as keyof typeof dictionaries]()

export async function getDictionary(locale: Locale) {
  const defaultDict = await dictionaries.en();

  if (locale === 'en') {
    return defaultDict;
  }

  try {
    // 使用类型断言来避免 TypeScript 错误
    const localeDict = await (dictionaries as any)[locale]();
    return deepMerge(defaultDict, localeDict);
  } catch (error) {
    console.error(`Failed to load dictionary for ${locale}`, error);
    return defaultDict;
  }
}

function deepMerge(target: any, source: any): any {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}