import { useValue } from "@bytesoftio/use-value"
import { UseTranslator } from "./types"

export const useTranslator: UseTranslator = (translator) => {
  useValue(translator.translations)
  useValue(translator.language)
  useValue(translator.fallbackLanguage)

  return translator
}
