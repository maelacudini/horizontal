1.  Animations

`/utils/animations.js`
This module contains animation configurations using Framer Motion.

`titleanim`

- **Initial:** Animates the title from off-screen to its starting position.
- **Animate:** Moves the title to its final position with a specified transition duration and delay.
- Used for animating titles.

`modalanim`

- **Initial:** Starts the modal off-screen.
- **Animate:** Brings the modal onto the screen.
- **Exit:** Moves the modal off-screen.
- Used for modal animations.

`slideupgeneric`

- **Initial:** Starts elements off-screen and opaque.
- **Animate:** Brings elements onto the screen with opacity transition.
- **Exit:** Moves elements off-screen with opacity transition.
- Used for generic slide-up animations.

2.  Data Management

`/utils/data.js`
This module contains static data for the website.
In case there is a database you won't need this file.

3.  Sitemap

`/utils/sitemap.js`
This module generates the website's XML sitemap dynamically.

- Generates XML sitemap based on project data.
- Utilizes Next.js `getServerSideProps` to generate sitemap on the server-side.

4.  Robots.txt

`/public/robots.txt`
Defines the behavior of web crawlers.

- Allows all user-agents.
- Specifies the location of the sitemap.

5.  Index.js

`/pages/index.js`
The main landing page of the website.

- Defines metadata such as title, description, and social media tags.
- Sets up JSON-LD structured data for SEO purposes.
- Each index.js contains meta tags and schema that can be customized

`_app.js` File

Integration of Global Styles

- Imports global CSS styles from `globals.css` and `swiper.css`.
- Ensures consistent styling across the application.

Font Integration

- Imports the `Figtree` font from Google Fonts using the `next/font` package.
- Applies the imported font as a global class to ensure consistent typography.

Application Layout

- Renders the `<Header />` component at the top of each page.
- Renders the main content component `<Component {...pageProps} />`.
- Renders the `<Footer />` component at the bottom of each page, except on the homepage (`'/'` route).
- Renders the `<Cursor />` component, which provides custom cursor effects, except on the homepage.

Cursor Provider

- Wraps the application with the `CursorProvider` context provider.
- Provides state and functions related to cursor behavior.
- Exposes a custom hook `useCursor` for accessing cursor state and functions.

Custom Cursor Context

`CursorProvider` Component

- Creates a context provider for managing cursor state.
- Initializes state to track whether the cursor is hovering over an element.

`useCursor` Hook

- Provides a hook for consuming cursor state and functions within functional components.
- Returns the current cursor state and a function to update it.
