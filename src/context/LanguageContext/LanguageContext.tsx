import { createContext, useState } from "react";

import { LanguageContextData } from "./LanguageContext.model";

export const LanguageContext = createContext<LanguageContextData>({
  consonants: [],
  vowels: [],
});

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [consonants, setConsonants] = useState<number[]>([]);
  const [vowels, setVowels] = useState<number[]>([]);

  return (
    <LanguageContext.Provider
      value={{ consonants, vowels, setConsonants, setVowels }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
