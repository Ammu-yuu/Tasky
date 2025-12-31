# Tasky

Tasky is a simple desktop task manager built with React and Tauri. It lets you create and track tasks in a minimal interface, packaged as a lightweight cross‑platform desktop app. [web:91]

---

## Features

- Create and manage tasks in a clean UI.
- Desktop app packaging via Tauri (small bundle size, low memory usage). [web:91]
- Hot‑reload development workflow with the Tauri dev server. [web:89]
- Cross‑platform support (Windows, macOS, Linux) when bundled. [web:89]

---

## Tech Stack

- **Frontend:** React (TypeScript/JavaScript)
- **Desktop shell:** Tauri
- **Package manager / tooling:** Node.js, npm

---


## 📸 Screenshots

### Main Screen
[Main Screen]
 
 <img width="2638" height="1558" alt="image" src="https://github.com/user-attachments/assets/9a3a5812-c4b1-4e40-abee-eab38dc8aebf" />


---------

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node.js)
- **Rust toolchain** (required by Tauri) [web:89]  
  Install via:

```
curl https://sh.rustup.rs -sSf | sh
```

On macOS you also need Xcode Command Line Tools:

```
xcode-select --install
```

See the Tauri docs for up‑to‑date platform requirements. [web:74][web:89]

### Installation

Clone the repository and install dependencies:

```
git clone https://github.com/Ammu-yuu/Tasky.git
cd Tasky
npm install
```

### Run in the browser (web)

If the project exposes a plain web build, you can usually run:

```
npm run dev
```

and open the URL printed in the terminal (commonly `http://localhost:5173` for Vite or `http://localhost:3000` for CRA).

### Run as a Tauri desktop app

From the project root:

```
npm run tauri dev
```

This will start the frontend dev server and open the native Tauri window. [web:89][web:91]

### Build desktop bundles

To create a production desktop build:

```
npm run tauri build
```

Tauri will output platform‑specific bundles (e.g. `.app`, `.dmg`, `.msi`, `.deb`) in the `src-tauri/target` directory. [web:74][web:89]

---

## Project Structure

High‑level layout (may vary slightly):

- `src/` – React frontend source code.
- `src-tauri/` – Tauri configuration (`tauri.conf.json`) and Rust backend.
- `public/` or `dist/` – Static assets and build output.
- `package.json` – npm scripts and JS dependencies.
- `README.md` – Project documentation (this file).

---

## Scripts

Common npm scripts (check `package.json` for the exact list):

- `npm run dev` – Start the web dev server.
- `npm run build` – Build the web app for production.
- `npm run tauri dev` – Run the Tauri desktop app in dev mode. [web:91]
- `npm run tauri build` – Build the production Tauri bundles. [web:74]

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit and push your changes.
4. Open a pull request describing what you’ve done.

----
