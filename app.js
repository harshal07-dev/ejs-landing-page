import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import expressLayouts from "express-ejs-layouts";
import colors from "colors";
import dotenv from "dotenv";
import { title } from "process";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/img", express.static(path.join(__dirname, "public/img")));

// set templating engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("layout", path.join(__dirname, "views/layouts/fullWidth.ejs"));

// routes
app.get("/", (req, res) => {
  res.render("index", { title: "HomePage" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "AboutPage" });
});

const PORT = process.env.PORT || 3000;

app.listen(5000, () =>
  console.log(`server is listening on the port ${PORT}`.cyan.underline.bold)
);
