# Overview

The purpose of this task is to prove you can develop a simple Node.js based server with a client-facing module. You will also integrate a third-party API for communications.

# Specifications

Build a minimal server in Node.js which has a root page with a form. This form should have fields for the following:

1. Email or ​cellphone number
2. A message to send

The goal is for me to be able to provide my cellphone number or my email, provide a message, and then press a button. On submission, a link should be sent to either the email or the cellphone number I provided. Upon opening this link, I should be taken to a page back on the server which shows the message I provided for that link. You may implement this with whatever technologies you choose (e.g. Twilio for SMS, Mandrill/Mailchimp for email). Any other third party services will work as well. You will to have setup a test account for these services. They should provide a free tier which you can use for the purpose of this task. For actually transmitting the message, you may include it in the link itself, or you may also use some sort of database in the backend which stores the data associated with the link. If you choose to pass the message along with link, consider using link shortening software like Bitly to make the link smaller.

If you choose to, you can publish the code to Heroku/AWS/or any other web host provider. Regardless, I will run your source code locally on my own machine, so please provide a one-page document on how I should go about installing your module, and any other relevant information
