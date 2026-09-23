# Shudus Plumbing & Construction Website – Part 2

## WEDE5020 – Web Development

**Student:** Khuthadzo Andrew Magada  
**Student Number:** ST10503425  
**Organisation:** Shudus Plumbing & Construction (PTY) LTD  
**Project:** Shudus Plumbing & Construction Website

---

## 1. Project Overview

This project is the Part 2 implementation of the Shudus Plumbing & Construction website. The styling was developed to create a modern, professional and responsive website that reflects the organisation's plumbing and construction services.

The design follows the visual direction established in Part 1, using a professional **blue, white, grey and navy colour palette**, clear typography, strong visual hierarchy and responsive layouts.

## 2. Technologies Used

- HTML5
- CSS3
- CSS Flexbox
- CSS Grid
- CSS Media Queries
- Responsive images
- Google Fonts
- GitHub for version control

## 3. CSS Styling Implemented

### Global Styling

The stylesheet establishes a consistent visual system throughout the website. Styling includes `box-sizing: border-box`, removal of default body margins, consistent typography, text colours, line spacing, reusable containers, section spacing, smooth scrolling and responsive images.

```css
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

img {
    max-width: 100%;
    height: auto;
}
```

### Colour Scheme

The website uses a professional construction/plumbing colour scheme:

- Blue – primary brand and navigation colour.
- Dark blue/navy – headings, backgrounds and strong visual areas.
- White – main backgrounds and contrast.
- Light grey – secondary backgrounds and borders.
- Dark grey – body text.

Bright colours are kept to a minimum to maintain a professional appearance.

### Typography

**Poppins** is used for main headings, navigation, buttons, section headings and promotional text.

**Open Sans** is used for paragraphs, service descriptions, contact information, project descriptions and forms.

Heading sizes, font weights and spacing create a clear visual hierarchy.

## 4. Header and Navigation

The header provides clear navigation for:

- Home
- About
- Services
- Projects
- Testimonials
- Contact
- Request a Quote

Flexbox is used to arrange navigation links horizontally on larger screens. Hover effects provide visual feedback.

The navigation can remain visible while scrolling using:

```css
position: sticky;
top: 0;
```

## 5. Hero Section

The hero section contains the company branding, main heading, supporting text, professional imagery and calls to action.

Main calls to action include **Request a Quote** and **View Our Services**. The hero section scales for different screen sizes.

## 6. Buttons and Hover Effects

Buttons use background colours, padding, rounded corners, clear typography and transitions. Padding increases the clickable area.

```css
.button {
    padding: 12px 24px;
    border-radius: 6px;
    transition: 0.3s ease;
}
```

Hover styling is applied with `:hover` to provide visual feedback.

## 7. About Us Section

The About Us section presents company information beside an image. The layout uses two columns on larger screens and changes to a single-column layout on smaller screens. Mission and vision information is presented consistently with the rest of the website.

## 8. Services Section

The service area uses responsive cards for:

- Plumbing Services
- Property Development Plumbing
- Commercial Plumbing
- Repairs & Maintenance
- Remedial Work
- Solar Geyser Installation

Cards use padding, borders, rounded corners, shadows, consistent spacing and hover effects.

```css
.service-card {
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}
```

## 9. Trust and Company Features

The trust section presents:

- Quality Workmanship
- Professional Service
- Experienced Team
- Reliable Solutions
- Customer Satisfaction

Responsive columns keep the content readable on different screen sizes.

## 10. Projects / Gallery

The Projects section uses a responsive image and card layout for projects such as Fleurhof, Jabulani RDP and Residential Developments.

Responsive images use:

```css
img {
    max-width: 100%;
    height: auto;
}
```

This prevents images from exceeding their containers or becoming distorted.

## 11. Testimonials and Credentials

Testimonials use styled content cards with spacing, borders, rounded corners, shadows and typography hierarchy. A separate credentials section presents company information using the same visual system.

## 12. Request a Quote Form

The quote form is styled with labels, text inputs, text areas, spacing, borders, rounded corners, focus states and a clearly visible submit button. The form adapts to desktop, tablet and mobile layouts.

## 13. Contact Section

The Contact section uses responsive columns and action buttons such as Call, WhatsApp and Email. Contact information remains clear and accessible on smaller screens.

## 14. Flexbox

Flexbox is used for navigation and other row/column layouts.

```css
nav {
    display: flex;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

`justify-content: space-between` places the first and last items at opposite edges of the container.

## 15. CSS Grid

CSS Grid is used for structured layouts such as service and project cards.

```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

The number of columns changes at responsive breakpoints.

## 16. Responsive Design

The website adapts to smartphones, tablets, laptops and desktop computers. Media queries modify layouts, navigation, spacing and sizing at different viewport widths.

A key breakpoint is:

```css
@media (max-width: 768px) {
    /* Mobile/tablet styling */
}
```

At smaller widths, multi-column layouts can change to single-column layouts and navigation can adapt to the available space.

## 17. Responsive Images

Images use `max-width: 100%` and `height: auto` so they scale proportionally without stretching.

## 18. Image and Card Styling

Circular image presentations can use:

```css
border-radius: 50%;
```

Cards use properties including `border-radius`, `box-shadow`, `padding`, `margin`, `gap` and `transition` to create separation and visual depth.

## 19. Sticky Navigation

Sticky positioning keeps the navigation accessible during scrolling:

```css
nav {
    position: sticky;
    top: 0;
}
```

## 20. Mobile Navigation

The navigation adapts at smaller screen sizes so that links remain accessible without overcrowding the screen. The mobile menu functionality is supported by the HTML/JavaScript structure.

## 21. CSS Units

Relative and flexible units are used where appropriate, including `%`, `rem`, `em`, `vw`, `vh` and `fr`. Pixel values may be used for borders, small spacing values and specific UI dimensions.

## 22. Visual Consistency

The styling maintains consistency through:

- Blue branding.
- Consistent heading styles.
- Consistent button styles.
- Consistent card design.
- Consistent spacing.
- Consistent border radius.
- Consistent shadows.
- Consistent responsive behaviour.

## 23. Accessibility and Usability

The styling supports usability through clear navigation, readable typography, adequate spacing, large clickable buttons, visible hover states, responsive layouts, responsive images, clear form fields and strong visual hierarchy.

## 24. Suggested Project Structure

```text
shudus-plumbing/
│
├── index.html
├── README.md
├── css/
│   └── style.css
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── about-plumbing.jpg
│   └── project images
└── js/
    └── script.js
```

## 25. Testing

The completed website should be tested at different viewport sizes to check navigation, links, forms, images, Flexbox layouts, Grid layouts, mobile navigation, tablet layout, desktop layout, text readability, horizontal overflow, spacing and alignment.

**Important:** Actual test results should be recorded after testing the completed website rather than being assumed in this README.

## 26. GitHub

The project can be maintained using GitHub for version control. Recommended repository contents are `index.html`, `css/style.css`, `images/`, `js/` and `README.md`.

## 27. Conclusion

The Part 2 styling focuses on creating a professional, clean and responsive website for Shudus Plumbing & Construction. CSS Flexbox and Grid provide the main layout structures, while media queries make the website adaptable to different screen sizes. Responsive images, typography, navigation, buttons, cards, forms, shadows, rounded corners and hover effects are used to create a consistent user experience.
