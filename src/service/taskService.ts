import Task, { ITask } from '../models/taskModel';

export const insertTask = async (params: ITask) => {
  try {
    const newTask = new Task(params);
    const savedTask = await newTask.save();
    return savedTask;
  } catch (error) {
    throw new Error('Erro ao inserir tarefa');
  }
};

export const findAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error('Erro ao buscar tarefas');
  }
};

export const findByIdAndUpdate = async (id: string, body: Partial<ITask>) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, body, { new: true });

    if (!updatedTask) {
      throw new Error('Tarefa não encontrada');
    }

    return updatedTask;
  } catch (error) {
    throw new Error('Erro ao atualizar tarefa');
  }
};

export const findByIdAndDelete = async (id: string) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      throw new Error('Tarefa não encontrada');
    }

    return deletedTask;
  } catch (error) {
    throw new Error('Erro ao excluir tarefa');
  }
};
