import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Cancel from "../../assets/icon/cancel.svg";
import "./Sidebar.css";
import Select1 from "../Select/Select1";
import Hilding from "../../assets/img/HildingLogo.png";
import Viza from "../../assets/img/VizaLogo.png";
import Master from "../../assets/img/MastercardLogo.png";
import ApplePay from "../../assets/img/applepayLogo.jpg";
import GooglePay from "../../assets/img/googlepayLogo.png";
import MirPay from "../../assets/img/mirLogo.jpg";
import Opl from "../../assets/img/oplLogo.png";

export default function Sidebar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 740 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <div className="said_top">
          <h1>Доставка и самовывоз</h1>
          <button onClick={toggleDrawer(anchor, false)}>
            <img src={Cancel} alt="icon" />
          </button>
        </div>
        <div className="ourTop">
          <Select1 />
          <div className="our">
            <div className="left">
              <p>Доставка в пределах территории города</p>
              <p> Доставка за пределами города</p>
            </div>
            <div className="right">
              <p>бесплатно</p>
              <p>200 тг/км</p>
            </div>
          </div>
          <h1>Сроки доставки </h1>
          <div className="our2">
            <div className="left2">
              <p> При наличии на складе в Алматы </p>
              <p>При наличии на складе в другом городе </p>
            </div>
            <div className="right2">
              <p>1–3 рабочих дней</p>
              <p>3–10 рабочих дней</p>
            </div>
          </div>
          <div className="our3">
            <h1> Способы оплаты</h1>

            <div className="image">
              <img src={Hilding} alt="" />
              <img src={Viza} alt="" />
              <img src={Master} alt="" />
              <img src={ApplePay} alt="" />
              <img src={GooglePay} alt="" />
              <img src={MirPay} alt="" />
              <img src={Opl} alt="" />
            </div>
          </div>
          <div className="lastdown">
            <h1>Самовывоз</h1>
            <div className="downlist">
              <p>
                Вы можете забрать Ваш заказ в любом из магазинов Askona или со
                склада в городах.
              </p>
              <p>
                {" "}
                Перед посещением магазина или склада обязательно необходимо
                согласовать детали заказа с менеджером Интернет-магазина:{" "}
              </p>
              <ul>
                <li>Получить подтверждение о наличии товара.</li>
                <li>Получить номер заказа.</li>
                <li>
                  Согласовать время, в которое Вам удобно будет забрать заказ.
                </li>
              </ul>
              <div className="our4">
                <h1>Правила оказания услуги</h1>
                <p>
                  При самовывозе товара со склада нужно заранее заказывать
                  пропуск.
                </p>
                <p>Самовывоз товара не осуществляется в праздничные дни.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
