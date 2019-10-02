const Sequelize = require('sequelize')

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:secret@localhost:5432/postgres'

const db = new Sequelize(connectionString)

db
  .sync()
  .then(() => console.log('Database schema connected'))
  .catch(console.error)

module.exports = db;