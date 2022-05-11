import { Dispatch, SetStateAction } from "react";

export interface LanguageContextData {
  consonants: number[];
  vowels: number[];
  setConsonants?: Dispatch<SetStateAction<number[]>>;
  setVowels?: Dispatch<SetStateAction<number[]>>;
}
