import express from "express";
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string, 
  content: string, 
  type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {

  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    // read file
    try{
      const result = await fs.readFile(fullPath, { encoding: 'utf-8' });
      res.send(JSON.parse(result));

    } catch (err) {
      // @ts-ignore
      if (err.code === 'ENOENT') {
        // add code to create a file and add default cells
        await fs.writeFile(fullPath, '[]', 'utf-8');
        res.send([]);
      } else {
        throw err;
      }
    }

    // if read error, see if file doesn't exist, then create it

    // parse list of cells

    // send list of cells back to browser
  });

  router.post('/cells', async (req, res) => {

    // take list of cells from request and serialize them
    const { cells }: { cells: Cell[] } = req.body;

    // write cells to file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');
    res.send({ status: 'ok' });

  });

  return router;
}

