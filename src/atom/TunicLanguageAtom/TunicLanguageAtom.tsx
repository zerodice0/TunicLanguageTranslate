import { atom } from "jotai";

import { TunicCharacter } from "./TunicLanguageAtom.model";

export const CurrentTunicCharacter = atom<TunicCharacter>({
  consonants: [],
  vowels: [],
  isReverse: false,
});

export const CurrentTunicWord = atom<TunicCharacter[]>([]);
