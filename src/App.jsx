import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useWebAppInitDataUnsafe } from "@kloktunov/react-telegram-webapp";

function App() {
  const tele = window.Telegram.WebApp;
  useEffect(() => {
    tele.ready();
    tele.expand();
    // tele.MainButton.text = "nhấn vào đây";
    // tele.MainButton.show();
    console.log("tele.initDataUnsafe", tele.initDataUnsafe);
    console.log("tele", tele);
    console.log("tele.initData", tele.initData);
    const searchParams = new URLSearchParams(window.location.search);
    const idChat = searchParams.get("idChat");
    console.log("searchParams", searchParams);
    console.log("chatID", idChat);
    // tele.onUserAuthorized(function (user) {
    //   // Lấy tên người dùng
    //   const name = user.firstName + " " + user.lastName;

    //   // Lấy ID người dùng
    //   const id = user.id;

    //   // Lấy ảnh đại diện của người dùng
    //   const photo = user.photoUrl;

    //   // Hiển thị thông tin người dùng
    //   console.log(name, id, photo);
    // });
  }, []);

  // const onCheckout = () => {
  //   tele.MainButton.text = "nhấn vào đây";
  //   tele.MainButton.show();
  // };
  // return (
  //   <>
  //     <h1 className="text-3xl text-red-200 font-bold underline">
  //       Hello world! Đây là telegram mini app thử cái nè update cái
  //     </h1>
  //     <button onClick={onCheckout} className="bg-slate-300">aaaa</button>
  //   </>
  // );

  const initDataUnsafe = useWebAppInitDataUnsafe();
  console.log("initDataUnsafe", initDataUnsafe);
  return (
    <>
      <div>{JSON.stringify(initDataUnsafe)}</div>
      <>Build lần 1</>
    </>
  );
}

export default App;
