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

exports.index = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

exports.newForm = (req, res) => {
  res.render("form", { title: "New Message" });
};

exports.create = (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
};

exports.show = (req, res) => {
  const { id } = req.params;
  const msg = messages[id];
  if (msg) {
    res.render("message", { message: msg });
  } else {
    res.status(404).render("404");
  }
};
