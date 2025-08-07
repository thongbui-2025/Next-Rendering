# 🧪 Next.js Rendering Demo

This project demonstrates the 4 main rendering strategies in **Next.js**, including:

-   ✅ **Static Site Generation (SSG)**
-   ♻️ **Incremental Static Regeneration (ISR)**
-   🔁 **Server-Side Rendering (SSR)**
-   🧠 **Client-Side Rendering (CSR)**

## 📁 Pages Overview

| Route             | Rendering Type      | Description                                      |
| ----------------- | ------------------- | ------------------------------------------------ |
| `/`               | **SSG**             | Static HTML built at compile time                |
| `/ssg`            | **SSG**             | Uses `getStaticProps` for static generation      |
| `/isr`            | **ISR**             | Static generation + auto revalidate every 60s    |
| `/isr-on-demand`  | **ISR (On-Demand)** | Static with revalidation triggered by API        |
| `/ssr`            | **SSR**             | Server-rendered at every request                 |
| `/csr`            | **CSR**             | Content is fetched client-side using `useEffect` |
| `/api/revalidate` | **API Route**       | Revalidates ISR on demand                        |

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build
npm start
```
