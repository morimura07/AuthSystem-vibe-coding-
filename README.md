# TradeAnalytics - SaaS Trading Analytics Platform

A clean, production-ready SaaS foundation inspired by traderscasa.com, demonstrating strong UI/UX judgment, modern architecture, and consistency. This project serves as a technical and design showcase.

## 🚀 Technology Stack

- **Next.js 14** (App Router only)
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality, accessible UI components
- **BetterAuth** - Authentication solution (configured for future database integration)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Authenticated dashboard pages
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── dashboard/         # Dashboard-specific components
│   ├── landing/           # Landing page components
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions and configurations
└── public/                # Static assets
```

## 🎨 Design Principles

- **Clean & Minimal**: Professional, uncluttered interface
- **Consistent**: shadcn design tokens, spacing, and patterns throughout
- **Responsive**: Mobile-first design, fully responsive on all devices
- **Accessible**: Proper labels, focus states, and semantic HTML
- **Modern**: Contemporary SaaS UI/UX patterns

## ✨ Features

### Public Pages
- **Landing Page** (`/`)
  - Sticky header with navigation
  - Hero section with CTAs
  - Feature highlights
  - Social proof/stats
  - Footer with links

### Authentication
- **Login Page** (`/login`)
  - Form validation
  - Loading states
  - Error handling
  - Accessible inputs

- **Register Page** (`/register`)
  - User registration form
  - Password requirements
  - Validation feedback

### Dashboard (Authenticated)
- **Dashboard Layout**
  - Collapsible sidebar navigation
  - Mobile-responsive drawer
  - User menu dropdown
  - Persistent header

- **Dashboard Page** (`/dashboard`)
  - Summary cards (Total Trades, Win Rate, Net P/L, Avg Risk/Reward)
  - Chart section with timeframe selector
  - Recent trades table
  - Mock data for demonstration

- **Additional Pages**
  - Trades (`/dashboard/trades`)
  - Analytics (`/dashboard/analytics`)
  - Settings (`/dashboard/settings`)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Component Guidelines

- All UI components use **shadcn/ui** - no custom replacements
- Tailwind utility classes only - no inline styles
- Consistent use of shadcn design tokens
- Server Components by default, Client Components only when needed

### Authentication

The project includes BetterAuth setup with a mock database adapter. For production use:

1. Set up a real database (PostgreSQL recommended)
2. Configure BetterAuth with your database connection
3. Update `lib/db.ts` with your Prisma client

Currently, authentication is mocked for demonstration purposes. Any email/password combination will work on the login page.

## 🎯 Key Decisions

1. **App Router Only**: Using Next.js 14 App Router exclusively (no Pages Router)
2. **shadcn/ui Mandatory**: All UI components from shadcn/ui for consistency
3. **TypeScript Everywhere**: Full type safety across the codebase
4. **Server Components First**: Minimize client-side JavaScript where possible
5. **Mobile-First**: Responsive design starting from mobile breakpoints

## 📱 Responsive Design

- **Mobile**: Sidebar collapses to drawer, touch-friendly buttons
- **Tablet**: Optimized layouts for medium screens
- **Desktop**: Full sidebar navigation, optimal spacing

## 🔒 Security Notes

- Authentication is currently mocked for demo purposes
- In production, implement proper authentication flows
- Add CSRF protection and rate limiting
- Secure API routes with proper validation

## 📄 License

This project is a technical showcase and demonstration of modern SaaS architecture and design patterns.

## 🙏 Acknowledgments

Design inspiration from traderscasa.com and modern SaaS platforms.

---

Built with ❤️ using Next.js, TypeScript, and shadcn/ui

