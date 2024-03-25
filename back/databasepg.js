const { client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432, // default port
  password: "TRiCeLimpEra2?",
  database: "App-Tode",
});

client
  .connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Could not connect to database:", err.stack);
    process.exit(1); // Exit the process if connection fails
  });

const executeQuery = async (querySQL) => {
  try {
    const result = await client.query(querySQL);
    // console.log(result)
    return result.rows;
  } catch (err) {
    console.log("Error executing query:", err.stack);
    throw err;
  }
};

module.exports = executeQuery;
