"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"

const languages = [
  { code: "en" as const, name: "English", flag: "🇬🇧" },
  { code: "fr" as const, name: "Français", flag: "🇫🇷" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" },
]

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select language" className="cursor-pointer">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className="flex items-center gap-2">
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
