const pool = require("./pool");

async function getMessages() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function addMessage(message) {
    await pool.query("INSERT INTO messages (msg_text, msg_user, msg_date) VALUES ($1, $2, $3)",
        [message.msg_text, message.msg_user, message.msg_added]);
}

async function deleteAll() {
    await pool.query("DELETE FROM messages");
}

module.exports = {
    getMessages,
    addMessage,
    deleteAll
}