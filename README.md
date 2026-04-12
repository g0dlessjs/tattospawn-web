# TattoSpawn - Professional Tattoo Studio Website

A modern, dark-themed website built for a professional tattoo artist using React, TailwindCSS, and Framer Motion.

## 🎨 Features

- **Hero Section** - Animated landing with call-to-action buttons
- **About Section** - Artist bio, specialties, and statistics
- **Gallery** - Responsive image grid with category filtering and lightbox modal
- **Booking Form** - Comprehensive reservation form with validation (Zod + React Hook Form)
- **WhatsApp Integration** - Floating chat button for instant communication
- **Animated Loader** - Branded loading screen with smooth transitions
- **Fully Responsive** - Mobile-first design optimized for all devices
- **SEO Optimized** - Semantic HTML, meta tags, Open Graph support
- **Dark Theme** - Black background with neon green (#39ff14) accents matching the brand logo

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icon library

## 📦 Installation

```bash
cd tattospawn-web
npm install
```

## 🛠️ Development

```bash
npm run dev
```

The site will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

Production files will be in the `dist/` folder.

## 📁 Project Structure

```
tattospawn-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Booking.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎯 Customization

### Update Contact Information
- Edit phone number in `WhatsAppButton.jsx` (line 8)
- Update email and address in `Footer.jsx`
- Modify social media links in `Footer.jsx`

### Change Logo
Replace `public/logo3.png` with your desired logo image.

### Change Colors
Edit `tailwind.config.js` to adjust the color palette:
- `primary` - Neon green accent color (currently #39ff14)
- `accent` - Secondary green shade
- `dark` - Dark theme shades

### Add Gallery Images
Add new entries to the `galleryImages` array in `Gallery.jsx`:
```js
{
  id: 10,
  src: 'your-image-url',
  alt: 'Description',
  category: 'Category',
}
```

### Form Submission
The booking form currently logs data to console. To integrate with a backend:
1. Replace the simulated API call in `Booking.jsx` (line 101)
2. Add your endpoint using `fetch()` or `axios`
3. Handle success/error states

## 📊 Performance

- Lazy loading for gallery images
- Optimized animations with Framer Motion
- Code splitting with Vite
- Minified CSS and JS

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 License

ISC

---

Built with ❤️ by TattoSpawn
