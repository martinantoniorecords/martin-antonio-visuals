import React, { useState, useEffect } from "react";

// PayPal Hosted Button Component
const PayPalHostedButton = () => {
  useEffect(() => {
    const renderButton = () => {
      if (window.paypal && window.paypal.HostedButtons) {
        window.paypal.HostedButtons({
          hostedButtonId: "TEY86AE9HNP56"
        }).render("#paypal-container-TEY86AE9HNP56");
      }
    };

    if (window.paypal) {
      renderButton();
    } else {
      const interval = setInterval(() => {
        if (window.paypal) {
          clearInterval(interval);
          renderButton();
        }
      }, 100);
    }
  }, []);

  return <div id="paypal-container-TEY86AE9HNP56" className="mt-4"></div>;
};

function App() {
  const [showPayPal, setShowPayPal] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const scriptId = "paypal-sdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=BAAVYiC-srs0QQ7eQzFSPWsDfdJxKxthYO920jVotBhncf-yHaoRwrA_AOdHpsvzPCvCzWsQxa6UzGm5gA&components=hosted-buttons&disable-funding=venmo&currency=EUR";
      script.id = scriptId;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  const handleSponsorClick = () => {
    if (agreed) setShowPayPal(true);
    else alert("Please agree to the terms before proceeding.");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-4xl mx-auto space-y-10 font-sans">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Martin Antonio Records</h1>
        <p className="mt-2 text-xl">Visuals and Music for Artists with a Voice.</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <ul className="space-y-1">
          <li>🎥 Music video direction & editing</li>
          <li>📱 Promo kits for Instagram, YouTube, & TikTok</li>
          <li>🎨 Cover art & short-form reels</li>
          <li>🧠 Artist branding & digital storytelling</li>
          <li>🎶 Music production lessons and training</li>
          <li>🎧 Music production services (beat-making, mixing, mastering)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          This is not a service. This is a movement. We give upcoming artists access to clean,
          cinematic promo and visuals — without watering down their style or draining their budget.
        </p>
        <p className="mt-2">
          We offer community-tier pricing. No charity. No cookie-cutter. Every project is built from
          scratch for artists with a voice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Music Production Lessons</h2>
        <ul className="space-y-1">
          <li>🎚️ Learn music production software (Ableton, FL Studio, etc.)</li>
          <li>🎼 Get hands-on experience with beat-making and sound design</li>
          <li>🎛️ Improve your mixing and mastering skills for professional-quality tracks</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Music Production Services</h2>
        <ul className="space-y-1">
          <li>🎵 Custom beats tailored to your style</li>
          <li>🎚️ Professional mixing and mastering services</li>
          <li>🎧 High-quality sound production for any genre</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Promote your youtube video</h2>
        <p>you will get real organic views</p>

        <label className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="form-checkbox h-4 w-4 text-yellow-400"
          />
          <span>I agree to the Terms and Conditions</span>
        </label>

        {agreed && (
          <div className="mt-4 text-sm bg-gray-900 p-4 rounded border border-gray-700 space-y-2">
            <p>
              By proceeding, you confirm that the video being promoted:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Does not contain nudity, hate speech, or violent content</li>
              <li>Complies with YouTube’s community guidelines</li>
              <li>May take 1–3 days for processing and promotion</li>
              <li>Is not eligible for refund once promotion begins</li>
          
            </ul>
          </div>
        )}

        <button
          onClick={handleSponsorClick}
          className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          Sponsor the Visual
        </button>

        {showPayPal && <PayPalHostedButton />}
      </section>

      <footer className="border-t border-gray-600 pt-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>
          DM on IG:{" "}
          <a href="https://instagram.com/martinantoniorecords" className="underline">
            @martinantoniorecords
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:martinantoniorecords@gmail.com" className="underline">
            martinantoniorecords@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
