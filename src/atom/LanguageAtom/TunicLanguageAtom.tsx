import { atom } from "jotai";

import { TunicCharacter } from "../TunicLanguageAtom/TunicLanguageAtom.model";

export const CurrentTunicCharacter = atom<TunicCharacter>({
  consonants: [],
  vowels: [],
});

export const CurrentTunicWord = atom<TunicCharacter[]>([]);
