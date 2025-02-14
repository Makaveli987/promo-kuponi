import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Promo Kuponi | Uštedite uz najbolje kupone za popuste",
  description:
    "Pronađite najbolje promo kodove i kupone za popuste. Uštedite pri kupovini u vodećim online prodavnicama kao što su Sinsay, Wolt, Shoppster i drugi.",
  keywords:
    "promo kodovi, kuponi za popust, online kupovina, ušteda, popusti, online prodavnice",
  openGraph: {
    title: "Promo Kuponi | Uštedite uz najbolje kupone za popuste",
    description:
      "Pronađite najbolje promo kodove i kupone za popuste. Uštedite pri kupovini u vodećim online prodavnicama.",
    type: "website",
    locale: "sr_RS",
    siteName: "Promo Kuponi",
  },
  robots: "index, follow",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://promokuponi.com",
  },
};

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-8 text-gray-700">
      <h2 className="text-2xl font-bold my-8">
        Politika privatnosti sajta promokuponi.com
      </h2>
      {/* <p>Datum stupanja na snagu: [unesite datum]</p>
      <p>
        Vaša privatnost nam je važna. Ova politika privatnosti objašnjava kako
        sajt promokuponi.com (u daljem tekstu &quot;Sajt&quot;) prikuplja,
        koristi i štiti vaše podatke.
      </p>
      <br /> */}
      <h2 className="text-lg font-bold">1. Koje podatke prikupljamo?</h2>
      <p>
        Sajt ne prikuplja lične podatke korisnika (kao što su ime, e-mail adresa
        ili broj telefona). Međutim, mogu se automatski prikupljati tehničke
        informacije putem kolačića i analitičkih alata, uključujući:
      </p>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>IP adresu</li>
        <li>Tip pretraživača i uređaja</li>
        <li>Stranice koje posećujete na Sajtu</li>
        <li>Vreme provedeno na Sajtu</li>
      </ul>
      <br />
      <h2 className="text-lg font-bold">2. Korišćenje kolačića i analitike</h2>
      <p>
        Sajt koristi kolačiće trećih strana (npr. Google Analytics) kako bi
        analizirao saobraćaj i poboljšao korisničko iskustvo. Kolačići su mali
        fajlovi koji se skladište na vašem uređaju i ne sadrže lične podatke.
      </p>
      <p>
        Možete onemogućiti kolačiće u podešavanjima vašeg pretraživača, ali to
        može uticati na funkcionalnost Sajta.
      </p>
      <br />
      <h2 className="text-lg font-bold">3. Prikaz oglasa trećih strana</h2>
      <p>
        Sajt može koristiti reklamne mreže (kao što su Google AdSense) koje
        koriste kolačiće za prikaz relevantnih oglasa. Ove mreže mogu
        prikupljati podatke o vašim interesovanjima kako bi personalizovale
        oglase.
      </p>
      <p>
        Za više informacija o upravljanju podešavanjima oglasa, posetite
        stranicu Google Ads Settings.
      </p>
      <br />
      <h2 className="text-lg font-bold">
        4. Deljenje podataka sa trećim stranama
      </h2>
      <p>
        Sajt ne prodaje, ne iznajmljuje i ne deli vaše podatke sa trećim
        stranama, osim u slučajevima kada je to neophodno za funkcionisanje
        analitičkih i reklamnih servisa.
      </p>
      <br />
      <h2 className="text-lg font-bold">
        5. Vaša prava i kontrola nad podacima
      </h2>
      <p>
        U skladu sa zakonima o zaštiti podataka (npr. GDPR, ako ste iz EU),
        imate pravo da:
      </p>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Zatražite uvid u podatke koji se o vama prikupljaju (ako postoje).
        </li>
        <li>Zatražite brisanje ili ispravku podataka.</li>
        <li>Onemogućite prikupljanje podataka putem kolačića.</li>
      </ul>
      <br />
      <h2 className="text-lg font-bold">6. Bezbednost podataka</h2>
      <p>
        Iako ne prikupljamo lične podatke, koristimo sigurnosne mere kako bismo
        zaštitili tehničke informacije koje se automatski prikupljaju.
      </p>
      <br />
      <h2 className="text-lg font-bold">7. Izmene politike privatnosti</h2>
      <p>
        Sajt zadržava pravo da ažurira ovu politiku privatnosti. Svaka promena
        biće objavljena na ovoj stranici, a datum poslednje izmene biće ažuriran
        na vrhu dokumenta.
      </p>
    </div>
  );
}
