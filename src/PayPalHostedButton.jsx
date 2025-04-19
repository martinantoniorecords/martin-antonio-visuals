import React, { useEffect } from 'react';

const PayPalHostedButton = () => {
  useEffect(() => {
    const loadPayPal = async () => {
      if (!window.paypal) return;

      window.paypal.HostedButtons({
        hostedButtonId: "BCDVYYLN7TW8C"
      }).render("#paypal-container-BCDVYYLN7TW8C");
    };

    loadPayPal();
  }, []);

  return <div id="paypal-container-BCDVYYLN7TW8C"></div>;
};

export default PayPalHostedButton;
