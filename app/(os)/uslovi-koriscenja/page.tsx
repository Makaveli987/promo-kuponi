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
      <h2 className="text-2xl font-bold my-8 ">
        Opšti uslovi korišćenja portala promokuponi.com
      </h2>

      <h1 className="text-lg font-bold"></h1>
      <p>
        Ovim opštim uslovima korišćenja (u daljem tekstu &quot;OUK&quot;)
        regulišu se uslovi korišćenja usluga sajta promokuponi.com.
      </p>
      <br />

      <h2 className="text-lg font-bold">
        1. Definicija uslova i predmeta ugovora
      </h2>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          <span className="font-semibold">Oglašivač</span> je online prodavnica
          koja oglašava svoje usluge/proizvode i objavljuje kupone preko Sajta.
        </li>
        <li>
          <span className="font-semibold">Korisnik</span> je svako pravno ili
          fizičko lice koje koristi kupone preko Sajta za kupovinu u online
          prodavnicama Oglašivača.
        </li>
        <li>
          <span className="font-semibold">Sajt</span> je web stranica sa URL-om{" "}
          <span className="font-semibold">www.promokuponi.com</span> preko koje
          Oglašivači objavljuju kupone.
        </li>
        <li>
          <span className="font-base">Kupon</span> je kod, popust ili druga
          pogodnost objavljena na Sajtu, koja daje pravo Korisniku da zatraži
          popust ili drugu pogodnost prilikom kupovine u online prodavnici
          Oglašivača.
        </li>
        <li>
          <span className="font-base">Ugovor</span> je ugovor o pružanju usluga,
          kojim se obezbeđuje objavljivanje kupona ili pružanje drugih usluga na
          Sajtu.
        </li>
      </ul>

      <br />

      <h2 className="text-lg font-bold">2. Prava i obaveze strana</h2>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Sajtje dužan da obezbedi objavljivanje Kupona ili pruži druge
          ugovorene usluge.
        </li>
        <li>
          Sajt ima pravo na ugovorenu naknadu od Oglašivača za pružanje svojih
          usluga.
        </li>
        <li>
          Oglašivač se slaže sa sadržajem ovih OUK prilikom naručivanja usluga
          objavljivanja kupona.
        </li>
      </ul>

      <br />
      <h2 className="text-lg font-bold">3. Odricanje od odgovornosti</h2>
      <p>
        Promokuponi.com je informativni portal koji objavljuje kupone i
        promocije oglašivača. Sajt ne garantuje tačnost, dostupnost ili
        validnost objavljenih kupona. Svi korisnici sajta prihvataju da koriste
        informacije sa sajta na sopstvenu odgovornost.
      </p>
      <p>
        Sajt <strong>nije odgovoran</strong> za bilo kakve gubitke, štetu ili
        nesporazume nastale korišćenjem kupona ili promocija. Svi pravni odnosi
        između korisnika i oglašivača regulišu se direktno između tih strana,
        bez uključivanja sajta promokuponi.com.
      </p>

      <br />

      <h2 className="text-lg font-bold">4. Izmene Opštih uslova korišćenja</h2>
      <p>
        Sajt ima pravo da jednostrano izmeni ove OUK. U slučaju izmene, Sajt je
        dužan da obavesti Oglašivače putem e-maila najkasnije 15 dana nakon
        promene.
      </p>

      <br />
      <h2 className="text-lg font-bold">5. Primena poslovnih običaja</h2>
      <p>
        Ugovorne strane mogu se pozivati na poslovne običaje pod uslovom da nisu
        u suprotnosti sa ovim OUK, ugovorom ili zakonskim propisima.
      </p>

      <br />
      <h2 className="text-lg font-bold">6. Završne odredbe</h2>
      <p>
        Ovi OUK su sastavni deo svakog ugovora sklopljenog između Sajta i
        Oglašivača i primenjuju se na sve poslovne odnose koji proizilaze iz
        takvih ugovora.
      </p>
    </div>
  );
}
