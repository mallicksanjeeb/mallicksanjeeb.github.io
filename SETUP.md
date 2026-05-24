# Portfolio Setup & Deployment Guide

## ✅ Portfolio Created!

Your portfolio has been created at: `/Volumes/D-Drive/job/portfolio/mallicksanjeeb.github.io`

## 🎯 What's Included

Your portfolio includes:
- ✅ Responsive HTML5 website
- ✅ Modern CSS3 styling with animations
- ✅ Vanilla JavaScript interactivity
- ✅ Font Awesome icons
- ✅ Mobile-optimized design
- ✅ All necessary assets and files

## 🚀 Next Steps

### Step 1: Customize Your Portfolio

**Edit `index.html`** to add your personal information:

1. **Profile Photo**
   - Replace `images/photograph.jpg` with your photo
   - Keep the same filename or update the reference in HTML

2. **Personal Information** (in index.html):
   - Hero section: Your name and title (around line 35)
   - About section: Your professional summary (around line 60)
   - Contact email: Update email link (around line 310)
   - Social links: Add your GitHub, LinkedIn, etc. (around line 315)

3. **Experience Timeline**
   - Add/edit your work experiences (around line 90)
   - Update project titles, companies, dates, and descriptions
   - Modify technology stacks

4. **Education**
   - Update your degrees and institutions (around line 200)

5. **Skills**
   - Modify skill categories and technologies (around line 230)

### Step 2: Create GitHub Repository

```bash
# Open terminal and navigate to the portfolio folder
cd /Volumes/D-Drive/job/portfolio/mallicksanjeeb.github.io

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"
```

### Step 3: Create Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name it: `mallicksanjeeb.github.io`
   - ⚠️ **IMPORTANT**: Must be exactly `yourusername.github.io` format
   - Replace `yourusername` with your GitHub username
4. Add description: "Personal Technical Portfolio"
5. Choose "Public"
6. Click "Create repository"

### Step 4: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/mallicksanjeeb.github.io.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"** (or "master")
   - Folder: Select **"/ (root)"**
5. Click **Save**

### Step 6: Verify Your Site

✅ Your portfolio is now live at: `https://yourusername.github.io`

Visit the URL in your browser to see your live portfolio!

## 📝 Making Updates

After customization, push changes to GitHub:

```bash
# Make your changes to index.html, CSS, etc.

# Stage changes
git add .

# Commit with a message
git commit -m "Update portfolio with personal information"

# Push to GitHub
git push
```

Changes appear live within 1-2 minutes!

## 🎨 Optional Customizations

### Change Colors

Edit `assets/css/custom.css` and modify the CSS variables:

```css
:root {
  --primary: #3b82f6;        /* Change this color */
  --accent: #06b6d4;         /* And this one */
  /* etc. */
}
```

### Modify Fonts

In `index.html`, change the Google Fonts import (around line 9):
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Add Custom Domain

1. Buy a domain (e.g., yourname.com)
2. Go to repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Follow DNS configuration instructions
5. GitHub will automatically set up HTTPS

## 🔍 Testing Locally

Before pushing to GitHub, test locally:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```

Then visit: `http://localhost:8000`

## 📋 Portfolio Structure

```
mallicksanjeeb.github.io/
├── index.html              ← Main page (edit this!)
├── README.md               ← Documentation
├── .gitignore              ← Git configuration
└── assets/
    ├── css/
    │   ├── custom.css      ← Styling (edit for colors)
    │   └── fontawesome-all.min.css
    ├── js/
    │   ├── main.js         ← Animations
    │   ├── util.js
    │   └── ...
    ├── webfonts/           ← Icon fonts
    └── images/
        └── photograph.jpg  ← Your photo (replace this!)
```

## ✨ Features Included

- ✅ Smooth scroll animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional typography
- ✅ Gradient backgrounds
- ✅ Icon support (Font Awesome)
- ✅ Timeline for experience
- ✅ Skills showcase
- ✅ Contact section
- ✅ Fast loading (no jQuery required)

## 🆘 Troubleshooting

### Site not showing up
- Wait 2-3 minutes for GitHub Pages to deploy
- Check Settings → Pages to confirm deployment
- Clear browser cache (Ctrl+Shift+Delete)

### Images not loading
- Check file paths in index.html
- Ensure images/photograph.jpg exists
- Use relative paths: `images/filename.jpg`

### Styling looks wrong
- Clear browser cache
- Wait a moment for CSS to reload
- Check assets/css/custom.css is properly linked

### Custom domain issues
- Verify CNAME file was created
- Check DNS settings at your domain registrar
- Wait 24 hours for DNS propagation

## 📚 Resources

- [GitHub Pages Docs](https://pages.github.com/)
- [HTML5 Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Font Awesome Icons](https://fontawesome.com/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

## 📊 What to Include in Your Portfolio

✅ Professional summary  
✅ Work experience (with dates, companies, technologies)  
✅ Education (degrees, certifications)  
✅ Technical skills (languages, frameworks, tools)  
✅ Contact information (email, social links)  
✅ Professional photo  

## 🎓 Pro Tips

1. **Keep it updated**: Update your portfolio when you learn new skills
2. **Use keywords**: Include technologies/skills relevant to your target job
3. **Show personality**: Let your professional voice shine through
4. **Mobile first**: Always test on mobile devices
5. **Fast loading**: Optimize images before uploading
6. **GitHub link**: Share your GitHub repository to show coding skills
7. **Google Search**: Help people find you by sharing your portfolio URL

## 🎉 You're Ready!

Your portfolio is set up and ready to share with the world!

### Quick Checklist:
- [ ] Customized personal information
- [ ] Added profile photo
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages
- [ ] Visited your live portfolio
- [ ] Tested on mobile
- [ ] Shared with network

---

**Need help?** Visit the README.md file for more details.

**Email**: jobsforsanjeeb@yahoo.com

Good luck with your portfolio! 🚀
