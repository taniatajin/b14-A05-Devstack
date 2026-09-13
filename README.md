# 🧩 Dev Stack

**Dev Stack** is a web app that helps developers plan out their next project's tech stack. Browse frontend, backend, database, and tooling options as cards, compare them at a glance, and build a personal "stack" by adding the technologies you want to use.

## 🛠️ Built With

- React.js
- Vite
- Tailwind CSS
- React-Toastify
- JSON (local data file, loaded with `fetch`)

## ✨ Features

1. **Browse and compare technologies** — every technology is shown as a card with its category, difficulty level, rating, and a short description, in a responsive 1/2/3-column grid.
2. **Build your own stack** — click "Add to Stack" on any card to add it to the "Your Stack" panel; duplicate adds are blocked with a warning toast, and each item can be removed individually or all at once.
3. **Polished feedback everywhere** — a loading state while the technology data is fetched, and toast notifications (via react-toastify) for every add/remove action, all themed with one shared orange → pink → violet gradient used across the brand name, hero heading, and buttons.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📖 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript. It's used in React because it makes describing what the UI should look like much more readable than calling `React.createElement()` by hand — under the hood, tools like Vite/Babel compile JSX back into regular JavaScript function calls.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — they're read-only from the component's own perspective, similar to function arguments. State is data a component manages *itself* and can change over time (for example, with `useState`). Changing state triggers a re-render; changing props only happens when the parent re-renders and passes new values down.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` lets a function component hold and update its own local data between renders. In this project it's used in `TechnologiesSection` to store the fetched `technologies` list, the loading/error state, and the `stack` array of technologies the user has added, and in `Navbar` to track whether the mobile menu is open.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` lets a component run side effects — code that isn't part of rendering, like fetching data, after the component mounts (or when specific values change). Fetching is asynchronous and shouldn't run directly during render, so `TechnologiesSection` uses `useEffect` with an empty dependency array to fetch `technologies.json` once when the component first mounts.

**5. Why does every item in a `.map()` list need a unique key prop?**
React uses the `key` to tell items apart between renders, so it knows which items were added, removed, or reordered instead of re-rendering the whole list from scratch. Without a stable, unique key, React can mix up items and cause bugs or unnecessary re-renders — that's why each technology card and stack item is keyed by the technology's unique `id`.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, using normal JavaScript logic (like `if`, ternaries, or `&&`) inside the component. In `YourStack.jsx`, when `stack.length` is `0` the component renders an empty-state message ("No technologies added yet…"); otherwise it renders the list of added technologies instead.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props, just like passing an argument to a function (e.g. `<TechnologyCard technology={tech} isAdded={...} />`). For a child to send information back up, the parent passes a *function* down as a prop (e.g. `onAdd`), and the child calls that function — often with some data as an argument — whenever something happens, like a button click.
