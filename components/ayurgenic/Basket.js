import React from "react";
import Header from "./Header";
import { BsFillCartXFill } from "react-icons/bs";
// import RazorpayButton from './RazorpayButton';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.18;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const checkout = () => {
    // alert("Vansh Ka checkout");
    // alert(cartItems);
    let itemsString = " ";
    itemsString = "Hey I want to buy this from you : %0A";
    cartItems.map((item) => {
      itemsString =
        itemsString +
        "ID : " +
        item.id +
        " - " +
        item.name +
        " - QTY : " +
        item.qty +
        " - of Price Rs. " +
        item.price +
        "/- %0A";

      // New line :  %0A
      // Space : %20
      // id: "3"
      // image: "https://picsum.photos/id/21/3008/2008"
      // name: "W Shoes"
      // price: 1000
      // qty: 5
    });
    // alert(itemsString);

    window.open("https://polygon-peer-to-peer-payment.vercel.app");
  };
  return (
    <aside className="block basis-1/3  w-96 order-first lg:order-last">
      <Header countCartItems={cartItems.length} />

      <div className=" p-3 my-2 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        {cartItems.length === 0 && (
          <div className=" flex flex-col h-20 lg:h-96 justify-center items-center">
            <div className="p-2">
              <BsFillCartXFill size={"1.5rem"} />
            </div>
            <div className="p-2">Your Cart is empty</div>
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center">
            <div className="col-2">{item.name}</div>
            <div className="">
              <button
                onClick={() => onRemove(item)}
                className="remove m-[20px]"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button onClick={() => onAdd(item)} className="add m-[20px]">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {/* test changes done by vw*/}
              {/* {item.qty} x ₹{item.price.toFixed(2)} */}
              {item.qty} x ₹{item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">₹{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">₹{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ₹{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₹{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row my-5">
              <button className=" m-5 btn-grad w-full " onClick={checkout}>
                Checkout
              </button>
              {/* <RazorpayButton amount={500} /> */}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
