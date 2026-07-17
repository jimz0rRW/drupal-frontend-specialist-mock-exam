## Question 1

Which HTML tag is used to define a section that is self-contained and reusable across a site, such as a blog post?

### Options
- <section>
- <article>
- <div>
- <aside>

### Correct Answers
- [1] <article>

### Explanation
The <article> tag defines self-contained content like blog posts or news articles. It is intended to be independently distributable or reusable. Unlike <section>, which groups thematic content, <article> focuses on standalone material. This semantic tag enhances content structure for accessibility and SEO. It is widely used in modern HTML5 layout strategies.

## Question 2

Which CSS property is used to create a grid layout system in a container?

### Options
- display: block;
- display: inline;
- display: grid;
- display: flex;

### Correct Answers
- [2] display: grid;

### Explanation
display: grid; enables a two-dimensional layout system for web components. It allows content to be placed in rows and columns with control over spacing and alignment. Unlike Flexbox, which is one- dimensional, Grid handles both axes efficiently. Grid is supported in all modern browsers and ideal for complex layouts. Using CSS Grid improves flexibility and reduces the need for media queries.

## Question 3

Which of the following PHP features are essential for outputting data securely in HTML? (Choose two)

### Options
- echo
- htmlspecialchars()
- strip_tags()
- include

### Correct Answers
- [1] htmlspecialchars()
- [2] strip_tags()

### Explanation
htmlspecialchars() escapes characters like < and > to prevent XSS attacks. strip_tags() removes all HTML tags from a string, increasing output safety. echo simply outputs data and does not sanitize it, which can be risky. include is for file inclusion, not for output handling. Using proper sanitization functions is a best practice in PHP web development.

## Question 4

Which of the following HTML attributes are valid and important for web accessibility? (Choose two)

### Options
- alt
- src
- aria-label
- target

### Correct Answers
- [0] alt
- [2] aria-label

### Explanation
The alt attribute provides alternative text for images, crucial for screen readers. aria-label enhances accessibility by providing labels for interactive elements. While src and target are valid HTML attributes, they don’t enhance accessibility directly. ARIA attributes like aria-label are part of the WAI-ARIA spec. Accessibility improves user experience for users with disabilities.

## Question 5

What is the default display value for a <div> element?

### Options
- inline
- block
- inline-block
- none

### Correct Answers
- [1] block

### Explanation
By default, a <div> is a block-level element in HTML. It starts on a new line and spans the full width of its container. This behavior is suitable for structuring large content sections. Its display property can be changed via CSS if needed. Understanding default behaviors is key in layout design. 

## Question 6

Which PHP function is used to check whether a variable is set and is not null?

### Options
- isset()
- empty()
- is_null()
- defined()

### Correct Answers
- [0] isset()

### Explanation
The isset() function returns true if the variable exists and is not null. It is commonly used to check for form submissions or variable presence. empty() checks for falsy values but not strictly for null. is_null() checks if a variable is null, not if it is set. Using isset() helps prevent runtime errors in PHP scripts.

## Question 7

Which of the following CSS techniques is best suited for building a responsive layout?

### Options
- Fixed width layout
- Table-based layout
- Media queries
- Inline styles

### Correct Answers
- [2] Media queries

### Explanation
Media queries enable CSS rules to adapt based on device screen size. They are essential for responsive design across multiple viewports. Fixed-width or table-based designs limit flexibility on small screens. Inline styles are not scalable and reduce maintainability. Responsive design ensures a consistent experience across devices.

## Question 8

Which PHP function is used to include and execute another file only once?

### Options
- require
- include
- require_once
- include_once

### Correct Answers
- [3] include_once

### Explanation
 include_once includes and executes a file only once per script run. This prevents function redeclaration and variable collisions. It's ideal for including config or library files safely. require_once behaves similarly but throws a fatal error on failure. Choosing the right inclusion function improves code safety and performance.

## Question 9

Which CSS feature allows you to apply different styles for printing a webpage?

### Options
- @media screen
- @import
- @media print
- @font-face

### Correct Answers
- [2] @media print

### Explanation
@media print targets print devices and allows custom print styles. It ensures the layout is printer-friendly without altering screen styles. This feature is critical for creating print-optimized versions of pages. Using it avoids printing unnecessary UI elements like buttons or menus. This technique improves usability and professionalism of printed content.

## Question 10

What is the primary role of the <label> element in HTML forms?

### Options
- Submits the form
- Provides default text
- Associates text with form controls
- Creates a clickable button

### Correct Answers
- [2] Associates text with form controls

### Explanation
The <label> element improves accessibility by linking text to form inputs. It allows users to click the label to focus on the associated field. It uses the for attribute to bind to an input's id. This semantic association helps screen readers and enhances usability. Proper use of <label> is essential in accessible form design.

## Question 11

Which of the following are valid PHP superglobal arrays? (Choose two)

### Options
- $_POST
- $GLOBALS
- $_HEADER
- $_FORM

### Correct Answers
- [0] $_POST
- [1] $GLOBALS

### Explanation
$_POST holds data submitted via HTTP POST requests. $GLOBALS provides access to all global variables from any scope. $_HEADER and $_FORM are not predefined PHP superglobals. Understanding superglobals is crucial for handling user input securely. These arrays provide essential data in dynamic web applications.

## Question 12

Which HTML element should be used to emphasize strong importance?

### Options
- <em>
- <strong>
- <b>
- <i>

### Correct Answers
- [1] <strong>

### Explanation
The <strong> tag semantically emphasizes strong importance of content. It is interpreted by screen readers with vocal emphasis, unlike <b>. <em> indicates stress emphasis, and <i> is just stylistic. Semantic HTML is key for accessibility and meaningful markup. Use <strong> when importance or urgency needs to be conveyed.

## Question 13

Which CSS property controls the stacking order of elements?

### Options
- position
- z-index
- float
- display

### Correct Answers
- [1] z-index

### Explanation
z-index defines the vertical stacking order of elements on the z-axis. It only applies to elements with position set to relative, absolute, or fixed. Higher values appear in front of lower values. It is essential for managing overlays, modals, and tooltips. Proper z-index use prevents rendering conflicts in UI components. 

## Question 14

Which of the following PHP statements can be used for looping? (Choose two)

### Options
- foreach
- loop
- for
- repeat

### Correct Answers
- [0] foreach
- [2] for

### Explanation
PHP supports for and foreach loops for iterating arrays and counters. for is used with numeric indexes, while foreach is ideal for arrays. loop and repeat are not valid PHP constructs. Loops are vital for handling repetitive tasks in scripts. Understanding loop structures is fundamental in PHP programming.

## Question 15

What does the CSS box-sizing: border-box; property do?

### Options
- Includes padding and border in element’s total width and height
- Excludes margin from the element box
- Adds margin and padding outside the box
- Calculates width and height ignoring borders

### Correct Answers
- [0] Includes padding and border in element’s total width and height

### Explanation
border-box tells the browser to include padding and border in the total element size. This makes it easier to control layout without unexpected size increases. Without it, padding and border are added to width/height, complicating design. It simplifies responsive layout development. This setting is widely recommended in CSS resets.

## Question 16

What is the main purpose of the require_once statement in PHP?

### Options
- To define a function
- To include a file if it hasn’t been included already
- To create a constant
- To output HTML to the browser

### Correct Answers
- [1] To include a file if it hasn’t been included already

### Explanation
 require_once ensures a file is included only once during script execution. It prevents redeclaration errors when functions or classes are reused. This is critical in modular programming with reusable components. Unlike require, which includes files multiple times, this adds safety. It’s a best practice in scalable PHP applications.

## Question 17

Which HTML5 element is intended to group navigation links?

### Options
- <nav>
- <section>
- <footer>
- <aside>

### Correct Answers
- [0] <nav>

### Explanation
The <nav> tag is a semantic element that wraps primary site navigation. It helps search engines and assistive tech identify link structures. Used for menus, breadcrumbs, and other navigational tools. This improves accessibility and SEO. Proper HTML5 semantics are vital in front-end development.

## Question 18

Which of the following are CSS positioning values? (Choose two)

### Options
- static
- flex
- relative
- grid

### Correct Answers
- [0] static
- [2] relative

### Explanation
static is the default position, and relative allows offset without changing flow. flex and grid are layout display types, not positioning values. Positioning affects how elements are rendered in relation to others. Combining positioning with z-index enables advanced UI layers. Mastering positioning is essential for front-end layout design.

## Question 19

In PHP, what does the include statement do?

### Options
- Creates a new variable
- Sends headers to the browser
- Includes and evaluates a specified file
- Executes a database query

### Correct Answers
- [2] Includes and evaluates a specified file

### Explanation
include imports and executes code from another PHP file at runtime. If the file is missing, it shows a warning but continues execution. It supports modular code design and reuse. For critical files, require is preferred as it halts on failure. This is a foundational concept in PHP applications.

## Question 20

Which HTML element should be used for displaying a tooltip?

### Options
- <span title="info">
- <div>
- <abbr>
- <input>

### Correct Answers
- [0] <span title="info">

### Explanation
The title attribute on any element, such as <span>, displays a tooltip on hover. This enhances user experience by offering additional context or instructions. While <abbr> can show tooltips too, it’s intended for abbreviations. Tooltips help convey information without cluttering the interface. Proper use improves accessibility and interactivity.

## Question 21

Which method is used in JavaScript to attach a function to a button click event?

### Options
- addEventListener()
- onclick()
- bind()
- trigger()

### Correct Answers
- [0] addEventListener()

### Explanation
The addEventListener() method adds an event handler to a specific event like click. It allows multiple events to be attached without overwriting others. It is more versatile than using onclick directly on elements. This method is part of the standard DOM API. Using it ensures cleaner, unobtrusive JavaScript code. 

## Question 22

Which of the following statements are true about JavaScript variable scoping? (Choose two)

### Options
- var is function-scoped
- let and const are block-scoped
- const allows reassignment of values
- let is globally scoped

### Correct Answers
- [0] var is function-scoped
- [1] let and const are block-scoped

### Explanation
var has function-level scope, which may lead to unexpected hoisting issues. let and const are block- scoped and do not leak outside {} blocks. const does not allow reassignment, though the object it holds can change. Understanding scoping helps prevent bugs and improves code reliability. It is critical in writing maintainable JavaScript.

## Question 23

Which jQuery method is used to hide elements?

### Options
- .display("none")
- .invisible()
- .hide()
- .toggle("off")

### Correct Answers
- [2] .hide()

### Explanation
.hide() in jQuery is used to set display: none on matched elements. It is part of jQuery’s core animation and visibility utilities. It allows smooth transitions when paired with .show() or .toggle(). This method simplifies DOM manipulation with fewer lines. jQuery is widely used for cross-browser compatibility.

## Question 24

Which of the following CSS features are most effective for creating responsive designs? (Choose two)

### Options
- !important
- Flexbox
- Media Queries
- Overflow

### Correct Answers
- [1] Flexbox
- [2] Media Queries

### Explanation
 Flexbox provides a flexible layout model ideal for responsive UIs. Media queries allow styles to adapt to screen size, orientation, and resolution. !important overrides specificity but is not a design strategy. Using both Flexbox and media queries enables dynamic, mobile-first designs. Responsive design ensures accessibility across all devices.

## Question 25

In JavaScript, what will typeof null return?

### Options
- "null"
- "undefined"
- "object"
- "string"

### Correct Answers
- [2] "object"

### Explanation
typeof null returns "object" due to a legacy bug in JavaScript’s implementation. Despite its type, null represents the intentional absence of any object value. It is commonly used to reset object references. Understanding this quirk helps avoid logic errors in conditionals. This is a known inconsistency in the language design.

## Question 26

Which viewport meta tag configuration is considered best practice for mobile-first design?

### Options
- <meta name="viewport" content="width=device-width">
- <meta name="viewport" content="initial-scale=1.0">
- <meta name="viewport" content="width=device-width, initial-scale=1.0">
- <meta name="viewport" content="maximum-scale=1.0">

### Correct Answers
- [2] <meta name="viewport" content="width=device-width, initial-scale=1.0">

### Explanation
Setting width=device-width, initial-scale=1.0 ensures the layout fits the device screen. It enables responsive CSS rules to render properly on mobile devices. Without it, pages might appear zoomed out or improperly scaled. This is foundational in responsive and mobile-first web development. It must be included in the <head> of your HTML.

## Question 27

Which jQuery selector targets all elements with the class "active"?

### Options
- $(".active")
- #active
- $(*.active)
- $("active")

### Correct Answers
- [0] $(".active")

### Explanation
In jQuery, $(".active") selects all elements with the class active. This is similar to CSS selectors but used in JavaScript context. It allows chaining of methods like .hide() or .addClass(). This syntax is fundamental for DOM manipulation using jQuery. Selectors must be properly formatted to avoid runtime issues.

## Question 28

Which of the following CSS units are relative and useful in responsive design? (Choose two)

### Options
- em
- px
- rem
- pt

### Correct Answers
- [0] em
- [2] rem

### Explanation
em is relative to the font size of the parent element. rem is relative to the root element’s font size. These units allow scalable and consistent design across devices. px and pt are fixed units and less flexible in responsive contexts. Relative units promote better user experience and accessibility.

## Question 29

Which method is used in JavaScript to convert a JSON string into an object?

### Options
- JSON.parse()
- JSON.stringify()
- parseJSON()
- toJSON()

### Correct Answers
- [0] JSON.parse()

### Explanation
JSON.parse() is used to convert a valid JSON string into a JavaScript object. It is essential for handling data returned from APIs or AJAX calls. Conversely, JSON.stringify() turns objects into JSON strings. Proper parsing allows developers to access and manipulate dynamic data. Understanding this is vital for working with external data sources. 

## Question 30

What does the .toggleClass() method do in jQuery?

### Options
- Adds or removes a class depending on its presence
- Toggles visibility of an element
- Replaces all classes with a new one
- Hides an element permanently

### Correct Answers
- [0] Adds or removes a class depending on its presence

### Explanation
.toggleClass() checks if the element has a specific class and adds or removes it. It simplifies logic where toggling is needed, like menus or tabs. This method enhances interactive behaviors in UIs. It's commonly used in event handlers like click(). It helps maintain clean and efficient code.

## Question 31

Which property is used to prevent an element from shrinking in a Flexbox container?

### Options
- flex-grow: 1;
- flex-shrink: 0;
- min-width: auto;
- justify-content: center;

### Correct Answers
- [1] flex-shrink: 0;

### Explanation
flex-shrink: 0; prevents a Flexbox item from shrinking when space is limited. This is crucial for elements that must maintain visibility or size. It is part of the flex shorthand: flex: grow shrink basis;. Proper use of Flexbox properties enables responsive, adaptive layouts. Understanding shrink and grow behaviors is key to layout control.

## Question 32

Which of the following are valid JavaScript data types? (Choose two)

### Options
- integer
- symbol
- undefined
- char

### Correct Answers
- [1] symbol
- [2] undefined

### Explanation
 JavaScript supports symbol for unique identifiers and undefined for uninitialized variables. There is no native integer or char type in JavaScript. All numbers are of type number and characters are strings of length one. Knowing the correct data types helps avoid runtime bugs. It is vital when performing type checks and validations.

## Question 33

Which jQuery method sends an asynchronous HTTP GET request?

### Options
- .ajaxGet()
- .httpRequest()
- .get()
- .post()

### Correct Answers
- [2] .get()

### Explanation
.get() is a shorthand method for making AJAX GET requests in jQuery. It simplifies the syntax compared to .ajax(). This method is useful for retrieving data from servers or APIs. It allows handling success and error responses via callback functions. Efficient for integrating dynamic content without reloading pages.

## Question 34

Which CSS media query keyword targets high-resolution retina displays?

### Options
- resolution
- min-width
- max-height
- device-pixel-ratio

### Correct Answers
- [0] resolution

### Explanation
The resolution media feature allows targeting devices by pixel density. Example: @media (min- resolution: 192dpi) targets retina-quality displays. This is helpful for serving high-res images or fonts. It improves visual clarity on modern devices. Knowing advanced media queries enhances responsive styling.

## Question 35

What is the main purpose of JavaScript’s this keyword?

### Options
- Refers to the parent function
- Refers to the current DOM element
- Refers to the object the function is called on
- Refers to global scope

### Correct Answers
- [2] Refers to the object the function is called on

### Explanation
this refers to the object context in which a function is invoked. Its value depends on how the function is called, not where it's defined. In strict mode, this in global scope is undefined. Correct use of this is essential in object-oriented JS and event handlers. Arrow functions do not bind their own this.

## Question 36

Which JavaScript method is used to delay code execution?

### Options
- setTimeout()
- sleep()
- wait()
- pause()

### Correct Answers
- [0] setTimeout()

### Explanation
setTimeout() delays execution of a function by a specified time in milliseconds. It is commonly used for timed interactions, animations, or deferred processing. It is asynchronous and non-blocking. Unlike sleep() in other languages, JavaScript lacks a blocking delay. This method helps in managing event timing and user experience.

## Question 37

Which CSS layout method is ideal for building mobile-first, one-dimensional layouts?

### Options
- Grid
- Flexbox
- Float
- Inline-block

### Correct Answers
- [1] Flexbox

### Explanation
Flexbox is a one-dimensional layout model perfect for rows or columns. It allows items to grow, shrink, and wrap to fit containers. This is highly effective in mobile-first designs. Grid is two-dimensional and more complex for simple cases. Flexbox simplifies responsive layouts significantly.

## Question 38

 What is the jQuery syntax to select all <p> elements inside a <div>?

### Options
- $("div p")
- $("p div")
- $("div > p")
- $("p + div")

### Correct Answers
- [0] $("div p")

### Explanation
The selector $("div p") targets all <p> elements inside <div> tags. It is a descendant selector, matching even nested levels. div > p targets only direct children. Knowing these differences ensures precise element targeting. Selectors affect performance and behavior in complex UIs.

## Question 39

What does window.innerWidth return in JavaScript?

### Options
- Total screen resolution width
- Width of the HTML document
- Width of the viewport (excluding scrollbar)
- Width of an element

### Correct Answers
- [2] Width of the viewport (excluding scrollbar)

### Explanation
window.innerWidth returns the viewport width in pixels. It includes padding and excludes the vertical scrollbar (in most browsers). It is often used in responsive scripts to trigger breakpoints. Useful when dynamically adjusting UI elements. Helps in building device-aware behaviors in JS.

## Question 40

Which of the following jQuery methods can be used for animation effects? (Choose two)

### Options
- .animate()
- .fadeIn()
- .setStyle()
- .css()

### Correct Answers
- [0] .animate()
- [1] .fadeIn()

### Explanation
.animate() performs custom animations by modifying CSS properties gradually. .fadeIn() fades elements into view with opacity transitions. .css() only sets or reads styles instantly, not animate them. These methods enable smooth UI transitions and interactivity. Animations enhance user experience when used  properly.

## Question 41

Which file is required to define custom regions in a Drupal theme?

### Options
- theme.settings.yml
- theme.libraries.yml
- theme.info.yml
- regions.html.twig

### Correct Answers
- [2] theme.info.yml

### Explanation
The .info.yml file defines metadata for the theme, including custom regions. You specify regions using a regions: key followed by region names and labels. This file is essential for enabling blocks to be assigned in the admin UI. Without defining regions here, Drupal won’t recognize them in the theme. It's one of the first files parsed when loading a theme.

## Question 42

In a Drupal .info.yml file, which structure correctly defines regions?

### Options
- regions:
- custom_regions:
- blocks:
- theme_regions:

### Correct Answers
- [0] regions:

### Explanation
Regions in .info.yml must be defined under the regions: key using a key-value pair. The key is used in the theme code, and the value is the human-readable label. This allows site builders to place blocks in these regions via the UI. Incorrect syntax or keys will cause the theme to fail validation. Clear, valid YAML structure is essential in theme configuration.

## Question 43

Which of the following are valid ways to alter a theme’s configuration in theme.settings.yml? (Choose two)

### Options
- Setting a default logo path
- Defining block content
- Enabling default breakpoints
- Declaring toggles for elements like site name or slogan

### Correct Answers
- [0] Setting a default logo path
- [3] Declaring toggles for elements like site name or slogan

### Explanation
In theme.settings.yml, you can set defaults for the logo, favicon, and element toggles. These settings affect the theme’s behavior in the Appearance UI. Breakpoints and block content belong in other files such as breakpoints.yml and block config. Using this YAML file properly supports theme customizability and overrides. It's especially useful when distributing themes across projects.

## Question 44

Which hook allows you to alter theme settings provided via the UI?

### Options
- hook_theme()
- hook_form_system_theme_settings_alter()
- hook_preprocess_page()
- hook_settings_alter()

### Correct Answers
- [1] hook_form_system_theme_settings_alter()

### Explanation
hook_form_system_theme_settings_alter() lets you modify the theme settings form. This is used to add new options or change defaults available in Appearance settings. It is commonly implemented in the theme-name.theme file. This hook improves flexibility and allows developers to enhance admin UI control. It is powerful for exposing configuration toggles to site builders.

## Question 45

Which function is used to register a custom region in a Twig template?

### Options
- {{ region('name') }}
- {{ page.name }}
- {{ page.region_name }}
- {{ render(region_name) }}

### Correct Answers
- [2] {{ page.region_name }}

### Explanation
Drupal exposes regions as variables like {{ page.region_name }} in Twig templates. The variable corresponds to the region's machine name in .info.yml. Twig syntax requires you to access them through the page array. Properly rendering these ensures blocks and dynamic content display correctly. It’s a key part of integrating logic and layout in themes.

## Question 46

What does the base theme key do in a .info.yml file?

### Options
- Enables responsive grid support
- Declares a layout builder override
- Instructs Drupal to inherit from another theme
- Registers blocks with the base theme

### Correct Answers
- [2] Instructs Drupal to inherit from another theme

### Explanation
The base theme key allows a theme to inherit templates, styles, and libraries from another. It promotes reuse and avoids redundancy by sharing structure and assets. Common base themes include classy, stable, or custom ones. Overrides can be applied by placing files in the sub-theme with the same name. This is essential for building flexible theme systems.

## Question 47

Which of the following are valid use cases for creating custom theme regions? (Choose two)

### Options
- Creating a new header layout area
- Adding a reusable view
- Providing an additional footer block area
- Styling elements with custom CSS

### Correct Answers
- [0] Creating a new header layout area
- [2] Providing an additional footer block area

### Explanation
Custom theme regions are used to define new layout areas like header, footer, or sidebar. They enable placement of blocks and views via the admin UI. Styling and views are separate concerns; they don’t define regions. Regions increase flexibility for layout customization. They make themes modular and  user-configurable.

## Question 48

What is the purpose of the libraries.yml file in a Drupal theme?

### Options
- Define templates
- Register routes
- Attach CSS and JS assets
- Create configuration entities

### Correct Answers
- [2] Attach CSS and JS assets

### Explanation
The libraries.yml file is used to declare and group CSS and JS files into named libraries. These libraries can then be attached globally or per-template. It supports dependency management and media queries for responsive assets. It’s a core method to control front-end behavior and appearance in Drupal. Understanding this file is vital for performance and theme organization.

## Question 49

Where do you define default values for theme settings that appear in the UI?

### Options
- theme.breakpoints.yml
- theme.info.yml
- theme.settings.yml
- config/install/theme.settings.yml

### Correct Answers
- [3] config/install/theme.settings.yml

### Explanation
Theme setting defaults are stored in config/install/theme.settings.yml. This YAML file is imported when the theme is installed. It defines default values like toggles, paths, and custom configuration. It works with the Configuration Management system in Drupal. This supports deploying themes with consistent settings across environments.

## Question 50

Which file is necessary to expose a theme’s settings to the Appearance UI?

### Options
- theme.libraries.yml
- theme.schema.yml
- theme.theme
- theme.routing.yml

### Correct Answers
- [1] theme.schema.yml

### Explanation
The theme.schema.yml file describes the structure of settings for form rendering. It helps Drupal validate and properly present setting fields in the UI. Without it, custom settings may not appear or behave correctly. This file is essential when exposing new fields via hook_form_system_theme_settings_alter(). Schema definitions are part of Drupal’s strongly-typed config system.

## Question 51

Which of the following files are commonly overridden in a custom theme? (Choose two)

### Options
- page.html.twig
- node.module
- html.html.twig
- system.module

### Correct Answers
- [0] page.html.twig
- [2] html.html.twig

### Explanation
Custom themes often override Twig templates such as page.html.twig and html.html.twig. This allows developers to customize markup structure and inject variables. Core .module files should never be overridden—they belong to backend logic. Twig templates are the layer intended for theming and visual customization. These overrides are key to matching design requirements.

## Question 52

How can you disable a default region such as "sidebar_first" in your theme?

### Options
- Remove the region in theme.libraries.yml
- Comment it out in theme.info.yml
- Remove the region from Twig templates only
- Omit the region definition in theme.info.yml

### Correct Answers
- [3] Omit the region definition in theme.info.yml

### Explanation
By omitting a region from theme.info.yml, Drupal will not display it in the block UI. It effectively disables that region in the theme. Removing it from Twig does not disable it in the admin block interface. Always keep YAML structure valid to avoid syntax errors. This is useful for simplifying the admin experience in custom themes.

## Question 53

 Which hook allows you to programmatically attach a library to every page in the theme?

### Options
- hook_library_info()
- hook_theme()
- hook_page_attachments()
- hook_preprocess_node()

### Correct Answers
- [2] hook_page_attachments()

### Explanation
hook_page_attachments() lets you attach libraries globally to the rendered page. This is often used for injecting global JS or CSS conditionally. It replaces the older drupal_add_js() and drupal_add_css() functions. This hook is placed in the .theme file. It enhances flexibility in attaching dynamic assets.

## Question 54

Where are global assets declared to be attached across all pages in a theme?

### Options
- theme.settings.yml
- theme.info.yml under libraries:
- config.yml
- theme.routing.yml

### Correct Answers
- [1] theme.info.yml under libraries:

### Explanation
The libraries: key in the .info.yml file defines which asset libraries load on every page. This is ideal for global stylesheets or JavaScript files like Bootstrap or jQuery plugins. It improves performance by centralizing asset management. Assets are grouped in theme.libraries.yml and referenced by name. This is crucial for proper front-end behavior in all routes.

## Question 55

What is the purpose of the regions[] array in the Appearance > Block layout UI?

### Options
- Assign CSS classes to themes
- Define visible roles per region
- Map block content to theme regions
- Register admin pages in the theme

### Correct Answers
- [2] Map block content to theme regions

### Explanation
The Block layout UI uses the regions declared in the theme to map blocks visually. Administrators can drag and drop blocks into these regions. This facilitates easy customization of layouts without code. It is  powered by the region definitions in .info.yml. This improves UX and site builder efficiency.

## Question 56

Which theme property determines the order of fallback if multiple base themes are used?

### Options
- base theme
- order
- inheritance
- dependencies

### Correct Answers
- [0] base theme

### Explanation
The base theme property specifies a single fallback from which a sub-theme inherits. Drupal does not support chaining multiple base themes. To control fallback behavior, you structure overrides in the sub- theme. This property is critical to managing inheritance of styles and templates. It streamlines the reuse of theme components.

## Question 57

How do you ensure that a new region shows up in the Appearance UI?

### Options
- Rebuild permissions
- Clear Drupal cache
- Reinstall the theme
- Enable the region in admin/config

### Correct Answers
- [1] Clear Drupal cache

### Explanation
After adding a region in .info.yml, clearing the cache is required for it to appear in the UI. Drupal caches theme definitions and block layout options. Reinstalling the theme is unnecessary and destructive in most cases. Use drush cr or the admin interface to rebuild the cache. Caching is a key factor in Drupal’s performance optimization.

## Question 58

What file extension must a Twig template use in Drupal?

### Options
- .tpl
- .twig.php
- .twig.html
- .html.twig

### Correct Answers
- [3] .html.twig

### Explanation
Twig templates must follow the .html.twig convention in Drupal. This allows the system to recognize and parse them properly. Other extensions will not be detected or compiled into renderable content. This format is consistent across core and custom themes. Understanding file naming is crucial for overrides.

## Question 59

Which tool can help you debug available Twig variables in a template?

### Options
- Devel module
- Views UI
- Theme manager
- Configuration sync

### Correct Answers
- [0] Devel module

### Explanation
The Devel module offers the {{ dump() }} Twig function for variable inspection. It also includes Kint integration for better debugging output. This is invaluable for theme development and template overrides. It avoids guesswork when working with dynamic data. Always remove debug output before deploying to production.

## Question 60

What is the purpose of the .theme file in a custom theme?

### Options
- Compiles Twig files
- Registers regions
- Defines preprocessing logic and hooks
- Declares libraries

### Correct Answers
- [2] Defines preprocessing logic and hooks

### Explanation
The .theme file is a PHP file that contains hook implementations for the theme. It is commonly used for preprocessing variables and altering templates. This file complements Twig by injecting logic and data. Hooks like hook_preprocess_page() or hook_theme_suggestions_HOOK() live here. It is essential for advanced theming control.

## Question 61

Which file is used in a Drupal theme to declare and group CSS and JS assets?

### Options
- theme.info.yml
- theme.libraries.yml
- theme.theme
- theme.routing.yml

### Correct Answers
- [1] theme.libraries.yml

### Explanation
The theme.libraries.yml file groups and defines all CSS and JS files used in a theme. It supports media queries, weight, and dependencies for efficient asset loading. It’s referenced in the .info.yml file or attached conditionally in templates. Proper structuring of this file ensures performance and maintainability. It’s critical for controlling front-end asset behavior in Drupal themes.

## Question 62

Which directive can you use in theme.libraries.yml to ensure a stylesheet loads only on screens wider than 768px?

### Options
- media: (min-width:768px)
- screen:768px
- query: min-768
- css-media: tablet

### Correct Answers
- [0] media: (min-width:768px)

### Explanation
The correct way to target media queries in theme.libraries.yml is using media: (min-width:768px). This allows conditional loading of stylesheets based on viewport size. It helps reduce load time on small devices and improves responsiveness. Each CSS file can have different media settings in the libraries file. This enables mobile-first, performance-optimized theming.

## Question 63

Which function in a Twig template attaches a library to that specific template?

### Options
- {{ attach('library_name') }}
- {{ include_library('theme/library') }}
- {{ attach_library('theme/library') }}
- {{ import_library('theme.library') }}

### Correct Answers
- [2] {{ attach_library('theme/library') }}

### Explanation
{{ attach_library('theme/library') }} is the correct Twig function to include theme-specific assets. This ensures the CSS/JS is only loaded when the template is rendered. It improves performance by scoping  asset usage to relevant pages. Used commonly in page.html.twig, node.html.twig, and others. This is best practice for modular and efficient front-end development.

## Question 64

Which of the following are valid keys under a library definition in libraries.yml? (Choose two)

### Options
- css
- weight
- dependencies
- theme

### Correct Answers
- [0] css
- [2] dependencies

### Explanation
Valid keys under a library definition include css, js, and dependencies. css is used to define CSS files and their media types. dependencies lists other libraries that must load beforehand. There is no key named theme; weight is valid in some other contexts but not directly here. Knowing valid keys is crucial for error-free asset management.

## Question 65

Where should you place a custom JavaScript file so it’s available for referencing in libraries.yml?

### Options
- css/components
- templates/
- js/
- includes/

### Correct Answers
- [2] js/

### Explanation
Theme-specific JavaScript files should be placed in the js/ directory. This is a Drupal convention and improves maintainability and structure. You then reference it using relative paths in libraries.yml. Keeping JS files organized helps avoid conflicts and enhances performance. This also simplifies troubleshooting during development.

## Question 66

What is the default scope for stylesheets declared in a theme’s library?

### Options
- Node pages only
- All admin pages
- Globally applied to every route
- Only attached manually in templates

### Correct Answers
- [2] Globally applied to every route

### Explanation
When a library is declared in theme.info.yml, its stylesheets are globally applied. They load on every route where the theme is active. This is useful for base styles like typography or layout resets. Conditional loading can be used for template-specific assets instead. It’s important for optimizing performance and reducing unnecessary asset loading.

## Question 67

What is the benefit of grouping CSS and JS into separate libraries?

### Options
- It minimizes caching
- It supports dynamic database queries
- It improves maintainability and reusability
- It disables JS aggregation

### Correct Answers
- [2] It improves maintainability and reusability

### Explanation
Grouping assets into modular libraries improves theme maintainability. Developers can load only what’s needed, optimizing performance. It supports better organization of code across components or layouts. Libraries can also be reused across templates or features. Drupal’s library system was built with this principle in mind.

## Question 68

What happens if a library is declared in libraries.yml but never attached?

### Options
- Drupal throws a fatal error
- The theme won’t load
- The assets won’t be loaded on the frontend
- The library is attached by default

### Correct Answers
- [2] The assets won’t be loaded on the frontend

### Explanation
Declaring a library without attaching it will not load its assets. You must explicitly attach the library via .info.yml, Twig, or preprocess hooks. Drupal avoids loading unused libraries for performance reasons. This ensures developers remain in control of asset management. Unused libraries are harmless but ineffective unless used properly.

## Question 69

 Which JavaScript function ensures code runs after the DOM is fully loaded?

### Options
- window.onload()
- Drupal.behaviors
- document.ready()
- DOMContentLoaded()

### Correct Answers
- [2] document.ready()

### Explanation
In jQuery, $(document).ready() ensures code runs after the DOM is fully parsed. This prevents errors from trying to manipulate elements that haven’t loaded yet. It’s the most common way to handle DOM- ready JS. In Drupal, Drupal.behaviors is often combined with this. Modern vanilla JS can use DOMContentLoaded as well.

## Question 70

What is the purpose of Drupal.behaviors in Drupal JavaScript?

### Options
- Compile SCSS files dynamically
- Attach behaviors to dynamically loaded DOM elements
- Create API routes
- Control admin permissions

### Correct Answers
- [1] Attach behaviors to dynamically loaded DOM elements

### Explanation
Drupal.behaviors lets developers attach JavaScript actions that re-apply on AJAX requests. This ensures consistency when content is reloaded dynamically (like Views). It replaces older jQuery-based ready() patterns in Drupal-specific contexts. It is essential when integrating custom JS with Drupal’s dynamic behavior. Each behavior must have an attach function.

## Question 71

Which of the following are necessary to use Drupal.behaviors? (Choose two)

### Options
- An attach function
- An info.json file
- Unique behavior name
- .theme file modification

### Correct Answers
- [0] An attach function
- [2] Unique behavior name

### Explanation
Each behavior in Drupal.behaviors must be uniquely named to prevent conflicts. It must include an  attach() function that runs your logic. This structure allows consistent re-execution across AJAX calls. No .theme or JSON files are involved directly. It’s a core concept in Drupal’s JS architecture.

## Question 72

How do you conditionally load a JavaScript file for only the front page?

### Options
- Add it to .info.yml
- Use Twig attach_library in page.html.twig with condition
- Use html.html.twig
- Add to the default theme config

### Correct Answers
- [1] Use Twig attach_library in page.html.twig with condition

### Explanation
You can use conditional logic in page.html.twig to load libraries only on specific pages. Check the if front_page condition and use attach_library(). This optimizes load performance by avoiding unnecessary JS. This pattern is common for homepage carousels or animation effects. Twig’s flexibility enables page- specific logic easily.

## Question 73

Which tool ensures that theme JavaScript remains compatible with Drupal behaviors and AJAX reloads?

### Options
- RequireJS
- Drupal.behaviors
- Gulp
- Webpack

### Correct Answers
- [1] Drupal.behaviors

### Explanation
Drupal.behaviors ensures that JavaScript actions persist through AJAX and dynamic updates. It is the recommended Drupal mechanism for DOM interaction. This system is core to Views, Forms, and AJAX- enabled content. Failing to use behaviors can cause scripts to stop working after refresh. This ensures your JS works with Drupal’s lifecycle.

## Question 74

Which tag does Drupal automatically add for stylesheets declared in libraries.yml?

### Options
- <style>
- <link>
- <import>
- <resource>

### Correct Answers
- [1] <link>

### Explanation
Drupal uses <link> tags to include external CSS files in the HTML head. These tags are generated from the libraries system automatically. They follow HTML5 standards and are cacheable by browsers. Properly scoped and versioned stylesheets improve front-end performance. This is part of the Drupal asset management system.

## Question 75

Which JavaScript statement is used to access a form element by ID?

### Options
- getElementByTagName()
- document.form()
- document.getElementById()
- getElementById.document()

### Correct Answers
- [2] document.getElementById()

### Explanation
document.getElementById() accesses an element directly via its id attribute. This method is fast and widely supported in all browsers. It is useful for adding event listeners or manipulating form fields. It’s fundamental in both vanilla JS and Drupal’s JS logic. This ensures targeted and precise DOM manipulation.

## Question 76

Which of the following are valid CSS types in libraries.yml? (Choose two)

### Options
- theme
- base
- external
- component

### Correct Answers
- [0] theme
- [3] component

### Explanation
theme and component are valid CSS types under the css: section in libraries.yml. theme applies global design styles, while component is for isolated elements. These types control the order and specificity in the render output. Using proper types helps structure and maintain styles effectively. Base and external are not valid keywords here.

## Question 77

 What is the correct format to define a CSS file under theme in libraries.yml?

### Options
- css: theme: css/style.css: {}
- css: style.css
- styles: theme: css/style.css: {}
- css: global: file: css/style.css: {}

### Correct Answers
- [0] css: theme: css/style.css: {}

### Explanation
The correct format uses css:, then theme:, followed by the relative file path and empty options {}. This tells Drupal how to categorize and load the asset. It supports advanced options like media or preprocess. This is the standard for all themes and libraries. Improper formatting will cause asset loading to fail.

## Question 78

Which utility can be used to compile SCSS files into CSS during theme development?

### Options
- Gulp
- Drush
- Composer
- CKEditor

### Correct Answers
- [0] Gulp

### Explanation
Gulp is a task runner often used to compile SCSS into CSS in front-end workflows. It automates tasks like minification, concatenation, and live reloads. It integrates well with theme development environments. Using SCSS improves code reuse and maintainability. Gulp simplifies repetitive tasks and increases productivity. 

## Question 79

Which method is best to prevent JS file duplication across templates?

### Options
- Use inline scripts
- Declare the same file in every template
- Group logic in a shared library
- Load via CDN

### Correct Answers
- [2] Group logic in a shared library

### Explanation
Grouping shared JS logic in a reusable library prevents duplication and improves performance. This allows centralized maintenance and consistent behavior. The library can then be attached conditionally where needed. Avoiding redundant inclusion reduces page size and conflicts. It is a best practice in Drupal and front-end development.

## Question 80

How does Drupal optimize performance when multiple libraries are loaded?

### Options
- Loads one at a time synchronously
- Aggregates and compresses assets
- Minifies using JavaScript only
- Converts to inline styles

### Correct Answers
- [1] Aggregates and compresses assets

### Explanation
Drupal aggregates and compresses CSS and JS files during rendering. This reduces HTTP requests and page load time. It is configurable via Performance settings in the admin UI. Drupal also supports CDN integration and cache-busting techniques. This approach is crucial for front-end optimization.

## Question 81

What is the purpose of the breakpoints.yml file in a Drupal theme?

### Options
- To define admin toolbar configurations
- To register responsive image styles and screen sizes
- To define database connections
- To create JavaScript behaviors

### Correct Answers
- [1] To register responsive image styles and screen sizes

### Explanation
 The breakpoints.yml file defines screen width conditions for responsive design. It allows Drupal to associate image styles and layouts with viewport sizes. Breakpoints are used in responsive images, layouts, and CSS media queries. They enhance mobile performance and ensure a consistent experience. Each breakpoint must include label, mediaQuery, and weight.

## Question 82

Which of the following are required properties for a breakpoint in breakpoints.yml? (Choose two)

### Options
- label
- imageStyle
- mediaQuery
- cssFile

### Correct Answers
- [0] label
- [2] mediaQuery

### Explanation
Each breakpoint must include a human-readable label and a mediaQuery expression. These properties define when the breakpoint is triggered in a responsive layout. Other optional keys include weight, multipliers, and group. Breakpoints support responsive images and layout definitions. Incorrect definitions will result in broken responsiveness.

## Question 83

In breakpoints.yml, what does the multipliers key define?

### Options
- Image size scaling for different screen densities
- Priority of media query
- Cache duration
- CSS specificity rules

### Correct Answers
- [0] Image size scaling for different screen densities

### Explanation
The multipliers key defines pixel density variants like 1x, 2x for high-resolution displays. This is critical for supporting Retina and HD screens with clear imagery. It works in conjunction with responsive image styles. It improves image quality while reducing load times for lower-res displays. Drupal uses this to generate multiple image versions.

## Question 84

How can you register your theme’s breakpoints with Drupal’s responsive image system?

### Options
- Add them to .info.yml
- Use drush breakpoint-sync
- Define breakpoints and reference them in responsive image styles
- Include them in settings.php

### Correct Answers
- [2] Define breakpoints and reference them in responsive image styles

### Explanation
Breakpoints in breakpoints.yml are made usable by referencing them in responsive image styles. This configuration is done in the admin UI or via config export/import. It connects display conditions with image size selection. There’s no need for CLI or hardcoded config. This integration enhances content delivery across devices.

## Question 85

Which Drupal themes can be used as base themes for creating a sub-theme? (Choose two)

### Options
- Bartik
- Stable
- Classy
- Olivero

### Correct Answers
- [1] Stable
- [2] Classy

### Explanation
Stable and Classy are designed specifically to serve as base themes. They provide structured templates and minimal or clean markup respectively. Bartik and Olivero are full themes and not intended for inheritance. Using a base theme ensures better maintainability and upgrade paths. Sub-themes override only what they need.

## Question 86

What is the minimum file required to declare a sub-theme in Drupal?

### Options
- theme.libraries.yml
- theme.breakpoints.yml
- theme.info.yml
- theme.schema.yml

### Correct Answers
- [2] theme.info.yml

### Explanation
The .info.yml file is required to register a sub-theme and define metadata. It includes the base theme: key to link to a parent theme. Without this file, Drupal won’t recognize the theme. Additional files like libraries or templates are optional. The sub-theme can progressively override base features. 

## Question 87

How does a sub-theme override a template from the base theme?

### Options
- Define it in the .libraries.yml
- Place a file with the same name in its templates/ directory
- Add a custom route
- Use the override() function in .theme

### Correct Answers
- [1] Place a file with the same name in its templates/ directory

### Explanation
Twig templates can be overridden by placing a file with the same name in the sub-theme’s templates/ folder. Drupal uses the file with the highest theme weight and specificity. This allows easy customization while inheriting from the base. File naming must follow Drupal’s naming conventions. Template overrides are central to theme flexibility.

## Question 88

Which key in a sub-theme’s .info.yml declares inheritance from a base theme?

### Options
- inherit_from:
- extends:
- base_theme:
- theme_parent:

### Correct Answers
- [2] base_theme:

### Explanation
The correct key is base_theme: followed by the machine name of the base theme. This allows the sub- theme to inherit templates, CSS, and JS from the base. You can override or extend these as needed. This approach promotes reuse and simplifies maintenance. Misspelling this key will break the theme’s structure.

## Question 89

What happens if the base theme is disabled but the sub-theme is enabled?

### Options
- Drupal will fallback to default core styles
- The sub-theme will not render correctly
- It automatically imports missing files
- It ignores all inherited templates

### Correct Answers
- [1] The sub-theme will not render correctly

### Explanation
If a sub-theme’s base theme is disabled, Drupal cannot access inherited templates or assets. This results in broken layouts or missing components. The base theme must be enabled even if not set as the default. Always ensure dependencies are enabled before activating the sub-theme. This is a common setup issue during theming.

## Question 90

Which of the following files can be overridden by a sub-theme? (Choose two)

### Options
- page.html.twig
- theme.libraries.yml
- web.config
- html.html.twig

### Correct Answers
- [0] page.html.twig
- [3] html.html.twig

### Explanation
Templates like page.html.twig and html.html.twig can be overridden to change layout and structure. They control outer HTML, regions, and wrappers. Library files are not overridden; instead, new libraries are declared in the sub-theme. Web server config files like web.config are unrelated to theming. Overriding templates is a primary method for custom presentation.

## Question 91

What is a valid reason to use a sub-theme over a base theme directly?

### Options
- To avoid caching
- To gain support for deprecated hooks
- To isolate customizations and ensure upgradability
- To disable core CSS

### Correct Answers
- [2] To isolate customizations and ensure upgradability

### Explanation
Sub-themes allow you to keep customizations separate from the base theme. This ensures that updates to the base theme won’t overwrite your changes. It supports a clean separation of logic and styling. It’s a recommended best practice in Drupal front-end development. Directly editing a base theme is discouraged.

## Question 92

Which of the following is a correct directory structure for a sub-theme?

### Options
- themes/custom/my_subtheme/templates/
- modules/custom/my_subtheme/
- core/themes/my_subtheme/
- libraries/my_subtheme/

### Correct Answers
- [0] themes/custom/my_subtheme/templates/

### Explanation
Custom themes, including sub-themes, should reside under themes/custom/my_subtheme/. This keeps the code organized and separate from core or contrib themes. Placing themes in the wrong directory may result in them not being detected. The templates/ directory holds override Twig files. This structure aligns with Drupal best practices.

## Question 93

Which CLI command enables a theme in Drupal?

### Options
- drush theme:enable
- drupal install theme
- drush en theme_name
- drush theme:install

### Correct Answers
- [2] drush en theme_name

### Explanation
The correct command is drush en theme_name to enable a theme via Drush. You can then set it as default using drush config:set system.theme default theme_name. CLI methods are faster than UI and useful in automation. Always clear cache after enabling a new theme. This ensures proper discovery of assets and templates.

## Question 94

Which of the following are inherited from the base theme when creating a sub-theme? (Choose two)

### Options
- JS files from libraries.yml
- Admin permissions
- Block configurations
- Twig templates

### Correct Answers
- [0] JS files from libraries.yml
- [3] Twig templates

### Explanation
Sub-themes inherit libraries and Twig templates from the base theme. This inheritance reduces duplication and simplifies customization. Permissions and block configurations are stored separately in configuration. Sub-themes override only what needs to change visually or structurally. This model  encourages modular and maintainable design.

## Question 95

How do you prevent a library from the base theme from loading in a sub-theme?

### Options
- Delete the library manually
- Override it with a dummy file
- Use libraries-override in .info.yml
- Disable CSS aggregation

### Correct Answers
- [2] Use libraries-override in .info.yml

### Explanation
libraries-override in the sub-theme’s .info.yml lets you selectively replace or nullify base theme libraries. This prevents unwanted styles or scripts from loading. It gives you full control over inherited assets. This is especially useful when using the same base theme across multiple sub-themes. It avoids redundancy and potential styling conflicts.

## Question 96

What is the result of missing weight: in a breakpoint declaration?

### Options
- Drupal will ignore the breakpoint
- Breakpoint loads with lowest priority
- It loads last by default
- It causes the theme to crash

### Correct Answers
- [1] Breakpoint loads with lowest priority

### Explanation
If weight: is omitted, Drupal assigns the default lowest priority to the breakpoint. Weight determines the order in which breakpoints are evaluated. Lower values load earlier; higher values load later. Specifying weight ensures intended override or cascade behavior. It’s optional but important for precise control.

## Question 97

Which YAML key enables automatic discovery of a theme's breakpoints?

### Options
- discovery:
- breakpoint:
- breakpoints:
- breakpoints_group:

### Correct Answers
- [3] breakpoints_group:

### Explanation
breakpoints_group: allows grouping breakpoints so they can be associated with responsive image styles. This ties them to themes and modules in Drupal’s breakpoint system. It's used when integrating with responsive images and layouts. Missing this key doesn’t prevent breakpoints from working, but it affects discovery. It helps connect breakpoints with configuration.

## Question 98

Which base theme is commonly used for minimal HTML output?

### Options
- Classy
- Stable
- Bartik
- Starterkit

### Correct Answers
- [1] Stable

### Explanation
Stable provides a minimal HTML output with no added markup or styling. It’s ideal when you want full control over the rendered output. Classy adds sensible classes and structure for general use. Choosing the right base theme depends on your project’s flexibility needs. Stable ensures no opinionated markup is inherited.

## Question 99

Which module helps preview breakpoints and test responsive layouts in Drupal?

### Options
- Breakpoint Analyzer
- Responsive Preview
- Responsive Theme Helper
- Breakpoint Tester

### Correct Answers
- [1] Responsive Preview

### Explanation
The Responsive Preview module adds a toolbar feature for breakpoint simulation. It allows quick testing of how content responds to different screen widths. It improves theme debugging and responsive development workflows. This is useful for validating breakpoints.yml definitions visually. It’s a helpful tool during front-end QA.

## Question 100

 What is the final step after creating a new sub-theme and adding all configuration files?

### Options
- Import translation strings
- Export site configuration
- Clear the Drupal cache
- Run cron

### Correct Answers
- [2] Clear the Drupal cache

### Explanation
After adding or modifying theme files, always clear Drupal’s cache. Drupal caches theme info, templates, and asset libraries. Skipping this step can cause errors or outdated content to display. Use drush cr or the admin UI to clear caches. It’s a fundamental part of theme development.

## Question 101

What is the purpose of template suggestions in Drupal?

### Options
- To dynamically choose which Twig template file to render
- To hardcode routing logic into themes
- To manage user permissions
- To override module configurations

### Correct Answers
- [0] To dynamically choose which Twig template file to render

### Explanation
Template suggestions allow Drupal to dynamically choose which template file to use based on context. For example, you can create node--article.html.twig to override only Article nodes. They enable targeted theming without modifying global templates. Suggestions are based on entity types, bundles, view modes, and more. This system provides powerful and flexible control over rendering.

## Question 102

Which of the following are valid template suggestion formats? (Choose two)

### Options
- node--article.html.twig
- page--user--1.html.twig
- field-body.html.twig
- html.twig.article

### Correct Answers
- [0] node--article.html.twig
- [1] page--user--1.html.twig

### Explanation
Template suggestions follow a specific naming convention such as node--[bundle].html.twig or page-- user--[uid].html.twig. These files override the default when the pattern matches the current render  context. field-body.html.twig and html.twig.article are invalid due to incorrect structure. Proper naming ensures the suggestion is recognized and used. You can verify active suggestions using Twig debug output.

## Question 103

How can you determine which template suggestions are available for a given page?

### Options
- Use the Views UI
- Enable Twig debug mode in services.yml
- Look at theme.libraries.yml
- Inspect the HTML output for meta tags

### Correct Answers
- [1] Enable Twig debug mode in services.yml

### Explanation
Twig debug mode shows a list of template suggestions in HTML comments on the page. You enable it by modifying services.yml and clearing the cache. This method helps identify what templates Drupal is evaluating. It speeds up the process of overriding and testing template logic. It’s essential for front-end development and debugging.

## Question 104

What is the purpose of hook_theme_suggestions_HOOK_alter()?

### Options
- To set CSS styles globally
- To override PHP settings
- To programmatically add or change template suggestions
- To change caching behavior

### Correct Answers
- [2] To programmatically add or change template suggestions

### Explanation
hook_theme_suggestions_HOOK_alter() lets you modify or add template suggestions dynamically. You can use conditions such as content type, user role, or route to influence which template is used. This hook is placed in your .theme file and follows Drupal’s hook naming conventions. It gives greater control over template rendering. This is often used to support deeply customized designs.

## Question 105

Where should you place hook_theme_suggestions_node_alter()?

### Options
- In node.module
- In settings.php
- In your theme’s .theme file
- In template.php

### Correct Answers
- [2] In your theme’s .theme file

### Explanation
All theme-related hooks such as hook_theme_suggestions_HOOK_alter() must be placed in the theme’s .theme file. This file acts like a module .module file but is specific to the theme layer. Hooks placed elsewhere won’t be recognized by the theme engine. Always ensure the function name uses the correct machine name of the theme. This approach keeps theme logic organized.

## Question 106

What does a preprocess function allow you to do?

### Options
- Enable AJAX requests
- Add or modify variables passed to Twig templates
- Modify routing and URL generation
- Access the database directly from templates

### Correct Answers
- [1] Add or modify variables passed to Twig templates

### Explanation
Preprocess functions modify the array of variables passed to Twig templates. They allow you to add custom variables or override default ones. This is useful for injecting dynamic values or controlling element visibility. Preprocess functions are typically placed in the .theme file. They help separate logic from presentation.

## Question 107

Which of the following are commonly used preprocess hooks? (Choose two)

### Options
- template_preprocess_page()
- node_view_alter()
- template_preprocess_node()
- hook_theme_alter()

### Correct Answers
- [0] template_preprocess_page()
- [2] template_preprocess_node()

### Explanation
template_preprocess_page() and template_preprocess_node() are used to add or modify template variables. They are part of the theme engine’s rendering pipeline. node_view_alter() and hook_theme_alter() are used for other purposes like altering render arrays or theme definitions. Preprocess functions are essential for advanced theming. They provide flexibility without overcomplicating Twig files. 

## Question 108

What does the $variables array represent in a preprocess function?

### Options
- User session data
- Render array
- Data passed to the Twig template
- Form validation results

### Correct Answers
- [2] Data passed to the Twig template

### Explanation
The $variables array holds all data that will be available to the corresponding Twig template. You can modify existing keys or add new ones to use in templates. For example, $variables['custom_class'] = 'highlight'; It bridges the PHP rendering layer with the Twig template layer. It is a core part of theme development.

## Question 109

What happens if a variable is not defined in Twig?

### Options
- It throws a PHP warning
- It shows NULL in output
- It renders nothing or throws an error depending on settings
- It renders a placeholder string

### Correct Answers
- [2] It renders nothing or throws an error depending on settings

### Explanation
Twig renders undefined variables as blank by default, or throws an error if strict variables are enabled. This helps prevent accidental output of undefined data. Twig debug mode is useful for identifying missing variables. Proper use of conditional statements can prevent errors. Using preprocess functions helps ensure all required variables exist.

## Question 110

Which function is used to modify a form in Drupal?

### Options
- template_preprocess_form()
- hook_form_alter()
- form_override()
- template_form_alter()

### Correct Answers
- [1] hook_form_alter()

### Explanation
hook_form_alter() allows you to access and change any form before it's rendered. You can add, remove, or modify elements such as fields or buttons. It is useful for both front-end and back-end form adjustments. Form alterations are typically defined in .module or .theme files. This is key to customizing form layouts and behavior.

## Question 111

Which parameters are available in hook_form_alter()? (Choose two)

### Options
- $form
- $theme
- $form_state
- $template

### Correct Answers
- [0] $form
- [2] $form_state

### Explanation
hook_form_alter() receives $form (the render array) and $form_state (form processing state). These allow deep access and changes to form structure and behavior. You can use these to conditionally alter forms based on user role, content, etc. The $form_id is also passed to help target specific forms. This hook is very powerful for form customization.

## Question 112

How do you target a specific form for alteration?

### Options
- By class name
- By ID using hook_form_FORM_ID_alter()
- By content type
- By theme override

### Correct Answers
- [1] By ID using hook_form_FORM_ID_alter()

### Explanation
To target a specific form, use the form ID in the hook name, like hook_form_user_login_form_alter(). This ensures the hook only affects that particular form. It’s cleaner and more efficient than adding conditions inside a generic form_alter. The form ID is the key to scoping your modifications. This enables modular and maintainable code.

## Question 113

Which hook would you use to alter template suggestions based on user role?

### Options
- hook_form_alter()
- hook_theme_suggestions_page_alter()
- hook_permission_alter()
- hook_user_view()

### Correct Answers
- [1] hook_theme_suggestions_page_alter()

### Explanation
hook_theme_suggestions_page_alter() lets you add custom suggestions based on context like user role. You can use \Drupal::currentUser() to check roles and add a suggestion like page__admin. This enables personalized theming for different user types. It is a flexible way to control template rendering logic. Ideal for role-based UI theming.

## Question 114

Where should you place a custom hook_theme_suggestions_page_alter() implementation?

### Options
- Inside a service class
- In your theme’s .theme file
- In template.html.twig
- In libraries.yml

### Correct Answers
- [1] In your theme’s .theme file

### Explanation
All template suggestion alter hooks belong in the theme’s .theme file. This ensures they are executed in the right phase of the render pipeline. Placing them elsewhere will result in them being ignored. This file acts as the theme’s functional backend. Keep it organized for easy maintenance.

## Question 115

What is the effect of adding a custom template suggestion like page--admin.html.twig?

### Options
- It overrides all templates globally
- It is used only for admin routes
- It disables base theme styles
- It requires changing the database schema

### Correct Answers
- [1] It is used only for admin routes

### Explanation
Custom templates like page--admin.html.twig apply only when the template suggestion matches, such as for /admin routes. This allows specific layouts for administrative sections of the site. It does not affect other templates or the database. It improves user experience and usability for specific contexts. Use it with conditional suggestion logic in alter hooks. 

## Question 116

Which function is used in preprocess hooks to generate a renderable link?

### Options
- url()
- Link::fromTextAndUrl()
- l()
- Html::link()

### Correct Answers
- [1] Link::fromTextAndUrl()

### Explanation
Link::fromTextAndUrl() is the modern and object-oriented way to generate links in preprocess functions. You can pass the link text and a Url object, and render it later in Twig. This approach is clean, safe, and integrates with Drupal’s routing system. It replaces older procedural functions like l(). Used correctly, it provides contextual and accessible links.

## Question 117

What must you do after adding a new preprocess function?

### Options
- Enable debugging
- Clear the theme registry cache
- Reinstall the theme
- Export configuration

### Correct Answers
- [1] Clear the theme registry cache

### Explanation
New or modified preprocess functions require clearing the theme registry cache. You can do this using drush cr or through the admin UI. Without this, changes will not be recognized. This step ensures Drupal registers new hooks and template mappings. Always test changes after cache clear.

## Question 118

What does hook_preprocess_HOOK() replace from earlier Drupal versions?

### Options
- drupal_set_message()
- theme() function
- template.php render logic
- theme_HOOK() in D6/D7

### Correct Answers
- [3] theme_HOOK() in D6/D7

### Explanation
 hook_preprocess_HOOK() replaces older theme_HOOK() implementations from Drupal 6 and 7. It allows better separation of logic and presentation. This modern approach uses arrays to pass data to Twig. It integrates more cleanly with Drupal’s render system. It is a foundational pattern in D8/9/10 theming.

## Question 119

Which PHP function can be used inside a preprocess function to check route name?

### Options
- route_current()
- \Drupal::routeMatch()->getRouteName()
- $_SERVER['REQUEST_URI']
- current_path()

### Correct Answers
- [1] \Drupal::routeMatch()->getRouteName()

### Explanation
\Drupal::routeMatch()->getRouteName() retrieves the current route name. This is useful in preprocess functions for applying conditional logic. It is more robust than checking URL paths directly. Route names are used in suggestion alters and access control. This method follows Drupal’s modern architecture.

## Question 120

What is the main purpose of using both template suggestions and preprocess functions?

### Options
- To reduce the need for Twig templates
- To simplify module development
- To separate logic from presentation and enable flexible rendering
- To generate faster database queries

### Correct Answers
- [2] To separate logic from presentation and enable flexible rendering

### Explanation
Template suggestions handle presentation, while preprocess functions prepare data and logic. Together, they form Drupal’s theme rendering pipeline. This approach improves maintainability, readability, and scalability. They empower front-end developers to create dynamic, context-aware UIs. It’s a best practice in Drupal theming architecture.

## Question 121

What is the primary purpose of template suggestions in Drupal?

### Options
- Replace theme settings
- Determine the order of CSS file inclusion
- Allow fine-grained control over rendered templates
- Dynamically configure Views

### Correct Answers
- [2] Allow fine-grained control over rendered templates

### Explanation
Template suggestions allow developers to override default templates with context-specific ones. Examples include node types, view modes, or specific blocks. This improves control over layout and structure per entity type. Suggestions are discovered during theme rendering and prioritized. It enhances flexibility in managing Drupal’s markup.

## Question 122

Which of the following are valid template suggestions for nodes? (Choose two)

### Options
- node--article.html.twig
- node--1.html.twig
- node-article.html.twig
- node__article.html.twig

### Correct Answers
- [0] node--article.html.twig
- [1] node--1.html.twig

### Explanation
node--article.html.twig targets the “article” content type, while node--1.html.twig targets a specific node ID. Double hyphens (--) are used for separating the base template name from suggestions. Single or double underscores are invalid and not recognized by the template system. These suggestions allow precise customizations. File naming accuracy is critical for proper overrides.

## Question 123

Which hook allows you to add template suggestions programmatically?

### Options
- hook_theme()
- hook_preprocess()
- hook_theme_suggestions_HOOK_alter()
- hook_entity_view()

### Correct Answers
- [2] hook_theme_suggestions_HOOK_alter()

### Explanation
hook_theme_suggestions_HOOK_alter() lets developers add or alter template suggestions dynamically. This is useful for context-specific conditions not covered by default suggestions. It provides full control over which templates Drupal attempts to use. The HOOK part is replaced with the template type (e.g., node). This is key to extending theme logic intelligently. 

## Question 124

Where are template suggestions displayed when debug mode is enabled?

### Options
- In the admin configuration UI
- In browser developer tools
- As HTML comments in the rendered source
- In the watchdog log

### Correct Answers
- [2] As HTML comments in the rendered source

### Explanation
When Twig debug mode is enabled in services.yml, Drupal includes template suggestions as HTML comments. These appear in the page source, helping developers identify which templates can be overridden. This feature is essential for safe and effective theme development. It prevents guesswork and trial/error file creation. Always disable this in production environments.

## Question 125

Which of the following can be targeted by template suggestions? (Choose two)

### Options
- Views exposed filters
- Comment view modes
- User roles
- Paragraph bundles

### Correct Answers
- [1] Comment view modes
- [3] Paragraph bundles

### Explanation
Template suggestions support targeting of entities by bundle, such as comment--teaser.html.twig or paragraph--hero.html.twig. These allow distinct templates per content subtype. User roles are not directly usable in template suggestions. Exposed filters are handled via form alters or view template overrides. Bundle-based theming is a powerful technique in component design.

## Question 126

Which function is used to prepare variables for use in a template?

### Options
- hook_preprocess_HOOK()
- template_variables()
- hook_theme()
- hook_twig_preload()

### Correct Answers
- [0] hook_preprocess_HOOK()

### Explanation
hook_preprocess_HOOK() is used to add or modify variables passed to Twig templates. You replace HOOK with the template type, such as page, node, or block. This function resides in your .theme file and runs before the template is rendered. It separates logic from presentation cleanly. It’s a cornerstone of Drupal theming architecture.

## Question 127

Which of the following are common use cases for a preprocess function? (Choose two)

### Options
- Attaching a library to the page
- Adding conditional CSS classes
- Rendering an entire view
- Injecting custom template variables

### Correct Answers
- [1] Adding conditional CSS classes
- [3] Injecting custom template variables

### Explanation
Preprocess functions are commonly used to add CSS classes or pass custom variables to Twig templates. They allow you to tailor the template output based on logic. Rendering views is done via Views API, not in preprocess functions. Asset attachments can be done via #attached or other mechanisms. Preprocess logic enhances flexibility without cluttering templates.

## Question 128

Where do you place preprocess functions in a theme?

### Options
- theme.info.yml
- theme.libraries.yml
- THEME.theme
- templates/ directory

### Correct Answers
- [2] THEME.theme

### Explanation
All preprocess functions reside in the THEME.theme file (e.g., mytheme.theme). This is a PHP file that defines all theme hooks and variable modifications. Templates should not contain logic directly; instead, use this file. This separation enhances maintainability and adheres to best practices. Each function must follow Drupal’s naming conventions.

## Question 129

What does the $variables['attributes']->addClass() function do in a preprocess function?

### Options
- Adds a JavaScript class
- Appends a CSS class to the template element
- Creates a new attribute for an entity
- Registers a new render element

### Correct Answers
- [1] Appends a CSS class to the template element

### Explanation
This function appends a new CSS class to an element’s attributes array before rendering. It’s often used in preprocess functions to dynamically style output. This is cleaner than injecting class logic into Twig. The resulting class appears in the final HTML element. It is useful for condition-based styling.

## Question 130

Which hook is used to alter the structure of a form?

### Options
- hook_preprocess_form()
- hook_form_alter()
- hook_form_html_alter()
- hook_field_alter()

### Correct Answers
- [1] hook_form_alter()

### Explanation
hook_form_alter() is the primary method for modifying forms in Drupal. You can use it to change form elements, add validation, or customize rendering. This hook applies to all forms unless scoped to specific form IDs. It’s useful for removing fields, altering titles, or adding markup. It resides in either a module or theme file.

## Question 131

How do you target a specific form with hook_form_alter()?

### Options
- Use hook_form_ID_alter()
- Use hook_form_specific()
- Use hook_form_alter('form_id')
- Pass a parameter to form_alter()

### Correct Answers
- [0] Use hook_form_ID_alter()

### Explanation
To alter a specific form, use hook_form_FORM_ID_alter() where FORM_ID is the machine name of the form. For example, hook_form_user_login_form_alter() targets the login form. This approach avoids affecting all forms on the site. It is a standard and efficient way to scope form changes. Using the correct form ID is crucial for it to work. 

## Question 132

Which of the following can be modified using hook_form_alter()? (Choose two)

### Options
- Field label
- Page title
- Submit button text
- User permissions

### Correct Answers
- [0] Field label
- [2] Submit button text

### Explanation
Inside hook_form_alter(), you can modify form field labels, descriptions, values, and buttons. Permissions and page titles are outside its scope. It allows you to tailor forms to business requirements or design. It also supports adding JavaScript or CSS via #attached. This is an essential hook for front-end and UX customization.

## Question 133

What is the correct place to add a theme suggestion for a custom entity type?

### Options
- hook_theme()
- hook_theme_suggestions_ENTITY_TYPE_alter()
- hook_preprocess_entity()
- hook_form_FORM_ID_alter()

### Correct Answers
- [1] hook_theme_suggestions_ENTITY_TYPE_alter()

### Explanation
Use hook_theme_suggestions_ENTITY_TYPE_alter() to add or modify template suggestions for custom entities. This gives you control over naming conventions and template discovery. It ensures your custom entities can be themed uniquely. Hook placement must be in a theme or module. This is critical for custom content structures.

## Question 134

Which tool allows developers to inspect and preview the available variables in a preprocess function?

### Options
- Twig Tweak
- Devel module
- Breakpoint module
- Configuration Manager

### Correct Answers
- [1] Devel module

### Explanation
The Devel module provides tools like kint() and dpm() to inspect variables in preprocess functions. This helps developers understand what data is available to Twig. Kint offers a visual, expandable interface for debugging arrays and objects. It’s highly recommended during theme development. Always disable Devel in production for performance and security.

## Question 135

What does the #theme key do in a form element?

### Options
- Registers a new route
- Specifies the form layout
- Tells Drupal which template or function to use for rendering
- Sets access permissions

### Correct Answers
- [2] Tells Drupal which template or function to use for rendering

### Explanation
The #theme key determines which theming function or template should render a form element. It allows developers to override output using custom templates. This is part of Drupal’s render array system. You can define custom #theme callbacks in hook_theme(). This enhances control over rendering structure.

## Question 136

Which of the following are valid return values from a hook_theme() implementation? (Choose two)

### Options
- template
- render
- variables
- path

### Correct Answers
- [0] template
- [2] variables

### Explanation
In hook_theme(), valid keys include template, variables, path, and render element. template defines which Twig file to use. variables maps available data passed into the template. This hook registers custom templates for theme output. Proper configuration ensures accurate rendering and avoids errors.

## Question 137

Which hook allows modifying template suggestions for fields?

### Options
- hook_theme_field_alter()
- hook_theme_suggestions_field_alter()
- hook_field_theme_alter()
- hook_preprocess_field()

### Correct Answers
- [1] hook_theme_suggestions_field_alter()

### Explanation
hook_theme_suggestions_field_alter() allows developers to programmatically change or append field template suggestions. You can use this to create field-specific templates based on conditions. This hook supports detailed theming down to the field level. It’s essential for tailoring layouts per content context. It enables consistent and reusable component patterns.

## Question 138

How do you pass a custom variable from preprocess to Twig?

### Options
- Use global variables
- Return it via hook_theme()
- Set it on the $variables array
- Inject it into settings.php

### Correct Answers
- [2] Set it on the $variables array

### Explanation
You assign a custom variable using $variables['my_variable'] = $value; in a preprocess function. It becomes available in the corresponding Twig template as {{ my_variable }}. This method cleanly separates logic from presentation. Always prefix or namespace variables to avoid conflicts. It supports dynamic and context-specific theming.

## Question 139

What is the role of hook_preprocess_page() in Drupal?

### Options
- Override menu links
- Change node fields
- Add variables and logic to page.html.twig
- Load libraries for admin pages only

### Correct Answers
- [2] Add variables and logic to page.html.twig

### Explanation
hook_preprocess_page() lets developers inject custom data into page.html.twig. It is often used to pass flags, paths, or classes for layout decisions. This function is theme-specific and highly useful for homepage logic. It helps keep Twig templates clean and readable. Use it to drive complex front-end behavior. 

## Question 140

Why is it recommended to limit logic inside Twig templates?

### Options
- Twig has limited syntax
- PHP functions can't be called
- It makes the template more secure
- To ensure separation of concerns and improve maintainability

### Correct Answers
- [3] To ensure separation of concerns and improve maintainability

### Explanation
Twig templates are meant to present data, not process it. Putting logic in preprocess functions improves reusability and readability. This separation adheres to clean coding principles. It also simplifies debugging and template overrides. Twig supports limited logic, but heavy operations should stay in PHP.

## Question 141

Which of the following block visibility conditions can be configured in Drupal’s Block Layout UI?

### Options
- User roles
- Content language
- Browser type
- Path patterns

### Correct Answers
- [0] User roles
- [3] Path patterns

### Explanation
Drupal core allows block visibility control based on user roles, path patterns, and content types. This ensures blocks only appear in the right context, such as admin-only menus or sidebar widgets. Content language requires Language module; browser type isn’t a supported condition. These settings enhance personalized and efficient layouts. They are available through the admin interface under “Block layout.”

## Question 142

Which module provides the ability to place and configure blocks in custom layouts?

### Options
- Views
- Layout Builder
- Panels
- Paragraphs

### Correct Answers
- [1] Layout Builder

### Explanation
 Layout Builder enables drag-and-drop layout configuration per content type or node. It allows you to place blocks, fields, and views into a section-based layout UI. This tool provides site builders with full flexibility in page design. Unlike Panels, it is part of Drupal core (since 8.5). It supports both global and per-node layouts.

## Question 143

What is the default region for placing blocks in Drupal’s Bartik or Olivero theme?

### Options
- Header
- Content
- Sidebar first
- Footer

### Correct Answers
- [1] Content

### Explanation
The "Content" region is the primary area where blocks and content entities are rendered. Most page- specific output, including views or forms, appears here by default. Other regions like sidebar and header are used for supplementary or navigational content. Region definitions are declared in the theme’s .info.yml. Proper region use is key to consistent layouts.

## Question 144

Which of the following can be created using the Views module? (Choose two)

### Options
- RSS feeds
- Menus
- Block listings
- Node revisions

### Correct Answers
- [0] RSS feeds
- [2] Block listings

### Explanation
Views can generate content displays like pages, blocks, and RSS feeds based on query results. You can configure filters, relationships, sorting, and contextual arguments. Menus are created through Drupal’s menu system, not Views. Revisions are not listed by default in Views unless custom configuration is applied. Views provide powerful content presentation customization.

## Question 145

When using Views, which display type should be selected to output a reusable content list in a region?

### Options
- Page
- Block
- Feed
- Attachment

### Correct Answers
- [1] Block

### Explanation
Block displays in Views allow the output to be placed into regions like sidebars or footers. You can attach filters, sorting, and fields to structure the block content. Unlike page displays, blocks don’t have their own URL. They can be added to Layout Builder, themes, or custom templates. This makes them ideal for reusable, context-sensitive displays.

## Question 146

How can a View block be embedded directly in a Twig template?

### Options
- {{ view('view_id', 'block_display_id') }}
- {{ render_block('view') }}
- {{ drupal_view('view_id', 'block_display') }}
- {{ embed_view('view') }}

### Correct Answers
- [0] {{ view('view_id', 'block_display_id') }}

### Explanation
Using {{ view('view_id', 'block_display_id') }} is provided by the Twig Tweak module. It enables embedding view displays directly in Twig templates. This is useful for theming blocks with custom structure and positioning. You must ensure Twig Tweak is installed and enabled. This method reduces the need for preprocess logic.

## Question 147

What is required to enable Layout Builder on a content type?

### Options
- Enable Layout Builder module
- Add a custom block
- Edit the theme’s .info.yml
- Enable Layout Builder in the content type's display settings

### Correct Answers
- [3] Enable Layout Builder in the content type's display settings

### Explanation
To use Layout Builder, you must first enable it in the content type’s “Manage Display” tab. You can choose to use it only for default layouts or allow overrides per node. This activates the layout UI for that entity type. The module must also be enabled from the Extend menu. This setup ensures granular layout control. 

## Question 148

Which of the following are available as layout sections in Layout Builder by default? (Choose two)

### Options
- Two column (50/50)
- Responsive grid
- Three column (33/33/33)
- Flexbox layout

### Correct Answers
- [0] Two column (50/50)
- [2] Three column (33/33/33)

### Explanation
Layout Builder provides predefined sections like and/33 for column-based layouts. These are configurable containers where fields and blocks can be placed. More layouts can be added via contrib modules or custom plugins. Responsive and Flexbox layouts require additional modules or custom coding. These defaults simplify layout prototyping.

## Question 149

What happens if a block is placed in a region that doesn't exist in the theme?

### Options
- It breaks the page rendering
- Drupal places it in the content region
- The block is not rendered
- Drupal creates the region dynamically

### Correct Answers
- [2] The block is not rendered

### Explanation
If a block is assigned to a non-existent region, it simply won’t render. Drupal doesn’t throw an error or fallback unless explicitly coded to do so. To fix this, ensure the region is defined in the theme’s .info.yml. Regions act as containers for block placement. Always validate region names before block assignment.

## Question 150

Which type of block is designed to render dynamic or contextual content?

### Options
- Custom block
- View block
- Plugin block
- Contextual block

### Correct Answers
- [1] View block

### Explanation
 View blocks render dynamic content based on filters, user input, and context. They are ideal for showing lists like “Latest Articles” or “Popular Tags.” Custom blocks are static by default, though they can use tokens or Twig variables. Views provide far more flexibility and interaction. They’re commonly used in sidebars, dashboards, and front pages.

## Question 151

Which of the following layout tools are included in Drupal core? (Choose two)

### Options
- Paragraphs
- Layout Builder
- Views
- Display Suite

### Correct Answers
- [1] Layout Builder
- [2] Views

### Explanation
Layout Builder and Views are both core modules in Drupal 10, offering layout and display configuration. Paragraphs and Display Suite are powerful contrib modules but not included in core. Layout Builder allows visual layout configuration. Views allows complex content queries and display logic. These are essential for flexible site-building without code.

## Question 152

How can you restrict a block to only show on a content type like “Article”?

### Options
- Use permissions
- Set a visibility condition by content type
- Use the Path condition
- Assign the block to a view mode

### Correct Answers
- [1] Set a visibility condition by content type

### Explanation
In the block configuration UI, you can apply visibility conditions by content type. This allows the block to appear only when viewing nodes of that type. It is useful for placing related content or CTAs on specific content types. Other conditions like path or role can be added in combination. This ensures content-aware interfaces.

## Question 153

Which hook allows programmatic definition of a custom block?

### Options
- hook_theme()
- hook_block_info()
- hook_block_view()
- BlockBase::build()

### Correct Answers
- [3] BlockBase::build()

### Explanation
Drupal/10 uses plugin-based architecture for blocks. You define custom blocks by extending BlockBase and implementing build(). This method replaces older hooks like hook_block_view(). It gives you full control over markup and caching. Custom blocks can be configured and placed like any core block.

## Question 154

Which of the following are valid content filters in Views? (Choose two)

### Options
- Published status
- User ID
- JavaScript events
- Template name

### Correct Answers
- [0] Published status
- [1] User ID

### Explanation
Views can filter content using fields like “Published status” or “Author (UID)”. These filters allow dynamic content lists based on publishing workflow or user relationship. JavaScript events and template names are unrelated to Views filtering. Understanding filter configuration is essential for custom displays. Filters support exposed inputs for user interaction.

## Question 155

Which Drupal concept allows a block or layout to vary based on route?

### Options
- Contextual filters
- Route conditions
- Path visibility
- Route-based block visibility

### Correct Answers
- [3] Route-based block visibility

### Explanation
Route-based block visibility ensures that blocks only appear on certain routes like /node/1 or /user. This is defined in the block UI under visibility conditions using paths. It supports wildcards (e.g., /node/*) and dynamic routing. This makes block rendering highly contextual and efficient. It works well with Views and Layout Builder. 

## Question 156

When adding a block to Layout Builder, which of the following options are available?

### Options
- Add existing block
- Create custom block
- Embed field from node
- All of the above

### Correct Answers
- [3] All of the above

### Explanation
Layout Builder allows adding existing blocks, creating new custom blocks, and embedding entity fields. This gives site builders flexibility to compose pages visually. Fields like body or image can be rearranged independently of content model. It provides a modern page builder experience natively. Reusable blocks can be placed across multiple layouts.

## Question 157

What is a “section” in Layout Builder?

### Options
- A type of user permission
- A theme override template
- A layout row containing one or more columns
- A type of paragraph field

### Correct Answers
- [2] A layout row containing one or more columns

### Explanation
In Layout Builder, a section is a container with a specific layout, such as one or two columns. Sections help structure page layout by grouping blocks and fields. Each section can contain multiple components across its columns. They form the building blocks of layout configuration. Sections can be reordered, removed, or customized.

## Question 158

Which plugin system does Layout Builder use to define layouts?

### Options
- Render API
- Theme API
- Layout Plugin
- Section Plugin

### Correct Answers
- [2] Layout Plugin

### Explanation
Layout Builder relies on the Layout Plugin system to register and define layout types. Each layout is declared as a plugin and can be extended or customized. You can define your own layouts by creating new plugin classes. This plugin system controls how content is divided and displayed. It makes the layout system extensible and pluggable.

## Question 159

How are Layout Builder changes stored in Drupal?

### Options
- Database only
- YAML only
- Configuration and content
- Session storage

### Correct Answers
- [2] Configuration and content

### Explanation
Layout Builder stores default layouts in configuration and per-entity overrides in content. This dual approach allows shared layouts across all nodes or unique layouts per item. The config system tracks default structures, while content stores specific overrides. This model supports both flexible and consistent designs. It integrates tightly with config export/import tools.

## Question 160

Which of the following are best practices when using Views and Layout Builder together? (Choose two)

### Options
- Use contextual filters to pass route values
- Place View blocks in theme templates only
- Use Views for reusable content lists
- Avoid caching View displays

### Correct Answers
- [0] Use contextual filters to pass route values
- [2] Use Views for reusable content lists

### Explanation
Contextual filters enable dynamic Views that respond to URL arguments (e.g., current user ID). Reusable Views can be placed in Layout Builder to generate filtered blocks. Avoiding caching leads to performance issues; instead, configure appropriate cache settings. Embedding Views in templates should be done sparingly. This approach keeps layouts dynamic yet performant.

## Question 161

What is a common site configuration change that significantly improves Drupal’s front-end performance?

### Options
- Enable Twig debug mode
- Disable CSS and JS aggregation
- Enable CSS and JS aggregation
- Enable full-page HTML caching

### Correct Answers
- [2] Enable CSS and JS aggregation

### Explanation
CSS and JS aggregation combine and minify assets to reduce HTTP requests. This significantly enhances front-end loading times by minimizing file size and round trips. It’s enabled in the Performance settings under Configuration > Development. This setting should be turned on for production environments. It helps Drupal deliver optimized assets to end users.

## Question 162

Which of the following practices can degrade performance in a custom theme? (Choose two)

### Options
- Excessive use of |raw filter
- Using attach_library() instead of global library
- Too many HTTP requests for assets
- Caching Twig templates

### Correct Answers
- [0] Excessive use of |raw filter
- [2] Too many HTTP requests for assets

### Explanation
Excessive use of |raw can expose XSS risks and disable default escaping, increasing CPU usage. Too many HTTP requests due to unaggregated assets slow down page rendering. Attaching libraries per template is good practice; global libraries should be minimal. Twig template caching is beneficial, not harmful, to performance. Optimizing markup and asset usage is critical in themes.

## Question 163

How can a theme developer reduce rendering time of a Twig template?

### Options
- Disable all preprocess functions
- Replace Twig with PHP
- Use simple conditionals and loops
- Avoid using variables

### Correct Answers
- [2] Use simple conditionals and loops

### Explanation
Reducing logic complexity in templates by using simple if conditions and efficient for loops improves rendering. Avoid heavy computation in Twig; delegate to preprocess functions. Twig is fast, but excessive logic or nesting slows rendering. Twig should not be replaced with PHP in Drupal 10.  Preprocessing and clean template structure are best practices.

## Question 164

Which of the following can cause slow performance from site configuration? (Choose two)

### Options
- Using Views with unindexed filters
- Enabled caching for views
- Too many blocks with complex visibility rules
- Limiting access by role

### Correct Answers
- [0] Using Views with unindexed filters
- [2] Too many blocks with complex visibility rules

### Explanation
Unindexed filters in Views (e.g., text fields) result in full table scans, increasing load time. Blocks with complex role/path-based visibility are recalculated per request. These configuration choices can degrade performance under load. Role-based access itself is optimized and not a performance bottleneck. Always analyze queries and block rendering overhead.

## Question 165

Where can you monitor caching performance and hits in Drupal?

### Options
- Watchdog logs
- Status report
- Drupal’s caching overview in /admin/reports/cache
- Web profiler toolbar (if enabled)

### Correct Answers
- [3] Web profiler toolbar (if enabled)

### Explanation
When Devel or Web Profiler is enabled, you can see real-time cache hit/miss stats in the toolbar. This helps identify which pages, blocks, or views are being served from cache. It’s useful for debugging render cache and optimizing theme structure. Enable on development only, as it adds overhead in production. Helps in pinpointing missed optimization opportunities.

## Question 166

Which of the following are enabled by default when using Drupal core performance settings? (Choose two)

### Options
- Internal dynamic page caching
- External reverse proxy caching
- CSS aggregation
- Twig auto-reload

### Correct Answers
- [0] Internal dynamic page caching
- [2] CSS aggregation

### Explanation
Internal page caching and asset aggregation are enabled in most default installations. These settings reduce rendering overhead and file size. Reverse proxy caching requires additional configuration. Twig auto-reload is enabled in development mode only, which slightly reduces performance. Proper caching significantly improves scalability and speed.

## Question 167

Which strategy improves performance when rendering a custom block repeatedly?

### Options
- Use BlockBase::build() to disable caching
- Set a cache context and max-age in the block
- Force block rendering through Views
- Use kint() to dump values in templates

### Correct Answers
- [1] Set a cache context and max-age in the block

### Explanation
Setting proper cache metadata like cache_contexts and cache_max-age ensures efficient reuse of rendered blocks. This allows Drupal to cache block output based on context (e.g., route or user role). Disabling caching leads to poor performance. Debugging tools like kint() should not be used in production. Smart caching keeps custom blocks scalable.

## Question 168

How does enabling BigPipe improve Drupal site performance?

### Options
- It combines all JS files
- It streams personalized and static content separately
- It disables the cache
- It minifies CSS

### Correct Answers
- [1] It streams personalized and static content separately

### Explanation
BigPipe streams static content first, then injects dynamic content like user-specific blocks later. This improves perceived performance and speeds up first paint. It's beneficial for sites with personalized content blocks. It requires Dynamic Page Cache to be effective. BigPipe enhances the user experience with faster delivery.

## Question 169

 Which of the following will negatively affect theme performance? (Choose two)

### Options
- Embedding multiple Views in a template
- Using theme suggestions
- Calling url() in Twig instead of path()
- Inline SVG icons

### Correct Answers
- [0] Embedding multiple Views in a template
- [2] Calling url() in Twig instead of path()

### Explanation
Embedding many Views increases DB load and render time, especially without caching. Using url() generates absolute URLs and may disable caching. path() is preferred as it is cache-friendly. Theme suggestions are optimized by Drupal, and inline SVGs are lightweight. Performance-conscious theming avoids redundant queries and complex rendering.

## Question 170

What is the impact of turning off render caching for a theme or layout?

### Options
- Better performance
- Themes load instantly
- Slower rendering and higher server CPU
- No effect at all

### Correct Answers
- [2] Slower rendering and higher server CPU

### Explanation
Render caching stores the output of blocks, Views, and entities. Disabling it forces regeneration of HTML on every request, increasing server load. It’s useful for debugging but not recommended for production. Keeping render cache active is crucial for scaling. Always verify cache settings when deploying themes.

## Question 171

How can you profile slow Views queries for performance optimization?

### Options
- Enable cache_views setting
- Use MySQL EXPLAIN and Views query debugging
- Disable page cache
- Enable Twig debug

### Correct Answers
- [1] Use MySQL EXPLAIN and Views query debugging

### Explanation
Using the Views UI with the "Show the SQL query" option and running EXPLAIN on it reveals indexing and performance. This is essential for identifying bottlenecks caused by filters, relationships, or sorting.  Page cache doesn’t influence View execution profiling. Twig debug is unrelated to query performance. Profiling SQL helps you tune the database.

## Question 172

What does the render_cache service control in Drupal?

### Options
- CSS/JS aggregation
- Twig auto-reloading
- Storage and reuse of render arrays
- Cron behavior

### Correct Answers
- [2] Storage and reuse of render arrays

### Explanation
render_cache manages how Drupal caches renderable content elements like blocks, fields, and Views. It stores the output of render arrays to reduce processing on subsequent requests. It integrates with cache contexts and tags for invalidation. This is a backbone of front-end performance. Misusing it can lead to stale or unoptimized content.

## Question 173

Which tool/module can help analyze front-end performance issues in Drupal? (Choose two)

### Options
- Web Profiler
- Page Manager
- Lighthouse
- Workbench Moderation

### Correct Answers
- [0] Web Profiler
- [2] Lighthouse

### Explanation
Web Profiler shows real-time request profiling, render time, database queries, and cache performance. Google Lighthouse audits front-end metrics like paint time, accessibility, and bundle size. Page Manager and Workbench are unrelated to performance diagnostics. Combining backend and frontend tools provides a full picture. They’re essential for optimizing both theme and content.

## Question 174

What does cache tags in render arrays allow?

### Options
- Tracking which node created the content
- Triggering automatic cache invalidation
- Adding metadata to HTML output
- Grouping user roles

### Correct Answers
- [1] Triggering automatic cache invalidation

### Explanation
Cache tags allow fine-grained invalidation of cached content when related data changes. For example, a block cached with the tag node:5 will be cleared if node 5 is updated. They make Drupal’s cache system smarter and more maintainable. Tags are critical for dynamic content scenarios. They prevent stale content while preserving cache efficiency.

## Question 175

Why should you avoid placing kint() or dump() inside templates in production?

### Options
- They disable caching
- They prevent user logins
- They expose sensitive data and reduce performance
- They break CSS layout

### Correct Answers
- [2] They expose sensitive data and reduce performance

### Explanation
kint() and dump() are debugging tools that expose variable contents and can show sensitive data. They also significantly slow rendering and output size. Using them in production risks both security and performance. These functions should be used only during development. Use conditional logic to restrict their use if needed.

## Question 176

Which of the following practices improves front-end performance in themes? (Choose two)

### Options
- Lazy loading images
- Embedding CSS inline
- Deferring non-essential JavaScript
- Using large background videos as headers

### Correct Answers
- [0] Lazy loading images
- [2] Deferring non-essential JavaScript

### Explanation
Lazy loading reduces initial load time by deferring image downloads. Deferring non-essential JS prevents blocking render-critical paths. Inline CSS increases page size and cannot be cached independently. Heavy videos negatively affect performance unless optimized. Modern Drupal themes should follow web performance best practices.

## Question 177

 Which Drupal config should be changed before deploying to production for optimal performance?

### Options
- Enable Twig debug
- Enable JS aggregation
- Disable BigPipe
- Disable render cache

### Correct Answers
- [1] Enable JS aggregation

### Explanation
JavaScript aggregation reduces file size and requests, essential for production performance. Twig debug and render cache should be disabled/enabled respectively for optimal rendering. BigPipe is beneficial, not harmful, to performance. Always verify Performance settings before production deployment. Caching and aggregation are foundational for a fast site.

## Question 178

How does theme complexity impact performance?

### Options
- More templates reduce performance
- Template overrides always improve speed
- Complexity has no effect
- Fewer stylesheets slow down the site

### Correct Answers
- [0] More templates reduce performance

### Explanation
Each additional template introduces parsing and rendering overhead. Overridden templates must be processed and cached by Drupal. Unnecessary overrides or deeply nested logic can degrade performance. Templates should only be customized when needed. Efficiency is key in high-traffic Drupal installations.

## Question 179

Which render array key determines how long an item remains cached?

### Options
- #context
- #attached
- #cache['max-age']
- #duration

### Correct Answers
- [2] #cache['max-age']

### Explanation
The #cache['max-age'] key sets the time-to-live for cached content. A value of 0 disables caching; Cache::PERMANENT keeps it indefinitely unless invalidated. It works alongside contexts and tags to  define caching logic. Correct use improves rendering speed and data freshness. Always set this when building custom render arrays.

## Question 180

What are common reasons for slow front-end rendering in a Drupal site? (Choose two)

### Options
- Unoptimized Views
- Overuse of preprocess functions
- Too many unaggregated assets
- Minimal Twig logic

### Correct Answers
- [0] Unoptimized Views
- [2] Too many unaggregated assets

### Explanation
Unoptimized Views, especially with joins, sorts, and filters on unindexed fields, increase response time. Too many CSS/JS files create more requests, blocking rendering. Preprocess functions are efficient when used properly. Twig logic should be minimal, but minimal logic alone doesn't cause slowness. Theme optimization must address asset and query efficiency.

## Question 181

Which of the following are common Drupal configuration security risks? (Choose two)

### Options
- Displaying error messages to anonymous users
- Using secure cookies
- Enabling development modules on production
- Setting content types as unpublished by default

### Correct Answers
- [0] Displaying error messages to anonymous users
- [2] Enabling development modules on production

### Explanation
Exposing verbose error messages publicly may reveal sensitive paths or logic flaws. Development modules like Devel or Web Profiler should never be enabled in production. Secure cookies are a good practice, not a risk. Unpublished defaults reduce exposure—not a vulnerability. Misconfigured environments are top causes of exploits.

## Question 182

How should a theme developer prevent XSS when outputting user-provided data in Twig?

### Options
- Use the |t filter
- Use the |raw filter
- Output directly with {{ variable }}
- Escape manually using HTML entities

### Correct Answers
- [0] Use the |t filter

### Explanation
While {{ variable }} escapes content by default, |t ensures the string is also translatable and safe. Avoid |raw for user-generated content, as it disables escaping and invites XSS. Manual escaping is error-prone and not recommended. Twig's autoescape feature combined with |t is the secure method. Always sanitize output for public views.

## Question 183

Which module helps detect security configuration issues in Drupal?

### Options
- Admin Toolbar
- Views
- Security Review
- Configuration Manager

### Correct Answers
- [2] Security Review

### Explanation
The Security Review module checks for common misconfigurations such as file permissions, form IDs, and error message visibility. It’s a helpful tool for auditors and developers to identify red flags. Views and Config Manager aren’t focused on security diagnostics. Security Review doesn’t fix issues but flags them for review. It's useful before launch or updates.

## Question 184

Which of the following should be removed before deploying a Drupal theme to production? (Choose two)

### Options
- Unused template files
- kint() or dump() debug statements
- Theme suggestion hooks
- Twig includes

### Correct Answers
- [0] Unused template files
- [1] kint() or dump() debug statements

### Explanation
Unused or experimental template files may expose routes or logic not meant for live environments. kint() and dump() expose variables and structures that may contain sensitive data. Theme suggestions and includes are part of normal Twig architecture. Clean themes reduce the attack surface and maintain professionalism.

## Question 185

 Which HTTP header can be configured in Drupal to reduce clickjacking attacks?

### Options
- Content-Type
- X-Frame-Options
- Referrer-Policy
- Retry-After

### Correct Answers
- [1] X-Frame-Options

### Explanation
The X-Frame-Options header prevents the site from being embedded in an iframe, which mitigates clickjacking. You can set it to SAMEORIGIN or DENY for best protection. Drupal doesn’t set this by default—you need to use a module or .htaccess. Other headers serve different purposes. This is vital for UI protection.

## Question 186

Which of the following are secure practices for custom block development? (Choose two)

### Options
- Return HTML strings with user input
- Use #markup with filtered text
- Sanitize all dynamic content before rendering
- Disable caching for authenticated users

### Correct Answers
- [1] Use #markup with filtered text
- [2] Sanitize all dynamic content before rendering

### Explanation
Using #markup with a filtered text format ensures user content passes through XSS protection. Always sanitize dynamic or user input before rendering. Returning raw HTML opens attack vectors, and disabling cache for authenticated users impacts performance but doesn’t increase security. Security begins at render logic in custom blocks.

## Question 187

What does the |raw filter in Twig do?

### Options
- Escapes HTML output
- Converts objects to strings
- Disables escaping for the output
- Logs variables to watchdog

### Correct Answers
- [2] Disables escaping for the output

### Explanation
|raw disables Twig’s auto-escaping feature and outputs content as-is. This is dangerous if applied to user-  supplied content and can lead to XSS. It should only be used when you trust the source and have validated the content. It is not used for debugging or logging. Extreme caution is advised with |raw.

## Question 188

How can developers securely provide dynamic attributes (like classes) to templates?

### Options
- Print them using {{ attributes }}
- Concatenate raw strings in Twig
- Use |raw on attributes
- Disable escaping in templates

### Correct Answers
- [0] Print them using {{ attributes }}

### Explanation
Drupal’s attributes object is safe and automatically escapes values. Use {{ attributes.addClass('class- name') }} in preprocess and render with {{ attributes }} in Twig. Avoid string concatenation and |raw, which can introduce unescaped input. Drupal’s render system handles escaping securely. This is the standard theming method.

## Question 189

Which of the following headers improve Drupal’s security posture? (Choose two)

### Options
- Content-Security-Policy
- X-XSS-Protection
- Accept-Encoding
- Last-Modified

### Correct Answers
- [0] Content-Security-Policy
- [1] X-XSS-Protection

### Explanation
Content-Security-Policy limits which sources can be loaded for scripts, images, and styles. X-XSS- Protection instructs browsers to block reflected XSS attempts (although deprecated in some). Accept- Encoding and Last-Modified are not security headers. These headers help mitigate a variety of browser- based attacks.

## Question 190

Which file permissions are recommended for securing settings.php?

### Options
- 755
- 644
- 444
- 777

### Correct Answers
- [2] 444

### Explanation
Setting settings.php to read-only (444) prevents accidental or malicious modifications. This is a best practice after site installation and configuration. 755 allows execution and writing, which is insecure for sensitive config files. Avoid 777 entirely—it grants full access to all users. Secure file permissions are critical on production servers.

## Question 191

Which Drupal core module can expose data if misconfigured?

### Options
- RESTful Web Services
- Toolbar
- Filter
- Node

### Correct Answers
- [0] RESTful Web Services

### Explanation
RESTful Web Services can expose entity data (e.g., users, content) if endpoints are not secured. Always restrict permissions and disable unused routes. The Node module is essential and safe when configured correctly. Misconfigured REST endpoints are a frequent attack vector. Always review access permissions for APIs.

## Question 192

What is the purpose of a nonce (number used once) in web security?

### Options
- Increase page load speed
- Prevent CSRF attacks
- Log errors
- Enable API endpoints

### Correct Answers
- [1] Prevent CSRF attacks

### Explanation
Nonces ensure that requests originate from a legitimate user session and not from a malicious third party. Drupal uses tokens in forms to protect against CSRF (Cross-Site Request Forgery). These tokens are validated on submission. They are time-sensitive and session-bound. They are critical for secure forms and API interactions.

## Question 193

 How can you sanitize custom text input before outputting it in Drupal?

### Options
- htmlspecialchars()
- Html::escape()
- base64_encode()
- Drupal::dump()

### Correct Answers
- [1] Html::escape()

### Explanation
Html::escape() is Drupal’s safe and recommended method to escape strings. It converts HTML characters into entities to prevent code injection. htmlspecialchars() is a PHP alternative but not the Drupal standard. Never use base64 or dump output directly to users. Always sanitize before rendering dynamic input.

## Question 194

Which of the following are safe sources to pass through |raw in a Twig template? (Choose two)

### Options
- Rendered output of a trusted module
- User comments
- Sanitized content using check_markup()
- Output from kint()

### Correct Answers
- [0] Rendered output of a trusted module
- [2] Sanitized content using check_markup()

### Explanation
Trusted modules like Views or Form API output are already sanitized and can be safely passed through |raw. check_markup() applies filtering and validation based on text format. User comments are untrusted and must remain escaped. Debugging output should never appear in production templates. Always validate the context before using |raw.

## Question 195

What is the security risk of not setting a base href in the <head> of a theme?

### Options
- Slower load time
- Incorrect routing of relative URLs
- XSS via external script injection
- Caching issues

### Correct Answers
- [2] XSS via external script injection

### Explanation
Without a base href, attackers can manipulate relative URLs in phishing or XSS attacks. Drupal sets this automatically, but custom themes should not remove it. It ensures internal links are resolved safely.  Omitting this tag could lead to unpredictable and exploitable behavior. Always retain <base href="{{ base_path }}">.

## Question 196

Which hook can alter form security tokens in Drupal?

### Options
- hook_form_alter()
- hook_token_alter()
- hook_form_FORM_ID_alter()
- You should not alter form security tokens

### Correct Answers
- [3] You should not alter form security tokens

### Explanation
Form tokens are essential for CSRF protection and should never be altered or disabled. They ensure the form submission is from a valid user session. Customizing or removing these exposes your site to forgery attacks. If token logic needs extension, use safe APIs. Token tampering is a serious security violation.

## Question 197

Which modules can help enforce HTTPS in a Drupal site?

### Options
- Secure Pages
- BigPipe
- Shield
- HSTS

### Correct Answers
- [0] Secure Pages
- [3] HSTS

### Explanation
Secure Pages (deprecated but still relevant) can force HTTPS on selected pages. HSTS (HTTP Strict Transport Security) headers prevent browsers from connecting over HTTP. BigPipe improves rendering speed, not transport security. Shield limits site access via basic auth. Combined, they protect data in transit.

## Question 198

Which of the following should you avoid in a Drupal theme? (Choose two)

### Options
- Including external scripts via HTTP
- Using drupalSettings for passing secure data
- Relying on file path user input
- Using global CDN libraries over HTTPS

### Correct Answers
- [0] Including external scripts via HTTP
- [2] Relying on file path user input

### Explanation
Loading scripts over HTTP exposes them to man-in-the-middle attacks and breaks HTTPS policies. File paths based on user input can be exploited for directory traversal or injection. drupalSettings is fine for public configuration, not secrets. CDN scripts over HTTPS are acceptable with proper integrity checks. Theme assets must be strictly validated.

## Question 199

How does Drupal prevent cross-site request forgery (CSRF) in forms?

### Options
- JavaScript validation
- CAPTCHA
- Unique token per form
- Session timestamping

### Correct Answers
- [2] Unique token per form

### Explanation
Each form in Drupal includes a hidden token tied to the user session. It must match on submission or the request is rejected. This protects against unauthorized submissions from external origins. It is a core part of Form API. No JS or CAPTCHA is required for this defense.

## Question 200

Which security update policy should be followed for contributed themes and modules?

### Options
- Wait until the next major release
- Update only if bugs are found
- Follow [SA-CONTRIB] advisories and update immediately
- Skip updates for unused features

### Correct Answers
- [2] Follow [SA-CONTRIB] advisories and update immediately

### Explanation
Drupal security advisories marked [SA-CONTRIB] indicate contributed module vulnerabilities. Such updates should be applied immediately, even if the issue seems minor. Waiting increases exposure risk. Even unused features can be exploited if enabled. Automated tools can track and apply critical updates.

