export type BrandKey =
  | "Volkswagen"
  | "Audi"
  | "Skoda"
  | "Seat"
  | "Porsche";

export type ModelItem = {
  name: string;
  slug: string;
};

export const brandModels: Record<BrandKey, ModelItem[]> = {
  Volkswagen: [
    { name: "Passat", slug: "passat" },
    { name: "Golf", slug: "golf" },
    { name: "Polo", slug: "polo" },
    { name: "Jetta", slug: "jetta" },
    { name: "Tiguan", slug: "tiguan" },
    { name: "Caddy", slug: "caddy" },
    { name: "Transporter", slug: "transporter" },
    { name: "Touareg", slug: "touareg" },
    { name: "Scirocco", slug: "scirocco" },
    { name: "Arteon", slug: "arteon" },
    { name: "Beetle", slug: "beetle" },
    { name: "Caravelle", slug: "caravelle" },
    { name: "Crafter", slug: "crafter" },
    { name: "Amarok", slug: "amarok" },
    { name: "Multivan", slug: "multivan" },
  ],
  Audi: [
    { name: "A1", slug: "a1" },
    { name: "A3", slug: "a3" },
    { name: "A4", slug: "a4" },
    { name: "A5", slug: "a5" },
    { name: "A6", slug: "a6" },
    { name: "A7", slug: "a7" },
    { name: "A8", slug: "a8" },
    { name: "Q2", slug: "q2" },
    { name: "Q3", slug: "q3" },
    { name: "Q5", slug: "q5" },
    { name: "Q7", slug: "q7" },
    { name: "Q8", slug: "q8" },
    { name: "TT", slug: "tt" },
    { name: "R8", slug: "r8" },
    { name: "e-tron", slug: "e-tron" },
  ],
  Skoda: [
    { name: "Fabia", slug: "fabia" },
    { name: "Octavia", slug: "octavia" },
    { name: "Superb", slug: "superb" },
    { name: "Scala", slug: "scala" },
    { name: "Kamiq", slug: "kamiq" },
    { name: "Karoq", slug: "karoq" },
    { name: "Kodiaq", slug: "kodiaq" },
    { name: "Rapid", slug: "rapid" },
    { name: "Roomster", slug: "roomster" },
    { name: "Yeti", slug: "yeti" },
    { name: "Citigo", slug: "citigo" },
    { name: "Favorit", slug: "favorit" },
    { name: "Felicia", slug: "felicia" },
  ],
  Seat: [
    { name: "Ibiza", slug: "ibiza" },
    { name: "Leon", slug: "leon" },
    { name: "Toledo", slug: "toledo" },
    { name: "Cordoba", slug: "cordoba" },
    { name: "Altea", slug: "altea" },
    { name: "Ateca", slug: "ateca" },
    { name: "Arona", slug: "arona" },
    { name: "Exeo", slug: "exeo" },
    { name: "Tarraco", slug: "tarraco" },
    { name: "Mii", slug: "mii" },
    { name: "Inca", slug: "inca" },
  ],
  Porsche: [
    { name: "911", slug: "911" },
    { name: "Boxster", slug: "boxster" },
    { name: "Cayenne", slug: "cayenne" },
    { name: "Cayman", slug: "cayman" },
    { name: "Macan", slug: "macan" },
    { name: "Panamera", slug: "panamera" },
    { name: "Taycan", slug: "taycan" },
  ],
};