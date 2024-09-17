// components/LanguageSwitcher.tsx

'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { i18n, Locale } from '@/i18n/i18n-config'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const pathname = usePathname()
    const router = useRouter()

    const getNewPath = (locale: Locale) => {
        if (!pathname) return '/'
        const segments = pathname.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    const changeLanguage = (locale: Locale) => {
        router.push(getNewPath(locale))
    }

    const currentLangInfo = i18n.locales.find(l => l.code === currentLang) || i18n.locales[0]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[120px] justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    {currentLangInfo.name}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {i18n.locales.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="flex justify-between items-center"
                    >
                        <span className="flex items-center">
                            <span className="mr-2 text-base">{lang.ico}</span>
                            <span className="ml-2">{lang.name}</span>
                        </span>
                        {lang.code === currentLang && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}