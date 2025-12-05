# Stripe-Navbar-Assignment
# Frontend Assignment - Stripe Navbar

**Reference:** [https://stripe.com](https://stripe.com)

## Objective
Rebuild the **Stripe-style navbar**, focusing on the **mega menu under “Solutions”**, with React + Tailwind CSS + TypeScript/JS. The navbar should be fully responsive and mimic the hover/click interactions like Stripe’s official site.

---

## Tech Stack
- **Frontend:** React 18, TypeScript (optional)
- **Styling:** Tailwind CSS 4, CSS Modules
- **Icons:** lucide-react
- **Bundler:** Vite
- **Routing:** react-router-dom
- **State / Query Management:** optional (e.g., react-query)

---

## Folder Structure
src/
├─ components/
│ ├─ DesktopNav.tsx
│ ├─ SolutionsMegaMenu.tsx
│ ├─ MegaMenuSection.tsx
│ ├─ MegaMenuItem.tsx
├─ data/
│ ├─ navbarData.ts
├─ icons/
│ └─ iconMap.ts
├─ App.tsx
├─ main.tsx
├─ index.css

yaml
Copy code

---

## Features
### Desktop Navbar
- Logo on the left
- Menu items: Products, **Solutions**, Developers, Resources, Pricing
- CTA buttons: “Start now”, “Contact sales”
- Hover/click on **Solutions** opens mega menu

### Solutions Mega Menu
- Sections: BY STAGE, BY USE CASE, BY INDUSTRY, ECOSYSTEM
- Each section: title + items (icon, label, link)
- Responsive two-column grid layout
- Dynamic width, subtle shadow, smooth animations

### Mobile Navbar
- Hamburger menu
- Full-screen / slide-in menu
- Solutions submenu in 1-column layout
- Back button to main menu
- CTA buttons at bottom

### Animations & Styling
- Smooth dropdown and slide-in
- Light/dark mode via CSS variables
- Semantic HTML (`nav`, `ul`, `li`, `button`)

---

## Dummy Data
- Navbar items and icons defined in `navbarData.ts` and `iconMap.ts`
- Supports external links and internal routes

---

## Installation
```bash
git clone https://github.com/Sumit01-tech/Stripe-Navbar-Assignment.git
cd stripe-navbar
npm install
npm run dev
Build & Preview
bash
Copy code
npm run build
npm run preview
Deployment
Live Preview: DEMO LINK

GitHub Repository
https://github.com/Sumit01-tech/Stripe-Navbar-Assignment.git

Notes / Assumptions
Focused on Solutions mega menu

No UI libraries (MUI / Bootstrap) used

Fully responsive and accessible

Tailwind handles styling & animations

Icons via lucide-react
