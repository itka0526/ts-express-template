import express from "express";
import path from "path";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.join(process.cwd(), "/public")));

app.listen(PORT, () => console.log(`Server is running on port:${PORT}.`));
