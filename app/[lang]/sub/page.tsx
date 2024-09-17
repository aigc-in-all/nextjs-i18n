// app/sub/page.tsx

import { getDictionary } from "@/i18n/dictionaries";

export default async function SugPage({ params: { lang } }: { params: { lang: string } }) {
    const dict = await getDictionary(lang)
    return (
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
            <h1>{dict.sub_page.title}</h1>
            <p>Language: {lang}</p>
        </div>
    );
}