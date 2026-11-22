## 1. Site Info

SITE_TYPE: Corporate (B2B equipment rental and service)
HTML_LANG: en

## 2. Visual Identity & Brand Soul

REGISTER: warm-professional, clean and bright, with a dark navy section for contrast only — evidence: office-equipment rental sold to corporates and SMEs, and the client's white, blue and amber board choice — rejected: dark/luxe or nocturnal.

*   **Brand DNA:** The logo is a gradient infinity loop (purple, magenta, cyan, orange, amber) over grey capitals, on a transparent background. The computed brand blue (rgb 0,123,255) is deepened to a trustworthy blue for fills and for text on white. Amber comes from the logo's orange side and carries every primary action. The WhatsApp green is the only other hue. The logo has mixed dark and light content, so it only ever sits on light surfaces: white header, warm-paper footer.
*   **Creative Concept: "The Offset Block."** The person behind the machine, framed the way an editor would frame a portrait, with a flat blue block sliding out from behind it. Every image frame and key panel repeats this move, so the site reads as one confident, human system.
*   **Repeated Motif:** The flat blue block offset 16 px (mobile) or 24 px (desktop) down and right of a rounded frame. It is solid, with no blur, no shadow, no gradient and no outline. It appears behind the hero photograph, behind both About images, behind the dedicated-team panel, and as the blue ground of the contact section. Its source-native partner is the FASTER acronym, set as lettered blocks.
*   **Signature Restraint:** The offset block is the one primary move. The amber letter-highlight on FASTER is the only supporting move. No icon sets, textures, glass or gradients.
*   **Human Labels:** No eyebrows, kickers or numbering. Headlines stand alone and use the source headings. The only labels are the source's own: "Visit Us", the contact lines, the form placeholder.
*   **Linework Discipline:** Hairlines appear only as row dividers in the terms ledger and the header's bottom border. They sit inside padding and never pass through text.
*   **Copy Naturalness:** Use only index.md copy and the client's hero copy. Nothing is rewritten, and no figures are added beyond the source's own "20 years".

### Phone-number note for the build
The hero Get In Touch uses the client-supplied tel number exactly as the reference markup shows. The contact section shows the number as scraped in the footer. Do not "correct" either one.

```
---DESIGN_MD_START---
## Visual Theme
Warm, editorial and human: a real photograph, generous white space and one flat blue block that keeps stepping out from behind the content. Medium-low density, with one dark navy section for contrast and one full-blue conversion section.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(222 28% 12%)
- muted-foreground: hsl(222 10% 38%)
- border: hsl(214 20% 88%)
- surface: hsl(40 40% 97%)
- primary: hsl(39 97% 51%)
- primary-foreground: hsl(222 28% 10%)
- primary-hover: hsl(39 97% 44%)
- secondary: hsl(211 100% 40%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(211 100% 33%)
- dark-background: hsl(222 35% 11%)
- dark-foreground: hsl(0 0% 98%)
- dark-muted-foreground: hsl(222 12% 72%)
- dark-border: hsl(222 22% 22%)
- success: hsl(142 76% 36%)
- error: hsl(0 72% 51%)
- warning: hsl(38 92% 50%)
- whatsapp: hsl(142 72% 26%)
- whatsapp-foreground: hsl(0 0% 100%)
- whatsapp-hover: hsl(142 72% 21%)
- favicon-color: #0066CC

## Typography
- Headlines: Montserrat — heavy weights (800–900), large, assured, sentence case as written in the source
- Body: Montserrat — regular weight, comfortable line height of about 1.65
- Scale: editorial

## Components
- Motif: The Offset Block. A flat secondary-blue rectangle with the same radius as its frame, translated 16 px (mobile) or 24 px (desktop) down and right, sitting behind a rounded frame. Radius family: button 8 px, image and panel 24 px. Edges are crisp, with no shadows, blur, texture or gradients.
- Buttons: Rounded 8 px, solid and flat, inheriting the block's crisp edges. Primary is the amber fill with dark text. WhatsApp is the green fill with white text. Secondary and inquiry buttons are outlined with a 1 px foreground border on white. Hover shifts fill one step darker and lifts 1 px. No pills and no shadows.
- Containers: Content sits directly on section grounds, not in rounded-shadow cards. Framed things (photographs, the dedicated-team panel) get the offset block. Lists use hairline-ruled rows with a 4 px amber rail at the start of each row.
- Accent architecture: Amber has three roles. It fills primary actions, it marks the start of each terms-ledger row as a rail, and it highlights the initial letters of FASTER as flat blocks. Blue has three roles. It is the offset block, the contact section's full ground, and the link and hover colour on light surfaces. Amber is never used as text on white or cream.
- Sections: Vertical rhythm of py-12 on mobile and py-24 on desktop, alternating white, warm surface, dark navy, white, blue, light footer. The offset block recurs at least once in every light section.
- Motion: CSS-only. Hero text rises in softly on load, and the offset block slides into place from behind the frame. On hover, the block tightens by 6 px. The FASTER letters reveal in sequence on scroll. All of it is disabled under prefers-reduced-motion.

## Do's and Don'ts
- DO keep the blue block flat, solid and offset the same way everywhere
- DO let the real photograph stay in natural colour with no overlay or tint
- DO use the amber only where someone is meant to act or where FASTER needs emphasis
- DO keep the header solid white and sticky at all scroll positions
- DON'T add testimonials, metrics, client logos or awards the source doesn't give
- DON'T put amber or blue-on-blue text on surfaces where it falls below 4.5:1
- DON'T use glass cards, soft shadows, gradients or rounded-card grids as the default wrapper
- DON'T place the logo on a dark surface
---DESIGN_MD_END---
```

**Palette WCAG AA self-check:**
- foreground on background ≈ 16:1.
- muted-foreground on background ≈ 6:1, and on surface ≈ 5.8:1.
- primary-foreground on primary ≈ 10:1.
- secondary-foreground on secondary ≈ 5.7:1.
- whatsapp-foreground on whatsapp ≈ 6.5:1.
- dark-foreground on dark-background ≈ 16:1.
- dark-muted-foreground on dark-background ≈ 8:1.
- Brand-color-as-text: secondary is used as text on white and surface only at 5.7:1 or better. Amber primary is a fill only.

## 3. Sections

Hero id="main": LIGHT section (bg-background), layout: split-composition, built exactly as the CHOSEN reference
  → content: the hero headline, supporting line, Get In Touch tel action, Chat on WhatsApp action (green whatsapp token, href #contact), the compact inquiry field with Send Inquiry, and the presenter photograph in a rounded frame with the flat blue offset block. Words, markup and photograph are exactly as in the reference. Do not add any pre-heading label. The only changes from the reference: WhatsApp uses bg-whatsapp text-whatsapp-foreground, and the header becomes sticky.

Models and statement id="services": LIGHT section (bg-surface), layout: editorial stack, asymmetric
  → content: the tagline line about how capability shines in every endeavour, set as a large typographic pull-statement (text-h2, font-extrabold) with a 4 px amber rail on its left, spanning about 8 of 12 columns. Below it, the "Great Range of Copier Models" heading and its paragraph in the left 7 columns. In the right 5 columns, a flat secondary-blue panel carries the Get In Touch mailto action as an amber button, and the panel gets its own offset-block echo. No model names, images or specs are invented.

Why engage id="why": DARK section (bg-dark-background, text-dark-foreground), layout: sticky narrative plus ledger, 5/7 columns
  → content: LEFT, sticky on desktop (top-28): the "Why Should You Engage Our Services?" heading, the intro sentence about the most reliable provider, then the "We make it FASTER" line set large. The parenthetical expansion follows beneath it as a row of six words (Flexible, and, Simple, Throughout, Entire, Rental), with the first letter of each word on a flat amber block with dark text, so F-A-S-T-E-R reads vertically or across. The words themselves are unchanged. RIGHT: the five rental terms as a hairline-ruled ledger (border-dark-border), each row with a 4 px amber rail. The bold lead phrase (one to one replacement, additional copier Free-Of-Charge, 20 years, zero rental, Free) is set at text-h3 and the rest of the sentence follows in dark-muted-foreground at body size. Row order is as in the source.

About id="about": LIGHT section (bg-background), layout: magazine grid, three staggered moments
  → content:
  - Moment 1: the About Us heading and its paragraph in 7 columns, with the first About image (source image after the paragraph) in the other 5, framed with the offset block at natural size.
  - Moment 2: the "Reducing costs through technology" heading and paragraph. Image sits on the left in 5 columns, text on the right in 7, with the second About image framed with the offset block.
  - Moment 3: the "A dedicated service team" heading and paragraph, text-led and full width in a bg-surface panel with rounded-image radius and a blue offset block behind it. No image.

Contact id="contact": BLUE section (bg-secondary, text-secondary-foreground), layout: conversion footer, contact panel
  → content: the Visit Us heading (text-h2), the full address, the contact phone line and the email line, each as a large tappable line (tel and mailto links). The Get In Touch action appears once more as an amber button (tel). Link focus rings are white. The contact lines use whole-line underlines on hover. Nothing else is invented.

## 4. Layout Archetypes

HERO_TEXT_FIT: headline="FLEXIBLE Photocopy Machine Rental"; longest_token="Photocopy" (9 chars); chosen_architecture+text_zone=split (client-fixed, 2 equal columns at lg, max-w-7xl container, h1 takes the full column width and is separate from the supporting-line measure); chosen_scale=text-h1 default (editorial tier); fit_decision=text-h1 fits in chosen hero because the longest word is short; the supporting paragraph gets its own max-w-xl.

FIRST_VIEWPORT_JOB: In 3 seconds show that this is a Fuji Xerox photocopier rental supplier in Malaysia, give a human face to the offer, and make calling, WhatsApp or leaving a contact field one tap away.
HERO_DECISION: chosen architecture = split-composition (client-fixed); candidates considered = typographic-cover (the FASTER acronym would carry the screen but loses the presenter and copier), proof-dashboard (the rental terms are strong but are second-level proof), split-composition (puts the man next to the machine, which proves the offer visually); native anchor = the presenter gesturing at a Fuji Xerox copier; DOM consequence = text, actions and form on the left, a framed photograph with offset block on the right as sibling cells; source/asset support = hero photo 41027053 at 1536 px wide plus the hero copy and logo; main risk = the equal columns crowd the display headline; mitigation = the longest word is only 9 characters at text-h1, the h1 has its own width and the paragraph has a separate max-w-xl; second composition moment = the sticky "Why engage" ledger with FASTER letter blocks.

FIRST_VIEWPORT_ARCHITECTURE: split-composition
SPLIT_JUSTIFICATION: The client chose this opening from the design board. A parallel text-and-photo layout puts the real presenter beside the real machine, which a text-only or full-bleed treatment would lose. The offset block frames the photograph without a background overlay.

**Layout details**
- Hero grid: `grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8`, as in the reference. Photo column spans two rows on desktop. The inquiry form sits under the buttons in the left column.
- Photograph: `aspect-4/3`, `object-cover`, `object-position` biased to the right (about 72% 30%) to keep the man and the copier and drop most of the blue swoosh. Natural colour, no overlay and no filter.
- Mobile order: headline, supporting line, stacked Get In Touch and WhatsApp, then the 4:3 photograph, then the inquiry field. The first mobile viewport shows header with logo and menu button, headline, supporting line and both actions.
- Display Heading Fit Plan: h2s are limited to their own columns (7 or 5 of 12). "Why Should You Engage Our Services?" lives in a 5-column sticky cell at text-h2, so "Engage" and "Services?" stay whole. No hyphenation, `break-words` or negative tracking on display type.
- Linework Collision Plan: ledger dividers and the header border run only in padding zones between rows. The sticky left column has no vertical rule through it. The offset block sits behind images and panels, never behind headlines.
- Content padding: `py-12 md:py-24` for sections. The hero uses the template's `py-section`.

## 4b. Motion, Interaction, and Section Craft
- Hero entrance: the text column fades up over 400 ms, and the offset block slides from behind the frame into its offset position.
- Hover: image frames tighten the block by 6 px. Buttons lift 1 px and darken one step.
- Sticky narrative: the Why-engage left column stays pinned while the ledger scrolls. On mobile it stacks and nothing is sticky.
- Progress feel: FASTER letter blocks fade in one by one.
- All reveals are CSS-only, and `prefers-reduced-motion` turns them off.

## 5. Navigation

NAV_ARCHITECTURE: left-brand-utility
NAV_HERO_CONTRACT: flow-below-solid

Style: bg-background (solid white, with `border-b border-border`), `sticky top-0 z-20`. It stays solid at every scroll position. The scrolled state only adds `shadow-sm`, with no padding or border jump. Links: text-foreground, 16 px, font-medium, hover text-secondary with underline. Do not use transparent or low-opacity top states.
Logo: image only (the logo image already contains the name), class: h-14 w-auto, alt as in the reference. It is a transparent mixed-colour logo, so the white header is the right surface.
Links: About (#about), Services (#services), Contact (#contact). The Why-engage section is reached by scrolling and is not a separate nav link.
Mobile: the hamburger opens the solid `dialog` drawer from the reference, with the logo, a close button and three large link rows ruled by `border-border`. The drawer is bg-background with text-foreground and works without hover. The skip-to-content link stays as in the reference.

## 6. Footer

Style: bg-surface text-foreground (light footer, so the logo keeps natural contrast), `border-t border-border`.
Content: the logo (h-14 w-auto, image only), About, Services and Contact links as anchors (#about, #services, #contact), then a compact block with the address, phone and email lines from the source, then the copyright line. There are no social links in the source, so none are added.

## 7. Files

MODIFY: Navigation.astro, Footer.astro, site.ts
CREATE: src/components/home/Hero.astro, Services.astro, WhyEngage.astro, About.astro, Contact.astro

## 8. Image Assignment & Sizing

- Hero photograph: 41027053 (1536 px wide, contained in a rounded frame, never full-bleed, never overlaid), `aspect-4/3 w-full rounded-image object-cover`. Only one image of the duplicate set is used.
- Logo (612×408 px, transparent, mixed content): header and footer only, `h-14 w-auto`, on white and warm paper. It is never used inside the dark or blue sections.
- About images (two source images, dimensions not listed): placed in the About moments 1 and 2, framed with the offset block. Use `max-w-full h-auto` inside a column capped at the image's natural width, and never upscale. They have no alt text in the source, so use `alt=""`.
- No other imagery. The tagline, FASTER and ledger sections are typographic. Do not use stock.

## 9. Build Efficiency

Create all files in two or three steps. Keep the template's `px-gutter`, `py-section`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `rounded-button` and `rounded-image` utilities and map `Scale: editorial` to them.

## 10. Final Anti-Template QA
- The opening is client-fixed split-composition, with the offset block as the unique device and a 4:3 crop that keeps the man and the machine.
- The order is opening → statement and models → why-engage ledger → about → contact. It is not the generic Hero → About → Services → Testimonials → CTA flow.
- No two adjacent card grids. The ledger, the magazine grid and the blue contact panel each use a different structure.
- No eyebrows, fabricated numbers, awards or metrics. "20 years" is the source's own phrase.
- The nav is a left-brand utility with a solid sticky white ground, with the logo on a light surface.

Name: Friendly Advisor
Why: It puts a real face behind the rental offer, which builds trust before anyone picks up the phone.

Concept: An editorial opening, with the suited presenter beside a copier on the right and the headline and contact buttons on the left.

Register: Warm, professional and approachable. White and blue with amber accents.

Desktop: A white header with the logo on the left and the nav on the right. Below it, a two-column opening. On the left, on white: the headline, the supporting line, then a row with the amber Get In Touch button and a green WhatsApp button, and below them a compact inquiry field with "Send Inquiry". On the right: the photograph in a large rounded frame with a flat blue block offset behind it.

Phone: The headline and supporting line, then Get In Touch and WhatsApp as stacked buttons. The photograph follows as a 4:3 crop, then the inquiry field.

Image: 41027053-3550-4160-8b3d-96c00f5fc1ed, the suited man gesturing toward a copier, cropped to the man and the copier and dropping most of the blue swoosh. Natural colour, no overlay. Only one of the duplicate set is used.

Copy:
Headline: FLEXIBLE Photocopy Machine Rental
Supporting: Hassle-free Fuji Xerox photocopier machine supplier in Malaysia.
Primary action: Get In Touch (tel:0192250338)
Second action: Chat on WhatsApp
Inquiry: "Phone number or email" and "Send Inquiry".

Signature device: The flat blue block offset behind the photograph frame.

---DESIGN_MD_START---
## Visual Theme
Warm and editorial, with a human photograph and plenty of white space. Medium-low density.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(222 28% 12%)
- muted-foreground: hsl(222 10% 38%)
- border: hsl(214 20% 88%)
- surface: hsl(40 40% 97%)
- primary: hsl(39 97% 51%)
- primary-foreground: hsl(222 28% 10%)
- primary-hover: hsl(39 97% 44%)
- secondary: hsl(211 100% 40%)
- secondary-foreground: hsl(0 0% 100%)
- dark-background: hsl(222 35% 11%)
- dark-foreground: hsl(0 0% 98%)
- dark-muted-foreground: hsl(222 12% 72%)
- dark-border: hsl(222 22% 22%)

## Typography
- Scale: editorial
- Headlines: Montserrat — heavy weight, large and assured
- Body: Montserrat — regular, comfortable line height
---DESIGN_MD_END---
--- CHOSEN NAV + HERO REFERENCE (the client chose this preview: build the header and opening as shown, its words verbatim, its logo as shown, the same photographs and layout; only the markup moves into the site's components) ---
<header class="relative z-20 border-b border-border bg-background">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-button focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground whitespace-nowrap">Skip to main content</a>
  <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-gutter py-3">
    <a href="#top" class="shrink-0 whitespace-nowrap">
      <img src="https://pagesmith-cdn.com/241cb74f/images/Colour_Copier_Logo-2.jpg-1-removebg-preview-DsbteiEd8TT1jvuNzTXULw-06c97e-612.webp" alt="Colour Copier Sdn Bhd" class="h-14 w-auto">
    </a>

    <nav aria-label="Primary" class="hidden md:flex md:items-center md:gap-8">
      <a href="#about" class="text-base font-medium text-foreground underline-offset-4 hover:text-secondary hover:underline whitespace-nowrap">About</a>
      <a href="#services" class="text-base font-medium text-foreground underline-offset-4 hover:text-secondary hover:underline whitespace-nowrap">Services</a>
      <a href="#contact" class="text-base font-medium text-foreground underline-offset-4 hover:text-secondary hover:underline whitespace-nowrap">Contact</a>
    </nav>

    <button type="button" commandfor="site-menu" command="show-modal" aria-controls="site-menu" aria-haspopup="dialog" aria-label="Menu" class="-mr-3.5 inline-flex size-12 shrink-0 cursor-pointer select-none items-center justify-center transition-opacity hover:opacity-70 ml-auto md:hidden"><svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M4 9h16M4 15h16"></path></svg></button>
  </div>
</header>
<dialog id="site-menu" aria-label="Menu" class="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 backdrop:bg-black/40"><div class="ml-auto flex h-full w-full flex-col overflow-y-auto bg-background px-gutter pb-6 text-foreground sm:max-w-md"><div class="flex min-h-18 flex-none items-center justify-between gap-4"><span class="shrink-0 whitespace-nowrap"><img src="https://pagesmith-cdn.com/241cb74f/images/Colour_Copier_Logo-2.jpg-1-removebg-preview-DsbteiEd8TT1jvuNzTXULw-06c97e-612.webp" alt="Colour Copier Sdn Bhd" class="h-14 w-auto"></span><button type="button" commandfor="site-menu" command="close" aria-label="Close menu" class="-mr-3.5 inline-flex size-12 shrink-0 cursor-pointer select-none items-center justify-center transition-opacity hover:opacity-70 ml-auto"><svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg></button></div><nav aria-label="Main"><ul class="m-0 mt-2 list-none border-t border-border p-0"><li class="border-b border-border"><a href="#about" class="font-display flex min-h-12 items-center py-3.5 text-h3 text-foreground">About</a></li><li class="border-b border-border"><a href="#services" class="font-display flex min-h-12 items-center py-3.5 text-h3 text-foreground">Services</a></li><li class="border-b border-border"><a href="#contact" class="font-display flex min-h-12 items-center py-3.5 text-h3 text-foreground">Contact</a></li></ul></nav></div></dialog>

<section data-role="hero" id="main" class="bg-background px-gutter py-section">
  <div class="mx-auto grid max-w-7xl grid-cols-1 items-start gap-x-12 gap-y-8 lg:grid-cols-2">

    <div class="min-w-0 space-y-flow lg:col-start-1 lg:row-start-1">
      <h1 class="text-h1 font-display font-black leading-tight text-foreground">FLEXIBLE Photocopy Machine Rental</h1>
      <p class="text-lead text-foreground">Hassle-free Fuji Xerox photocopier machine supplier in Malaysia.</p>
      <div class="flex flex-col gap-3 sm:flex-row">
        <a href="tel:0192250338" class="inline-flex items-center justify-center rounded-button bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary-hover">Get In Touch</a>
        <a href="#contact" class="inline-flex items-center justify-center rounded-button bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground hover:opacity-90">Chat on WhatsApp</a>
      </div>
    </div>

    <figure class="relative min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
      <div class="absolute inset-0 translate-x-4 translate-y-4 rounded-image bg-secondary lg:translate-x-6 lg:translate-y-6" aria-hidden="true"></div>
      <img src="https://pagesmith-cdn.com/241cb74f/images/41027053-3550-4160-8b3d-96c00f5fc1ed-jxTgc6Ns1JrrWgm706A6UA-4f880a-1536.webp" alt="Suited man gesturing toward a photocopier" loading="eager" class="relative aspect-4/3 w-full rounded-image object-cover">
    </figure>

    <form class="min-w-0 lg:col-start-1 lg:row-start-2" aria-label="Send an inquiry">
      <div class="flex flex-col gap-3 sm:flex-row">
        <input type="text" placeholder="Phone number or email" aria-label="Phone number or email" class="min-w-0 flex-1 rounded-button border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground">
        <button type="button" class="inline-flex shrink-0 items-center justify-center rounded-button border border-foreground bg-background px-6 py-3 text-base font-semibold text-foreground hover:bg-surface">Send Inquiry</button>
      </div>
    </form>

  </div>
</section>
--- END CHOSEN NAV + HERO REFERENCE ---

## 7. Image Sizing Rules

**CRITICAL: Never upscale images - causes blur/pixelation.**

| Image Type | Rule | Example |
|------------|------|---------|
| Logo (nav) | max-h-8 to max-h-12, w-auto | `class="h-10 w-auto"` |
| Logo (footer) | Same or slightly larger | `class="h-12 w-auto"` |
| Hero | Full width ONLY if image >= 1200px wide AND landscape | `class="w-full object-cover"` |
| Portrait (tall) | Constrain to actual width, never w-full | `class="max-w-[Xpx] h-auto object-cover"` |
| Content | Never exceed original dimensions | Use max-w-[Xpx] |
| Cards | Fixed aspect ratio | `class="aspect-video object-cover"` |
| Small images (<400px) | Use in cards/thumbnails only | `class="max-w-[Xpx] object-cover"` |

### Detected Images

- Menu (612x408px): Use object-cover, respect original size.

**NEVER set width/height larger than original_width/original_height from fetch_scraped_image.**