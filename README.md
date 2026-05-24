# Sanjeeb Kumar Mallick — Technical Manager Portfolio

A modern, responsive portfolio website built with HTML5, CSS3, and vanilla JavaScript. Designed for technical professionals in software development and engineering.

## 📁 Project Structure

```
mallicksanjeeb.github.io/
├── index.html                 # Main portfolio page
├── assets/
│   ├── css/
│   │   ├── custom.css        # Main stylesheet with animations
│   │   └── fontawesome-all.min.css
│   ├── js/
│   │   ├── main.js           # Main JavaScript with scroll animations
│   │   ├── util.js           # Utility functions
│   │   ├── breakpoints.min.js
│   │   ├── browser.min.js
│   │   └── jquery*.min.js    # jQuery (optional)
│   └── webfonts/             # Font files
├── images/                    # Portfolio images
└── README.md                  # This file
```

## 🚀 Quick Start

### 1. Setup GitHub Pages Repository

```bash
# Clone or create a new repository on GitHub
git clone https://github.com/yourusername/mallicksanjeeb.github.io.git
cd mallicksanjeeb.github.io

# Initialize if starting fresh
git init
git add .
git commit -m "Initial portfolio setup"
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master**)
   - Folder: **/ (root)**
4. Click **Save**

Your portfolio will be live at: `https://yourusername.github.io`

### 3. Local Development

To test locally, simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```

Then visit: `http://localhost:8000`

## ✏️ Customization

### Update Your Information

Edit `index.html` and update:

1. **Meta Tags** (lines 6-9):
   - Title
   - Description
   - Keywords

2. **Profile Photo**:
   - Replace `images/photograph.jpg` with your photo
   - Current: Uses reference portfolio image (change this!)

3. **Hero Section** (around line 35):
   - Update name, title, and subtitle
   - Modify the icon if desired

4. **About Section** (around line 60):
   - Update profile text
   - Modify highlights (years, metrics)

5. **Experience Section** (around line 90):
   - Add/remove experience entries
   - Update project titles, roles, dates
   - Modify technology stack

6. **Education Section** (around line 200):
   - Update degrees and institutions
   - Add/remove certifications

7. **Skills Section** (around line 230):
   - Modify skill categories
   - Add/remove technologies

8. **Contact Section** (around line 310):
   - Update email address
   - Add social media links

### Modify Styling

Edit `assets/css/custom.css` to customize:

- **Colors**: Modify CSS variables in `:root` (lines 10-40)
- **Fonts**: Change font family in `body` selector
- **Layout**: Adjust grid and flex layouts
- **Animations**: Modify transition speeds and effects

### CSS Color Variables

```css
:root {
  --primary: #3b82f6;          /* Primary blue */
  --accent: #06b6d4;           /* Cyan accent */
  --accent-2: #8b5cf6;         /* Purple accent */
  --accent-warm: #f59e0b;      /* Orange accent */
  --dark: #0f172a;             /* Dark background */
  --gray: #64748b;             /* Gray text */
  /* ... more variables */
}
```

## 📝 Content Sections

### Header/Hero
- Profile introduction
- Call-to-action buttons
- Navigation menu

### About Me
- Professional summary
- Profile photo
- Key statistics

### Experience
- Timeline of work experience
- Project descriptions
- Technology stacks
- Roles and responsibilities

### Education
- Degrees and institutions
- Certifications
- Additional qualifications

### Skills
- Technical languages
- Frameworks and tools
- Cloud platforms
- Databases and messaging
- Methodologies

### Contact
- Email address
- Social media links
- Message section

## 🎨 Features

✨ **Modern Design**
- Gradient backgrounds
- Smooth animations on scroll
- Responsive layout
- Dark/light sections

⚡ **Performance**
- Lightweight vanilla JavaScript (no jQuery required)
- Minimal CSS animations
- Optimized asset delivery
- Fast load times

📱 **Responsive**
- Mobile-first design
- Tablet optimized
- Desktop enhanced
- All screen sizes supported

♿ **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- High contrast colors

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icon library
- **Google Fonts**: Inter typeface
- **GitHub Pages**: Free hosting

## 📱 Browser Support

- Chrome/Edge: ✅ Latest
- Firefox: ✅ Latest
- Safari: ✅ Latest
- Mobile browsers: ✅ All modern browsers

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push code to main branch
2. GitHub automatically deploys from the repository
3. Visit `https://yourusername.github.io`

### Update After Changes

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Changes appear live within 1-2 minutes!

## 📞 Contact & Social Links

Update these in `index.html` around line 310:

```html
<a href="mailto:your-email@example.com">Email</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

## 📄 Next Steps

- [ ] Replace profile photo in `images/photograph.jpg`
- [ ] Update all personal information in `index.html`
- [ ] Customize colors in `assets/css/custom.css`
- [ ] Add your social media links
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages
- [ ] Share with recruiters and network

## 📚 Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [HTML5 Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)

## 📄 License

This portfolio template is provided as-is. Customize and use freely!

---

**Created for**: Sanjeeb Kumar Mallick  
**Date**: May 24, 2024  
**Contact**: jobsforsanjeeb@yahoo.com

Last Updated: May 24, 2024
