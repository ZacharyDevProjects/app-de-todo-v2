// Importer les modules nécessaires
const { Client } = require("pg");
const dotenv = require("dotenv");

// Charger les variables d'environnement
dotenv.config();

// Configuration du client de base de données
const client = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_KEY,
  database: process.env.DATABASE_NAME,
});

// Fonction pour exécuter une requête SQL
const executeQuery = async (querySQL) => {
  try {
    const result = await client.query(querySQL);
    return result.rows;
  } catch (err) {
    console.log("Erreur lors de l'exécution de la requête:", err.stack);
    throw err;
  }
};

// Fonction pour se connecter à la base de données
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connecté à la base de données");
  } catch (err) {
    console.error(
      "Impossible de se connecter à la base de données:",
      err.stack
    );
    process.exit(1); // Quitter le processus si la connexion échoue
  }
}

// Requête SQL pour récupérer toutes les tâches
const allTasksQuery = `SELECT * FROM task;`;

// Fonction pour récupérer toutes les tâches
async function getAllTasks() {
  try {
    const tasks = await executeQuery(allTasksQuery);
    console.log("Tâches :", tasks);
    return tasks;
  } catch (err) {
    console.log("Erreur lors de la récupération des tâches");
    throw err;
  }
}

// Connecter à la base de données et récupérer toutes les tâches
connectToDatabase().then(() => {
  getAllTasks();
});
