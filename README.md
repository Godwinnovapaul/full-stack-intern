# EVENT VENDOR BOOKING SYSTEM

A clean, responsive React Dashboard Application built with **SPA Principles**, **Tailwind CSS**, and **React Hooks** (`useState` & `useEffect`).

---

## 📌 Project Overview
This project serves as the foundational frontend dashboard for the **Event Vendor Booking System**. It provides a clean, responsive interface to view event services, track booking counts, and search for vendors.

---

## 🚀 Key Concepts Implemented

### 1. SPA Principles (Single Page Application)
- Responsive Single Page Application layout with a top Navbar, left Sidebar Menu, and central Dashboard content area.

### 2. JSX and XSS Auto-Escaping
- Implemented in `UserInput.jsx`: React automatically escapes user input strings before rendering into JSX, neutralizing script injection (`<script>`, `<img onerror=...>`).
- Compared against the vulnerable behavior of raw `innerHTML` demonstrated in `xss.html`.

### 3. Tailwind CSS & Shadcn UI
- Clean, modern styling using utility classes from Tailwind CSS.
- Responsive layout with colored summary cards and modular service cards.

### 4. React Component Architecture
- Modular component hierarchy for clear separation of concerns:
  - `Navbar.jsx`: Brand header navigation.
  - `Sidebar.jsx`: Standard menu navigation list.
  - `TaskCard.jsx`: Reusable service/task card component.
  - `DashBoard.jsx`: Main dashboard layout with summary cards, service cards, counter, and search.
  - `counter.jsx`: Bookings counter component.
  - `UserInput.jsx`: Vendor search with safe JSX auto-escaping.

### 5. useState & useEffect Hooks
- `useState`: Manages interactive booking counter count and search query state.
- `useEffect`: Automates reactive side-effects and logs state changes.

---

## 🛠️ Project Structure

```text
event vendor/
├── .vscode/
│   └── settings.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ui/               # Shadcn UI primitives
│   │   │   ├── counter.jsx       # useState & useEffect Bookings Counter
│   │   │   ├── Navbar.jsx        # Top navigation bar
│   │   │   ├── Sidebar.jsx       # Menu sidebar
│   │   │   ├── TaskCard.jsx      # Reusable Event Service Card
│   │   │   └── UserInput.jsx     # Vendor search with JSX auto-escaping
│   │   ├── lib/
│   │   │   ├── studentSchema.js  # Zod schema
│   │   │   ├── vendorSchema.js   # Event vendor task Zod schema
│   │   │   └── utils.js          # Utility functions
│   │   ├── pages/
│   │   │   └── DashBoard.jsx     # Main dashboard
│   │   ├── App.css
│   │   ├── App.jsx               # Main application layout
│   │   ├── index.css             # Tailwind CSS styles
│   │   └── main.jsx
│   ├── components.json
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── index.html                    # Root HTML file
├── index1.html                   # HTML DOM demo
├── script.js                     # Async status check demo
├── xss.html                      # Vanilla JS innerHTML XSS demonstration
├── .gitignore
└── README.md
```

---

## 💻 Getting Started

### 1. Navigate to the frontend directory
```bash
cd frontend
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```
