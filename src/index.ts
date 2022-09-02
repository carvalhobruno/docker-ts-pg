import express from "express";
import { Sequelize } from "sequelize";

const PORT = process.env.PORT || 3000;
const sequelize = new Sequelize("postgres", "postgres", process.env.PG_PASSWORD, {
  host: "postgres",
  dialect: "postgres"
});

function connectSequelize():Promise<any> {
  return sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })

}


const app = express();

app.get("/ping", async (req, res) => {
  const database = await sequelize.query("SELECT 1 + 1").then(() => "up").catch(() => "down");
  res.send({
    environment: process.env.NODE_ENV,
    database,
    "Deus é top?": !!database
  });
});


(async () => {
  await connectSequelize();
  app.listen(PORT, () => {
    console.log(`Started at http://localhost:${PORT}`);
  });
})();
