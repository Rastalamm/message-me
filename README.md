# Overview

The purpose of this task is to show a simple Node.js based server with a client-facing module. There is also some integration with a third-party API for communications.

# Specifications

Build a minimal server in Node.js which has a root page with a form. This form should have fields for the following:

1. Email or ​cellphone number
2. A message to send

The goal is for me to be able to provide my cellphone number or my email, provide a message, and then press a button. On submission, a link should be sent to either the email or the cellphone number I provided. Upon opening this link, I should be taken to a page back on the server which shows the message I provided for that link.

## How to use

1. Clone the repo
2. Create a database called `messageme_dev` with a user `judah` (or you can modify the `config.json` file)
3. Make sure you have updated Twilio API keys (I left mine in for now) in the `config.js` file
4. Run the server! `npm run start`