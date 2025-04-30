import express from "express";
import dotenv from "dotenv";
import sequelize from "./database/config";
import roleRoutes from "./routes/roleRotes";
dotenv.config();
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/roles", roleRoutes);
sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced.");
    app.listen(8000, () => console.log("Server running on port 3000"));
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
