import { body, param, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const createTaskValidation = [
  body('title')
    .isString()
    .withMessage('Título é obrigatório e deve ser uma string'),
  body('description')
    .isString()
    .withMessage('Descrição é obrigatória e deve ser uma string'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const updateTaskValidation = [
  param('id').isMongoId().withMessage('ID inválido'),
  body('title').optional().isString().withMessage('Título deve ser uma string'),
  body('description')
    .optional()
    .isString()
    .withMessage('Descrição deve ser uma string'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const deleteTaskValidation = [
  param('id').isMongoId().withMessage('ID inválido'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
