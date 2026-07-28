"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const languages = [
  { code: "en" as const, name: "English" },
  { code: "fr" as const, name: "Français" },
  { code: "es" as const, name: "Español" },
]

export function LanguageSelector({
  className,
  side = "bottom",
  align = "end",
}: {
  className?: string
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
}) {
  const { language, setLanguage } = useLanguage()
  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Select language"
          className={cn(
            "cursor-pointer rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
        >
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} side={side}>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className="flex cursor-pointer items-center gap-2">
            <span className="w-6 text-xs font-semibold text-muted-foreground">
              {lang.code.toUpperCase()}
            </span>
            <span>{lang.name}</span>
            {language === lang.code && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
