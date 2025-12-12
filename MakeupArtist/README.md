# Makeup Artist Landing Page

## Overview
A complete, production-ready landing page for a professional makeup artist, built from Figma designs with React, TypeScript, and Tailwind CSS.

## Project Structure

```
src/modules/MakeupArtist/
├── HomeLandingMakeUp.tsx    # Main page component (assembles all sections)
├── MakeupNavbar.tsx          # Navigation header
├── MakeupHero.tsx            # Hero section with CTA
├── MakeupAbout.tsx           # About Me section
├── MakeupServices.tsx        # Services grid (3 cards)
├── MakeupWorks.tsx           # Portfolio gallery (8 works)
├── MakeupCTA.tsx             # Call-to-action with pricing
├── MakeupFooter.tsx          # Footer with contacts
├── index.ts                  # Exports
└── README.md                 # This file
```

## Assets

All images are stored in `public/assets/makeup/`:

### Hero & About
- `hero-image.png` - Main hero portrait
- `profile-photo.png` - About section profile photo

### Services
- `service-graduation.png`
- `service-wedding.png`
- `service-photoshoot.png`

### Portfolio (My Works)
- `work-prewed-1.png` through `work-prewed-4.png`
- `work-90s-3e25c8.png`
- `work-bridal-7bdb0e.png`
- `work-photoshoot-1.png`
- `work-photoshoot-2-4ccd74.png`

### CTA Section
- `cta-background.png`

## Key Features

### 1. **Responsive Layout**
- Mobile-first approach
- CSS Grid for robust layouts (Hero, About, CTA sections)
- Prevents content shift on medium-sized screens (laptops)

### 2. **Data-Driven Components**
- Services section uses typed array + `.map()`
- Works gallery uses typed array + `.map()`
- Footer contacts/links use typed arrays

### 3. **Design System**
- **Brand Colors**: 
  - Primary gradient: `from-[#CC186E] to-[#8B1717]`
  - Background: `#F9F9F9`, `#F0F0F0`
  - Text: `#251D1D` (headings), `#535151` (body)
- **Typography**: Montserrat (primary), Lateef (brand name)
- **Spacing**: Consistent use of section padding (`py-20`)

### 4. **Accessibility**
- Semantic HTML5 elements
- Alt text for all images
- Proper heading hierarchy
- Hover states for interactive elements

## Layout Strategy

### CSS Grid Usage (Prevents Layout Shift)
Hero, About, and CTA sections use:
```tsx
grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
```

**Why Grid over Flex?**
- Prevents images from dropping down on medium screens
- Maintains 50/50 layout on desktops
- Images scale proportionally instead of wrapping

### Breakpoints
- `lg:` (1024px) - Main desktop breakpoint for 2-column layouts
- `md:` (768px) - Tablet adjustments
- `sm:` (640px) - Mobile fine-tuning

## Component Details

### MakeupNavbar
- Sticky navigation with brand logo
- Smooth scroll to sections via anchors
- Hover effects with gradient

### MakeupHero
- **Layout**: CSS Grid (1 col mobile, 2 cols desktop)
- Large gradient heading
- CTA button with hover effects

### MakeupAbout
- **Layout**: CSS Grid (270px photo, 1fr text on desktop)
- White card with shadow
- Profile photo + bio text

### MakeupServices
- Dark overlay background
- Featured "New Collection" card
- 3-column grid of service cards (data-driven)
- Pricing and descriptions

### MakeupWorks
- 4-column responsive gallery
- Hover effects (scale + shadow)
- Category labels with underline

### MakeupCTA
- **Layout**: CSS Grid
- Discount offer with decorative SVG underline
- Feature list with checkmarks (lucide-react icons)
- Background image on right

### MakeupFooter
- Gradient background matching brand
- 3-column layout: Brand, Quick Links, Contacts
- All links and contacts data-driven

## Tech Stack

- **React** 18+ with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** v4 for styling
- **lucide-react** for icons

## Usage

Import and use the main component:

```tsx
import { HomeLandingMakeUp } from '@/modules/MakeupArtist';

function App() {
  return <HomeLandingMakeUp />;
}
```

Or import individual sections:

```tsx
import { MakeupHero, MakeupServices } from '@/modules/MakeupArtist';
```

## Customization

### Updating Services
Edit the `services` array in `MakeupServices.tsx`:

```tsx
const services: Service[] = [
  {
    id: 1,
    title: 'Your Service',
    price: 'Your Price',
    description: 'Your Description',
    image: '/path/to/image.png',
  },
  // ...
];
```

### Updating Portfolio
Edit the `works` array in `MakeupWorks.tsx`:

```tsx
const works: WorkItem[] = [
  { id: 1, title: 'Category', image: '/path/to/image.png' },
  // ...
];
```

### Updating Contacts
Edit the `contacts` array in `MakeupFooter.tsx`:

```tsx
const contacts: ContactInfo[] = [
  { label: 'Phone', value: '+1234567890' },
  // ...
];
```

## Performance Notes

- All images are optimized (2x scale for retina displays)
- Lazy loading can be added with `loading="lazy"` attribute
- Consider using Next.js `<Image>` component for further optimization

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required (IE11 not supported)

## Future Enhancements

- [ ] Add contact form in Footer
- [ ] Implement lightbox for Works gallery
- [ ] Add animations with Framer Motion
- [ ] SEO meta tags and Open Graph
- [ ] Multilingual support (i18n)
- [ ] Dark mode toggle
