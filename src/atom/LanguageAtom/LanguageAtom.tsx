import { atom } from "jotai";

import { LanguageAtomModel } from "./LanguageAtom.model";

export const CurrentCharacter = atom<LanguageAtomModel>({
  consonants: [],
  vowels: [],
});
