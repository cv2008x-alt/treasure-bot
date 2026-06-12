const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot Sayyad Al Kunuz شغال 24 ساعة');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'أهلاً فيك! بوت صياد الكنوز جاهز للصيد 🎣💰');
});
