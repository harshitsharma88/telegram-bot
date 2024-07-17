require('dotenv').config();
const TelegramBot= require('node-telegram-bot-api');
const prompt = require('./genrative-API/prompt');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_API,{polling:true});


bot.on('message',async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    const text = await prompt(messageText);
    bot.sendMessage(chatId, text);


  });
