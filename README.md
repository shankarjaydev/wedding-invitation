# Saravanan Weds Valli — Personalized South Indian Wedding Invitation

A multi-device compatible, interactive South Indian Vedic wedding invitation website built with **Next.js 14 (App Router)** and **Tailwind CSS**, designed faithfully after the Framer template video recording.

---

## 🌟 Key Features

1. **Faithful Video Scene Reconstruction**:
   - **Scene 1 (Hero Entry)**: Morning azure sky with drifting clouds, animated hanging brass oil lamps (*Thookku Vilakku*) with golden flickering flames, flanked by carved granite Yali pillars, and a majestic multi-tiered Dravidian Gopuram rising from below.
   - **Scene 2 (Divine Blessings & Carpet)**: Traditional crimson carpet patterned with gold kolam mandalas, featuring the golden Lord Vinayagar (*Om Ganesha*) emblem, ancestral blessings of *Smt. Parvathi Amma & Shri Sivan*, and the formal *"Inviting"* proclamation.
   - **Scene 3 (Couple Announcement & Garlands)**: Vibrant magenta festive silk backdrop with fresh green mango leaves (*Mavilai Toran*) and yellow & orange marigold (*Sevvanthi*) flower garlands, displaying the groom's parents (*Smt. Janani & Shri Vijay*) and bride's parents (*Smt. Shalini & Shri Ajith Kumar*).
   - **Scene 4 (Couple Illustration & Invitation)**: 3D animated South Indian bride and groom with wedding garlands (*Malar Maalai*), jasmine flowers (*Mallipoo*), and the formal *"We Request your gracious presence on the Auspicious occasion of our marriage"*.
   - **Scene 5 (Save The Date & Events)**: Classic vintage wedding car illustration, live countdown timer to the Subamuhurtham, Subamuhurtham card, and Grand Reception card with calendar integration (.ics download & Google Calendar).
   - **Scene 6 (Traditional South Indian Feast)**: Golden crispy Masala Dosa on a fresh banana leaf plate with steel bowls of Sambar, Coconut Chutney, and Tomato Chutney, plus a full 24-dish traditional Kalyana Vindhumenu.
   - **Scene 7 (Where Our Story Begins)**: Golden sunburst mandala and interactive story cards tracing the journey from Mylapore filter coffee to the sacred betrothal (*Nichayathartham*).

2. **Personalized Guest Invitation Engine**:
   - Dynamic query parameters: Visit `http://localhost:3000/?guest=Suresh+Mama+%26+Family&rel=Respected+Elder` to display a customized VIP banner and greeting.
   - Built-in **Host Personalization Studio** at `/generate`: Type any guest's name, choose their relation and tone (Traditional, Friendly, or Formal), and copy their link or send via **1-Click WhatsApp Share**!

3. **Interactive Capabilities**:
   - **Traditional Music Synthesizer**: Uses Web Audio API to play an authentic Shehnai / Nadaswaram and Tambura drone melody. Runs reliably without broken MP3 links or CORS issues.
   - **Flower Petal Shower**: Falling rose and marigold petals canvas effect with a toggle button.
   - **Interactive RSVP**: Collects guest name, attendance status, guest count, dietary preferences, and blessing notes with `localStorage` persistence.
   - **Community Blessings Guestbook**: Guests can post wishes and like each other's messages.
   - **Calendar Integration**: Download `.ics` files for Subamuhurtham and Reception directly into Apple Calendar, Outlook, or Google Calendar.
   - **Venue Navigation**: Pollachi Mandapam directions, travel guide from Coimbatore airport and railway station, and Google Maps links.

---

## 📱 Multi-Device Compatibility

- **Mobile Phones (iPhone, Samsung, Android)**: Full-bleed vertical scroll experience with optimized touch targets, just like vertical video stories and reels.
- **Tablets & iPads**: Smooth two-column grid responsive layout.
- **Laptops & Desktops**: Centered luxury aesthetic with traditional Indian ornamental borders and high-resolution SVG artwork.

---

## 📂 Project Architecture

```
├── app/
│   ├── layout.tsx             # Root layout, Google Fonts (Cinzel, Playfair Display)
│   ├── page.tsx               # Master video-faithful wedding invitation journey
│   ├── globals.css            # Custom styles, animations, scrollbar & font imports
│   ├── events/
│   │   └── page.tsx           # Detailed Muhurtham, Reception & Vedic ritual guide
│   ├── story/
│   │   └── page.tsx           # Full love story, rituals gallery, and couple profiles
│   ├── rsvp/
│   │   └── page.tsx           # Dedicated RSVP and community blessings page
│   └── generate/
│       └── page.tsx           # Host personalization studio & WhatsApp link generator
├── components/
│   ├── Navbar.tsx             # Sticky gold-bordered navigation with music & petal controls
│   ├── PersonalizedGreeting.tsx # Dynamic ?guest= URL reader
│   ├── HeroTemple.tsx         # Scene 1: Temple Gopuram, Diya Lamps, Saravanan Weds Valli
│   ├── BlessingsGanesha.tsx   # Scene 2: Lord Ganesha & Ancestral blessings on red carpet
│   ├── CoupleIntro.tsx        # Scene 3: Parents names, WEDS seal, Mango toran & marigolds
│   ├── CoupleIllustration.tsx # Scene 4: 3D animated couple with floral garlands
│   ├── SaveTheDateEvents.tsx  # Scene 5: Vintage car, live countdown & Muhurtham cards
│   ├── TraditionalFeast.tsx   # Scene 6: Banana leaf plate, Dosa & Kalyana Vindhumenu
│   ├── LoveStory.tsx          # Scene 7: Where our story begins timeline
│   ├── VenueMap.tsx           # Pollachi venue details & transit guide
│   ├── RSVPModal.tsx          # Interactive RSVP form
│   ├── Guestbook.tsx          # Blessings wall with likes & comments
│   ├── MusicPlayer.tsx        # Web Audio API Nadaswaram synthesizer
│   ├── FlowerShower.tsx       # Falling petals canvas & celebratory confetti
│   ├── Footer.tsx             # Auspicious Tamil blessings & contact information
│   ├── ClientShell.tsx        # Client state manager for audio & animations
│   └── SVGs.tsx               # High-fidelity vector graphics (Gopuram, Diya, Car, Dosa, Couple)
├── data/
│   └── weddingDetails.ts      # Central configuration for names, dates, venue & menus
├── types/
│   └── index.ts               # TypeScript data models
└── package.json
```

---

## 🚀 Running the Project

1. **Development Server** (currently active):
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Personalized Link Examples**:
   - `http://localhost:3000/?guest=Karthik+and+Family&rel=Dear+Family`
   - `http://localhost:3000/?guest=Anand+Mama&rel=Respected+Elder`
   - `http://localhost:3000/?guest=Priya+%26+Vikram&rel=Best+Friends`

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

4. **Deploying**:
   Ready for 1-click deployment on **Vercel**, **Netlify**, or **Railway** (`next build` output verified with 0 errors).

