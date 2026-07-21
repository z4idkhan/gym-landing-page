# Gym Website

## 🌟 Key Feature: Multi-Page Architecture

Unlike single-page websites, this template uses a multi-page approach for better SEO, faster initial loads, and improved user experience. Each section has its own dedicated page with clean, semantic URLs.

## Main Focus: Gym Showcase

The **"Gym Tour"** page is specifically designed to showcase what your gym looks like and your equipment - exactly as requested! This is the main highlight where you can display:
- Exterior and interior photos
- Equipment close-ups
- Facility shots
- Amenities views
- Member workout photos

Simply replace the placeholder images in `/public/images/gym/` with your actual gym photos.

##  Page Structure

- **/** - Home (overview with key highlights)
- **/about** - About your gym, mission, and values
- **/gym-tour** - **MAIN FEATURE**: Showcase your gym appearance and equipment
- **/membership** - Membership plans and pricing
- **/trainers** - Meet your expert trainers
- **/schedule** - Weekly class schedule with filtering
- **/transformations** - Member success stories and transformations
- **/location** - Gym location, contact form, and directions

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- Content driven by `/data/site-config.ts`

## Gym Tour Customization

To showcase your gym:

1. **Replace placeholder images**:
   - Put your gym photos in `/public/images/gym/`
   - Update the `gymImages` array in `/app/gym-tour/page.tsx` with your image paths
   - Or modify the data in `site-config.ts` to include gym images

2. **Image recommendations**:
   - Exterior shot of your gym
   - Reception/front desk area
   - Cardio equipment zone
   - Weight training area
   - Group exercise studio
   - Functional training space
   - Locker rooms
   - Amenities (sauna, steam, etc.)
   - Members working out (with permission)

##  Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- npm (comes with Node.js)

### Installation
1. **Clone or download this template**
   ```
   git clone <repository-url>
   cd gym-website-template
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Run the development server**
   ```
   npm run dev
   ```

4. **View in browser**
   Open [http://localhost:3000](http://localhost:3000) to see the template.

### Customizing for Your Gym

To create a website for a specific gym client, you only need to:

1. **Edit `/data/site-config.ts`**:
   - Update gym name, logo, colors, contact info
   - Customize membership plans, trainers, classes, etc.
   - Add social media links and Google Maps embed

2. **Replace images in `/public/`**:
   - `/public/images/gym/*` - Your gym photos for the tour
   - `/public/images/hero.jpg` - Hero banner image
   - `/public/images/trainers/*` - Trainer photos
   - `/public/images/transformations/*` - Before/after photos
   - `/public/images/icons/*` - Facility icons
   - `/public/images/about.jpg` - About page image
   - `/public/logo.png` - Gym logo

3. **Start customizing!**
   - Run `npm run dev` to see your changes in real-time
   - Build for production with `npm run build`

##  Project Structure

```
/app                    # Main Next.js application (App Router)
  /about                # About page
  /gym-tour             # **Gym Tour** - Showcase your facility & equipment
  /location             # Location & Contact page
  /membership           # Membership plans page
  /schedule             # Class schedule page
  /transformations      # Member transformations page
  /trainers             # Trainers/Team page
  /components           # Reusable UI components
    Header.tsx          # Site header with navigation
    Footer.tsx          # Site footer
    # ... other components
  layout.tsx            # Root layout (shared across all pages)
  page.tsx              # Home page
/data                   # Configuration folder (edit this for different gyms)
  site-config.ts        # **THE MAIN CONFIG FILE** - customize per client
/public                 # Static assets
  /images               # Gym photos, trainer pics, transformations
    /gym                # **PUT YOUR GYM PHOTOS HERE** for the tour
  /icons                # Facility icons
/styles                 # Global CSS
tailwind.config.ts      # Tailwind configuration
next.config.ts          # Next.js configuration
tsconfig.json           # TypeScript configuration
package.json            # Dependencies and scripts
README.md               # This file
```

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Why This Structure Works for Gyms

1. **SEO Friendly**: Each page can be indexed separately by search engines
2. **Fast Loading**: Only loads necessary code for each page
3. **Easy Navigation**: Clear menu structure helps visitors find what they need
4. **Showcase Focus**: Dedicated gym tour page puts your facility front and center
5. **Client-Friendly**: Gym owners can update their site by editing just one config file
6. **Scalable**: Easy to add new pages (nutrition, challenges, etc.) as needed

## 💡 Customization Tips

### For the Gym Tour Page:
- The gym-tour page is designed as a visual showcase
- Replace all placeholder images with your actual gym photos
- Consider adding video tours or 360° views
- Include captions that highlight key features of each area

### For Different Gym Types:
- **CrossFit Box**: Emphasize functional training area and rig
- **Yoga Studio**: Highlight serene atmosphere and props
- **Traditional Gym**: Showcase cardio and weight areas
- **Boutique Studio**: Focus on specialized equipment and ambiance

---

**Ready to showcase your gym in Gorakhpur or anywhere else?** Simply edit the config file, upload your photos, and launch your professional fitness website!
