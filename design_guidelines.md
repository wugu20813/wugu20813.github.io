# Design Guidelines: Personal Tech Portfolio & Life Journal

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern tech portfolios (Linear, Vercel, Stripe) combined with personal blog aesthetics (Ghost, Medium). This creates a futuristic, minimalist foundation perfect for showcasing creative work while maintaining readability for diary entries.

## Core Design Principles
1. **Tech-Forward Aesthetic**: Clean lines, geometric precision, subtle sci-fi elements
2. **Content Hierarchy**: Personal work and media take visual priority over text
3. **Intimate Yet Professional**: Balance between personal journaling and portfolio showcase

## Typography System

**Primary Font**: 'Space Grotesk' or 'Inter' (Google Fonts) - modern, tech-inspired
**Secondary Font**: 'JetBrains Mono' (for accent elements, timestamps)

Hierarchy:
- Hero Title: text-5xl md:text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-4xl, font-semibold
- Diary Titles: text-2xl, font-medium
- Body Text: text-base md:text-lg, leading-relaxed
- Captions/Metadata: text-sm, font-mono (timestamps, dates)

## Layout System

**Spacing Units**: Tailwind units of 4, 8, 12, 16, 24 (p-4, gap-8, my-12, py-16, space-y-24)

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6
- Content sections: max-w-4xl mx-auto for reading comfort
- Grid layouts: max-w-6xl for portfolio/media grids

## Page Structure & Sections

### 1. Hero Section (80vh)
**Layout**: Full-viewport with centered content
**Elements**:
- Large name display (hero typography)
- Animated subtitle/tagline with typing effect
- Profile photo (300x300px rounded, subtle border treatment)
- Navigation dots/scroll indicator

**Image**: Professional portrait photo, subtle gradient overlay, positioned center

### 2. About/Introduction Section
**Layout**: Two-column on desktop (md:grid-cols-2), single column mobile
**Left**: Expanded self-introduction text (max-w-prose)
**Right**: Secondary photo collage (2x2 grid of lifestyle photos)

### 3. Diary/Journal Section
**Layout**: Timeline-style vertical layout with cards
**Card Structure**:
- Date stamp (font-mono, positioned top-left)
- Title (text-2xl)
- Preview text (3-4 lines, text-ellipsis)
- Read more link
- Each entry: backdrop-blur glass effect, rounded-2xl, p-6

**Grid**: Single column for readability, max-w-3xl centered

### 4. Video Gallery Section
**Layout**: 2-column grid (md:grid-cols-2), responsive video embeds
**Elements**:
- Video thumbnails with play overlay
- Title + description below each video
- Aspect ratio maintained (aspect-video)
- Hover: subtle scale transform

### 5. Portfolio/Works Section
**Layout**: Masonry-style grid (3 columns on lg, 2 on md, 1 on mobile)
**Card Design**:
- Featured image (16:9 or square)
- Project title + tech stack tags
- Brief description
- "View Project" link
- Cards: rounded-xl, overflow-hidden

### 6. Guestbook/Comments Section
**Layout**: max-w-3xl centered
**Components**:
- Comment form at top (name, message fields, submit button)
- Comment list below (reverse chronological)
- Each comment: avatar placeholder, name, timestamp, message
- Dividers between comments

### 7. Footer
**Elements**:
- Social media links (icons)
- Contact information
- "Built with ♥ by [Name]" credit
- Back to top button

## Component Library

### Navigation
- Fixed header with backdrop-blur
- Logo/Name (left), Nav links (right)
- Mobile: Hamburger menu with slide-out panel
- Active state: underline indicator

### Buttons
- Primary: Solid fill, rounded-lg, px-6 py-3
- Secondary: Border style, transparent background
- Icon buttons: Square, centered icon
- All buttons: Backdrop-blur on transparent backgrounds

### Cards
- Border style with subtle border
- Rounded corners: rounded-xl to rounded-2xl
- Padding: p-6 to p-8
- Hover: Subtle lift effect (shadow increase)

### Form Inputs
- Consistent height: h-12
- Rounded: rounded-lg
- Padding: px-4
- Border on all states
- Focus: Ring effect

### Icons
**Library**: Heroicons (via CDN)
- Navigation: 24x24
- Social media: 20x20
- UI elements: 16x16

## Images Strategy

**Hero**: 1 large portrait photo (circular or rounded square, 300-400px)
**About Section**: 4 lifestyle photos in 2x2 grid (each ~250x250px)
**Portfolio**: 6-9 project thumbnails (16:9 ratio)
**Guestbook**: Avatar placeholders (40x40px circles)

Total: ~15 images for a complete, visually rich experience

## Responsive Behavior

**Mobile (base)**:
- Single column layouts
- Stacked navigation
- Reduced spacing (py-8 vs py-16)
- Smaller typography scale

**Tablet (md:)**:
- 2-column grids where appropriate
- Horizontal navigation appears
- Medium spacing

**Desktop (lg:)**:
- 3-column grids for galleries
- Full typography scale
- Maximum spacing (py-24)

## Animation & Interactions

**Minimal, purposeful animations**:
- Page load: Fade-in on scroll for sections (intersection observer)
- Hero: Subtle typing effect for tagline
- Cards: Scale on hover (scale-105)
- Buttons: Smooth color transitions
- NO complex parallax or heavy scroll animations

## Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Consistent focus states (ring-2)
- Sufficient contrast ratios
- Alt text on all images

This design creates a modern, tech-forward personal space that balances portfolio professionalism with intimate journaling—perfect for students showcasing their life and work.