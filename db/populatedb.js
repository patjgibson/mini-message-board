#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  msg_text VARCHAR ( 255 ),
  msg_user VARCHAR ( 255 ),
  msg_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO messages (msg_text, msg_user)
VALUES
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;


async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://patjgibson:1@localhost:5432/top_messages",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();