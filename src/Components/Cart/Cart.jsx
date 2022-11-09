import React from "react";
import "./Cart.css";

const Cart = props => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="drawer-korzina">
          Корзина
          <button onClick={() => props.setModalCart(false)}>X</button>
          <img
            className="removeBtn"
            width={20}
            height={20}
            src="https://cdn-icons-png.flaticon.com/128/7236/7236457.png"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/krosovki1.jpg)" }}
              className="cartItemImg"></div>

            <div className="cartItem-p">
              <p className="cartItem-kroc">
                Мужские кроссовки 1<br />
                Nike Blazer Mid Suede
              </p>
              <b>Цена 12 999 руб.</b>
              <div>
                <img
                  className="removeBtn"
                  width={20}
                  height={20}
                  src="https://cdn-icons-png.flaticon.com/128/7236/7236457.png"
                  alt="Remove"
                />
              </div>
            </div>
          </div>

          {/* 2 Корзинка start*/}
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/krosovki1.jpg)" }}
              className="cartItemImg"></div>
            <div className="cartItem-p">
              <p className="cartItem-kroc">
                Мужские кроссовки 1<br />
                Nike Blazer Mid Suede
              </p>
              <b>Цена 12 999 руб.</b>
              <div>
                <img
                  className="removeBtn"
                  width={20}
                  height={20}
                  src="https://cdn-icons-png.flaticon.com/128/7236/7236457.png"
                  alt="Remove"
                />
              </div>
            </div>
          </div>
          {/* 2 Корзинка end */}
          {/* 3 Корзинка start*/}
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/krosovki1.jpg)" }}
              className="cartItemImg"></div>
            <div className="cartItem-p">
              <p className="cartItem-kroc">
                Мужские кроссовки 1<br />
                Nike Blazer Mid Suede
              </p>
              <b>Цена 12 999 руб.</b>
              <div>
                <img
                  className="removeBtn"
                  width={20}
                  height={20}
                  src="https://cdn-icons-png.flaticon.com/128/7236/7236457.png"
                  alt="Remove"
                />
              </div>
            </div>
          </div>
          {/* 3 Корзинка end */}
          <div className="cartTotalBlock">
            <ul className="TotalBlock">
              <li className="itogo">
                <span>Итого</span>
                <div className="cherta1"></div>
                <b>21 498 руб.</b>
              </li>
              <li className="nalog">
                <span>Налог 5%:</span>
                <div className="cherta2"></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton ">
              Оформить заказ
              <img
                width={20}
                height={20}
                src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png"
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
