const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { sequelize } = require('./models');

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/tasks', require('./routes/tasks'));

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
