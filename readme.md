Jeandre Visagie
10506626
Overview

Goals
Improve website readability and professional appearance by removing dead links, clearing placeholder text and implementing a working animal gallery.
Features
Working animal gallery, contact us features, clean and professional appearance for the new website.

Timeline:
Part 1: Proposal & HTML Structure

Completion Date: 21 August 2026

Finalized the initial submission requirements, including the two proposals, content sourcing ZIP, 5-page HTML skeleton, navigation menu, and GitHub repository initialization.

Part 2: CSS Styling & Responsive Design

Target Window: 22 August – 25 September 2026

Focuses on design and visual presentation. Initial work covers creating global style rules, setting up typography, and defining color palettes. Mid-month efforts focus on building responsive layouts using CSS Grid and Flexbox to ensure mobile and desktop compatibility. The final weeks cover styling forms, cross-browser debugging, updating code comments, and pushing weekly commits to GitHub.

Part 2 notes:
# Animal Welfare Shelter - Part 2

## Changelog
### Part 1 Feedback Revisions
- Corrected semantic structure in `about.html` 
- Added missing `alt` attributes on animal photo thumbnails in `adoptions.html`.

### Part 2 Updates
- Created external `style.css` with CSS custom variables and flexbox/grid layouts.
- Implemented media queries at 900px and 600px breakpoints.
- Added responsive `<picture>` elements for image resolution handling.


Part 3: JavaScript Interactivity & Final PoE

Target Window: 26 September – 30 October 2026

Focuses on client-side functionality and submission prep. Early October is dedicated to adding dynamic UI elements and validating input fields on the Enquiry and Contact forms. Late October involves verifying cross-browser script performance, compiling full project references, finalizing the GitHub README file, and submitting the completed portfolio.
Keyword research. Keywords were chosen using Google Trends (South Africa, past 5 years, checked 29 October 2026). Comparing candidate terms showed "animal rescue" had the highest relative interest (average 56), followed by "animal shelter" (37), "dogs for adoption" (11), "dog adoption" (7) and "adopt a dog" (3). Related-query data showed users often add a location ("animal rescue cape town", "dogs for adoption cape town") or "near me", so location terms were added to page titles, headings and descriptions, and local SEO was supported with the shelter's address and structured data. 



### Part 3 – New Features
**JavaScript (js/script.js, linked on every page)**
- **services.html:** jQuery accordion – each service opens and closes with a slide animation.
- **adoptions.html:** Animal cards are generated from a JavaScript array (dynamic content) with search by name/breed, size filter and sort by name, age or fee.
- **adoptions.html:** Lightbox modal – clicking a photo opens a larger view; closes with Esc, × or clicking outside.
- **contact.html:** Interactive Leaflet/OpenStreetMap map with markers for the Main Shelter and Head Office.
- **All pages:** Sections fade in on scroll (IntersectionObserver + CSS transitions); respects reduced-motion settings.

**Forms**
- **enquiry.html:** Rebuilt form with HTML5 validation (required, email, phone pattern, date min, length limits) and JavaScript error messages under each field. On submit it calculates kennel sponsorship cost or dog-walking availability and sends the enquiry via AJAX (fetch) to Netlify Forms.
- **contact.html:** Rebuilt form with name, email, phone, message type and message. After validation it builds an email (subject and body) and opens the user's email app addressed to the sanctuary.

**SEO**
- Keyword-based `<title>`, meta description, canonical URL and Open Graph tags on every page; one `<h1>` per page using the target keyword.
- AnimalShelter structured data (JSON-LD) on index.html for local SEO.
- Added `robots.txt` and `sitemap.xml`.

**Security and deployment**
- Deployed on Netlify (HTTPS).
- `_headers` file sets X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy.
- Subresource Integrity hashes on the jQuery and Leaflet CDN scripts.
- User input is displayed with `textContent`, never `innerHTML`; all form fields have length limits.
Part 1 details:
Animal photographs on the adoptions page were created using AI image generation software. They do not depict real animals.
Sitemap
See sitemap.svg
References:
Image generation: Google. 2026. Gemini. [Large language model]. [Online].
Available at: https://gemini.google.com/
[Accessed 13 August 2026].

Mozilla. 2026. HTML: HyperText Markup Language. MDN Web Docs. [Online].
Available at: https://developer.mozilla.org/en-US/docs/Web/HTML
[Accessed 13 August 2026].

Grace Animal Sanctuary. 2026. About Us. [Online].
Available at: https://graceanimalsanctuary.org/about-us/
[Accessed 13 August 2026].

Grace Animal Sanctuary. 2026. Adoptions. [Online].
Available at: https://graceanimalsanctuary.org/adoptions/
[Accessed 13 August 2026].

Grace Animal Sanctuary. 2026. Get Involved. [Online].
Available at: https://graceanimalsanctuary.org/get-involved/
[Accessed 13 August 2026].

Grace Animal Sanctuary. 2026. Donate. [Online].
Available at: https://graceanimalsanctuary.org/donate/
[Accessed 13 August 2026].
Google. 2026. Google Trends. [Online]. Available at: https://trends.google.com/trends/ [Accessed 29 October 2026].

Google. 2026. How to write and submit a robots.txt file. Google Search Central. [Online]. Available at: https://developers.google.com/crawling/docs/robots-txt/create-robots-txt [Accessed 27 October 2026].

Google. 2026. AnimalShelter. Google for Developers. [Online]. Available at: https://developers.google.com/gmail/markup/reference/types/AnimalShelter [Accessed 27 October 2026].

jQuery. 2026. jQuery CDN – jQuery Core releases. [Online]. Available at: https://releases.jquery.com/jquery/ [Accessed 27 October 2026].

Leaflet. 2026. Download Leaflet. [Online]. Available at: https://leafletjs.com/download.html [Accessed 27 October 2026].

Netlify. 2026. Forms setup. Netlify Docs. [Online]. Available at: https://docs.netlify.com/manage/forms/setup [Accessed 27 October 2026].

Netlify. 2026. Custom headers. Netlify Docs. [Online]. Available at: https://docs.netlify.com/manage/routing/headers/ [Accessed 27 October 2026].

OpenStreetMap contributors. 2026. OpenStreetMap copyright and licence. [Online]. Available at: https://www.openstreetmap.org/copyright [Accessed 27 October 2026].

Sitemaps.org. 2026. Sitemaps XML format. [Online]. Available at: https://www.sitemaps.org/protocol.html [Accessed 27 October 2026].