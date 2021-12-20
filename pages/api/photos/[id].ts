// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PhotoData } from ".";
import { photos } from "../../../photoData";

type Error = {
  message: string;
};

type Data = PhotoData | Error;

export default function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filtered = photos.filter((photo) => photo.id.toString() === id);

  if (filtered.length) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Photo of ID ${id} wasn't found` });
  }
}
