# ForceNT - Business Growth Engine Platform

## Overview

ForceNT is a marketing website for a business automation service that combines AI-powered virtual employees with intelligent workflows. The platform targets growing businesses ($500K-$20M revenue) in professional services, e-commerce, SaaS, and agencies. The website showcases the company's services, demonstrates value propositions, and includes an interactive AI chat interface for lead qualification.

This is a full-stack TypeScript application built with React (Vite) on the frontend and Express.js on the backend, following a monorepo structure with shared schema definitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool:**
- React 18 with TypeScript using Vite as the build tool and development server
- Client-side routing implemented with Wouter (lightweight React router)
- Component-based architecture with reusable UI components

**UI Component System:**
- Shadcn/ui component library (New York style variant) for consistent design system
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for styling with custom design tokens
- Design system follows "Clean SaaS aesthetic" inspired by Linear and Stripe
- Brand gradient (cyan to purple: #00BFFF → #2563EB → #7A5BFF) used selectively only for logo, primary CTAs, floating widget, and chat send button
- Inter font family from Google Fonts
- Responsive design with mobile-first approach

**State Management:**
- TanStack Query (React Query) for server state management
- Local component state with React hooks
- Query client configured with custom fetch functions and error handling

**Key Pages:**
- Home page with multiple sections (Hero, Problem, Solution, How It Works, Investment, etc.)
- Industries overview page
- Individual industry landing pages (Healthcare, Professional Services, Trades, Real Estate, Hospitality)
- 404 Not Found page

**Interactive Features:**
- Floating AI chat widget (fixed position, always accessible)
- Modal-based AI chat interface for lead qualification
- Smooth scroll navigation to page sections
- Mobile-responsive navigation with hamburger menu

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript running on Node.js
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- Development mode uses Vite middleware for HMR and instant feedback
- Production mode serves pre-built static assets

**Development vs Production:**
- Development: Vite dev server integrated as Express middleware, template reloading on every request
- Production: Static file serving from compiled `dist/public` directory
- Custom logging middleware for API request tracking
- Request body parsing with raw body preservation for webhook integrations

**API Structure:**
- Routes registered through central `registerRoutes` function
- API routes prefixed with `/api`
- HTTP server creation handled in routes module
- Request/response logging with duration tracking

**Storage Layer:**
- Abstract storage interface (`IStorage`) for data operations
- In-memory storage implementation (`MemStorage`) as default
- Designed for easy swapping with persistent database implementations
- CRUD operations for User entity (extensible for other entities)

### Data Storage

**Database Schema (Drizzle ORM):**
- PostgreSQL dialect configured via Drizzle Kit
- Schema defined in shared directory for type safety across frontend/backend
- Users table with UUID primary keys, username, and password fields
- Zod schema validation integrated with Drizzle schemas
- Database URL expected via `DATABASE_URL` environment variable
- Migration files output to `./migrations` directory

**ORM Choice:**
- Drizzle ORM for type-safe database queries
- Connection to Neon Database serverless PostgreSQL (`@neondatabase/serverless`)
- Schema-first approach with automatic TypeScript type inference

**Current Implementation:**
- Memory-based storage active by default (no database connection required initially)
- User authentication schema prepared but not yet implemented
- Ready for PostgreSQL integration when database is provisioned

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI component primitives (accordion, dialog, dropdown, popover, toast, etc.)
- Embla Carousel for carousel/slider functionality
- Lucide React for icon components
- CMDK for command palette functionality
- Class Variance Authority (CVA) for component variant management
- TailwindCSS with PostCSS for styling

**Development Tools:**
- Replit-specific plugins for development:
  - `@replit/vite-plugin-runtime-error-modal` - Runtime error overlay
  - `@replit/vite-plugin-cartographer` - Development tooling
  - `@replit/vite-plugin-dev-banner` - Development banner
- ESBuild for production server bundling
- TSX for TypeScript execution in development

**Database & Backend:**
- Neon Database serverless PostgreSQL driver
- Drizzle ORM with Drizzle Kit for migrations
- Connect-pg-simple for PostgreSQL session storage (prepared for future use)
- Express session management capabilities

**Utilities:**
- date-fns for date manipulation
- nanoid for unique ID generation
- zod for schema validation
- clsx and tailwind-merge for conditional CSS classes

**Fonts & Assets:**
- Google Fonts (Inter family)
- Custom logo and hero images stored in `attached_assets` directory
- Favicon configuration in HTML

### Key Architectural Decisions

**Monorepo Structure:**
- Shared types and schemas in `/shared` directory accessible to both client and server
- Path aliases configured (`@/` for client, `@shared/` for shared code)
- Single TypeScript configuration covering all code paths

**Type Safety:**
- End-to-end TypeScript with strict mode enabled
- Shared Zod schemas generate both TypeScript types and runtime validation
- Drizzle ORM provides compile-time SQL type checking

**Build Process:**
- Development: Vite serves client with HMR, Express runs separately
- Production: Client built to `dist/public`, server bundled to `dist/index.js`
- Single production artifact runs both static serving and API

**Styling Approach:**
- Utility-first with Tailwind CSS
- Design system codified in `design_guidelines.md` and implemented via CSS variables
- Component variants managed through CVA for consistency
- Custom spacing, color, and typography scales defined in config

**Content Strategy:**
- Copy content stored in attached text files (`Homepage_*.txt`, industry pages)
- Design system documented separately for reference
- Marketing copy emphasizes value propositions and social proof