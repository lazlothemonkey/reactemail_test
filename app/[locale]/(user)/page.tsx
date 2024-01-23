import { useTranslations, useLocale, Link } from "next-intl";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonhain Kollektiv - Home",
  description: "A new chamber music society for Berlin",
};

export default function Home() {


  const locale = useLocale();

  return (
    <main>
      test
    </main>
  );
}
