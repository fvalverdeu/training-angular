export interface IHero {
  response: string;
  id: number;
  name: string;
  slug: string;
  powerstats: {
      intelligence: number,
      strength: number,
      speed: number
      durability: number,
      power: number,
      combat: number
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export interface IHeroDetail {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
  sm: string;
}
