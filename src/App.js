import React from 'react';
import { Button, Card, CardContent } from '@mui/material'; // Import from Material UI

export default function MartinAntonioVisuals() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Martin Antonio Visuals</h1>
        <p className="text-lg text-muted-foreground">Visuals for Artists with a Voice.</p>
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

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Support the Movement</h2>
        <p>If you believe in the vision, you can help fund visuals for an emerging artist.</p>
        <div className="flex justify-center gap-4">
          <Button>Donate</Button>
          <Button variant="outlined">Sponsor a Visual</Button>
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
