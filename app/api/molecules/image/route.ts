// pages/api/render-chemical.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { inchi } = req.query;

    if (!inchi || Array.isArray(inchi)) {
      return res.status(400).json({ error: 'InChI string is required and must be a single value.' });
    }

    const outputFilePath = path.join(process.cwd(), 'public', 'chemical.png');

    try {
      // Run Open Babel command
      await execAsync(`obabel -x "${inchi}" -O ${outputFilePath} --gen2D`);

      // Send the image URL back to the client
      res.status(200).json({ imageUrl: '/chemical.png' });
    } catch (error) {
      console.error('Error rendering chemical:', error);
      res.status(500).json({ error: 'Failed to render chemical.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
