# Shudus Plumbing & Construction Website — WEDE5020 Part 3

**Student:** Khuthadzo Andrew Magada  
**Student number:** ST10502534  
**Module:** Web Development (Introduction)  
**Module code:** WEDE5020  
**Assessment:** Part 3 — Enhancing Functionality and SEO

## 1. Project overview

This project extends the Part 2 Shudus Plumbing & Construction website. It retains the original blue, navy, white and grey visual identity and the supplied company/project images while adding JavaScript interactions, search, an image lightbox, an interactive map, validated enquiry forms, SEO metadata and crawler files.

The site presents the organisation's plumbing and construction services and provides visitors with routes to enquire, request a quotation and view project images.

## 2. Website pages

| File | Purpose |
|---|---|
| `index.html` | Home page and overview |
| `AboutUs.html` | Company information, mission and vision |
| `Services.html` | Service cards, service search/filter and FAQs |
| `Projects.html` | Project photographs and lightbox gallery |
| `Testimonials.html` | Client feedback and company information |
| `ContactUs.html` | Contact information, general message form and map |
| `Requestaquote.html` | Service quotation enquiry form |

## 3. Technologies and libraries

- HTML5 semantic elements and native form controls.
- CSS3, Flexbox, Grid, media queries, transitions and responsive images.
- JavaScript (ES6) for event handling, filtering, form validation and the lightbox.
- Leaflet 1.9.4 for the interactive map.
- OpenStreetMap tiles, with visible attribution.
- Git and GitHub for version control.
- Netlify or GitHub Pages can be used for static hosting.

## 4. Part 3 functionality

### 4.1 Responsive navigation

The mobile navigation button toggles the menu and updates `aria-expanded`. Selecting a navigation link closes the menu.

### 4.2 Dynamic service search

On `Services.html`, the service search field filters the service cards as the visitor types. A live result count reports the number of visible services.

### 4.3 Interactive gallery lightbox

On `Projects.html`, each project image is a keyboard-accessible button. Selecting an image opens a dialog showing a larger version, its alternative text/caption and a close control.

### 4.4 Interactive map

The Contact page loads Leaflet and displays an OpenStreetMap map with a marker for the **general Cosmo City area**. The marker is approximate because the supplied project material identifies Cosmo City but does not provide a verified street address or exact coordinates. Confirm the exact business location before publishing a customer-facing pin. OpenStreetMap attribution is displayed on the map.

### 4.5 Enquiry form — Request a Quote

The quotation form collects name, phone, email, location, required service, property type, preferred date, work description and an optional supporting file. HTML constraints and JavaScript's `reportValidity()` check required fields and formats. After validation, JavaScript attempts an asynchronous submission to the Netlify Forms endpoint. On Netlify, submissions are stored in the site's Forms dashboard; configure an email notification there to deliver them to `info@shudusplumbing.co.za`. If the host does not provide the Netlify form endpoint, the website falls back to opening a prepared email addressed to that recipient.

The website does not calculate or promise a quotation price because no approved price list or pricing rules were supplied. The business must assess the request and provide the actual quotation.

### 4.6 General contact form

The Contact page collects the sender's name, email, phone, message category and full message. After browser validation, JavaScript attempts an asynchronous submission to Netlify Forms. Configure a Netlify form notification to email `info@shudusplumbing.co.za`. On hosts without the Netlify endpoint, a prepared email opens as a fallback.

**Form delivery configuration:** Netlify Forms is enabled in the HTML and the JavaScript uses `fetch()` for asynchronous submission. After deploying to Netlify, confirm both forms appear in the Netlify Forms dashboard and configure email notifications to the intended business inbox. On a host without Netlify Forms, the script falls back to `mailto:`; the visitor must review and send the email. A `mailto:` fallback cannot guarantee delivery or attach files automatically, so the visitor is prompted to attach selected files manually.

## 5. Search engine optimisation

Each page has a unique title and meta description, relevant meta keywords, author metadata and Open Graph title/description. Headings are used to structure content. Content images have descriptive alternative text and important project image filenames have been made descriptive. Internal links connect the seven pages.

`robots.txt` gives crawlers general access instructions. `sitemap.xml` lists the seven website pages.

**Important before deployment:** Replace `YOUR-DOMAIN-HERE` in both `robots.txt` and `sitemap.xml` with the final public website domain. Do not submit the placeholder URLs to search engines.

## 6. File and folder structure

```text
Repository/
├── README.md
├── CHANGELOG.md
├── REFERENCES.md
└── CSS/
    ├── index.html
    ├── AboutUs.html
    ├── Services.html
    ├── Projects.html
    ├── Testimonials.html
    ├── ContactUs.html
    ├── Requestaquote.html
    ├── style.css
    ├── script.js
    ├── robots.txt
    ├── sitemap.xml
    └── images/
    ├── shudus-plumbing-construction-logo.png
    ├── professional-plumbing-installation.jpg
    ├── fleurhof-plumbing-project.png
    ├── jabulani-rdp-plumbing-project.png
    ├── residential-plumbing-project.jpeg
    └── other supplied project/product images
```

## 7. Run the website locally

1. Extract the project folder.
2. The working website files are in the `CSS/` subfolder of this repository. Set the static host's publish directory to `CSS` (or copy that folder's contents to the host's required publishing directory).
3. Run a local static server from that folder, or open `index.html` in a modern browser.
4. Keep the `images/` folder, HTML pages, `style.css` and `script.js` together.
5. An internet connection is required for Google Fonts, Leaflet and OpenStreetMap map tiles.

For example, with Python installed, run `python -m http.server 8000` in the website folder and visit `http://localhost:8000`.

## 8. Testing checklist

- [ ] Open all seven HTML pages and confirm that each loads.
- [ ] Test navigation links from every page, including mobile navigation.
- [ ] Search for a service and confirm unrelated service cards are hidden.
- [ ] Open and close each project image in the lightbox.
- [ ] Test required fields, invalid email and invalid phone values on both forms.
- [ ] Confirm valid forms open a prepared email addressed to the stated recipient.
- [ ] Test map zoom, drag, marker popup and map attribution.
- [ ] Check layouts at desktop, tablet and mobile widths.
- [ ] Check images, console errors, missing files and horizontal overflow.
- [ ] Replace the domain placeholder in crawler files before deployment.
- [ ] Test the deployed URL and all page links.

Record actual browser/device test results after carrying out these checks. Do not mark a test as passed until it has been performed.

## 9. Deployment

The website is a static HTML/CSS/JavaScript project and can be deployed to Netlify or GitHub Pages. Publish the folder containing the seven HTML pages, `style.css`, `script.js`, `images/`, `robots.txt` and `sitemap.xml`. After deployment, verify every page and form behaviour on the live URL. Configure a real form-processing service if direct online form submissions are required.

## 10. Version control

Commit changes in small, descriptive units. Suggested Part 3 commit sequence:

1. `Apply Part 2 feedback and improve page navigation`
2. `Add JavaScript service search and dynamic result count`
3. `Implement accessible project gallery lightbox`
4. `Add validated contact and quotation enquiry forms`
5. `Integrate Leaflet map for Cosmo City area`
6. `Improve page metadata and descriptive image assets`
7. `Add robots sitemap README and Part 3 changelog`

The repository's remote must be updated with `git push` after reviewing the changes and confirming the correct GitHub account/repository.
