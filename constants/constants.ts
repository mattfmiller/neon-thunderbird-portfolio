import { Photo } from "./typeDefs";

export enum Collection {
  PeopleBW,
  PeopleColor,
  PlacesBW,
  PlacesColor,
  ThingsBW,
  ThingsColor,
}

export enum FilmStock {
  KodakPortra400 = "Kodak Portra 400",
  KodakPortra800 = "Kodak Portra 800",
  KodakTriX400 = "Kodak Tri-X 400",
  KodakUltramax400 = "Kodak Ultramax 400",
  IlfordFP4125 = "Ilford FP4 124",
  IlfordOrtho80 = "Ilford Ortho 80",
}

export enum Camera {
  Hasselblad500cm = "Hasselblad 500c/m",
  GraflexCrownGraphic = "Graflex Crown Graphic",
  OlympusXA = "Olympus XA",
}

export const PhotoData: Photo[] = [
  {
    film: FilmStock.KodakPortra400,
    camera: Camera.Hasselblad500cm,
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLX6FuOYSm31AGnZovfqLJpIs7L1OGN3jP0dmMXLWukFWNx5Av56Ze-hsISYiU9NpqLn95XkVm-PAmUM_NnOruyD0e2beSaGEr49-fQbTxdBq9pVyIgLvtnF-PIVozQ_Fddq0m4xfhOOqr3h7-Id-LfG=w1920-h1536-no",
    name: "Junk Yard",
    collection: Collection.ThingsColor,
    cover: false,
  },
  {
    film: FilmStock.IlfordOrtho80,
    camera: Camera.Hasselblad500cm,
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLXCWi0Ona6hUQQGiXG77oQxX3nhKJOsNq86e6lyRpBBOHl0Wcrb_XXqNb8If_be_PFqTR96sHz6_e4TK7fF2OPb2nzYqYPLwBH_ruqLx4ibw-cS0-yO5Eo7WgQYBxS6CSzc9QagNvVUQTCoRNAWd5PT=s1920-no",
    name: "Jen Ollali",
    collection: Collection.PeopleBW,
    cover: true,
  },
  {
    film: FilmStock.KodakUltramax400,
    camera: Camera.OlympusXA,
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLWX34jJZiq6SuqYClbcCkonlRpMPcwAU9pCJ7-cLlcuP3l2HtyjcvqQA1Tj6803rP5OM-P5zKufDwT36Wna2dw-HBcT2kkv9tttASonAjK7P71c794X78hwCZZNqVfSoXv-ULNFuExz9OYUlRvR2GOT=w1920-h1272-no",
    name: "King Vic",
    collection: Collection.PeopleColor,
    cover: true,
  },
  {
    film: FilmStock.IlfordFP4125,
    camera: Camera.GraflexCrownGraphic,
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLUDnuRQpciEuFuWfc0Ql_OrrZecMFcJZaMDXksadWmitfp1o-O1TuspFvnGNSZPZa4bISThrmYGhhKi44yrMbCqxoSsIzJrLl8iESPUO6SVpvD0bI7lMtmW-dp17tdgR0D2Y4mTNhIV5qWdVEf1PCQS=w1920-h1547-no",
    name: "Morant's Curve",
    collection: Collection.PlacesBW,
    cover: true,
  },
  {
    film: FilmStock.KodakPortra800,
    camera: Camera.Hasselblad500cm,
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLU0j5qU4moLAX07yfrvzAhK0MJR47ZTIcuVI7_HrMXTxeG4CC17lEveziTTz7x2xQXRCQxNn3iWktQYxCQSXAi4Mt7EmIyBkbS2S80f0xO5fBUYVDryGOJbtlQymWU_fG7xypBsODqPSHqSDuF2YtGy=w1920-h1440-no",
    name: "Thanksgiving Sunset",
    collection: Collection.PlacesColor,
    cover: true,
  },
  {
    film: FilmStock.KodakTriX400,
    camera: Camera.OlympusXA,
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLUUU6YJgRz8LaJm9ADXAE4D8_oCWuQtwU4kVVKln0m6RwikjNswn6smFotruhHJdOQAm2Nz0QsdafzG6ePsPK9CRKFY0rJjdWRgaOJdg-bsGQMYibS9gMoprHW6oDA2Z5B1w4fFp7X4qilFLN28JDHV=w1920-h1280-no",
    name: "Fleetwood",
    collection: Collection.ThingsBW,
    cover: true,
  },
  {
    film: FilmStock.KodakPortra800,
    camera: Camera.Hasselblad500cm,
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLUHxTIeD-rL3XLVxSfhsiFoe3CMzTppxBpwqntKo9lEZsrMmcu11njThzl8Zlt5KrVED8DAFFkn-0e4DBbbaGDr7oxPL-v8WOB1KQkL3P6pDVqfnlaPPvbkWi_0AXkqSFB5-3mNp96_xwYvaP4CwNEa=w1900-h1920-no",
    name: "The Palms",
    collection: Collection.ThingsColor,
    cover: true,
  },
];

export const CollectionCoverPhotos = {
  [Collection.PeopleBW]: PhotoData.filter(
    (photo) => photo.collection === Collection.PeopleBW
  ).find((element) => element.cover)?.source,
  [Collection.PeopleColor]: PhotoData.filter(
    (photo) => photo.collection === Collection.PeopleColor
  ).find((element) => element.cover)?.source,
  [Collection.PlacesBW]: PhotoData.filter(
    (photo) => photo.collection === Collection.PlacesBW
  ).find((element) => element.cover)?.source,
  [Collection.PlacesColor]: PhotoData.filter(
    (photo) => photo.collection === Collection.PlacesColor
  ).find((element) => element.cover)?.source,
  [Collection.ThingsBW]: PhotoData.filter(
    (photo) => photo.collection === Collection.ThingsBW
  ).find((element) => element.cover)?.source,
  [Collection.ThingsColor]: PhotoData.filter(
    (photo) => photo.collection === Collection.ThingsColor
  ).find((element) => element.cover)?.source,
};

export const CollectionLabels = {
  [Collection.PeopleBW]: "People B&W ",
  [Collection.PeopleColor]: "People Color",
  [Collection.PlacesBW]: "Places B&W ",
  [Collection.PlacesColor]: "Places Color",
  [Collection.ThingsBW]: "Things B&W ",
  [Collection.ThingsColor]: "Things Color",
};

export const NAV_HEIGHT = 75;
