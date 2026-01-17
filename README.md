# VIT DIGITAL - Premium Digital Marketing & Web Design Agency

![VIT DIGITAL Banner](https://via.placeholder.com/1200x400?text=VIT+DIGITAL+Agency)

**VIT DIGITAL** is a modern, high-performance agency website built to showcase premium digital marketing services, SEO solutions, and professional web design. Designed with a focus on user experience (UX), aesthetic appeal, and conversion optimization.

## 🚀 Features

- **Modern & Responsive Design**: Fully responsive layout that looks stunning on desktop, tablet, and mobile devices.
- **Dark Mode Support**: Seamless toggle between Light and Dark modes with persistent state.
- **Multi-language Support (i18n)**: Built-in support for Vietnamese (vi) and English (en).
- **Smooth Animations**: Powered by `framer-motion` for engaging scroll reveals and interactions.
- **Service Detail Pages**: Dedicated templates for various services (SEO, Ads, Web Design, etc.) with rich content structures.
- **Interactive Contact Forms**: Custom-styled forms with validation and specialized inputs for lead generation.
- **News/Blog Section**: Dynamic news listing and detail pages.
- **Pricing Tables**: Clear, attractive pricing comparisons.

## 🛠 Tech Stack

- **Core**: [React](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API

## 📂 Project Structure

```bash
zmarketing-agency/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Header, Footer, Hero, etc.)
│   ├── context/         # App Context (Theme, Language)
│   ├── pages/           # Main pages (Home, News, Contact, Pricing)
│   │   └── services/    # Individual service pricing/detail pages
│   ├── App.jsx          # Main App component & Routes
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## ⚡️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- **Node.js**: Version 18.0 or higher recommended.
- **npm** or **yarn**.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/tuutaii/vit_digital.git
    cd vit_digital
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:5173`.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing optimized assets ready for deployment.

## 🎨 Customization

- **Colors**: Theme colors (primary, secondary, accent) are defined in `tailwind.config.js`.
- **Translations**: Text strings can be modified in `src/context/AppContext.jsx`.
- **Navigation**: Update menu items in `src/components/Header.jsx`.

## 🤝 Contact

**VIT DIGITAL TRADING SERVICE CO., LTD**

- 📍 **Address**: 123 Business Avenue, Tech District, HCM City, Vietnam
- 📞 **Hotline**: 0966 290 789
- 📧 **Email**: hello@zmarketing.vn
- 🌐 **Website**: [vitdigital.vn](https://vitdigital.vn)

---

© 2026 VIT DIGITAL. All rights reserved.
