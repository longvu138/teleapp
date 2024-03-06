import { Telegraf } from "telegraf";

const token = "6433254177:AAHbH9joDYkmGvMuF0hUwsemQF8BJsWIgoo";
const bot = new Telegraf(token);
const web_link = "https://glowing-gumption-01f3ac.netlify.app/";

bot.start((ctx) => {
  console.log(ctx.from);
  // Lấy username và ID người dùng
  const username = ctx.from.username;
  const id = ctx.from.id;
  console.log(`Username: ${username}`);
  console.log(`ID: ${id}`);

  // Sử dụng markup để tạo liên kết mini-app
  const keyboardMarkup = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🔴 Click me open app",
            web_app: { url: web_link },
          },
        ],
      ],
    },
  };

  return ctx.reply(
    "Welcome ahihi chạy rùi nè Click để mở web app nè",
    keyboardMarkup
  );
});

bot.launch();
