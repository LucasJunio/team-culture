import { Request, Response } from 'express';
import {
  findAllTasks,
  insertTask,
  findByIdAndUpdate,
  findByIdAndDelete,
} from '../service/taskService';
import notificationQueue from '../workers/notificationQueue';

export const createTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const result = await insertTask(req.body);

    await notificationQueue.add({
      taskId: result._id,
      taskTitle: result.title,
    });

    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar tarefa' });
  }
};

export const readTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const result = await findAllTasks();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Erro ao consultar tarefa' });
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar tarefa' });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    return res.json({ message: 'Tarefa excluída com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao excluir tarefa' });
  }
};
