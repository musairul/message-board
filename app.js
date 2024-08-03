const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.use((req, res) => {
  res.status(404).render("404");
});

// Define routes
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
