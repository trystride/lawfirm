# المزيد القانونية | Almazyed Law Website

Modern and professional website for Almazyed Law Firm, built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- RTL support for Arabic content
- Optimized for performance
- Interactive components
- Contact form functionality
- Mobile-first approach

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Required Assets

Please add the following images to the `/public/images` directory:

- `logo.png` - Company logo (recommended size: 200x200px)
- `hero-bg.jpg` - Hero section background image (recommended size: 1920x1080px)

## Project Structure

```
almazyed-law/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Team.tsx
│       └── Contact.tsx
├── public/
│   └── images/
└── tailwind.config.ts
```

## Customization

- Colors can be modified in `tailwind.config.ts`
- Fonts can be changed in `src/app/layout.tsx`
- Content can be edited in respective component files

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Hero Icons](https://heroicons.com/)
- [TypeScript](https://www.typescriptlang.org/)
