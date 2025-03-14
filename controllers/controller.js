const db = require("../db/queries");

async function getMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", {
        title: "Mini Messageboard", messages: messages
    });
}

async function addMessage(req, res) {
    if (req.body.submit === "submit") {
        await db.addMessage({
            msg_text: req.body.message,
            msg_user: req.body.name,
            msg_added: new Date()
        })
    }
    res.redirect("/");
}

async function deleteAll(req, res) {
    await db.deleteAll();
    res.redirect("/");
}

module.exports = {
    getMessages,
    addMessage,
    deleteAll
}