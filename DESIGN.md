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
