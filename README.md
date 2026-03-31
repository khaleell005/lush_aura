# Lush Aura — Scarves & Fashion

A beautiful, responsive landing page for **Lush Aura**, an elegant Nigerian fashion brand specializing in handcrafted scarves, silk wraps, head ties, and evening shawls.

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Modern Aesthetic** — Pink and gold color palette with elegant typography (Cormorant Garamond + Jost)
- **Interactive Gallery** — Filter products by category (All, Scarves, Shawls, Head Ties)
- **WhatsApp Integration** — Contact form sends inquiries directly via WhatsApp
- **Scroll Animations** — Smooth reveal animations as users scroll
- **Social Media Links** — Instagram, TikTok, and WhatsApp integration

## Sections

1. **Hero** — Brand introduction with call-to-action buttons
2. **Marquee Strip** — Animated product category banner
3. **About** — Brand story and key features
4. **Gallery** — Product collection with pricing
5. **Testimonials** — Customer reviews with photo reviews
6. **Contact** — Contact form and business information
7. **Footer** — Quick links, collections, and social media

## Getting Started

### View Locally

Simply open `index.html` in your browser:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or just double-click index.html
```

### File Structure

```
lush-aura/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── Assets/             # Product and page images
│   ├── hero-page.jpg
│   ├── about-page.jpg
│   ├── review-1.jpg
│   ├── review-2.jpg
│   ├── luxury-vintage-1.jpg
│   ├── luxury-vintage-2.jpg
│   ├── luxury-vintage-3.jpg
│   ├── pashmina.jpg
│   ├── vintage-1-3000.jpg
│   ├── vintage-2-3000.jpg
│   └── vintage-3000.jpg
└── README.md
```

## Customization

### Contact Information

Update these in `index.html`:

- WhatsApp number: Line 25, 401, 450
- Phone number: Line 380
- Email: Line 387
- Location: Line 373

### Social Media Links

Update the `href` attributes in the footer section:

```html
<a class="footer-social" href="YOUR_INSTAGRAM_LINK"><i class="fab fa-instagram"></i></a>
<a class="footer-social" href="YOUR_TIKTOK_LINK"><i class="fab fa-tiktok"></i></a>
<a class="footer-social" href="YOUR_WHATSAPP_LINK"><i class="fab fa-whatsapp"></i></a>
```

### Products

Edit the gallery cards in `index.html` to add, remove, or modify products. Each card includes:
- Product image
- Name and price
- Tag (Bestseller, New, Limited, Sale)
- Shop button

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom styling with CSS variables and animations
- **Vanilla JavaScript** — IntersectionObserver for scroll reveals, gallery filtering, WhatsApp integration
- **Font Awesome 6.5.1** — Social media and UI icons
- **Google Fonts** — Cormorant Garamond & Jost

## Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Lush Aura. All rights reserved.
