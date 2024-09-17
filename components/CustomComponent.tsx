// components/CustomComponent.tsx

import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/i18n-config";

type Props = {
    lang: Locale;
}

const CustomComponent: React.FC<Props> = async ({ lang }) => {
    const dict = await getDictionary(lang)
    return (
        <div className="w-96 h-56 border flex flex-col justify-center items-center">
            <div>CustomComponent.tsx</div>
            <p>lang: {lang}</p>
            <p>{dict.custom.title}</p>
        </div>
    )
}

export default CustomComponent;