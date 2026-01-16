# Applied Cloud Computing - Routing Documentation

## Application Structure

This is a multi-page React application using **React Router v6** with proper routing and navigation.

## Routes

The application includes the following routes:

- `/` - Home Page
- `/services` - Services Page
- `/products` - Products Page
- `/case-studies` - Case Studies Page
- `/company` - Company Page
- `/contact` - Contact Page

## File Structure

```
/
├── App.tsx                          # Main app component with BrowserRouter
├── routes/
│   └── AppRoutes.tsx               # Centralized routing configuration
├── pages/
│   ├── Home/
│   │   └── Home.page.tsx           # Home page component
│   ├── Services/
│   │   └── Services.page.tsx       # Services page component
│   ├── Products/
│   │   └── Products.page.tsx       # Products page component
│   ├── CaseStudies/
│   │   └── CaseStudies.page.tsx    # Case Studies page component
│   ├── Company/
│   │   └── Company.page.tsx        # Company page component
│   ├── Contact/
│   │   └── Contact.page.tsx        # Contact page component
│   └── index.ts                     # Page exports
├── components/
│   ├── Header.tsx                   # Navigation header with React Router Links
│   ├── AccentureFooter.tsx          # Footer with React Router Links
│   ├── ScrollToTop.tsx              # Scroll to top on route change
│   └── ...                          # Shared components
```

## Navigation

### Header Navigation
- Uses `<Link>` and `<NavLink>` from React Router
- Active route highlighting with `isActive` prop
- Responsive mobile menu with route navigation
- All navigation updates browser URL

### Footer Navigation
- Links to main pages using React Router `<Link>` components
- No onClick handlers - pure URL-based navigation

## Key Features

✅ **Proper URL Routing** - Each page has its own URL path  
✅ **Browser History** - Back/forward buttons work correctly  
✅ **Deep Linking** - Direct URL access works (e.g., `/services`)  
✅ **Active State** - Current page is highlighted in navigation  
✅ **Scroll Restoration** - Page scrolls to top on navigation  
✅ **Local Assets** - All assets use local imports (no external CDN URLs)  
✅ **Theme Persistence** - Dark/light theme works across all pages  
✅ **Responsive Design** - Full mobile, tablet, and desktop support  

## Deployment

### Static Hosting (Netlify, Vercel, etc.)
The application uses client-side routing. For proper deep linking support, configure your hosting provider to serve `index.html` for all routes:

**Netlify**: Create `_redirects` file with:
```
/*    /index.html   200
```

**Vercel**: Create `vercel.json` with:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Testing Locally
```bash
npm install
npm run dev
```

Then navigate to different routes:
- http://localhost:5173/
- http://localhost:5173/services
- http://localhost:5173/products
- http://localhost:5173/case-studies
- http://localhost:5173/company
- http://localhost:5173/contact

## Technical Details

- **Router**: React Router v6+ (`BrowserRouter`)
- **Navigation**: `Link` and `NavLink` components
- **No Manual History**: No `useNavigate` or `history.push` usage
- **Clean Architecture**: Pages contain only UI, no routing logic
- **Type Safety**: TypeScript-ready structure

## Asset Management

All assets use local imports:
- Logo: `figma:asset/8a8a0384f5b66c8aa4d8823a4ada592f7109677d.png`
- Hero Image: `figma:asset/f005792b16fa557466c80193183ad1aa1ba997df.png`
- Founder Image: `figma:asset/90a5c78dd01d952aa2196aa93242378526543bcb.png`
- External images: Unsplash URLs (for demo purposes)

## UI Preservation

**Critical**: All visual styling, animations, layouts, and design elements remain pixel-identical. Only the routing architecture has changed. The user experience is preserved completely while gaining proper multi-page functionality.
