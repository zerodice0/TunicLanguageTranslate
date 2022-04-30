import { predefinedConsonants, predefinedVowels } from "./LanguageParser.model";

const isSameArray = (a: number[], b: number[]) => {
  a.sort((_a, _b) => _a - _b);
  b.sort((_a, _b) => _a - _b);

  return a.length === b.length && a.every((_a, index) => _a === b[index]);
};

export const parsingConsonantsToIPA = (consonants: number[]) =>
  predefinedConsonants.filter(data => isSameArray(consonants, data.list))[0]
    ?.ipa ?? "";

export const parsingVowelsToIPA = (vowels: number[]) =>
  predefinedVowels.filter(data => isSameArray(vowels, data.list))[0]?.ipa ?? "";
