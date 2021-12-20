// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { photos } from "../../../photoData";

export type PhotoData = {
  id: number;
  name: string;
  source: string;
  camera: string;
  film: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PhotoData[]>
) {
  res.status(200).json(photos);
}
