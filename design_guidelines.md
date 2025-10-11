# Design Guidelines: SOILTECH Mühendislik Web Sitesi Modernizasyonu

## Design Approach
**Hybrid Approach**: Professional corporate design system with custom modern touches for key interactive elements. Drawing inspiration from modern B2B service websites like Stripe's clarity, Linear's polish, and contemporary corporate sites with refined glassmorphism effects.

## Core Design Principles
- **Professional Sophistication**: Clean, trustworthy design befitting an engineering firm
- **Refined Modernism**: Subtle gradients, soft shadows, and smooth transitions
- **Enhanced Interactivity**: Polished micro-interactions on key elements
- **Turkish Language**: All content remains in Turkish

## Color Palette

**Primary Colors:**
- Primary Blue: 210 90% 60% (modern sky blue, replacing the current cyan)
- Primary Dark: 215 85% 45% (deeper, more sophisticated blue)
- Neutral Dark: 220 25% 10% (refined charcoal for text)

**Surface & Background:**
- Pure White: 0 0% 100% (main background)
- Soft Gray: 215 20% 97% (subtle backgrounds)
- Border Gray: 215 15% 88% (refined borders)

**Accent (minimal use):**
- Success Green: 145 65% 50% (for CTAs, trust indicators)

## Typography
- **Font Stack**: Inter, -apple-system, system-ui, sans-serif (clean, modern, professional)
- **Headings**: 
  - H1: 48px/1.1, font-weight 700 (hero headlines)
  - H2: 36px/1.2, font-weight 700 (section titles)
  - H3: 24px/1.3, font-weight 600 (card titles)
- **Body**: 16px/1.6, font-weight 400
- **Small Text**: 14px/1.5, font-weight 500

## Layout System
- **Container**: max-width 1280px, responsive padding (16px mobile, 24px tablet, 32px desktop)
- **Spacing Units**: Tailwind's 4, 6, 8, 12, 16, 20, 24, 32 (consistent vertical rhythm)
- **Section Padding**: py-16 mobile, py-24 desktop
- **Grid Gaps**: gap-6 for cards, gap-8 for major sections

## Component Library

### Updated Header & Navigation
- **Sticky header** with backdrop-blur and subtle shadow on scroll
- **Navigation items**: "Hakkımızda", "Hizmetler", "Özel Uygulamalar", "Referanslar", "İletişim"
- Clean spacing, smooth hover states with background color transitions
- Mobile: Refined hamburger menu with slide-down animation

### Modernized Social Button
- **Design**: Floating pill-shaped button with refined glassmorphism
- Background: Semi-transparent white (rgba 255,255,255,0.15) with backdrop-blur(12px)
- Border: 1px solid rgba(255,255,255,0.25)
- Icon: Subtle share/network icon (from Lucide or Heroicons)
- **Hover state**: Gentle scale (1.05) and brightness increase
- **Dropdown/Popover**: 
  - Enhanced glassmorphic panel with smooth scale-up animation
  - Social icons in refined circular buttons with brand colors
  - Grid layout: 4 columns on desktop, 2 on mobile
  - Each icon has subtle hover lift effect

### Hero Section with Enhanced Slider Border
- **Slider Container**: 
  - Rounded border (border-radius: 24px)
  - Multi-layered border effect:
    - Inner border: 2px solid rgba(255,255,255,0.3)
    - Outer glow: box-shadow with blue tint (0 0 60px rgba(14,165,233,0.15))
    - Optional gradient border overlay for premium feel
- **Dark Overlay**: Refined gradient (linear-gradient from rgba(15,23,42,0.4) to rgba(15,23,42,0.6))
- **Slider Dots**: Larger (12px), with active state using primary blue
- **Content**: Centered, max-width 880px, with refined badge styling

### Cards & Sections
- **Card Style**: 
  - White background with subtle shadow (0 4px 20px rgba(0,0,0,0.06))
  - Border-radius: 16px
  - Hover: Gentle lift with increased shadow (0 8px 30px rgba(0,0,0,0.12))
  - Smooth transition (300ms ease)
- **Grid Layouts**: 3 columns desktop, 2 tablet, 1 mobile

### Forms & Inputs
- **Input Fields**: 
  - Border-radius: 12px
  - Focus state: Blue border with subtle glow (box-shadow: 0 0 0 3px rgba(210,90%,60%,0.1))
- **Submit Button**: 
  - Primary blue background
  - Rounded (12px)
  - Hover: Slight darkening with subtle scale (0.98)

### Footer
- Refined dark background (220 25% 10%)
- Clean grid layout for links
- Subtle top border with gradient

## Animations & Interactions
- **Transitions**: 300ms ease for most interactions
- **Hover Effects**: 
  - Cards: translateY(-4px) + shadow increase
  - Buttons: Subtle scale(0.98) on active
  - Social button: scale(1.05) on hover
- **Scroll**: Smooth scroll behavior, sticky header with blur
- **Slider**: 900ms crossfade between slides

## Images
- **Hero Slider**: Professional photos of construction/engineering projects, well-lit interiors/exteriors with blue-toned color grading
- **Service Cards**: Icon illustrations or subtle background patterns
- **Reference Logos**: Grayscale with opacity 0.6, full color on hover

## Quality Standards
- **Accessibility**: WCAG AA contrast ratios, focus indicators, semantic HTML
- **Performance**: Optimized images, minimal animations, efficient CSS
- **Responsive**: Mobile-first approach, fluid typography, flexible grids
- **Polish**: Consistent spacing, aligned elements, smooth transitions throughout