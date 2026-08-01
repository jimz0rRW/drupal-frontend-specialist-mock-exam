# Acquia Certified Drupal Front End Specialist Practice Questions

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

### Question 3

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

### Question 4

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

### Question 5

**Domain:** Fundamental Web Development Concepts

You are adopting Single Directory Components in a custom theme named `skyline`. How do you make components discoverable so Twig and libraries load automatically?

### Options
- Place each component under `skyline/components/` with matching `*.component.yml`, `*.twig`, and optional CSS/JS sharing the same basename.
- Declare a `component-libraries` section in `skyline.info.yml` that maps a library name to the component folder.
- Configure the directory in the Appearance UI under theme settings.
- Register the path inside `skyline.theme` using `hook_theme()`.

### Correct Answers
- [0] Place each component under `skyline/components/` with matching `*.component.yml`, `*.twig`, and optional CSS/JS sharing the same basename.

### Explanation
Core SDC auto-discovers components under the theme `components/` directory. The contrib Components module’s `component-libraries` key is not how core SDC registration works.

### Question 6

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

### Question 7

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

### Question 8

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

### Question 9

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

### Question 10

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

### Question 11

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

### Question 12

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

### Question 13

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

### Question 14

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

### Question 15

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

### Question 16

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

### Question 17

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

### Question 18

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

### Question 19

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

### Question 20

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

### Question 21

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

### Question 22

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

### Question 23

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

### Question 24

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

### Question 25

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

### Question 26

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

### Question 27

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

### Question 28

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

### Question 29

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

### Question 30

**Domain:** Fundamental Web Development Concepts

CMS users upload hero background videos. You must avoid autoplay when users prefer reduced data usage. Which approach supports that goal?

### Options
- Detect reduced-data preferences (for example `navigator.connection?.saveData` or `prefers-reduced-data` where available) and skip autoplay/preload for those users.
- Add only the `preload="none"` attribute and keep `autoplay` enabled.
- Set `muted` so autoplay is blocked for everyone.
- Add `loop` to keep the video short.

### Correct Answers
- [0] Detect reduced-data preferences (for example `navigator.connection?.saveData` or `prefers-reduced-data` where available) and skip autoplay/preload for those users.

### Explanation
`preload="none"` alone does not honor Save-Data preferences and does not disable autoplay. Prefer explicit preference detection and conditional playback.

### Question 31

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

### Question 32

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

### Question 33

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

### Question 34

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

### Question 35

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

### Question 36

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

### Question 37

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

### Question 38

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

### Question 39

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

### Question 40

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

### Question 41

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

### Question 42

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

### Question 43

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

### Question 44

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

### Question 45

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

### Question 46

**Domain:** Fundamental Web Development Concepts

You must ensure that a toggle switch built with `<button>` communicates its on/off state. Which attribute pairing provides robust semantics?

### Options
- Use `role="switch"` and keep `aria-checked` in sync as `true` or `false` when the state changes.
- Use only `aria-pressed` because that is the required attribute for switches.
- Add `role="switch"` without any state attribute.
- Replace the button with a `<div>` and toggle classes.

### Correct Answers
- [0] Use `role="switch"` and keep `aria-checked` in sync as `true` or `false` when the state changes.

### Explanation
Switches expose state with `role="switch"` and `aria-checked`. `aria-pressed` is for toggle buttons, not switch widgets.

### Question 47

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

### Question 48

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

### Question 49

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

### Question 50

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

### Question 51

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

### Question 52

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

### Question 53

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

### Question 54

**Domain:** Fundamental Web Development Concepts

You are building a product listing page in Drupal 11. Each product teaser must be announced as a self-contained unit by assistive technologies, with the title and price grouped as introductory content. Which markup pattern best meets this requirement?

### Options
- Wrap each teaser in an <article> with a nested <header> for the title and price.
- Use a bare <div> for each teaser and rely on CSS class names for structure.
- Wrap teasers only in <section> elements without an article landmark.
- Render each teaser as a <span> inside a single parent <div> for the whole list.

### Correct Answers
- [0] Wrap each teaser in an <article> with a nested <header> for the title and price.

### Explanation
An <article> signals a standalone content unit, and a nested <header> groups introductory metadata such as title and price. This semantic pattern is preferred over generic divs or spans for accessible, reusable teasers.

### Question 55

**Domain:** Fundamental Web Development Concepts

Design requires hero headlines to scale smoothly between 320px and 1200px viewports without a media-query ladder. Which CSS approach should you use?

### Options
- Set font-size in fixed px values and override them at every breakpoint.
- Use clamp() with a rem minimum, a viewport-based preferred value, and a rem maximum.
- Toggle utility classes from JavaScript on every window resize event.
- Apply font-size: 100% and expect the browser to scale headlines automatically.

### Correct Answers
- [1] Use clamp() with a rem minimum, a viewport-based preferred value, and a rem maximum.

### Explanation
clamp() provides a minimum, preferred, and maximum size in one declaration, enabling fluid typography without proliferating breakpoints or resize listeners.

### Question 56

**Domain:** Fundamental Web Development Concepts

You are implementing a mobile navigation drawer that must meet WCAG keyboard and state requirements. How should the toggle be built? (Choose two)

### Options
- Use a <button> element as the control that opens and closes the drawer.
- Keep aria-expanded on the control in sync with the drawer's open or closed state.
- Use an <a href="#"> link and toggle visibility with CSS :hover only.
- Add tabindex="-1" to every menu link while the drawer is open.

### Correct Answers
- [0] Use a <button> element as the control that opens and closes the drawer.
- [1] Keep aria-expanded on the control in sync with the drawer's open or closed state.

### Explanation
A real button exposes correct keyboard semantics, and updating aria-expanded communicates open/closed state to assistive technologies. Hover-only links and blanket tabindex changes do not satisfy accessible disclosure patterns.

### Question 57

**Domain:** Fundamental Web Development Concepts

Editors paste rich text that must appear as plain text in a Twig template with no HTML tags rendered. Which approach should your preprocess use before returning the string?

### Options
- Call strip_tags() so markup is removed and the remaining text can be escaped on output.
- Pass the raw string through without sanitization so Twig can decide.
- Wrap the string in <script> tags to neutralize HTML.
- Use htmlspecialchars_decode() so entities become live markup again.

### Correct Answers
- [0] Call strip_tags() so markup is removed and the remaining text can be escaped on output.

### Explanation
strip_tags() removes HTML tags from the editor input. Combined with Twig's auto-escaping (or an explicit escape), this yields safe plain-text output suitable for non-HTML contexts.

### Question 58

**Domain:** Fundamental Web Development Concepts

A listing must show differently sized images across breakpoints while keeping a single image style pipeline. Which Drupal-aligned approach should you choose?

### Options
- Configure a responsive image style that maps breakpoints to image styles and outputs a <picture> or srcset.
- Hard-code multiple <img> tags and hide unused ones with display:none.
- Serve only the largest derivative and scale it down with CSS width:100%.
- Load the original upload URL and rely on the browser's intrinsic sizing alone.

### Correct Answers
- [0] Configure a responsive image style that maps breakpoints to image styles and outputs a <picture> or srcset.

### Explanation
Drupal's Responsive Image module maps breakpoints to image styles and emits srcset/picture markup, delivering appropriately sized assets per viewport instead of CSS-only downscaling or duplicate hidden images.

### Question 59

**Domain:** Fundamental Web Development Concepts

You need a two-column card grid that wraps to one column on narrow viewports without floats. Which CSS layout method is most appropriate?

### Options
- CSS Grid or Flexbox with a media query or auto-fit to collapse to a single column.
- Absolute positioning each card with calculated left offsets.
- A table layout with colspan changes via JavaScript.
- Float:left on every card and clearfix hacks for wrapping.

### Correct Answers
- [0] CSS Grid or Flexbox with a media query or auto-fit to collapse to a single column.

### Explanation
Grid and Flexbox are the modern, maintainable tools for responsive multi-column layouts. Absolute positioning, tables, and float hacks are brittle and harder to keep accessible.

### Question 60

**Domain:** Fundamental Web Development Concepts

Your theme JavaScript attaches behaviors that must run once per matched element even after Drupal.attachBehaviors runs again via AJAX. Which Drupal 10/11 pattern should you use?

### Options
- Import once from core/once and call once('myFeature', context.querySelectorAll('.selector')).forEach(...).
- Use jQuery.once from core/jquery.once as the primary Drupal 11 API.
- Set a global window flag and skip all future attachBehaviors calls site-wide.
- Bind handlers with document.write inside the behavior attach callback.

### Correct Answers
- [0] Import once from core/once and call once('myFeature', context.querySelectorAll('.selector')).forEach(...).

### Explanation
Drupal 10/11 uses the core/once library (not the deprecated jQuery.once) so behaviors process each element only once across initial load and AJAX reattachments.

### Question 61

**Domain:** Fundamental Web Development Concepts

A modal dialog opens from a toolbar button. Which focus-management practices keep the pattern WCAG-conformant? (Choose two)

### Options
- Move focus into the dialog when it opens, typically to the first meaningful control or the dialog container.
- Restore focus to the triggering control when the dialog closes.
- Leave focus on the page behind the dialog so users can keep tabbing the background.
- Remove the dialog from the accessibility tree only while it remains visible.

### Correct Answers
- [0] Move focus into the dialog when it opens, typically to the first meaningful control or the dialog container.
- [1] Restore focus to the triggering control when the dialog closes.

### Explanation
Accessible dialogs move focus into the modal on open and return it to the trigger on close. Leaving focus in the background or incorrectly removing the open dialog from the a11y tree breaks keyboard and screen-reader users.

### Question 62

**Domain:** Fundamental Web Development Concepts

You are styling form error messages so sighted and screen-reader users both understand which fields failed validation. Which combination is required?

### Options
- Associate each error with its field via aria-describedby (or equivalent) and keep a clear visible error text.
- Show errors only as red borders with no text.
- Announce errors solely with a console.log for developers.
- Hide error text with visibility:hidden while leaving aria-invalid unset.

### Correct Answers
- [0] Associate each error with its field via aria-describedby (or equivalent) and keep a clear visible error text.

### Explanation
WCAG requires perceivable error identification. Linking messages with aria-describedby (and typically aria-invalid) plus visible text ensures both visual and assistive-tech users understand the failure.

### Question 63

**Domain:** Fundamental Web Development Concepts

The design system defines brand colors as tokens reused across components. Which CSS feature best supports themeable, maintainable tokens in Drupal front-end work?

### Options
- CSS custom properties (variables) defined on :root or a theme wrapper and consumed by components.
- Hard-coded hex values duplicated in every component stylesheet.
- Inline style attributes on every Twig template node.
- Server-side color replacement by rewriting compiled CSS after every deploy.

### Correct Answers
- [0] CSS custom properties (variables) defined on :root or a theme wrapper and consumed by components.

### Explanation
Custom properties provide a single source of truth for design tokens and can be overridden by themes or contexts without rewriting every rule.

### Question 64

**Domain:** Fundamental Web Development Concepts

A skip link must let keyboard users bypass repetitive header navigation. Where should the skip link point and how should it behave?

### Options
- Link to the main content landmark (for example #main-content) and become visible on focus.
- Link to the site logo so users restart at the top of the page.
- Link to an off-site help page in a new window.
- Use a button that only scrolls visually without a matching in-page target.

### Correct Answers
- [0] Link to the main content landmark (for example #main-content) and become visible on focus.

### Explanation
Skip links target the primary content landmark and are typically visually hidden until focused, satisfying WCAG bypass-blocks guidance for keyboard users.

### Question 65

**Domain:** Fundamental Web Development Concepts

You need icons that convey meaning (not decoration) next to status labels. Which approach is accessible?

### Options
- Provide an accessible name for the icon (aria-label, visually hidden text, or equivalent) matching its meaning.
- Use a background-image icon with no text alternative because CSS images are ignored.
- Set aria-hidden="true" on meaningful icons so they never compete with labels.
- Rely on color alone to communicate the status without text or labels.

### Correct Answers
- [0] Provide an accessible name for the icon (aria-label, visually hidden text, or equivalent) matching its meaning.

### Explanation
Meaningful icons need a text alternative. Decorative icons may be hidden from AT, but status icons that convey information must expose their meaning and must not rely on color alone.

### Question 66

**Domain:** Fundamental Web Development Concepts

Your landing page hero must remain readable when text is resized to 200% per WCAG. Which practices help? (Choose two)

### Options
- Prefer relative units such as rem for typography and spacing that should scale with text size.
- Avoid fixed-height containers that clip or hide overflowing text when font size increases.
- Lock all text to px sizes and overflow:hidden on every section.
- Disable browser zoom with a maximum-scale=1 viewport meta tag.

### Correct Answers
- [0] Prefer relative units such as rem for typography and spacing that should scale with text size.
- [1] Avoid fixed-height containers that clip or hide overflowing text when font size increases.

### Explanation
Relative units and flexible containers allow text to reflow at 200% without clipping. Fixed heights with overflow hidden and disabling zoom actively harm WCAG resize/reflow requirements.

### Question 67

**Domain:** Fundamental Web Development Concepts

A custom front-end script needs to wait until the DOM in a given Drupal context is ready and then query elements within that context. What is the correct Drupal behavior pattern?

### Options
- Implement Drupal.behaviors.myFeature = { attach(context, settings) { /* query within context */ } } and declare the library dependency.
- Only use window.onload and always query document without using context.
- Put the script inline in html.html.twig with no library declaration.
- Call jQuery(document).ready exclusively and ignore Drupal.behaviors.

### Correct Answers
- [0] Implement Drupal.behaviors.myFeature = { attach(context, settings) { /* query within context */ } } and declare the library dependency.

### Explanation
Drupal.behaviors.attach receives a context so scripts work on full page loads and AJAX replacements. Libraries.yml should declare the script and its dependencies.

### Question 68

**Domain:** Fundamental Web Development Concepts

You must ensure interactive controls meet WCAG 2.2 target size expectations on a touch-first Drupal site. Which guidance should you follow?

### Options
- Provide adequately large hit areas (commonly at least 24x24 CSS pixels under WCAG 2.2, with larger targets preferred) and sufficient spacing.
- Keep all tap targets at 8x8 CSS pixels to maximize density.
- Make only mouse hover areas large; touch targets can remain tiny.
- Rely on browser defaults for unchecked radio dots without enlarging the clickable label area.

### Correct Answers
- [0] Provide adequately large hit areas (commonly at least 24x24 CSS pixels under WCAG 2.2, with larger targets preferred) and sufficient spacing.

### Explanation
WCAG 2.2 introduces stricter target-size criteria. Adequately sized controls and spacing reduce mis-taps; tiny 8px targets fail common mobile usability and accessibility expectations.

### Question 69

**Domain:** Fundamental Web Development Concepts

A data table of event schedules must be accessible. Which HTML practice is essential?

### Options
- Use <table>, <th> with scope (or headers/id), and a caption or aria-labelledby for the table name.
- Build the grid entirely from nested <div> elements styled to look like a table.
- Put each row in a separate <ul> without header cells.
- Use a single paragraph with spaces and line breaks to simulate columns.

### Correct Answers
- [0] Use <table>, <th> with scope (or headers/id), and a caption or aria-labelledby for the table name.

### Explanation
Real table markup with header cells and a name lets assistive technologies announce row/column relationships. Div-based faux tables lose that structure.

### Question 70

**Domain:** Fundamental Web Development Concepts

You are optimizing front-end assets for a content-heavy Drupal page. Which statements about images are correct? (Choose two)

### Options
- Provide width and height (or aspect-ratio) so the browser can reserve space and reduce layout shift.
- Use modern formats (for example WebP/AVIF via image styles) when supported to reduce transfer size.
- Omit dimensions always so the browser discovers size only after download.
- Upload multi-megabyte originals directly into <img src> without derivatives.

### Correct Answers
- [0] Provide width and height (or aspect-ratio) so the browser can reserve space and reduce layout shift.
- [1] Use modern formats (for example WebP/AVIF via image styles) when supported to reduce transfer size.

### Explanation
Explicit dimensions (or aspect-ratio) mitigate CLS, and modern formats via Drupal image styles reduce bytes. Omitting dimensions and serving raw huge originals harm performance.

### Question 71

**Domain:** Fundamental Web Development Concepts

A form field is required. Beyond the visual asterisk, what should you do for accessibility?

### Options
- Mark the control required with the required attribute and/or aria-required and include clear accessible labeling.
- Use color alone (red outline) with no accessible name indicating required state.
- Hide the label and rely on placeholder text as the only name.
- Put the word Required only in a title tooltip on mouse hover.

### Correct Answers
- [0] Mark the control required with the required attribute and/or aria-required and include clear accessible labeling.

### Explanation
Programmatic required state plus a proper label ensures AT users know the field is mandatory. Color-only cues, placeholder-as-label, and hover-only tooltips are insufficient.

### Question 72

**Domain:** Fundamental Web Development Concepts

Your CSS must support a dark color scheme preference when editors enable a dark variant. Which approach aligns with modern CSS fundamentals?

### Options
- Use a prefers-color-scheme media query and/or a theme class that swaps CSS custom property values.
- Detect the preference only in PHP and inline every color on each request with no CSS variables.
- Ship a separate Drupal core fork for dark mode.
- Force dark colors with !important on html without respecting user preference.

### Correct Answers
- [0] Use a prefers-color-scheme media query and/or a theme class that swaps CSS custom property values.

### Explanation
prefers-color-scheme and token swaps via custom properties (or a theme class) are maintainable ways to support dark variants without hard-coding every color in PHP.

### Question 73

**Domain:** Fundamental Web Development Concepts

You need a visually hidden heading that remains available to screen readers for page structure. Which technique is appropriate?

### Options
- Apply a visually-hidden/sr-only CSS pattern that clips or positions content off-screen without display:none.
- Use display:none so the heading is removed from both vision and the accessibility tree.
- Set font-size:0 and color:transparent only, leaving the text focusable in an unpredictable way.
- Delete the heading from the DOM and add an unrelated aria-label on the body.

### Correct Answers
- [0] Apply a visually-hidden/sr-only CSS pattern that clips or positions content off-screen without display:none.

### Explanation
Visually hidden CSS keeps content in the accessibility tree while hiding it visually. display:none removes it from AT, defeating the purpose of a screen-reader-only heading.

### Question 74

**Domain:** Fundamental Web Development Concepts

A carousel auto-rotates promotional slides. Which WCAG-oriented controls must you provide? (Choose two)

### Options
- A mechanism to pause, stop, or hide the moving content.
- Keyboard-operable previous/next (or equivalent) controls for slide changes.
- Auto-rotation that cannot be paused because motion draws attention.
- Mouse-only drag interaction with no keyboard alternative.

### Correct Answers
- [0] A mechanism to pause, stop, or hide the moving content.
- [1] Keyboard-operable previous/next (or equivalent) controls for slide changes.

### Explanation
WCAG requires users to pause or stop moving content and to operate carousels without a mouse. Unstoppable autoplay and mouse-only controls fail accessibility requirements.

### Question 75

**Domain:** Fundamental Web Development Concepts

You are choosing units for a layout container that should track the viewport width while respecting root font size for nested type. Which pairing is sensible?

### Options
- Use % or vw/svw-related units for fluid containers and rem for typography that should scale with root font size.
- Use only pt units for both layout and type on the web.
- Use cm units so print and screen always match exactly.
- Use viewport units exclusively for font sizes with no minimum, risking unreadably small text.

### Correct Answers
- [0] Use % or vw/svw-related units for fluid containers and rem for typography that should scale with root font size.

### Explanation
Fluid layout units combined with rem-based type (often inside clamp) balance responsiveness with readable typography. Print units and unconstrained viewport fonts are poor defaults for web UI.

### Question 76

**Domain:** Fundamental Web Development Concepts

Inline SVG icons are injected into Twig. Decorative icons sit beside visible text labels. What should you do?

### Options
- Mark decorative SVGs aria-hidden="true" (and omit title) so assistive tech ignores them.
- Always add a redundant aria-label that repeats the adjacent visible text.
- Give every decorative SVG role="img" and a long description.
- Convert decorative SVGs to <img> with empty alt and also aria-label="icon".

### Correct Answers
- [0] Mark decorative SVGs aria-hidden="true" (and omit title) so assistive tech ignores them.

### Explanation
Decorative icons adjacent to visible text should be hidden from AT to avoid duplicate announcements. Meaningful standalone icons need accessible names instead.

### Question 77

**Domain:** Fundamental Web Development Concepts

Your team must meet WCAG contrast for body text on a branded background. Which statement is correct for normal-sized text under WCAG 2.1 AA?

### Options
- Normal text generally needs at least a 4.5:1 contrast ratio against its background.
- Any contrast above 2:1 is sufficient for AA normal text.
- Contrast requirements apply only to images, not to text.
- AA allows pure light-gray text on white if the brand guidelines say so.

### Correct Answers
- [0] Normal text generally needs at least a 4.5:1 contrast ratio against its background.

### Explanation
WCAG 2.1 Level AA requires about 4.5:1 contrast for normal text (with a lower threshold for large text). Brand preferences do not override this requirement.

### Question 78

**Domain:** Fundamental Web Development Concepts

A client-side script filters a list of cards as the user types. Which accessibility practice should you include?

### Options
- Update an aria-live region (or equivalent) so assistive tech hears result-count or status changes.
- Change the list silently with no status text because screen readers will guess.
- Remove all list items from the tab order permanently after the first keystroke.
- Disable the keyboard entirely while filtering runs.

### Correct Answers
- [0] Update an aria-live region (or equivalent) so assistive tech hears result-count or status changes.

### Explanation
Dynamic filter results should expose status updates through an aria-live region or similar so screen-reader users know how many items match without visual inspection.

### Question 79

**Domain:** Fundamental Web Development Concepts

In PHP, which statement correctly appends the string `banner` to an indexed array named `$classes`?

### Options
- `$classes[] = 'banner';`
- `$classes = 'banner';`
- `array_push($classes = 'banner');`
- `$classes->append('banner');`

### Correct Answers
- [0] `$classes[] = 'banner';`

### Explanation
Using `$array[] = $value` appends to an indexed array. Assigning a string overwrites the variable; objects use different APIs.

### Question 80

**Domain:** Fundamental Web Development Concepts

Which PHP comparison is both type-safe and the recommended default when checking that a variable equals the integer `0`?

### Options
- `$count === 0`
- `$count == 0`
- `$count = 0`
- `$count != null`

### Correct Answers
- [0] `$count === 0`

### Explanation
`===` compares value and type. `==` coerces types (so `'0' == 0` is true), and `=` is assignment.

### Question 81

**Domain:** Fundamental Web Development Concepts

What does the null coalescing operator return in `$title = $node->label() ?? 'Untitled';` when `label()` returns `null`?

### Options
- `'Untitled'`
- `null`
- `false`
- An empty string

### Correct Answers
- [0] `'Untitled'`

### Explanation
`??` yields the right-hand operand when the left side is `null` (or not set). It does not treat other falsy values like `0` or `''` as missing unless they are null.

### Question 82

**Domain:** Fundamental Web Development Concepts

Which PHP construct iterates both keys and values of an associative array `$attributes`?

### Options
- `foreach ($attributes as $key => $value) { ... }`
- `for ($attributes as $key => $value) { ... }`
- `each($attributes as $key => $value)`
- `loop ($attributes) { ... }`

### Correct Answers
- [0] `foreach ($attributes as $key => $value) { ... }`

### Explanation
`foreach` with `$key => $value` is the idiomatic way to walk associative arrays in PHP.

### Question 83

**Domain:** Fundamental Web Development Concepts

In modern PHP used by Drupal 10/11, which visibility keyword allows a property to be accessed only inside the defining class?

### Options
- `private`
- `public`
- `global`
- `static`

### Correct Answers
- [0] `private`

### Explanation
`private` restricts access to the class itself. `public` is open; `static` is about binding, not visibility; `global` is not a property visibility keyword.

### Question 84

**Domain:** Fundamental Web Development Concepts

Which two statements about PHP `isset()` and `empty()` are correct? (Choose two)

### Options
- `isset($var)` is false when `$var` is `null` or not defined.
- `empty('0')` evaluates to true because `'0'` is considered empty in PHP.
- `isset(0)` is false because zero is empty.
- `empty([])` is false because arrays are never empty.

### Correct Answers
- [0] `isset($var)` is false when `$var` is `null` or not defined.
- [1] `empty('0')` evaluates to true because `'0'` is considered empty in PHP.

### Explanation
`isset` fails for null/undefined. `empty` treats `'0'`, `0`, `''`, `null`, `false`, and `[]` as empty. Zero is a valid set value for `isset`.

### Question 85

**Domain:** Fundamental Web Development Concepts

You need a PHP function that accepts an optional string defaulting to an empty string. Which signature is valid?

### Options
- `function build_label(string $text = ''): string`
- `function build_label(string $text = null): string` without a nullable type
- `function build_label($text = ''): string $text`
- `function build_label(string $text): string = ''`

### Correct Answers
- [0] `function build_label(string $text = ''): string`

### Explanation
Default values belong in the parameter list. A `string` parameter cannot default to `null` unless typed `?string`.

### Question 86

**Domain:** Fundamental Web Development Concepts

Which PHP array function returns a new array containing only values that pass a callback test?

### Options
- `array_filter($items, $callback)`
- `array_map($callback, $items)`
- `array_merge($items, $callback)`
- `array_values($callback)`

### Correct Answers
- [0] `array_filter($items, $callback)`

### Explanation
`array_filter` keeps elements for which the callback returns true. `array_map` transforms elements; it does not filter.

### Question 87

**Domain:** Fundamental Web Development Concepts

In Drupal-oriented PHP, which structure is a render array that will print markup through the render system?

### Options
- `['#markup' => 'Hello world']`
- `['markup' => 'Hello world']`
- `(object) ['text' => 'Hello world']`
- `'<div>Hello world</div>'` returned from a preprocess function as a raw string replacement for all of `$variables`

### Correct Answers
- [0] `['#markup' => 'Hello world']`

### Explanation
Render arrays use `#` keys such as `#markup`, `#theme`, and `#plain_text`. Plain associative keys are not render API elements.

### Question 88

**Domain:** Fundamental Web Development Concepts

Which two PHP language features help prevent null-related errors when reading nested data? (Choose two)

### Options
- Null coalescing: `$value = $data['title'] ?? 'n/a';`
- Nullsafe operator: `$label = $node?->label();`
- Using `==` instead of `===` for all comparisons
- Prefixing variables with `@` to suppress all errors permanently

### Correct Answers
- [0] Null coalescing: `$value = $data['title'] ?? 'n/a';`
- [1] Nullsafe operator: `$label = $node?->label();`

### Explanation
`??` and `?->` are the modern, intentional tools. Error suppression with `@` hides problems; loose equality does not solve null access.

### Question 89

**Domain:** Fundamental Web Development Concepts

What is the difference between `include` and `require` in PHP when the target file is missing?

### Options
- `require` emits a fatal error and stops execution; `include` emits a warning and continues.
- They behave identically in all PHP versions.
- `include` always fatals; `require` never fatals.
- Both silently return `false` with no warning.

### Correct Answers
- [0] `require` emits a fatal error and stops execution; `include` emits a warning and continues.

### Explanation
Missing `require`/`require_once` is fatal. Missing `include`/`include_once` warns and continues.

### Question 90

**Domain:** Fundamental Web Development Concepts

Which snippet correctly defines a simple PHP class with a constructor property promotion style used in modern PHP?

### Options
- `class Card { public function __construct(private string $title) {} }`
- `class Card($title) { private string $title; }`
- `class Card { function Card(string $title) { $this->title = $title; } }` as the only modern constructor form
- `struct Card { string $title; }`

### Correct Answers
- [0] `class Card { public function __construct(private string $title) {} }`

### Explanation
Constructor property promotion declares and assigns properties in `__construct`. PHP has classes, not structs; old PHP4-style constructors are obsolete.

### Question 91

**Domain:** Fundamental Web Development Concepts

You must check whether the key `url` exists in `$options` before reading it. Which expression is appropriate?

### Options
- `array_key_exists('url', $options)` or `isset($options['url'])` depending on null handling needs
- `in_array('url', $options)` which tests keys
- `property_exists($options, 'url')` for arrays
- `$options->has('url')` on a plain array

### Correct Answers
- [0] `array_key_exists('url', $options)` or `isset($options['url'])` depending on null handling needs

### Explanation
`array_key_exists` detects keys even when the value is `null`; `isset` is false for null. `in_array` checks values, not keys.

### Question 92

**Domain:** Fundamental Web Development Concepts

In a theme preprocess function, which variable is the standard by-reference array you modify to pass data into Twig?

### Options
- `$variables`
- `$form_state`
- `$_SESSION`
- `$GLOBALS['twig']`

### Correct Answers
- [0] `$variables`

### Explanation
`hook_preprocess_HOOK(&$variables)` receives `$variables` by reference; values you set become Twig variables.

### Question 93

**Domain:** Fundamental Web Development Concepts

Which PHP string function returns the portion of `$haystack` starting at the first occurrence of `$needle`, or `false` if not found?

### Options
- `strpos($haystack, $needle)` for the position; use `strstr($haystack, $needle)` for the substring from the match
- `explode($haystack, $needle)`
- `implode($haystack, $needle)`
- `str_split($needle)`

### Correct Answers
- [0] `strpos($haystack, $needle)` for the position; use `strstr($haystack, $needle)` for the substring from the match

### Explanation
`strpos` returns an offset (or false). `strstr` returns the matched tail. Explode/implode split/join on delimiters.

### Question 94

**Domain:** Fundamental Web Development Concepts

Which two statements about PHP namespaces and `use` imports are true? (Choose two)

### Options
- `use Drupal\Core\Url;` imports the `Url` class into the current namespace.
- Fully qualified names like `\Drupal\Core\Url::fromRoute()` work without a `use` statement.
- `use` statements change the class file location on disk at runtime.
- Namespaces are only available when Xdebug is enabled.

### Correct Answers
- [0] `use Drupal\Core\Url;` imports the `Url` class into the current namespace.
- [1] Fully qualified names like `\Drupal\Core\Url::fromRoute()` work without a `use` statement.

### Explanation
`use` is an alias/import for shorter names; FQCN always works. Autoloading resolves files; namespaces do not depend on Xdebug.

### Question 95

**Domain:** Fundamental Web Development Concepts

What does this PHP match expression assign to `$label` when `$status` is `'published'`?

```php
$label = match ($status) {
  'draft' => 'Draft',
  'published' => 'Live',
  default => 'Unknown',
};
```

### Options
- `'Live'`
- `'Draft'`
- `'Unknown'`
- `true`

### Correct Answers
- [0] `'Live'`

### Explanation
`match` is a strict comparison expression introduced in PHP 8; the `'published'` arm returns `'Live'`.

### Question 96

**Domain:** Fundamental Web Development Concepts

Which approach correctly catches any `Throwable` (including `Error` and `Exception`) in PHP 7+?

### Options
- `try { ... } catch (\Throwable $e) { ... }`
- `try { ... } catch ($e) { ... }` without a type (invalid syntax in modern PHP)
- `on error resume next`
- `catch_all { ... }`

### Correct Answers
- [0] `try { ... } catch (\Throwable $e) { ... }`

### Explanation
`Throwable` is the shared interface for `Error` and `Exception`. Typed catch blocks are required.

### Question 97

**Domain:** Fundamental Web Development Concepts

Which Drupal PHP helper escapes text for safe HTML element body output?

### Options
- `\Drupal\Component\Utility\Html::escape($text)`
- `strip_tags($text)` alone when you need to keep tags visible as text entities
- `Markup::create($text)` for untrusted editor input
- `print $text;` in a preprocess function

### Correct Answers
- [0] `\Drupal\Component\Utility\Html::escape($text)`

### Explanation
`Html::escape()` converts special characters to entities. `Markup::create()` marks trusted HTML; do not use it for untrusted strings.

### Question 98

**Domain:** Fundamental Web Development Concepts

You need to pass a callable into `array_map`. Which two forms are valid callables in PHP? (Choose two)

### Options
- An anonymous function: `function ($item) { return $item; }`
- A string function name such as `'strtoupper'`
- An arbitrary integer like `42`
- A plain object without `__invoke` or a method reference

### Correct Answers
- [0] An anonymous function: `function ($item) { return $item; }`
- [1] A string function name such as `'strtoupper'`

### Explanation
Closures and global function name strings are callables. Random integers/objects are not unless they implement `__invoke` or use `[$obj, 'method']` form.

### Question 99

**Domain:** Fundamental Web Development Concepts

What is the value of `$result` after this code runs?

```php
$a = ['x' => 1, 'y' => 2];
$b = ['y' => 9, 'z' => 3];
$result = $a + $b;
```

### Options
- `['x' => 1, 'y' => 2, 'z' => 3]` (left-hand keys win on conflict)
- `['x' => 1, 'y' => 9, 'z' => 3]` (right-hand keys always overwrite)
- `['y' => 9, 'z' => 3]`
- `[1, 2, 9, 3]`

### Correct Answers
- [0] `['x' => 1, 'y' => 2, 'z' => 3]` (left-hand keys win on conflict)

### Explanation
The `+` operator for arrays unions keys and keeps the left-hand value when keys collide. Use `array_merge` for different overwrite rules.

### Question 100

**Domain:** Fundamental Web Development Concepts

Which statement best describes a PHP interface?

### Options
- It defines a contract of method signatures that implementing classes must provide.
- It stores instance property values shared across all objects.
- It replaces Composer autoloading.
- It is identical to a trait and may contain property defaults in all PHP versions.

### Correct Answers
- [0] It defines a contract of method signatures that implementing classes must provide.

### Explanation
Interfaces specify what methods a class must implement. Traits are for reusable method sets; they are not the same construct.

## Theming Concepts

### Question 101

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

### Question 102

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

### Question 103

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

### Question 104

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

### Question 105

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

### Question 106

**Domain:** Theming Concepts

You need to provide editors with a list of pre-defined background styles for Layout Builder sections. What is a sound approach?

### Options
- Use a module such as Layout Builder Styles and define reusable styles as configuration (UI/config export), not a made-up theme YAML registry filename.
- Ask editors to type arbitrary class names into an unconstrained text field on every section.
- Hardcode classes in Twig based on section UUIDs.
- Override Layout Builder templates to invent radio buttons without storing config.

### Correct Answers
- [0] Use a module such as Layout Builder Styles and define reusable styles as configuration (UI/config export), not a made-up theme YAML registry filename.

### Explanation
Layout Builder Styles stores styles as config entities. There is no core discovery of `*.layout_builder.styles.yml` in the theme.

### Question 107

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

### Question 108

**Domain:** Theming Concepts

You want to expose a pattern library of Twig components stored in `components/`. Which approach enables core Single Directory Components?

### Options
- Keep components under `THEME/components/` with `*.component.yml` + `*.twig` (and optional matching assets) so Drupal auto-discovers them.
- Add a `component-libraries` section to `THEME.info.yml` pointing to `components` (required for core SDC).
- Register the directory in `services.yml` as a Twig loader.
- Declare the path in `THEME.libraries.yml` as a CSS asset only.

### Correct Answers
- [0] Keep components under `THEME/components/` with `*.component.yml` + `*.twig` (and optional matching assets) so Drupal auto-discovers them.

### Explanation
Core SDC discovers components under `components/`. `component-libraries` belongs to the contrib Components module, not core SDC registration.

### Question 109

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

### Question 110

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

### Question 111

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

### Question 112

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

### Question 113

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

### Question 114

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

### Question 115

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

### Question 116

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

### Question 117

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

### Question 118

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

### Question 119

**Domain:** Theming Concepts

While overriding `node--article.html.twig`, you want to reuse shared markup without copy-paste from core’s node template. What is the most practical Drupal approach?

### Options
- Extract shared markup into includes, SDC components, or a custom base template that defines real `{% block %}` regions you control.
- Use `{% extends 'node.html.twig' %}` and override blocks, because core `node.html.twig` is designed as a block-based parent.
- Duplicate the full markup into every suggestion file permanently.
- Use PHP `include` from the Twig file.

### Correct Answers
- [0] Extract shared markup into includes, SDC components, or a custom base template that defines real `{% block %}` regions you control.

### Explanation
Core node templates are not reliable Twig block parents. Shared partials/SDC (or your own base template with blocks) is the maintainable pattern.

### Question 120

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

### Question 121

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

### Question 122

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

### Question 123

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

### Question 124

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

### Question 125

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

### Question 126

**Domain:** Theming Concepts

The theme includes a custom breakpoint group for responsive images, but editors need a fallback when the theme is disabled. What is the best approach?

### Options
- Define the breakpoint group in a supporting module’s `MODULE.breakpoints.yml` so it remains available independent of the theme.
- Define breakpoints only in the theme so they disappear with the theme.
- Hardcode image styles in Twig templates.
- Ask editors to recreate breakpoints manually on each site.

### Correct Answers
- [0] Define the breakpoint group in a supporting module’s `MODULE.breakpoints.yml` so it remains available independent of the theme.

### Explanation
Breakpoints come from `*.breakpoints.yml` plugins. Shipping them from a module keeps responsive image mappings usable if the theme changes.

### Question 127

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

### Question 128

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

### Question 129

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

### Question 130

**Domain:** Theming Concepts

Your subtheme wants to reuse Single Directory Components from a parent theme. How can you achieve this cleanly?

### Options
- Include parent components with SDC syntax such as `{{ include('parent_theme:component_name') }}` (parent components remain discoverable).
- Declare the same `component-libraries` entry in the subtheme pointing at the parent path.
- Copy all component directories into the subtheme for every release.
- Use `hook_theme_registry_alter()` to inject include paths manually.

### Correct Answers
- [0] Include parent components with SDC syntax such as `{{ include('parent_theme:component_name') }}` (parent components remain discoverable).

### Explanation
SDC components are addressed as `theme_machine_name:component_name`. You do not redeclare contrib `component-libraries` namespaces for core SDC reuse.

### Question 131

**Domain:** Theming Concepts

While debugging a template override you want to confirm which theme suggestions Drupal is providing, using core tooling. What should you do?

### Options
- Enable Twig debug (and rebuild caches) so Drupal prints theme-suggestion comments in the HTML source for the rendered element.
- Run `drush theme:debug node` to dump suggestions for the node hook.
- Run `drush pm:list --type=theme` to list suggestions.
- Run `drush config:status` to see template suggestions.

### Correct Answers
- [0] Enable Twig debug (and rebuild caches) so Drupal prints theme-suggestion comments in the HTML source for the rendered element.

### Explanation
There is no standard `drush theme:debug node` suggestion dump. Twig debug comments (or newer theme-dev tooling) are the reliable approach.

### Question 132

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

### Question 133

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

### Question 134

**Domain:** Theming Concepts

You must expose an additional variable such as a sanitized site slogan to Twig templates broadly. Which approach is appropriate?

### Options
- Implement `hook_preprocess()` (generic) or a Twig extension to add variables available across templates; use `hook_preprocess_html()` only if the value is HTML-document-specific.
- Always use `hook_preprocess_html()` because it injects variables into every template automatically.
- Insert the value into `drupalSettings` and expect Twig to read it server-side.
- Modify Twig to read arbitrary global PHP variables.

### Correct Answers
- [0] Implement `hook_preprocess()` (generic) or a Twig extension to add variables available across templates; use `hook_preprocess_html()` only if the value is HTML-document-specific.

### Explanation
`hook_preprocess_html()` only affects `html.html.twig`. For cross-template variables, use generic preprocess or a Twig extension.

### Question 135

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

### Question 136

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

### Question 137

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

### Question 138

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

### Question 139

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

### Question 140

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

### Question 141

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

### Question 142

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

### Question 143

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

### Question 144

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

### Question 145

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

### Question 146

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

### Question 147

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

### Question 148

**Domain:** Theming Concepts

You want a custom HTML experience for fatal errors. What is accurate about theming HTTP 500 responses in Drupal?

### Options
- Core does not reliably theme 500 responses via `page--500.html.twig` the way it does 403/404; use an exception subscriber and/or server-level static error page for true 500s.
- Override `page--500.html.twig` exactly like `page--404.html.twig` for all fatals.
- Use `page--status-500.html.twig` as a core suggestion.
- Use `page--exception.html.twig`, which core always invokes for fatals.

### Correct Answers
- [0] Core does not reliably theme 500 responses via `page--500.html.twig` the way it does 403/404; use an exception subscriber and/or server-level static error page for true 500s.

### Explanation
Many 500 failures never reach normal page theming. Do not assume a status-code page suggestion works like 404.

### Question 149

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

### Question 150

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

### Question 151

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

### Question 152

**Domain:** Theming Concepts

Your theme stores reusable Twig partials and you want `@skyline/...` namespaces without relative paths. Using the contrib Components module approach, what do you need?

### Options
- Configure Components namespaces (historically `component-libraries`, modernly `components.namespaces`) in `skyline.info.yml` pointing at the partials directory.
- Define a Twig namespace in `skyline.services.yml` under `twig.loader` from the theme.
- Add the path to `settings.php` under `$settings['twig_tweak']`.
- Register the directory via `hook_theme()` only.

### Correct Answers
- [0] Configure Components namespaces (historically `component-libraries`, modernly `components.namespaces`) in `skyline.info.yml` pointing at the partials directory.

### Explanation
Theme packages do not normally register Twig namespaces via `THEME.services.yml`. The Components module provides namespace configuration in the theme info file.

### Question 153

**Domain:** Theming Concepts

The design system splits Single Directory Components into `components/base` and `components/patterns`. How do you expose both to core SDC?

### Options
- Keep both directories nested under `components/`; core SDC scans subdirectories automatically without `component-libraries` entries.
- Add multiple `component-libraries` entries in `.info.yml`, one per subdirectory (required for core SDC).
- List the directories under `libraries:` in `.info.yml`.
- Symlink the directories into `templates/`.

### Correct Answers
- [0] Keep both directories nested under `components/`; core SDC scans subdirectories automatically without `component-libraries` entries.

### Explanation
Core SDC recursively discovers components under `components/`. Separate `component-libraries` maps are a contrib Components pattern, not a core SDC requirement.

### Question 154

**Domain:** Theming Concepts

Editors using CKEditor 5 want the back-office preview to match front-end typography. Where do you declare theme stylesheets so CKEditor 5 loads them?

### Options
- Add the CSS files to the `ckeditor5-stylesheets` array in the theme’s `.info.yml`.
- Add them to the legacy `ckeditor_stylesheets` key used by CKEditor 4.
- Attach the stylesheet with `attach_library()` inside `node--form.html.twig` only.
- Load the stylesheet via JavaScript inside the editor iframe manually.

### Correct Answers
- [0] Add the CSS files to the `ckeditor5-stylesheets` array in the theme’s `.info.yml`.

### Explanation
CKEditor 5 uses the hyphenated `ckeditor5-stylesheets` info key. `ckeditor_stylesheets` is the older CKEditor 4 key.

### Question 155

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

### Question 156

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

### Question 157

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

### Question 158

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

### Question 159

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

### Question 160

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

### Question 161

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
- [1] logo
- [2] favicon` and omit `name` and `slogan` in the theme's `.info.yml`.

### Explanation
The `features` key controls which standard theme settings (logo, name, slogan, favicon) are exposed. Removing slogan from the list hides it without affecting other themes.

### Question 162

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

### Question 163

**Domain:** Theming Concepts

Your theme's hero library should preload its critical CSS. How do you declare this in `THEME.libraries.yml`?

### Options
- Set `attributes:
- Add `preload: true` next to the CSS file path.
- Inline the CSS in Twig with a `<style>` tag.
- Add a `<link rel="preload">` tag manually in `html.html.twig`.

### Correct Answers
- [0] Set `attributes:

### Explanation
Library asset entries support an `attributes` map for each file, allowing you to mark stylesheets as preload while keeping Drupal's asset management intact.

### Question 164

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

### Question 165

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

### Question 166

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

### Question 167

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

### Question 168

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

### Question 169

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

### Question 170

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
- [1] core/drupal
- [2] core/once` in the library definition.

### Explanation
Listing dependencies ensures Drupal loads required libraries before your asset, maintaining order and avoiding race conditions. Manual script tags or load events do not guarantee availability.

### Question 171

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

### Question 172

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

### Question 173

**Domain:** Theming Concepts

Your theme's hero library should preload its critical CSS. How do you declare this in `THEME.libraries.yml`?

### Options
- Set `attributes:
- Add `preload: true` next to the CSS file path.
- Inline the CSS in Twig with a `<style>` tag.
- Add a `<link rel="preload">` tag manually in `html.html.twig`.

### Correct Answers
- [0] Set `attributes:

### Explanation
Library asset entries support an `attributes` map for each file, allowing you to mark stylesheets as preload while keeping Drupal's asset management intact.

### Question 174

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

### Question 175

**Domain:** Theming Concepts

You want every image rendered by your theme to lazy-load by default. Where should you add the `loading="lazy"` attribute?

### Options
- Implement `hook_preprocess_image()` in `THEME.theme` and set `$variables['attributes']['loading'] = 'lazy'` when appropriate.
- Implement `hook_preprocess_image()` and set `#attributes['loading'] = 'lazy'` on the render array key inside `$variables`.
- Modify core’s ImageFormatter plugin for every site.
- Add JavaScript that sets the attribute after load.

### Correct Answers
- [0] Implement `hook_preprocess_image()` in `THEME.theme` and set `$variables['attributes']['loading'] = 'lazy'` when appropriate.

### Explanation
Image preprocess receives `$variables['attributes']`, not render-array `#attributes`. Prefer preprocess (or the formatter) over JS.

### Question 176

**Domain:** Theming Concepts

You are creating a custom Drupal 11 front-end theme that needs a stable, minimally opinionated base with predictable markup. Which core base theme is the usual choice?

### Options
- Stable9 as the base theme for a minimally styled, forward-compatible starter.
- Claro as the front-end base theme for anonymous visitor pages.
- Olivero only as a hidden base theme that cannot be sub-themed.
- Seven, which remains the default Drupal 11 admin theme.

### Correct Answers
- [0] Stable9 as the base theme for a minimally styled, forward-compatible starter.

### Explanation
Stable9 is the core stable base theme intended for sub-theming with predictable markup. Claro is the admin theme; Seven is not the Drupal 11 admin theme; Olivero is a full front-end theme that can be sub-themed but is more opinionated than Stable9.

### Question 177

**Domain:** Theming Concepts

Your theme must load a global CSS file on every page and a JS file that depends on Drupal's once library. Where do you declare this?

### Options
- In the theme's *.libraries.yml, defining library assets and a dependency on core/once, then attaching the library.
- Only inside settings.php with $config['styles'] entries.
- By dropping files into /core/misc so Drupal auto-discovers them.
- Exclusively via a <link> tag hard-coded in node.html.twig.

### Correct Answers
- [0] In the theme's *.libraries.yml, defining library assets and a dependency on core/once, then attaching the library.

### Explanation
Asset libraries are declared in *.libraries.yml with dependencies such as core/once, then attached via info.yml, hook_page_attachments, Twig attach_library, or similar. Core should not be patched for theme assets.

### Question 178

**Domain:** Theming Concepts

You are defining theme breakpoints for responsive image styles and CSS. Which file and concept apply in Drupal 10/11?

### Options
- Declare breakpoints in THEMENAME.breakpoints.yml with media query labels reusable by Responsive Image and themes.
- Breakpoints may only be defined in PHP inside settings.local.php.
- Drupal reads breakpoints exclusively from Bootstrap's grid SCSS.
- Breakpoint YAML is ignored unless the theme is Olivero.

### Correct Answers
- [0] Declare breakpoints in THEMENAME.breakpoints.yml with media query labels reusable by Responsive Image and themes.

### Explanation
Themes and modules expose breakpoints through *.breakpoints.yml. Responsive image styles and front-end code can reference those named breakpoints.

### Question 179

**Domain:** Theming Concepts

You are building Single Directory Components (SDC) in a Drupal 10/11 theme. Which statements are true? (Choose two)

### Options
- An SDC typically colocates template, CSS/JS, and component metadata in one component directory.
- Components are defined with a *.component.yml (metadata) alongside the Twig template.
- SDC components must be stored only under /core/modules and cannot live in themes.
- SDC replaces the need for any *.libraries.yml entry site-wide, including non-component assets.

### Correct Answers
- [0] An SDC typically colocates template, CSS/JS, and component metadata in one component directory.
- [1] Components are defined with a *.component.yml (metadata) alongside the Twig template.

### Explanation
SDC keeps a component's Twig, assets, and YAML metadata together and can live in themes or modules. It does not eliminate libraries.yml for all other theme assets, nor is it limited to core paths.

### Question 180

**Domain:** Theming Concepts

Your sub-theme must override Olivero's color and typography while keeping most templates. What is the correct sub-theme setup?

### Options
- Set base theme: olivero in the sub-theme *.info.yml and override libraries/CSS (and templates only where needed).
- Copy the entire core Olivero folder into /themes and edit core files in place.
- Set base theme: false and manually re-implement every Olivero template.
- Change the active theme in the database only, without an info.yml base theme key.

### Correct Answers
- [0] Set base theme: olivero in the sub-theme *.info.yml and override libraries/CSS (and templates only where needed).

### Explanation
Sub-themes declare base theme: olivero in info.yml and override assets or templates selectively. Editing core theme files directly is not upgrade-safe.

### Question 181

**Domain:** Theming Concepts

Claro is enabled as the administration theme. A front-end developer wants visitor-facing pages to use a custom theme. How should this be configured?

### Options
- Set the custom theme as the default (front-end) theme and keep Claro as the admin theme.
- Use Claro for both admin and front-end because Drupal allows only one theme.
- Disable themes entirely and render routes with raw PHP includes.
- Put the custom theme under /core/themes so it replaces Claro automatically.

### Correct Answers
- [0] Set the custom theme as the default (front-end) theme and keep Claro as the admin theme.

### Explanation
Drupal separates the default theme (front-end) from the administration theme. Claro typically remains admin while a custom or Olivero-based theme serves visitors.

### Question 182

**Domain:** Theming Concepts

You need a library to load only on the article content type full view, not globally. Which approach fits Drupal theming?

### Options
- Attach the library in a preprocess (or equivalent) when the article full view is being rendered.
- Add the CSS file to every page via the theme info.yml stylesheets-remove key only.
- Place the CSS in html.html.twig unconditionally.
- Register the file in core.libraries.yml inside the Drupal core repo.

### Correct Answers
- [0] Attach the library in a preprocess (or equivalent) when the article full view is being rendered.

### Explanation
Conditional attachment in preprocess (or Twig attach_library in the right template) scopes assets to the article full display. Global info.yml inclusion and core edits are the wrong tools.

### Question 183

**Domain:** Theming Concepts

When defining a theme library that includes CSS and JS, which libraries.yml details matter? (Choose two)

### Options
- List CSS under css with the appropriate SMACSS category such as theme or component.
- Declare dependencies (for example core/drupal or core/once) so scripts load in the correct order.
- Omit file paths because Drupal scans the theme folder recursively for *.js.
- Put PHP classes inside libraries.yml to bootstrap the theme registry.

### Correct Answers
- [0] List CSS under css with the appropriate SMACSS category such as theme or component.
- [1] Declare dependencies (for example core/drupal or core/once) so scripts load in the correct order.

### Explanation
libraries.yml must reference explicit asset paths, SMACSS groups for CSS, and JS dependencies. It is not a PHP class registry and does not auto-discover every script.

### Question 184

**Domain:** Theming Concepts

Your theme info.yml needs to register regions used in page.html.twig. What happens if you print a region in Twig that is not declared in info.yml?

### Options
- The region will not be available for blocks in the UI; undeclared regions are not proper theme regions.
- Drupal auto-creates any Twig variable name as a block region.
- Twig silently maps unknown regions to the header region.
- Regions are defined only in views and ignore info.yml.

### Correct Answers
- [0] The region will not be available for blocks in the UI; undeclared regions are not proper theme regions.

### Explanation
Theme regions must be declared in *.info.yml to appear in Block layout and to be first-class page regions. Printing an undeclared variable does not register a region.

### Question 185

**Domain:** Theming Concepts

You want to override a core Twig template for nodes of type page in your theme. Which file name pattern should you use?

### Options
- node--page.html.twig in the theme's templates directory (with correct theme suggestion enabled).
- node.page.tpl.php like Drupal 7.
- page--node.html.twig to override all node templates of every type.
- entity--node--page.html.twig as the only valid suggestion.

### Correct Answers
- [0] node--page.html.twig in the theme's templates directory (with correct theme suggestion enabled).

### Explanation
Drupal's theme hook suggestions use node--page.html.twig for the page content type. Drupal 7 PHPTemplate names no longer apply.

### Question 186

**Domain:** Theming Concepts

A starter theme should not inherit Stable9's CSS but still use its templates/markup stability. Which info.yml approach is appropriate?

### Options
- Use base theme: stable9 and manage libraries carefully (including overriding or not extending unwanted CSS libraries).
- Delete Stable9 from core so no CSS can load.
- Set base theme: classy, which ships as the Drupal 11 default base.
- Set core_version_requirement only; base themes are unused in Drupal 11.

### Correct Answers
- [0] Use base theme: stable9 and manage libraries carefully (including overriding or not extending unwanted CSS libraries).

### Explanation
Stable9 provides stable markup as a base; themes control which libraries they extend or override. Classy was removed from Drupal core earlier; deleting core themes is not supported.

### Question 187

**Domain:** Theming Concepts

You are attaching an SDC in Twig within a Drupal 11 theme. Which call pattern is correct?

### Options
- Include the component with the Twig embed/include syntax for SDC (for example {% include 'mytheme:card' %}) using the theme's component namespace.
- Call theme('sdc') in PHPTemplate with a .tpl.php file.
- Only render SDCs through Layout Builder's XML schema.
- Reference components with jQuery.load('/components/card.html').

### Correct Answers
- [0] Include the component with the Twig embed/include syntax for SDC (for example {% include 'mytheme:card' %}) using the theme's component namespace.

### Explanation
SDCs are rendered from Twig using the component namespace (provider:component). They are not PHPTemplate theme hooks or jQuery HTML fetches.

### Question 188

**Domain:** Theming Concepts

Your theme must add a libraries-extend entry so custom CSS loads whenever core's drupal.dialog library loads. Where is libraries-extend declared?

### Options
- In the theme's *.info.yml under libraries-extend targeting the core library name.
- In robots.txt as a Disallow rule.
- In composer.json under extra.drupal-libraries.
- In a node field formatter YAML only.

### Correct Answers
- [0] In the theme's *.info.yml under libraries-extend targeting the core library name.

### Explanation
libraries-extend in *.info.yml lets a theme attach additional assets whenever another library is attached, which is ideal for styling core dialogs without editing core.

### Question 189

**Domain:** Theming Concepts

Which practices keep a custom theme upgrade-safe on Drupal 10/11? (Choose two)

### Options
- Override templates and libraries in your theme or sub-theme instead of editing files under /core.
- Use theme hook suggestions and preprocess hooks to alter output without patching core themes unnecessarily.
- Modify Olivero templates directly in /core/themes/olivero for every project.
- Disable the theme system and print HTML from controllers for all pages.

### Correct Answers
- [0] Override templates and libraries in your theme or sub-theme instead of editing files under /core.
- [1] Use theme hook suggestions and preprocess hooks to alter output without patching core themes unnecessarily.

### Explanation
Upgrade-safe theming keeps customizations in custom themes/modules via overrides, suggestions, and preprocess. Editing core theme files is fragile across updates.

### Question 190

**Domain:** Theming Concepts

You need to remove a library that a base theme attaches globally. Which Drupal mechanism is designed for this?

### Options
- Use libraries-override in the sub-theme info.yml to remove or replace the base library/asset.
- Delete the base theme's libraries.yml from core after each composer update.
- Set $settings['suppress_libraries'] in settings.php with the library name.
- Comment out aggregate CSS in .htaccess.

### Correct Answers
- [0] Use libraries-override in the sub-theme info.yml to remove or replace the base library/asset.

### Explanation
libraries-override is the supported way for themes to remove or replace assets defined by base themes or modules.

### Question 191

**Domain:** Theming Concepts

Block layout shows regions from the active theme. A new 'preface' region was added to info.yml but does not appear. What should you do next?

### Options
- Rebuild caches so Drupal rereads the theme info and registers the new region.
- Reinstall MySQL because regions are stored only in the database engine.
- Add the region to core.extension.yml manually.
- Rename the theme machine name to force Composer to rebuild core.

### Correct Answers
- [0] Rebuild caches so Drupal rereads the theme info and registers the new region.

### Explanation
Theme info is cached. After adding regions to info.yml, a cache rebuild makes them available in Block layout.

### Question 192

**Domain:** Theming Concepts

Olivero defines CSS custom properties for colors. Your sub-theme should retint the brand without rewriting every rule. What is the best approach?

### Options
- Override the relevant CSS custom properties in a sub-theme library that loads after Olivero's styles.
- Fork Drupal core to change Olivero's default hex values permanently.
- Use JavaScript to rewrite computed styles on every paint.
- Replace Twig with Blade so variables can recolor CSS.

### Correct Answers
- [0] Override the relevant CSS custom properties in a sub-theme library that loads after Olivero's styles.

### Explanation
Olivero's design tokens are exposed as CSS variables; a sub-theme library can override those properties cleanly without forking core.

### Question 193

**Domain:** Theming Concepts

You are documenting theme assets for a multi-developer Drupal 11 project. Which file declares the theme's name, base theme, regions, and global libraries?

### Options
- THEMENAME.info.yml
- THEMENAME.services.yml only
- THEMENAME.routing.yml
- THEMENAME.breakpoints.yml exclusively for all metadata

### Correct Answers
- [0] THEMENAME.info.yml

### Explanation
The *.info.yml file is the theme's primary metadata: name, base theme, regions, libraries, and related keys. Breakpoints and services use their own YAML files.

### Question 194

**Domain:** Theming Concepts

A component needs scoped CSS that should not be a global theme library. Using SDC, where should that CSS live?

### Options
- Beside the component Twig/metadata in the component directory so SDC can attach it with the component.
- Only in /core/assets/vendor to guarantee load order.
- In the database as a serialized blob in config export.
- Inline in settings.local.php as a heredoc string.

### Correct Answers
- [0] Beside the component Twig/metadata in the component directory so SDC can attach it with the component.

### Explanation
SDC is designed for colocated component assets. Component CSS belongs with the component, not in core vendor paths or settings.php.

### Question 195

**Domain:** Theming Concepts

Which statements about Drupal theme inheritance are correct? (Choose two)

### Options
- A sub-theme inherits templates from its base theme unless it provides its own overrides.
- libraries-override and libraries-extend in the sub-theme can alter assets coming from base themes or modules.
- A sub-theme cannot override any Twig file provided by its base theme.
- Base theme relationships are defined in Twig using {% extends 'olivero' %} instead of info.yml.

### Correct Answers
- [0] A sub-theme inherits templates from its base theme unless it provides its own overrides.
- [1] libraries-override and libraries-extend in the sub-theme can alter assets coming from base themes or modules.

### Explanation
Inheritance is configured with base theme in info.yml; templates fall through to the base unless overridden, and library override/extend hooks adjust assets. Twig extends is not how theme base relationships are declared.

### Question 196

**Domain:** Theming Concepts

You must ensure your theme's CSS is picked up by Drupal's aggregation on production. What is required?

### Options
- Register CSS through the libraries system (libraries.yml / attach) rather than ad-hoc hard-coded <link> tags that bypass aggregation.
- Upload CSS only through the Color module UI.
- Store CSS in public:// and include it with an absolute file:// URL.
- Disable the render pipeline so aggregation can scan the theme folder.

### Correct Answers
- [0] Register CSS through the libraries system (libraries.yml / attach) rather than ad-hoc hard-coded <link> tags that bypass aggregation.

### Explanation
Assets attached via Drupal libraries participate in aggregation and dependency ordering. Raw hard-coded links often bypass the asset pipeline.

### Question 197

**Domain:** Theming Concepts

Your theme provides a custom page template suggestion for a specific path. Where do you typically add the suggestion?

### Options
- In hook_theme_suggestions_page_alter() (or a related suggestions hook) in the theme's .theme file.
- In index.php before the kernel boots.
- In a Composer post-install script that renames Twig files.
- In Claro's maintainers.yml upstream.

### Correct Answers
- [0] In hook_theme_suggestions_page_alter() (or a related suggestions hook) in the theme's .theme file.

### Explanation
Theme suggestion alter hooks in THEMENAME.theme are the standard way to add template suggestions such as path-specific page templates.

### Question 198

**Domain:** Theming Concepts

Responsive Image styles reference breakpoints from a provider. Your theme defines those breakpoints. What must be true for them to be selectable?

### Options
- The theme must be installed/enabled and its *.breakpoints.yml group available to the Responsive Image configuration.
- Breakpoints from disabled themes are always listed as if enabled.
- Only modules may define breakpoints; theme YAML is ignored by design.
- Breakpoints apply only when using the Stark theme.

### Correct Answers
- [0] The theme must be installed/enabled and its *.breakpoints.yml group available to the Responsive Image configuration.

### Explanation
Breakpoint sets come from enabled extensions' breakpoints.yml files. A theme's breakpoints are available when that theme (or the defining extension) is present and enabled as applicable.

### Question 199

**Domain:** Theming Concepts

You are choosing between extending Olivero and starting from Stable9 for a highly custom marketing site. Which guideline is sound?

### Options
- Extend Olivero when you want its templates/components as a starting point; use Stable9 when you want minimal styling and full design control.
- Always extend Claro for anonymous marketing pages.
- Stable9 cannot be a base theme in Drupal 11.
- Olivero cannot be sub-themed; you must copy it outside the docroot.

### Correct Answers
- [0] Extend Olivero when you want its templates/components as a starting point; use Stable9 when you want minimal styling and full design control.

### Explanation
Olivero is a full-featured front-end theme suitable to sub-theme; Stable9 is the minimal stable base for custom designs. Claro is aimed at administration UIs.

### Question 200

**Domain:** Theming Concepts

A theme library's JavaScript must run after Drupal settings are available and should use behaviors. Which dependency declaration is most appropriate?

### Options
- Depend on core/drupal and core/drupalSettings (and core/once when using once) in libraries.yml.
- Depend on core/jquery.ui.accordion only, which includes Drupal settings automatically.
- No dependencies are allowed in theme libraries.yml files.
- Depend on ckeditor5.admin for all front-end behaviors.

### Correct Answers
- [0] Depend on core/drupal and core/drupalSettings (and core/once when using once) in libraries.yml.

### Explanation
Front-end behaviors typically need core/drupal and core/drupalSettings; once requires core/once. Declaring these dependencies ensures correct load order.

## Templates and Preprocess Functions

### Question 201

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

### Question 202

**Domain:** Templates and Preprocess Functions

Your Twig template must avoid blank markup when a field has no values. What is the idiomatic check?

### Options
- Check the entity field (for example `{% if node.field_summary is not empty %}`) and then print `{{ content.field_summary }}`.
- `{% if content.field_summary is not empty %}` because empty field render arrays are always Twig-empty.
- `{% if content.field_summary %}` alone is always sufficient.
- `{% if content.field_summary|length > 0 %}` on the render array.

### Correct Answers
- [0] Check the entity field (for example `{% if node.field_summary is not empty %}`) and then print `{{ content.field_summary }}`.

### Explanation
Empty field render arrays still contain metadata, so `content.field_* is not empty` is unreliable. Prefer entity field emptiness checks.

### Question 203

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

### Question 204

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

### Question 205

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

### Question 206

**Domain:** Templates and Preprocess Functions

The design team wants to display a component only when a field has values. How do you check this in Twig without rendering the field twice?

### Options
- `{% if node.field_tags is not empty %}` (or `not node.field_tags.isEmpty`) then render `{{ content.field_tags }}` once.
- `{% if content.field_tags is not empty %}` on the render array.
- `{% if content.field_tags|render %}` every time you need a boolean check.
- `{% if content.field_tags %}` without inspecting the entity.

### Correct Answers
- [0] `{% if node.field_tags is not empty %}` (or `not node.field_tags.isEmpty`) then render `{{ content.field_tags }}` once.

### Explanation
Inspect the entity field for emptiness. Checking `content.* is not empty` is a common false positive because of render metadata.

### Question 207

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

### Question 208

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

### Question 209

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

### Question 210

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

### Question 211

**Domain:** Templates and Preprocess Functions

You want to add a Twig filter that formats phone numbers. How do you register it in a theme?

### Options
- Implement `hook_theme_suggestions_alter()`.
- Create a service tagged with `twig.extension` and define the filter in PHP.
- Declare the filter in `twig.yaml`.
- Add a global function in `settings.php`.

### Correct Answers
- [1] Create a service tagged with `twig.extension` and define the filter in PHP.

### Explanation
Custom Twig filters are registered via a `twig.extension` service (typically from a module). `hook_theme_suggestions_alter()` does not register filters.

### Question 212

**Domain:** Templates and Preprocess Functions

In a preprocess function you need to check if you are on a specific view mode. Which reliable property should you inspect?

### Options
- `$variables['elements']['#view_mode']`
- `$variables['node']->view_mode`
- `
- `$variables['theme_hook_original']`

### Correct Answers
- [0] `$variables['elements']['#view_mode']`

### Explanation
Render array metadata contains the active view mode, making it accessible during preprocessing without routing assumptions.

### Question 213

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

### Question 214

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

### Question 215

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

### Question 216

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

### Question 217

**Domain:** Templates and Preprocess Functions

You must inject a library when a view row uses a specific template suggestion. Where should you attach it?

### Options
- Inside `hook_preprocess_views_view_fields()` call `#attached['library'][]` on the render array.
- Add `attach_library` in the Twig file.
- Use `hook_views_pre_render()` to add CSS classes.
- Alter the view in the UI to include the library globally.

### Correct Answers
- [1] Add `attach_library` in the Twig file.

### Explanation
For a specific Twig suggestion, `{{ attach_library(...) }}` in that template scopes the library correctly. A broad views preprocess attachment is easier to over-apply.

### Question 218

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

### Question 219

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

### Question 220

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

### Question 221

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

### Question 222

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

### Question 223

**Domain:** Templates and Preprocess Functions

You must print a label in Twig without running it through Drupal’s translation system. What should you output?

### Options
- `{{ 'Label' }}` without `|t` / `|trans`.
- `{{ 'Label'|t }}`
- `{{ 'Label'|raw }}`
- `{{ 'Label'|trans }}`

### Correct Answers
- [0] `{{ 'Label' }}` without `|t` / `|trans`.

### Explanation
Omitting `|t`/`|trans` prevents translation lookup. `|raw` is about escaping, not translation.

### Question 224

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

### Question 225

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

### Question 226

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

### Question 227

**Domain:** Templates and Preprocess Functions

You must print a field in a custom place in the same Twig file without also printing it via `{{ content }}`. How do you suppress the duplicate?

### Options
- Print the field explicitly and use `{{ content|without('field_name') }}` so `content` does not output it again.
- Use `without` so the field remains available to preprocess after Twig runs.
- Print the field twice and hide one with CSS.
- Remove the field from the display mode even though editors still need it on that display.

### Correct Answers
- [0] Print the field explicitly and use `{{ content|without('field_name') }}` so `content` does not output it again.

### Explanation
`without` affects Twig output of the render array. Preprocess has already run before the template executes.

### Question 228

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

### Question 229

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

### Question 230

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

### Question 231

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

### Question 232

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

### Question 233

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

### Question 234

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

### Question 235

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

### Question 236

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

### Question 237

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

### Question 238

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

### Question 239

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

### Question 240

**Domain:** Templates and Preprocess Functions

You must create a template for a specific block plugin and region combination. Which suggestion name is correct?

### Options
- `block--plugin-id--region.html.twig`
- `block--region--plugin-id.html.twig`
- `block-region-plugin.html.twig`
- `block--plugin-id.html.twig`

### Correct Answers
- [0] `block--plugin-id--region.html.twig`

### Explanation
Core may not generate a plugin+region suggestion by default, but `block--plugin-id--region.html.twig` is the conventional name to target when you add that suggestion via `hook_theme_suggestions_block_alter()`.

### Question 241

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

### Question 242

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

### Question 243

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

### Question 244

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

### Question 245

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

### Question 246

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

### Question 247

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

### Question 248

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

### Question 249

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

### Question 250

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

### Question 251

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

### Question 252

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

### Question 253

**Domain:** Templates and Preprocess Functions

You have a testimonial partial that expects a `quote` and `author`. From `node.html.twig`, how do you pass only those values to the partial?

### Options
- `{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } only %}`
- `{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } %}` without `only`
- Set global Twig variables and include the partial without context.
- Attach the partial as a library dependency.

### Correct Answers
- [0] `{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } only %}`

### Explanation
The `only` keyword prevents the included template from inheriting the full parent context.

### Question 254

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

### Question 255

**Domain:** Templates and Preprocess Functions

You register a custom theme hook named `marketing_card` in `hook_theme()`. Which preprocess function name can a theme implement for that hook?

### Options
- `THEME_preprocess_marketing_card()` in the theme’s `.theme` file.
- Only `template_preprocess_marketing_card()` is ever invoked; themes cannot preprocess custom hooks.
- `hook_preprocess_marketing_card()` as a literal function name in PHP.
- `marketing_card_preprocess()`.

### Correct Answers
- [0] `THEME_preprocess_marketing_card()` in the theme’s `.theme` file.

### Explanation
Drupal invokes `module/theme_preprocess_HOOK` implementations. Themes commonly implement `THEME_preprocess_marketing_card()`; a `template_preprocess_*` base is not required.

### Question 256

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

### Question 257

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

### Question 258

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

### Question 259

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

### Question 260

**Domain:** Templates and Preprocess Functions

A preprocess function wants to reuse the `marketing_card` theme hook inside another template. How should it expose the card to Twig?

### Options
- Assign a render array to a variable, e.g. `$variables['card'] = ['#theme' => 'marketing_card', '#title' => $title, '#link' => $url];` then print `{{ card }}` in Twig.
- Return that render array from the preprocess function.
- Call `render('marketing_card')` directly as a string API.
- Include the Twig file manually with PHP `include()`.

### Correct Answers
- [0] Assign a render array to a variable, e.g. `$variables['card'] = ['#theme' => 'marketing_card', '#title' => $title, '#link' => $url];` then print `{{ card }}` in Twig.

### Explanation
Preprocess hooks are void and mutate `$variables` by reference. They do not return render arrays.

### Question 261

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

### Question 262

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

### Question 263

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

### Question 264

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

### Question 265

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

### Question 266

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

### Question 267

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

### Question 268

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

### Question 269

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

### Question 270

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

### Question 271

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

### Question 272

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

### Question 273

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

### Question 274

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

### Question 275

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

### Question 276

**Domain:** Templates and Preprocess Functions

You are theming an Article node and need a dedicated Twig file that only applies in the Teaser view mode. Which template filename should you create in your theme?

### Options
- node--article--teaser.html.twig
- node--teaser--article.html.twig
- article--node--teaser.html.twig
- node-article-teaser.html.twig

### Correct Answers
- [0] node--article--teaser.html.twig

### Explanation
Drupal theme suggestions for nodes use the pattern node--{bundle}--{view_mode}.html.twig. For Article teasers that resolves to node--article--teaser.html.twig after cache rebuild with Twig debug enabled to confirm suggestions.

### Question 277

**Domain:** Templates and Preprocess Functions

In a custom theme preprocess function you must ensure a CSS/JS library loads whenever nodes of type event render. Which approach correctly attaches the library to the render array?

### Options
- $variables['#attached']['library'][] = 'mytheme/event';
- $variables['attributes']['library'] = 'mytheme/event';
- drupal_add_library('mytheme/event');
- $variables['attached_library'] = 'mytheme/event';

### Correct Answers
- [0] $variables['#attached']['library'][] = 'mytheme/event';

### Explanation
Libraries are attached through the render array's #attached key. In preprocess, push the library name onto $variables['#attached']['library']. drupal_add_library() is a Drupal 7 API and does not exist in Drupal 10/11.

### Question 278

**Domain:** Templates and Preprocess Functions

A card component template should render all node fields except the hero image and tags, which are printed separately. Which Twig expression correctly excludes those fields from the remaining content?

### Options
- {{ content|without('field_hero_image', 'field_tags') }}
- {{ content|exclude('field_hero_image', 'field_tags') }}
- {{ content|remove(['field_hero_image', 'field_tags']) }}
- {% unset content.field_hero_image %}{{ content }}

### Correct Answers
- [0] {{ content|without('field_hero_image', 'field_tags') }}

### Explanation
Drupal's Twig extension provides the without filter to omit named children from a render array while leaving the rest intact. There is no exclude or remove filter for this purpose, and unset is not valid Twig for render arrays.

### Question 279

**Domain:** Templates and Preprocess Functions

Editors report that a custom search form needs an extra CSS class on the textfield and a placeholder attribute. Where should you implement this change?

### Options
- hook_form_FORM_ID_alter() and modify $form['keys']['#attributes']
- hook_preprocess_page() and alter the rendered HTML string
- hook_theme_suggestions_form_alter() to rename the template only
- A Twig {% set %} block that rewrites the form markup after render

### Correct Answers
- [0] hook_form_FORM_ID_alter() and modify $form['keys']['#attributes']

### Explanation
Form alter hooks run before rendering and are the supported place to change element attributes such as class and placeholder. Preprocess-of-page string surgery and post-render Twig rewrites are brittle and not the Drupal form API pattern.

### Question 280

**Domain:** Templates and Preprocess Functions

You need a Twig-only way to load a theme library from node--article.html.twig without PHP. Which statement is correct?

### Options
- {{ attach_library('mytheme/article') }}
- {% library 'mytheme/article' %}
- {{ attach_css('mytheme/article') }}
- {% include library('mytheme/article') %}

### Correct Answers
- [0] {{ attach_library('mytheme/article') }}

### Explanation
Drupal adds the attach_library() Twig function so templates can declare libraries. The library name must match a key defined in the theme or module *.libraries.yml file.

### Question 281

**Domain:** Templates and Preprocess Functions

A site builder wants different markup when a Paragraph of type callout appears inside a Layout Builder section versus a default node body. Which two techniques correctly vary the template? (Choose two)

### Options
- Implement hook_theme_suggestions_paragraph_alter() and append a suggestion based on the parent entity or view mode.
- Create paragraph--callout--default.html.twig and paragraph--callout--{view_mode}.html.twig using Drupal's suggestion pattern.
- Rename the paragraph entity type machine name at runtime in preprocess to force a new template.
- Override html.html.twig and branch on the paragraph bundle with a giant if/else.

### Correct Answers
- [0] Implement hook_theme_suggestions_paragraph_alter() and append a suggestion based on the parent entity or view mode.
- [1] Create paragraph--callout--default.html.twig and paragraph--callout--{view_mode}.html.twig using Drupal's suggestion pattern.

### Explanation
Theme suggestion alter hooks and the standard paragraph--{bundle}--{view_mode} filenames are the supported ways to select alternate Twig templates. Renaming entity types or overloading html.html.twig are not valid approaches.

### Question 282

**Domain:** Templates and Preprocess Functions

While debugging why node--page.html.twig is not used, you enable Twig debug. Which configuration change is the Drupal 10/11-supported local setup?

### Options
- Set parameters.twig.config.debug (and usually auto_reload) to true under development.services.yml / services.local.yml and clear caches.
- Add $settings['twig_debug'] = TRUE; alone in settings.php with no services change.
- Create a file named twig.debug in the theme root.
- Run drush theme:twig-debug-enable which permanently writes to production services.yml.

### Correct Answers
- [0] Set parameters.twig.config.debug (and usually auto_reload) to true under development.services.yml / services.local.yml and clear caches.

### Explanation
Twig debug is a container parameter under twig.config. Drupal's development.services.yml pattern (often copied to services.local.yml) enables debug and auto_reload; caches must be cleared afterward.

### Question 283

**Domain:** Templates and Preprocess Functions

In mytheme.theme you need variables available only to the block template for the site branding block. Which hook is the most specific correct choice?

### Options
- mytheme_preprocess_block(&$variables) and check $variables['plugin_id'] or derivative id before adding data
- mytheme_preprocess_html(&$variables) for every page
- mytheme_preprocess_page(&$variables) and hope Twig inherits the keys
- mytheme_form_alter() because branding is always a form

### Correct Answers
- [0] mytheme_preprocess_block(&$variables) and check $variables['plugin_id'] or derivative id before adding data

### Explanation
Block-specific data belongs in hook_preprocess_block(), gated by plugin/derivative ID so other blocks are unaffected. Page/html preprocess do not cleanly target a single block template.

### Question 284

**Domain:** Templates and Preprocess Functions

A design requires adding classes to the node wrapper based on field values. Which two approaches are valid in Drupal 10/11? (Choose two)

### Options
- In hook_preprocess_node(), call $variables['attributes']->addClass('is-featured') when conditions match.
- In the Twig template, use {{ attributes.addClass('is-featured') }} when printing the wrapper.
- Edit core's NodeViewBuilder class in the web/core directory for that content type.
- Set $variables['classes'][] = 'is-featured' and expect core Attribute objects to pick it up automatically in all themes.

### Correct Answers
- [0] In hook_preprocess_node(), call $variables['attributes']->addClass('is-featured') when conditions match.
- [1] In the Twig template, use {{ attributes.addClass('is-featured') }} when printing the wrapper.

### Explanation
Both preprocess Attribute::addClass() and Twig attributes.addClass() are supported. Patching core view builders is not acceptable, and a bare classes array is not the Attribute API used by modern classy/stable9-style templates.

### Question 285

**Domain:** Templates and Preprocess Functions

You must print a translated UI string from Twig that includes a dynamic username. Which pattern is correct?

### Options
- {{ 'Hello @name'|t({'@name': username}) }}
- {{ t('Hello ' ~ username) }}
- {{ 'Hello ' ~ username|raw }}
- {% trans %}Hello {{ username|raw }}{% endtrans %} without placeholders

### Correct Answers
- [0] {{ 'Hello @name'|t({'@name': username}) }}

### Explanation
The |t filter (and {% trans %} blocks) should use placeholders such as @name so translations stay intact and values are escaped appropriately. Concatenating variables into the source string breaks translation and can create XSS risks.

### Question 286

**Domain:** Templates and Preprocess Functions

A field formatter renders complex markup. In the node template you only need the plain text label of a taxonomy term reference for a data attribute. What is the safest approach?

### Options
- Read from the entity object in Twig (e.g. node.field_category.entity.label) or prepare a sanitized variable in preprocess, rather than |raw on rendered HTML.
- Use {{ content.field_category|render|raw }} and parse tags in Twig.
- Disable Twig autoescape globally in services.yml for the theme.
- Print {{ content.field_category }} inside an HTML attribute without changes.

### Correct Answers
- [0] Read from the entity object in Twig (e.g. node.field_category.entity.label) or prepare a sanitized variable in preprocess, rather than |raw on rendered HTML.

### Explanation
For attribute values and plain text, use entity getters or preprocess to supply a clean string. Piping rendered HTML through raw, disabling autoescape, or dumping field render arrays into attributes are incorrect or unsafe.

### Question 287

**Domain:** Templates and Preprocess Functions

You registered a custom theme hook mytheme_card in hook_theme() with a template card. Which preprocess function name will Drupal invoke for that hook?

### Options
- hook_preprocess_mytheme_card() / THEMENAME_preprocess_mytheme_card()
- hook_preprocess_theme_card()
- hook_preprocess_template_card()
- hook_card_preprocess()

### Correct Answers
- [0] hook_preprocess_mytheme_card() / THEMENAME_preprocess_mytheme_card()

### Explanation
Preprocess callbacks follow hook_preprocess_HOOK() where HOOK is the theme hook name (mytheme_card). Naming must match the theme registry key, not an invented template_ prefix.

### Question 288

**Domain:** Templates and Preprocess Functions

A Views unformatted row template must receive a computed 'reading_time' variable. Which preprocess hook targets that template family?

### Options
- hook_preprocess_views_view_unformatted()
- hook_preprocess_views_view_fields() only, for every display style
- hook_preprocess_node() because Views always uses node templates
- hook_views_pre_render() to inject Twig variables into $variables directly

### Correct Answers
- [0] hook_preprocess_views_view_unformatted()

### Explanation
Each Views theme hook has a matching preprocess. For the unformatted style template, hook_preprocess_views_view_unformatted() is the correct place to add row variables. hook_views_pre_render() alters the view result/render array, not Twig $variables for that template.

### Question 289

**Domain:** Templates and Preprocess Functions

You want to reuse a macros file across several templates. Which Twig approach is idiomatic in Drupal themes?

### Options
- {% import '@mytheme/macros.html.twig' as macros %} then call macros.button(...)
- {% php include 'macros.php' %}
- {{ attach_library('mytheme/macros') }} which auto-imports Twig macros
- {% extends '@mytheme/macros.html.twig' %} for every card partial

### Correct Answers
- [0] {% import '@mytheme/macros.html.twig' as macros %} then call macros.button(...)

### Explanation
Drupal's Twig namespace (@mytheme) plus {% import %} / {% from %} is the supported way to share macros. Libraries attach CSS/JS, not Twig macros, and extends is for template inheritance, not macro imports.

### Question 290

**Domain:** Templates and Preprocess Functions

Which two statements about Twig auto-escaping in Drupal 10/11 are correct? (Choose two)

### Options
- Auto-escape is enabled by default for Twig templates.
- Render arrays and MarkupInterface objects can be printed without |raw because Drupal marks them as safe when appropriate.
- You should routinely append |raw to all field output to avoid double-escaping.
- Setting debug: true in twig.config disables auto-escape for production.

### Correct Answers
- [0] Auto-escape is enabled by default for Twig templates.
- [1] Render arrays and MarkupInterface objects can be printed without |raw because Drupal marks them as safe when appropriate.

### Explanation
Drupal enables Twig auto-escaping by default. Early-rendered content and safe Markup objects print correctly without |raw. Blind use of |raw is a security risk, and Twig debug does not turn off escaping.

### Question 291

**Domain:** Templates and Preprocess Functions

You need to add a cache context so a node template variable varies by the current user roles. Where should you declare it?

### Options
- In preprocess, add to $variables['#cache']['contexts'][] = 'user.roles';
- In Twig with {% cachecontext 'user.roles' %}
- Only in settings.php as $settings['cache_contexts'][]
- As a data-cache-context attribute on the <body> tag

### Correct Answers
- [0] In preprocess, add to $variables['#cache']['contexts'][] = 'user.roles';

### Explanation
Cacheability metadata belongs on the render array via #cache. Preprocess can bubble contexts such as user.roles. There is no Twig cachecontext tag for this, and settings.php is not where per-template contexts are declared.

### Question 292

**Domain:** Templates and Preprocess Functions

A form ID is node_article_form. You want an alter that runs only for that form. Which hook name is correct?

### Options
- hook_form_node_article_form_alter()
- hook_form_alter_node_article()
- hook_node_article_form_alter()
- hook_form_id_node_article_form()

### Correct Answers
- [0] hook_form_node_article_form_alter()

### Explanation
Drupal supports targeted form alters as hook_form_FORM_ID_alter(). For FORM_ID node_article_form the implementation is hook_form_node_article_form_alter().

### Question 293

**Domain:** Templates and Preprocess Functions

You are overriding field.html.twig for a specific field on Article nodes. Which suggestion filename matches core's pattern?

### Options
- field--node--field-summary--article.html.twig
- field--article--field-summary--node.html.twig
- node--field-summary--article.html.twig
- field-summary--article--node.html.twig

### Correct Answers
- [0] field--node--field-summary--article.html.twig

### Explanation
Field suggestions commonly include entity type, field name, and bundle, e.g. field--node--field-summary--article.html.twig. Confirm with Twig debug output because suggestion order can include additional variants.

### Question 294

**Domain:** Templates and Preprocess Functions

Which two methods correctly pass variables into an included Twig partial in Drupal? (Choose two)

### Options
- {% include '@mytheme/partials/card.html.twig' with { title: label, url: url } %}
- {% include '@mytheme/partials/card.html.twig' with { title: label } only %}
- {% include '@mytheme/partials/card.html.twig' variables title=label %}
- {{ include_php('@mytheme/partials/card.html.twig', title) }}

### Correct Answers
- [0] {% include '@mytheme/partials/card.html.twig' with { title: label, url: url } %}
- [1] {% include '@mytheme/partials/card.html.twig' with { title: label } only %}

### Explanation
Twig's include tag supports a with hash of variables, and the only keyword prevents leaking the parent scope. Drupal does not provide include_php or a variables= keyword for includes.

### Question 295

**Domain:** Templates and Preprocess Functions

A module must alter theme suggestions for every HTML element theme hook (the 'html' theme hook). Which alter is appropriate?

### Options
- hook_theme_suggestions_html_alter(array &$suggestions, array $variables)
- hook_preprocess_html_alter()
- hook_html_theme_suggestions()
- hook_template_suggestions_alter() without a theme hook suffix

### Correct Answers
- [0] hook_theme_suggestions_html_alter(array &$suggestions, array $variables)

### Explanation
Suggestion alters are hook_theme_suggestions_HOOK_alter(). For the html theme hook that is hook_theme_suggestions_html_alter(). Preprocess alters variables, not the suggestion list.

### Question 296

**Domain:** Templates and Preprocess Functions

You need to build an Attribute object in Twig for a custom element that has no attributes variable. Which Drupal Twig function should you use?

### Options
- create_attribute({'class': ['button'], 'id': 'cta'})
- new Attribute({'class': ['button']})
- attribute_create(['class' => 'button'])
- drupal_attributes(['class' => ['button']])

### Correct Answers
- [0] create_attribute({'class': ['button'], 'id': 'cta'})

### Explanation
Drupal provides create_attribute() in Twig to instantiate Attribute objects. PHP constructors and invented helpers like drupal_attributes() are not available inside Twig templates.

### Question 297

**Domain:** Templates and Preprocess Functions

Content editors paste links into a formatted text field. In Twig you must output the field as configured by the text format. What should you print?

### Options
- {{ content.field_body }}
- {{ node.field_body.value|raw }}
- {{ node.field_body.0.value }} without filters
- {{ content.field_body|striptags|raw }}

### Correct Answers
- [0] {{ content.field_body }}

### Explanation
Printing the field from the content render array applies the correct formatter, text format filters, and cacheability. Dumping raw field values bypasses formatters and can skip important filtering.

### Question 298

**Domain:** Templates and Preprocess Functions

Which two actions are required after adding a new node--article--full.html.twig file to a custom theme before it is used? (Choose two)

### Options
- Rebuild caches so the theme registry picks up the new template.
- Ensure the suggestion appears in Twig debug output for that node/view mode.
- Delete the database and reinstall Drupal.
- Convert the file to PHPTemplate .tpl.php format for Drupal 10.

### Correct Answers
- [0] Rebuild caches so the theme registry picks up the new template.
- [1] Ensure the suggestion appears in Twig debug output for that node/view mode.

### Explanation
New templates are discovered via the theme registry after a cache rebuild. Twig debug confirms the active suggestion. PHPTemplate is long gone; reinstalling Drupal is unnecessary.

### Question 299

**Domain:** Templates and Preprocess Functions

In preprocess you must move title_suffix (contextual links) next to a custom heading variable without losing accessibility wrappers. What should you do?

### Options
- Keep printing {{ title_prefix }} / {{ title_suffix }} (or relocate those render arrays intact) rather than extracting only the link HTML.
- Unset title_suffix and hardcode a pencil icon linking to /node/N/edit.
- Strip contextual links with |without('title_suffix') and rebuild them in JavaScript.
- Print only $variables['title_suffix']['#markup'] as a string.

### Correct Answers
- [0] Keep printing {{ title_prefix }} / {{ title_suffix }} (or relocate those render arrays intact) rather than extracting only the link HTML.

### Explanation
Contextual links and other title affixes are render arrays that must remain intact for permissions, attachments, and cacheability. Hardcoding edit URLs or stringifying #markup breaks the contextual links system.

### Question 300

**Domain:** Templates and Preprocess Functions

A custom module uses hook_theme() to define a render element theme hook that should use a Twig file at templates/status-banner.html.twig. Which hook_theme() entry is correct?

### Options
- 'status_banner' => ['variables' => [...], 'template' => 'status-banner']
- 'status_banner' => ['path' => 'status-banner.html.twig'] only
- 'status-banner.html.twig' => ['render element' => 'elements']
- 'status_banner' => ['file' => 'status-banner.tpl.php']

### Correct Answers
- [0] 'status_banner' => ['variables' => [...], 'template' => 'status-banner']

### Explanation
Theme hooks use machine names with underscores while the template key uses the Twig basename without extension (hyphenated). Drupal maps status-banner to status-banner.html.twig. PHPTemplate file keys are obsolete.

## Layout Configuration

### Question 301

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

### Question 302

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

### Question 303

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

### Question 304

**Domain:** Layout Configuration

You must show different block presentations per breakpoint within Layout Builder. What is a realistic strategy in core?

### Options
- Place variants (or duplicate blocks) and control visibility with CSS media queries / responsive utilities—core does not switch view modes by breakpoint automatically.
- Use Field Layout so each breakpoint automatically selects a different view mode.
- Write JavaScript to swap block markup as the only acceptable solution.
- Rely on inline styles typed by editors per breakpoint.

### Correct Answers
- [0] Place variants (or duplicate blocks) and control visibility with CSS media queries / responsive utilities—core does not switch view modes by breakpoint automatically.

### Explanation
Neither Field Layout nor core Layout Builder provides breakpoint-aware view mode switching. Responsive show/hide of placements is the common approach.

### Question 305

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

### Question 306

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

### Question 307

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

### Question 308

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

### Question 309

**Domain:** Layout Configuration

Editors need to preview layout changes before saving. Which Layout Builder capability provides this?

### Options
- Layout Builder’s tempstore-based UI keeps unsaved layout edits in a draft state until the editor saves.
- Content moderation is required for any layout preview.
- A separate preview theme is required by core.
- Screenshot generation in Drupal core.

### Correct Answers
- [0] Layout Builder’s tempstore-based UI keeps unsaved layout edits in a draft state until the editor saves.

### Explanation
Unsaved LB changes live in tempstore until save. Content moderation is a separate publishing workflow, not the preview mechanism itself.

### Question 310

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

### Question 311

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

### Question 312

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

### Question 313

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

### Question 314

**Domain:** Layout Configuration

Your team wants layout override history for per-node Layout Builder layouts. What is required?

### Options
- Enable revisions for the entity so layout override changes can be stored per revision; content moderation is optional.
- Enable content moderation; revisions alone cannot store layout overrides.
- Use watchdog logs as the only history mechanism.
- Export the layout after each change manually.

### Correct Answers
- [0] Enable revisions for the entity so layout override changes can be stored per revision; content moderation is optional.

### Explanation
Layout overrides are stored on the entity; revisions capture history. Moderation is optional workflow on top of revisions.

### Question 315

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

### Question 316

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

### Question 317

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

### Question 318

**Domain:** Layout Configuration

You must ensure certain sections stay fixed at the top of Layout Builder defaults and are hard for editors to rearrange. What is accurate?

### Options
- Core Layout Builder does not provide a built-in `locked` section flag; use a contrib solution such as Layout Builder Lock (or restrict permissions / defaults carefully).
- Mark sections as `locked` in core Layout Builder configuration.
- Ask editors not to move them, with no technical control.
- Inject JavaScript to reset positions after every edit.

### Correct Answers
- [0] Core Layout Builder does not provide a built-in `locked` section flag; use a contrib solution such as Layout Builder Lock (or restrict permissions / defaults carefully).

### Explanation
Section locking is not a core LB feature. Contrib modules or permission/process controls are required for true locks.

### Question 319

**Domain:** Layout Configuration

You want alternate Layout Builder layouts per language on a translated node. What does core support?

### Options
- Core does not provide independent per-language Layout Builder overrides; the layout override is not per-translation in core.
- Enable content translations and core will automatically store a separate LB override per language.
- Create separate content types per language as the only core feature for this.
- Use CSS `:lang()` selectors to create true alternate layouts in Layout Builder.

### Correct Answers
- [0] Core does not provide independent per-language Layout Builder overrides; the layout override is not per-translation in core.

### Explanation
Layout Builder overrides are not language-specific in core. Asymmetric layouts need contrib approaches or different architecture.

### Question 320

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

### Question 321

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

### Question 322

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

### Question 323

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

### Question 324

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

### Question 325

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

### Question 326

**Domain:** Layout Configuration

Editors need a CTA block that appears only when a node field has a specific value. In Layout Builder without custom code, what should you do?

### Options
- Use a real visibility/conditions solution (for example Block Visibility Groups, Conditional Fields patterns, or a maintained LB conditions contrib module)—core LB alone does not evaluate arbitrary field values for components.
- Install a module literally named “Layout Builder Conditions” that is guaranteed to exist in core.
- Duplicate the entire layout for every node that matches.
- Use CSS alone to evaluate field values server-side.

### Correct Answers
- [0] Use a real visibility/conditions solution (for example Block Visibility Groups, Conditional Fields patterns, or a maintained LB conditions contrib module)—core LB alone does not evaluate arbitrary field values for components.

### Explanation
Core Layout Builder lacks general field-value visibility rules. Choose a maintained contrib/visibility approach rather than inventing a core module name.

### Question 327

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

### Question 328

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

### Question 329

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

### Question 330

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

### Question 331

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

### Question 332

**Domain:** Layout Configuration

You need custom markup for core’s two-column layout plugin (`layout_twocol`). Which Twig template should you override?

### Options
- `layout--twocol.html.twig`
- `layout--two-column.html.twig`
- `block--two-column.html.twig`
- `section--two-column.html.twig`

### Correct Answers
- [0] `layout--twocol.html.twig`

### Explanation
The core plugin id `layout_twocol` maps to `layout--twocol.html.twig`, not `two-column`.

### Question 333

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

### Question 334

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

### Question 335

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

### Question 336

**Domain:** Layout Configuration

A custom layout plugin exposes a settings form, and you need to add an extra validation rule. Which hook lets you alter the component form?

### Options
- Implement `hook_layout_builder_component_form_alter()`.
- Use `hook_form_FORM_ID_alter()`.
- Override the Layout Builder form template.
- Add JavaScript validation only.

### Correct Answers
- [1] Use `hook_form_FORM_ID_alter()`.

### Explanation
There is no `hook_layout_builder_component_form_alter()` in core. Alter the configure form with `hook_form_FORM_ID_alter()` or validate inside a custom layout plugin.

### Question 337

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

### Question 338

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

### Question 339

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

### Question 340

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

### Question 341

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

### Question 342

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

### Question 343

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

### Question 344

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

### Question 345

**Domain:** Layout Configuration

Editors create inline blocks in Layout Builder, but they do not appear when exporting configuration with `drush cex`. Why?

### Options
- Inline blocks are content stored with the entity layout override, not configuration; configuration export will not ship them. Reusable custom blocks are also content entities, so plan a content deployment strategy.
- Drush `cex` requires an `--inline-blocks` flag.
- Inline blocks must live in a module’s `config/install` directory.
- Layout Builder does not support configuration export of defaults at all.

### Correct Answers
- [0] Inline blocks are content stored with the entity layout override, not configuration; configuration export will not ship them. Reusable custom blocks are also content entities, so plan a content deployment strategy.

### Explanation
Inline blocks are content. Reusable blocks are also content entities—not a config-export substitute. Use content sync/default content strategies for deployment.

### Question 346

**Domain:** Layout Configuration

Product owners want a default landing-page structure for a content type, but marketing must rearrange sections on individual nodes. Which Layout Builder configuration enables this?

### Options
- Enable Layout Builder for the view mode and allow content editors to customize layouts per entity (overrides).
- Enable Layout Builder but lock overrides so only config defaults apply.
- Place blocks only in the theme's header region via Block UI.
- Use a single global custom block and hide sections with CSS per node.

### Correct Answers
- [0] Enable Layout Builder for the view mode and allow content editors to customize layouts per entity (overrides).

### Explanation
Layout Builder defaults define the shared structure; allowing per-entity overrides lets editors rearrange sections on specific nodes while new content still inherits the default.

### Question 347

**Domain:** Layout Configuration

You need a reusable two-column section that editors can pick inside Layout Builder. What should you provide?

### Options
- A layout plugin (annotated Layout / layouts.yml) with a Twig template defining two regions.
- A new content type for each column width.
- A Views page display named twocol.
- A preprocess function that splits the body field on a delimiter.

### Correct Answers
- [0] A layout plugin (annotated Layout / layouts.yml) with a Twig template defining two regions.

### Explanation
Layout Builder sections are layout plugins. Registering a layout with regions and a template makes it selectable in the Layout Builder UI without inventing content types or Views displays for structure.

### Question 348

**Domain:** Layout Configuration

An "Related articles" listing must appear inside Layout Builder on Article nodes and show only content sharing the current node's category. How should the Views block be configured?

### Options
- Add a contextual filter on the category field (or taxonomy term) that provides a default value from the current entity/route context.
- Hard-code a single term ID in a regular filter and clone the view per article.
- Use an exposed filter and instruct editors to type the category each time.
- Disable SQL rewriting and filter in Twig after loading all articles.

### Correct Answers
- [0] Add a contextual filter on the category field (or taxonomy term) that provides a default value from the current entity/route context.

### Explanation
Contextual filters with a default from the route/entity context make one Views block adapt to whichever node hosts it in Layout Builder. Hard-coded filters and Twig-side filtering do not scale.

### Question 349

**Domain:** Layout Configuration

Editors need a call-to-action that exists only on one landing page layout and should not appear in the global Block layout list as a reusable site-wide block. What should you place in Layout Builder?

### Options
- Create an inline (custom) block within that Layout Builder section.
- Place a custom block type instance in the Footer region for all pages.
- Embed the CTA HTML in html.html.twig with a node ID check.
- Add the CTA as a menu link in the main navigation.

### Correct Answers
- [0] Create an inline (custom) block within that Layout Builder section.

### Explanation
Layout Builder inline blocks are stored with the layout override/default and are scoped to that layout placement, unlike blocks placed globally in Block UI regions.

### Question 350

**Domain:** Layout Configuration

Which two tasks belong in the Block layout UI rather than Layout Builder? (Choose two)

### Options
- Place the primary site navigation block into the theme's header region for all pages.
- Configure visibility so a utility menu block appears only for authenticated users site-wide.
- Arrange fields inside a single Article node's full view mode into two columns.
- Override one About page node's section order without affecting other pages.

### Correct Answers
- [0] Place the primary site navigation block into the theme's header region for all pages.
- [1] Configure visibility so a utility menu block appears only for authenticated users site-wide.

### Explanation
Block layout manages region placement and global visibility conditions. Per-node field arrangement and one-off section overrides are Layout Builder concerns for entity view modes.

### Question 351

**Domain:** Layout Configuration

A content type uses Layout Builder for the Full view mode. Teasers in Views still show a stacked field list. What is the most likely reason?

### Options
- Layout Builder was enabled only for the Full view mode; Teaser still uses the field UI display.
- Views cannot display nodes when Layout Builder is enabled on any view mode.
- Teaser automatically inherits Full Layout Builder sections.
- You must disable the Teaser view mode entirely when using Layout Builder.

### Correct Answers
- [0] Layout Builder was enabled only for the Full view mode; Teaser still uses the field UI display.

### Explanation
Layout Builder is configured per view mode. Enabling it for Full does not change Teaser or other modes until those displays are also configured (or you point Views at Full).

### Question 352

**Domain:** Layout Configuration

You must expose a Views listing as something editors can place into a Layout Builder section. Which Views display type is appropriate?

### Options
- A Block display of the view, then place that Views block as a Layout Builder component.
- A Feed display only.
- A REST export display only.
- An Attachment display without a block or page parent.

### Correct Answers
- [0] A Block display of the view, then place that Views block as a Layout Builder component.

### Explanation
Views Block displays become blocks that can be placed in Layout Builder (or Block UI). Feed and REST export serve other consumers; attachments depend on a parent display.

### Question 353

**Domain:** Layout Configuration

Design requires different image crops for card grids versus the article hero. Which configuration combination is correct?

### Options
- Create separate responsive image styles (or image styles) and assign different formatters/view modes for teaser vs full displays.
- Upload two physical files for every image and switch them with JavaScript.
- Store crops only in the theme CSS background-position without image styles.
- Use the same style everywhere and letterbox with HTML tables.

### Correct Answers
- [0] Create separate responsive image styles (or image styles) and assign different formatters/view modes for teaser vs full displays.

### Explanation
Drupal image styles and responsive image styles, applied via field formatters on the appropriate view modes, are the supported way to vary crops and sources by display context.

### Question 354

**Domain:** Layout Configuration

Which two Layout Builder practices help keep configuration deployable across environments? (Choose two)

### Options
- Define shared structure as Layout Builder defaults for the entity view mode and export that configuration.
- Prefer defaults plus controlled overrides rather than uniquely hand-building every node layout in production only.
- Store all landing page HTML exclusively in the database theme settings blob.
- Disable configuration management whenever Layout Builder is enabled.

### Correct Answers
- [0] Define shared structure as Layout Builder defaults for the entity view mode and export that configuration.
- [1] Prefer defaults plus controlled overrides rather than uniquely hand-building every node layout in production only.

### Explanation
Defaults live in configuration and export cleanly. Minimizing one-off production-only overrides keeps environments consistent. Disabling config management or stuffing HTML into theme settings works against deployability.

### Question 355

**Domain:** Layout Configuration

A theme defines regions in mytheme.info.yml. Editors place the breadcrumb block in the breadcrumb region, but the region never appears. What should you verify in the page template?

### Options
- That page.html.twig prints {{ page.breadcrumb }} (matching the region machine name).
- That html.html.twig includes the region automatically without page.html.twig.
- That the region is named in libraries.yml instead of info.yml.
- That Twig debug is disabled or regions will not render.

### Correct Answers
- [0] That page.html.twig prints {{ page.breadcrumb }} (matching the region machine name).

### Explanation
Regions declared in the theme info file must be printed from page.html.twig using the page.<region_machine_name> variable. html.html.twig wraps the page but does not output theme regions by itself.

### Question 356

**Domain:** Layout Configuration

You need a Views grid of promotional cards that uses custom markup from card.html.twig in your theme. Which approach aligns with Drupal theming?

### Options
- Set the view to show Content with a view mode (or use a row style) that your theme templates, e.g. node--promo--teaser.html.twig / field templates.
- Put raw HTML in the Views header and hide the results.
- Rewrite every field as absolute HTML in the Views UI and disable theming.
- Override views-view.html.twig to hardcode node IDs for the grid.

### Correct Answers
- [0] Set the view to show Content with a view mode (or use a row style) that your theme templates, e.g. node--promo--teaser.html.twig / field templates.

### Explanation
Using entity view modes (or properly themed Views row/field templates) keeps markup in the theme and reuses display configuration. Hardcoded HTML rewrites in Views UI fight the theme system.

### Question 357

**Domain:** Layout Configuration

Site builders want to prevent placing certain blocks inside Layout Builder for a content type. Which core capability addresses this?

### Options
- Layout Builder restrictions (manage which blocks/layouts are available per entity type/view mode) or equivalent allowed-block configuration.
- Deleting the Block module.
- Removing all regions from the theme info file.
- Setting Twig autoescape to false.

### Correct Answers
- [0] Layout Builder restrictions (manage which blocks/layouts are available per entity type/view mode) or equivalent allowed-block configuration.

### Explanation
Drupal's Layout Builder restrictions UI lets administrators allow or deny specific blocks and layouts for a given entity display, guiding editors without removing Block UI entirely.

### Question 358

**Domain:** Layout Configuration

A homepage hero must use Layout Builder, but the site logo and main menu must remain consistent on every page. Where should logo and menu live?

### Options
- In theme regions via Block layout (or the theme's branding/menu templates), not as one-off Layout Builder sections on every content type.
- Only as Layout Builder inline blocks duplicated onto each content type default.
- Inside each Views row template for every listing.
- As unchecked checkboxes on the node edit form.

### Correct Answers
- [0] In theme regions via Block layout (or the theme's branding/menu templates), not as one-off Layout Builder sections on every content type.

### Explanation
Global chrome belongs in theme regions/Block layout (or theme templates). Layout Builder is ideal for entity content structure, not for re-placing global navigation on every bundle.

### Question 359

**Domain:** Layout Configuration

Which two Views features are commonly used when building a filterable news listing block? (Choose two)

### Options
- Exposed filters so visitors can narrow results by category or keyword.
- A Block display placed in a region or Layout Builder section.
- A Migrate process plugin attached to each row.
- hook_cron() inside the view to rebuild the listing HTML nightly.

### Correct Answers
- [0] Exposed filters so visitors can narrow results by category or keyword.
- [1] A Block display placed in a region or Layout Builder section.

### Explanation
Exposed filters plus a Block display are standard for interactive listings. Migrate plugins and cron hooks are not Views display features for visitor-facing filters.

### Question 360

**Domain:** Layout Configuration

You customize the markup for core's two-column layout used by Layout Builder. Which template name should you override in the theme?

### Options
- layout--twocol.html.twig (or the specific layout's template suggestion shown in Twig debug)
- block--layout-builder.html.twig exclusively for all layouts
- node--layout--twocol.html.twig for every entity type
- page--twocol.html.twig

### Correct Answers
- [0] layout--twocol.html.twig (or the specific layout's template suggestion shown in Twig debug)

### Explanation
Layout plugins declare Twig templates such as layout--twocol.html.twig. Twig debug lists the exact suggestions. Node or page templates do not replace layout section templates.

## Performance

### Question 361

**Domain:** Performance

Audit logs reveal large CSS payloads on first paint. Which Drupal-friendly technique helps without inventing unsupported library keys?

### Options
- Keep a small critical CSS budget early (often inlined) and leave the bulk of theme CSS on aggregated libraries with aggregation enabled.
- Mark a CSS library as `preload: true` in `libraries.yml`, which core fully supports for stylesheets.
- Disable CSS aggregation permanently as the optimization strategy.
- Inline all CSS into every Twig template.

### Correct Answers
- [0] Keep a small critical CSS budget early (often inlined) and leave the bulk of theme CSS on aggregated libraries with aggregation enabled.

### Explanation
Drupal does not provide a general `preload` flag for CSS libraries the way some answers claim. Critical CSS inlining plus aggregated remainder is the practical approach.

### Question 362

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

### Question 363

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

### Question 364

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

### Question 365

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

### Question 366

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

### Question 367

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

### Question 368

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

### Question 369

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

### Question 370

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

### Question 371

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

### Question 372

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

### Question 373

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

### Question 374

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

### Question 375

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

### Question 376

**Domain:** Performance

On a Drupal 11 marketing site, Performance settings show CSS and JavaScript aggregation enabled, yet the homepage still requests dozens of theme CSS files. A developer attached several libraries with preprocess disabled during local debugging. Which library.yml key prevents a CSS file from joining the aggregated bundle?

### Options
- Setting preprocess: false on that CSS asset entry in *.libraries.yml.
- Omitting weight so Drupal treats the file as critical.
- Declaring the file under js instead of css so aggregation skips it.
- Adding dependencies: - core/drupal so aggregation is bypassed.

### Correct Answers
- [0] Setting preprocess: false on that CSS asset entry in *.libraries.yml.

### Explanation
In Drupal libraries, preprocess: false on a CSS or JS asset excludes that file from aggregation while aggregation remains globally enabled. Weight, moving the file to js, or adding core/drupal does not disable preprocessing.

### Question 377

**Domain:** Performance

You are preparing a custom theme for production. Editors complain that anonymous pages are slow until caches warm. Which two core capabilities should you verify are enabled so anonymous traffic benefits from full-page caching and asset bundling?

### Options
- Internal Page Cache for anonymous users.
- CSS and JavaScript aggregation on the Performance configuration page.
- Twig debug mode so template suggestions are printed in HTML comments.
- Disabling the Dynamic Page Cache module site-wide.

### Correct Answers
- [0] Internal Page Cache for anonymous users.
- [1] CSS and JavaScript aggregation on the Performance configuration page.

### Explanation
Internal Page Cache serves complete cached pages to anonymous users, and aggregation reduces HTTP requests for CSS/JS. Twig debug hurts performance, and Dynamic Page Cache should remain available for authenticated/personalized responses—not disabled.

### Question 378

**Domain:** Performance

A authenticated dashboard shows a personalized Welcome block that varies per user. The rest of the page is identical for all authenticated roles. Which approach lets Drupal stream the shared markup quickly while filling the personalized block later?

### Options
- Enable BigPipe so highly dynamic placeholders can be replaced after the initial payload.
- Set #cache max-age to 0 on the entire page render array.
- Disable Internal Page Cache and rely only on browser cache.
- Move the Welcome block into settings.php as a hardcoded string.

### Correct Answers
- [0] Enable BigPipe so highly dynamic placeholders can be replaced after the initial payload.

### Explanation
BigPipe sends cacheable page structure first and streams personalized placeholders afterward, improving perceived performance without turning off caching for the whole page.

### Question 379

**Domain:** Performance

A Views block lists recent articles and sits in a sidebar on many content types. After publishing a new article, the block still shows stale titles until a full cache rebuild. Which cache metadata should the view/block correctly bubble so the listing invalidates when article nodes change?

### Options
- Cache tags such as node_list (and relevant node tags) so list content invalidates on node updates.
- A permanent max-age of Cache::PERMANENT with no tags.
- Only the url.path cache context, ignoring entity changes.
- Disabling the Render cache bin entirely in settings.php.

### Correct Answers
- [0] Cache tags such as node_list (and relevant node tags) so list content invalidates on node updates.

### Explanation
Listings of nodes should expose cache tags (for example node_list) so Drupal invalidates cached markup when content changes. Relying only on path context or clearing bins site-wide is inefficient and incorrect.

### Question 380

**Domain:** Performance

Hero images on article teasers download a 2400px original on every listing page. Which Drupal configuration reduces bytes transferred across breakpoints without hardcoding widths in Twig?

### Options
- Configure a Responsive Image style that maps breakpoints/sizes to image style derivatives.
- Enable CSS aggregation so images are automatically resized.
- Store originals as Base64 in a preprocess hook.
- Set preprocess: false on the theme’s global CSS library.

### Correct Answers
- [0] Configure a Responsive Image style that maps breakpoints/sizes to image style derivatives.

### Explanation
Responsive Image styles generate appropriately sized derivatives and emit srcset/sizes so browsers pick a suitable file. Aggregation and preprocess flags do not resize images.

## Security

### Question 381

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

### Question 382

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

### Question 383

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

### Question 384

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

### Question 385

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

### Question 386

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

### Question 387

**Domain:** Security

You must pass data to JavaScript via `drupalSettings` safely. What is the secure practice?

### Options
- Attach structured data with `#attached]['drupalSettings']` (JSON-encoded by Drupal) and escape/sanitize only when inserting values into the DOM in JavaScript.
- Run `Html::escape()` or `Xss::filter()` on every value before assigning to `drupalSettings`.
- Pass full entity objects directly into `drupalSettings` without structuring DTOs.
- Disable `drupalSettings` and write globals into inline scripts instead.

### Correct Answers
- [0] Attach structured data with `#attached]['drupalSettings']` (JSON-encoded by Drupal) and escape/sanitize only when inserting values into the DOM in JavaScript.

### Explanation
`drupalSettings` is JSON data, not HTML. HTML-escaping values before JSON encoding is the wrong layer; escape at DOM insertion time in JS.

### Question 388

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

### Question 389

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

### Question 390

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

### Question 391

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

### Question 392

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

### Question 393

**Domain:** Security

Users reported that staging URLs are indexed by search engines. Trusted host patterns were suggested. What do they actually do?

### Options
- Trusted host patterns mitigate Host-header spoofing; they do not stop crawlers from indexing a publicly reachable staging site. Use auth, network restrictions, and/or `noindex`/`robots` controls for staging.
- Trusted host patterns alone prevent search engines from indexing staging.
- Disable CSS aggregation to prevent indexing.
- Use Layout Builder restrictions to block crawlers.

### Correct Answers
- [0] Trusted host patterns mitigate Host-header spoofing; they do not stop crawlers from indexing a publicly reachable staging site. Use auth, network restrictions, and/or `noindex`/`robots` controls for staging.

### Explanation
Trusted hosts protect against Host header attacks. Staging indexability needs access control and robots/noindex measures.

### Question 394

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

### Question 395

**Domain:** Security

Security reviewers require authenticated session cookies to be HTTPS-only and not readable by JavaScript. What is accurate in Drupal?

### Options
- Serve the site over HTTPS so Secure cookies are used; HttpOnly is handled by Drupal’s session configuration—do not invent `$settings['cookie_secure']` / `$settings['cookie_httponly']` keys.
- Set `$settings['cookie_secure'] = TRUE;` and `$settings['cookie_httponly'] = TRUE;` in `settings.php`.
- Override cookie headers in Twig templates.
- Configure the theme’s `.info.yml` file.

### Correct Answers
- [0] Serve the site over HTTPS so Secure cookies are used; HttpOnly is handled by Drupal’s session configuration—do not invent `$settings['cookie_secure']` / `$settings['cookie_httponly']` keys.

### Explanation
Those `$settings` cookie keys are not valid Drupal settings. HTTPS + core session configuration is the correct approach.

### Question 396

**Domain:** Security

A Twig template prints a plain-text field value with {{ content.field_summary }}. Why is this generally safer than concatenating unfiltered strings with the |raw filter?

### Options
- Twig auto-escaping (and Drupal’s render/ Twig integration) escapes unsafe strings by default, whereas |raw marks output as pre-escaped/trusted.
- Drupal disables all HTML in every field regardless of text format.
- |raw is required for all field output in Drupal 11.
- Auto-escaping only applies inside {% trans %} blocks.

### Correct Answers
- [0] Twig auto-escaping (and Drupal’s render/ Twig integration) escapes unsafe strings by default, whereas |raw marks output as pre-escaped/trusted.

### Explanation
Drupal Twig autoescapes variables unless they are known-safe Markup or explicitly marked safe via |raw. Blind |raw is a common XSS footgun; render arrays/fields usually carry proper escaping/filtering already.

### Question 397

**Domain:** Security

Editors with a restricted role paste HTML into a body field. Which two Drupal mechanisms are the primary server-side controls that determine which tags/attributes survive?

### Options
- The text format assigned to the field (filters such as Limit allowed HTML tags).
- Filter permissions controlling which roles may use each text format.
- Setting preprocess: false on the theme CSS library.
- Enabling BigPipe for authenticated users.

### Correct Answers
- [0] The text format assigned to the field (filters such as Limit allowed HTML tags).
- [1] Filter permissions controlling which roles may use each text format.

### Explanation
Text formats and the permissions that grant format use are core XSS controls for authored HTML. Asset aggregation and BigPipe are performance features, not HTML sanitizers.

### Question 398

**Domain:** Security

A theme developer needs to output intentional HTML from a custom string built in preprocess. Which approach aligns with Drupal security practice?

### Options
- Sanitize/build safe markup in PHP (for example using Drupal’s XSS filtering or proper render/Markup APIs) before Twig, rather than piping untrusted input through |raw.
- Always append |raw in Twig for any variable that might contain tags.
- Disable Twig autoescape globally in the theme’s services definition.
- Store the HTML in a cookie and document.write it in a behavior.

### Correct Answers
- [0] Sanitize/build safe markup in PHP (for example using Drupal’s XSS filtering or proper render/Markup APIs) before Twig, rather than piping untrusted input through |raw.

### Explanation
Trusted HTML should be created carefully in PHP with filtering/Markup APIs. Globally disabling autoescape or casually using |raw on untrusted data invites XSS.

### Question 399

**Domain:** Security

Security testing finds a reflected XSS vector where a query parameter is printed in a custom Twig file as {{ app.request.query.get('q')|raw }}. What is the correct remediation?

### Options
- Remove |raw and avoid printing untrusted request input as markup; escape it or do not output it as HTML.
- Enable CSS aggregation to neutralize script tags.
- Grant the anonymous role the 'administer filters' permission so filters clean the query string.
- Switch the site to HTTP to avoid mixed-content warnings.

### Correct Answers
- [0] Remove |raw and avoid printing untrusted request input as markup; escape it or do not output it as HTML.

### Explanation
Request parameters are untrusted. Printing them with |raw enables XSS. Aggregation and filter admin permissions do not sanitize arbitrary Twig output of query values.

### Question 400

**Domain:** Security

You are hardening session security for a Drupal site that must run only over HTTPS in production. Which two practices belong in a typical secure deployment?

### Options
- Serve the site over HTTPS and ensure cookies are sent securely (Drupal’s production HTTPS setup / reverse proxy SSL termination).
- Force users through HTTPS (for example via server redirect and trusted host / reverse proxy configuration) so session cookies are not exposed on cleartext HTTP.
- Store session IDs in a public Twig variable for easier front-end debugging.
- Disable the user.module to remove authentication entirely.

### Correct Answers
- [0] Serve the site over HTTPS and ensure cookies are sent securely (Drupal’s production HTTPS setup / reverse proxy SSL termination).
- [1] Force users through HTTPS (for example via server redirect and trusted host / reverse proxy configuration) so session cookies are not exposed on cleartext HTTP.

### Explanation
HTTPS and secure cookie transport protect session identifiers. Exposing session IDs to Twig or removing authentication is not a hardening strategy.

