# 🐾 AdoptiPaws Landing Page

A modern, responsive landing page for AdoptiPaws - a platform connecting animals in need with loving homes. Built with React, Vite, and Tailwind CSS, this website serves as the front-facing portal for pet adoption, animal rescue reporting, and NGO collaboration.

![AdoptiPaws](https://img.shields.io/badge/AdoptiPaws-Pet%20Adoption-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.10-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-cyan)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## 🌟 About

AdoptiPaws is a compassionate platform designed to revolutionize animal rescue and adoption. The landing page showcases the platform's core features and provides visitors with an engaging introduction to the services offered.

### Mission

Connecting animals in need with loving homes through:
- **Seamless pet adoption processes**
- **Community-driven animal rescue reporting**
- **NGO collaboration and coordination**
- **Transparent health and recovery tracking**

## ✨ Features

### 🔍 Seamless Pet Search
Browse through adoptable pets with advanced filters for species, breed, age, and location to find your perfect companion.

### 🚨 Post Animals in Need
Report stray or injured animals quickly, enabling NGOs to respond and provide immediate assistance.

### 🤝 NGO Collaboration Hub
A centralized platform for NGOs to manage rescue operations, connect with adopters, and share updates on rescued animals.

### 💚 Health & Recovery Updates
Real-time tracking of animals under rescue care, including health status and adoption readiness.

### ✅ Adoption Application Tracking
Streamlined application process with transparent tracking and regular updates throughout the journey.

### 👥 Community Success Stories
Inspiring testimonials and success stories from adopters and NGOs showcasing positive adoption impacts.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.10
- **Styling:** Tailwind CSS 3.4.14
- **Icons:** Lucide React 0.454.0
- **Language:** JavaScript (ES6+)
- **Linting:** ESLint with React plugins

### Development Tools

- PostCSS with Autoprefixer
- React SWC Plugin for fast refresh
- ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd adoptipaws_landing_page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (default Vite port)

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
adoptipaws_landing_page/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images and media files
│   │   ├── profile-pictures/   # User testimonial images
│   │   ├── Cat.jpg
│   │   └── Dog.jpg
│   ├── components/             # React components
│   │   ├── AboutUs.jsx         # About section
│   │   ├── FeatureSection.jsx  # Features showcase
│   │   ├── Footer.jsx          # Footer navigation
│   │   ├── HeroSection.jsx     # Hero banner with animations
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── PetFilterSection.jsx # Pet filtering UI
│   │   ├── Testimonials.jsx    # User testimonials
│   │   └── Workflow.jsx        # Process workflow
│   ├── constants/
│   │   └── index.jsx           # App constants and data
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🧩 Components

### Navbar
Responsive navigation bar with smooth scrolling to page sections.

### HeroSection
Eye-catching hero banner featuring:
- Animated image carousel (cat and dog images)
- Gradient text animations
- Floating decorative elements
- Clear call-to-action buttons

### FeatureSection
Showcases six core platform features with icons and descriptions.

### Workflow
Visual representation of the rescue-to-adoption process:
1. Report animals in need
2. NGO rescue operations
3. Health & recovery monitoring
4. Simple adoption process

### Testimonials
Real user stories from adopters, NGO workers, and supporters with profile images.

### AboutUs
Detailed information about the AdoptiPaws mission and values.

### Footer
Footer navigation with resource links and community information.

## 🎨 Design Highlights

- **Modern Dark Theme:** Gradient backgrounds with black and neutral tones
- **Smooth Animations:** Pulse effects, bouncing elements, and fade-ins
- **Responsive Design:** Mobile-first approach ensuring compatibility across all devices
- **Accessibility:** Semantic HTML and proper ARIA labels
- **Performance:** Optimized images and lazy loading

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` for theme customization.

### Vite
Fast build times and hot module replacement configured in `vite.config.js`.

### ESLint
Code quality rules configured for React best practices.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow existing code formatting
- Run `npm run lint` before committing
- Write meaningful commit messages
- Add comments for complex logic

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact & Support

For questions, suggestions, or support:
- Open an issue in the repository
- Contact the development team

---

<div align="center">
  <p>Made with ❤️ for animal welfare</p>
  <p>🐾 Connecting Animals with Loving Homes 🐾</p>
</div>
