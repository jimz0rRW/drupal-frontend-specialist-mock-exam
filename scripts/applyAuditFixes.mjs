/**
 * Applies factual audit fixes to the ORIGINAL 300-question bank IDs and writes
 * scripts/question-data/questions_patched.json. Prefer rebuildQuestionBank.mjs
 * for regenerating markdown from question-data/.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { parseMarkdownQuestions } from '../src/utils/parseMarkdownQuestions.js'

const path = new URL('../src/questions/generated_questions.md', import.meta.url)
const qs = parseMarkdownQuestions(readFileSync(path, 'utf8'))
const byId = Object.fromEntries(qs.map((q) => [q.id, q]))

function replace(id, patch) {
  const q = byId[id]
  if (!q) throw new Error(`Missing Q${id}`)
  Object.assign(q, patch)
}

// --- Fundamentals ---
replace(6, {
  question:
    'You are adopting Single Directory Components in a custom theme named `skyline`. How do you make components discoverable so Twig and libraries load automatically?',
  options: [
    'Place each component under `skyline/components/` with matching `*.component.yml`, `*.twig`, and optional CSS/JS sharing the same basename.',
    'Declare a `component-libraries` section in `skyline.info.yml` that maps a library name to the component folder.',
    'Configure the directory in the Appearance UI under theme settings.',
    'Register the path inside `skyline.theme` using `hook_theme()`.'
  ],
  correctAnswers: [0],
  explanation:
    'Core SDC auto-discovers components under the theme `components/` directory. The contrib Components module’s `component-libraries` key is not how core SDC registration works.'
})

replace(27, {
  question:
    'While auditing a theme, you spot large non-critical styles blocking first paint. Performance requires critical CSS without a render-blocking stylesheet request. What should you do?',
  options: [
    'Inline a small critical CSS budget in `html.html.twig` (or an equivalent early render) and load the remaining theme CSS through aggregated libraries.',
    'Move the critical CSS into a theme library and mark it as `preprocess: false` so it stays a separate stylesheet.',
    'Keep large inline CSS because Drupal aggregates it automatically.',
    'Convert the CSS to inline JavaScript that injects styles at runtime.'
  ],
  correctAnswers: [0],
  explanation:
    'Critical CSS is intentionally inlined to avoid an extra render-blocking request. A normal library CSS file (even with `preprocess: false`) still blocks paint.'
})

replace(29, {
  question:
    'A full-viewport hero overflows on iOS Safari because classic `100vh` includes space behind browser chrome. Which CSS approach fixes this safely?',
  options: [
    'Use a fallback stack such as `height: 100vh; height: 100dvh;` (or `100svh` for a stable hero) so modern viewport units account for dynamic chrome.',
    'Replace every `vh` usage with `100lvh` globally.',
    'Detect iOS user agents in PHP and add inline styles.',
    'Wrap the layout in a fixed-height container and set overflow hidden.'
  ],
  correctAnswers: [0],
  explanation:
    '`dvh`/`svh` reflect the dynamic/small viewport. `lvh` is the large viewport and often reproduces the same iOS overflow problem as raw `vh`.'
})

replace(43, {
  question:
    'CMS users upload hero background videos. You must avoid autoplay when users prefer reduced data usage. Which approach supports that goal?',
  options: [
    'Detect reduced-data preferences (for example `navigator.connection?.saveData` or `prefers-reduced-data` where available) and skip autoplay/preload for those users.',
    'Add only the `preload="none"` attribute and keep `autoplay` enabled.',
    'Set `muted` so autoplay is blocked for everyone.',
    'Add `loop` to keep the video short.'
  ],
  correctAnswers: [0],
  explanation:
    '`preload="none"` alone does not honor Save-Data preferences and does not disable autoplay. Prefer explicit preference detection and conditional playback.'
})

replace(57, {
  question:
    'An SVG icon set must inherit text color for easy theming. Which attribute configuration achieves this?',
  options: [
    'Ensure each SVG uses `fill="currentColor"` (or CSS `fill: currentColor`) so it follows the surrounding text color.',
    'Set `fill="inherit"` exclusively; `currentColor` is invalid in SVG.',
    'Export the icons with baked-in hex colors only.',
    'Avoid CSS and hardcode a brand color in every SVG path.'
  ],
  correctAnswers: [0],
  explanation:
    '`currentColor` is the standard way to theme SVG fills from text color. `fill="inherit"` can work in some cases but is not the preferred, widely taught pattern for icon systems.'
})

replace(68, {
  question:
    'You must ensure that a toggle switch built with `<button>` communicates its on/off state. Which attribute pairing provides robust semantics?',
  options: [
    'Use `role="switch"` and keep `aria-checked` in sync as `true` or `false` when the state changes.',
    'Use only `aria-pressed` because that is the required attribute for switches.',
    'Add `role="switch"` without any state attribute.',
    'Replace the button with a `<div>` and toggle classes.'
  ],
  correctAnswers: [0],
  explanation:
    'Switches expose state with `role="switch"` and `aria-checked`. `aria-pressed` is for toggle buttons, not switch widgets.'
})

// --- Theming ---
replace(81, {
  question:
    'You need to provide editors with a list of pre-defined background styles for Layout Builder sections. What is a sound approach?',
  options: [
    'Use a module such as Layout Builder Styles and define reusable styles as configuration (UI/config export), not a made-up theme YAML registry filename.',
    'Ask editors to type arbitrary class names into an unconstrained text field on every section.',
    'Hardcode classes in Twig based on section UUIDs.',
    'Override Layout Builder templates to invent radio buttons without storing config.'
  ],
  correctAnswers: [0],
  explanation:
    'Layout Builder Styles stores styles as config entities. There is no core discovery of `*.layout_builder.styles.yml` in the theme.'
})

replace(83, {
  question:
    'You want to expose a pattern library of Twig components stored in `components/`. Which approach enables core Single Directory Components?',
  options: [
    'Keep components under `THEME/components/` with `*.component.yml` + `*.twig` (and optional matching assets) so Drupal auto-discovers them.',
    'Add a `component-libraries` section to `THEME.info.yml` pointing to `components` (required for core SDC).',
    'Register the directory in `services.yml` as a Twig loader.',
    'Declare the path in `THEME.libraries.yml` as a CSS asset only.'
  ],
  correctAnswers: [0],
  explanation:
    'Core SDC discovers components under `components/`. `component-libraries` belongs to the contrib Components module, not core SDC registration.'
})

replace(94, {
  question:
    'While overriding `node--article.html.twig`, you want to reuse shared markup without copy-paste from core’s node template. What is the most practical Drupal approach?',
  options: [
    'Extract shared markup into includes, SDC components, or a custom base template that defines real `{% block %}` regions you control.',
    'Use `{% extends \'node.html.twig\' %}` and override blocks, because core `node.html.twig` is designed as a block-based parent.',
    'Duplicate the full markup into every suggestion file permanently.',
    'Use PHP `include` from the Twig file.'
  ],
  correctAnswers: [0],
  explanation:
    'Core node templates are not reliable Twig block parents. Shared partials/SDC (or your own base template with blocks) is the maintainable pattern.'
})

replace(101, {
  question:
    'The theme includes a custom breakpoint group for responsive images, but editors need a fallback when the theme is disabled. What is the best approach?',
  options: [
    'Define the breakpoint group in a supporting module’s `MODULE.breakpoints.yml` so it remains available independent of the theme.',
    'Define breakpoints only in the theme so they disappear with the theme.',
    'Hardcode image styles in Twig templates.',
    'Ask editors to recreate breakpoints manually on each site.'
  ],
  correctAnswers: [0],
  explanation:
    'Breakpoints come from `*.breakpoints.yml` plugins. Shipping them from a module keeps responsive image mappings usable if the theme changes.'
})

replace(105, {
  question:
    'Your subtheme wants to reuse Single Directory Components from a parent theme. How can you achieve this cleanly?',
  options: [
    'Include parent components with SDC syntax such as `{{ include(\'parent_theme:component_name\') }}` (parent components remain discoverable).',
    'Declare the same `component-libraries` entry in the subtheme pointing at the parent path.',
    'Copy all component directories into the subtheme for every release.',
    'Use `hook_theme_registry_alter()` to inject include paths manually.'
  ],
  correctAnswers: [0],
  explanation:
    'SDC components are addressed as `theme_machine_name:component_name`. You do not redeclare contrib `component-libraries` namespaces for core SDC reuse.'
})

replace(106, {
  question:
    'While debugging a template override you want to confirm which theme suggestions Drupal is providing, using core tooling. What should you do?',
  options: [
    'Enable Twig debug (and rebuild caches) so Drupal prints theme-suggestion comments in the HTML source for the rendered element.',
    'Run `drush theme:debug node` to dump suggestions for the node hook.',
    'Run `drush pm:list --type=theme` to list suggestions.',
    'Run `drush config:status` to see template suggestions.'
  ],
  correctAnswers: [0],
  explanation:
    'There is no standard `drush theme:debug node` suggestion dump. Twig debug comments (or newer theme-dev tooling) are the reliable approach.'
})

replace(109, {
  question:
    'You must expose an additional variable such as a sanitized site slogan to Twig templates broadly. Which approach is appropriate?',
  options: [
    'Implement `hook_preprocess()` (generic) or a Twig extension to add variables available across templates; use `hook_preprocess_html()` only if the value is HTML-document-specific.',
    'Always use `hook_preprocess_html()` because it injects variables into every template automatically.',
    'Insert the value into `drupalSettings` and expect Twig to read it server-side.',
    'Modify Twig to read arbitrary global PHP variables.'
  ],
  correctAnswers: [0],
  explanation:
    '`hook_preprocess_html()` only affects `html.html.twig`. For cross-template variables, use generic preprocess or a Twig extension.'
})

replace(123, {
  question:
    'You want a custom HTML experience for fatal errors. What is accurate about theming HTTP 500 responses in Drupal?',
  options: [
    'Core does not reliably theme 500 responses via `page--500.html.twig` the way it does 403/404; use an exception subscriber and/or server-level static error page for true 500s.',
    'Override `page--500.html.twig` exactly like `page--404.html.twig` for all fatals.',
    'Use `page--status-500.html.twig` as a core suggestion.',
    'Use `page--exception.html.twig`, which core always invokes for fatals.'
  ],
  correctAnswers: [0],
  explanation:
    'Many 500 failures never reach normal page theming. Do not assume a status-code page suggestion works like 404.'
})

replace(127, {
  question:
    'Your theme stores reusable Twig partials and you want `@skyline/...` namespaces without relative paths. Using the contrib Components module approach, what do you need?',
  options: [
    'Configure Components namespaces (historically `component-libraries`, modernly `components.namespaces`) in `skyline.info.yml` pointing at the partials directory.',
    'Define a Twig namespace in `skyline.services.yml` under `twig.loader` from the theme.',
    'Add the path to `settings.php` under `$settings[\'twig_tweak\']`.',
    'Register the directory via `hook_theme()` only.'
  ],
  correctAnswers: [0],
  explanation:
    'Theme packages do not normally register Twig namespaces via `THEME.services.yml`. The Components module provides namespace configuration in the theme info file.'
})

replace(128, {
  question:
    'The design system splits Single Directory Components into `components/base` and `components/patterns`. How do you expose both to core SDC?',
  options: [
    'Keep both directories nested under `components/`; core SDC scans subdirectories automatically without `component-libraries` entries.',
    'Add multiple `component-libraries` entries in `.info.yml`, one per subdirectory (required for core SDC).',
    'List the directories under `libraries:` in `.info.yml`.',
    'Symlink the directories into `templates/`.'
  ],
  correctAnswers: [0],
  explanation:
    'Core SDC recursively discovers components under `components/`. Separate `component-libraries` maps are a contrib Components pattern, not a core SDC requirement.'
})

replace(129, {
  question:
    'Editors using CKEditor 5 want the back-office preview to match front-end typography. Where do you declare theme stylesheets so CKEditor 5 loads them?',
  options: [
    'Add the CSS files to the `ckeditor5-stylesheets` array in the theme’s `.info.yml`.',
    'Add them to the legacy `ckeditor_stylesheets` key used by CKEditor 4.',
    'Attach the stylesheet with `attach_library()` inside `node--form.html.twig` only.',
    'Load the stylesheet via JavaScript inside the editor iframe manually.'
  ],
  correctAnswers: [0],
  explanation:
    'CKEditor 5 uses the hyphenated `ckeditor5-stylesheets` info key. `ckeditor_stylesheets` is the older CKEditor 4 key.'
})

replace(150, {
  question:
    'You want every image rendered by your theme to lazy-load by default. Where should you add the `loading="lazy"` attribute?',
  options: [
    'Implement `hook_preprocess_image()` in `THEME.theme` and set `$variables[\'attributes\'][\'loading\'] = \'lazy\'` when appropriate.',
    'Implement `hook_preprocess_image()` and set `#attributes[\'loading\'] = \'lazy\'` on the render array key inside `$variables`.',
    'Modify core’s ImageFormatter plugin for every site.',
    'Add JavaScript that sets the attribute after load.'
  ],
  correctAnswers: [0],
  explanation:
    'Image preprocess receives `$variables[\'attributes\']`, not render-array `#attributes`. Prefer preprocess (or the formatter) over JS.'
})

// --- Templates ---
replace(152, {
  question:
    'Your Twig template must avoid blank markup when a field has no values. What is the idiomatic check?',
  options: [
    'Check the entity field (for example `{% if node.field_summary is not empty %}`) and then print `{{ content.field_summary }}`.',
    '`{% if content.field_summary is not empty %}` because empty field render arrays are always Twig-empty.',
    '`{% if content.field_summary %}` alone is always sufficient.',
    '`{% if content.field_summary|length > 0 %}` on the render array.'
  ],
  correctAnswers: [0],
  explanation:
    'Empty field render arrays still contain metadata, so `content.field_* is not empty` is unreliable. Prefer entity field emptiness checks.'
})

replace(156, {
  question:
    'The design team wants to display a component only when a field has values. How do you check this in Twig without rendering the field twice?',
  options: [
    '`{% if node.field_tags is not empty %}` (or `not node.field_tags.isEmpty`) then render `{{ content.field_tags }}` once.',
    '`{% if content.field_tags is not empty %}` on the render array.',
    '`{% if content.field_tags|render %}` every time you need a boolean check.',
    '`{% if content.field_tags %}` without inspecting the entity.'
  ],
  correctAnswers: [0],
  explanation:
    'Inspect the entity field for emptiness. Checking `content.* is not empty` is a common false positive because of render metadata.'
})

replace(161, {
  correctAnswers: [1],
  explanation:
    'Custom Twig filters are registered via a `twig.extension` service (typically from a module). `hook_theme_suggestions_alter()` does not register filters.'
})

replace(167, {
  correctAnswers: [1],
  explanation:
    'For a specific Twig suggestion, `{{ attach_library(...) }}` in that template scopes the library correctly. A broad views preprocess attachment is easier to over-apply.'
})

replace(173, {
  question:
    'You must print a label in Twig without running it through Drupal’s translation system. What should you output?',
  options: [
    "`{{ 'Label' }}` without `|t` / `|trans`.",
    "`{{ 'Label'|t }}`",
    "`{{ 'Label'|raw }}`",
    "`{{ 'Label'|trans }}`"
  ],
  correctAnswers: [0],
  options: [
    "`{{ 'Label' }}` without `|t` / `|trans`.",
    "`{{ 'Label'|t }}`",
    "`{{ 'Label'|raw }}`",
    "`{{ 'Label'|trans }}`"
  ],
  explanation:
    'Omitting `|t`/`|trans` prevents translation lookup. `|raw` is about escaping, not translation.'
})

replace(177, {
  question:
    'You must print a field in a custom place in the same Twig file without also printing it via `{{ content }}`. How do you suppress the duplicate?',
  options: [
    'Print the field explicitly and use `{{ content|without(\'field_name\') }}` so `content` does not output it again.',
    'Use `without` so the field remains available to preprocess after Twig runs.',
    'Print the field twice and hide one with CSS.',
    'Remove the field from the display mode even though editors still need it on that display.'
  ],
  correctAnswers: [0],
  explanation:
    '`without` affects Twig output of the render array. Preprocess has already run before the template executes.'
})

replace(190, {
  correctAnswers: [0],
  explanation:
    'Core may not generate a plugin+region suggestion by default, but `block--plugin-id--region.html.twig` is the conventional name to target when you add that suggestion via `hook_theme_suggestions_block_alter()`.'
})

replace(203, {
  question:
    'You have a testimonial partial that expects a `quote` and `author`. From `node.html.twig`, how do you pass only those values to the partial?',
  options: [
    "`{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } only %}`",
    "`{% include '@components/testimonial.twig' with { quote: node.field_quote, author: author_name } %}` without `only`",
    'Set global Twig variables and include the partial without context.',
    'Attach the partial as a library dependency.'
  ],
  correctAnswers: [0],
  explanation:
    'The `only` keyword prevents the included template from inheriting the full parent context.'
})

replace(205, {
  question:
    'You register a custom theme hook named `marketing_card` in `hook_theme()`. Which preprocess function name can a theme implement for that hook?',
  options: [
    '`THEME_preprocess_marketing_card()` in the theme’s `.theme` file.',
    'Only `template_preprocess_marketing_card()` is ever invoked; themes cannot preprocess custom hooks.',
    '`hook_preprocess_marketing_card()` as a literal function name in PHP.',
    '`marketing_card_preprocess()`.'
  ],
  correctAnswers: [0],
  explanation:
    'Drupal invokes `module/theme_preprocess_HOOK` implementations. Themes commonly implement `THEME_preprocess_marketing_card()`; a `template_preprocess_*` base is not required.'
})

replace(210, {
  question:
    'A preprocess function wants to reuse the `marketing_card` theme hook inside another template. How should it expose the card to Twig?',
  options: [
    'Assign a render array to a variable, e.g. `$variables[\'card\'] = [\'#theme\' => \'marketing_card\', \'#title\' => $title, \'#link\' => $url];` then print `{{ card }}` in Twig.',
    'Return that render array from the preprocess function.',
    'Call `render(\'marketing_card\')` directly as a string API.',
    'Include the Twig file manually with PHP `include()`.'
  ],
  correctAnswers: [0],
  explanation:
    'Preprocess hooks are void and mutate `$variables` by reference. They do not return render arrays.'
})

// --- Layout ---
replace(229, {
  question:
    'You must show different block presentations per breakpoint within Layout Builder. What is a realistic strategy in core?',
  options: [
    'Place variants (or duplicate blocks) and control visibility with CSS media queries / responsive utilities—core does not switch view modes by breakpoint automatically.',
    'Use Field Layout so each breakpoint automatically selects a different view mode.',
    'Write JavaScript to swap block markup as the only acceptable solution.',
    'Rely on inline styles typed by editors per breakpoint.'
  ],
  correctAnswers: [0],
  explanation:
    'Neither Field Layout nor core Layout Builder provides breakpoint-aware view mode switching. Responsive show/hide of placements is the common approach.'
})

replace(234, {
  question:
    'Editors need to preview layout changes before saving. Which Layout Builder capability provides this?',
  options: [
    'Layout Builder’s tempstore-based UI keeps unsaved layout edits in a draft state until the editor saves.',
    'Content moderation is required for any layout preview.',
    'A separate preview theme is required by core.',
    'Screenshot generation in Drupal core.'
  ],
  correctAnswers: [0],
  explanation:
    'Unsaved LB changes live in tempstore until save. Content moderation is a separate publishing workflow, not the preview mechanism itself.'
})

replace(239, {
  question:
    'Your team wants layout override history for per-node Layout Builder layouts. What is required?',
  options: [
    'Enable revisions for the entity so layout override changes can be stored per revision; content moderation is optional.',
    'Enable content moderation; revisions alone cannot store layout overrides.',
    'Use watchdog logs as the only history mechanism.',
    'Export the layout after each change manually.'
  ],
  correctAnswers: [0],
  explanation:
    'Layout overrides are stored on the entity; revisions capture history. Moderation is optional workflow on top of revisions.'
})

replace(243, {
  question:
    'You must ensure certain sections stay fixed at the top of Layout Builder defaults and are hard for editors to rearrange. What is accurate?',
  options: [
    'Core Layout Builder does not provide a built-in `locked` section flag; use a contrib solution such as Layout Builder Lock (or restrict permissions / defaults carefully).',
    'Mark sections as `locked` in core Layout Builder configuration.',
    'Ask editors not to move them, with no technical control.',
    'Inject JavaScript to reset positions after every edit.'
  ],
  correctAnswers: [0],
  explanation:
    'Section locking is not a core LB feature. Contrib modules or permission/process controls are required for true locks.'
})

replace(244, {
  question:
    'You want alternate Layout Builder layouts per language on a translated node. What does core support?',
  options: [
    'Core does not provide independent per-language Layout Builder overrides; the layout override is not per-translation in core.',
    'Enable content translations and core will automatically store a separate LB override per language.',
    'Create separate content types per language as the only core feature for this.',
    'Use CSS `:lang()` selectors to create true alternate layouts in Layout Builder.'
  ],
  correctAnswers: [0],
  explanation:
    'Layout Builder overrides are not language-specific in core. Asymmetric layouts need contrib approaches or different architecture.'
})

replace(251, {
  question:
    'Editors need a CTA block that appears only when a node field has a specific value. In Layout Builder without custom code, what should you do?',
  options: [
    'Use a real visibility/conditions solution (for example Block Visibility Groups, Conditional Fields patterns, or a maintained LB conditions contrib module)—core LB alone does not evaluate arbitrary field values for components.',
    'Install a module literally named “Layout Builder Conditions” that is guaranteed to exist in core.',
    'Duplicate the entire layout for every node that matches.',
    'Use CSS alone to evaluate field values server-side.'
  ],
  correctAnswers: [0],
  explanation:
    'Core Layout Builder lacks general field-value visibility rules. Choose a maintained contrib/visibility approach rather than inventing a core module name.'
})

replace(257, {
  question:
    'You need custom markup for core’s two-column layout plugin (`layout_twocol`). Which Twig template should you override?',
  options: [
    '`layout--twocol.html.twig`',
    '`layout--two-column.html.twig`',
    '`block--two-column.html.twig`',
    '`section--two-column.html.twig`'
  ],
  correctAnswers: [0],
  explanation:
    'The core plugin id `layout_twocol` maps to `layout--twocol.html.twig`, not `two-column`.'
})

replace(261, {
  correctAnswers: [1],
  explanation:
    'There is no `hook_layout_builder_component_form_alter()` in core. Alter the configure form with `hook_form_FORM_ID_alter()` or validate inside a custom layout plugin.'
})

replace(270, {
  question:
    'Editors create inline blocks in Layout Builder, but they do not appear when exporting configuration with `drush cex`. Why?',
  options: [
    'Inline blocks are content stored with the entity layout override, not configuration; configuration export will not ship them. Reusable custom blocks are also content entities, so plan a content deployment strategy.',
    'Drush `cex` requires an `--inline-blocks` flag.',
    'Inline blocks must live in a module’s `config/install` directory.',
    'Layout Builder does not support configuration export of defaults at all.'
  ],
  correctAnswers: [0],
  explanation:
    'Inline blocks are content. Reusable blocks are also content entities—not a config-export substitute. Use content sync/default content strategies for deployment.'
})

// --- Performance / Security ---
replace(271, {
  question:
    'Audit logs reveal large CSS payloads on first paint. Which Drupal-friendly technique helps without inventing unsupported library keys?',
  options: [
    'Keep a small critical CSS budget early (often inlined) and leave the bulk of theme CSS on aggregated libraries with aggregation enabled.',
    'Mark a CSS library as `preload: true` in `libraries.yml`, which core fully supports for stylesheets.',
    'Disable CSS aggregation permanently as the optimization strategy.',
    'Inline all CSS into every Twig template.'
  ],
  correctAnswers: [0],
  explanation:
    'Drupal does not provide a general `preload` flag for CSS libraries the way some answers claim. Critical CSS inlining plus aggregated remainder is the practical approach.'
})

replace(292, {
  question:
    'You must pass data to JavaScript via `drupalSettings` safely. What is the secure practice?',
  options: [
    'Attach structured data with `#attached][\'drupalSettings\']` (JSON-encoded by Drupal) and escape/sanitize only when inserting values into the DOM in JavaScript.',
    'Run `Html::escape()` or `Xss::filter()` on every value before assigning to `drupalSettings`.',
    'Pass full entity objects directly into `drupalSettings` without structuring DTOs.',
    'Disable `drupalSettings` and write globals into inline scripts instead.'
  ],
  correctAnswers: [0],
  explanation:
    '`drupalSettings` is JSON data, not HTML. HTML-escaping values before JSON encoding is the wrong layer; escape at DOM insertion time in JS.'
})

replace(298, {
  question:
    'Users reported that staging URLs are indexed by search engines. Trusted host patterns were suggested. What do they actually do?',
  options: [
    'Trusted host patterns mitigate Host-header spoofing; they do not stop crawlers from indexing a publicly reachable staging site. Use auth, network restrictions, and/or `noindex`/`robots` controls for staging.',
    'Trusted host patterns alone prevent search engines from indexing staging.',
    'Disable CSS aggregation to prevent indexing.',
    'Use Layout Builder restrictions to block crawlers.'
  ],
  correctAnswers: [0],
  explanation:
    'Trusted hosts protect against Host header attacks. Staging indexability needs access control and robots/noindex measures.'
})

replace(300, {
  question:
    'Security reviewers require authenticated session cookies to be HTTPS-only and not readable by JavaScript. What is accurate in Drupal?',
  options: [
    'Serve the site over HTTPS so Secure cookies are used; HttpOnly is handled by Drupal’s session configuration—do not invent `$settings[\'cookie_secure\']` / `$settings[\'cookie_httponly\']` keys.',
    'Set `$settings[\'cookie_secure\'] = TRUE;` and `$settings[\'cookie_httponly\'] = TRUE;` in `settings.php`.',
    'Override cookie headers in Twig templates.',
    'Configure the theme’s `.info.yml` file.'
  ],
  correctAnswers: [0],
  explanation:
    'Those `$settings` cookie keys are not valid Drupal settings. HTTPS + core session configuration is the correct approach.'
})

const out = join(dirname(fileURLToPath(import.meta.url)), 'question-data/questions_patched.json')
mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, JSON.stringify(Object.values(byId).sort((a, b) => a.id - b.id)))
console.log('Patched', Object.keys(byId).length, 'questions ->', out)
