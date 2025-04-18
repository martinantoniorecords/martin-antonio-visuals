import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";


export default function MartinAntonioRecords() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Martin Antonio Records</h1> {/* Changed title */}
        <p className="text-lg text-muted-foreground">Visuals and Music for Artists with a Voice.</p> {/* Updated description */}
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">What We Do</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🎥 Music video direction & editing</li>
              <li>📱 Promo kits for Instagram, YouTube, & TikTok</li>
              <li>🎨 Cover art & short-form reels</li>
              <li>🧠 Artist branding & digital storytelling</li>
              <li>🎶 Music production lessons and training</li> {/* New service */}
              <li>🎧 Music production services (beat-making, mixing, mastering)</li> {/* New service */}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p>
              This is not a service. This is a movement. We give upcoming artists access to clean, cinematic promo and visuals — without watering down their style or draining their budget.
            </p>
            <p>
              We offer <strong>community-tier pricing</strong>. No charity. No cookie-cutter. Every project is built from scratch for artists with a voice.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* New Section: Music Lessons & Production */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Music Production Lessons</h2>
            <p>Want to take your music to the next level? We offer one-on-one music production lessons, teaching you the ins and outs of making your own beats, mixing, and mastering your tracks.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>🎚️ Learn music production software (Ableton, FL Studio, etc.)</li>
              <li>🎼 Get hands-on experience with beat-making and sound design</li>
              <li>🎛️ Improve your mixing and mastering skills for professional-quality tracks</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Music Production Services</h2>
            <p>We also offer full music production services, from beat-making to mixing and mastering, to help you create the sound you’re envisioning.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>🎵 Custom beats tailored to your style</li>
              <li>🎚️ Professional mixing and mastering services</li>
              <li>🎧 High-quality sound production for any genre</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Support the Movement</h2>
        <p>If you believe in the vision, you can help fund visuals for an emerging artist.</p>
        <div className="flex justify-center gap-4">
          <Button>Donate</Button>
          <Button variant="outline">Sponsor a Visual</Button>
        </div>
      </section>

      <section className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>DM on IG: <a className="text-blue-600 hover:underline" href="https://instagram.com/martinantoniovisuals">@martinantoniovisuals</a></p>
        <p>Email: <a className="text-blue-600 hover:underline" href="mailto:info@martinantoniovisuals.com">info@martinantoniovisuals.com</a></p>
        <Button>Booking Form</Button>
      </section>
    </div>
  );
}
