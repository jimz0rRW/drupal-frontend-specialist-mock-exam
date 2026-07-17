import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
QUESTIONS_PATH = PROJECT_ROOT / 'src/questions/generated_questions.md'

DOMAINS = {
    'FUNDAMENTAL': 'Fundamental Web Development Concepts',
    'THEMING': 'Theming Concepts',
    'TEMPLATES': 'Templates and Preprocess Functions',
    'LAYOUT': 'Layout Configuration',
    'PERFORMANCE': 'Performance',
    'SECURITY': 'Security'
}

DOMAIN_ORDER = [
    DOMAINS['FUNDAMENTAL'],
    DOMAINS['THEMING'],
    DOMAINS['TEMPLATES'],
    DOMAINS['LAYOUT'],
    DOMAINS['PERFORMANCE'],
    DOMAINS['SECURITY']
]


EXISTING_DOMAIN_RANGES = [
    {'start': 1, 'end': 68, 'domain': DOMAINS['FUNDAMENTAL']},
    {'start': 69, 'end': 116, 'domain': DOMAINS['THEMING']},
    {'start': 117, 'end': 163, 'domain': DOMAINS['TEMPLATES']},
    {'start': 164, 'end': 191, 'domain': DOMAINS['LAYOUT']},
    {'start': 192, 'end': 201, 'domain': DOMAINS['PERFORMANCE']},
    {'start': 202, 'end': 210, 'domain': DOMAINS['SECURITY']}
]


def get_domain_from_range(question_id: int) -> str:
    for item in EXISTING_DOMAIN_RANGES:
        if item['start'] <= question_id <= item['end']:
            return item['domain']
    raise ValueError(f'Unable to infer domain for question {question_id}')


def parse_existing_questions(markdown: str):
    pattern = re.compile(r'## Question (\d+)\n([\s\S]*?)(?=## Question \d+|\Z)')
    questions = []
    for index, match in enumerate(pattern.finditer(markdown)):
        qid = int(match.group(1))
        body = match.group(2).strip()
        domain_match = re.search(r'\*\*Domain:\*\*\s*(.+)', body)
        if domain_match:
            domain = domain_match.group(1).strip()
            body = re.sub(r'\*\*Domain:\*\*.*\n?\n?', '', body, count=1).strip()
        else:
            domain = get_domain_from_range(qid)
        questions.append({
            'original_order': index,
            'domain': domain,
            'content': body.strip()
        })
    return questions


def domain_index(domain: str) -> int:
    try:
        return DOMAIN_ORDER.index(domain)
    except ValueError:
        return len(DOMAIN_ORDER)


def build_markdown(questions):
    parts = []
    for idx, question in enumerate(questions, start=1):
        content = question['content'].strip()
        body = f"## Question {idx}\n\n**Domain:** {question['domain']}\n\n"
        if content:
            body += f"{content}\n"
        parts.append(body)
    markdown = "\n".join(parts)
    markdown = re.sub(r'\n{3,}', '\n\n', markdown).strip() + "\n"
    return markdown


fundamentalQuestions = [
    {
        'domain': DOMAINS['FUNDAMENTAL'],
        'content': """You are rebuilding the product listing grid so each card's internal layout lines up with the site-wide column tracks. The parent container already uses CSS Grid, and cards should snap to those tracks even when they wrap to new rows. Which CSS change meets this requirement without extra wrappers?

### Options
- Set the card's inner grid container to `display: subgrid` so it inherits the parent `grid-template-columns`.
- Switch every card to Flexbox and use `align-items: stretch`.
- Absolutely position card contents and size them with `calc()`.
- Wrap each card in an extra container that repeats the column definitions.

### Correct Answers
- [0] Set the card's inner grid container to `display: subgrid` so it inherits the parent `grid-template-columns`.

### Explanation
CSS Subgrid lets nested grid containers align their tracks with a parent grid. Flexbox, absolute positioning, or duplicate wrappers either break the desired alignment or add brittle markup."""
    },
    {
        'domain': DOMAINS['FUNDAMENTAL'],
        'content': """Editors can drag a divider to change the width of a live preview iframe in your admin theme. Marketing wants the preview header to toggle a `--compact` modifier whenever the preview width drops below 720px, without relying on global window resize listeners. How should you implement this?

### Options
- Observe the preview container with `ResizeObserver` and toggle the modifier when `contentRect.width` crosses 720px.
- Bind `window.onresize` and poll the container width every 100ms with `getBoundingClientRect()`.
- Attach a `MutationObserver` to the iframe and recompute the width when attributes change.
- Use CSS `@media (max-width: 720px)` to add the modifier via a pseudo-element.

### Correct Answers
- [0] Observe the preview container with `ResizeObserver` and toggle the modifier when `contentRect.width` crosses 720px.

### Explanation
`ResizeObserver` reports size changes for a specific element without tying logic to global resize events or timers. MutationObserver watches DOM mutations, and pseudo-elements cannot toggle classes on the element."""
    },
    {
        'domain': DOMAINS['FUNDAMENTAL'],
        'content': """Designers want the marketing site to honor the user's system dark mode preference while still allowing a manual light/dark toggle. What should you do first?

### Options
- Define color tokens with CSS custom properties and wrap the dark defaults inside `@media (prefers-color-scheme: dark)`, letting the toggle switch variables with a class.
- Load a separate dark CSS file with JavaScript once `matchMedia('(prefers-color-scheme: dark)')` matches.
- Detect OS theme server-side and render two completely different stylesheets.
- Apply dark colors inline on the `<body>` element when dark mode is detected.

### Correct Answers
- [0] Define color tokens with CSS custom properties and wrap the dark defaults inside `@media (prefers-color-scheme: dark)`, letting the toggle switch variables with a class.

### Explanation
Using custom properties with `prefers-color-scheme` provides an accessible default while giving the toggle a single place to override values. Loading alternate stylesheets or inline colors introduces flicker and is harder to maintain."""
    },
    {
        'domain': DOMAINS['FUNDAMENTAL'],
        'content': """A decoupled autosave feature sends draft updates with `fetch()`. When the author navigates away, the pending request should cancel immediately to avoid server-side conflicts. What is the best approach?

### Options
- Create an `AbortController`, pass its signal to `fetch()`, and call `controller.abort()` in the component cleanup.
- Wrap the `fetch()` call in `Promise.race()` with a timeout promise that rejects after 2 seconds.
- Allow the request to finish; browsers automatically cancel network calls on navigation.
- Listen for the `beforeunload` event and return `false` to stop the request.

### Correct Answers
- [0] Create an `AbortController`, pass its signal to `fetch()`, and call `controller.abort()` in the component cleanup.

### Explanation
`AbortController` integrates with `fetch()` so the HTTP request is terminated immediately when the controller aborts. Timeouts only reject locally, and relying on navigation side effects can leave the server handling stale requests."""
    },
    {
        'domain': DOMAINS['FUNDAMENTAL'],
        'content': """Keyboard users report that icon-only buttons have no focus ring because the team removed outlines for aesthetic reasons. How do you restore accessible focus feedback without reintroducing distracting outlines for mouse users?

### Options
- Style focus indicators with the `:focus-visible` pseudo-class so they show for keyboard users but not pointer interactions.
- Apply `outline: none` and rely solely on `aria-label` for context.
- Toggle a CSS class on `mousedown` to remove outlines temporarily.
- Replace focus outlines with `:hover` styles.

### Correct Answers
- [0] Style focus indicators with the `:focus-visible` pseudo-class so they show for keyboard users but not pointer interactions.

### Explanation
`:focus-visible` lets browsers decide when a focus ring should appear, preserving accessibility for keyboard users while avoiding unwanted outlines for mouse users. Removing outlines or relying on hover does not meet accessibility requirements."""
    },
    {
        'domain': DOMAINS['FUNDAMENTAL'],
        'content': """Inline validation errors appear beneath each checkout field, but screen reader users are not alerted when the message appears. What should you add?

### Options
- Wrap the error container in an element with `role="alert"` or `aria-live="assertive"`.
- Add `tabindex="0"` to each error message.
- Toggle `aria-hidden="false"` on the message when it appears.
- Show a toast notification elsewhere on the page.

### Correct Answers
- [0] Wrap the error container in an element with `role="alert"` or `aria-live="assertive"`.

### Explanation
Live regions such as `role="alert"` cause assistive technology to announce new content immediately. Tabindex or aria-hidden changes do not trigger announcements, and separate toasts disrupt the form flow."""
    },
    {
        'domain': DOMAINS['FUNDAMENTAL'],
        'content': """Your fullscreen hero needs to respect the safe area on devices with notches without hardcoding device-specific values. What is the recommended approach?

### Options
- Use padding values that reference environment variables like `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
- Detect iOS user agents in JavaScript and set inline padding.
- Add a fixed 44px top margin for all devices.
- Wrap the hero in an extra `<div>` with `overflow: hidden`.

### Correct Answers
- [0] Use padding values that reference environment variables like `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.

### Explanation
CSS environment variables expose the safe area insets so layouts adapt automatically across devices. UA sniffing and magic numbers are brittle, and extra wrappers do not guarantee safe spacing."""
    }
]

# Theming, template, layout, performance, and security question lists continue below...
themingQuestions = [
    {
        'domain': DOMAINS['THEMING'],
        'content': """You want to add a small JavaScript enhancement to the existing Olivero `core/drupal` library without duplicating the entire definition. How should you register it in your subtheme?

### Options
- Use `libraries-extend` in the subtheme's `.info.yml` to append your library to `core/drupal`.
- Copy the `core/drupal` library into your theme's `libraries.yml` and edit it directly.
- Add a `<script>` tag in `html.html.twig` after the core library loads.
- Attach the script with `attach_library()` inside every template.

### Correct Answers
- [0] Use `libraries-extend` in the subtheme's `.info.yml` to append your library to `core/drupal`.

### Explanation
`libraries-extend` lets themes augment existing libraries while keeping core definitions untouched. Duplicating or hardcoding scripts risks maintenance issues and inconsistent loading."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Olivero ships a carousel stylesheet that conflicts with your custom layout. You want to stop loading just that file in your subtheme while keeping the rest of the base assets. What is the recommended approach?

### Options
- Declare a `libraries-override` entry in your `.info.yml` that replaces the specific CSS file with `false`.
- Delete the CSS file from the core theme so Drupal can't find it.
- Add `display: none` rules in your theme to neutralize the styles.
- Remove Olivero as the base theme so none of its assets load.

### Correct Answers
- [0] Declare a `libraries-override` entry in your `.info.yml` that replaces the specific CSS file with `false`.

### Explanation
`libraries-override` cleanly removes individual asset entries from inherited libraries. Deleting core files or unscoped overrides makes updates fragile, and dropping the base theme eliminates desired assets."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You added a theme setting that lets editors choose an accent color. A front-end script needs that value on every page load. How should you expose it?

### Options
- In `hook_preprocess_html()`, read the theme setting and set it on `drupalSettings.myTheme.accentColor`.
- Echo the value directly inside `html.html.twig` as a global JavaScript variable.
- Create a custom REST endpoint that the script fetches on load.
- Store the value in `localStorage` during configuration save.

### Correct Answers
- [0] In `hook_preprocess_html()`, read the theme setting and set it on `drupalSettings.myTheme.accentColor`.

### Explanation
Preprocess functions run before rendering and can safely expose configuration through `drupalSettings`, which is cached and delivered with the page. Inline globals and extra network calls are brittle, and client-side storage doesn't help first paint."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Your theme stores reusable Twig partials in `/themes/custom/skyline/components/partials`. You want to reference them via `@skyline/partials/card.twig` without relative paths. What do you need?

### Options
- Define a Twig namespace in `skyline.services.yml` under `twig.loader` pointing to the component directory.
- Use `component-libraries` in `skyline.info.yml`.
- Add the path to `settings.php` under `$settings['twig_tweak']`.
- Register the directory via `hook_theme()`.

### Correct Answers
- [0] Define a Twig namespace in `skyline.services.yml` under `twig.loader` pointing to the component directory.

### Explanation
Themes can declare Twig namespaces via service overrides so templates are addressable with the `@namespace` syntax. Component libraries control SDC discovery, not Twig loaders, and settings.php doesn't configure namespaces."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """The design system splits Single Directory Components into `components/base` and `components/patterns`. How do you expose both directories to Drupal?

### Options
- Add multiple entries under `component-libraries` in the theme's `.info.yml`, each mapping a library name to a directory.
- List the directories under `libraries:` in `.info.yml`.
- Import the directories in `libraries.yml` with a custom key.
- Symlink the directories into `templates/`.

### Correct Answers
- [0] Add multiple entries under `component-libraries` in the theme's `.info.yml`, each mapping a library name to a directory.

### Explanation
Single Directory Components rely on the `component-libraries` section where each library points to a folder. Libraries.yml references assets, not directories, and symlinks do not register components."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Editors using CKEditor 5 want the back office preview to match front-end typography. Where do you declare theme stylesheets so the editor loads them?

### Options
- Add the CSS files to the `ckeditor_stylesheets` array in your theme's `.info.yml`.
- Attach the stylesheet with `attach_library()` inside `node--form.html.twig`.
- Place the stylesheet in `libraries.yml` under the global library.
- Load the stylesheet via JavaScript inside the editor.

### Correct Answers
- [0] Add the CSS files to the `ckeditor_stylesheets` array in your theme's `.info.yml`.

### Explanation
The `ckeditor_stylesheets` entry ensures CKEditor loads additional theme CSS inside the editing iframe. Attaching libraries on forms or injecting CSS with JS is unreliable."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You output the text “Primary navigation” from `THEME.theme`, but translators need different wording depending on context. How can you make the string translation-friendly?

### Options
- Wrap it in `t('Primary navigation', [], ['context' => 'Toolbar label'])`.
- Use PHP's `gettext()` directly.
- Add the text to a custom `.po` file without changing code.
- Hardcode the English text and rely on JavaScript to replace it.

### Correct Answers
- [0] Wrap it in `t('Primary navigation', [], ['context' => 'Toolbar label'])`.

### Explanation
Providing context through the `t()` function helps translators distinguish identical strings. Gettext alone bypasses Drupal's translation system, and manual replacements are brittle."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """A contrib module loads an inline CSS reset that conflicts with your design. You can't change the module. How do you disable the file from your theme?

### Options
- Implement `hook_css_alter()` in `THEME.theme` and unset the specific stylesheet path.
- Create a duplicate of the module library in your theme and edit it.
- Override the file with an empty stylesheet on the filesystem.
- Use JavaScript to remove the inserted `<link>`.

### Correct Answers
- [0] Implement `hook_css_alter()` in `THEME.theme` and unset the specific stylesheet path.

### Explanation
`hook_css_alter()` lets themes remove CSS assets loaded by modules when overrides are not possible. Duplicating libraries or manipulating DOM nodes is fragile."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Your theme's global styling library includes compiled CSS and JS bundles. What ensures the assets load on every page?

### Options
- List the library under `libraries:` in the theme's `.info.yml`.
- Attach the library manually from each template with `attach_library()`.
- Add it to `libraries-override` in `.info.yml`.
- Include the files via `@import` in CSS.

### Correct Answers
- [0] List the library under `libraries:` in the theme's `.info.yml`.

### Explanation
Declaring libraries under the `libraries` key tells Drupal to attach them globally. Manual attachments are error-prone, and overrides are for altering existing libraries."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """A hero animation should load only on the front page. What is the cleanest way to attach the theme library conditionally?

### Options
- Use `hook_page_attachments()` in the theme to check `\Drupal::service('path.matcher')->isFrontPage()` and attach the library.
- Add logic inside `page.html.twig` to print a script tag when `is_front` is true.
- Create a custom module to attach the library.
- Let the library load everywhere and hide the markup with CSS.

### Correct Answers
- [0] Use `hook_page_attachments()` in the theme to check `\Drupal::service('path.matcher')->isFrontPage()` and attach the library.

### Explanation
`hook_page_attachments()` lets themes conditionally attach assets at render time. Embedding scripts in Twig or loading assets everywhere wastes bandwidth and hurts caching."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """A Single Directory Component needs editors to pass a button style (primary or secondary). Where do you declare the allowed values so the component schema is validated?

### Options
- In the component's `.component.yml` file under `props`, define an enum for the style attribute.
- Add the allowed values to `THEME.info.yml`.
- Create a theme setting and reuse it.
- Hardcode the options in Twig with `if` statements.

### Correct Answers
- [0] In the component's `.component.yml` file under `props`, define an enum for the style attribute.

### Explanation
Single Directory Components store property definitions and validation in the accompanying `.component.yml` file. Info.yml and theme settings do not validate component props."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You created a custom theme with regions for header, content, and footer. When site builders add new blocks, you want them to land in the header by default. How do you configure this?

### Options
- Set `default_region: header` in the theme's `.info.yml`.
- Add the default region to `settings.php`.
- Override `block_form` to preselect the region.
- Attach JavaScript that moves blocks after placement.

### Correct Answers
- [0] Set `default_region: header` in the theme's `.info.yml`.

### Explanation
The `default_region` key in `.info.yml` defines where new blocks are placed by default. PHP or JavaScript overrides are unnecessary."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """The design requires hiding the site slogan control from theme settings because the header no longer uses it. What is the correct configuration?

### Options
- Set `features:\n  - logo\n  - favicon` and omit `name` and `slogan` in the theme's `.info.yml`.
- Delete the slogan field from `system.site` configuration.
- Override the theme settings form and remove the field with JavaScript.
- Ignore it; Drupal removes unused fields automatically.

### Correct Answers
- [0] Set `features:\n  - logo\n  - favicon` and omit `name` and `slogan` in the theme's `.info.yml`.

### Explanation
The `features` key controls which standard theme settings (logo, name, slogan, favicon) are exposed. Removing slogan from the list hides it without affecting other themes."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You need to add BEM modifiers like `menu__item--depth-2` to primary navigation links from your theme. Where should you implement the change?

### Options
- In `hook_preprocess_menu()`, adjust each item's `attributes` to add the depth-based class.
- Copy `menu.html.twig` into the theme and hardcode new markup.
- Edit the menu in the database to include the class.
- Use JavaScript to append classes after render.

### Correct Answers
- [0] In `hook_preprocess_menu()`, adjust each item's `attributes` to add the depth-based class.

### Explanation
Menu preprocess hooks let the theme modify render array attributes before Twig renders the menu, keeping markup clean and ensuring classes stay in sync with depth."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Your theme's hero library should preload its critical CSS. How do you declare this in `THEME.libraries.yml`?

### Options
- Set `attributes:\n    rel: preload\n    as: style` on the CSS file entry.
- Add `preload: true` next to the CSS file path.
- Inline the CSS in Twig with a `<style>` tag.
- Add a `<link rel="preload">` tag manually in `html.html.twig`.

### Correct Answers
- [0] Set `attributes:\n    rel: preload\n    as: style` on the CSS file entry.

### Explanation
Library asset entries support an `attributes` map for each file, allowing you to mark stylesheets as preload while keeping Drupal's asset management intact."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Your theme bundle includes a preview image stored at `/themes/custom/skyline/screenshot.png`. How do you display it on the Appearance page?

### Options
- Reference it with `screenshot: screenshot.png` in `skyline.info.yml`.
- Upload the image through theme settings.
- Place the image in `/sites/default/files` and name it after the theme.
- Override the Appearance controller.

### Correct Answers
- [0] Reference it with `screenshot: screenshot.png` in `skyline.info.yml`.

### Explanation
Themes declare their preview image in the `screenshot` key of `.info.yml`, relative to the theme directory."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You maintain a corporate base theme and now need to launch a campaign theme that reuses the base assets but tweaks colors. How should you configure the campaign theme?

### Options
- Declare `base theme: corporate_base` in the campaign theme's `.info.yml` and override only the necessary libraries and templates.
- Copy the entire base theme into a new folder and edit the files.
- Use Olivero as the base and import corporate assets manually.
- Create a module to swap styles after render.

### Correct Answers
- [0] Declare `base theme: corporate_base` in the campaign theme's `.info.yml` and override only the necessary libraries and templates.

### Explanation
Subthemes inherit templates, libraries, and regions from their base theme, minimizing duplication. Copying files breaks the update chain, and modules are not needed for theming."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Your theme needs to serve flipped CSS for RTL languages. How do you declare the alternate file in a Drupal library?

### Options
- Provide an `rtl:` entry next to the CSS file in `THEME.libraries.yml`.
- Duplicate the library and load it when `$language->isRtl()`.
- Hardcode `[dir="rtl"]` selectors in CSS.
- Use JavaScript to swap stylesheets.

### Correct Answers
- [0] Provide an `rtl:` entry next to the CSS file in `THEME.libraries.yml`.

### Explanation
Drupal libraries support RTL variants with the `rtl:` key, allowing automatic swapping when rendering RTL interfaces. Other approaches duplicate logic or rely on fragile scripting."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You want to add a `layout__region--empty` class whenever a region has no blocks so CSS can collapse it gracefully. What is the best approach?

### Options
- Implement `hook_preprocess_region()` and append the modifier when `empty($variables['content'])`.
- Set a conditional in `page.html.twig` and echo the class by hand.
- Update each block template to print whether the region is empty.
- Use JavaScript after render to check for child nodes.

### Correct Answers
- [0] Implement `hook_preprocess_region()` and append the modifier when `empty($variables['content'])`.

### Explanation
Region preprocess hooks allow themes to adjust region attributes centrally based on the render array. Twig conditionals or JavaScript scatter the logic and duplicate work."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You are building a foundation theme that other teams will subtheme but should not appear as a selectable option in the Appearance UI. How do you hide it?

### Options
- Add `hidden: true` to the foundation theme's `.info.yml`.
- Remove the screenshot from the theme folder.
- Set `base theme: stable9`.
- Disable the Appearance module.

### Correct Answers
- [0] Add `hidden: true` to the foundation theme's `.info.yml`.

### Explanation
The `hidden` flag keeps base themes out of the theme listing while still allowing subthemes to inherit from them."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Your layout should add a `theme--has-sidebar` class to the `<body>` tag whenever the sidebar region contains blocks. Where do you add this logic?

### Options
- Implement `hook_preprocess_html()` and check `$variables['page']['sidebar_first']`.
- Modify `page.html.twig` to print the class manually.
- Update every block template to append the class.
- Add JavaScript that checks the DOM on load.

### Correct Answers
- [0] Implement `hook_preprocess_html()` and check `$variables['page']['sidebar_first']`.

### Explanation
`hook_preprocess_html()` runs before `html.html.twig`, giving the theme a central place to add body classes based on region content. Editing each template or using JavaScript is redundant."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """A theme library adds interactive tabs written as an ES module that relies on `Drupal` and `once()`. How do you guarantee those globals exist when your script runs?

### Options
- Declare `dependencies:\n  - core/drupal\n  - core/once` in the library definition.
- Load the scripts manually with `<script>` tags before your module.
- Import them from a CDN at runtime.
- Wrap your code in `window.addEventListener('load')`.

### Correct Answers
- [0] Declare `dependencies:\n  - core/drupal\n  - core/once` in the library definition.

### Explanation
Listing dependencies ensures Drupal loads required libraries before your asset, maintaining order and avoiding race conditions. Manual script tags or load events do not guarantee availability."""
    }
]

themingQuestions.extend([
    {
        'domain': DOMAINS['THEMING'],
        'content': """A typography toggle is stored as a theme setting named `font_stack`. How should you read the value in PHP so you can pass it to Twig?

### Options
- Call `theme_get_setting('font_stack', 'your_theme')` inside a preprocess function.
- Read the value directly from the configuration table with SQL.
- Store the value in `drupalSettings` manually after each save.
- Expect Twig to read the setting automatically without PHP.

### Correct Answers
- [0] Call `theme_get_setting('font_stack', 'your_theme')` inside a preprocess function.

### Explanation
`theme_get_setting()` fetches theme settings with runtime overrides. Preprocess functions can then pass the value to Twig. Querying the database or relying on Twig alone is brittle."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You want every image rendered by your theme to lazy-load by default. Where should you add the `loading="lazy"` attribute?

### Options
- Implement `hook_preprocess_image()` in `THEME.theme` and set `#attributes['loading'] = 'lazy'` when appropriate.
- Edit every image field template and hardcode the attribute.
- Modify core's ImageFormatter plugin.
- Add JavaScript that sets the attribute on load.

### Correct Answers
- [0] Implement `hook_preprocess_image()` in `THEME.theme` and set `#attributes['loading'] = 'lazy'` when appropriate.

### Explanation
Image preprocess hooks give the theme a central place to adjust attributes on all images. Editing every template or relying on JavaScript duplicates effort."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Marketing needs to inject a verification meta tag into the `<head>` section from the theme layer. What is the recommended approach?

### Options
- In `hook_preprocess_html()`, add an entry to `$variables['#attached']['html_head']` with the meta tag definition.
- Echo the `<meta>` tag directly in `html.html.twig`.
- Place the tag in `page.html.twig`.
- Add the tag via JavaScript on `DOMContentLoaded`.

### Correct Answers
- [0] In `hook_preprocess_html()`, add an entry to `$variables['#attached']['html_head']` with the meta tag definition.

### Explanation
`#attached['html_head']` is the canonical way to inject meta tags from PHP, ensuring they are cacheable and de-duplicated. Printing them in Twig or JavaScript is fragile."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """Your Vite build outputs an ES module bundle named `dist/theme.js`. How do you declare it in the theme library so browsers treat it as a module?

### Options
- In `THEME.libraries.yml`, set `js: { dist/theme.js: { type: module } }` for the bundle.
- Import the file with `<script type="module">` inside Twig.
- Rename the file extension to `.mjs`.
- Load the script via `require()` in PHP.

### Correct Answers
- [0] In `THEME.libraries.yml`, set `js: { dist/theme.js: { type: module } }` for the bundle.

### Explanation
Library definitions support the `type: module` flag for ES modules, allowing Drupal's asset pipeline to load them correctly while preserving dependencies."""
    },
    {
        'domain': DOMAINS['THEMING'],
        'content': """You want to ship a default logo with the theme so sites have branding before theme settings are configured. Where do you declare the logo path?

### Options
- Set `logo: assets/logo.svg` in the theme's `.info.yml` file.
- Upload the logo through the Appearance UI during installation.
- Reference the logo directly in `page.html.twig`.
- Place the file in `/sites/default/files` and rely on the system logo setting.

### Correct Answers
- [0] Set `logo: assets/logo.svg` in the theme's `.info.yml` file.

### Explanation
Declaring the logo path in `.info.yml` provides a default asset that can be overridden later via theme settings. Manual uploads or Twig hardcoding break portability."""
    }
])

templateQuestions = [
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """Multiple templates render the same call-to-action button markup with minor variations. You want to centralize the markup in Twig. What is the best approach?

### Options
- Create a Twig macro in a partial and import it where needed.
- Copy the button markup into each template.
- Build the button with JavaScript after render.
- Register a custom Drupal block for each button.

### Correct Answers
- [0] Create a Twig macro in a partial and import it where needed.

### Explanation
Twig macros let you reuse markup with parameters, keeping templates DRY. Copying markup or using JavaScript increases maintenance and complexity."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A teaser view mode should add a `field--teaser` class to `field_image` so CSS can target the layout. Where should you add the class?

### Options
- Implement `hook_preprocess_field()` and check `$variables['element']['#view_mode']`.
- Append the class in `field--node--field-image.html.twig` using a conditional.
- Hardcode the class in `node--teaser.html.twig`.
- Add the class with JavaScript on load.

### Correct Answers
- [0] Implement `hook_preprocess_field()` and check `$variables['element']['#view_mode']`.

### Explanation
Field preprocess functions provide access to the render array, letting you adjust classes for specific view modes before Twig runs. Template conditionals or JavaScript duplicate logic."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You need a dedicated template for the user registration form to add onboarding copy. Which hook lets you register a template suggestion for `user_register_form`?

### Options
- Implement `hook_theme_suggestions_form_alter()` and check for `$form_id === 'user_register_form'`.
- Override `form.html.twig` globally.
- Use `hook_theme()` to declare a new theme hook.
- Add a Layout Builder override.

### Correct Answers
- [0] Implement `hook_theme_suggestions_form_alter()` and check for `$form_id === 'user_register_form'`.

### Explanation
Form suggestion alter hooks let you append template names based on form ID, enabling targeted overrides without touching other forms."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A preprocess function adds the current user's role to a render array so the template can show personalized hints. What else must you set to keep caching accurate?

### Options
- Add `$variables['elements']['#cache']['contexts'][] = 'user.roles'`.
- Disable caching entirely with `#cache['max-age'] = 0`.
- Store the role in `drupalSettings`.
- Nothing; Drupal handles it automatically.

### Correct Answers
- [0] Add `$variables['elements']['#cache']['contexts'][] = 'user.roles'`.

### Explanation
When preprocess logic depends on user roles, you must add the relevant cache context so Drupal varies the cached markup appropriately. Simply disabling caching wastes performance."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You want to turn a taxonomy term name into a safe CSS modifier inside Twig. How should you do it?

### Options
- Use `{{ term.name|clean_class }}` when printing the class.
- Concatenate the raw name directly into the class attribute.
- URL-encode the term name first.
- Build the class in JavaScript after render.

### Correct Answers
- [0] Use `{{ term.name|clean_class }}` when printing the class.

### Explanation
The `clean_class` filter converts arbitrary text into safe CSS class names. Concatenating raw text can introduce spaces or invalid characters."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You have a testimonial partial that expects a `quote` and `author`. From `node.html.twig`, how do you pass only those values to the partial?

### Options
- Use `{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } %}`.
- Set global Twig variables and include the partial without context.
- Render the partial via `{{ drupal_render() }}`.
- Attach the partial as a library dependency.

### Correct Answers
- [0] Use `{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } %}`.

### Explanation
The Twig `include ... with` syntax passes a custom context to partials, keeping data explicit. Global variables or render functions add unnecessary coupling."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A banner paragraph includes optional background video assets that require a lazy-loading library only when the field is filled. Where should you attach the library?

### Options
- In `hook_preprocess_paragraph()`, check the field and append the library to `$variables['elements']['#attached']['library'][]`.
- Attach the library unconditionally in `paragraph.html.twig`.
- Add the script tag to the video field formatter.
- Load the library from JavaScript after detecting the video.

### Correct Answers
- [0] In `hook_preprocess_paragraph()`, check the field and append the library to `$variables['elements']['#attached']['library'][]`.

### Explanation
Preprocess hooks can conditionally attach libraries based on field values before rendering, ensuring assets load only when needed."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You register a custom theme hook named `marketing_card` in `hook_theme()`. Which preprocess function name will Drupal look for?

### Options
- `template_preprocess_marketing_card()`
- `THEME_preprocess_marketing_card()`
- `hook_preprocess_marketing_card()`
- `marketing_card_preprocess()`

### Correct Answers
- [0] `template_preprocess_marketing_card()`

### Explanation
Custom theme hooks use the global `template_preprocess_HOOK()` naming. Theme-specific preprocessors (`THEME_preprocess_HOOK`) run in addition but require the generic function as the base."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You need to embed a user-supplied value inside a `data-label` attribute. How should you escape it in Twig?

### Options
- `data-label="{{ value|escape('html_attr') }}"`
- `data-label="{{ value|raw }}"`
- `data-label="{{ value|escape('url') }}"`
- `data-label="{{ value }}"`

### Correct Answers
- [0] `data-label="{{ value|escape('html_attr') }}"`

### Explanation
The `escape('html_attr')` context encodes characters appropriately for HTML attributes. Printing raw or using the wrong context risks broken markup or XSS."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """In `node.html.twig`, you want to print all fields except `field_tags`. What is the most concise Twig approach?

### Options
- `{{ content|without('field_tags') }}`
- Loop through `content` and skip the key manually.
- Remove the field in preprocess with `unset`.
- Use CSS to hide the field.

### Correct Answers
- [0] `{{ content|without('field_tags') }}`

### Explanation
The `without` filter returns the render array minus specified keys, keeping templates readable. Preprocess unsets work but move presentation logic to PHP, and CSS leaves markup behind."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A template adds an ARIA attribute to a region wrapper based on context. What is the proper Twig syntax using attribute objects?

### Options
- `{{ attributes.setAttribute('aria-label', label) }}`
- `{{ attributes['aria-label'] = label }}`
- `{{ attributes += ' aria-label="' ~ label ~ '"' }}`
- `{{ attributes.addClass('aria-label-' ~ label) }}`

### Correct Answers
- [0] `{{ attributes.setAttribute('aria-label', label) }}`

### Explanation
Drupal passes attribute objects with helper methods like `setAttribute()` and `addClass()`. Direct mutation or string concatenation bypasses escaping safeguards."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You need to add a CSS class to a specific Views field output without altering the view. Which preprocess hook should you use?

### Options
- `hook_preprocess_views_view_field()`
- `hook_preprocess_views_view()`
- `hook_preprocess_node()`
- `hook_theme_suggestions_views_view()`

### Correct Answers
- [0] `hook_preprocess_views_view_field()`

### Explanation
`hook_preprocess_views_view_field()` runs for each field in a view row, letting you adjust options before Twig renders `views-view-field--VIEW--FIELD.html.twig`."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A preprocess function wants to reuse the `marketing_card` theme hook inside another template. How can it render the card in PHP?

### Options
- Return `['#theme' => 'marketing_card', '#title' => $title, '#link' => $url]` from the preprocess function.
- Call `render('marketing_card')` directly.
- Include the Twig file manually with `include()`.
- Print HTML strings inside preprocess.

### Correct Answers
- [0] Return `['#theme' => 'marketing_card', '#title' => $title, '#link' => $url]` from the preprocess function.

### Explanation
Setting `#theme` on a render array lets Drupal invoke the theme hook and template in PHP contexts. Manual includes or string concatenation bypass Twig and caching."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """Some landing pages have an optional hero partial. If the partial is missing, the template should fail silently. How do you include it?

### Options
- `{% include '@components/hero.twig' ignore missing %}`
- Wrap the include in a try/catch block.
- `{{ include('@components/hero.twig') ?? '' }}`
- Add a PHP check in preprocess.

### Correct Answers
- [0] `{% include '@components/hero.twig' ignore missing %}`

### Explanation
The `ignore missing` flag tells Twig to continue if the template cannot be found. Preprocess or PHP checks are unnecessary."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You need to output `field_summary` inside a paragraph template. What is the correct Twig syntax to keep cache metadata intact?

### Options
- `{{ content.field_summary }}`
- `{{ content.field_summary|render }}`
- `{{ content.field_summary['#markup'] }}`
- `{{ content.field_summary|raw }}`

### Correct Answers
- [0] `{{ content.field_summary }}`

### Explanation
Printing the render array lets Drupal manage cache metadata and formatters automatically. Calling `|render` or accessing internals bypasses the render pipeline and can break caching."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A component template must pull in its own CSS/JS bundle. Where should you attach the library so the asset only loads when the template renders?

### Options
- Call `{{ attach_library('theme/component.card') }}` inside the Twig template.
- Add the library to `libraries:` in the theme's `.info.yml`.
- Attach the library globally in `hook_page_attachments()`.
- Inline the assets inside the template.

### Correct Answers
- [0] Call `{{ attach_library('theme/component.card') }}` inside the Twig template.

### Explanation
`attach_library()` in Twig ensures assets load only when the template renders. Global attachments load everywhere, and inline assets break caching."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """How do you translate a literal string in Twig according to Drupal conventions?

### Options
- `{{ 'Read more'|t }}`
- `{{ t('Read more') }}`
- `{{ 'Read more'|translate }}`
- `{{ Drupal.t('Read more') }}`

### Correct Answers
- [0] `{{ 'Read more'|t }}`

### Explanation
Drupal exposes the `|t` filter for translating Twig strings. Calling PHP functions or custom filters inside Twig is not standard."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You need to show a node's updated date in Twig using the site's default format. Which Twig helper should you use?

### Options
- `{{ node.getChangedTime|format_date }}`
- `{{ date(node.changed) }}`
- `{{ node.changed|t }}`
- `{{ node.changed|escape('html') }}`

### Correct Answers
- [0] `{{ node.getChangedTime|format_date }}`

### Explanation
The `format_date` filter renders timestamps using Drupal's date formatter service. PHP's `date()` ignores site settings."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A boolean field determines whether a link field should open in a new tab. Where can you add `target="_blank"` before Twig renders the link?

### Options
- Implement `hook_preprocess_link()` and adjust `$variables['options']['attributes']`.
- Modify the HTML in Twig with string replacement.
- Add JavaScript to set the attribute after render.
- Configure the link formatter in the UI.

### Correct Answers
- [0] Implement `hook_preprocess_link()` and adjust `$variables['options']['attributes']`.

### Explanation
The link preprocess hook lets you modify link attributes dynamically based on context before markup is generated."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You inject a marketing banner render array into the node content and need it to appear before the body field without editing templates. What render array property should you set?

### Options
- `#weight = -10`.
- `#priority = 'high'`.
- `#order = 'first'`.
- `#sort = -1`.

### Correct Answers
- [0] `#weight = -10`.

### Explanation
Render arrays use integer weights; lower values render earlier. Other properties are ignored."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A render array uses the default `container` theme wrapper, adding extra <div> markup you don't want. How can you remove the wrapper before Twig renders it?

### Options
- In preprocess, set `$variables['element']['#theme_wrappers'] = []`.
- Strip the wrapper in Twig with the `|raw` filter.
- Use CSS to hide the wrapper.
- Override `container.html.twig`.

### Correct Answers
- [0] In preprocess, set `$variables['element']['#theme_wrappers'] = []`.

### Explanation
Removing `#theme_wrappers` from the render array prevents Drupal from wrapping the output. CSS or Twig hacks leave unnecessary markup."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You want all tables rendered by Drupal to include the class `table--responsive`. Which preprocess hook should you use?

### Options
- `hook_preprocess_table()`
- `hook_preprocess_html()`
- `hook_preprocess_node()`
- `hook_preprocess_field()`

### Correct Answers
- [0] `hook_preprocess_table()`

### Explanation
The table preprocess hook lets you adjust table attributes globally before `table.html.twig` renders."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You need to remove whitespace around an inline SVG snippet in Twig while keeping the markup readable. What is the modern Twig syntax?

### Options
- Use `{% apply spaceless %}...{% endapply %}`.
- Wrap the markup in `{% spaceless %}...{% endspaceless %}`.
- Call `|trim` on the HTML string after rendering.
- Remove whitespace manually from the template.

### Correct Answers
- [0] Use `{% apply spaceless %}...{% endapply %}`.

### Explanation
Twig 3 replaces the legacy `spaceless` tag with the `apply spaceless` filter, trimming whitespace in a block while leaving source formatting intact."""
    }
]

templateQuestions.extend([
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You need a shortened `display_title` variable inside `node.html.twig`. Where do you define it so Twig can access it?

### Options
- Set the value in `hook_preprocess_node()` and add it to `$variables['display_title']`.
- Create a global variable in `settings.php`.
- Hardcode the value inside Twig with `set` on every template.
- Store it in a theme setting.

### Correct Answers
- [0] Set the value in `hook_preprocess_node()` and add it to `$variables['display_title']`.

### Explanation
Preprocess functions populate template variables in PHP before rendering. Twig-only assignments would duplicate logic, and global settings are inappropriate."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """A Views row template needs to output the row number starting at 1. Which Twig construct should you use inside the `for` loop?

### Options
- Reference `loop.index` for a 1-based counter.
- Maintain a manual counter with `{% set i = i + 1 %}`.
- Use `loop.index0` and add one in Twig.
- Query `$row->_rowNumber` from PHP.

### Correct Answers
- [0] Reference `loop.index` for a 1-based counter.

### Explanation
Twig provides the `loop` variable when iterating; `loop.index` delivers the current iteration starting at 1, avoiding manual counters."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You are building a custom wrapper around a render array fragment and need a fresh attribute object. What helper should you use in Twig?

### Options
- Call `create_attribute()` to build a new Attribute object.
- Instantiate `new Attribute()` directly in Twig.
- Concatenate strings with `|raw`.
- Use `attributes` from another element.

### Correct Answers
- [0] Call `create_attribute()` to build a new Attribute object.

### Explanation
`create_attribute()` generates a fresh attribute object that supports methods like `addClass()`, maintaining Drupal's attribute handling conventions."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """Accessibility requires each block wrapper to reference its title via `aria-labelledby`. How can you add the attribute globally?

### Options
- Implement `hook_preprocess_block()` and set `$variables['attributes']['aria-labelledby']` to the block heading ID.
- Modify every block template manually.
- Add the attribute with JavaScript after render.
- Store the ID in a theme setting.

### Correct Answers
- [0] Implement `hook_preprocess_block()` and set `$variables['attributes']['aria-labelledby']` to the block heading ID.

### Explanation
Block preprocess hooks allow you to adjust wrapper attributes before Twig renders the block, keeping accessibility logic centralized."""
    },
    {
        'domain': DOMAINS['TEMPLATES'],
        'content': """You built a reusable card component that should be rendered via a Drupal theme hook. What is the first step?

### Options
- Declare the hook in `hook_theme()` and specify the template and variables.
- Place the Twig file in `templates/` and expect Drupal to discover it automatically.
- Create a module to register the template.
- Call `render()` on the Twig file directly.

### Correct Answers
- [0] Declare the hook in `hook_theme()` and specify the template and variables.

### Explanation
`hook_theme()` registers new theme hooks, mapping them to Twig templates and default variables so they can be invoked from PHP or render arrays."""
    }
])

layoutQuestions = [
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """After enabling Layout Builder on the Article content type, fields still render from “Manage display,” causing duplicates when editors place the same field block. How do you prevent the double output?

### Options
- Hide the fields on the “Manage display” tab so only Layout Builder controls their placement.
- Disable Layout Builder for the view mode.
- Delete the fields from the content type.
- Override `node.html.twig` to remove the default field loop.

### Correct Answers
- [0] Hide the fields on the “Manage display” tab so only Layout Builder controls their placement.

### Explanation
When Layout Builder is active, you typically hide fields on the standard display to avoid duplicate output; editors then place the field blocks manually."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """Editors want to reuse the existing body field formatter inside Layout Builder so that text styling stays consistent. How should they add the field?

### Options
- Add the “Body” block from the Content fields section, which uses the same field formatter.
- Create a custom block and paste the body text manually.
- Build a view and embed it in the layout.
- Override the template to render the field.

### Correct Answers
- [0] Add the “Body” block from the Content fields section, which uses the same field formatter.

### Explanation
Layout Builder exposes field blocks that reuse the field's formatter settings, keeping output consistent without manual duplication."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """You want full view mode to use Layout Builder, but teasers should continue using traditional Manage Display settings. What configuration supports this?

### Options
- Enable Layout Builder only on the full view mode and leave teaser managed through Manage Display.
- Enable Layout Builder globally and disable the teaser view mode.
- Use Layout Builder on both view modes and manually recreate the teaser layout.
- Switch to the Field Layout module.

### Correct Answers
- [0] Enable Layout Builder only on the full view mode and leave teaser managed through Manage Display.

### Explanation
Layout Builder can be enabled per view mode, allowing full layouts to be customized while other modes continue to use the standard display UI."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """You replaced the two-column layout plugin with a design that needs custom markup. Which Twig template should you override?

### Options
- `layout--two-column.html.twig`
- `block--two-column.html.twig`
- `page--layout.html.twig`
- `section--two-column.html.twig`

### Correct Answers
- [0] `layout--two-column.html.twig`

### Explanation
Layout Builder renders layout plugins through `layout--PLUGIN_ID.html.twig`. Overriding that template lets you adjust markup for the plugin."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """You created a custom layout plugin class in `src/Plugin/Layout`. Drupal is not listing it in the UI. What did you likely forget?

### Options
- Add the `@Layout` annotation with `id`, `label`, and `template` metadata above the plugin class.
- Clear Drupal's file cache in `settings.php`.
- Register the plugin in `hook_layout_builder_info()`.
- Copy the plugin into the Layout Builder module.

### Correct Answers
- [0] Add the `@Layout` annotation with `id`, `label`, and `template` metadata above the plugin class.

### Explanation
Layout plugins rely on the `@Layout` annotation so Drupal can discover them. Missing or incorrect annotations keep the plugin hidden."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """After adjusting the default layout for the “Product” content type in development, you deploy configuration. Editors have already customized some product nodes. What happens?

### Options
- The default layout updates via configuration, while existing overrides remain intact.
- All overrides are reset to match the new default layout.
- The deployment fails because content overrides exist.
- Layout Builder disables overrides until you reapply them manually.

### Correct Answers
- [0] The default layout updates via configuration, while existing overrides remain intact.

### Explanation
Default layouts are configuration-managed. Entity-specific overrides are stored with the content entity and are unaffected by config deployment, so editors' custom layouts remain."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """When placing a field block in Layout Builder, editors see a “Formatter” dropdown. What does it control?

### Options
- The same formatter configuration used on the Manage Display screen for that field.
- A brand-new formatter unrelated to Manage Display.
- The CSS classes applied to the field wrapper.
- Which region the field appears in.

### Correct Answers
- [0] The same formatter configuration used on the Manage Display screen for that field.

### Explanation
Field blocks reuse the field formatters configured on Manage Display, keeping output consistent across Layout Builder and traditional displays."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """A custom layout plugin exposes a settings form, and you need to add an extra validation rule. Which hook lets you alter the component form?

### Options
- Implement `hook_layout_builder_component_form_alter()`.
- Use `hook_form_FORM_ID_alter()`.
- Override the Layout Builder form template.
- Add JavaScript validation only.

### Correct Answers
- [0] Implement `hook_layout_builder_component_form_alter()`.

### Explanation
`hook_layout_builder_component_form_alter()` lets modules and themes alter the configuration form for Layout Builder components, including custom validation."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """You build a custom block plugin that reads the parent node's taxonomy terms when placed via Layout Builder. What must the block implement?

### Options
- `ContextAwarePluginInterface` so it can receive the entity context from Layout Builder.
- `LayoutBuilderPluginInterface`.
- `SectionStorageInterface`.
- Nothing; Layout Builder injects context automatically.

### Correct Answers
- [0] `ContextAwarePluginInterface` so it can receive the entity context from Layout Builder.

### Explanation
Context-aware blocks declare required contexts (like the current node) and Layout Builder supplies them when rendering entity layouts."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """An editor experimented with a node's custom layout and wants to revert to the default. How can they do it from the UI?

### Options
- Use the “Revert to default layout” option in the Layout Builder sidebar.
- Delete and recreate the node.
- Run a Drush command to reset the layout.
- Disable Layout Builder temporarily.

### Correct Answers
- [0] Use the “Revert to default layout” option in the Layout Builder sidebar.

### Explanation
Layout Builder provides a UI action to discard overrides and restore the default layout for an entity."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """A marketing banner needs to appear on twenty landing pages and be editable in one place. What should editors place in Layout Builder?

### Options
- A reusable custom block (from the “Custom block” library).
- An inline block on each page.
- A node reference field.
- A view filtered by node ID.

### Correct Answers
- [0] A reusable custom block (from the “Custom block” library).

### Explanation
Reusable custom blocks can be placed on many layouts while sharing content. Inline blocks duplicate the content per page."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """Layout changes should follow content revisions so editors can roll back a page. Which setting must be enabled on the content type?

### Options
- “Create new revision” so Layout Builder stores overrides per revision.
- “Enable content moderation.”
- “Show row weights.”
- “Synchronize translations.”

### Correct Answers
- [0] “Create new revision” so Layout Builder stores overrides per revision.

### Explanation
Layout Builder stores overrides with the entity revision. Without revisions enabled, you cannot roll back layout changes."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """Editors should only view the front-end rendering; only site builders may modify layouts. Which permission controls access to the Layout Builder UI for a content type?

### Options
- “Configure layout” for that content type.
- “Administer blocks.”
- “Administer themes.”
- “Use contextual links.”

### Correct Answers
- [0] “Configure layout” for that content type.

### Explanation
Layout Builder adds bundle-specific permissions such as “Configure layout for Article,” which gate access to the editing UI."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """Editors need a dropdown on each section to choose between “boxed” and “full-width” variants. Which extension point exposes additional section options without writing duplicate layouts?

### Options
- Provide a custom Layout Builder Styles plugin that offers boxed/full-width choices.
- Build separate layout plugins for each variant.
- Modify the section template to inspect query parameters.
- Add JavaScript to toggle container classes.

### Correct Answers
- [0] Provide a custom Layout Builder Styles plugin that offers boxed/full-width choices.

### Explanation
Layout Builder Styles plugins let you register reusable options editors can apply per section, avoiding duplicate layout plugins or fragile scripting."""
    }
]

layoutQuestions.extend([
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """Editors create inline blocks in Layout Builder, but they disappear when exporting configuration. Why?

### Options
- Inline blocks are stored with the entity override and are content, not configuration; use reusable custom blocks for shared content.
- Drush `cex` requires `--inline-blocks` flag.
- Inline blocks must live in a module's `config/install` directory.
- Layout Builder does not support configuration export.

### Correct Answers
- [0] Inline blocks are stored with the entity override and are content, not configuration; use reusable custom blocks for shared content.

### Explanation
Inline blocks belong to the entity's layout override and are saved as content. To share across sites, create reusable custom blocks which are configuration-aware."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """You want taxonomy landing pages to use Layout Builder. Where do you enable it?

### Options
- Manage the display for the vocabulary under Structure → Taxonomy and enable Layout Builder on the view mode.
- Enable Layout Builder in `settings.php` for taxonomy entities.
- Add the taxonomy vocabulary to the Layout Builder permissions screen.
- Create a custom module to support taxa layouts.

### Correct Answers
- [0] Manage the display for the vocabulary under Structure → Taxonomy and enable Layout Builder on the view mode.

### Explanation
Layout Builder is enabled per entity view display. Taxonomy vocabularies expose the same Manage Display UI where you can activate Layout Builder for each view mode."""
    },
    {
        'domain': DOMAINS['LAYOUT'],
        'content': """Your default layout defines the section order and editors should only edit existing components, not add or remove sections. How can you lock the section skeleton?

### Options
- On the Layout tab of the default display, disable “Allow sections to be added and removed” so overrides keep the fixed skeleton.
- Revoke the “Configure layout” permission entirely.
- Convert the layout to HTML templates.
- Use CSS to hide the add section button.

### Correct Answers
- [0] On the Layout tab of the default display, disable “Allow sections to be added and removed” so overrides keep the fixed skeleton.

### Explanation
Layout Builder defaults let you lock section management while still allowing component edits. This preserves the structure defined by site builders."""
    }
])

performanceQuestions = [
    {
        'domain': DOMAINS['PERFORMANCE'],
        'content': """Your personalized dashboard renders slowly because the entire page waits on an API call before responding. Which core module streams cacheable markup immediately while delaying personalized sections?

### Options
- Enable the BigPipe module so cacheable regions render first and personalize later.
- Disable caching entirely for the page.
- Use Layout Builder to rearrange blocks.
- Replace the API call with a cron job.

### Correct Answers
- [0] Enable the BigPipe module so cacheable regions render first and personalize later.

### Explanation
BigPipe streams cacheable markup as soon as it's ready and fills dynamic placeholders afterward, reducing perceived latency without removing personalization."""
    },
    {
        'domain': DOMAINS['PERFORMANCE'],
        'content': """A marketing landing page rarely changes and should be cached by the CDN for an hour. How can you signal this from Drupal?

### Options
- Set `#cache['max-age'] = 3600` on the top-level render array for the page.
- Disable Dynamic Page Cache so the CDN handles caching.
- Add `Cache-Control: no-cache` headers manually.
- Clear Drupal caches every hour.

### Correct Answers
- [0] Set `#cache['max-age'] = 3600` on the top-level render array for the page.

### Explanation
Max-age declares how long downstream caches may reuse the response. Setting it on the render array propagates the header, enabling CDN caching without manual header hacks."""
    },
    {
        'domain': DOMAINS['PERFORMANCE'],
        'content': """Hero images load slowly on mobile because the same 2000px JPEG serves all devices. What is the recommended Drupal-centric fix?

### Options
- Create a responsive image style that maps breakpoints to appropriately sized image derivatives.
- Enable CSS aggregation.
- Inline the base64-encoded image in the template.
- Serve a single WebP file regardless of device.

### Correct Answers
- [0] Create a responsive image style that maps breakpoints to appropriately sized image derivatives.

### Explanation
Responsive image styles generate size-specific derivatives tied to breakpoints, letting browsers pick the smallest suitable asset. Aggregation or inlining does not address oversized images."""
    },
    {
        'domain': DOMAINS['PERFORMANCE'],
        'content': """Your theme bundles third-party scripts totaling 500 KB, even on pages that don't use them. How can you reduce unnecessary downloads?

### Options
- Split the functionality into separate libraries and attach them only to templates that need them.
- Increase PHP memory limits.
- Disable JavaScript aggregation so files stay separate.
- Add the scripts via CDN to leverage HTTP/2 multiplexing.

### Correct Answers
- [0] Split the functionality into separate libraries and attach them only to templates that need them.

### Explanation
Creating smaller, context-specific libraries ensures only required scripts load per page, reducing payload. Memory limits and CDN hosting do not eliminate unnecessary transfers."""
    },
    {
        'domain': DOMAINS['PERFORMANCE'],
        'content': """Pages are requesting dozens of individual CSS and JS files from core and contrib modules. What core feature should you enable first to cut HTTP requests?

### Options
- Turn on CSS and JavaScript aggregation under Configuration → Development → Performance.
- Disable every library except the theme's global library.
- Inline all assets inside Twig templates.
- Serve assets from `/misc` over HTTP/2 without aggregation.

### Correct Answers
- [0] Turn on CSS and JavaScript aggregation under Configuration → Development → Performance.

### Explanation
Core aggregation combines and minifies Drupal-managed assets, reducing requests and improving cacheability without manual rewrites."""
    }
]


securityQuestions = [
    {
        'domain': DOMAINS['SECURITY'],
        'content': """Customer invoices uploaded through the admin UI should never be publicly accessible. How do you enforce this in Drupal?

### Options
- Store the files using the private file system and deliver them through access-controlled routes.
- Obfuscate the public file URL with random strings.
- Place the files in a hidden directory under the theme.
- Zip the files before upload.

### Correct Answers
- [0] Store the files using the private file system and deliver them through access-controlled routes.

### Explanation
Private file schemes enforce Drupal access checks before serving files, preventing direct downloads. Public files remain web-accessible even with obfuscated paths."""
    },
    {
        'domain': DOMAINS['SECURITY'],
        'content': """Your theme outputs user-supplied quotes using a custom text format. To prevent editors from adding risky HTML, what should you configure?

### Options
- Define an Input Filter (text format) that allows only safe tags and assign it to the field.
- Strip all HTML in Twig with `|striptags`.
- Sanitize quotes manually in preprocess with `Html::escape()`.
- Trust editors and leave the format as Full HTML.

### Correct Answers
- [0] Define an Input Filter (text format) that allows only safe tags and assign it to the field.

### Explanation
Text formats enforce trusted markup at input, preventing unsafe HTML from being stored or rendered. Twig filters and manual escaping are error-prone."""
    },
    {
        'domain': DOMAINS['SECURITY'],
        'content': """A custom settings form saves API credentials. How should you store the secret key securely?

### Options
- Place the credential in `settings.php` (or the environment) and read it from configuration overrides.
- Save it directly in configuration so it\'s exported with code.
- Store it as a theme setting.
- Hardcode it in JavaScript.

### Correct Answers
- [0] Place the credential in `settings.php` (or the environment) and read it from configuration overrides.

### Explanation
Secrets should live outside exported configuration, typically in `settings.php` or environment variables. Storing them in config or themes exposes them in version control."""
    },
    {
        'domain': DOMAINS['SECURITY'],
        'content': """Users reported that staging URLs are indexed by search engines. Which Drupal security setting prevents host header spoofing and unintended access?

### Options
- Configure trusted host patterns in `settings.php`.
- Disable CSS aggregation.
- Enable maintenance mode permanently.
- Use Layout Builder restrictions.

### Correct Answers
- [0] Configure trusted host patterns in `settings.php`.

### Explanation
Trusted host patterns restrict which hostnames Drupal responds to, blocking spoofed requests and accidental indexing of unintended domains."""
    },
    {
        'domain': DOMAINS['SECURITY'],
        'content': """A custom REST endpoint accepts JSON payloads. How do you protect it against cross-site request forgery?

### Options
- Require the standard Drupal CSRF token by validating `X-CSRF-Token` on POST requests.
- Trust the Origin header from the browser.
- Disable caching on the endpoint.
- Use a random query string parameter.

### Correct Answers
- [0] Require the standard Drupal CSRF token by validating `X-CSRF-Token` on POST requests.

### Explanation
Drupal's REST endpoints should validate CSRF tokens for unsafe methods. Relying on origin headers or random parameters is insufficient."""
    },
    {
        'domain': DOMAINS['SECURITY'],
        'content': """Security reviewers require that authenticated session cookies are HTTPS-only and inaccessible to JavaScript. Where do you enforce these flags in Drupal?

### Options
- Set `$settings['cookie_secure'] = TRUE;` and `$settings['cookie_httponly'] = TRUE;` in `settings.php`.
- Override the cookie headers in Twig templates.
- Configure the theme's `.info.yml` file.
- Enable maintenance mode.

### Correct Answers
- [0] Set `$settings['cookie_secure'] = TRUE;` and `$settings['cookie_httponly'] = TRUE;` in `settings.php`.

### Explanation
Secure and HTTP-only cookie flags are enforced via Drupal's settings. Modifying templates or maintenance mode does not adjust cookie behavior."""
    }
]



def main():
    raw_markdown = QUESTIONS_PATH.read_text(encoding='utf-8')
    existing_questions = parse_existing_questions(raw_markdown)

    new_questions_source = (
        fundamentalQuestions
        + themingQuestions
        + templateQuestions
        + layoutQuestions
        + performanceQuestions
        + securityQuestions
    )

    additional_questions = []
    base_index = len(existing_questions)
    for offset, question in enumerate(new_questions_source):
        additional_questions.append({
            'original_order': base_index + offset,
            'domain': question['domain'],
            'content': question['content'].strip()
        })

    combined = existing_questions + additional_questions
    combined.sort(key=lambda item: (domain_index(item['domain']), item['original_order']))

    QUESTIONS_PATH.write_text(build_markdown(combined), encoding='utf-8')

    counts = {domain: 0 for domain in DOMAIN_ORDER}
    for question in combined:
        counts.setdefault(question['domain'], 0)
        counts[question['domain']] += 1

    print('Updated question counts by domain:')
    for domain in DOMAIN_ORDER:
        print(f"- {domain}: {counts.get(domain, 0)}")
    print(f"Total questions: {len(combined)}")


if __name__ == '__main__':
    main()

