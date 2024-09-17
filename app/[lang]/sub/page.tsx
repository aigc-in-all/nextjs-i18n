// app/sub/page.tsx

import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/i18n-config";

export default async function SugPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang)
    return (
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
            <h1>{dict.sub_page.title}</h1>
            <p>Language: {lang}</p>
        </div>
    );
}