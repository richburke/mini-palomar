// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RawForm5500Entry } from '../../core';
import * as data from '../../data/form-5500.json';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<RawForm5500Entry[]>,
) {
  res.status(200).json(data);
}
