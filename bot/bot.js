import { Telegraf } from "telegraf";

const token = "6433254177:AAHbH9joDYkmGvMuF0hUwsemQF8BJsWIgoo";
const bot = new Telegraf(token);
const web_link = "https://teleapp-ochre.vercel.app/";

bot.start((ctx) => {
  console.log("ctx", ctx);
  console.log("ctx.from", ctx.from);
  console.log("ctx.chat", ctx.chat);
  console.log("ctx.entities", ctx.entities);
  // Lấy username và ID người dùng
  const first_name = ctx.from.first_name;
  const last_name = ctx.from.last_name;
  const botName = ctx.botInfo.username
  const idChat = ctx.chat.id
  // Sử dụng markup để tạo liên kết mini-app
  const keyboardMarkup = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: `Xin chào ${first_name} ${last_name} 🔴 Click me open app`,
            web_app: { url: web_link +`?idChat=${idChat}`},
          },
        ],
      ],
    },
  };

  return ctx.reply(
    `Chào mừng đến với ${botName}, nhấn vào đây để tiếp tục`,
    keyboardMarkup
  );
});

bot.launch();
