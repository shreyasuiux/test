# Quick Reference - Multi-Page Navigation

## URL Routes

```
Home Page         →  /
Services Page     →  /services
Products Page     →  /products
Case Studies      →  /case-studies
Company Page      →  /company
Contact Page      →  /contact
```

## How to Add New Routes

### 1. Create a new page component
```tsx
// /pages/NewPage/NewPage.page.tsx
export default function NewPage() {
  return (
    <>
      <h1>New Page</h1>
      {/* Your content */}
    </>
  );
}
```

### 2. Add route to AppRoutes.tsx
```tsx
import NewPage from '../pages/NewPage/NewPage.page';

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

### 3. Add navigation link to Header.tsx
```tsx
<NavLink 
  to="/new-page" 
  className={({ isActive }) => 
    `px-3 py-1.5 text-[13px] rounded-md transition-all ${
      isActive 
        ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
        : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
    }`
  }
>
  New Page
</NavLink>
```

## Key Files

```
App.tsx                    - Main app with BrowserRouter
routes/AppRoutes.tsx      - All route definitions
components/Header.tsx     - Navigation bar
components/ScrollToTop.tsx - Auto-scroll on navigation
pages/                    - All page components
```

## Important Rules

✅ **DO**: Use `<Link to="/path">` for navigation  
✅ **DO**: Use `<NavLink>` for navigation with active state  
✅ **DO**: Keep pages simple - only UI, no routing logic  
✅ **DO**: Add new pages to `/pages/[PageName]/[PageName].page.tsx`  

❌ **DON'T**: Use `<a href>` for internal navigation  
❌ **DON'T**: Use `onClick` for page changes  
❌ **DON'T**: Import react-router in page components  
❌ **DON'T**: Put routing logic in pages  

## Testing Routes

```bash
# Development
npm run dev

# Test each route:
http://localhost:5173/
http://localhost:5173/services
http://localhost:5173/products
http://localhost:5173/case-studies
http://localhost:5173/company
http://localhost:5173/contact
```

## Deployment

Works out-of-the-box on:
- ✅ Netlify (uses `_redirects`)
- ✅ Vercel (uses `vercel.json`)
- ✅ Any static host with SPA support

All routes will load correctly on refresh and deep linking.
