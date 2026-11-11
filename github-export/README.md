# GitHub Deployment Files for ZCJ Industrial Private Limited

This folder contains the complete, standalone HTML, CSS, and JavaScript files for the **ZCJ Industrial Private Limited** corporate website.

## Files:
1. `index.html` - Complete 7-page semantic HTML5 structure (Home, About Us, Products, Services, Gallery, Career, Contact Us) with embedded Google Maps, Schema.org SEO, Inquiry forms, and Lightbox.
2. `style.css` - Responsive industrial stylesheet with clean variables, flexbox/grid layout, bento grids, and mobile navigation.
3. `script.js` - Vanilla JavaScript handling tab switching, catalog filtering, enquiry modal, job application modal, and image lightbox.

## How to Deploy to GitHub Pages:
1. Initialize a new Git repository or copy these 3 files into the root of your repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for ZCJ Industrial website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** → **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your website will be live in 1-2 minutes at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`
