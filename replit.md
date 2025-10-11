# SOILTECH Mühendislik Web Sitesi

## Overview

This is a modern, corporate website for SOILTECH Mühendislik, a Turkish engineering company specializing in paint, insulation, and coating solutions. The website showcases their services, special applications, references, and provides contact functionality. Built as a single-page application with multiple service detail pages, it features a professional design with smooth animations and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (alternative to React Router)
- Single-page application with smooth scroll navigation and separate detail pages

**UI Component Library:**
- Shadcn UI (New York style variant) for consistent, accessible components
- Radix UI primitives as the foundation for interactive elements
- Custom CSS variables for theming with light/dark mode support
- Tailwind CSS for utility-first styling with custom configuration

**State Management:**
- TanStack React Query v5 for server state management
- React hooks for local component state
- Custom hooks for mobile detection and toast notifications

**Design System:**
- Professional corporate color palette with sky blue primary (210 90% 60%)
- Inter font family for modern, clean typography
- Responsive spacing system using Tailwind's spacing scale
- Hover and active elevation states for interactive feedback
- Custom CSS variables for dynamic theming (elevate-1, elevate-2, button-outline, etc.)

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- Custom middleware for request logging and error handling
- Vite integration in development mode with HMR support
- Static file serving in production

**Storage Layer:**
- In-memory storage implementation (MemStorage class) as default
- Interface-based design (IStorage) allowing easy swap to database
- User management methods (getUser, getUserByUsername, createUser)
- Prepared for database integration with existing Drizzle configuration

**API Design:**
- RESTful API structure with /api prefix
- JSON request/response handling
- Session-based approach with cookie support (connect-pg-simple configured)
- Comprehensive error handling with status codes

### Content Structure

**Main Sections:**
1. Hero Slider - Auto-rotating image carousel with CTAs
2. About Section - Company information and certifications (ISO 9001, ISO 14001, ISO 45001)
3. Services Section - Three main services with detail pages
4. Special Applications - Interior paint, exterior systems, thermal insulation
5. References - Client logo showcase
6. Contact Form - Name, phone, message fields with toast notifications

**Service Detail Pages:**
- Kumlama Boyama (Sandblasting & Painting Workshop)
- Endüstriyel Hizmetler (Industrial Services) - 7 specialized services
- Marin Hizmetleri (Marine Services)

### Component Architecture

**Reusable Components:**
- Header with sticky navigation and scroll effects
- HeroSlider with auto-play and manual controls
- ServiceCard for service grid display
- SocialButton with popover for social media links
- Form components with validation support (React Hook Form + Zod ready)

**Layout Pattern:**
- Container-based responsive layout (max-width 1280px)
- Mobile-first responsive design
- Consistent section padding (py-16 mobile, py-24 desktop)
- Card-based content organization with elevation effects

### External Dependencies

**Database:**
- Drizzle ORM configured for PostgreSQL
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Migration system in place (drizzle-kit)
- User schema defined with UUID primary keys

**UI & Interaction:**
- React Hook Form with Zod resolvers for form validation
- Embla Carousel for slider functionality
- Lucide React for iconography
- React Icons for social media icons
- date-fns for date formatting utilities

**Development Tools:**
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- ESBuild for server bundling in production
- TypeScript for type checking across the stack

**Design Resources:**
- Google Fonts (Inter family)
- Stock images from Unsplash for hero sections
- Placeholder images via placeholder.com for references

**Session & State:**
- connect-pg-simple for PostgreSQL session store (configured but not active)
- TanStack Query for client-side cache management
- Custom query client with fetch-based implementation

### Routing Strategy

**Client-Side:**
- Wouter for SPA routing with hash/history support
- Smooth scroll navigation for same-page sections
- Manual scroll offset calculation for fixed header (64px height)
- Active section tracking based on scroll position

**Routes:**
- `/` - Homepage with all main sections
- `/kumlama-boyama` - Sandblasting service detail
- `/endustriyel-hizmetler` - Industrial services detail
- `/marin-hizmetleri` - Marine services detail
- `*` - 404 Not Found page

### Build & Deployment

**Development:**
- `npm run dev` - Starts development server with Vite HMR
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

**Production:**
- `npm run build` - Builds client (Vite) and server (esbuild)
- Client output: `dist/public`
- Server output: `dist/index.js`
- `npm start` - Runs production server

### Styling Architecture

**CSS Variable System:**
- HSL-based color system for easy manipulation
- Automatic border color computation for buttons
- Elevation states using rgba overlays (elevate-1, elevate-2)
- Responsive border radius (lg: 9px, md: 6px, sm: 3px)

**Tailwind Configuration:**
- Custom color palette extending default theme
- Path aliases for components and utilities
- New York style with CSS variables enabled
- Custom content paths for client-side files