const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

let نقاط = {};

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🎮 أهلاً فيك بصياد الكنوز!\nاكتب /صيد عشان ترمي الشبكة 🎣\nاكتب /رصيد تشوف نقاطك 💰');
});

bot.onText(/\/صيد/, (msg) => {
  const id = msg.from.id;
  const الكنوز = ['💰 صندوق ذهب +100', '💎 ماسة +80', '🐟 سمكة +10', '🗑️ شبكة فاضية 0', '🦀 سرطان +20'];
  const الكنز = الكنوز[Math.floor(Math.random() * الكنوز.length)];
  const النقاط = parseInt(الكنز.match(/\d+/)[0]);

  if (!نقاط[id]) نقاط[id] = 0;
  نقاط[id] += النقاط;

  if (النقاط == 0) {
    bot.sendMessage(msg.chat.id, `يا خسارة! طلعت ${الكنز} 🎣😅\nرصيدك: ${نقاط[id]} نقطة`);
  } else {
    bot.sendMessage(msg.chat.id, `مبروك! طلعلك ${الكنز} 💎\nرصيدك: ${نقاط[id]} نقطة`);
  }
});

bot.onText(/\/رصيد/, (msg) => {
  const id = msg.from.id;
  bot.sendMessage(msg.chat.id, `رصيدك الحالي: ${نقاط[id] || 0} نقطة 💰`);
});
