# South African National Blood Service (SANBS) Website

## Part 1 – Building the Foundation: Project Initiation and Planning

---

## Student Information

**Student Name:** Litha Mbawu  
**Student Number:** ST10486617
**Subject Name:** WEB DEVELOPMENT 
**Subject Code:** WEDE5020
 

---

# 1. Project Title

## South African National Blood Service (SANBS) Website Redesign

---

# 2. Project Overview

The purpose of this project is to develop a functional and visually appealing website prototype for the South African National Blood Service (SANBS).

SANBS is a non-profit organisation responsible for providing safe and quality blood and blood products to patients and healthcare facilities in South Africa.

The proposed website aims to make important information easier to find and improve the overall user experience for blood donors, healthcare professionals, community organisations and members of the public.

The website will provide information about SANBS, blood donation, blood products, donor services, contact locations and ways for members of the public and organisations to get involved.

This project is being developed as an academic prototype. Advanced functionality such as a secure donor portal, databases, real-time blood-stock APIs and online appointment systems may be considered as future development rather than requirements for Part 1.

---

# 3. Website Goals and Objectives

The main goals of the website are to:

- Increase awareness of blood donation.
- Encourage first-time and regular blood donors.
- Provide clear information about the blood donation process.
- Explain the different blood products and services provided by SANBS.
- Make contact and location information easier to access.
- Allow visitors to enquire about volunteering.
- Allow organisations to enquire about sponsorship and partnerships.
- Allow organisations to enquire about organising blood drives.
- Provide an easy-to-use navigation system.
- Provide a responsive and accessible website structure.

---

# 4. Key Performance Indicators (KPIs)

The success of the proposed website can be measured using the following indicators:

- Increase in website visitors.
- Increase in visits to the blood donation information page.
- Increase in donor-related enquiries.
- Increase in volunteer enquiries.
- Increase in sponsorship enquiries.
- Increase in blood-drive enquiries.
- Increase in visits to contact and donor-centre information.
- Improved user engagement and time spent on the website.
- Reduced bounce rate.

---

# 5. Target Audience

The website is aimed at:

- First-time blood donors.
- Regular blood donors.
- Potential blood donors.
- Patients and their families seeking information.
- Healthcare professionals.
- Hospitals and healthcare facilities.
- Schools and universities.
- Businesses and corporate organisations.
- Community organisations.
- Potential volunteers.
- Potential sponsors and partners.
- The general South African public.

---

# 6. Website Pages

The website will contain a minimum of five pages as required by the project brief.

### 6.1 Home – `index.html`

The homepage introduces SANBS and provides important calls to action.

Content includes:

- Introduction to SANBS.
- Blood donation information.
- Why blood donation is important.
- Links to services.
- Links to enquiries.
- Links to SANBS locations.

### 6.2 About Us – `about.html`

This page provides information about SANBS.

Content includes:

- Organisation overview.
- Mission.
- Vision.
- Purpose.
- Target audience.
- Information about SANBS's role in healthcare.

### 6.3 Services – `services.html`

This page provides information about SANBS services.

Content includes:

- Blood donation.
- Blood products.
- Donation process.
- Blood drives.
- Donor eligibility information.

### 6.4 Enquiry – `enquiry.html`

This page allows visitors to submit enquiries.

The enquiry form includes options for:

- General enquiries.
- Volunteering.
- Sponsorship.
- Organising a blood drive.
- Partnerships.

This is particularly relevant because SANBS is a non-profit organisation.

### 6.5 Contact – `contact.html`

The contact page provides ways for visitors to contact SANBS.

Content includes:

- Head office information.
- Multiple locations.
- Telephone/contact information.
- Contact form.
- Location/map area.

---

# 7. Sitemap

SANBS Website
│
├── Home
│   └── Introduction
│
├── About Us
│   ├── Organisation Overview
│   ├── Mission
│   ├── Vision
│   └── Purpose
│
├── Services
│   ├── Blood Donation
│   ├── Blood Products
│   ├── Donation Process
│   ├── Blood Drives
│   └── Donor Eligibility
│
├── Enquiry
│   ├── General Enquiry
│   ├── Volunteer
│   ├── Sponsorship
│   ├── Blood Drive
│   └── Partnership
│
└── Contact
    ├── Head Office
    ├── Donor Locations
    ├── Map
    └── Contact Form

---

# Part 2 – CSS Styling and Responsive Design

## Implementation Summary

Part 2 applies a shared external stylesheet to all five HTML pages. The stylesheet is stored in `css/style.css` and is linked from `index.html`, `about.html`, `services.html`, `enquiry.html` and `contact.html`.

The desktop solution now includes:

- A CSS reset using `box-sizing`, consistent margins and a shared base font system.
- CSS custom properties for the colour palette, borders, focus colour and shadows.
- A consistent typography scale using relative units and `clamp()` for responsive headings.
- A centred page structure using a maximum-width content container.
- CSS Grid for the card layouts and Flexbox for the navigation.
- Styled buttons, cards, forms, fields, links, ordered lists and the footer.
- Hover, keyboard-focus and active-navigation states.
- A keyboard-accessible “Skip to main content” link on every page.

## Responsive Design

The layout uses relative spacing and a mobile breakpoint at `760px`. At smaller widths, the navigation becomes vertical, content sections use reduced spacing, cards switch to one column and headings scale down automatically. The forms use fluid widths and resizable text areas so they remain usable on phones and tablets.

The site was checked at the following viewport sizes:

| Device category | Viewport | Evidence |
| --- | --- | --- |
| Desktop | 1440 × 900 | `evidence/desktop-home.png` |
| Tablet | 768 × 1024 | `evidence/tablet-home.png` |
| Mobile | 390 × 844 | `evidence/mobile-home.png` |

## Part 2 Changelog

| Date | Change |
| --- | --- |
| 15 September 2026 | Replaced the original compressed stylesheet with a structured external CSS system using custom properties, a reset, a defined colour palette, typography scale, Grid card layouts and Flexbox navigation. |
| 15 September 2026 | Added desktop visual styling for the hero area, page headers, cards, buttons, forms, fields, ordered lists and footer. Added hover, active-link and visible keyboard-focus states. |
| 15 September 2026 | Added responsive rules for screens below 760px. The navigation now stacks vertically, multi-column cards become a single column, and spacing and headings adapt to mobile widths. |
| 15 September 2026 | Added a skip-navigation link and `aria-current="page"` to each page so keyboard and screen-reader users can identify the current page and reach the main content quickly. |
| 15 September 2026 | Tested the shared stylesheet links and responsive breakpoint across all five pages and recorded desktop, tablet and mobile screenshot evidence. |

## References

- MDN Web Docs. (2026). *CSS media queries*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries
- MDN Web Docs. (2026). *CSS flexible box layout*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
- MDN Web Docs. (2026). *CSS grid layout*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs. (2026). *Using media queries for accessibility*. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
