import React, { useState, useEffect } from "react";
import PayPalHostedButton from "./PayPalHostedButton";

function App() {
  const [showPayPal, setShowPayPal] = useState(false);

  useEffect(() => {
    // Dynamically load the PayPal SDK script once
    const scriptId = "paypal-sdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=BAAVYiC-srs0QQ7eQzFSPWsDfdJxKxthYO920jVotBhncf-yHaoRwrA_AOdHpsvzPCvCzWsQxa6UzGm5gA&components=hosted-buttons&disable-funding=venmo&currency=EUR";
      script.id = scriptId;
      script.crossOrigin = "anonymous";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSponsorClick = () => {
    setShowPayPal(true);
  };

  return (
    <div className="App">
      <h1>Martin Antonio Visuals</h1>
      <button onClick={handleSponsorClick}>
        Sponsor the Visual
      </button>

      {showPayPal && <PayPalHostedButton />}
    </div>
  );
}

export default App;
