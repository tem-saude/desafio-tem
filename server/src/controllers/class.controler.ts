import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

// GET
export const getClass = async (req: Request, res: Response): Promise<Response> => {
  const repo = await getRepository(Class).find();
  return res.json(repo);
};

// POST
export const createClass = async (req: Request, res: Response): Promise<Response> => {
  const newClass = getRepository(Class).create(req.body);
  const results = await getRepository(Class).save(newClass);

  return res.json(results);
};

// PUT
export const updateClass = async (req: Request, res: Response): Promise<Response> => {
  const repo = await getRepository(Class).findOne(req.params.id);

  if (repo) {
    getRepository(Class).merge(repo, req.body);
    const results = await getRepository(Class).save(repo);
    return res.json(results);
  }

  return res.status(404).json({ message: 'User Not Found' });
};

// DELETE
export const deleteClass = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Class).delete(req.params.id);
  return res.json(results);
};
