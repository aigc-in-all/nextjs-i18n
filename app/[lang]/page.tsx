import CustomComponent from "@/components/CustomComponent";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/i18n-config";
import Link from "next/link";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h1>{dict.title}</h1>
      <Link href={`/${lang === 'en' ? 'zh' : 'en'}`} className="underline">
        {dict.changeLanguage}
      </Link>

      <Link href={`/${lang}/sub`} className="underline">To sub page</Link>

      <CustomComponent lang={lang} />
    </div>
  );
}
