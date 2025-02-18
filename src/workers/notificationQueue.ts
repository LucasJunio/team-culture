const Bull = require('bull');

const notificationQueue = new Bull('notificationQueue', {
  redis: {
    host: 'localhost',
    port: 6379,
  },
});

export default notificationQueue;
