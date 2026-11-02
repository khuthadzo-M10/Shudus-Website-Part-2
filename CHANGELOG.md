# CHANGELOG

All notable changes to the Shudus Plumbing & Construction website are recorded here.

## [2.0.0] — WEDE5020 Part 3: Enhancing Functionality and SEO

### Updated from Part 2 feedback
- Retained the Part 2 blue, navy, white and grey visual identity, external stylesheet, original page content and supplied project imagery.
- Corrected cross-page navigation links to use the actual case-sensitive HTML filenames.
- Added consistent footer navigation to the standalone pages that previously ended after their main content.
- Replaced the placeholder root README content with a comprehensive project README and retained the Part 2 README as historical documentation.
- Added this Part 3 changelog entry to record the feedback corrections and new functionality.

### Added — JavaScript and interaction
- Added `script.js` as the shared external JavaScript file.
- Added accessible mobile navigation toggle behaviour and automatic menu closing after a link is selected.
- Added live service search/filtering on `Services.html`, including a result count and empty-result behaviour.
- Added expandable FAQ details to the Services page using native accessible disclosure elements.
- Added an accessible project gallery lightbox to `Projects.html`, with image captions, close button and backdrop closing.
- Added an interactive Leaflet map on `ContactUs.html`, using OpenStreetMap tiles and required attribution. The pin is an approximate general-area marker for Cosmo City, not a verified street address.
- Added automatic current-year display where the footer year element is present.

### Added — forms and validation
- Added a general contact form to `ContactUs.html` for name, email, phone, message category and message.
- Improved the quotation form on `Requestaquote.html` with clearer input constraints, email and phone format checks, required controls, and a response region.
- Added JavaScript submit handlers that call the browser's constraint validation and use `fetch()` to submit to Netlify Forms asynchronously; a `mailto:` fallback is provided for hosts without the Netlify form endpoint.
- Added Netlify Forms-compatible form names and hidden `form-name` controls. Configure Netlify email notifications after deployment; the static project itself does not contain a custom mail server or database.
- Added guidance for attaching a selected supporting file manually to the prepared email.

### Added — SEO and performance
- Added unique page titles and descriptions for all seven HTML pages.
- Added page-specific Open Graph title and description metadata.
- Added relevant keywords and author metadata.
- Improved descriptive alternative text and created descriptive filenames for the main logo, about image and featured project images.
- Added lazy loading to content images where appropriate.
- Added `robots.txt` and `sitemap.xml` templates. Their domain placeholder must be replaced with the final deployed domain before publication.

### Added — documentation and references
- Replaced the root `README.md` placeholder with project overview, technology list, page descriptions, functionality, limitations, project structure, local running instructions, testing checklist and deployment instructions.
- Updated `REFERENCES.md` with official technical references for form validation, SEO, Leaflet and OpenStreetMap.
- Preserved the previous Part 2 documentation files for assessment history.

### Testing and deployment notes
- Source-level checks were made for page structure, forms, script references and local asset paths.
- Manual browser testing, email-client testing, live map tile loading, deployment and live URL checks must still be performed in the target browser/hosting environment.
- The Netlify Forms workflow requires deployment to Netlify and configuration of email notifications; the `mailto:` fallback does not provide server-side delivery, storage, spam protection or delivery confirmation.
- OpenStreetMap's public tile service has a usage policy; production traffic and caching must comply with that policy.
- No public deployment is claimed by this changelog until a live URL has been published and verified.

## [1.0.0] — Part 2 styling release

### Added
- External CSS stylesheet and consistent blue, white, grey and navy colour scheme.
- Poppins and Open Sans typography.
- Flexbox and Grid layouts, responsive media queries and responsive image rules.
- Styling for navigation, hero section, about, services, projects, testimonials, quote form and contact sections.
- Hover effects, transitions, cards, borders, rounded corners and shadows.
- Part 2 README and initial changelog documentation.
