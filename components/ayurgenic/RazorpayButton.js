import React from 'react';
// import Razorpay from 'razorpay';
import Razorpay from 'razorpay';


const RazorpayButton = ({ amount }) => {
  const options = {
    key: 'YOUR_RAZORPAY_KEY_ID',
    amount: amount * 100,
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Payment for services',
    image: 'https://yourcompanylogo.com/logo.png',
    handler: function(response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      contact: '9999999999'
    }
  };

  const paymentHandler = new Razorpay(options);

  const handleClick = () => {
    paymentHandler.open();
  };

  return (
    <button onClick={handleClick}>
      Pay {amount} INR
    </button>
  );
};

export default RazorpayButton;
