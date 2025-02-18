import notificationQueue from './notificationQueue';

notificationQueue.process(async (job) => {
  const { taskId, taskTitle } = job.data;

  console.log(`Notificando: Tarefa "${taskTitle}" (ID: ${taskId}) foi criada!`);
});

console.log('Worker ativo e aguardando tarefas...');
