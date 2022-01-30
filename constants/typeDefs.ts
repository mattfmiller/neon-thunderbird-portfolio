import { Camera, Collection, FilmStock } from "./constants";

export interface Photo {
  film: FilmStock;
  camera: Camera;
  source: string;
  name: string;
  collection: Collection;
  cover: boolean;
}
