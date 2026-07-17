# Drupal Front-End Specialist Practice Questions

## Jump to Section:

- [Fundamental Web Development Concepts](#fundamental-web-development-concepts)
- [Theming Concepts](#theming-concepts)
- [Templates and Preprocess Functions](#templates-and-preprocess-functions)
- [Layout Configuration](#layout-configuration)
- [Performance](#performance)
- [Security](#security)

## Fundamental Web Development Concepts

### Question 1

**Domain:** Fundamental Web Development Concepts

You are rebuilding the newsroom landing page in Drupal 11. Each teaser card must be reusable on other listings and expose the headline, publish date, and "Read more" link as a single accessible unit. Which HTML structure best satisfies this requirement?

### Options
- Wrap each teaser in an `<article>` element with nested `<header>` and `<footer>` sections for metadata and calls to action.
- Place the teaser body inside a `<section>` element within a generic `<div>` container.
- Add `role="article"` to a `<div>` wrapper to avoid changing the markup.
- Render each teaser as a `<li>` element inside an unstyled `<ul>` without additional wrappers.

### Correct Answers
- [0] Wrap each teaser in an `<article>` element with nested `<header>` and `<footer>` sections for metadata and calls to action.

### Explanation
`<article>` conveys a standalone piece of content, letting assistive tech announce the teaser as a self-contained unit. Grouping metadata in `<header>` and actions in `<footer>` keeps semantics clear and reusable across listings, aligning with Drupal's emphasis on structured, accessible markup.


### Question 2

**Domain:** Fundamental Web Development Concepts

Design requires fluid typography so hero headlines scale smoothly between tablet and desktop widths. Which CSS approach delivers the requested behavior without breakpoint-specific overrides?

### Options
- Declare font sizes in `px` units and override them at each breakpoint.
- Use the `clamp()` function with viewport units and rem fallbacks to define a responsive range.
- Apply different utility classes for every breakpoint to adjust font size.
- Inline the computed font size with JavaScript on `resize` events.

### Correct Answers
- [1] Use the `clamp()` function with viewport units and rem fallbacks to define a responsive range.

### Explanation
`clamp()` lets you set minimum, preferred, and maximum values in a single declaration. Combining rem for the lower bound with viewport units for the growth factor keeps typography fluid without proliferating media queries or brittle JavaScript hacks.


### Question 3

**Domain:** Fundamental Web Development Concepts

The design system specifies a mobile navigation drawer that opens with a toggle and must meet WCAG focus requirements. How should you implement the toggle behavior?

### Options
- Bind a click handler to an `<a>` element and toggle `display: none` on the menu list.
- Use a `<button>` element that toggles the `hidden` attribute and updates `aria-expanded` on the trigger.
- Rely on a CSS `:hover` rule for the navigation container so the menu appears on touch devices.
- Add `tabindex="-1"` to the first menu item whenever the drawer is hidden.

### Correct Answers
- [1] Use a `<button>` element that toggles the `hidden` attribute and updates `aria-expanded` on the trigger.

### Explanation
A real button exposes keyboard semantics, and syncing the `hidden` state with `aria-expanded` gives assistive tech accurate context. This keeps the pattern accessible and works across input types without extra focus hacks.


### Question 4

**Domain:** Fundamental Web Development Concepts

Your custom module prepares a text snippet provided by editors before passing it to a Twig template. The content should render as plain text with any markup stripped. Which PHP function should you use before returning the string?

### Options
- `Drupal\Component\Utility\Html::escape($text)`
- `strip_tags($text)`
- `Drupal\Component\Utility\SafeMarkup::checkPlain($text)`
- `Markup::create($text)`

### Correct Answers
- [1] `strip_tags($text)`

### Explanation
`strip_tags()` removes HTML tags so the string is plain text before it reaches Twig. `Html::escape()` encodes characters for safe HTML output but does not strip markup; `SafeMarkup::checkPlain()` is deprecated; `Markup::create()` marks content as trusted raw HTML and should not be used for untrusted editor input.


### Question 5

**Domain:** Fundamental Web Development Concepts

Marketing wants the hero image to load an optimized source on phones and a high-resolution asset on larger screens without JavaScript swaps. Which two markup patterns deliver this responsibly? (Choose two)

### Options
- Use an `<img>` element with `srcset` and `sizes` attributes tuned to the design breakpoints.
- Wrap the image in a `<picture>` element with `<source>` elements targeting specific media queries.
- Keep a single `<img>` and control the background image via CSS for each breakpoint.
- Inline two `<img>` elements and hide the unused one with CSS.

### Correct Answers
- [0] Use an `<img>` element with `srcset` and `sizes` attributes tuned to the design breakpoints.
- [1] Wrap the image in a `<picture>` element with `<source>` elements targeting specific media queries.

### Explanation
`srcset`/`sizes` and the `<picture>` element both let the browser negotiate the appropriate asset, reducing payload on small screens while keeping larger displays crisp. Duplicating images or relying solely on CSS backgrounds wastes bandwidth and can undermine accessibility.


### Question 6

**Domain:** Fundamental Web Development Concepts

You are adopting Single Directory Components in a custom theme named `skyline`. How do you register the component directory so Twig can auto-discover templates and libraries?

### Options
- Declare a `component-libraries` section in `skyline.info.yml` that maps a library name to the component folder.
- Add the component path to `skyline.libraries.yml` under the `css` entries for the global library.
- Configure the directory in the Appearance UI under theme settings.
- Register the path inside `skyline.theme` using `hook_theme()`.

### Correct Answers
- [0] Declare a `component-libraries` section in `skyline.info.yml` that maps a library name to the component folder.

### Explanation
Single Directory Components read from the `component-libraries` declaration in the theme's `.info.yml`. Mapping library names to paths there allows Drupal 11 to load Twig templates, libraries, and schema metadata co-located in the component directory.


### Question 7

**Domain:** Fundamental Web Development Concepts

You are creating `agency_subtheme` based on Olivero. The team wants to keep Olivero's JavaScript behaviors but layer custom colors. Which two steps ensure assets load correctly? (Choose two)

### Options
- Set `base theme: olivero` in `agency_subtheme.info.yml`.
- Copy Olivero's compiled CSS into the subtheme and reference it directly from templates.
- Declare a `global-styling` library in `agency_subtheme.libraries.yml` that lists `olivero/global-styling` as a dependency.
- Remove all library dependencies so only the subtheme's CSS is present.

### Correct Answers
- [0] Set `base theme: olivero` in `agency_subtheme.info.yml`.
- [2] Declare a `global-styling` library in `agency_subtheme.libraries.yml` that lists `olivero/global-styling` as a dependency.

### Explanation
Setting the base theme inherits Olivero's templates and assets. Declaring a library that depends on Olivero's global styling lets you extend or override styles while still loading the core behaviors. Copying compiled CSS or stripping dependencies breaks the update path and risks regressions.


### Question 8

**Domain:** Fundamental Web Development Concepts

Designers request an additional `xxl` breakpoint so responsive image styles pick a double-width hero asset for very large displays. Where do you configure this breakpoint in a theme?

### Options
- Define it in `THEME.breakpoints.yml` with the desired media query.
- Add it to `THEME.libraries.yml` under the global library's `css` section.
- Append the breakpoint to `settings.php` so the value is globally available.
- Configure it in `THEME.info.yml` under a `breakpoints` key.

### Correct Answers
- [0] Define it in `THEME.breakpoints.yml` with the desired media query.

### Explanation
Drupal reads breakpoints from `THEME.breakpoints.yml` and uses them for responsive image styles, Layout Builder, and media queries. Declaring the `xxl` breakpoint there makes it selectable throughout the UI.


### Question 9

**Domain:** Fundamental Web Development Concepts

You are adding a carousel component that should load Swiper assets only when the block is rendered. What is the recommended way to attach the JavaScript from the Twig template?

### Options
- Define a `swiper` library in `THEME.libraries.yml` and call `{{ attach_library('theme/swiper') }}` within the component template.
- Insert a `<script>` tag that references the CDN URL directly in the Twig template.
- Use `hook_library_info_alter()` to append Swiper to every page request.
- Place the `<script>` inside `html.html.twig` so it always loads globally.

### Correct Answers
- [0] Define a `swiper` library in `THEME.libraries.yml` and call `{{ attach_library('theme/swiper') }}` within the component template.

### Explanation
Defining a discrete library keeps asset discovery and cache metadata intact. Calling `attach_library()` from the template ensures Swiper loads only when the component renders, while Drupal manages aggregation and dependencies.


### Question 10

**Domain:** Fundamental Web Development Concepts

The client wants editors to toggle a "High Contrast" mode from the theme settings page. Where do you implement the form element so it appears under Appearance → Settings for the theme?

### Options
- Add the form element inside `THEME.theme` using `hook_form_system_theme_settings_alter()`.
- Declare a `settings` section in `THEME.libraries.yml` with the new option.
- Create a configuration schema file named `THEME.settings.yml` inside the config directory.
- Hard-code a checkbox in `page.html.twig` and read it with JavaScript.

### Correct Answers
- [0] Add the form element inside `THEME.theme` using `hook_form_system_theme_settings_alter()`.

### Explanation
`hook_form_system_theme_settings_alter()` lets a theme extend the core theme settings form. Implementing it in `THEME.theme` adds the toggle in the UI and stores the value in configuration, making it accessible in preprocess functions and Twig.


### Question 11

**Domain:** Fundamental Web Development Concepts

Editors need a curated list of taxonomy terms to appear above the hero in `node--case-study` pages. The list is stored in a referenced vocabulary. How should you expose the formatted term names to Twig without running queries in the template?

### Options
- Build the list in `hook_preprocess_node()` and add it to `$variables['display_terms']`.
- Loop over `node.field_case_study_terms` directly in Twig and call `entity.label` on each item.
- Execute a `\Drupal::database()` query inside the Twig template to fetch the term labels.
- Use JavaScript to request the term data from a custom JSON endpoint after render.

### Correct Answers
- [0] Build the list in `hook_preprocess_node()` and add it to `$variables['display_terms']`.

### Explanation
Preprocess functions are the correct place to prepare complex data. Constructing the term list in `hook_preprocess_node()` lets you reuse the logic, leverage caching metadata, and keep Twig focused on presentation.


### Question 12

**Domain:** Fundamental Web Development Concepts

Product landing pages need a distinct template when the content type is `product` and the view mode is `full`. Which Twig template name delivers that override?

### Options
- `node--product--full.html.twig`
- `node--full--product.html.twig`
- `node--product.html.twig`
- `node--full.html.twig`

### Correct Answers
- [0] `node--product--full.html.twig`

### Explanation
Drupal constructs template suggestions in the order `node--TYPE--VIEW_MODE.html.twig`. Naming the file `node--product--full.html.twig` targets the `product` content type when rendered in the `full` view mode without affecting other view modes.


### Question 13

**Domain:** Fundamental Web Development Concepts

Branding requires a `data-page-theme` attribute on the `<body>` tag that reflects a value stored in theme settings. Where should you set the attribute so it appears on every page render?

### Options
- Implement `THEME_preprocess_html()` in `THEME.theme` and use `$variables['attributes']->setAttribute('data-page-theme', $setting)`.
- Update `page.html.twig` to print `<body data-page-theme="{{ theme_setting }}">` manually.
- Declare the attribute inside `THEME.info.yml` under the `libraries` section.
- Inject the attribute with JavaScript during `DOMContentLoaded`.

### Correct Answers
- [0] Implement `THEME_preprocess_html()` in `THEME.theme` and use `$variables['attributes']->setAttribute('data-page-theme', $setting)`.

### Explanation
`THEME_preprocess_html()` runs before `html.html.twig` renders, letting you safely set global body attributes while preserving Drupal's attribute handling and cache metadata. Hard-coding attributes in Twig bypasses preprocessing and can break attribute merging.


### Question 14

**Domain:** Fundamental Web Development Concepts

You need to expose a helper template suggestion whenever a view with machine name `promotions` renders its `block_featured` display. What hook makes this suggestion available to Twig?

### Options
- `hook_theme_suggestions_views_view_alter()`
- `hook_preprocess_views_view()`
- `hook_theme_registry_alter()`
- `hook_views_pre_render()`

### Correct Answers
- [0] `hook_theme_suggestions_views_view_alter()`

### Explanation
`hook_theme_suggestions_views_view_alter()` lets you append custom suggestions based on view name or display ID. Adding something like `views_view__promotions__block_featured` there tells Twig to look for the matching template without hard-coding logic in preprocess functions.


### Question 15

**Domain:** Fundamental Web Development Concepts

A field formatter outputs a raw date string for an `event_date` field. Designers need a human-friendly format, but you want to avoid logic in Twig. Where do you transform the value?

### Options
- Use `hook_preprocess_field()` to format the date and set a `formatted_date` variable.
- Apply the `date` filter directly in Twig: `{{ node.field_event_date.value|date('F j, Y') }}`.
- Override the field template and call PHP functions inside Twig.
- Create a custom block to render the date separately.

### Correct Answers
- [0] Use `hook_preprocess_field()` to format the date and set a `formatted_date` variable.

### Explanation
`hook_preprocess_field()` is ideal for altering field output. Formatting the date there keeps presentation concerns in PHP where cache metadata and translation tools are available, while Twig simply prints the prepared variable.


### Question 16

**Domain:** Fundamental Web Development Concepts

Marketing wants to rearrange hero, testimonial, and CTA sections uniquely on each landing page while sharing the same base layout. What Layout Builder configuration achieves this?

### Options
- Enable Layout Builder for the landing page content type and allow per-node overrides.
- Create a custom Twig template that hard-codes the three sections in the desired order.
- Use the Views UI to build a block for each section and embed them in the Twig template.
- Duplicate the content type so each landing page variation has its own template.

### Correct Answers
- [0] Enable Layout Builder for the landing page content type and allow per-node overrides.

### Explanation
Allowing per-node overrides lets editors rearrange sections case by case while still inheriting the same base layout. It keeps layout changes in the UI, avoids template proliferation, and respects Drupal's configuration workflow.


### Question 17

**Domain:** Fundamental Web Development Concepts

Regional marketers want a curated list of upcoming events to appear in a Layout Builder section only for nodes tagged "US". How can you deliver the filtered list without custom code?

### Options
- Create a View with a block display filtered by taxonomy, then place the block via Layout Builder and expose contextual filters as needed.
- Embed the events listing by calling `views_embed_view()` inside `node--landing-page.html.twig`.
- Build a separate paragraph type for events and rely on Field Layout instead of Layout Builder.
- Write a preprocess function that queries events and attaches the HTML to the layout section.

### Correct Answers
- [0] Create a View with a block display filtered by taxonomy, then place the block via Layout Builder and expose contextual filters as needed.

### Explanation
Views already handles filtering and pagination. By placing a View block in Layout Builder, editors can manage placement visually while Drupal handles caching and contextual filters for regional tagging.


### Question 18

**Domain:** Fundamental Web Development Concepts

Design wants a reusable three-column layout where editors can set a background color per column directly in Layout Builder. What is the Drupal 11-friendly approach?

### Options
- Create a custom Layout Builder plugin that exposes column background settings.
- Use the core two-column layout and add the third column via Twig alterations.
- Insert three column blocks and ask editors to type CSS classes into a custom text field.
- Switch to Paragraphs for layout control and disable Layout Builder entirely.

### Correct Answers
- [0] Create a custom Layout Builder plugin that exposes column background settings.

### Explanation
A custom layout plugin can define three regions and provide configurable settings for background colors. This keeps the UX consistent, stores choices in configuration, and leverages Layout Builder's API instead of brittle template hacks.


### Question 19

**Domain:** Fundamental Web Development Concepts

While auditing theme performance, you discover a custom library adds six separate CSS files that ship unminified to every page. How can you optimize delivery using core tools?

### Options
- Set `preprocess: true` on the CSS entries in the library so Drupal aggregates and minifies them.
- Inline the CSS into `html.html.twig` so the browser loads it in a single request.
- Disable the CSS aggregation setting to prevent cache invalidation issues.
- Move the styles into JavaScript and inject them at runtime.

### Correct Answers
- [0] Set `preprocess: true` on the CSS entries in the library so Drupal aggregates and minifies them.

### Explanation
Enabling preprocessing lets Drupal combine and minify CSS, reducing requests and transfer size. Inlining or injecting styles via JavaScript hurts caching, and disabling aggregation removes a major performance optimization.


### Question 20

**Domain:** Fundamental Web Development Concepts

Your Twig template must display user-generated testimonials stored in a `Filtered HTML` field. How do you output the content without exposing XSS risks?

### Options
- Render the field using `{{ content.field_testimonial }}` so Drupal's render array handles sanitization.
- Print the raw value with `{{ node.field_testimonial.value|raw }}` because the filter already strips unsafe HTML.
- Output `{{ node.field_testimonial.value }}` since Twig automatically escapes everything.
- Encode the field manually in JavaScript before inserting it into the DOM.

### Correct Answers
- [0] Render the field using `{{ content.field_testimonial }}` so Drupal's render array handles sanitization.

### Explanation
Printing the render array lets Drupal apply the configured text format, cache metadata, and sanitization. Bypassing it with `|raw` or manual JavaScript undermines the filter system and can reintroduce unsafe markup.


### Question 21

**Domain:** Fundamental Web Development Concepts

You are rebuilding a landing-page hero where the background image is purely decorative. Content designers want the heading and CTA to remain semantic and readable by screen readers. What HTML structure meets the requirement without extra ARIA attributes?

### Options
- Wrap the hero in a `<section>` containing an `<h1>`, text, and button, while applying the image via CSS background.
- Place all hero content inside a `<div>` and add `role="banner"` so assistive tech infers the semantics.
- Use an `<article>` with a hidden `<h1>` and set the CTA as a plain `<span>` styled like a button.
- Insert the image as an inline `<img>` with `alt="decorative"` before the heading.

### Correct Answers
- [0] Wrap the hero in a `<section>` containing an `<h1>`, text, and button, while applying the image via CSS background.

### Explanation
Using semantic elements keeps the document outline meaningful. A sectional container with a real heading and button exposes the key content to screen readers, and the decorative image can stay in CSS without extra ARIA work.


### Question 22

**Domain:** Fundamental Web Development Concepts

During a card component review, QA notes that clicking anywhere on the card should follow the card link while still exposing accessible focus styles. Which markup update satisfies the requirement?

### Options
- Wrap the card contents inside an `<a>` element that uses `display: block` and retains focus styles.
- Add a click handler to the card container `<div>` to redirect to the link URL.
- Place an invisible `<button>` over the card to capture click events.
- Duplicate the link text in a hidden `<span>` positioned over the card via CSS.

### Correct Answers
- [0] Wrap the card contents inside an `<a>` element that uses `display: block` and retains focus styles.

### Explanation
A block-level anchor allows the entire card to be clickable while keeping native focus handling and link semantics. JavaScript or overlay hacks can hurt accessibility and make keyboard navigation brittle.


### Question 23

**Domain:** Fundamental Web Development Concepts

A Drupal view renders table rows of events. Design requires that row backgrounds alternate, even when filters reorder results client side. What CSS solution keeps the zebra striping intact?

### Options
- Apply `tr:nth-child(even)` and `tr:nth-child(odd)` rules directly to the table within the theme stylesheet.
- Inject inline `style` attributes with PHP to set alternating background colors.
- Use JavaScript to assign classes after each Ajax refresh.
- Add unique classes to each row in Twig and style those classes.

### Correct Answers
- [0] Apply `tr:nth-child(even)` and `tr:nth-child(odd)` rules directly to the table within the theme stylesheet.

### Explanation
CSS structural selectors adapt automatically when rows change order. Inline styling or JS post-processing complicates maintenance and can flicker during Ajax updates.


### Question 24

**Domain:** Fundamental Web Development Concepts

Your theme uses CSS custom properties for spacing. A new marketing campaign needs a denser variant of the hero component with smaller padding. What is the most maintainable way to scope the change?

### Options
- Extend the hero component with a modifier class that overrides the spacing variables.
- Override the base variables globally in `:root` so every hero tightens automatically.
- Duplicate the hero stylesheet with reduced values and load it conditionally via JavaScript.
- Inline overrides in the Twig template using `style` attributes when the campaign flag is set.

### Correct Answers
- [0] Extend the hero component with a modifier class that overrides the spacing variables.

### Explanation
Modifier classes keep the change localized while reusing the existing design tokens. Global overrides or inline styles either affect unrelated components or break maintainability.


### Question 25

**Domain:** Fundamental Web Development Concepts

You must ensure a responsive grid of testimonials never drops below 280px card width on small screens. Which CSS technique achieves this without custom media query math?

### Options
- Use `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));` on the grid container.
- Define fixed pixel widths on each card and rely on horizontal scrolling.
- Apply Flexbox with `flex: 0 0 280px` and negative margins.
- Wrap cards in a `<table>` to lock the minimum width server-side.

### Correct Answers
- [0] Use `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));` on the grid container.

### Explanation
CSS Grid's `auto-fit` and `minmax` combination enforces a minimum card width while allowing the layout to reflow naturally. Fixed widths or tables harm responsiveness and accessibility.


### Question 26

**Domain:** Fundamental Web Development Concepts

Your team adds prefers-reduced-motion support to hero animations. Which approach respects user preferences without duplicating keyframes?

### Options
- Wrap motion styles in `@media (prefers-reduced-motion: no-preference)` and provide alternate non-animated states otherwise.
- Disable animations with JavaScript when `window.matchMedia('(prefers-reduced-motion: reduce)')` matches.
- Replace animations with animated GIF fallbacks for reduced motion users.
- Force the animation to run once and leave the final state visible for everyone.

### Correct Answers
- [0] Wrap motion styles in `@media (prefers-reduced-motion: no-preference)` and provide alternate non-animated states otherwise.

### Explanation
The CSS media query honors the user setting directly in the stylesheet, avoiding JavaScript race conditions. It's the recommended method for responsive motion preferences.


### Question 27

**Domain:** Fundamental Web Development Concepts

While auditing a theme, you spot inline `<style>` tags injecting critical CSS atop every page. Performance needs require a cleaner solution without blocking paint. What should you do?

### Options
- Move the critical CSS into the theme library and mark it as `preprocess: false` so it stays separate but cacheable.
- Keep inline CSS because Drupal aggregates it automatically.
- Load the CSS through an external CDN link to reduce server cost.
- Convert the inline CSS to inline JavaScript that injects styles at runtime.

### Correct Answers
- [0] Move the critical CSS into the theme library and mark it as `preprocess: false` so it stays separate but cacheable.

### Explanation
Theme libraries maintain cacheability and control while allowing fine-grained aggregation. Inline CSS inflates HTML responses and can't benefit from caching.


### Question 28

**Domain:** Fundamental Web Development Concepts

You need to capture scroll-driven progress to animate a sticky sidebar in the theme. Which JavaScript API offers the best balance of performance and compatibility?

### Options
- Use the `IntersectionObserver` API to detect when sections enter the viewport and update the sidebar.
- Attach a `scroll` listener that recalculates element positions on every frame.
- Poll `window.pageYOffset` with `setInterval` to update the UI.
- Bind to the `mousewheel` event to infer scroll direction.

### Correct Answers
- [0] Use the `IntersectionObserver` API to detect when sections enter the viewport and update the sidebar.

### Explanation
IntersectionObserver runs asynchronously, minimizes layout thrashing, and is supported broadly with fallbacks. Continuous polling or wheel events cost more performance and miss keyboard navigation.


### Question 29

**Domain:** Fundamental Web Development Concepts

A layout bug appears only in iOS Safari due to viewport height differences. You decide to leverage the dynamically updating large viewport unit. How do you apply it safely?

### Options
- Use `height: 100lvh;` as part of a `calc()` fallback stack that includes `min(100vh, 100svh)`.
- Replace every `vh` usage with `lvh` globally.
- Detect iOS user agents in PHP and add inline styles.
- Wrap the layout in a fixed-height container and set overflow hidden.

### Correct Answers
- [0] Use `height: 100lvh;` as part of a `calc()` fallback stack that includes `min(100vh, 100svh)`.

### Explanation
Combining legacy and new viewport units ensures broad support. Global replacements or UA sniffing are fragile, and fixed-height wrappers break responsiveness.


### Question 30

**Domain:** Fundamental Web Development Concepts

The team wants local developers to keep Twig debug and theme inspection settings without exporting them to production. Which configuration management pattern lets you version theme configuration while keeping local-only values out of shared exports?

### Options
- Maintain a Config Split (or Config Ignore) collection for local development that blacklists the theme setting keys.
- Export the settings normally and ask teammates to revert them by hand after every `drush cim`.
- Store the toggles in the database only and stop exporting configuration entirely.
- Commit a patched copy of `core.extension.yml` for each environment so the values differ.

### Correct Answers
- [0] Maintain a Config Split (or Config Ignore) collection for local development that blacklists the theme setting keys.

### Explanation
Config Split/Ignore lets you keep canonical theme settings in configuration while excluding environment-specific keys from shared exports. Manual reverts or diverging core configuration create drift, and abandoning configuration management loses deploy reproducibility.


### Question 31

**Domain:** Fundamental Web Development Concepts

Content editors embed responsive Vimeo videos. You want them to maintain a 16:9 aspect ratio without hardcoding heights. Which CSS pattern solves this?

### Options
- Wrap the `<iframe>` in a container with `aspect-ratio: 16 / 9` and set the iframe to `width: 100%; height: 100%`.
- Set a fixed pixel height of 360px on the iframe.
- Apply `padding-bottom: 56.25%` to the iframe itself.
- Use JavaScript to calculate height whenever the window resizes.

### Correct Answers
- [0] Wrap the `<iframe>` in a container with `aspect-ratio: 16 / 9` and set the iframe to `width: 100%; height: 100%`.

### Explanation
The CSS `aspect-ratio` property keeps the embed responsive without extra scripts. Fixed dimensions or manual calculations are fragile.


### Question 32

**Domain:** Fundamental Web Development Concepts

An accessibility audit flags your modal for trapping keyboard focus incorrectly. Which JavaScript strategy should you adopt?

### Options
- Use a focus-trap utility that stores the previously focused element, loops tab order inside the modal, and restores focus on close.
- Disable the tab key entirely while the modal is open.
- Force focus to the modal close button on every keypress.
- Let the browser manage focus because modals are inherently accessible.

### Correct Answers
- [0] Use a focus-trap utility that stores the previously focused element, loops tab order inside the modal, and restores focus on close.

### Explanation
Managing focus explicitly ensures keyboard users remain in the modal context and can return to their prior location. Disabling keys or ignoring focus flows violates accessibility guidelines.


### Question 33

**Domain:** Fundamental Web Development Concepts

You are optimizing CSS delivery. Critical styling is now extracted into a `critical.css` file loaded with `rel="preload"` and `as="style"`. What must you do to ensure the stylesheet actually applies?

### Options
- Add an `onload` handler that switches the link's `rel` to `stylesheet` once it loads.
- Leave the preload link on its own because the browser turns it into a stylesheet automatically.
- Reference the file inline with `<style>@import 'critical.css'</style>`.
- Load the stylesheet via JavaScript after `DOMContentLoaded`.

### Correct Answers
- [0] Add an `onload` handler that switches the link's `rel` to `stylesheet` once it loads.

### Explanation
Preloading alone fetches the file but doesn't apply it without promoting the link to a stylesheet. The onload swap pattern is required for consistent styling.


### Question 34

**Domain:** Fundamental Web Development Concepts

A design system requires that every interactive element has at least a 44px touch target. Which CSS approach enforces the minimum without increasing the visual footprint?

### Options
- Apply `padding` and negative `margin` on inline controls to expand the hit area.
- Wrap the controls in `<div>` elements with explicit heights.
- Add invisible sibling elements to capture touch events.
- Increase font size globally to enlarge targets.

### Correct Answers
- [0] Apply `padding` and negative `margin` on inline controls to expand the hit area.

### Explanation
Padding enlarges the clickable area, while negative margins preserve layout alignment. Extra wrappers or global font changes cause layout side effects.


### Question 35

**Domain:** Fundamental Web Development Concepts

Editors complain the mobile nav overlay prevents pinch-zooming because the body is locked. What JavaScript adjustment maintains scroll lock but allows gestures?

### Options
- Apply scroll locking to a dedicated wrapper element rather than the `<body>` and leave viewport gestures intact.
- Disable scroll locking entirely to allow zooming.
- Force the `<html>` element to `overflow: hidden` via inline CSS.
- Add `touch-action: none` to the overlay.

### Correct Answers
- [0] Apply scroll locking to a dedicated wrapper element rather than the `<body>` and leave viewport gestures intact.

### Explanation
Locking a wrapper preserves body-level pinch behavior while preventing content scroll. Removing lock or using `touch-action: none` either reintroduces while still blocking gestures or worsens the issue.


### Question 36

**Domain:** Fundamental Web Development Concepts

You need Twig template suggestions locally but must keep production caches optimized. What is the recommended way to enable Twig debug tools only on developer machines?

### Options
- Create a `services.local.yml` file with `twig.config: { debug: true, auto_reload: true }` and include it from `settings.local.php`.
- Flip `debug` to `true` inside `core.services.yml` and commit the change.
- Call `\Drupal::service('twig')->enableDebug()` in `settings.php` on every request.
- Enable Twig debug through the Appearance UI.

### Correct Answers
- [0] Create a `services.local.yml` file with `twig.config: { debug: true, auto_reload: true }` and include it from `settings.local.php`.

### Explanation
Local service overrides let developers enable Twig debugging without affecting shared configuration. Editing core files or global settings pollutes production, and runtime service calls sidestep Drupal's caching and are not persistent across rebuilds.


### Question 37

**Domain:** Fundamental Web Development Concepts

Content editors paste headings with smart quotes that break the fallback webfont. Which CSS solution maintains typography consistency?

### Options
- Specify a font stack including the custom typeface plus OS-safe fallbacks.
- Force text-transform to uppercase on all headings.
- Replace characters in Twig before rendering the heading.
- Embed the font subset as Base64 in CSS to guarantee availability.

### Correct Answers
- [0] Specify a font stack including the custom typeface plus OS-safe fallbacks.

### Explanation
A robust font stack ensures unsupported glyphs fall back gracefully. Transforming text or rewriting content is brittle and doesn't solve missing glyph coverage.


### Question 38

**Domain:** Fundamental Web Development Concepts

Content designers request a new "Marketing HTML" text format that allows a handful of additional tags, but it must be available only to the Marketing role. What is the Drupal-compliant way to configure it?

### Options
- Create the text format with the allowed tags, then grant only the Marketing role the `use text format Marketing HTML` permission.
- Modify the existing WYSIWYG profile so every role automatically gains the extra tags.
- Tell authors to switch to Full HTML and rely on editorial policy to prevent misuse.
- Add a custom filter plugin that strips disallowed markup after save while keeping permissions wide open.

### Correct Answers
- [0] Create the text format with the allowed tags, then grant only the Marketing role the `use text format Marketing HTML` permission.

### Explanation
Drupal enforces text format access via permissions. Scoping the new format to the Marketing role preserves security while giving that team the extra markup they need. Expanding global profiles or relying on Full HTML undermines sanitization, and post-save filtering still exposes unsafe markup before cleanup.


### Question 39

**Domain:** Fundamental Web Development Concepts

Design mandates that a component switch to a single column when space is under 480px. Which modern CSS feature provides an inline condition without extra media queries?

### Options
- Use a CSS container query on the component wrapper to adjust layout based on available width.
- Apply a `@supports` rule checking for `grid` support.
- Rely on Flexbox's default wrapping behavior.
- Detect viewport width in JavaScript and toggle classes.

### Correct Answers
- [0] Use a CSS container query on the component wrapper to adjust layout based on available width.

### Explanation
Container queries respond to the component's own size, keeping the layout modular. Viewport media queries or JavaScript produce extra coupling.


### Question 40

**Domain:** Fundamental Web Development Concepts

You must lazy-load below-the-fold hero images while preserving Largest Contentful Paint. Which HTML attribute enables this with minimal effort?

### Options
- Add `loading="lazy"` to the `<img>` elements below the fold while keeping above-the-fold images eager.
- Wrap the images in `<noscript>` tags for deferred loading.
- Attach a JavaScript observer to swap `src` attributes after scroll.
- Use object-fit on a background image instead.

### Correct Answers
- [0] Add `loading="lazy"` to the `<img>` elements below the fold while keeping above-the-fold images eager.

### Explanation
Native lazy loading defers fetching offscreen images without complex scripts. Above-the-fold content remains eager to maintain LCP.


### Question 41

**Domain:** Fundamental Web Development Concepts

While reviewing color contrast, you discover that marketing toggles themes by swapping CSS classes on `<body>`. Some legacy components still hardcode colors. How do you retrofit them without duplicating rules?

### Options
- Replace hardcoded colors with CSS variables defined on the theme class and reference them in the component.
- Add inline styles via Twig for each theme variation.
- Duplicate the component stylesheet for every theme variant and load conditionally.
- Inject JavaScript to rewrite computed styles when the theme toggles.

### Correct Answers
- [0] Replace hardcoded colors with CSS variables defined on the theme class and reference them in the component.

### Explanation
CSS variables scoped to the theme class allow instant swaps without touching component markup or duplicating stylesheets. Inline styles and JS rewrites do not scale.


### Question 42

**Domain:** Fundamental Web Development Concepts

You must deliver an accessible autocomplete field. Which combination of markup and attributes provides a solid baseline?

### Options
- Use an `<input>` with `role="combobox"`, `aria-expanded`, and `aria-controls` referencing a `<ul>` of options.
- Wrap the input in a `<div>` with `role="application"` so assistive tech uses custom semantics.
- Render suggestions inside a `<select>` element and hide it offscreen.
- Use a plain `<input>` and announce choices via `alert()` messages.

### Correct Answers
- [0] Use an `<input>` with `role="combobox"`, `aria-expanded`, and `aria-controls` referencing a `<ul>` of options.

### Explanation
ARIA combobox semantics communicate state changes and relationships to assistive tech. Application roles or hacked selects confuse users.


### Question 43

**Domain:** Fundamental Web Development Concepts

CMS users upload hero background videos. You need to ensure they do not autoplay for users who prefer reduced data usage. Which HTML attribute supports this behavior?

### Options
- Add the `preload="none"` attribute to the `<video>` element.
- Set `muted` so autoplay is blocked.
- Use `playsinline` so the video stays embedded.
- Add `loop` to keep the video short.

### Correct Answers
- [0] Add the `preload="none"` attribute to the `<video>` element.

### Explanation
Limiting preload prevents unnecessary data transfer until the user opts in. Muting or loop doesn't address data savings.


### Question 44

**Domain:** Fundamental Web Development Concepts

Editors want landing pages to move through "Draft → Needs Review → Published" so changes can be approved before going live. How do you deliver that workflow using Drupal core tools?

### Options
- Enable the Content Moderation module, define the workflow states, and assign the workflow to the landing page content type.
- Clone each node into a second "review" content type and swap URLs manually when approved.
- Add a checkbox in the theme settings and hide unpublished content with Twig conditionals.
- Rely on a custom cron job that copies draft nodes into production tables nightly.

### Correct Answers
- [0] Enable the Content Moderation module, define the workflow states, and assign the workflow to the landing page content type.

### Explanation
Content Moderation extends core publishing workflows with configurable states and transitions. Cloning nodes or theming hacks bypass revision history and access control, while cron jobs can't enforce editor approvals.


### Question 45

**Domain:** Fundamental Web Development Concepts

You need to ensure all external links open in a new tab and remain safe from reverse tabnabbing. Which link pattern delivers both behaviors?

### Options
- Add `target="_blank"` and `rel="noopener noreferrer"` to external anchor tags.
- Use JavaScript's `window.open` for external URLs only.
- Rely on the user's browser settings for tab safety.
- Wrap external links in `<span>` elements with click handlers.

### Correct Answers
- [0] Add `target="_blank"` and `rel="noopener noreferrer"` to external anchor tags.

### Explanation
Combining `target` with `rel` prevents the opened page from manipulating the source window. JavaScript overrides or ignoring security leaves a vulnerability.


### Question 46

**Domain:** Fundamental Web Development Concepts

During performance testing, you realize large hero images are unoptimized. Which build step ensures responsive images ship effectively?

### Options
- Configure the asset pipeline to generate multiple image sizes and reference them via `srcset` in Twig.
- Rely on the original upload size and let the browser scale it down.
- Use CSS to set `background-size: cover` and assume the browser chooses the best size.
- Convert everything to SVG regardless of content.

### Correct Answers
- [0] Configure the asset pipeline to generate multiple image sizes and reference them via `srcset` in Twig.

### Explanation
Providing variants lets the browser pick the optimal image for each device. Scaling down large images wastes bandwidth.


### Question 47

**Domain:** Fundamental Web Development Concepts

Marketing wants to embed a countdown timer that updates every second. To avoid layout shifts, which CSS property helps reserve space for the digits?

### Options
- Use `font-feature-settings` and `tabular-nums` if the font supports it.
- Set `letter-spacing` to zero across the board.
- Apply `display: inline-flex` with `align-items: center`.
- Wrap digits in `<span>` elements and rely on default spacing.

### Correct Answers
- [0] Use `font-feature-settings` and `tabular-nums` if the font supports it.

### Explanation
Tabular numerals ensure each digit takes equal width, preventing shift. Other properties do not guarantee alignment.


### Question 48

**Domain:** Fundamental Web Development Concepts

You must implement custom error messages for a form while preserving native validation. What browser API helps override the message while keeping the constraint logic?

### Options
- Listen for the `invalid` event and call `setCustomValidity()` with the custom message.
- Disable native validation and recreate it with JavaScript.
- Use CSS `::after` to display the message.
- Replace `<input>` elements with `<div contenteditable>` and manual validation.

### Correct Answers
- [0] Listen for the `invalid` event and call `setCustomValidity()` with the custom message.

### Explanation
`setCustomValidity()` lets you inject custom copy while keeping constraint checks. Disabling validation or using contenteditable introduces errors.


### Question 49

**Domain:** Fundamental Web Development Concepts

An SVG icon sprite renders blurry in Firefox due to scaling. What best practice keeps icons crisp?

### Options
- Ensure each `<symbol>` has explicit `viewBox` values and scale the `<use>` element via CSS.
- Convert the sprite to PNG assets.
- Add inline `width` and `height` attributes to the `<svg>` tag only.
- Rely on `transform: scale()` to resize icons.

### Correct Answers
- [0] Ensure each `<symbol>` has explicit `viewBox` values and scale the `<use>` element via CSS.

### Explanation
Proper `viewBox` definitions maintain the aspect ratio across browsers. Lacking them causes inconsistent rendering.


### Question 50

**Domain:** Fundamental Web Development Concepts

You want to reduce bundle size of a large third-party charting library. What modern JavaScript technique helps you only load charts when needed?

### Options
- Use dynamic `import()` to lazy-load the chart code when the component mounts.
- Include the library globally via CDN so it caches separately.
- Require the library in every component to share one instance.
- Copy the minified library into your repo and import it statically.

### Correct Answers
- [0] Use dynamic `import()` to lazy-load the chart code when the component mounts.

### Explanation
Code splitting with dynamic imports defers loading until required, improving initial payload. CDN inclusion may still fetch on first load.


### Question 51

**Domain:** Fundamental Web Development Concepts

An SEO audit requests structured data for article cards. What is the most standards-friendly approach?

### Options
- Embed JSON-LD `<script type="application/ld+json">` blocks describing each article.
- Wrap article summaries in `<div itemscope itemtype="http://schema.org/Article">` while leaving JSON-LD out.
- Modify the Drupal node JSON exporter and hope crawlers discover it.
- Add microformats using custom class names.

### Correct Answers
- [0] Embed JSON-LD `<script type="application/ld+json">` blocks describing each article.

### Explanation
JSON-LD is the recommended structured data format by search engines. Microdata is more brittle and harder to maintain.


### Question 52

**Domain:** Fundamental Web Development Concepts

You are consolidating analytics scripts. How can you defer a vendor script until after the main thread is idle without missing pageview events?

### Options
- Use `requestIdleCallback` with a fallback to `setTimeout` to inject the script after critical work completes.
- Load the script with `defer` and trust the browser to schedule it.
- Place the script at the top of `<head>` with `async`.
- Load the script inside the `DOMContentLoaded` event synchronously.

### Correct Answers
- [0] Use `requestIdleCallback` with a fallback to `setTimeout` to inject the script after critical work completes.

### Explanation
`requestIdleCallback` schedules non-critical work during idle periods, balancing performance and data capture. Plain `defer` may still execute during important tasks.


### Question 53

**Domain:** Fundamental Web Development Concepts

Your CSS build uses PostCSS. Which plugin combination modernizes CSS while maintaining browser compatibility?

### Options
- Use `postcss-preset-env` with a defined browserslist to polyfill modern features.
- Only run `autoprefixer` and ignore other features.
- Inline all CSS with `postcss-inline-svg`.
- Disable PostCSS and rely on manual prefixes.

### Correct Answers
- [0] Use `postcss-preset-env` with a defined browserslist to polyfill modern features.

### Explanation
`postcss-preset-env` transpiles new syntax according to target browsers, reducing manual work. Autoprefixer alone misses syntax conversions.


### Question 54

**Domain:** Fundamental Web Development Concepts

Design wants to experiment with color themes using CSS `@property`. What important step prevents invalid values from breaking the cascade?

### Options
- Define the custom property with an initial value and syntax in `@property` before using it.
- Declare the property directly in `.theme` without registration.
- Reset the property in JavaScript if the value fails validation.
- Avoid using `@property` because it is experimental.

### Correct Answers
- [0] Define the custom property with an initial value and syntax in `@property` before using it.

### Explanation
Registering the property ensures type checking and fallback behavior, preventing invalid inputs from cascading.


### Question 55

**Domain:** Fundamental Web Development Concepts

You discover layout thrashing caused by reading DOM dimensions in a tight scroll loop. Which optimization reduces the cost?

### Options
- Batch reads and writes by wrapping DOM measurements in `requestAnimationFrame` callbacks.
- Increase the loop delay with `setTimeout`.
- Duplicate layout logic on the server to cache dimensions.
- Use `MutationObserver` to track scroll events.

### Correct Answers
- [0] Batch reads and writes by wrapping DOM measurements in `requestAnimationFrame` callbacks.

### Explanation
Aligning DOM reads with the browser's render cycle mitigates thrashing. Arbitrary delays or mutation observers don't solve the fundamental issue.


### Question 56

**Domain:** Fundamental Web Development Concepts

For a progressive web app, you must cache theme assets offline. What service worker strategy suits static CSS and JS files?

### Options
- Implement a Cache First strategy for versioned static assets.
- Use Network First for everything including static assets.
- Bypass the service worker for static files.
- Store the assets in IndexedDB and inject them at runtime.

### Correct Answers
- [0] Implement a Cache First strategy for versioned static assets.

### Explanation
Versioned assets benefit from Cache First caching, ensuring instant loads while updates deploy via new hashes. Network First adds latency.


### Question 57

**Domain:** Fundamental Web Development Concepts

An SVG icon set must inherit text color for easy theming. Which attribute configuration achieves this?

### Options
- Ensure each SVG uses `fill="currentColor"` so it follows the surrounding text color.
- Set `fill="inherit"` to pull from the parent.
- Add classes to the `<svg>` and set colors in CSS only.
- Export the icons with baked-in hex colors.

### Correct Answers
- [0] Ensure each SVG uses `fill="currentColor"` so it follows the surrounding text color.

### Explanation
`currentColor` ties the icon to the present text color, simplifying theming. Inherit isn't valid for fill, and hardcoded colors resist overrides.


### Question 58

**Domain:** Fundamental Web Development Concepts

A11y testing reveals that skip links are invisible until focused. What CSS ensures they remain accessible without disrupting layout?

### Options
- Position the skip link offscreen with `top: -40px` and bring it into view on focus.
- Hide the skip link with `display: none` until Tab is pressed.
- Rely on the browser to display default skip link styles.
- Wrap the skip link text in `<span>` tags and reduce opacity to 0.1.

### Correct Answers
- [0] Position the skip link offscreen with `top: -40px` and bring it into view on focus.

### Explanation
Visually hiding offscreen maintains keyboard accessibility and repositions the link when focused. `display: none` removes it from tab order.


### Question 59

**Domain:** Fundamental Web Development Concepts

Marketing needs a sticky CTA bar that only appears after the main content enters the viewport. What approach balances performance and simplicity?

### Options
- Use `IntersectionObserver` to watch the main content and toggle a CSS class on the CTA bar.
- Add a `scroll` event listener that recalculates positions on every pixel change.
- Poll `getBoundingClientRect` with `setInterval`.
- Place the CTA bar at the top of the DOM so it is always visible.

### Correct Answers
- [0] Use `IntersectionObserver` to watch the main content and toggle a CSS class on the CTA bar.

### Explanation
IntersectionObserver is efficient and integrates well with class toggles, avoiding continuous scroll calculations.


### Question 60

**Domain:** Fundamental Web Development Concepts

You want to share a single CSS grid definition across multiple components in SASS. What is a maintainable approach?

### Options
- Define a mixin for the grid and include it where needed, passing custom gap values.
- Copy the grid declarations into each component file.
- Nest all components under one global grid class.
- Generate the grid via JavaScript and inject styles at runtime.

### Correct Answers
- [0] Define a mixin for the grid and include it where needed, passing custom gap values.

### Explanation
Mixins promote reuse while allowing overrides. Copying declarations or relying on JavaScript hinders maintainability.


### Question 61

**Domain:** Fundamental Web Development Concepts

You must polyfill `:has()` support for older browsers without bloating modern bundles. How can you achieve this?

### Options
- Use `postcss-selector-has-pseudo` during build to transform selectors for legacy browsers while leaving modern CSS untouched.
- Include a runtime JavaScript polyfill for every page.
- Avoid using `:has()` entirely.
- Duplicate selectors manually for all browsers.

### Correct Answers
- [0] Use `postcss-selector-has-pseudo` during build to transform selectors for legacy browsers while leaving modern CSS untouched.

### Explanation
Build-time transformations deliver compatibility without runtime cost. JavaScript polyfills or manual duplication are harder to maintain.


### Question 62

**Domain:** Fundamental Web Development Concepts

When integrating third-party web components, you need to ensure styles penetrate shadow DOM. What CSS mechanism allows styling without modifying the component?

### Options
- Leverage the `::part()` pseudo-element exposed by the web component.
- Apply global CSS selectors with `!important` to override shadow styles.
- Inject inline styles via JavaScript directly into the shadow root without permission.
- Request the vendor to disable shadow DOM encapsulation.

### Correct Answers
- [0] Leverage the `::part()` pseudo-element exposed by the web component.

### Explanation
`::part()` is the standard way to style exposed sections of a shadow component. Forcing overrides breaks encapsulation and is brittle.


### Question 63

**Domain:** Fundamental Web Development Concepts

A performance budget requires that fonts load without causing flashes of invisible text. What loading strategy meets the goal?

### Options
- Use `font-display: swap` in the `@font-face` declaration.
- Omit `font-display` so the browser chooses the default.
- Preload fonts and rely on synchronous loading.
- Disable custom fonts entirely.

### Correct Answers
- [0] Use `font-display: swap` in the `@font-face` declaration.

### Explanation
`font-display: swap` displays fallback text immediately and swaps once the font arrives, reducing FOIT. Leaving defaults can hide text.


### Question 64

**Domain:** Fundamental Web Development Concepts

Marketing requests `rel="ugc"` on user-generated comment links in addition to existing rel values. How do you implement this without losing current attributes?

### Options
- Merge `ugc` with existing values in Twig, ensuring the output includes `rel="nofollow ugc"`.
- Replace the `rel` attribute entirely with `ugc`.
- Store the rel values in a `data-` attribute for later injection.
- Strip `rel` and rely on meta tags.

### Correct Answers
- [0] Merge `ugc` with existing values in Twig, ensuring the output includes `rel="nofollow ugc"`.

### Explanation
Combining rel tokens keeps prior directives active while adding user-generated classification. Replacing or deferring rel removes safety hints.


### Question 65

**Domain:** Fundamental Web Development Concepts

You need to load a polyfill only in browsers lacking native `fetch`. How do you conditionally include it without flash of errors?

### Options
- Use feature detection: `if (!window.fetch) { await import('whatwg-fetch'); }` before executing dependent code.
- Include the polyfill globally in every bundle.
- Reference the polyfill via `<script>` tag in `<head>` unconditionally.
- Disable features relying on `fetch`.

### Correct Answers
- [0] Use feature detection: `if (!window.fetch) { await import('whatwg-fetch'); }` before executing dependent code.

### Explanation
Feature detection plus dynamic import keeps modern browsers lightweight while supporting older ones. Loading everywhere increases bundle size.


### Question 66

**Domain:** Fundamental Web Development Concepts

For a localization project, you must ensure time strings respect the user's locale. Which JavaScript API should you leverage?

### Options
- Use `Intl.DateTimeFormat` with the user's locale to format the time string.
- Append the locale string manually to the time.
- Convert times to GMT to avoid formatting issues.
- Store translated time strings in Drupal configuration.

### Correct Answers
- [0] Use `Intl.DateTimeFormat` with the user's locale to format the time string.

### Explanation
`Intl.DateTimeFormat` handles locale-specific formats without manual string manipulation. Hardcoding strings is unmaintainable.


### Question 67

**Domain:** Fundamental Web Development Concepts

A11y testing shows that decorative inline SVGs are announced by screen readers. How do you suppress them properly?

### Options
- Add `aria-hidden="true"` and `focusable="false"` to the `<svg>` element.
- Set `display: none` on the SVG when not needed.
- Wrap the SVG in an empty `<span>`.
- Rely on default behavior; assistive tech ignores SVGs automatically.

### Correct Answers
- [0] Add `aria-hidden="true"` and `focusable="false"` to the `<svg>` element.

### Explanation
These attributes remove the icon from accessibility trees while keeping it visible. `display: none` hides it visually too.


### Question 68

**Domain:** Fundamental Web Development Concepts

You must ensure that a toggle switch built with `<button>` communicates its state. Which attribute pairing provides robust semantics?

### Options
- Use `aria-pressed` and update it to `true` or `false` as the state changes.
- Add `role="switch"` without state.
- Replace the button with a `<div>` and toggle classes.
- Rely on CSS `:checked` without attributes.

### Correct Answers
- [0] Use `aria-pressed` and update it to `true` or `false` as the state changes.

### Explanation
`aria-pressed` communicates toggle state for button-based components. Missing state attributes or non-semantic elements fail accessibility checks.


### Question 69

**Domain:** Fundamental Web Development Concepts

You are rebuilding the product listing grid so each card's internal layout lines up with the site-wide column tracks. The parent container already uses CSS Grid, and cards should snap to those tracks even when they wrap to new rows. Which CSS change meets this requirement without extra wrappers?

### Options
- Set the card's inner grid container to `display: subgrid` so it inherits the parent `grid-template-columns`.
- Switch every card to Flexbox and use `align-items: stretch`.
- Absolutely position card contents and size them with `calc()`.
- Wrap each card in an extra container that repeats the column definitions.

### Correct Answers
- [0] Set the card's inner grid container to `display: subgrid` so it inherits the parent `grid-template-columns`.

### Explanation
CSS Subgrid lets nested grid containers align their tracks with a parent grid. Flexbox, absolute positioning, or duplicate wrappers either break the desired alignment or add brittle markup.


### Question 70

**Domain:** Fundamental Web Development Concepts

Editors can drag a divider to change the width of a live preview iframe in your admin theme. Marketing wants the preview header to toggle a `--compact` modifier whenever the preview width drops below 720px, without relying on global window resize listeners. How should you implement this?

### Options
- Observe the preview container with `ResizeObserver` and toggle the modifier when `contentRect.width` crosses 720px.
- Bind `window.onresize` and poll the container width every 100ms with `getBoundingClientRect()`.
- Attach a `MutationObserver` to the iframe and recompute the width when attributes change.
- Use CSS `@media (max-width: 720px)` to add the modifier via a pseudo-element.

### Correct Answers
- [0] Observe the preview container with `ResizeObserver` and toggle the modifier when `contentRect.width` crosses 720px.

### Explanation
`ResizeObserver` reports size changes for a specific element without tying logic to global resize events or timers. MutationObserver watches DOM mutations, and pseudo-elements cannot toggle classes on the element.


### Question 71

**Domain:** Fundamental Web Development Concepts

Designers want the marketing site to honor the user's system dark mode preference while still allowing a manual light/dark toggle. What should you do first?

### Options
- Define color tokens with CSS custom properties and wrap the dark defaults inside `@media (prefers-color-scheme: dark)`, letting the toggle switch variables with a class.
- Load a separate dark CSS file with JavaScript once `matchMedia('(prefers-color-scheme: dark)')` matches.
- Detect OS theme server-side and render two completely different stylesheets.
- Apply dark colors inline on the `<body>` element when dark mode is detected.

### Correct Answers
- [0] Define color tokens with CSS custom properties and wrap the dark defaults inside `@media (prefers-color-scheme: dark)`, letting the toggle switch variables with a class.

### Explanation
Using custom properties with `prefers-color-scheme` provides an accessible default while giving the toggle a single place to override values. Loading alternate stylesheets or inline colors introduces flicker and is harder to maintain.


### Question 72

**Domain:** Fundamental Web Development Concepts

A decoupled autosave feature sends draft updates with `fetch()`. When the author navigates away, the pending request should cancel immediately to avoid server-side conflicts. What is the best approach?

### Options
- Create an `AbortController`, pass its signal to `fetch()`, and call `controller.abort()` in the component cleanup.
- Wrap the `fetch()` call in `Promise.race()` with a timeout promise that rejects after 2 seconds.
- Allow the request to finish; browsers automatically cancel network calls on navigation.
- Listen for the `beforeunload` event and return `false` to stop the request.

### Correct Answers
- [0] Create an `AbortController`, pass its signal to `fetch()`, and call `controller.abort()` in the component cleanup.

### Explanation
`AbortController` integrates with `fetch()` so the HTTP request is terminated immediately when the controller aborts. Timeouts only reject locally, and relying on navigation side effects can leave the server handling stale requests.


### Question 73

**Domain:** Fundamental Web Development Concepts

Keyboard users report that icon-only buttons have no focus ring because the team removed outlines for aesthetic reasons. How do you restore accessible focus feedback without reintroducing distracting outlines for mouse users?

### Options
- Style focus indicators with the `:focus-visible` pseudo-class so they show for keyboard users but not pointer interactions.
- Apply `outline: none` and rely solely on `aria-label` for context.
- Toggle a CSS class on `mousedown` to remove outlines temporarily.
- Replace focus outlines with `:hover` styles.

### Correct Answers
- [0] Style focus indicators with the `:focus-visible` pseudo-class so they show for keyboard users but not pointer interactions.

### Explanation
`:focus-visible` lets browsers decide when a focus ring should appear, preserving accessibility for keyboard users while avoiding unwanted outlines for mouse users. Removing outlines or relying on hover does not meet accessibility requirements.


### Question 74

**Domain:** Fundamental Web Development Concepts

Inline validation errors appear beneath each checkout field, but screen reader users are not alerted when the message appears. What should you add?

### Options
- Wrap the error container in an element with `role="alert"` or `aria-live="assertive"`.
- Add `tabindex="0"` to each error message.
- Toggle `aria-hidden="false"` on the message when it appears.
- Show a toast notification elsewhere on the page.

### Correct Answers
- [0] Wrap the error container in an element with `role="alert"` or `aria-live="assertive"`.

### Explanation
Live regions such as `role="alert"` cause assistive technology to announce new content immediately. Tabindex or aria-hidden changes do not trigger announcements, and separate toasts disrupt the form flow.


### Question 75

**Domain:** Fundamental Web Development Concepts

Your fullscreen hero needs to respect the safe area on devices with notches without hardcoding device-specific values. What is the recommended approach?

### Options
- Use padding values that reference environment variables like `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
- Detect iOS user agents in JavaScript and set inline padding.
- Add a fixed 44px top margin for all devices.
- Wrap the hero in an extra `<div>` with `overflow: hidden`.

### Correct Answers
- [0] Use padding values that reference environment variables like `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.

### Explanation
CSS environment variables expose the safe area insets so layouts adapt automatically across devices. UA sniffing and magic numbers are brittle, and extra wrappers do not guarantee safe spacing.


## Theming Concepts

### Question 76

**Domain:** Theming Concepts

You are creating a new theme called `aurora` that should inherit from Olivero. Which configuration ensures assets cascade correctly?

### Options
- Set `base theme: olivero` in `aurora.info.yml` and declare dependencies on `olivero/global-styling` in `aurora.libraries.yml`.
- Import Olivero's CSS with `@import` in each component stylesheet.
- Copy Olivero's compiled CSS into the `aurora/css` directory and reference it manually.
- Set `regions` in `aurora.info.yml` but omit the base theme declaration to avoid conflicts.

### Correct Answers
- [0] Set `base theme: olivero` in `aurora.info.yml` and declare dependencies on `olivero/global-styling` in `aurora.libraries.yml`.

### Explanation
The base theme declaration handles template inheritance, while library dependencies ensure script and style order. Importing or copying assets breaks update compatibility.


### Question 77

**Domain:** Theming Concepts

Editors need a promotional layout that only loads its CSS when a block is placed. How do you register the assets?

### Options
- Create a library for the block in `aurora.libraries.yml` and call `{{ attach_library('aurora/promo-block') }}` inside the block Twig template.
- Add the stylesheet to the global library so it's always available.
- Register the CSS in `library-override` in `aurora.info.yml`.
- Inject the CSS via `hook_theme_suggestions_block_alter()`.

### Correct Answers
- [0] Create a library for the block in `aurora.libraries.yml` and call `{{ attach_library('aurora/promo-block') }}` inside the block Twig template.

### Explanation
Component-specific libraries keep assets scoped to their usage and avoid bloating every page. Global libraries run everywhere regardless of need.


### Question 78

**Domain:** Theming Concepts

You must add a new breakpoint to support ultrawide monitors. Where do you define the breakpoint so responsive image styles can use it?

### Options
- Add an entry to `aurora.breakpoints.yml` with machine name and media query.
- Declare it in `aurora.libraries.yml` under `breakpoints`.
- Update `settings.php` with a `$config['breakpoints']` array.
- Place the breakpoint in `theme-settings.php`.

### Correct Answers
- [0] Add an entry to `aurora.breakpoints.yml` with machine name and media query.

### Explanation
Drupal reads breakpoints from the dedicated YAML file for responsive images and Layout Builder. Other locations are ignored.


### Question 79

**Domain:** Theming Concepts

Your theme needs to override a paragraph template. Which file naming pattern should you follow to target the `testimonial` paragraph bundle?

### Options
- `paragraph--testimonial.html.twig`
- `paragraph--bundle--testimonial.html.twig`
- `paragraph-testimonial.html.twig`
- `paragraph--view--testimonial.html.twig`

### Correct Answers
- [0] `paragraph--testimonial.html.twig`

### Explanation
Drupal uses `paragraph--BUNDLE` naming for paragraph templates. Other patterns will not register.


### Question 80

**Domain:** Theming Concepts

Site builders request a theme setting to toggle a secondary logo. How do you expose it in the UI?

### Options
- Implement `aurora_form_system_theme_settings_alter()` in `aurora.theme` and add a checkbox to `$form`.
- Create a configuration form in a custom module.
- Add a `settings` key in `aurora.info.yml` with the checkbox definition.
- Place a hidden input in `page.html.twig` and read it via JavaScript.

### Correct Answers
- [0] Implement `aurora_form_system_theme_settings_alter()` in `aurora.theme` and add a checkbox to `$form`.

### Explanation
Theme settings are added through the alter hook, ensuring stored configuration and UI integration. Info YAML lines are ignored for settings.


### Question 81

**Domain:** Theming Concepts

You need to provide editors with a list of pre-defined background classes for Layout Builder sections. What's the best way to do this?

### Options
- Use Layout Builder Styles module and register the classes in `aurora.layout_builder.styles.yml`.
- Ask editors to type class names into a text field.
- Hardcode the classes in Twig based on section IDs.
- Override Layout Builder templates to add radio buttons.

### Correct Answers
- [0] Use Layout Builder Styles module and register the classes in `aurora.layout_builder.styles.yml`.

### Explanation
Layout Builder Styles integrates cleanly with section UIs, allowing reusable classes without custom template hacks or manual entry.


### Question 82

**Domain:** Theming Concepts

Drupal core adds a new toolbar breakpoints library that conflicts with your theme. How do you override it safely?

### Options
- Use `libraries-override` in `aurora.info.yml` to swap the core file with your version.
- Delete the core library from the file system.
- Copy `core.toolbar.css` into your theme and expect Drupal to prefer it.
- Disable the toolbar module entirely.

### Correct Answers
- [0] Use `libraries-override` in `aurora.info.yml` to swap the core file with your version.

### Explanation
`libraries-override` lets themes replace specific asset references while keeping dependencies intact, avoiding hacks or module removal.


### Question 83

**Domain:** Theming Concepts

You want to expose a pattern library of Twig components stored in `components/`. Which configuration enables Single Directory Components?

### Options
- Add a `component-libraries` section to `aurora.info.yml` pointing to `components`.
- Register the directory in `services.yml`.
- Declare the path in `aurora.libraries.yml` as a CSS asset.
- Duplicate the Twig files into the `templates/` directory.

### Correct Answers
- [0] Add a `component-libraries` section to `aurora.info.yml` pointing to `components`.

### Explanation
Single Directory Components rely on the `component-libraries` declaration, letting Drupal auto-discover Twig, YAML, and library files in one folder.


### Question 84

**Domain:** Theming Concepts

An icon sprite loads twice because both subtheme and base theme declare it. How do you prevent duplication?

### Options
- Remove the icon library from the subtheme and rely on the inherited library dependency.
- Rename the sprite file in the base theme.
- Use `hook_library_info_alter()` to unset the base theme entry.
- Attach the sprite via inline `<svg>` tags.

### Correct Answers
- [0] Remove the icon library from the subtheme and rely on the inherited library dependency.

### Explanation
Base themes already provide their assets; extending themes should depend on them rather than duplicating attachments.


### Question 85

**Domain:** Theming Concepts

You must provide a custom `html.html.twig` template. Where do you place it in the theme structure?

### Options
- In the `templates/` directory at the root of the theme.
- Inside `components/` alongside Single Directory Components.
- Within a `theme-settings/` folder.
- Under `templates/page/` only.

### Correct Answers
- [0] In the `templates/` directory at the root of the theme.

### Explanation
Drupal scans `templates/` for twig overrides like `html.html.twig`. Subdirectories are optional but the base folder must exist in the theme root.


### Question 86

**Domain:** Theming Concepts

The design team wants to swap the default Olivero blue palette. Which Sass strategy keeps updates manageable?

### Options
- Import Olivero's Sass variables and override them before compiling the subtheme.
- Edit Olivero's compiled CSS files directly.
- Load colors via inline styles.
- Maintain two parallel Sass bundles and switch via theme setting.

### Correct Answers
- [0] Import Olivero's Sass variables and override them before compiling the subtheme.

### Explanation
Adjusting Sass variables upstream maintains compatibility with Olivero updates, whereas editing compiled CSS leads to conflicts.


### Question 87

**Domain:** Theming Concepts

You are defining theme regions. Which file should list them so blocks become placeable?

### Options
- `aurora.info.yml`
- `aurora.theme`
- `aurora.libraries.yml`
- `aurora.breakpoints.yml`

### Correct Answers
- [0] `aurora.info.yml`

### Explanation
Region definitions live in the theme's info file, informing Drupal where blocks can render. Other files handle different concerns.


### Question 88

**Domain:** Theming Concepts

To reduce render-blocking CSS, you want to load non-critical styles asynchronously. How can you declare this in library YAML?

### Options
- Set `attributes: { rel: preload, as: style }` in the library asset and provide an onload handler.
- Use `preprocess: false` and expect asynchronous loading.
- Add `load: async` in the YAML.
- Inline the CSS in Twig.

### Correct Answers
- [0] Set `attributes: { rel: preload, as: style }` in the library asset and provide an onload handler.

### Explanation
Library attributes support preload semantics, and the onload handler swaps it to a stylesheet after fetching. Other settings do not change load behavior.


### Question 89

**Domain:** Theming Concepts

You need to apply different layout styles when a block is in the `sidebar_second` region. Which approach avoids hardcoding region checks in Twig?

### Options
- Use `hook_preprocess_block()` to append a region-based class to the block attributes.
- Update block templates to check `configuration['region']` directly.
- Modify block placement UI to add classes manually.
- Create duplicate block plugins per region.

### Correct Answers
- [0] Use `hook_preprocess_block()` to append a region-based class to the block attributes.

### Explanation
Preprocess hooks can add utility classes based on placement, keeping templates clean and reducing duplication.


### Question 90

**Domain:** Theming Concepts

You're adding a new Twig debug comment. Which service configuration allows theme developers to toggle Twig debug output safely?

### Options
- Enable Twig debugging in `services.yml` with `twig.config: { debug: true }` for local development.
- Modify `settings.php` to print debug comments in production.
- Add `#` comments directly to Twig templates.
- Create a custom module to print debug statements.

### Correct Answers
- [0] Enable Twig debugging in `services.yml` with `twig.config: { debug: true }` for local development.

### Explanation
Twig debug is controlled via service configuration; enabling it locally supports template discovery without impacting production.


### Question 91

**Domain:** Theming Concepts

You need to ensure compiled CSS includes a comment header with deployment metadata. Where do you configure PostCSS to add it?

### Options
- Add a PostCSS plugin like `postcss-banner` in `postcss.config.js`.
- Insert the comment manually at the top of the compiled CSS.
- Store metadata in `drupalSettings` instead.
- Use PHP to echo CSS with `print`.

### Correct Answers
- [0] Add a PostCSS plugin like `postcss-banner` in `postcss.config.js`.

### Explanation
Using a build plugin ensures consistent headers across builds without manual intervention or runtime hacks.


### Question 92

**Domain:** Theming Concepts

You must add Favicons and app icons to the theme. Where should the markup live?

### Options
- Extend `html.html.twig` to include `<link rel="icon">` tags referencing your assets.
- Place the markup in each node template manually.
- Load icons via JavaScript after page load.
- Register icons in `aurora.libraries.yml`.

### Correct Answers
- [0] Extend `html.html.twig` to include `<link rel="icon">` tags referencing your assets.

### Explanation
Favicons belong in the document `<head>`, handled by the `html` template override. Node templates or JS injection are inappropriate.


### Question 93

**Domain:** Theming Concepts

Your theme uses Tailwind. How do you prevent unused utility classes from inflating the CSS bundle?

### Options
- Configure Tailwind's `content` array to purge unused classes during build.
- Manually delete unused classes from the compiled CSS.
- Only use inline styles in Twig.
- Disable Tailwind JIT mode.

### Correct Answers
- [0] Configure Tailwind's `content` array to purge unused classes during build.

### Explanation
Tailwind's purge settings remove unused utilities automatically, keeping bundles tight. Manual deletions are unsustainable.


### Question 94

**Domain:** Theming Concepts

While overriding `node--article.html.twig`, you want to reuse markup from the base template. How do you include it without copy-paste?

### Options
- Use Twig's `{% extends 'node.html.twig' %}` and override only necessary blocks.
- Include the entire base template via `{% include %}`.
- Duplicate the markup and maintain both files.
- Use PHP includes.

### Correct Answers
- [0] Use Twig's `{% extends 'node.html.twig' %}` and override only necessary blocks.

### Explanation
Extending preserves base structure while replacing specific blocks, ensuring updates propagate from core templates.


### Question 95

**Domain:** Theming Concepts

You discover that the theme loads both `global-styling` and `global-scripts` libraries even on login pages where they're not needed. How can you reduce load?

### Options
- Attach the libraries in `page.html.twig` only when the route is not `user.login`.
- Remove the libraries entirely.
- Add conditional logic in `libraries.yml` to skip the route.
- Hope Drupal automatically removes unused libraries.

### Correct Answers
- [0] Attach the libraries in `page.html.twig` only when the route is not `user.login`.

### Explanation
Twig can conditionally attach libraries based on route context. `libraries.yml` lacks conditional logic, and removing assets entirely breaks other pages.


### Question 96

**Domain:** Theming Concepts

You're moving inline Drupal behaviors to ES modules. How do you register a behavior using modern syntax?

### Options
- Import `once` and export an object via `Drupal.behaviors.behaviorName = { attach(context) { ... } }` inside your module entry point.
- Write ES modules without registering behaviors and rely on DOMContentLoaded.
- Place behaviors in `drupalSettings`.
- Attach behaviors via `hook_preprocess_html`.

### Correct Answers
- [0] Import `once` and export an object via `Drupal.behaviors.behaviorName = { attach(context) { ... } }` inside your module entry point.

### Explanation
Drupal behaviors still register on `Drupal.behaviors`; bundlers should export modules that set up the behavior on load. Skipping registration breaks Ajax contexts.


### Question 97

**Domain:** Theming Concepts

Editors want to use a `gradient` class that relies on a compiled CSS custom property. Where should you define fallback values for older browsers?

### Options
- Provide a solid color fallback before the custom property declaration in the CSS rule.
- Skip fallbacks and rely on modern browser support.
- Use `@supports` to remove the gradient entirely.
- Add the fallback in PHP.

### Correct Answers
- [0] Provide a solid color fallback before the custom property declaration in the CSS rule.

### Explanation
Stacking fallback values ensures older browsers render a sensible color even if custom properties fail.


### Question 98

**Domain:** Theming Concepts

During a UX review, you learn that editors need a shorter site name for narrow viewports. How can you expose this without duplicating templates?

### Options
- Add a theme setting for an alternate site name and render it conditionally in `block--system-branding-block.html.twig`.
- Hardcode two versions of the site name in Twig.
- Ask editors to update the site name manually per breakpoint.
- Override the branding block with JavaScript.

### Correct Answers
- [0] Add a theme setting for an alternate site name and render it conditionally in `block--system-branding-block.html.twig`.

### Explanation
Theme settings provide editors with configurable values that templates can toggle based on layout needs, preventing duplication.


### Question 99

**Domain:** Theming Concepts

You must ensure that a custom library only loads on admin pages. Which hook allows you to attach it globally to admin routes?

### Options
- Use `hook_page_attachments()` to check `\Drupal::service('router.admin_context')->isAdminRoute()` before attaching the library.
- Use `libraries-override` to conditionally replace admin assets.
- Attach the library in every Twig template and rely on CSS selectors.
- Add the library to `core.libraries.yml` directly.

### Correct Answers
- [0] Use `hook_page_attachments()` to check `\Drupal::service('router.admin_context')->isAdminRoute()` before attaching the library.

### Explanation
`hook_page_attachments()` lets you append assets at request time and check for admin context. Attaching everywhere or editing core is risky.


### Question 100

**Domain:** Theming Concepts

You need to ensure a theme library loads after a contrib module's library for dependency reasons. How do you declare this?

### Options
- In `aurora.libraries.yml`, add `dependencies:\n  - module/library` under your library definition.
- Rename your library so it alphabetically follows the contrib library.
- Load the contrib library manually via Twig before attaching yours.
- Rely on Drupal to detect dependencies automatically.

### Correct Answers
- [0] In `aurora.libraries.yml`, add `dependencies:\n  - module/library` under your library definition.

### Explanation
Declaring dependencies in library YAML ensures Drupal enqueues assets in the correct order. Naming conventions alone do not guarantee sequence.


### Question 101

**Domain:** Theming Concepts

The theme includes a custom breakpoint group for responsive images, but editors need a fallback when the theme is disabled. What is the best approach?

### Options
- Export the breakpoint group to configuration and ship it with a supporting module.
- Define breakpoints only in the theme so they disappear with the theme.
- Hardcode image styles in Twig templates.
- Ask editors to recreate breakpoints manually on each site.

### Correct Answers
- [0] Export the breakpoint group to configuration and ship it with a supporting module.

### Explanation
Moving shared configuration into a module keeps responsive image mappings available even if themes change.


### Question 102

**Domain:** Theming Concepts

You want to override a library only on specific routes. What's the recommended method?

### Options
- Use `hook_page_attachments_alter()` to remove or replace the library based on the current route.
- Modify `libraries-override` with route conditions.
- Delete the library definition from the module.
- Use Twig conditionals to add or remove `<link>` tags.

### Correct Answers
- [0] Use `hook_page_attachments_alter()` to remove or replace the library based on the current route.

### Explanation
`hook_page_attachments_alter()` allows runtime adjustments of attachments, enabling route-specific overrides without editing source definitions.


### Question 103

**Domain:** Theming Concepts

While extending Claro for admin theming, you need to inject additional JavaScript when a specific field widget renders. Where should you add the attachment?

### Options
- Implement `hook_form_FORM_ID_alter()` and attach the library to the widget form element.
- Edit the field widget template and inline the script.
- Load the script globally in the admin theme.
- Add the script to `core.libraries.yml`.

### Correct Answers
- [0] Implement `hook_form_FORM_ID_alter()` and attach the library to the widget form element.

### Explanation
Attaching assets in form alters scopes them to the widget, preventing global load while ensuring the behavior is available when needed.


### Question 104

**Domain:** Theming Concepts

You must bundle theme JavaScript with ES modules while supporting Drupal behaviors. How do you expose the compiled file?

### Options
- Set `type: module` in `aurora.libraries.yml` for the compiled JS file.
- Convert the module to IIFE syntax manually.
- Load the module via `<script>` in Twig outside the library system.
- Inline the module contents directly in Twig.

### Correct Answers
- [0] Set `type: module` in `aurora.libraries.yml` for the compiled JS file.

### Explanation
Specifying `type: module` tells Drupal to output the script with ES module semantics, allowing modern bundling while respecting library order.


### Question 105

**Domain:** Theming Concepts

Your subtheme wants to reuse component templates from a parent theme's Single Directory Components library. How can you achieve this cleanly?

### Options
- Declare the same `component-libraries` entry in the subtheme pointing to the parent theme path using a relative reference.
- Copy all component directories into the subtheme.
- Use `hook_theme_registry_alter()` to inject include paths manually.
- Symlink the parent component folder into the subtheme.

### Correct Answers
- [0] Declare the same `component-libraries` entry in the subtheme pointing to the parent theme path using a relative reference.

### Explanation
Component libraries can reference external directories, letting subthemes share components without duplication.


### Question 106

**Domain:** Theming Concepts

While debugging a template override you want to confirm which theme suggestions Drupal is currently providing—all from core tooling with no build pipeline required. Which Drush command gives you that information?

### Options
- `drush theme:debug node`
- `drush cache:rebuild theme-registry`
- `drush pm:list --type=theme`
- `drush config:status`

### Correct Answers
- [0] `drush theme:debug node`

### Explanation
`drush theme:debug` (alias `td`) lists available themes, theme engines, and template suggestions for a given hook such as `node`. Cache rebuilds, extension listings, or config status reports don't expose the suggestion map you need for theming.


### Question 107

**Domain:** Theming Concepts

The project uses the UI Styles module to provide block-level class selections. Designers request a new "shadow" style. What steps add it?

### Options
- Update `aurora.ui_styles.yml` with a `shadow` entry and define its classes.
- Add the class to `aurora.libraries.yml` and expect UI Styles to discover it.
- Hardcode the class in block templates.
- Instruct editors to type `shadow` into a text field.

### Correct Answers
- [0] Update `aurora.ui_styles.yml` with a `shadow` entry and define its classes.

### Explanation
UI Styles reads from its YAML definition. Adding entries there exposes selectable classes to editors.


### Question 108

**Domain:** Theming Concepts

When exporting configuration, you notice theme color settings are not included. How can you make them part of deployment?

### Options
- Ensure the theme settings form stores values in configuration and export the related config using `drush cex`.
- Copy the settings directly into `settings.php`.
- Save theme settings in the database only and rely on manual updates.
- Rebuild theme settings on every deploy by running a script.

### Correct Answers
- [0] Ensure the theme settings form stores values in configuration and export the related config using `drush cex`.

### Explanation
Drupal stores theme settings in configuration; exporting them ensures consistent deployments. Hardcoding in `settings.php` reduces flexibility.


### Question 109

**Domain:** Theming Concepts

You must expose additional tokens to Twig, such as a sanitized site slogan. Which hook lets you pass data to all templates?

### Options
- Use `hook_preprocess_html()` to add the variable to `$variables`.
- Modify Twig directly to read from global PHP variables.
- Insert the value into `drupalSettings` and expect Twig to read it server-side.
- Override Twig with a custom loader.

### Correct Answers
- [0] Use `hook_preprocess_html()` to add the variable to `$variables`.

### Explanation
Preprocess hooks populate template variables, making data available consistently without hacking Twig internals.


### Question 110

**Domain:** Theming Concepts

Your theme uses CSS logical properties. How do you ensure fallback support for legacy browsers needing physical properties?

### Options
- Configure PostCSS Logical plugin to convert logical properties to physical equivalents based on writing mode.
- Maintain two separate CSS files with logical and physical properties.
- Avoid logical properties entirely.
- Use JavaScript to map properties at runtime.

### Correct Answers
- [0] Configure PostCSS Logical plugin to convert logical properties to physical equivalents based on writing mode.

### Explanation
The PostCSS plugin ensures compatibility by generating fallback physical properties, keeping source CSS modern and clean.


### Question 111

**Domain:** Theming Concepts

Designers request a custom icon font. To keep performance acceptable, what is the best way to load it?

### Options
- Use a subsetted WOFF2 file referenced via `@font-face` with `font-display: swap`.
- Load the entire original font via base64 embed.
- Use legacy EOT files for compatibility.
- Convert icons to PNG sprites.

### Correct Answers
- [0] Use a subsetted WOFF2 file referenced via `@font-face` with `font-display: swap`.

### Explanation
Subsetting reduces file size while WOFF2 and `font-display` ensure quick rendering and fallbacks.


### Question 112

**Domain:** Theming Concepts

Your team needs to ensure theme libraries work with the Asset Injector module. What should you avoid to keep compatibility?

### Options
- Avoid inline `<script>` tags with Drupal behaviors; rely on libraries.
- Use `hook_page_top()` to output inline CSS.
- Attach CSS via `drupalSettings`.
- Add libraries in `hook_init()`.

### Correct Answers
- [0] Avoid inline `<script>` tags with Drupal behaviors; rely on libraries.

### Explanation
Asset Injector relies on proper library usage; inline scripts bypass dependency tracking and make debugging harder.


### Question 113

**Domain:** Theming Concepts

You want to expose a `--brand-color` CSS variable to editors while constraining input. Where do you register the schema for validation?

### Options
- Define the schema in `config/schema/aurora.schema.yml` and reference the variable in theme settings.
- Add validation inside Twig templates.
- Write a custom theme setting form with no schema.
- Store the color in a custom table.

### Correct Answers
- [0] Define the schema in `config/schema/aurora.schema.yml` and reference the variable in theme settings.

### Explanation
Configuration schema validates theme settings and ensures exported config stays consistent. Without it, settings might not serialize correctly.


### Question 114

**Domain:** Theming Concepts

You have updated several Twig templates and library definitions, and you need Drupal to rebuild the theme registry and caches before reviewing the changes in a browser. Which core CLI command should you run?

### Options
- `drush cache:rebuild`
- `drush theme:debug`
- `drush config:export`
- `drush state:get system.theme`

### Correct Answers
- [0] `drush cache:rebuild`

### Explanation
`drush cache:rebuild` (alias `drush cr`) clears and rebuilds Drupal's caches, including the theme registry, so new Twig templates and libraries take effect. Theme debugging, exporting configuration, or reading state do not refresh cached template data.


### Question 115

**Domain:** Theming Concepts

You're building a theme for a multisite installation. How do you share theme configuration (like style settings) across sites without repeating work?

### Options
- Export theme config into a custom install profile or shared module so each site imports it on install.
- Copy configuration values manually via the UI.
- Hardcode values in Twig templates.
- Use environment variables.

### Correct Answers
- [0] Export theme config into a custom install profile or shared module so each site imports it on install.

### Explanation
Sharing configuration through code ensures consistency and repeatability across sites, aligning with Drupal deployment workflows.


### Question 116

**Domain:** Theming Concepts

Design wants to use CSS nesting in source files. What setup keeps output compatible?

### Options
- Enable the PostCSS Nesting plugin (or `postcss-preset-env` stage 1) in `postcss.config.js` to transform nested rules.
- Write nested CSS and rely on browsers to interpret it natively.
- Convert all CSS to Sass.
- Inline nested CSS in Twig.

### Correct Answers
- [0] Enable the PostCSS Nesting plugin (or `postcss-preset-env` stage 1) in `postcss.config.js` to transform nested rules.

### Explanation
PostCSS can compile nesting to regular CSS, ensuring compatibility with browsers that lack native support.


### Question 117

**Domain:** Theming Concepts

A front-end module needs to register a custom toolbar item with theme-specific icons. Where should the icon assets live?

### Options
- Bundle them in the theme and expose a library that the module depends on.
- Place them in `core/misc` for global availability.
- Store them in the module and expect the theme to discover them automatically.
- Inline the SVGs via PHP echoes.

### Correct Answers
- [0] Bundle them in the theme and expose a library that the module depends on.

### Explanation
Themes can provide assets via libraries that modules depend on, keeping responsibilities clear while leveraging dependency management.


### Question 118

**Domain:** Theming Concepts

You must ensure all Twig templates follow coding standards. Which tool helps automate linting during development?

### Options
- Add `twigcs` to the build process and run it via npm scripts or CI.
- Rely on manual reviews.
- Use ESLint to parse Twig.
- Ignore Twig linting.

### Correct Answers
- [0] Add `twigcs` to the build process and run it via npm scripts or CI.

### Explanation
TwigCS enforces template standards automatically, preventing drift without manual policing.


### Question 119

**Domain:** Theming Concepts

Design introduces a dark mode. How do you structure theme assets so toggling modes doesn't reload the page?

### Options
- Use CSS custom properties and add a `dark` class to `<html>` that overrides values in the same stylesheet.
- Load a separate dark-mode stylesheet on toggle.
- Replace the theme entirely via AJAX.
- Inject inline CSS through JavaScript each time.

### Correct Answers
- [0] Use CSS custom properties and add a `dark` class to `<html>` that overrides values in the same stylesheet.

### Explanation
CSS variables allow instant theming without reloading or swapping stylesheets, keeping performance optimal.


### Question 120

**Domain:** Theming Concepts

Editors request a print stylesheet. How should you deliver it in the theme?

### Options
- Add a dedicated library with `media: print` and attach it in `html.html.twig`.
- Inline print styles in each template.
- Use JavaScript to detect `window.print` and inject styles.
- Avoid print styles; modern browsers handle it.

### Correct Answers
- [0] Add a dedicated library with `media: print` and attach it in `html.html.twig`.

### Explanation
Print-specific libraries keep styles modular and load only for print contexts. Inline styles are harder to manage.


### Question 121

**Domain:** Theming Concepts

You are integrating Storybook with Drupal components. How do you ensure Twig templates render consistently in Storybook and Drupal?

### Options
- Use a shared build step (such as Twig loaders for Storybook) that imports the same Twig files for both environments.
- Rewrite components in React for Storybook.
- Export HTML from Drupal and paste it into Storybook stories manually.
- Use PHP render arrays inside Storybook.

### Correct Answers
- [0] Use a shared build step (such as Twig loaders for Storybook) that imports the same Twig files for both environments.

### Explanation
Sharing Twig templates via loaders keeps parity between Drupal rendering and Storybook previews, reducing drift.


### Question 122

**Domain:** Theming Concepts

The project demands CSS variables be available to JavaScript for dynamic theming. How can you read them efficiently?

### Options
- Use `getComputedStyle(document.documentElement).getPropertyValue('--var-name')` in JavaScript.
- Hardcode the values in JS to match CSS.
- Store variables in `drupalSettings` and ignore CSS.
- Query the DOM for style tags and parse manually.

### Correct Answers
- [0] Use `getComputedStyle(document.documentElement).getPropertyValue('--var-name')` in JavaScript.

### Explanation
`getComputedStyle` accesses runtime variable values, ensuring JS remains in sync with CSS without duplication.


### Question 123

**Domain:** Theming Concepts

You want to ship a custom error page layout. Which template override targets HTTP 500 pages while leaving others untouched?

### Options
- `page--500.html.twig`
- `page--status-500.html.twig`
- `page--error.html.twig`
- `page--exception.html.twig`

### Correct Answers
- [0] `page--500.html.twig`

### Explanation
Drupal looks for `page--STATUSCODE` templates when rendering error responses, letting you customize the specific page.


### Question 124

**Domain:** Theming Concepts

You want to add a small JavaScript enhancement to the existing Olivero `core/drupal` library without duplicating the entire definition. How should you register it in your subtheme?

### Options
- Use `libraries-extend` in the subtheme's `.info.yml` to append your library to `core/drupal`.
- Copy the `core/drupal` library into your theme's `libraries.yml` and edit it directly.
- Add a `<script>` tag in `html.html.twig` after the core library loads.
- Attach the script with `attach_library()` inside every template.

### Correct Answers
- [0] Use `libraries-extend` in the subtheme's `.info.yml` to append your library to `core/drupal`.

### Explanation
`libraries-extend` lets themes augment existing libraries while keeping core definitions untouched. Duplicating or hardcoding scripts risks maintenance issues and inconsistent loading.


### Question 125

**Domain:** Theming Concepts

Olivero ships a carousel stylesheet that conflicts with your custom layout. You want to stop loading just that file in your subtheme while keeping the rest of the base assets. What is the recommended approach?

### Options
- Declare a `libraries-override` entry in your `.info.yml` that replaces the specific CSS file with `false`.
- Delete the CSS file from the core theme so Drupal can't find it.
- Add `display: none` rules in your theme to neutralize the styles.
- Remove Olivero as the base theme so none of its assets load.

### Correct Answers
- [0] Declare a `libraries-override` entry in your `.info.yml` that replaces the specific CSS file with `false`.

### Explanation
`libraries-override` cleanly removes individual asset entries from inherited libraries. Deleting core files or unscoped overrides makes updates fragile, and dropping the base theme eliminates desired assets.


### Question 126

**Domain:** Theming Concepts

You added a theme setting that lets editors choose an accent color. A front-end script needs that value on every page load. How should you expose it?

### Options
- In `hook_preprocess_html()`, read the theme setting and set it on `drupalSettings.myTheme.accentColor`.
- Echo the value directly inside `html.html.twig` as a global JavaScript variable.
- Create a custom REST endpoint that the script fetches on load.
- Store the value in `localStorage` during configuration save.

### Correct Answers
- [0] In `hook_preprocess_html()`, read the theme setting and set it on `drupalSettings.myTheme.accentColor`.

### Explanation
Preprocess functions run before rendering and can safely expose configuration through `drupalSettings`, which is cached and delivered with the page. Inline globals and extra network calls are brittle, and client-side storage doesn't help first paint.


### Question 127

**Domain:** Theming Concepts

Your theme stores reusable Twig partials in `/themes/custom/skyline/components/partials`. You want to reference them via `@skyline/partials/card.twig` without relative paths. What do you need?

### Options
- Define a Twig namespace in `skyline.services.yml` under `twig.loader` pointing to the component directory.
- Use `component-libraries` in `skyline.info.yml`.
- Add the path to `settings.php` under `$settings['twig_tweak']`.
- Register the directory via `hook_theme()`.

### Correct Answers
- [0] Define a Twig namespace in `skyline.services.yml` under `twig.loader` pointing to the component directory.

### Explanation
Themes can declare Twig namespaces via service overrides so templates are addressable with the `@namespace` syntax. Component libraries control SDC discovery, not Twig loaders, and settings.php doesn't configure namespaces.


### Question 128

**Domain:** Theming Concepts

The design system splits Single Directory Components into `components/base` and `components/patterns`. How do you expose both directories to Drupal?

### Options
- Add multiple entries under `component-libraries` in the theme's `.info.yml`, each mapping a library name to a directory.
- List the directories under `libraries:` in `.info.yml`.
- Import the directories in `libraries.yml` with a custom key.
- Symlink the directories into `templates/`.

### Correct Answers
- [0] Add multiple entries under `component-libraries` in the theme's `.info.yml`, each mapping a library name to a directory.

### Explanation
Single Directory Components rely on the `component-libraries` section where each library points to a folder. Libraries.yml references assets, not directories, and symlinks do not register components.


### Question 129

**Domain:** Theming Concepts

Editors using CKEditor 5 want the back office preview to match front-end typography. Where do you declare theme stylesheets so the editor loads them?

### Options
- Add the CSS files to the `ckeditor_stylesheets` array in your theme's `.info.yml`.
- Attach the stylesheet with `attach_library()` inside `node--form.html.twig`.
- Place the stylesheet in `libraries.yml` under the global library.
- Load the stylesheet via JavaScript inside the editor.

### Correct Answers
- [0] Add the CSS files to the `ckeditor_stylesheets` array in your theme's `.info.yml`.

### Explanation
The `ckeditor_stylesheets` entry ensures CKEditor loads additional theme CSS inside the editing iframe. Attaching libraries on forms or injecting CSS with JS is unreliable.


### Question 130

**Domain:** Theming Concepts

You output the text "Primary navigation" from `THEME.theme`, but translators need different wording depending on context. How can you make the string translation-friendly?

### Options
- Wrap it in `t('Primary navigation', [], ['context' => 'Toolbar label'])`.
- Use PHP's `gettext()` directly.
- Add the text to a custom `.po` file without changing code.
- Hardcode the English text and rely on JavaScript to replace it.

### Correct Answers
- [0] Wrap it in `t('Primary navigation', [], ['context' => 'Toolbar label'])`.

### Explanation
Providing context through the `t()` function helps translators distinguish identical strings. Gettext alone bypasses Drupal's translation system, and manual replacements are brittle.


### Question 131

**Domain:** Theming Concepts

A contrib module loads an inline CSS reset that conflicts with your design. You can't change the module. How do you disable the file from your theme?

### Options
- Implement `hook_css_alter()` in `THEME.theme` and unset the specific stylesheet path.
- Create a duplicate of the module library in your theme and edit it.
- Override the file with an empty stylesheet on the filesystem.
- Use JavaScript to remove the inserted `<link>`.

### Correct Answers
- [0] Implement `hook_css_alter()` in `THEME.theme` and unset the specific stylesheet path.

### Explanation
`hook_css_alter()` lets themes remove CSS assets loaded by modules when overrides are not possible. Duplicating libraries or manipulating DOM nodes is fragile.


### Question 132

**Domain:** Theming Concepts

Your theme's global styling library includes compiled CSS and JS bundles. What ensures the assets load on every page?

### Options
- List the library under `libraries:` in the theme's `.info.yml`.
- Attach the library manually from each template with `attach_library()`.
- Add it to `libraries-override` in `.info.yml`.
- Include the files via `@import` in CSS.

### Correct Answers
- [0] List the library under `libraries:` in the theme's `.info.yml`.

### Explanation
Declaring libraries under the `libraries` key tells Drupal to attach them globally. Manual attachments are error-prone, and overrides are for altering existing libraries.


### Question 133

**Domain:** Theming Concepts

A hero animation should load only on the front page. What is the cleanest way to attach the theme library conditionally?

### Options
- Use `hook_page_attachments()` in the theme to check `\Drupal::service('path.matcher')->isFrontPage()` and attach the library.
- Add logic inside `page.html.twig` to print a script tag when `is_front` is true.
- Create a custom module to attach the library.
- Let the library load everywhere and hide the markup with CSS.

### Correct Answers
- [0] Use `hook_page_attachments()` in the theme to check `\Drupal::service('path.matcher')->isFrontPage()` and attach the library.

### Explanation
`hook_page_attachments()` lets themes conditionally attach assets at render time. Embedding scripts in Twig or loading assets everywhere wastes bandwidth and hurts caching.


### Question 134

**Domain:** Theming Concepts

A Single Directory Component needs editors to pass a button style (primary or secondary). Where do you declare the allowed values so the component schema is validated?

### Options
- In the component's `.component.yml` file under `props`, define an enum for the style attribute.
- Add the allowed values to `THEME.info.yml`.
- Create a theme setting and reuse it.
- Hardcode the options in Twig with `if` statements.

### Correct Answers
- [0] In the component's `.component.yml` file under `props`, define an enum for the style attribute.

### Explanation
Single Directory Components store property definitions and validation in the accompanying `.component.yml` file. Info.yml and theme settings do not validate component props.


### Question 135

**Domain:** Theming Concepts

You created a custom theme with regions for header, content, and footer. When site builders add new blocks, you want them to land in the header by default. How do you configure this?

### Options
- Set `default_region: header` in the theme's `.info.yml`.
- Add the default region to `settings.php`.
- Override `block_form` to preselect the region.
- Attach JavaScript that moves blocks after placement.

### Correct Answers
- [0] Set `default_region: header` in the theme's `.info.yml`.

### Explanation
The `default_region` key in `.info.yml` defines where new blocks are placed by default. PHP or JavaScript overrides are unnecessary.


### Question 136

**Domain:** Theming Concepts

The design requires hiding the site slogan control from theme settings because the header no longer uses it. What is the correct configuration?

### Options
- Set `features:
  - logo
  - favicon` and omit `name` and `slogan` in the theme's `.info.yml`.
- Delete the slogan field from `system.site` configuration.
- Override the theme settings form and remove the field with JavaScript.
- Ignore it; Drupal removes unused fields automatically.

### Correct Answers
- [0] Set `features:
  - logo
  - favicon` and omit `name` and `slogan` in the theme's `.info.yml`.

### Explanation
The `features` key controls which standard theme settings (logo, name, slogan, favicon) are exposed. Removing slogan from the list hides it without affecting other themes.


### Question 137

**Domain:** Theming Concepts

You need to add BEM modifiers like `menu__item--depth-2` to primary navigation links from your theme. Where should you implement the change?

### Options
- In `hook_preprocess_menu()`, adjust each item's `attributes` to add the depth-based class.
- Copy `menu.html.twig` into the theme and hardcode new markup.
- Edit the menu in the database to include the class.
- Use JavaScript to append classes after render.

### Correct Answers
- [0] In `hook_preprocess_menu()`, adjust each item's `attributes` to add the depth-based class.

### Explanation
Menu preprocess hooks let the theme modify render array attributes before Twig renders the menu, keeping markup clean and ensuring classes stay in sync with depth.


### Question 138

**Domain:** Theming Concepts

Your theme's hero library should preload its critical CSS. How do you declare this in `THEME.libraries.yml`?

### Options
- Set `attributes:
    rel: preload
    as: style` on the CSS file entry.
- Add `preload: true` next to the CSS file path.
- Inline the CSS in Twig with a `<style>` tag.
- Add a `<link rel="preload">` tag manually in `html.html.twig`.

### Correct Answers
- [0] Set `attributes:
    rel: preload
    as: style` on the CSS file entry.

### Explanation
Library asset entries support an `attributes` map for each file, allowing you to mark stylesheets as preload while keeping Drupal's asset management intact.


### Question 139

**Domain:** Theming Concepts

Your theme bundle includes a preview image stored at `/themes/custom/skyline/screenshot.png`. How do you display it on the Appearance page?

### Options
- Reference it with `screenshot: screenshot.png` in `skyline.info.yml`.
- Upload the image through theme settings.
- Place the image in `/sites/default/files` and name it after the theme.
- Override the Appearance controller.

### Correct Answers
- [0] Reference it with `screenshot: screenshot.png` in `skyline.info.yml`.

### Explanation
Themes declare their preview image in the `screenshot` key of `.info.yml`, relative to the theme directory.


### Question 140

**Domain:** Theming Concepts

You maintain a corporate base theme and now need to launch a campaign theme that reuses the base assets but tweaks colors. How should you configure the campaign theme?

### Options
- Declare `base theme: corporate_base` in the campaign theme's `.info.yml` and override only the necessary libraries and templates.
- Copy the entire base theme into a new folder and edit the files.
- Use Olivero as the base and import corporate assets manually.
- Create a module to swap styles after render.

### Correct Answers
- [0] Declare `base theme: corporate_base` in the campaign theme's `.info.yml` and override only the necessary libraries and templates.

### Explanation
Subthemes inherit templates, libraries, and regions from their base theme, minimizing duplication. Copying files breaks the update chain, and modules are not needed for theming.


### Question 141

**Domain:** Theming Concepts

Your theme needs to serve flipped CSS for RTL languages. How do you declare the alternate file in a Drupal library?

### Options
- Provide an `rtl:` entry next to the CSS file in `THEME.libraries.yml`.
- Duplicate the library and load it when `$language->isRtl()`.
- Hardcode `[dir="rtl"]` selectors in CSS.
- Use JavaScript to swap stylesheets.

### Correct Answers
- [0] Provide an `rtl:` entry next to the CSS file in `THEME.libraries.yml`.

### Explanation
Drupal libraries support RTL variants with the `rtl:` key, allowing automatic swapping when rendering RTL interfaces. Other approaches duplicate logic or rely on fragile scripting.


### Question 142

**Domain:** Theming Concepts

You want to add a `layout__region--empty` class whenever a region has no blocks so CSS can collapse it gracefully. What is the best approach?

### Options
- Implement `hook_preprocess_region()` and append the modifier when `empty($variables['content'])`.
- Set a conditional in `page.html.twig` and echo the class by hand.
- Update each block template to print whether the region is empty.
- Use JavaScript after render to check for child nodes.

### Correct Answers
- [0] Implement `hook_preprocess_region()` and append the modifier when `empty($variables['content'])`.

### Explanation
Region preprocess hooks allow themes to adjust region attributes centrally based on the render array. Twig conditionals or JavaScript scatter the logic and duplicate work.


### Question 143

**Domain:** Theming Concepts

You are building a foundation theme that other teams will subtheme but should not appear as a selectable option in the Appearance UI. How do you hide it?

### Options
- Add `hidden: true` to the foundation theme's `.info.yml`.
- Remove the screenshot from the theme folder.
- Set `base theme: stable9`.
- Disable the Appearance module.

### Correct Answers
- [0] Add `hidden: true` to the foundation theme's `.info.yml`.

### Explanation
The `hidden` flag keeps base themes out of the theme listing while still allowing subthemes to inherit from them.


### Question 144

**Domain:** Theming Concepts

Your layout should add a `theme--has-sidebar` class to the `<body>` tag whenever the sidebar region contains blocks. Where do you add this logic?

### Options
- Implement `hook_preprocess_html()` and check `$variables['page']['sidebar_first']`.
- Modify `page.html.twig` to print the class manually.
- Update every block template to append the class.
- Add JavaScript that checks the DOM on load.

### Correct Answers
- [0] Implement `hook_preprocess_html()` and check `$variables['page']['sidebar_first']`.

### Explanation
`hook_preprocess_html()` runs before `html.html.twig`, giving the theme a central place to add body classes based on region content. Editing each template or using JavaScript is redundant.


### Question 145

**Domain:** Theming Concepts

A theme library adds interactive tabs written as an ES module that relies on `Drupal` and `once()`. How do you guarantee those globals exist when your script runs?

### Options
- Declare `dependencies:
  - core/drupal
  - core/once` in the library definition.
- Load the scripts manually with `<script>` tags before your module.
- Import them from a CDN at runtime.
- Wrap your code in `window.addEventListener('load')`.

### Correct Answers
- [0] Declare `dependencies:
  - core/drupal
  - core/once` in the library definition.

### Explanation
Listing dependencies ensures Drupal loads required libraries before your asset, maintaining order and avoiding race conditions. Manual script tags or load events do not guarantee availability.


### Question 146

**Domain:** Theming Concepts

A contrib module loads an inline CSS reset that conflicts with your design. You can't change the module. How do you disable the file from your theme?

### Options
- Implement `hook_css_alter()` in `THEME.theme` and unset the specific stylesheet path.
- Create a duplicate of the module library in your theme and edit it.
- Override the file with an empty stylesheet on the filesystem.
- Use JavaScript to remove the inserted `<link>`.

### Correct Answers
- [0] Implement `hook_css_alter()` in `THEME.theme` and unset the specific stylesheet path.

### Explanation
`hook_css_alter()` lets themes remove CSS assets loaded by modules when overrides are not possible. Duplicating libraries or manipulating DOM nodes is fragile.


### Question 147

**Domain:** Theming Concepts

Your theme's global styling library includes compiled CSS and JS bundles. What ensures the assets load on every page?

### Options
- List the library under `libraries:` in the theme's `.info.yml`.
- Attach the library manually from each template with `attach_library()`.
- Add it to `libraries-override` in `.info.yml`.
- Include the files via `@import` in CSS.

### Correct Answers
- [0] List the library under `libraries:` in the theme's `.info.yml`.

### Explanation
Declaring libraries under the `libraries` key tells Drupal to attach them globally. Manual attachments are error-prone, and overrides are for altering existing libraries.


### Question 148

**Domain:** Theming Concepts

Your theme's hero library should preload its critical CSS. How do you declare this in `THEME.libraries.yml`?

### Options
- Set `attributes:
    rel: preload
    as: style` on the CSS file entry.
- Add `preload: true` next to the CSS file path.
- Inline the CSS in Twig with a `<style>` tag.
- Add a `<link rel="preload">` tag manually in `html.html.twig`.

### Correct Answers
- [0] Set `attributes:
    rel: preload
    as: style` on the CSS file entry.

### Explanation
Library asset entries support an `attributes` map for each file, allowing you to mark stylesheets as preload while keeping Drupal's asset management intact.


### Question 149

**Domain:** Theming Concepts

A typography toggle is stored as a theme setting named `font_stack`. How should you read the value in PHP so you can pass it to Twig?

### Options
- Call `theme_get_setting('font_stack', 'your_theme')` inside a preprocess function.
- Read the value directly from the configuration table with SQL.
- Store the value in `drupalSettings` manually after each save.
- Expect Twig to read the setting automatically without PHP.

### Correct Answers
- [0] Call `theme_get_setting('font_stack', 'your_theme')` inside a preprocess function.

### Explanation
`theme_get_setting()` fetches theme settings with runtime overrides. Preprocess functions can then pass the value to Twig. Querying the database or relying on Twig alone is brittle.


### Question 150

**Domain:** Theming Concepts

You want every image rendered by your theme to lazy-load by default. Where should you add the `loading="lazy"` attribute?

### Options
- Implement `hook_preprocess_image()` in `THEME.theme` and set `#attributes['loading'] = 'lazy'` when appropriate.
- Edit every image field template and hardcode the attribute.
- Modify core's ImageFormatter plugin.
- Add JavaScript that sets the attribute on load.

### Correct Answers
- [0] Implement `hook_preprocess_image()` in `THEME.theme` and set `#attributes['loading'] = 'lazy'` when appropriate.

### Explanation
Image preprocess hooks give the theme a central place to adjust attributes on all images. Editing every template or relying on JavaScript duplicates effort.


## Templates and Preprocess Functions

### Question 151

**Domain:** Templates and Preprocess Functions

You must expose contextual data to a paragraph template, including the parent node title. Which preprocess hook is the most appropriate place to add it?

### Options
- `hook_preprocess_paragraph()`
- `hook_preprocess_node()`
- `hook_preprocess_html()`
- `hook_theme_suggestions_paragraph_alter()`

### Correct Answers
- [0] `hook_preprocess_paragraph()`

### Explanation
The paragraph preprocess hook runs for each paragraph render array, letting you append the parent node title to `$variables` before Twig renders.


### Question 152

**Domain:** Templates and Preprocess Functions

Your Twig template must avoid blank markup by skipping empty render arrays. What is the idiomatic Twig condition?

### Options
- `{% if content.field_summary is not empty %}`
- `{% if content.field_summary %}`
- `{% if content.field_summary|length > 0 %}`
- `{% if content.field_summary|render %}`

### Correct Answers
- [0] `{% if content.field_summary is not empty %}`

### Explanation
Twig's `is not empty` safely checks for renderable arrays without triggering rendering, unlike filters that might cause unwanted output.


### Question 153

**Domain:** Templates and Preprocess Functions

You're debugging template suggestions for a block. Which configuration enables Twig debug output locally?

### Options
- Set `twig.config: { debug: true, auto_reload: true }` in `services.local.yml` and clear caches.
- Toggle debug in production `settings.php`.
- Add `{# debug #}` comments in Twig.
- Use `drush twig:debug` on every request.

### Correct Answers
- [0] Set `twig.config: { debug: true, auto_reload: true }` in `services.local.yml` and clear caches.

### Explanation
Twig debugging is controlled through service configuration; enabling it locally reveals template suggestions and auto reload behavior.


### Question 154

**Domain:** Templates and Preprocess Functions

While customizing `node--article.html.twig`, you must include the parent template's main content block. What Twig syntax accomplishes this?

### Options
- `{% extends 'node.html.twig' %}` and `{% block content %}{{ parent() }}{% endblock %}`
- `{% include 'node.html.twig' %}` inside the template.
- `{% embed 'node.html.twig' %}` without blocks.
- Copy the markup from the parent into the child template.

### Correct Answers
- [0] `{% extends 'node.html.twig' %}` and `{% block content %}{{ parent() }}{% endblock %}`

### Explanation
Extending and calling `parent()` within the block reuses base markup while allowing overrides.


### Question 155

**Domain:** Templates and Preprocess Functions

You need to preprocess data for a view row template `views-view-fields--articles--page.html.twig`. Which hook should you implement?

### Options
- `hook_preprocess_views_view_fields()`
- `hook_preprocess_views_view()`
- `hook_preprocess_page()`
- `hook_preprocess_block()`

### Correct Answers
- [0] `hook_preprocess_views_view_fields()`

### Explanation
`hook_preprocess_views_view_fields()` prepares variables for views row field templates, matching the naming convention of the Twig file.


### Question 156

**Domain:** Templates and Preprocess Functions

The design team wants to display a component only when a field has values. How do you check this in Twig without rendering the field twice?

### Options
- `{% if content.field_tags|render %}`
- `{% if content.field_tags['#items'] %}`
- `{% if content.field_tags is not empty %}`
- `{% if node.field_tags.value %}`

### Correct Answers
- [2] `{% if content.field_tags is not empty %}`

### Explanation
`is not empty` uses the render array's metadata to confirm presence without invoking the render pipeline multiple times.


### Question 157

**Domain:** Templates and Preprocess Functions

You must add a custom template suggestion when a node has a particular taxonomy term. Which hook provides this flexibility?

### Options
- `hook_theme_suggestions_node_alter()`
- `hook_preprocess_node()`
- `hook_theme_registry_alter()`
- `hook_entity_view_alter()`

### Correct Answers
- [0] `hook_theme_suggestions_node_alter()`

### Explanation
Theme suggestion alter hooks let you append new template names based on runtime conditions like taxonomy terms.


### Question 158

**Domain:** Templates and Preprocess Functions

In Twig, you need to loop through a render array's items and output the plain text values. Which filter ensures safe output?

### Options
- `{{ item.content|render|striptags }}`
- `{{ item.content['#text'] }}`
- `{{ item.content['#markup']|raw }}`
- `{{ item.content|render }}`

### Correct Answers
- [0] `{{ item.content|render|striptags }}`

### Explanation
Rendering then stripping tags outputs sanitized text. Accessing internal keys or using `raw` risks injecting unsafe markup.


### Question 159

**Domain:** Templates and Preprocess Functions

You want to pass additional attributes to a field template. Which PHP function helps merge them cleanly?

### Options
- Use `$variables['attributes']->addClass('new-class')` inside `hook_preprocess_field()`.
- Append strings directly: `$variables['attributes'] .= ' new-class'`.
- Modify the render array with `#attributes` in Twig.
- Add attributes in JavaScript post-render.

### Correct Answers
- [0] Use `$variables['attributes']->addClass('new-class')` inside `hook_preprocess_field()`.

### Explanation
Attribute objects manage class lists safely, preventing duplicates and ensuring proper escaping.


### Question 160

**Domain:** Templates and Preprocess Functions

Your template requires a default placeholder image when a media field is empty. Where should you set the fallback path?

### Options
- In `hook_preprocess_field()` examine the field items and set `$variables['placeholder']`.
- Hardcode the path inside Twig with an `else` condition.
- Override the entity view builder.
- Use JavaScript to insert placeholders after render.

### Correct Answers
- [0] In `hook_preprocess_field()` examine the field items and set `$variables['placeholder']`.

### Explanation
Preprocess logic can supply fallback values to Twig, keeping presentation logic clean and consistent.


### Question 161

**Domain:** Templates and Preprocess Functions

You want to add a Twig filter that formats phone numbers. How do you register it in a theme?

### Options
- Implement `hook_theme_suggestions_alter()`.
- Create a service tagged with `twig.extension` and define the filter in PHP.
- Declare the filter in `twig.yaml`.
- Add a global function in `settings.php`.

### Correct Answers
- [0] Create a service tagged with `twig.extension` and define the filter in PHP.

### Explanation
Twig extensions are registered via services; themes can ship lightweight modules or use theme-level service files to expose new filters.


### Question 162

**Domain:** Templates and Preprocess Functions

In a preprocess function you need to check if you are on a specific view mode. Which reliable property should you inspect?

### Options
- `$variables['elements']['#view_mode']`
- `$variables['node']->view_mode`
- `
  \Drupal::routeMatch()->getParameter('view_mode')`
- `$variables['theme_hook_original']`

### Correct Answers
- [0] `$variables['elements']['#view_mode']`

### Explanation
Render array metadata contains the active view mode, making it accessible during preprocessing without routing assumptions.


### Question 163

**Domain:** Templates and Preprocess Functions

You are building a modal component that should reuse markup via Twig macros. How do you import and call a macro?

### Options
- `{% import 'components/modal.twig' as modal %}` and `{{ modal.render(config) }}`
- `{% include 'components/modal.twig' %}`
- `{% extends 'components/modal.twig' %}`
- `{% use 'components/modal.twig' %}`

### Correct Answers
- [0] `{% import 'components/modal.twig' as modal %}` and `{{ modal.render(config) }}`

### Explanation
`import` loads macro definitions under an alias, allowing reusable render functions inside Twig.


### Question 164

**Domain:** Templates and Preprocess Functions

The design system sets BEM classes on templates. How do you add multiple modifiers safely in Twig?

### Options
- `{{ attributes.addClass(['component', modifier]) }}`
- `{{ attributes.class = 'component ' ~ modifier }}`
- `{{ attributes['class'][] = modifier }}`
- `{{ attributes.addClass('component ' ~ modifier) }}`

### Correct Answers
- [0] `{{ attributes.addClass(['component', modifier]) }}`

### Explanation
`addClass` accepts arrays and handles whitespace automatically. Direct concatenation risks double spaces or missing classes.


### Question 165

**Domain:** Templates and Preprocess Functions

You must output a custom data attribute on a DOM element in Twig. Which method ensures proper escaping?

### Options
- `{{ attributes.setAttribute('data-id', value) }}` before rendering the element.
- `{{ attributes['data-id'] = value }}` inside Twig.
- Concatenate the attribute manually: `data-id="{{ value }}"`.
- Add the attribute in JavaScript.

### Correct Answers
- [0] `{{ attributes.setAttribute('data-id', value) }}` before rendering the element.

### Explanation
Using attribute methods keeps escaping consistent and merges with existing attribute arrays cleanly.


### Question 166

**Domain:** Templates and Preprocess Functions

You notice duplicate markup when a region has no blocks. How do you conditionally render the region in Twig?

### Options
- `{% if page.sidebar_first %}...{% endif %}`
- `{% if page.sidebar_first is not empty %}...{% endif %}`
- `{% if page.sidebar_first|render %}...{% endif %}`
- `{% if page.sidebar_first|length %}...{% endif %}`

### Correct Answers
- [0] `{% if page.sidebar_first %}...{% endif %}`

### Explanation
Region variables evaluate to empty when unused; a simple truthy check prevents extra markup without triggering rendering.


### Question 167

**Domain:** Templates and Preprocess Functions

You must inject a library when a view row uses a specific template suggestion. Where should you attach it?

### Options
- Inside `hook_preprocess_views_view_fields()` call `#attached['library'][]` on the render array.
- Add `attach_library` in the Twig file.
- Use `hook_views_pre_render()` to add CSS classes.
- Alter the view in the UI to include the library globally.

### Correct Answers
- [0] Inside `hook_preprocess_views_view_fields()` call `#attached['library'][]` on the render array.

### Explanation
Attaching libraries in preprocess ensures they only load when the specific template suggestion is active, keeping asset scope tight.


### Question 168

**Domain:** Templates and Preprocess Functions

During preprocess you need to pass a boolean to Twig. How should you cast it to avoid string output?

### Options
- `$variables['has_hero'] = (bool) $has_hero;`
- `$variables['has_hero'] = $has_hero ? 'true' : 'false';`
- `$variables['has_hero'] = (string) $has_hero;`
- `$variables['has_hero'] = intval($has_hero);`

### Correct Answers
- [0] `$variables['has_hero'] = (bool) $has_hero;`

### Explanation
Assigning a boolean ensures Twig can evaluate it in conditions without string comparisons.


### Question 169

**Domain:** Templates and Preprocess Functions

Your theme uses the Render Cache. How do you ensure a preprocess alteration respects caching?

### Options
- Add cache contexts or tags to the render array via `$variables['elements']['#cache']` in preprocess.
- Disable caching for the template.
- Store values in static variables.
- Rely on Twig to compute dynamic values.

### Correct Answers
- [0] Add cache contexts or tags to the render array via `$variables['elements']['#cache']` in preprocess.

### Explanation
Setting cache metadata ensures Drupal varies cache entries appropriately when preprocess modifies render output.


### Question 170

**Domain:** Templates and Preprocess Functions

You want to reuse a pattern in multiple templates but allow overriding blocks. Which Twig construct combines inclusion with block overrides?

### Options
- `{% embed 'components/card.twig' %}{% block title %}...{% endblock %}{% endembed %}`
- `{% include 'components/card.twig' %}`
- `{% extends 'components/card.twig' %}`
- `{% use 'components/card.twig' %}`

### Correct Answers
- [0] `{% embed 'components/card.twig' %}{% block title %}...{% endblock %}{% endembed %}`

### Explanation
`embed` imports a template and allows overriding its blocks locally, combining features of `include` and `extends`.


### Question 171

**Domain:** Templates and Preprocess Functions

You must print a sanitized string that contains limited HTML, such as `<strong>`. How do you handle it in Twig?

### Options
- Use `{{ value|escape('html') }}`
- Use `{{ value|striptags('<strong>') }}` (no further filters)
- Use `{{ value|striptags('<strong>')|raw }}`
- Use `{{ value|raw }}`

### Correct Answers
- [2] Use `{{ value|striptags('<strong>')|raw }}`

### Explanation
Call `striptags()` with the permitted elements to remove disallowed markup, then mark the sanitized string as safe via `|raw` so Twig outputs the remaining `<strong>` tag. Printing it raw without stripping tags could expose unsafe HTML, and plain escaping would convert `<strong>` into text.


### Question 172

**Domain:** Templates and Preprocess Functions

In a preprocess function, you need the raw field value instead of the rendered output. How can you access it?

### Options
- `$node->get('field_summary')->value`
- `$variables['content']['field_summary']`
- `$variables['elements']['field_summary']['#markup']`
- `\Drupal::service('entity_field.manager')->getFieldDefinitions()`

### Correct Answers
- [0] `$node->get('field_summary')->value`

### Explanation
Entity objects expose field API methods that return raw values, which you can use in preprocess before formatting or rendering.


### Question 173

**Domain:** Templates and Preprocess Functions

You must prevent translation of a label printed in Twig. What filter should you apply?

### Options
- `{{ 'Label'|t }}`
- `{{ 'Label'|raw }}`
- `{{ 'Label'|trans }}
- `{{ 'Label' }}` without filters.

### Correct Answers
- [0] `{{ 'Label' }}` without filters.

### Explanation
Leaving the string unfiltered prints it literally. The `t` filter sends it to translation, while `raw` affects escaping.


### Question 174

**Domain:** Templates and Preprocess Functions

You are adding a theme hook for a new component. Which hook provides metadata to Drupal about the template and variables?

### Options
- `hook_theme()`
- `hook_preprocess()`
- `hook_theme_suggestions()`
- `hook_template_info()`

### Correct Answers
- [0] `hook_theme()`

### Explanation
`hook_theme()` registers templates, functions, and variables with Drupal's theme system, allowing preprocess and Twig rendering to function.


### Question 175

**Domain:** Templates and Preprocess Functions

You need to include a partial template inside another while passing custom variables. Which Twig tag accomplishes this?

### Options
- `{% include 'components/_cta.twig' with { label: cta_label } %}`
- `{% extends 'components/_cta.twig' %}`
- `{% embed 'components/_cta.twig' only %}`
- `{% use 'components/_cta.twig' %}`

### Correct Answers
- [0] `{% include 'components/_cta.twig' with { label: cta_label } %}`

### Explanation
`include` with `with` passes custom variables to partials without inheriting the parent context unnecessarily.


### Question 176

**Domain:** Templates and Preprocess Functions

While building a custom theme hook, you must define default variables. Where should these defaults live?

### Options
- In the `hook_theme()` definition under the `variables` key.
- Inside Twig using `default()`.
- In `settings.php`.
- In `hook_preprocess_HOOK()` using `isset` checks.

### Correct Answers
- [0] In the `hook_theme()` definition under the `variables` key.

### Explanation
Theme hook definitions provide default variables so preprocess and Twig can rely on known keys even when callers omit values.


### Question 177

**Domain:** Templates and Preprocess Functions

You must remove a field from rendering but keep it available for preprocess logic. How do you suppress it in Twig?

### Options
- Use `{{ content|without('field_name') }}` so the field stays available to preprocess while Twig omits it.
- Set the field's render array to `#access = FALSE` in preprocess.
- Print the field and hide via CSS.
- Remove the field from the display mode.

### Correct Answers
- [0] Use `{{ content|without('field_name') }}` so the field stays available to preprocess while Twig omits it.

### Explanation
The `without` filter strips selected keys from the render array during output, keeping the data intact for preprocess or other logic while preventing duplicate markup. CSS hiding still renders the field, and removing it upstream makes it unavailable to preprocess.


### Question 178

**Domain:** Templates and Preprocess Functions

You want to generate theme suggestions for media entities based on bundle. Which function provides the skeleton suggestions before you alter them?

### Options
- `theme_get_suggestions()`
- `hook_theme_suggestions_media()`
- `hook_theme_registry_alter()`
- `hook_preprocess_media()`

### Correct Answers
- [1] `hook_theme_suggestions_media()`

### Explanation
Entity-specific suggestion hooks allow you to define additional template names derived from bundle or other context.


### Question 179

**Domain:** Templates and Preprocess Functions

Twig templates need access to a helper service. How do you expose the service without calling it directly in Twig?

### Options
- Inject the service into a preprocess function and pass required data as variables.
- Call the service statically in Twig using `service()`.
- Use global PHP variables.
- Instantiate the service in Twig with `new`.

### Correct Answers
- [0] Inject the service into a preprocess function and pass required data as variables.

### Explanation
Twig should remain presentation-only; preprocess functions can leverage services and provide results to templates without direct service access.


### Question 180

**Domain:** Templates and Preprocess Functions

You must translate dynamic strings in preprocess before sending them to Twig. Which function ensures safe translation with placeholders?

### Options
- `t('Hello @name', ['@name' => $account->getDisplayName()])`
- Concatenate `'Hello ' . $account->getDisplayName()` manually.
- `format_string('Hello @name', ['@name' => $name])`
- Instantiate `new TranslatableMarkup('Hello @name', ['@name' => $name])` directly.

### Correct Answers
- [0] `t('Hello @name', ['@name' => $account->getDisplayName()])`

### Explanation
`t()` handles translation and sanitization for placeholders, keeping preprocess strings safe and localizable.


### Question 181

**Domain:** Templates and Preprocess Functions

You want to inspect the final render array in preprocess for debugging without breaking output. What method is safe?

### Options
- Use `\Drupal::logger('theme')->debug('<pre>@data</pre>', ['@data' => print_r($variables['elements'], TRUE)]);`
- `var_dump($variables);` inside preprocess.
- Throw an exception when debugging.
- Print debug info in Twig.

### Correct Answers
- [0] Use `\Drupal::logger('theme')->debug('<pre>@data</pre>', ['@data' => print_r($variables['elements'], TRUE)]);`

### Explanation
Logging preserves the request flow while outputting data to logs. Dumping directly interrupts rendering and exposes data to end users.


### Question 182

**Domain:** Templates and Preprocess Functions

Your Twig template should avoid whitespace around inline elements. Which tag ensures whitespace control?

### Options
- `{%-` and `-%}`
- `{# #}`
- `{% spaceless %}{% endspaceless %}`
- `{{- }}` alone

### Correct Answers
- [0] `{%-` and `-%}`

### Explanation
Twig's trim markers remove surrounding whitespace for fine-grained control without needing the deprecated `spaceless` tag.


### Question 183

**Domain:** Templates and Preprocess Functions

You must render a link with dynamic attributes inside Twig. What's the recommended approach?

### Options
- Use Drupal's `link()` function via Twig: `{{ link(label, url, attributes) }}`
- Concatenate `<a>` tags manually.
- Render using `{{ url.toString() }}`
- Use JavaScript to create the link.

### Correct Answers
- [0] Use Drupal's `link()` function via Twig: `{{ link(label, url, attributes) }}`

### Explanation
Twig's `link` function handles attribute sanitization and ensures URLs render correctly, avoiding manual HTML concatenation.


### Question 184

**Domain:** Templates and Preprocess Functions

You require conditional markup around a field only when certain view modes render. How do you handle this in Twig?

### Options
- Pass the view mode from preprocess and check `if view_mode == 'teaser'` in Twig.
- Check the route name.
- Inspect `content['#view_mode']` directly in Twig.
- Add markup in preprocess only.

### Correct Answers
- [0] Pass the view mode from preprocess and check `if view_mode == 'teaser'` in Twig.

### Explanation
Preprocess can supply `view_mode`, letting Twig evaluate it without delving into render array internals.


### Question 185

**Domain:** Templates and Preprocess Functions

While building a `menu--main.html.twig`, you need to identify the active trail. Which Twig variable indicates active links?

### Options
- `item.in_active_trail`
- `item.is_active`
- `item.active`
- `item.current`

### Correct Answers
- [0] `item.in_active_trail`

### Explanation
Menu item render arrays include the `in_active_trail` boolean for marking active path ancestors.


### Question 186

**Domain:** Templates and Preprocess Functions

You must add a `data-theme` attribute to the `<html>` element. Where do you set it?

### Options
- In `html.html.twig` using `{{ attributes.setAttribute('data-theme', theme_setting) }}`.
- In `page.html.twig` via `addClass`.
- In `node.html.twig`.
- Using JavaScript after load.

### Correct Answers
- [0] In `html.html.twig` using `{{ attributes.setAttribute('data-theme', theme_setting) }}`.

### Explanation
The global `html` template controls `<html>` attributes; adding the attribute there ensures consistent output across pages.


### Question 187

**Domain:** Templates and Preprocess Functions

To avoid repeating markup for field items, which Twig structure iterates over them cleanly?

### Options
- `{% for item in items %}{{ item.content }}{% endfor %}`
- `{% for item in items %}{{ item['#markup'] }}{% endfor %}`
- Loop in preprocess and concatenate strings.
- Use `implode` in Twig.

### Correct Answers
- [0] `{% for item in items %}{{ item.content }}{% endfor %}`

### Explanation
Field templates already expose `items` arrays with renderable `content`. Looping in Twig respects caching and formatting.


### Question 188

**Domain:** Templates and Preprocess Functions

You must output a block title only when it exists. Which Twig pattern avoids printing empty markup?

### Options
- `{% if label %}<h2>{{ label }}</h2>{% endif %}`
- `<h2>{{ label }}</h2>`
- `{% if label is defined %}<h2>{{ label }}</h2>{% endif %}`
- `{% if label|render %}<h2>{{ label }}</h2>{% endif %}`

### Correct Answers
- [0] `{% if label %}<h2>{{ label }}</h2>{% endif %}`

### Explanation
Block titles evaluate to empty strings when absent; a simple truthy check suppresses output.


### Question 189

**Domain:** Templates and Preprocess Functions

How do you add template suggestions for taxonomy term pages based on vocabulary?

### Options
- Use `hook_theme_suggestions_taxonomy_term_alter()` and append `taxonomy_term__VOCABULARY`.
- Override `taxonomy-term.html.twig` directly.
- Add conditions in Twig.
- Alter the view mode display.

### Correct Answers
- [0] Use `hook_theme_suggestions_taxonomy_term_alter()` and append `taxonomy_term__VOCABULARY`.

### Explanation
Suggestion alter hooks allow vocabulary-specific template names without modifying base templates.


### Question 190

**Domain:** Templates and Preprocess Functions

You must create a template for a specific block plugin and region combination. Which suggestion name is correct?

### Options
- `block--plugin-id--region.html.twig`
- `block--region--plugin-id.html.twig`
- `block-region-plugin.html.twig`
- `block--plugin-id.html.twig`

### Correct Answers
- [3] `block--plugin-id.html.twig`

### Explanation
Core generates default block template suggestions based on the block plugin ID (for example, `block--promo-banner.html.twig`). Drupal does not provide a native plugin+region suggestion; combine them only after adding a custom suggestion.


### Question 191

**Domain:** Templates and Preprocess Functions

In preprocess you want to add CSS classes to specific menu links. Where should you modify the attributes?

### Options
- In `hook_preprocess_menu()` adjust `$variables['items']` and use `setAttribute` on each item.
- In Twig by checking `item.title` and concatenating classes.
- In `hook_menu_tree_alter()` add markup.
- In JavaScript after render.

### Correct Answers
- [0] In `hook_preprocess_menu()` adjust `$variables['items']` and use `setAttribute` on each item.

### Explanation
Menu preprocess hooks allow you to alter link attributes before rendering, keeping logic in PHP and preserving caching.


### Question 192

**Domain:** Templates and Preprocess Functions

Your template requires escaping a variable differently (URL vs HTML). Which Twig filter should you use for URL contexts?

### Options
- `{{ value|escape('url') }}`
- `{{ value|raw }}`
- `{{ value|t }}`
- `{{ value|e('html_attr') }}`

### Correct Answers
- [0] `{{ value|escape('url') }}`

### Explanation
Twig's escape filter accepts contexts such as `url` to encode characters properly for use in URLs.


### Question 193

**Domain:** Templates and Preprocess Functions

You must move a field above the title without altering the display mode. How do you do it in preprocess?

### Options
- Reorder `$variables['content']` in `hook_preprocess_node()` using `array_splice` or weight adjustments.
- Change the field weight in the UI.
- Modify Twig to print the field twice.
- Use JavaScript to reposition the element.

### Correct Answers
- [0] Reorder `$variables['content']` in `hook_preprocess_node()` using `array_splice` or weight adjustments.

### Explanation
Preprocess can rearrange render arrays prior to output, keeping display configuration intact.


### Question 194

**Domain:** Templates and Preprocess Functions

When writing Twig tests, you want to ensure the theme doesn't break under minimal templates. Which tool renders Twig in isolation?

### Options
- Use the `twig_tweak` module's `{{ drupal_entity() }}` functions.
- Use PHPUnit with the Twig environment to render templates in tests.
- Render via `drush php` scripts.
- Manual browser testing only.

### Correct Answers
- [1] Use PHPUnit with the Twig environment to render templates in tests.

### Explanation
Unit tests can instantiate Twig and render templates with stub data, catching syntax errors before deployment.


### Question 195

**Domain:** Templates and Preprocess Functions

You must ensure that preprocess-derived classes participate in caching contexts (e.g., language). What should you add to the render array?

### Options
- `$variables['elements']['#cache']['contexts'][] = 'languages:language_interface';`
- `$variables['elements']['#cache']['tags'][] = 'rendered';`
- Disable cache for the element.
- No action needed; Drupal handles it.

### Correct Answers
- [0] `$variables['elements']['#cache']['contexts'][] = 'languages:language_interface';`

### Explanation
Adding cache contexts ensures the render cache varies for language, keeping classes accurate per context.


### Question 196

**Domain:** Templates and Preprocess Functions

You must output structured data inside Twig and ensure it doesn't escape JSON. Which filter prevents escaping?

### Options
- `{{ data|json_encode|raw }}`
- `{{ data|json_encode }}`
- `{{ data|render }}`
- `{{ data|escape('js') }}`

### Correct Answers
- [0] `{{ data|json_encode|raw }}`

### Explanation
Encoding to JSON then marking raw prevents double-escaping while keeping the data serialised properly.


### Question 197

**Domain:** Templates and Preprocess Functions

You want to add a wrapper `<div>` around the entire page content via preprocess. Which variable should you manipulate?

### Options
- `$variables['page']['#prefix']` and `#suffix`
- `$variables['content']['#prefix']`
- `$variables['attributes']`
- `$variables['page']['#markup']`

### Correct Answers
- [0] `$variables['page']['#prefix']` and `#suffix`

### Explanation
Adding `#prefix` and `#suffix` to the page render array injects wrapping markup without rewriting the template.


### Question 198

**Domain:** Templates and Preprocess Functions

Multiple templates render the same call-to-action button markup with minor variations. You want to centralize the markup in Twig. What is the best approach?

### Options
- Create a Twig macro in a partial and import it where needed.
- Copy the button markup into each template.
- Build the button with JavaScript after render.
- Register a custom Drupal block for each button.

### Correct Answers
- [0] Create a Twig macro in a partial and import it where needed.

### Explanation
Twig macros let you reuse markup with parameters, keeping templates DRY. Copying markup or using JavaScript increases maintenance and complexity.


### Question 199

**Domain:** Templates and Preprocess Functions

A teaser view mode should add a `field--teaser` class to `field_image` so CSS can target the layout. Where should you add the class?

### Options
- Implement `hook_preprocess_field()` and check `$variables['element']['#view_mode']`.
- Append the class in `field--node--field-image.html.twig` using a conditional.
- Hardcode the class in `node--teaser.html.twig`.
- Add the class with JavaScript on load.

### Correct Answers
- [0] Implement `hook_preprocess_field()` and check `$variables['element']['#view_mode']`.

### Explanation
Field preprocess functions provide access to the render array, letting you adjust classes for specific view modes before Twig runs. Template conditionals or JavaScript duplicate logic.


### Question 200

**Domain:** Templates and Preprocess Functions

You need a dedicated template for the user registration form to add onboarding copy. Which hook lets you register a template suggestion for `user_register_form`?

### Options
- Implement `hook_theme_suggestions_form_alter()` and check for `$form_id === 'user_register_form'`.
- Override `form.html.twig` globally.
- Use `hook_theme()` to declare a new theme hook.
- Add a Layout Builder override.

### Correct Answers
- [0] Implement `hook_theme_suggestions_form_alter()` and check for `$form_id === 'user_register_form'`.

### Explanation
Form suggestion alter hooks let you append template names based on form ID, enabling targeted overrides without touching other forms.


### Question 201

**Domain:** Templates and Preprocess Functions

A preprocess function adds the current user's role to a render array so the template can show personalized hints. What else must you set to keep caching accurate?

### Options
- Add `$variables['elements']['#cache']['contexts'][] = 'user.roles'`.
- Disable caching entirely with `#cache['max-age'] = 0`.
- Store the role in `drupalSettings`.
- Nothing; Drupal handles it automatically.

### Correct Answers
- [0] Add `$variables['elements']['#cache']['contexts'][] = 'user.roles'`.

### Explanation
When preprocess logic depends on user roles, you must add the relevant cache context so Drupal varies the cached markup appropriately. Simply disabling caching wastes performance.


### Question 202

**Domain:** Templates and Preprocess Functions

You want to turn a taxonomy term name into a safe CSS modifier inside Twig. How should you do it?

### Options
- Use `{{ term.name|clean_class }}` when printing the class.
- Concatenate the raw name directly into the class attribute.
- URL-encode the term name first.
- Build the class in JavaScript after render.

### Correct Answers
- [0] Use `{{ term.name|clean_class }}` when printing the class.

### Explanation
The `clean_class` filter converts arbitrary text into safe CSS class names. Concatenating raw text can introduce spaces or invalid characters.


### Question 203

**Domain:** Templates and Preprocess Functions

You have a testimonial partial that expects a `quote` and `author`. From `node.html.twig`, how do you pass only those values to the partial?

### Options
- Use `{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } %}`.
- Set global Twig variables and include the partial without context.
- Render the partial via `{{ drupal_render() }}`.
- Attach the partial as a library dependency.

### Correct Answers
- [0] Use `{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } %}`.

### Explanation
The Twig `include ... with` syntax passes a custom context to partials, keeping data explicit. Global variables or render functions add unnecessary coupling.


### Question 204

**Domain:** Templates and Preprocess Functions

A banner paragraph includes optional background video assets that require a lazy-loading library only when the field is filled. Where should you attach the library?

### Options
- In `hook_preprocess_paragraph()`, check the field and append the library to `$variables['elements']['#attached']['library'][]`.
- Attach the library unconditionally in `paragraph.html.twig`.
- Add the script tag to the video field formatter.
- Load the library from JavaScript after detecting the video.

### Correct Answers
- [0] In `hook_preprocess_paragraph()`, check the field and append the library to `$variables['elements']['#attached']['library'][]`.

### Explanation
Preprocess hooks can conditionally attach libraries based on field values before rendering, ensuring assets load only when needed.


### Question 205

**Domain:** Templates and Preprocess Functions

You register a custom theme hook named `marketing_card` in `hook_theme()`. Which preprocess function name will Drupal look for?

### Options
- `template_preprocess_marketing_card()`
- `THEME_preprocess_marketing_card()`
- `hook_preprocess_marketing_card()`
- `marketing_card_preprocess()`

### Correct Answers
- [0] `template_preprocess_marketing_card()`

### Explanation
Custom theme hooks use the global `template_preprocess_HOOK()` naming. Theme-specific preprocessors (`THEME_preprocess_HOOK`) run in addition but require the generic function as the base.


### Question 206

**Domain:** Templates and Preprocess Functions

You need to embed a user-supplied value inside a `data-label` attribute. How should you escape it in Twig?

### Options
- `data-label="{{ value|escape('html_attr') }}"`
- `data-label="{{ value|raw }}"`
- `data-label="{{ value|escape('url') }}"`
- `data-label="{{ value }}"`

### Correct Answers
- [0] `data-label="{{ value|escape('html_attr') }}"`

### Explanation
The `escape('html_attr')` context encodes characters appropriately for HTML attributes. Printing raw or using the wrong context risks broken markup or XSS.


### Question 207

**Domain:** Templates and Preprocess Functions

In `node.html.twig`, you want to print all fields except `field_tags`. What is the most concise Twig approach?

### Options
- `{{ content|without('field_tags') }}`
- Loop through `content` and skip the key manually.
- Remove the field in preprocess with `unset`.
- Use CSS to hide the field.

### Correct Answers
- [0] `{{ content|without('field_tags') }}`

### Explanation
The `without` filter returns the render array minus specified keys, keeping templates readable. Preprocess unsets work but move presentation logic to PHP, and CSS leaves markup behind.


### Question 208

**Domain:** Templates and Preprocess Functions

A template adds an ARIA attribute to a region wrapper based on context. What is the proper Twig syntax using attribute objects?

### Options
- `{{ attributes.setAttribute('aria-label', label) }}`
- `{{ attributes['aria-label'] = label }}`
- `{{ attributes += ' aria-label="' ~ label ~ '"' }}`
- `{{ attributes.addClass('aria-label-' ~ label) }}`

### Correct Answers
- [0] `{{ attributes.setAttribute('aria-label', label) }}`

### Explanation
Drupal passes attribute objects with helper methods like `setAttribute()` and `addClass()`. Direct mutation or string concatenation bypasses escaping safeguards.


### Question 209

**Domain:** Templates and Preprocess Functions

You need to add a CSS class to a specific Views field output without altering the view. Which preprocess hook should you use?

### Options
- `hook_preprocess_views_view_field()`
- `hook_preprocess_views_view()`
- `hook_preprocess_node()`
- `hook_theme_suggestions_views_view()`

### Correct Answers
- [0] `hook_preprocess_views_view_field()`

### Explanation
`hook_preprocess_views_view_field()` runs for each field in a view row, letting you adjust options before Twig renders `views-view-field--VIEW--FIELD.html.twig`.


### Question 210

**Domain:** Templates and Preprocess Functions

A preprocess function wants to reuse the `marketing_card` theme hook inside another template. How can it render the card in PHP?

### Options
- Return `['#theme' => 'marketing_card', '#title' => $title, '#link' => $url]` from the preprocess function.
- Call `render('marketing_card')` directly.
- Include the Twig file manually with `include()`.
- Print HTML strings inside preprocess.

### Correct Answers
- [0] Return `['#theme' => 'marketing_card', '#title' => $title, '#link' => $url]` from the preprocess function.

### Explanation
Setting `#theme` on a render array lets Drupal invoke the theme hook and template in PHP contexts. Manual includes or string concatenation bypass Twig and caching.


### Question 211

**Domain:** Templates and Preprocess Functions

Some landing pages have an optional hero partial. If the partial is missing, the template should fail silently. How do you include it?

### Options
- `{% include '@components/hero.twig' ignore missing %}`
- Wrap the include in a try/catch block.
- `{{ include('@components/hero.twig') ?? '' }}`
- Add a PHP check in preprocess.

### Correct Answers
- [0] `{% include '@components/hero.twig' ignore missing %}`

### Explanation
The `ignore missing` flag tells Twig to continue if the template cannot be found. Preprocess or PHP checks are unnecessary.


### Question 212

**Domain:** Templates and Preprocess Functions

You need to output `field_summary` inside a paragraph template. What is the correct Twig syntax to keep cache metadata intact?

### Options
- `{{ content.field_summary }}`
- `{{ content.field_summary|render }}`
- `{{ content.field_summary['#markup'] }}`
- `{{ content.field_summary|raw }}`

### Correct Answers
- [0] `{{ content.field_summary }}`

### Explanation
Printing the render array lets Drupal manage cache metadata and formatters automatically. Calling `|render` or accessing internals bypasses the render pipeline and can break caching.


### Question 213

**Domain:** Templates and Preprocess Functions

A component template must pull in its own CSS/JS bundle. Where should you attach the library so the asset only loads when the template renders?

### Options
- Call `{{ attach_library('theme/component.card') }}` inside the Twig template.
- Add the library to `libraries:` in the theme's `.info.yml`.
- Attach the library globally in `hook_page_attachments()`.
- Inline the assets inside the template.

### Correct Answers
- [0] Call `{{ attach_library('theme/component.card') }}` inside the Twig template.

### Explanation
`attach_library()` in Twig ensures assets load only when the template renders. Global attachments load everywhere, and inline assets break caching.


### Question 214

**Domain:** Templates and Preprocess Functions

How do you translate a literal string in Twig according to Drupal conventions?

### Options
- `{{ 'Read more'|t }}`
- `{{ t('Read more') }}`
- `{{ 'Read more'|translate }}`
- `{{ Drupal.t('Read more') }}`

### Correct Answers
- [0] `{{ 'Read more'|t }}`

### Explanation
Drupal exposes the `|t` filter for translating Twig strings. Calling PHP functions or custom filters inside Twig is not standard.


### Question 215

**Domain:** Templates and Preprocess Functions

You need to show a node's updated date in Twig using the site's default format. Which Twig helper should you use?

### Options
- `{{ node.getChangedTime|format_date }}`
- `{{ date(node.changed) }}`
- `{{ node.changed|t }}`
- `{{ node.changed|escape('html') }}`

### Correct Answers
- [0] `{{ node.getChangedTime|format_date }}`

### Explanation
The `format_date` filter renders timestamps using Drupal's date formatter service. PHP's `date()` ignores site settings.


### Question 216

**Domain:** Templates and Preprocess Functions

A boolean field determines whether a link field should open in a new tab. Where can you add `target="_blank"` before Twig renders the link?

### Options
- Implement `hook_preprocess_link()` and adjust `$variables['options']['attributes']`.
- Modify the HTML in Twig with string replacement.
- Add JavaScript to set the attribute after render.
- Configure the link formatter in the UI.

### Correct Answers
- [0] Implement `hook_preprocess_link()` and adjust `$variables['options']['attributes']`.

### Explanation
The link preprocess hook lets you modify link attributes dynamically based on context before markup is generated.


### Question 217

**Domain:** Templates and Preprocess Functions

You inject a marketing banner render array into the node content and need it to appear before the body field without editing templates. What render array property should you set?

### Options
- `#weight = -10`.
- `#priority = 'high'`.
- `#order = 'first'`.
- `#sort = -1`.

### Correct Answers
- [0] `#weight = -10`.

### Explanation
Render arrays use integer weights; lower values render earlier. Other properties are ignored.


### Question 218

**Domain:** Templates and Preprocess Functions

A render array uses the default `container` theme wrapper, adding extra <div> markup you don't want. How can you remove the wrapper before Twig renders it?

### Options
- In preprocess, set `$variables['element']['#theme_wrappers'] = []`.
- Strip the wrapper in Twig with the `|raw` filter.
- Use CSS to hide the wrapper.
- Override `container.html.twig`.

### Correct Answers
- [0] In preprocess, set `$variables['element']['#theme_wrappers'] = []`.

### Explanation
Removing `#theme_wrappers` from the render array prevents Drupal from wrapping the output. CSS or Twig hacks leave unnecessary markup.


### Question 219

**Domain:** Templates and Preprocess Functions

You want all tables rendered by Drupal to include the class `table--responsive`. Which preprocess hook should you use?

### Options
- `hook_preprocess_table()`
- `hook_preprocess_html()`
- `hook_preprocess_node()`
- `hook_preprocess_field()`

### Correct Answers
- [0] `hook_preprocess_table()`

### Explanation
The table preprocess hook lets you adjust table attributes globally before `table.html.twig` renders.


### Question 220

**Domain:** Templates and Preprocess Functions

You need to remove whitespace around an inline SVG snippet in Twig while keeping the markup readable. What is the modern Twig syntax?

### Options
- Use `{% apply spaceless %}...{% endapply %}`.
- Wrap the markup in `{% spaceless %}...{% endspaceless %}`.
- Call `|trim` on the HTML string after rendering.
- Remove whitespace manually from the template.

### Correct Answers
- [0] Use `{% apply spaceless %}...{% endapply %}`.

### Explanation
Twig 3 replaces the legacy `spaceless` tag with the `apply spaceless` filter, trimming whitespace in a block while leaving source formatting intact.


### Question 221

**Domain:** Templates and Preprocess Functions

You need to show a node's updated date in Twig using the site's default format. Which Twig helper should you use?

### Options
- `{{ node.getChangedTime|format_date }}`
- `{{ date(node.changed) }}`
- `{{ node.changed|t }}`
- `{{ node.changed|escape('html') }}`

### Correct Answers
- [0] `{{ node.getChangedTime|format_date }}`

### Explanation
The `format_date` filter renders timestamps using Drupal's date formatter service. PHP's `date()` ignores site settings.


### Question 222

**Domain:** Templates and Preprocess Functions

You need a shortened `display_title` variable inside `node.html.twig`. Where do you define it so Twig can access it?

### Options
- Set the value in `hook_preprocess_node()` and add it to `$variables['display_title']`.
- Create a global variable in `settings.php`.
- Hardcode the value inside Twig with `set` on every template.
- Store it in a theme setting.

### Correct Answers
- [0] Set the value in `hook_preprocess_node()` and add it to `$variables['display_title']`.

### Explanation
Preprocess functions populate template variables in PHP before rendering. Twig-only assignments would duplicate logic, and global settings are inappropriate.


### Question 223

**Domain:** Templates and Preprocess Functions

A Views row template needs to output the row number starting at 1. Which Twig construct should you use inside the `for` loop?

### Options
- Reference `loop.index` for a 1-based counter.
- Maintain a manual counter with `{% set i = i + 1 %}`.
- Use `loop.index0` and add one in Twig.
- Query `$row->_rowNumber` from PHP.

### Correct Answers
- [0] Reference `loop.index` for a 1-based counter.

### Explanation
Twig provides the `loop` variable when iterating; `loop.index` delivers the current iteration starting at 1, avoiding manual counters.


### Question 224

**Domain:** Templates and Preprocess Functions

You are building a custom wrapper around a render array fragment and need a fresh attribute object. What helper should you use in Twig?

### Options
- Call `create_attribute()` to build a new Attribute object.
- Instantiate `new Attribute()` directly in Twig.
- Concatenate strings with `|raw`.
- Use `attributes` from another element.

### Correct Answers
- [0] Call `create_attribute()` to build a new Attribute object.

### Explanation
`create_attribute()` generates a fresh attribute object that supports methods like `addClass()`, maintaining Drupal's attribute handling conventions.


### Question 225

**Domain:** Templates and Preprocess Functions

Accessibility requires each block wrapper to reference its title via `aria-labelledby`. How can you add the attribute globally?

### Options
- Implement `hook_preprocess_block()` and set `$variables['attributes']['aria-labelledby']` to the block heading ID.
- Modify every block template manually.
- Add the attribute with JavaScript after render.
- Store the ID in a theme setting.

### Correct Answers
- [0] Implement `hook_preprocess_block()` and set `$variables['attributes']['aria-labelledby']` to the block heading ID.

### Explanation
Block preprocess hooks allow you to adjust wrapper attributes before Twig renders the block, keeping accessibility logic centralized.


## Layout Configuration

### Question 226

**Domain:** Layout Configuration

Editors want a landing page layout where certain sections can be rearranged per node. Which Layout Builder setting allows this flexibility?

### Options
- Enable Layout Builder for the content type and allow per-content overrides.
- Create a custom view mode and hardcode sections in Twig.
- Build separate node types for each layout variation.
- Use Paragraphs exclusively instead of Layout Builder.

### Correct Answers
- [0] Enable Layout Builder for the content type and allow per-content overrides.

### Explanation
Per-content overrides let editors customize section ordering while maintaining a shared default layout.


### Question 227

**Domain:** Layout Configuration

You need to add a block only for a specific Layout Builder section. What's the safest approach?

### Options
- Create a Layout Builder custom block (inline block) added only to that section.
- Place the block globally then hide it with CSS when not needed.
- Use a custom module to alter all layouts at runtime.
- Duplicate the content type.

### Correct Answers
- [0] Create a Layout Builder custom block (inline block) added only to that section.

### Explanation
Inline blocks are scoped to the section in which they're placed, providing content isolation without affecting other layouts.


### Question 228

**Domain:** Layout Configuration

Your design requires a responsive two-column layout with adjustable widths. Which Layout Builder tool supports this out of the box?

### Options
- Use a Layout Builder layout plugin that defines two configurable columns.
- Create two separate sections and assign CSS manually.
- Attach a responsive grid library to Layout Builder UI.
- Export the layout to code and edit HTML directly.

### Correct Answers
- [0] Use a Layout Builder layout plugin that defines two configurable columns.

### Explanation
Layout plugins provide column structures with width settings, removing the need for manual CSS or code edits.


### Question 229

**Domain:** Layout Configuration

You must ensure a block displays different view modes per breakpoint within Layout Builder. What's the recommended strategy?

### Options
- Use Field Layout or Display Modes for blocks and attach responsive CSS classes per breakpoint.
- Duplicate the block for each breakpoint and toggle visibility manually.
- Write JavaScript to swap block markup.
- Rely on inline styles.

### Correct Answers
- [0] Use Field Layout or Display Modes for blocks and attach responsive CSS classes per breakpoint.

### Explanation
Custom block display modes let you tailor markup while CSS handles responsive presentation without duplicating blocks.


### Question 230

**Domain:** Layout Configuration

Editors complain that new Layout Builder sections inherit unwanted padding. Where can you adjust defaults for the entire layout?

### Options
- Create a theme-specific layout template and adjust the section wrapper markup and classes.
- Edit each node's layout manually.
- Override core Layout Builder CSS directly.
- Add inline styles through Layout Builder UI.

### Correct Answers
- [0] Create a theme-specific layout template and adjust the section wrapper markup and classes.

### Explanation
Custom layout templates allow consistent structural changes across all sections, avoiding per-node adjustments.


### Question 231

**Domain:** Layout Configuration

You need to reuse a Layout Builder configuration across multiple nodes. What feature enables this?

### Options
- Layout Builder Defaults configuration exported to YAML.
- Copy and paste HTML between nodes.
- Use Paragraph clones.
- Duplicate nodes via content cloning module only.

### Correct Answers
- [0] Layout Builder Defaults configuration exported to YAML.

### Explanation
Default layouts stored in configuration can be exported and reused, providing a baseline for new entities.


### Question 232

**Domain:** Layout Configuration

When building a view-based block for Layout Builder, what ensures the block respects node context?

### Options
- Configure contextual filters in the view that pull data from the current route (e.g., content ID).
- Hardcode node IDs in the view filter.
- Use JavaScript to rewrite view queries.
- Duplicate the view per page.

### Correct Answers
- [0] Configure contextual filters in the view that pull data from the current route (e.g., content ID).

### Explanation
Contextual filters allow the view to adapt to the host node, making the block reusable across Layout Builder placements.


### Question 233

**Domain:** Layout Configuration

You want to add custom CSS classes to sections via Layout Builder UI. Which contrib module streamlines this?

### Options
- Layout Builder Styles
- Chaos Tool Suite
- Block Class
- Display Suite

### Correct Answers
- [0] Layout Builder Styles

### Explanation
Layout Builder Styles integrates with the layout UI, providing dropdowns for classes without custom code.


### Question 234

**Domain:** Layout Configuration

Editors need to preview layout changes before saving. Which Layout Builder capability provides this safety?

### Options
- Draft and publish workflow integration via Layout Builder's moderation support.
- A separate preview theme.
- Inline editing in Twig.
- Screenshot generation in Drupal core.

### Correct Answers
- [0] Draft and publish workflow integration via Layout Builder's moderation support.

### Explanation
Layout Builder respects content moderation, letting editors preview drafts before publishing changes.


### Question 235

**Domain:** Layout Configuration

When exporting Layout Builder configuration, which command captures section definitions?

### Options
- `drush cex`
- `drush config:delete`
- `drush cache:rebuild`
- `drush features:export`

### Correct Answers
- [0] `drush cex`

### Explanation
Configuration export captures Layout Builder defaults and section definitions stored in config.


### Question 236

**Domain:** Layout Configuration

You added a new custom layout plugin but it's not appearing in the UI. What might you have forgotten?

### Options
- Clear caches so Drupal discovers the layout plugin annotation.
- Enable Layout Discovery module.
- Update `settings.php`.
- Run `drush updb`.

### Correct Answers
- [0] Clear caches so Drupal discovers the layout plugin annotation.

### Explanation
Layout plugins are discovered via cache; clearing caches registers new plugin definitions with the UI.


### Question 237

**Domain:** Layout Configuration

Editors need to restrict Layout Builder sections to a curated set for brand compliance. How do you enforce this?

### Options
- Use Layout Builder Restrictions module to whitelist allowed layouts and blocks.
- Train editors manually.
- Lock down the Layout Builder UI with CSS.
- Remove Layout Builder access.

### Correct Answers
- [0] Use Layout Builder Restrictions module to whitelist allowed layouts and blocks.

### Explanation
Layout Builder Restrictions lets you control available sections and blocks, ensuring brand consistency while retaining flexibility.


### Question 238

**Domain:** Layout Configuration

You must ensure a Layout Builder section is full-width while the rest stay within the page container. What technique works?

### Options
- Create a custom layout template that removes the container wrapper for that section.
- Override `page.html.twig` to remove containers entirely.
- Add `width: 100vw` via inline styles.
- Disable Layout Builder for the content type.

### Correct Answers
- [0] Create a custom layout template that removes the container wrapper for that section.

### Explanation
Custom layouts can output markup without the standard container, enabling full-width sections selectively.


### Question 239

**Domain:** Layout Configuration

Your team wants to log Layout Builder changes. Which tool keeps revision history when using per-node layouts?

### Options
- Enable content moderation and revisions for the entity, ensuring layout changes create new revisions.
- Use watchdog logs.
- Export the layout after each change manually.
- Track changes in a spreadsheet.

### Correct Answers
- [0] Enable content moderation and revisions for the entity, ensuring layout changes create new revisions.

### Explanation
When revisions are enabled, Layout Builder stores section changes with the entity revision history for auditing.


### Question 240

**Domain:** Layout Configuration

You need to expose a custom form in Layout Builder allowing editors to configure section background colors. Where do you implement this?

### Options
- Extend the layout plugin and implement `buildConfigurationForm()` / `submitConfigurationForm()` methods.
- Override Twig to add color inputs.
- Add JavaScript prompts when editing sections.
- Directly edit Layout Builder core files.

### Correct Answers
- [0] Extend the layout plugin and implement `buildConfigurationForm()` / `submitConfigurationForm()` methods.

### Explanation
Layout plugins support configuration forms in PHP, letting you add UI controls for backgrounds or other options.


### Question 241

**Domain:** Layout Configuration

You want to display analytics about section usage across all landing pages. What data source should you analyze?

### Options
- Layout Builder configuration stored in config entities and entity revisions.
- The rendered HTML pages.
- Google Analytics event logs only.
- Manually compiled spreadsheets.

### Correct Answers
- [0] Layout Builder configuration stored in config entities and entity revisions.

### Explanation
Section placements reside in configuration and revisions, which you can query programmatically to gather usage metrics.


### Question 242

**Domain:** Layout Configuration

A marketing team needs a three-column layout only available on article nodes. How can you restrict availability?

### Options
- Define the custom layout plugin and configure Layout Builder Restrictions to allow it only on the article bundle.
- Edit core layout plugin listings.
- Use CSS to hide the layout for other bundles.
- Duplicate Layout Builder UI permission roles.

### Correct Answers
- [0] Define the custom layout plugin and configure Layout Builder Restrictions to allow it only on the article bundle.

### Explanation
Restrictions can limit layouts per bundle, ensuring specific structures appear only where appropriate.


### Question 243

**Domain:** Layout Configuration

You must ensure certain blocks stay at the top of every Layout Builder page. What pattern keeps them locked?

### Options
- Add fixed sections via Layout Builder defaults and mark them as `locked` in configuration.
- Ask editors not to move them.
- Inject JavaScript to reset positions.
- Hide the move controls with CSS.

### Correct Answers
- [0] Add fixed sections via Layout Builder defaults and mark them as `locked` in configuration.

### Explanation
Locked sections prevent editors from rearranging critical content while still allowing additional sections below.


### Question 244

**Domain:** Layout Configuration

You want to provide alternate layouts per language. How do you structure the solution?

### Options
- Enable content translations and allow per-language Layout Builder overrides on the node.
- Create separate content types per language.
- Duplicate the node for each language without translation.
- Use CSS `:lang()` selectors only.

### Correct Answers
- [0] Enable content translations and allow per-language Layout Builder overrides on the node.

### Explanation
Translations support independent Layout Builder configurations, letting each language tailor its layout while sharing content.


### Question 245

**Domain:** Layout Configuration

You must display upcoming events in a Layout Builder block filtered by taxonomy (region). What's the Drupal-friendly approach?

### Options
- Build a View with contextual filters and place it as a block in Layout Builder.
- Hardcode taxonomy term IDs in Twig.
- Use PHP to query the database directly within the block template.
- Duplicate content per region.

### Correct Answers
- [0] Build a View with contextual filters and place it as a block in Layout Builder.

### Explanation
Views handles filtering and caching, while Layout Builder integrates Views blocks seamlessly for contextual listings.


### Question 246

**Domain:** Layout Configuration

You want to export Layout Builder content to a headless frontend. Which API endpoint provides structured section data?

### Options
- JSON:API with the Layout Builder enhancer modules.
- REST export of rendered HTML only.
- GraphQL with manual SQL queries.
- Static site generation from Twig.

### Correct Answers
- [0] JSON:API with the Layout Builder enhancer modules.

### Explanation
JSON:API plus Layout Builder-specific enhancers expose structured layout and component data for decoupled consumers.


### Question 247

**Domain:** Layout Configuration

Editors require a library of prebuilt sections (hero, testimonial) they can insert quickly. What feature supports this?

### Options
- Layout Builder section storage via the Layout Builder Library module.
- Paragraph bundles duplicated for each section.
- Copy/paste markup from a documentation site.
- Custom UI built from scratch.

### Correct Answers
- [0] Layout Builder section storage via the Layout Builder Library module.

### Explanation
The Layout Builder Library module allows saving and reusing predefined sections, streamlining editor workflows.


### Question 248

**Domain:** Layout Configuration

You must trigger a cache clear when Layout Builder configuration changes. Which cache bin is most directly affected?

### Options
- `render` cache bin storing layout renderings.
- `dynamic_page_cache` only.
- `page` cache exclusively.
- No cache is affected.

### Correct Answers
- [0] `render` cache bin storing layout renderings.

### Explanation
Layout changes alter render arrays, so clearing the render cache ensures new layouts appear immediately.


### Question 249

**Domain:** Layout Configuration

For auditing purposes, you need to see who changed Layout Builder sections. Which Drupal feature helps track this?

### Options
- Content revisions with user IDs recorded for each change.
- The dblog module alone.
- Manual notes in Slack.
- Git commit logs.

### Correct Answers
- [0] Content revisions with user IDs recorded for each change.

### Explanation
Revisions capture the author of each layout change, providing a history view inside the node revisions UI.


### Question 250

**Domain:** Layout Configuration

You're building a custom layout plugin that outputs three regions. How do you define the region names?

### Options
- In the plugin annotation, set `regions = {"left" = @Translation("Left"), ...}`.
- Add the regions to `hook_theme()`.
- Declare them in `info.yml`.
- Hardcode them in Twig.

### Correct Answers
- [0] In the plugin annotation, set `regions = {"left" = @Translation("Left"), ...}`.

### Explanation
Layout plugin annotations define regions Drupal uses to display drop zones in the UI.


### Question 251

**Domain:** Layout Configuration

Editors need a conditional CTA that appears only when a node has a specific field value. How do you handle this in Layout Builder without custom code?

### Options
- Use Layout Builder Conditions module to show/hide blocks based on field values.
- Duplicate the layout for nodes meeting the condition.
- Add JavaScript to hide the CTA.
- Use CSS to toggle visibility.

### Correct Answers
- [0] Use Layout Builder Conditions module to show/hide blocks based on field values.

### Explanation
Layout Builder Conditions provides UI-driven visibility rules, keeping logic accessible to site builders.


### Question 252

**Domain:** Layout Configuration

You must provide reusable layout sections that include referenced media and text. Which content structure simplifies editor reuse?

### Options
- Create custom block types with fields for media and text, then place them in Layout Builder.
- Build everything directly in Twig.
- Store data in configuration.
- Use fieldable panels panes.

### Correct Answers
- [0] Create custom block types with fields for media and text, then place them in Layout Builder.

### Explanation
Fieldable custom blocks provide structured content reusable across layouts while keeping editing UI familiar.


### Question 253

**Domain:** Layout Configuration

Layout Builder performance degrades when many sections load heavy views. What optimization can you apply?

### Options
- Enable lazy builder callbacks (`#lazy_builder`) for expensive view blocks.
- Disable caching entirely.
- Reduce Layout Builder users.
- Increase PHP memory limit arbitrarily.

### Correct Answers
- [0] Enable lazy builder callbacks (`#lazy_builder`) for expensive view blocks.

### Explanation
Lazy builders defer rendering until necessary, reducing initial page build cost while keeping caching intact.


### Question 254

**Domain:** Layout Configuration

After enabling Layout Builder on the Article content type, fields still render from "Manage display," causing duplicates when editors place the same field block. How do you prevent the double output?

### Options
- Hide the fields on the "Manage display" tab so only Layout Builder controls their placement.
- Disable Layout Builder for the view mode.
- Delete the fields from the content type.
- Override `node.html.twig` to remove the default field loop.

### Correct Answers
- [0] Hide the fields on the "Manage display" tab so only Layout Builder controls their placement.

### Explanation
When Layout Builder is active, you typically hide fields on the standard display to avoid duplicate output; editors then place the field blocks manually.


### Question 255

**Domain:** Layout Configuration

Editors want to reuse the existing body field formatter inside Layout Builder so that text styling stays consistent. How should they add the field?

### Options
- Add the "Body" block from the Content fields section, which uses the same field formatter.
- Create a custom block and paste the body text manually.
- Build a view and embed it in the layout.
- Override the template to render the field.

### Correct Answers
- [0] Add the "Body" block from the Content fields section, which uses the same field formatter.

### Explanation
Layout Builder exposes field blocks that reuse the field's formatter settings, keeping output consistent without manual duplication.


### Question 256

**Domain:** Layout Configuration

You want full view mode to use Layout Builder, but teasers should continue using traditional Manage Display settings. What configuration supports this?

### Options
- Enable Layout Builder only on the full view mode and leave teaser managed through Manage Display.
- Enable Layout Builder globally and disable the teaser view mode.
- Use Layout Builder on both view modes and manually recreate the teaser layout.
- Switch to the Field Layout module.

### Correct Answers
- [0] Enable Layout Builder only on the full view mode and leave teaser managed through Manage Display.

### Explanation
Layout Builder can be enabled per view mode, allowing full layouts to be customized while other modes continue to use the standard display UI.


### Question 257

**Domain:** Layout Configuration

You replaced the two-column layout plugin with a design that needs custom markup. Which Twig template should you override?

### Options
- `layout--two-column.html.twig`
- `block--two-column.html.twig`
- `page--layout.html.twig`
- `section--two-column.html.twig`

### Correct Answers
- [0] `layout--two-column.html.twig`

### Explanation
Layout Builder renders layout plugins through `layout--PLUGIN_ID.html.twig`. Overriding that template lets you adjust markup for the plugin.


### Question 258

**Domain:** Layout Configuration

You created a custom layout plugin class in `src/Plugin/Layout`. Drupal is not listing it in the UI. What did you likely forget?

### Options
- Add the `@Layout` annotation with `id`, `label`, and `template` metadata above the plugin class.
- Clear Drupal's file cache in `settings.php`.
- Register the plugin in `hook_layout_builder_info()`.
- Copy the plugin into the Layout Builder module.

### Correct Answers
- [0] Add the `@Layout` annotation with `id`, `label`, and `template` metadata above the plugin class.

### Explanation
Layout plugins rely on the `@Layout` annotation so Drupal can discover them. Missing or incorrect annotations keep the plugin hidden.


### Question 259

**Domain:** Layout Configuration

After adjusting the default layout for the "Product" content type in development, you deploy configuration. Editors have already customized some product nodes. What happens?

### Options
- The default layout updates via configuration, while existing overrides remain intact.
- All overrides are reset to match the new default layout.
- The deployment fails because content overrides exist.
- Layout Builder disables overrides until you reapply them manually.

### Correct Answers
- [0] The default layout updates via configuration, while existing overrides remain intact.

### Explanation
Default layouts are configuration-managed. Entity-specific overrides are stored with the content entity and are unaffected by config deployment, so editors' custom layouts remain.


### Question 260

**Domain:** Layout Configuration

When placing a field block in Layout Builder, editors see a "Formatter" dropdown. What does it control?

### Options
- The same formatter configuration used on the Manage Display screen for that field.
- A brand-new formatter unrelated to Manage Display.
- The CSS classes applied to the field wrapper.
- Which region the field appears in.

### Correct Answers
- [0] The same formatter configuration used on the Manage Display screen for that field.

### Explanation
Field blocks reuse the field formatters configured on Manage Display, keeping output consistent across Layout Builder and traditional displays.


### Question 261

**Domain:** Layout Configuration

A custom layout plugin exposes a settings form, and you need to add an extra validation rule. Which hook lets you alter the component form?

### Options
- Implement `hook_layout_builder_component_form_alter()`.
- Use `hook_form_FORM_ID_alter()`.
- Override the Layout Builder form template.
- Add JavaScript validation only.

### Correct Answers
- [0] Implement `hook_layout_builder_component_form_alter()`.

### Explanation
`hook_layout_builder_component_form_alter()` lets modules and themes alter the configuration form for Layout Builder components, including custom validation.


### Question 262

**Domain:** Layout Configuration

You build a custom block plugin that reads the parent node's taxonomy terms when placed via Layout Builder. What must the block implement?

### Options
- `ContextAwarePluginInterface` so it can receive the entity context from Layout Builder.
- `LayoutBuilderPluginInterface`.
- `SectionStorageInterface`.
- Nothing; Layout Builder injects context automatically.

### Correct Answers
- [0] `ContextAwarePluginInterface` so it can receive the entity context from Layout Builder.

### Explanation
Context-aware blocks declare required contexts (like the current node) and Layout Builder supplies them when rendering entity layouts.


### Question 263

**Domain:** Layout Configuration

An editor experimented with a node's custom layout and wants to revert to the default. How can they do it from the UI?

### Options
- Use the "Revert to default layout" option in the Layout Builder sidebar.
- Delete and recreate the node.
- Run a Drush command to reset the layout.
- Disable Layout Builder temporarily.

### Correct Answers
- [0] Use the "Revert to default layout" option in the Layout Builder sidebar.

### Explanation
Layout Builder provides a UI action to discard overrides and restore the default layout for an entity.


### Question 264

**Domain:** Layout Configuration

A marketing banner needs to appear on twenty landing pages and be editable in one place. What should editors place in Layout Builder?

### Options
- A reusable custom block (from the "Custom block" library).
- An inline block on each page.
- A node reference field.
- A view filtered by node ID.

### Correct Answers
- [0] A reusable custom block (from the "Custom block" library).

### Explanation
Reusable custom blocks can be placed on many layouts while sharing content. Inline blocks duplicate the content per page.


### Question 265

**Domain:** Layout Configuration

Layout changes should follow content revisions so editors can roll back a page. Which setting must be enabled on the content type?

### Options
- "Create new revision" so Layout Builder stores overrides per revision.
- "Enable content moderation."
- "Show row weights."
- "Synchronize translations."

### Correct Answers
- [0] "Create new revision" so Layout Builder stores overrides per revision.

### Explanation
Layout Builder stores overrides with the entity revision. Without revisions enabled, you cannot roll back layout changes.


### Question 266

**Domain:** Layout Configuration

Editors should only view the front-end rendering; only site builders may modify layouts. Which permission controls access to the Layout Builder UI for a content type?

### Options
- "Configure layout" for that content type.
- "Administer blocks."
- "Administer themes."
- "Use contextual links."

### Correct Answers
- [0] "Configure layout" for that content type.

### Explanation
Layout Builder adds bundle-specific permissions such as "Configure layout for Article," which gate access to the editing UI.


### Question 267

**Domain:** Layout Configuration

Editors need a dropdown on each section to choose between "boxed" and "full-width" variants. Which extension point exposes additional section options without writing duplicate layouts?

### Options
- Provide a custom Layout Builder Styles plugin that offers boxed/full-width choices.
- Build separate layout plugins for each variant.
- Modify the section template to inspect query parameters.
- Add JavaScript to toggle container classes.

### Correct Answers
- [0] Provide a custom Layout Builder Styles plugin that offers boxed/full-width choices.

### Explanation
Layout Builder Styles plugins let you register reusable options editors can apply per section, avoiding duplicate layout plugins or fragile scripting.


### Question 268

**Domain:** Layout Configuration

You build a custom block plugin that reads the parent node's taxonomy terms when placed via Layout Builder. What must the block implement?

### Options
- `ContextAwarePluginInterface` so it can receive the entity context from Layout Builder.
- `LayoutBuilderPluginInterface`.
- `SectionStorageInterface`.
- Nothing; Layout Builder injects context automatically.

### Correct Answers
- [0] `ContextAwarePluginInterface` so it can receive the entity context from Layout Builder.

### Explanation
Context-aware blocks declare required contexts (like the current node) and Layout Builder supplies them when rendering entity layouts.


### Question 269

**Domain:** Layout Configuration

An editor experimented with a node's custom layout and wants to revert to the default. How can they do it from the UI?

### Options
- Use the "Revert to default layout" option in the Layout Builder sidebar.
- Delete and recreate the node.
- Run a Drush command to reset the layout.
- Disable Layout Builder temporarily.

### Correct Answers
- [0] Use the "Revert to default layout" option in the Layout Builder sidebar.

### Explanation
Layout Builder provides a UI action to discard overrides and restore the default layout for an entity.


### Question 270

**Domain:** Layout Configuration

Editors create inline blocks in Layout Builder, but they disappear when exporting configuration. Why?

### Options
- Inline blocks are stored with the entity override and are content, not configuration; use reusable custom blocks for shared content.
- Drush `cex` requires `--inline-blocks` flag.
- Inline blocks must live in a module's `config/install` directory.
- Layout Builder does not support configuration export.

### Correct Answers
- [0] Inline blocks are stored with the entity override and are content, not configuration; use reusable custom blocks for shared content.

### Explanation
Inline blocks belong to the entity's layout override and are saved as content. To share across sites, create reusable custom blocks which are configuration-aware.


## Performance

### Question 271

**Domain:** Performance

Audit logs reveal large CSS payloads on first paint. Which Drupal-friendly technique minimizes CSS without breaking aggregation?

### Options
- Split critical CSS into a dedicated library and mark it as `preload`, leaving the rest aggregated with `preprocess: true`.
- Disable CSS aggregation to simplify debugging.
- Inline all CSS into Twig templates.
- Serve CSS from a remote CDN without cache headers.

### Correct Answers
- [0] Split critical CSS into a dedicated library and mark it as `preload`, leaving the rest aggregated with `preprocess: true`.

### Explanation
Separating critical CSS while keeping aggregation ensures fast rendering and maintainable bundles without disabling Drupal's optimizations.


### Question 272

**Domain:** Performance

PageSpeed Insights flags render-blocking JavaScript in the theme. What change improves load without removing behaviors?

### Options
- Set library scripts to `defer: true` in `aurora.libraries.yml` so they execute after parsing.
- Load all scripts with `async` regardless of dependencies.
- Move scripts to inline tags in Twig.
- Disable Drupal behaviors entirely.

### Correct Answers
- [0] Set library scripts to `defer: true` in `aurora.libraries.yml` so they execute after parsing.

### Explanation
Deferred scripts respect execution order and allow HTML to render before running behaviors, enhancing performance without breaking dependencies.


### Question 273

**Domain:** Performance

You detect duplicated dependencies across multiple libraries. How does Drupal help reduce the overhead?

### Options
- Declare shared dependencies in a base library and reference it via `dependencies` to avoid duplicate asset loading.
- Ignore the duplicates; Drupal automatically deduplicates all scripts.
- Inline the dependencies to eliminate HTTP requests.
- Load each library conditionally in Twig.

### Correct Answers
- [0] Declare shared dependencies in a base library and reference it via `dependencies` to avoid duplicate asset loading.

### Explanation
Drupal tracks dependencies; declaring them centrally ensures each asset loads once, improving caching and reducing payload.


### Question 274

**Domain:** Performance

Database profiling shows slow view queries in a block placed in Layout Builder. What is a quick mitigation?

### Options
- Enable view caching and set an appropriate cache max-age/context for the block.
- Disable the block entirely.
- Move the block to a different region.
- Increase PHP memory.

### Correct Answers
- [0] Enable view caching and set an appropriate cache max-age/context for the block.

### Explanation
View caching stores query results, reducing repeated database hits while respecting context variations.


### Question 275

**Domain:** Performance

You need to monitor front-end performance regressions automatically. Which tooling fits into a CI pipeline?

### Options
- Integrate Lighthouse CI or WebPageTest scripting into deployments.
- Rely on manual Chrome DevTools audits monthly.
- Ask editors to report slow pages.
- Run `ab` (ApacheBench) locally.

### Correct Answers
- [0] Integrate Lighthouse CI or WebPageTest scripting into deployments.

### Explanation
Automated performance testing alerts teams to regressions on every build, whereas manual audits are inconsistent.


### Question 276

**Domain:** Performance

Theme developers add large hero videos. How can you keep the homepage fast without removing videos entirely?

### Options
- Use the Media module's `poster` and lazy-loading strategies, loading video only on interaction.
- Auto-play videos muted.
- Host videos externally and iframe them.
- Disable video uploads.

### Correct Answers
- [0] Use the Media module's `poster` and lazy-loading strategies, loading video only on interaction.

### Explanation
Posters and lazy load techniques allow deferring heavy video files until a user opts in, improving initial paint metrics.


### Question 277

**Domain:** Performance

Your build pipeline needs to purge old assets after deploying hashed files. What ensures users don't download obsolete bundles?

### Options
- Serve assets with long cache headers and unique hashed filenames, removing the previous build assets post-deploy.
- Set cache headers to zero for all assets.
- Rename files manually after each release without hashes.
- Use query strings like `?v=latest` only.

### Correct Answers
- [0] Serve assets with long cache headers and unique hashed filenames, removing the previous build assets post-deploy.

### Explanation
Hashed filenames combined with long caching guarantee users receive new bundles when they change, and old files can be purged safely.


### Question 278

**Domain:** Performance

When analyzing the waterfall chart, you discover third-party fonts delay first paint. What performance technique mitigates this?

### Options
- Use `font-display: swap` and preload key font files.
- Remove all custom fonts.
- Embed fonts as Base64 inline data URIs.
- Load fonts after `load` event via JavaScript.

### Correct Answers
- [0] Use `font-display: swap` and preload key font files.

### Explanation
Preloading plus `font-display: swap` keeps text visible while fonts load, minimizing layout shifts and blank text.


### Question 279

**Domain:** Performance

After enabling aggregation for launch you discover the site is still serving dozens of discrete CSS and JavaScript files because a developer disabled preprocessing during QA. Which Drupal core control should you use to restore aggregation?

### Options
- Visit `/admin/config/development/performance` and re-enable CSS and JavaScript aggregation.
- Run the front-end build task so the theme outputs minified bundles again.
- Toggle `$config['system.performance']['css']['preprocess'] = FALSE` in `settings.php`.
- Delete the `sites/default/files/css` directory and let Drupal rebuild it.

### Correct Answers
- [0] Visit `/admin/config/development/performance` and re-enable CSS and JavaScript aggregation.

### Explanation
The Performance configuration page manages Drupal's core aggregation flags. Rebuilding front-end assets or deleting generated files won't change the configuration value, and overriding it in `settings.php` hardcodes env-specific state that bypasses normal config management.


### Question 280

**Domain:** Performance

An API-driven block performs expensive fetches at runtime. How can you cache results without sacrificing freshness?

### Options
- Implement cache tags and max-age on the render array, and use cache invalidation when upstream data changes.
- Disable caching entirely to keep content fresh.
- Store results in JavaScript local storage only.
- Increase PHP execution timeouts.

### Correct Answers
- [0] Implement cache tags and max-age on the render array, and use cache invalidation when upstream data changes.

### Explanation
Cache metadata allows Drupal to reuse expensive results while still invalidating caches when tagged data updates, balancing freshness and performance.


### Question 281

**Domain:** Performance

Your personalized dashboard renders slowly because the entire page waits on an API call before responding. Which core module streams cacheable markup immediately while delaying personalized sections?

### Options
- Enable the BigPipe module so cacheable regions render first and personalize later.
- Disable caching entirely for the page.
- Use Layout Builder to rearrange blocks.
- Replace the API call with a cron job.

### Correct Answers
- [0] Enable the BigPipe module so cacheable regions render first and personalize later.

### Explanation
BigPipe streams cacheable markup as soon as it's ready and fills dynamic placeholders afterward, reducing perceived latency without removing personalization.


### Question 282

**Domain:** Performance

A marketing landing page rarely changes and should be cached by the CDN for an hour. How can you signal this from Drupal?

### Options
- Set `#cache['max-age'] = 3600` on the top-level render array for the page.
- Disable Dynamic Page Cache so the CDN handles caching.
- Add `Cache-Control: no-cache` headers manually.
- Clear Drupal caches every hour.

### Correct Answers
- [0] Set `#cache['max-age'] = 3600` on the top-level render array for the page.

### Explanation
Max-age declares how long downstream caches may reuse the response. Setting it on the render array propagates the header, enabling CDN caching without manual header hacks.


### Question 283

**Domain:** Performance

Hero images load slowly on mobile because the same 2000px JPEG serves all devices. What is the recommended Drupal-centric fix?

### Options
- Create a responsive image style that maps breakpoints to appropriately sized image derivatives.
- Enable CSS aggregation.
- Inline the base64-encoded image in the template.
- Serve a single WebP file regardless of device.

### Correct Answers
- [0] Create a responsive image style that maps breakpoints to appropriately sized image derivatives.

### Explanation
Responsive image styles generate size-specific derivatives tied to breakpoints, letting browsers pick the smallest suitable asset. Aggregation or inlining does not address oversized images.


### Question 284

**Domain:** Performance

Your theme bundles third-party scripts totaling 500 KB, even on pages that don't use them. How can you reduce unnecessary downloads?

### Options
- Split the functionality into separate libraries and attach them only to templates that need them.
- Increase PHP memory limits.
- Disable JavaScript aggregation so files stay separate.
- Add the scripts via CDN to leverage HTTP/2 multiplexing.

### Correct Answers
- [0] Split the functionality into separate libraries and attach them only to templates that need them.

### Explanation
Creating smaller, context-specific libraries ensures only required scripts load per page, reducing payload. Memory limits and CDN hosting do not eliminate unnecessary transfers.


### Question 285

**Domain:** Performance

Your theme bundles third-party scripts totaling 500 KB, even on pages that don't use them. How can you reduce unnecessary downloads?

### Options
- Split the functionality into separate libraries and attach them only to templates that need them.
- Increase PHP memory limits.
- Disable JavaScript aggregation so files stay separate.
- Add the scripts via CDN to leverage HTTP/2 multiplexing.

### Correct Answers
- [0] Split the functionality into separate libraries and attach them only to templates that need them.

### Explanation
Creating smaller, context-specific libraries ensures only required scripts load per page, reducing payload. Memory limits and CDN hosting do not eliminate unnecessary transfers.


## Security

### Question 286

**Domain:** Security

Security review flags inline JavaScript in Twig templates. How should you move behaviors to keep the theme secure?

### Options
- Register a library with the JS file and attach it via `attach_library()` so the code runs through Drupal's asset pipeline.
- Escape the inline script with `|escape('js')`.
- Wrap the script in `{% autoescape false %}`.
- Disable Twig auto-escaping.

### Correct Answers
- [0] Register a library with the JS file and attach it via `attach_library()` so the code runs through Drupal's asset pipeline.

### Explanation
Libraries ensure scripts are loaded safely with proper sanitation and CSP compliance, rather than embedding raw inline code.


### Question 287

**Domain:** Security

You must prevent editors from injecting raw HTML into a text field. Which Drupal feature enforces safe markup?

### Options
- Configure the text format to use a filtered HTML editor with allowed tags and automatic sanitization.
- Train editors not to paste HTML.
- Strip tags in Twig.
- Disable the field entirely.

### Correct Answers
- [0] Configure the text format to use a filtered HTML editor with allowed tags and automatic sanitization.

### Explanation
Text formats control which HTML is permitted and apply server-side filtering, providing a systematic defense against injected markup.


### Question 288

**Domain:** Security

While building a custom Twig filter, you need to ensure dynamic output is escaped properly. Which security measure should you implement in the filter class?

### Options
- Mark the filter as safe only when returning sanitized markup, otherwise rely on Twig's default escaping.
- Always return raw strings marked safe to avoid double escaping.
- Disable Twig escaping globally when the filter is used.
- Escape strings in JavaScript instead.

### Correct Answers
- [0] Mark the filter as safe only when returning sanitized markup, otherwise rely on Twig's default escaping.

### Explanation
Declaring safe outputs triggers Twig to skip escaping only for sanitized content; everything else remains escaped by default.


### Question 289

**Domain:** Security

You must protect against clickjacking on personalized dashboards. Which HTTP header should the theme ensure is set?

### Options
- `Content-Security-Policy` with `frame-ancestors 'self'`
- `X-Powered-By`
- `Referrer-Policy`
- `Access-Control-Allow-Origin: *`

### Correct Answers
- [0] `Content-Security-Policy` with `frame-ancestors 'self'`

### Explanation
`frame-ancestors` restricts which origins can embed the site, preventing clickjacking. Other headers serve different purposes.


### Question 290

**Domain:** Security

Your theme exposes user profile images. How do you prevent direct hotlinking while keeping them available in templates?

### Options
- Serve images through Drupal's private file system and generate URLs via `file_url()` respecting access checks.
- Store images in the public filesystem with no changes.
- Inline images in Twig using Base64.
- Block all image exports.

### Correct Answers
- [0] Serve images through Drupal's private file system and generate URLs via `file_url()` respecting access checks.

### Explanation
Private files enforce access control, ensuring only authorized requests receive profile images while templates can still reference generated URLs.


### Question 291

**Domain:** Security

Pen testers discover the theme loads third-party scripts over HTTP. What is the correct fix?

### Options
- Update the library definitions to load assets over HTTPS and enable Subresource Integrity (SRI) hashes when possible.
- Move the scripts to inline blocks.
- Allow HTTP because browsers upgrade requests automatically.
- Disable the scripts entirely.

### Correct Answers
- [0] Update the library definitions to load assets over HTTPS and enable Subresource Integrity (SRI) hashes when possible.

### Explanation
HTTPS prevents tampering in transit, and SRI adds integrity checks, preserving security when referencing third-party assets.


### Question 292

**Domain:** Security

You must sanitize data passed to JavaScript via `drupalSettings`. What's the secure practice?

### Options
- Encode values with `Html::escape()` or `Xss::filter()` before assigning them to `drupalSettings`.
- Pass entities directly without sanitation.
- Sanitize values inside JavaScript.
- Disable `drupalSettings` usage.

### Correct Answers
- [0] Encode values with `Html::escape()` or `Xss::filter()` before assigning them to `drupalSettings`.

### Explanation
Sanitizing server-side ensures data arriving in JS is safe, reducing XSS exposure in dynamic scripts.


### Question 293

**Domain:** Security

Security policy requires that authenticated users log out automatically after a period of inactivity. How can the theme support this?

### Options
- Implement front-end idle detection that triggers Drupal's logout route after an inactivity timeout, supplementing server-side session limits.
- Rely solely on browser tab closing.
- Remove session cookies via JavaScript on every page load.
- Disable caching entirely.

### Correct Answers
- [0] Implement front-end idle detection that triggers Drupal's logout route after an inactivity timeout, supplementing server-side session limits.

### Explanation
Client-side idle scripts can call logout endpoints when combined with server-side session expiration, aligning with security policies.


### Question 294

**Domain:** Security

You must audit the theme for third-party libraries with known vulnerabilities. What process helps you stay compliant?

### Options
- Use automated dependency scanning tools (like `npm audit` or `yarn audit`) and track advisories in the release pipeline.
- Wait for users to report issues.
- Ignore warnings during npm installs.
- Disable all third-party libraries.

### Correct Answers
- [0] Use automated dependency scanning tools (like `npm audit` or `yarn audit`) and track advisories in the release pipeline.

### Explanation
Regular dependency scans surface vulnerabilities early, enabling timely updates and compliance with security requirements.


### Question 295

**Domain:** Security

Customer invoices uploaded through the admin UI should never be publicly accessible. How do you enforce this in Drupal?

### Options
- Store the files using the private file system and deliver them through access-controlled routes.
- Obfuscate the public file URL with random strings.
- Place the files in a hidden directory under the theme.
- Zip the files before upload.

### Correct Answers
- [0] Store the files using the private file system and deliver them through access-controlled routes.

### Explanation
Private file schemes enforce Drupal access checks before serving files, preventing direct downloads. Public files remain web-accessible even with obfuscated paths.


### Question 296

**Domain:** Security

Your theme outputs user-supplied quotes using a custom text format. To prevent editors from adding risky HTML, what should you configure?

### Options
- Define an Input Filter (text format) that allows only safe tags and assign it to the field.
- Strip all HTML in Twig with `|striptags`.
- Sanitize quotes manually in preprocess with `Html::escape()`.
- Trust editors and leave the format as Full HTML.

### Correct Answers
- [0] Define an Input Filter (text format) that allows only safe tags and assign it to the field.

### Explanation
Text formats enforce trusted markup at input, preventing unsafe HTML from being stored or rendered. Twig filters and manual escaping are error-prone.


### Question 297

**Domain:** Security

A custom settings form saves API credentials. How should you store the secret key securely?

### Options
- Place the credential in `settings.php` (or the environment) and read it from configuration overrides.
- Save it directly in configuration so it's exported with code.
- Store it as a theme setting.
- Hardcode it in JavaScript.

### Correct Answers
- [0] Place the credential in `settings.php` (or the environment) and read it from configuration overrides.

### Explanation
Secrets should live outside exported configuration, typically in `settings.php` or environment variables. Storing them in config or themes exposes them in version control.


### Question 298

**Domain:** Security

Users reported that staging URLs are indexed by search engines. Which Drupal security setting prevents host header spoofing and unintended access?

### Options
- Configure trusted host patterns in `settings.php`.
- Disable CSS aggregation.
- Enable maintenance mode permanently.
- Use Layout Builder restrictions.

### Correct Answers
- [0] Configure trusted host patterns in `settings.php`.

### Explanation
Trusted host patterns restrict which hostnames Drupal responds to, blocking spoofed requests and accidental indexing of unintended domains.


### Question 299

**Domain:** Security

A custom REST endpoint accepts JSON payloads. How do you protect it against cross-site request forgery?

### Options
- Require the standard Drupal CSRF token by validating `X-CSRF-Token` on POST requests.
- Trust the Origin header from the browser.
- Disable caching on the endpoint.
- Use a random query string parameter.

### Correct Answers
- [0] Require the standard Drupal CSRF token by validating `X-CSRF-Token` on POST requests.

### Explanation
Drupal's REST endpoints should validate CSRF tokens for unsafe methods. Relying on origin headers or random parameters is insufficient.







### Question 300

**Domain:** Security

Security reviewers require that authenticated session cookies are HTTPS-only and inaccessible to JavaScript. Where do you enforce these flags in Drupal?

### Options
- Set `$settings['cookie_secure'] = TRUE;` and `$settings['cookie_httponly'] = TRUE;` in `settings.php`.
- Override the cookie headers in Twig templates.
- Configure the theme's `.info.yml` file.
- Enable maintenance mode.

### Correct Answers
- [0] Set `$settings['cookie_secure'] = TRUE;` and `$settings['cookie_httponly'] = TRUE;` in `settings.php`.

### Explanation
Secure and HTTP-only cookie flags are enforced via Drupal's settings. Modifying templates or maintenance mode does not adjust cookie behavior.

