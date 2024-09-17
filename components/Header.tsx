// components/Header.tsx

import { Locale } from "@/i18n/i18n-config";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
    lang: Locale;
}

const Header: React.FC<Props> = ({ lang }) => {
    return (
        <header className="p-4 border-b">
            <div className="max-w-5xl mx-auto flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">Your Website</h1>
                <nav className="flex items-center space-x-4">
                    <LanguageSwitcher currentLang={lang} />
                </nav>
            </div>
        </header>
    )
}

export default Header;