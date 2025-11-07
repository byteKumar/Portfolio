# Chaman Kumar - Portfolio Website

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Next.js-000000?logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.3-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)

**A modern, responsive portfolio website showcasing professional experience, projects, and achievements**

[Live Demo](https://chamankumar.vercel.app) • [GitHub](https://github.com/byteKumar/Portfolio) • [Documentation](#documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Key Components](#key-components)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This is a comprehensive, modern portfolio website built with **Next.js 13** and **Tailwind CSS** that showcases professional experience, projects, publications, leadership roles, and technical skills. The portfolio features a clean, responsive design with dark/light theme support, smooth animations, and an intuitive navigation system.

### Key Highlights

- ✨ **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- 🌓 **Dark/Light Theme**: Toggle between themes with persistent preferences
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Interactive Sections**: Dynamic tabs and journey views for detailed project information
- 🚀 **Performance Optimized**: Built with Next.js for optimal performance and SEO
- 📊 **Comprehensive Content**: Showcases experience, projects, publications, and leadership

---

## ✨ Features

### Core Features

1. **Resume-Style Layout**
   - Tabbed navigation system (About, Education, Experience, Projects, Skills, Publications, Leadership, CV, Study)
   - Dynamic content switching with smooth animations
   - Professional presentation of professional information

2. **Project Showcase**
   - Detailed project listings with descriptions
   - Project Journey views with STAR format documentation
   - GitHub links and production site links
   - Project filtering by technology stack

3. **Experience & Education**
   - Timeline view of work experience
   - Educational background with institutions
   - Detailed role descriptions and achievements
   - Company logos and branding

4. **Publications & Research**
   - Research paper listings with PDF downloads
   - Research Journey views with detailed documentation
   - IEEE publication integration
   - Academic achievements showcase

5. **Leadership & Achievements**
   - Leadership roles and responsibilities
   - Wireframe Journey for design projects
   - Product management showcase
   - Team leadership documentation

6. **Skills & Technologies**
   - Comprehensive skill listings
   - Technology stack categorization
   - Proficiency indicators
   - Tool and framework expertise

7. **Theme Management**
   - Dark/Light theme toggle
   - Persistent theme preferences (localStorage)
   - Smooth theme transitions
   - Floating draggable theme toggle button

8. **Responsive Design**
   - Mobile-first approach
   - Tablet and desktop optimizations
   - Touch-friendly interactions
   - Adaptive layouts

9. **Animations & Interactions**
   - Framer Motion animations
   - Smooth page transitions
   - Hover effects and interactions
   - Loading states

10. **Study Section**
    - Password-protected study materials
    - Secure access control
    - Educational resources

---

## 🛠 Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 13.4.15 | React framework for server-side rendering and static site generation |
| **React** | 18.2.0 | JavaScript library for building user interfaces |
| **Tailwind CSS** | 3.3.3 | Utility-first CSS framework for styling |
| **Framer Motion** | 10.16.1 | Animation library for React |
| **Heroicons** | 2.0.18 | Icon library for React |
| **React Type Animation** | 3.0.0 | Typing animation effects |

### Backend & API

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js API Routes** | 13.4.15 | Serverless API endpoints |
| **Resend** | 1.1.0 | Email API for contact form |
| **EmailJS** | 3.2.0 | Email service integration |

### Development Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting and quality assurance |
| **PostCSS** | CSS processing |
| **Autoprefixer** | CSS vendor prefixing |
| **Git** | Version control |

### Deployment

- **Vercel**: Primary deployment platform
- **GitHub Pages**: Alternative deployment option

---

## 🏗 Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Client (Browser)                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Next.js Application (React)                  │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  │   │
│  │  │   Pages      │  │  Components   │  │  Styles  │  │   │
│  │  └──────────────┘  └──────────────┘  └──────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         State Management (React Hooks)               │   │
│  │  • useState • useEffect • useContext                 │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Theme Management (localStorage)               │   │
│  └──────────────────────────────────────────────────────┘   │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ HTTP/HTTPS
                            │
┌───────────────────────────▼─────────────────────────────────┐
│              Next.js Server (API Routes)                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              API Endpoints                           │   │
│  │  • /api/send (Email)                                 │   │
│  │  • /api/visitor-count (Analytics)                    │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         External Services                            │   │
│  │  • Resend API (Email)                                │   │
│  │  • EmailJS (Email)                                    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
App (page.js)
├── RootLayout (layout.js)
│   ├── Theme Script (localStorage initialization)
│   └── Main Content
│       ├── ThemeToggle (Floating button)
│       └── ResumeSection (Main portfolio component)
│           ├── Tab Navigation
│           ├── About Section
│           ├── Education Section
│           ├── Experience Section
│           │   ├── Northeastern Experience
│           │   ├── AKQA Experience
│           │   └── BluePi Experience
│           ├── Projects Section
│           │   ├── Project List
│           │   └── Project Journey Views
│           │       ├── Google Slides Generator Journey
│           │       ├── Advance Image Processor Journey
│           │       ├── LeetCode Power-Up Journey
│           │       ├── DesignCraft Journey
│           │       └── RecipeHub Journey
│           ├── Skills Section
│           ├── Publications Section
│           │   └── Research Journey Views
│           ├── Leadership Section
│           │   └── Wireframe Journey (PepperUni)
│           ├── CV Section
│           └── Study Section (Password Protected)
```

### Data Flow

```
User Interaction
    │
    ▼
React Component (State Update)
    │
    ▼
Framer Motion Animation
    │
    ▼
UI Update (Rendered)
    │
    ├──► Theme Change → localStorage → DOM Update
    ├──► Tab Change → State Update → Content Switch
    └──► Form Submit → API Route → External Service
```

---

## 📁 Project Structure

```
portfolio/
├── public/                          # Static assets
│   ├── images/                      # Image assets
│   │   ├── hero-image.jpeg
│   │   ├── northeastern.png
│   │   ├── akqa.png
│   │   └── ...
│   ├── pdfs/                        # PDF documents
│   │   ├── Chaman_Kumar_Resume_2025.pdf
│   │   ├── research1.pdf
│   │   └── research2.pdf
│   ├── icons/                       # Icon assets
│   │   ├── github-icon.svg
│   │   ├── linkedin-icon.svg
│   │   └── ...
│   └── index.js                     # Asset exports
│
├── src/
│   └── app/
│       ├── api/                     # API routes
│       │   ├── send/
│       │   │   └── route.js         # Email API
│       │   └── visitor-count/
│       │       └── route.js         # Analytics API
│       │
│       ├── components/              # React components
│       │   ├── ResumeSection.jsx    # Main portfolio component
│       │   ├── ThemeToggle.jsx      # Theme toggle button
│       │   ├── AboutSection.jsx     # About section
│       │   ├── ProjectsSection.jsx   # Projects showcase
│       │   ├── ProjectCard.jsx       # Project card component
│       │   ├── ProjectTag.jsx        # Project filter tags
│       │   ├── Navbar.jsx            # Navigation bar
│       │   ├── NavLink.jsx           # Navigation link
│       │   ├── MenuOverlay.jsx       # Mobile menu
│       │   ├── HeroSection.jsx      # Hero section
│       │   ├── EmailSection.jsx     # Contact form
│       │   ├── Footer.jsx            # Footer component
│       │   ├── TabButton.jsx         # Tab button component
│       │   └── AchievementsSection.jsx # Achievements
│       │
│       ├── globals.css              # Global styles
│       ├── layout.js                 # Root layout
│       └── page.js                   # Home page
│
├── .env.local                       # Environment variables (not in repo)
├── .gitignore                       # Git ignore rules
├── jsconfig.json                    # JavaScript configuration
├── next.config.js                    # Next.js configuration
├── package.json                     # Dependencies and scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── visitor-count.json               # Visitor count data
└── README.md                        # This file
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**
- **Git** (for cloning the repository)

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/byteKumar/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables** (see [Configuration](#configuration))

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   - Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration (Optional)
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=your_email@example.com

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind CSS Configuration

The project uses Tailwind CSS with custom configuration:

- **Dark Mode**: Class-based dark mode (`dark:` prefix)
- **Custom Colors**: Primary (green) and Secondary (yellow) color schemes
- **Responsive Breakpoints**: Default Tailwind breakpoints (sm, md, lg, xl, 2xl)

### Next.js Configuration

The `next.config.js` file includes:

- Image optimization settings
- Export configuration (commented out for Vercel deployment)
- Asset prefix configuration (for GitHub Pages deployment)

---

## 🧩 Key Components

### ResumeSection

The main portfolio component that manages all sections and navigation.

**Features:**
- Tab-based navigation system
- State management for active sections
- Project journey views
- Research journey views
- Theme management integration

**Props:** None (self-contained component)

**State:**
- `activeTab`: Current active tab
- `showWireframe`: Wireframe journey visibility
- `showResearchJourney`: Research journey visibility
- `activeProjectJourney`: Active project journey ID
- `theme`: Current theme (light/dark)

### ThemeToggle

Floating draggable button for theme switching.

**Features:**
- Drag and drop functionality
- Persistent theme preferences
- Smooth theme transitions
- Icon-based visual feedback

### ProjectCard

Reusable component for displaying project information.

**Props:**
- `title`: Project title
- `description`: Project description
- `image`: Project image
- `gitUrl`: GitHub repository URL
- `previewUrl`: Live preview URL
- `tag`: Project technology tags

### TabButton

Reusable tab button component with active state.

**Props:**
- `selectTab`: Function to handle tab selection
- `active`: Boolean indicating if tab is active
- `children`: Tab label

---

## 📡 API Routes

### Email API (`/api/send`)

**Endpoint:** `POST /api/send`

**Request Body:**
```json
{
  "email": "user@example.com",
  "subject": "Contact Form Submission",
  "message": "Message content"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Note:** Currently configured for Resend API (commented out in code). Uncomment and configure environment variables to enable.

### Visitor Count API (`/api/visitor-count`)

**Endpoint:** `GET /api/visitor-count`

**Response:**
```json
{
  "count": 1234
}
```

**Note:** Uses local JSON file for visitor count storage. Can be replaced with database integration.

---

## 🚢 Deployment

### Vercel Deployment (Recommended)

1. **Connect GitHub repository to Vercel**

2. **Configure environment variables** in Vercel dashboard

3. **Deploy automatically** on push to main branch

4. **Custom domain** (optional) - Configure in Vercel settings

### GitHub Pages Deployment

1. **Update `next.config.js`:**

   ```javascript
   const nextConfig = {
     basePath: '/portfolio',
     assetPrefix: '/portfolio/',
     output: 'export',
   }
   ```

2. **Build static export:**

   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

### Manual Deployment

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Start production server:**

   ```bash
   npm start
   ```

3. **Configure reverse proxy** (nginx, Apache, etc.) if needed

---

## 💻 Development

### Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Export static site
npm run export
```

### Code Style

- **ESLint**: Configured with Next.js recommended rules
- **React**: Functional components with hooks
- **CSS**: Tailwind CSS utility classes
- **Naming**: PascalCase for components, camelCase for functions

### Adding New Sections

1. **Add tab to `tabs` array** in `ResumeSection.jsx`:

   ```javascript
   const tabs = [
     // ... existing tabs
     { id: "new-section", label: "New Section" },
   ];
   ```

2. **Add conditional rendering** in `ResumeSection.jsx`:

   ```javascript
   {activeTab === "new-section" && (
     <motion.div>
       {/* Your section content */}
     </motion.div>
   )}
   ```

### Adding New Projects

1. **Update project data** in `ProjectsSection.jsx`:

   ```javascript
   const projectsData = [
     // ... existing projects
     {
       id: 6,
       title: "New Project",
       description: "Project description",
       image: ProjectImage,
       tag: ["All", "Web"],
       gitUrl: "https://github.com/...",
       previewUrl: "https://...",
     },
   ];
   ```

2. **Add Project Journey** in `ResumeSection.jsx` (if needed)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a feature branch:**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes:**

   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Code Style Guidelines

- Use functional components with React hooks
- Follow ESLint rules and warnings
- Write meaningful commit messages
- Add comments for complex logic
- Maintain consistent code formatting

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Heroicons** - For beautiful icons
- **Vercel** - For hosting and deployment platform

---

## 📞 Contact

**Chaman Kumar**

- **Email**: kumar.cham@northeastern.edu
- **GitHub**: [@byteKumar](https://github.com/byteKumar)
- **LinkedIn**: [Chaman Kumar](https://www.linkedin.com/in/chaman-kumar/)
- **Portfolio**: [chamankumar.vercel.app](https://chamankumar.vercel.app)

---

## 🗺 Roadmap

### Planned Features

- [ ] Blog section integration
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics dashboard
- [ ] Contact form with email integration
- [ ] Resume download functionality
- [ ] Project filtering enhancements
- [ ] Search functionality
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Performance optimizations
- [ ] SEO enhancements

### Known Limitations

- Email API currently commented out (requires Resend API key)
- Visitor count uses local JSON file (can be replaced with database)
- Study section uses hardcoded password (should use secure authentication)

---

<div align="center">

**Made with ❤️ by Chaman Kumar**

[⬆ Back to Top](#chaman-kumar---portfolio-website)

</div>
