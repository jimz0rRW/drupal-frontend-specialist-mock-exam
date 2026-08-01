# Acquia Certified Drupal Developer Practice Questions

## Jump to Section:

- [Fundamental Web Development Concepts](#fundamental-web-development-concepts)
- [Site Building](#site-building)
- [Front end Development (Theming)](#front-end-development-theming)
- [Back end Development (Coding)](#back-end-development-coding)

## Fundamental Web Development Concepts

### Question 1

**Domain:** Fundamental Web Development Concepts

A developer is debugging why a form's data never reaches the server. Which HTTP methods are most commonly used to submit HTML forms, and how do they differ?

### Options
- GET appends data to the URL query string (idempotent, bookmarkable); POST sends data in the request body (used for state-changing operations)
- GET sends data in the body; POST appends to the URL
- PUT is used for all HTML forms by default
- HTML forms can only use DELETE

### Correct Answers
- [0] GET appends data to the URL query string (idempotent, bookmarkable); POST sends data in the request body (used for state-changing operations)

### Explanation
HTML forms support GET and POST. GET encodes fields in the URL (visible, limited length, safe for searches); POST carries the body, appropriate for creating/updating data.

### Question 2

**Domain:** Fundamental Web Development Concepts

Which HTTP status codes should a Drupal developer recognize when diagnosing routing problems? (Choose two)

### Options
- 404 Not Found for missing routes/resources and 403 Forbidden for access-denied
- 301/302 redirects for moved resources
- 200 OK means the server crashed
- 500 is used for successful logins

### Correct Answers
- [0] 404 Not Found for missing routes/resources and 403 Forbidden for access-denied
- [1] 301/302 redirects for moved resources

### Explanation
404 (not found), 403 (access denied), and 3xx redirects are everyday Drupal responses; 2xx success and 5xx server errors complete the core vocabulary.

### Question 3

**Domain:** Fundamental Web Development Concepts

What is the purpose of the <!DOCTYPE html> declaration in an HTML5 document?

### Options
- It triggers standards mode rendering in browsers instead of quirks mode
- It imports the HTML5 JavaScript APIs
- It declares the page's character encoding
- It links the CSS stylesheet

### Correct Answers
- [0] It triggers standards mode rendering in browsers instead of quirks mode

### Explanation
The doctype switches browsers into standards mode. Character encoding is declared via <meta charset>, and CSS via <link> — separate concerns.

### Question 4

**Domain:** Fundamental Web Development Concepts

Which HTML element should wrap the unique main content of a page for accessibility and semantics?

### Options
- <main>
- <div class='main-content'>
- <body>
- <section role='banner'>

### Correct Answers
- [0] <main>

### Explanation
The <main> landmark element identifies primary content for assistive technology; one per page. Landmark semantics matter in Drupal templates (Olivero/Claro use them).

### Question 5

**Domain:** Fundamental Web Development Concepts

A themer wants a style rule to target only direct children of .item-list. Which CSS selector is correct?

### Options
- .item-list > .item
- .item-list .item
- .item-list + .item
- .item-list ~ .item

### Correct Answers
- [0] .item-list > .item

### Explanation
The child combinator (>) matches direct children only; a space matches any descendant; + the next sibling; ~ all following siblings.

### Question 6

**Domain:** Fundamental Web Development Concepts

Given conflicting CSS rules, which wins for the same element: an ID selector or a class selector with higher specificity count elsewhere?

### Options
- Specificity order is inline styles > IDs > classes/attributes/pseudo-classes > elements; an ID beats classes regardless of count
- The rule appearing first in the file always wins
- Class selectors always beat ID selectors
- Element selectors beat everything

### Correct Answers
- [0] Specificity order is inline styles > IDs > classes/attributes/pseudo-classes > elements; an ID beats classes regardless of count

### Explanation
CSS specificity hierarchy: inline > ID > class/attribute/pseudo-class > type. With equal specificity, the later rule wins (source order).

### Question 7

**Domain:** Fundamental Web Development Concepts

What does 'display: grid' with 'grid-template-columns: repeat(3, 1fr)' create?

### Options
- A grid container with three equal-width columns sharing available space
- A three-row layout with fixed heights
- A flexbox with wrapping rows
- A table with 3% column widths

### Correct Answers
- [0] A grid container with three equal-width columns sharing available space

### Explanation
CSS Grid with fr units distributes free space proportionally; repeat(3, 1fr) yields three equal tracks — common for card layouts in Drupal themes.

### Question 8

**Domain:** Fundamental Web Development Concepts

How does 'position: sticky' behave differently from 'position: fixed'?

### Options
- Sticky toggles between relative and fixed based on scroll position within its containing block; fixed is always positioned relative to the viewport
- They are identical in all browsers
- Sticky removes the element from flow; fixed does not
- Fixed works only inside tables

### Correct Answers
- [0] Sticky toggles between relative and fixed based on scroll position within its containing block; fixed is always positioned relative to the viewport

### Explanation
Sticky elements scroll normally until a threshold (e.g. top: 0) then stick within their container — handy for sticky admin headers without JS.

### Question 9

**Domain:** Fundamental Web Development Concepts

Which JavaScript approach attaches one handler to respond to clicks on many dynamically added list items?

### Options
- Event delegation: listen on a parent container and check event.target
- One inline onclick attribute per item
- Polling the DOM every second
- Rebinding handlers in a setInterval loop

### Correct Answers
- [0] Event delegation: listen on a parent container and check event.target

### Explanation
Delegation leverages event bubbling so a single parent listener handles current and future children — efficient and compatible with AJAX-inserted Drupal content.

### Question 10

**Domain:** Fundamental Web Development Concepts

What is the output of console.log(typeof null) in JavaScript, a famous language quirk?

### Options
- 'object'
- 'null'
- 'undefined'
- 'nil'

### Correct Answers
- [0] 'object'

### Explanation
typeof null === 'object' is a long-standing JavaScript quirk retained for backward compatibility. Null-checking should use strict comparison instead.

### Question 11

**Domain:** Fundamental Web Development Concepts

What is the difference between '==' and '===' in JavaScript?

### Options
- '==' performs type coercion before comparing; '===' compares without coercion (strict equality of value and type)
- They are interchangeable
- '===' allows type coercion; '==' does not
- '===' only works on objects

### Correct Answers
- [0] '==' performs type coercion before comparing; '===' compares without coercion (strict equality of value and type)

### Explanation
Loose equality coerces ('5' == 5 is true); strict equality doesn't ('5' === 5 is false). Drupal JS coding standards require strict comparisons.

### Question 12

**Domain:** Fundamental Web Development Concepts

Which PHP construct imports functions/classes from another namespace so they can be used without a fully qualified name?

### Options
- The 'use' statement at the top of the file
- The 'include' statement
- The 'extends' keyword
- The 'require_once' function

### Correct Answers
- [0] The 'use' statement at the top of the file

### Explanation
'use' aliases namespaced symbols (e.g. use Drupal\node\Entity\Node;). include/require load files; extends declares inheritance — different mechanisms.

### Question 13

**Domain:** Fundamental Web Development Concepts

What do PSR-4 autoloading rules require of a Drupal module's classes?

### Options
- Classes live in the src/ directory with namespaces matching the module machine name (Drupal\module_name\...), one class per file named after the class
- All classes must be in one file called module.php
- Classes must not use namespaces
- Autoloading requires a custom spl_autoload_register in every module

### Correct Answers
- [0] Classes live in the src/ directory with namespaces matching the module machine name (Drupal\module_name\...), one class per file named after the class

### Explanation
Drupal registers module namespaces as Drupal\{module}\ → {module}/src/. PSR-4 maps sub-namespaces to subdirectories and class names to file names.

### Question 14

**Domain:** Fundamental Web Development Concepts

In PHP OOP, what does the 'final' keyword do when applied to a class?

### Options
- Prevents the class from being extended/subclassed
- Makes the class load last
- Marks the class as deprecated
- Deletes the class after first use

### Correct Answers
- [0] Prevents the class from being extended/subclassed

### Explanation
final classes cannot be extended; final methods cannot be overridden. Drupal uses final to signal closed extension points (with @internal or explicit APIs).

### Question 15

**Domain:** Fundamental Web Development Concepts

What is a PHP interface used for?

### Options
- Defining a contract of methods that implementing classes must provide, without implementation code
- Storing shared configuration values
- Automatically generating database tables
- Registering JavaScript libraries

### Correct Answers
- [0] Defining a contract of methods that implementing classes must provide, without implementation code

### Explanation
Interfaces declare method signatures only. Drupal services are typed against interfaces (e.g. EntityTypeManagerInterface) so implementations can be swapped.

### Question 16

**Domain:** Fundamental Web Development Concepts

What is dependency injection, and why does Drupal 11 use it?

### Options
- Objects receive their collaborators via constructor arguments instead of creating them, enabling testability and swappable services defined in *.services.yml
- A way to inject SQL faster
- A JavaScript-only pattern irrelevant to Drupal
- A database replication technique

### Correct Answers
- [0] Objects receive their collaborators via constructor arguments instead of creating them, enabling testability and swappable services defined in *.services.yml

### Explanation
Drupal's service container wires dependencies declaratively. Controllers/plugins use create() with the container; services get constructor injection — unit-testable design.

### Question 17

**Domain:** Fundamental Web Development Concepts

Which HTTP header tells browsers to only send cookies over HTTPS?

### Options
- Set-Cookie with the Secure attribute
- Content-Type: secure
- X-Frame-Options
- Cache-Control: private

### Correct Answers
- [0] Set-Cookie with the Secure attribute

### Explanation
The Secure cookie attribute restricts cookies to HTTPS connections; HttpOnly hides them from JavaScript; SameSite mitigates CSRF — key web security headers.

### Question 18

**Domain:** Fundamental Web Development Concepts

What does CORS control on the web?

### Options
- Whether browsers permit cross-origin requests from one origin's page to another origin's resources via response headers like Access-Control-Allow-Origin
- The color scheme of error pages
- Server CPU scheduling
- Database connection pooling

### Correct Answers
- [0] Whether browsers permit cross-origin requests from one origin's page to another origin's resources via response headers like Access-Control-Allow-Origin

### Explanation
CORS headers gate cross-origin fetch/XHR. Decoupled Drupal front-ends on other domains need CORS configuration for API requests.

### Question 19

**Domain:** Fundamental Web Development Concepts

In Git, what does 'git rebase main' do to your feature branch?

### Options
- Replays your branch's commits on top of the latest main, creating a linear history
- Deletes the feature branch
- Squashes all branches into the stash
- Pushes the branch to the remote automatically

### Correct Answers
- [0] Replays your branch's commits on top of the latest main, creating a linear history

### Explanation
Rebase moves/reapplies commits onto a new base for clean history (vs merge commits). It rewrites hashes, so avoid rebasing shared branches.

### Question 20

**Domain:** Fundamental Web Development Concepts

What problem does Composer's composer.lock file solve?

### Options
- It pins exact dependency versions (with hashes) so every environment installs identical code
- It speeds up PHP execution
- It compiles Twig templates
- It stores user credentials securely

### Correct Answers
- [0] It pins exact dependency versions (with hashes) so every environment installs identical code

### Explanation
The lock file records the resolved dependency tree; composer install reproduces it exactly, ensuring dev/stage/prod parity for Drupal projects.

### Question 21

**Domain:** Fundamental Web Development Concepts

What does the SQL JOIN clause do?

### Options
- Combines rows from two tables based on a related column/condition
- Deletes rows from both tables
- Renames columns permanently
- Creates a new database user

### Correct Answers
- [0] Combines rows from two tables based on a related column/condition

### Explanation
JOINs (INNER/LEFT) relate tables — e.g. node_field_data to users on uid. Drupal's database API builds joins abstractly for cross-database support.

### Question 22

**Domain:** Fundamental Web Development Concepts

What is the purpose of an index on a database column?

### Options
- It speeds up lookups/filtering on that column at the cost of extra storage and slower writes
- It encrypts the column
- It prevents null values
- It translates column contents

### Correct Answers
- [0] It speeds up lookups/filtering on that column at the cost of extra storage and slower writes

### Explanation
Indexes accelerate WHERE/ORDER BY on indexed columns. Drupal schema API declares indexes in hook_schema/custom entity base field definitions.

### Question 23

**Domain:** Fundamental Web Development Concepts

Which PHP superglobal contains parsed query string parameters like ?page=2?

### Options
- $_GET
- $_POST
- $_FILES
- $_ENV

### Correct Answers
- [0] $_GET

### Explanation
$_GET holds URL parameters; $_POST form bodies; $_REQUEST both plus cookies; $_SESSION session data. In Drupal, prefer Request objects over raw superglobals.

### Question 24

**Domain:** Fundamental Web Development Concepts

What is JSON, and why is it central to decoupled Drupal?

### Options
- A language-independent text format for structured data (objects/arrays/scalars) used as the payload format for APIs like JSON:API
- A PHP-only serialization format
- A compressed image format
- A templating language

### Correct Answers
- [0] A language-independent text format for structured data (objects/arrays/scalars) used as the payload format for APIs like JSON:API

### Explanation
JSON is the lingua franca of web APIs; Drupal's JSON:API and REST exports serve entities as JSON for JavaScript front-ends and integrations.

### Question 25

**Domain:** Fundamental Web Development Concepts

In PHP, what does 'null coalescing' operator ?? do in $a = $b ?? 'default';?

### Options
- Assigns $b if it is set and not null, otherwise 'default', without notices
- Always assigns 'default'
- Concatenates the two values
- Compares types strictly

### Correct Answers
- [0] Assigns $b if it is set and not null, otherwise 'default', without notices

### Explanation
?? avoids isset() ternaries for possibly-undefined keys (PHP 7+). ??= assigns in place. Common in modern Drupal code for optional values.

### Question 26

**Domain:** Fundamental Web Development Concepts

What is the role of the PHP function 'array_map'?

### Options
- Applies a callback to each element and returns the resulting array
- Sorts the array in place
- Removes duplicates
- Flattens nested arrays

### Correct Answers
- [0] Applies a callback to each element and returns the resulting array

### Explanation
array_map transforms elements; array_filter selects; array_reduce aggregates — functional staples alongside foreach in Drupal data processing.

### Question 27

**Domain:** Fundamental Web Development Concepts

Which statement about PHP's 'static' methods is true?

### Options
- They belong to the class rather than an instance and are called as ClassName::method(); they cannot use $this
- They are faster than all instance methods by design
- They can access $this normally
- They are only for private methods

### Correct Answers
- [0] They belong to the class rather than an instance and are called as ClassName::method(); they cannot use $this

### Explanation
Static methods operate without instance state. Drupal's create() factories are static because the container isn't available until the object is built.

### Question 28

**Domain:** Fundamental Web Development Concepts

What does 'DRY' mean as a software principle?

### Options
- Don't Repeat Yourself: centralize logic so each piece of knowledge has one authoritative representation
- Deploy Releases Yearly
- Delete Redundant YAML
- Debug, Refactor, Yield

### Correct Answers
- [0] Don't Repeat Yourself: centralize logic so each piece of knowledge has one authoritative representation

### Explanation
DRY underpins Drupal practices: reusable services, base themes, config in code, and shared libraries instead of copy-pasted logic.

### Question 29

**Domain:** Fundamental Web Development Concepts

In responsive design, what do media queries enable?

### Options
- Conditional CSS based on viewport characteristics like width, height, orientation, or DPR
- Querying media entities in Drupal
- Playing audio files conditionally
- Server-side device detection

### Correct Answers
- [0] Conditional CSS based on viewport characteristics like width, height, orientation, or DPR

### Explanation
@media rules adapt layouts per breakpoint. Drupal themes declare breakpoints in *.breakpoints.yml for responsive image integration.

### Question 30

**Domain:** Fundamental Web Development Concepts

What is the purpose of the 'alt' attribute on <img>?

### Options
- Provides alternative text for screen readers and when the image cannot load
- Sets the image's tooltip title
- Declares the image license
- Improves the image's compression

### Correct Answers
- [0] Provides alternative text for screen readers and when the image cannot load

### Explanation
Alt text is an accessibility requirement (WCAG). Drupal's image fields enforce alt text by default for this reason.

### Question 31

**Domain:** Fundamental Web Development Concepts

Which CSS unit is relative to the root element's font size?

### Options
- rem
- em
- vw
- px

### Correct Answers
- [0] rem

### Explanation
rem references the root font size (stable across nesting); em references the current element's inherited size (compounds); vw/vh reference viewport dimensions.

### Question 32

**Domain:** Fundamental Web Development Concepts

What does 'async' vs 'defer' on a <script> tag control?

### Options
- Both download without blocking parsing; async executes as soon as loaded (order not guaranteed), defer executes after parsing in document order
- They are identical
- defer blocks parsing; async does not load the file
- async is only for CSS files

### Correct Answers
- [0] Both download without blocking parsing; async executes as soon as loaded (order not guaranteed), defer executes after parsing in document order

### Explanation
Script loading attributes affect render-blocking. Drupal libraries aggregate JS; understanding load timing helps avoid FOUC and dependency races.

### Question 33

**Domain:** Fundamental Web Development Concepts

What is a closure (anonymous function) in PHP?

### Options
- A function without a name, assignable to variables and able to capture outer variables via 'use'
- A class that closes a database
- A deprecated feature removed in PHP 8
- Only arrow functions in JavaScript

### Correct Answers
- [0] A function without a name, assignable to variables and able to capture outer variables via 'use'

### Explanation
Closures (function () use ($x) {...}) and arrow functions (fn) are callables used widely in Drupal for array callbacks and lazy builders.

### Question 34

**Domain:** Fundamental Web Development Concepts

Which PHP error level constant reports all errors including notices and deprecations?

### Options
- E_ALL
- E_ERROR only
- E_PARSE only
- E_NONE

### Correct Answers
- [0] E_ALL

### Explanation
E_ALL covers every error level; development uses error_reporting(E_ALL) with display on; production hides display but still logs.

### Question 35

**Domain:** Fundamental Web Development Concepts

What is the function of the PHP 'trait' feature?

### Options
- Horizontal reuse: bundles of methods that can be composed into multiple unrelated classes
- A replacement for all classes
- A way to encrypt code
- A database migration tool

### Correct Answers
- [0] Horizontal reuse: bundles of methods that can be composed into multiple unrelated classes

### Explanation
Traits share method implementations across classes without inheritance. Drupal uses them for common functionality (e.g. StringTranslationTrait's t()).

### Question 36

**Domain:** Fundamental Web Development Concepts

In a request/response cycle, what is middleware?

### Options
- Software layers that process the request on the way in and the response on the way out (e.g. Symfony's HTTP kernel stack)
- A database driver
- A CSS preprocessor
- A Git hook

### Correct Answers
- [0] Software layers that process the request on the way in and the response on the way out (e.g. Symfony's HTTP kernel stack)

### Explanation
Drupal wraps Symfony's HttpKernel with middlewares (page cache, negotiation). Understanding the stack clarifies where caching and negotiation happen.

### Question 37

**Domain:** Fundamental Web Development Concepts

What does the 'yield' keyword do in a PHP function?

### Options
- Turns the function into a generator producing values lazily, one at a time
- Halts PHP execution permanently
- Exports variables to JavaScript
- Declares a constant

### Correct Answers
- [0] Turns the function into a generator producing values lazily, one at a time

### Explanation
Generators iterate large sets without loading everything into memory — useful in migrations and batch-style processing.

### Question 38

**Domain:** Fundamental Web Development Concepts

Which is true about PHP 8.3 (required by Drupal 11)? (Choose two)

### Options
- Drupal 11 requires a modern PHP version (8.3+), leveraging typed properties, enums, fibers, and JIT improvements
- PHP 8 introduced features like named arguments, attributes, union types, and match expressions used across Drupal core
- Drupal 11 runs on PHP 5.6
- PHP no longer supports OOP

### Correct Answers
- [0] Drupal 11 requires a modern PHP version (8.3+), leveraging typed properties, enums, fibers, and JIT improvements
- [1] PHP 8 introduced features like named arguments, attributes, union types, and match expressions used across Drupal core

### Explanation
Drupal 11's baseline is PHP 8.3. Core increasingly adopts PHP 8 constructs (attributes for plugins, enums), so familiarity with modern PHP is expected.

### Question 39

**Domain:** Fundamental Web Development Concepts

What is the difference between 'session' and 'cookie' storage in web apps?

### Options
- Cookies store data client-side (sent each request); sessions store data server-side keyed by a session cookie ID
- Sessions are stored in the browser; cookies on the server
- They are the same mechanism
- Cookies cannot expire

### Correct Answers
- [0] Cookies store data client-side (sent each request); sessions store data server-side keyed by a session cookie ID

### Explanation
Drupal keeps session data server-side (database) with a session cookie identifying the user — foundational to authentication and anonymous session tracking.

### Question 40

**Domain:** Fundamental Web Development Concepts

Which of the following are valid ways to add classes conditionally in plain JavaScript? (Choose two)

### Options
- element.classList.add('active') / .toggle('active', condition)
- element.className = condition ? 'active' : ''
- element.addClass('active') in vanilla JS
- element.style = 'active'

### Correct Answers
- [0] element.classList.add('active') / .toggle('active', condition)
- [1] element.className = condition ? 'active' : ''

### Explanation
classList (add/remove/toggle/contains) is the standard DOM API for class manipulation; addClass is jQuery, not vanilla JS.

## Site Building

### Question 41

**Domain:** Site Building

A developer is modeling a 'Course' entity with lessons, instructors, and categories. Which Drupal concepts map to each? (Choose two)

### Options
- Lessons and instructors as entity references to other content/user entities
- Categories as a taxonomy vocabulary referenced by a term field
- Lessons stored as raw JSON in the body field
- Instructors as CSS classes on the page

### Correct Answers
- [0] Lessons and instructors as entity references to other content/user entities
- [1] Categories as a taxonomy vocabulary referenced by a term field

### Explanation
Structured relationships are modeled with entity reference fields (content, users) and taxonomy for classification — giving queryable, reusable data for views and code.

### Question 42

**Domain:** Site Building

What is the programmatic equivalent of creating a field on a content type in the UI?

### Options
- Creating field storage (FieldStorageConfig) and field instance (FieldConfig) configuration entities, exported to YAML
- Writing raw INSERT statements into the node table
- Editing settings.php only
- Fields cannot be created programmatically

### Correct Answers
- [0] Creating field storage (FieldStorageConfig) and field instance (FieldConfig) configuration entities, exported to YAML

### Explanation
Fields are configuration: field.storage.node.field_x.yml (storage) and field.field.node.article.field_x.yml (instance). Modules ship them in config/install.

### Question 43

**Domain:** Site Building

A view needs 'Published within the last 30 days' filtering. How is this expressed in the Views UI and in code?

### Options
- A date filter with a relative value ('-30 days'/'now'); in code, a condition on the created field with a computed timestamp
- Only via SQL UNION queries
- Views cannot filter by date ranges
- By deleting old nodes nightly

### Correct Answers
- [0] A date filter with a relative value ('-30 days'/'now'); in code, a condition on the created field with a computed timestamp

### Explanation
Relative date filters work in UI and in entity queries (created >= strtotime('-30 days')), keeping rolling windows automatic.

### Question 44

**Domain:** Site Building

How do you add a custom sort to a view programmatically (e.g. by a computed value)?

### Options
- Implement hook_views_query_alter() or a custom views sort plugin, depending on complexity
- Edit the views module files directly
- Sorting cannot be altered
- Use JavaScript on the client only

### Correct Answers
- [0] Implement hook_views_query_alter() or a custom views sort plugin, depending on complexity

### Explanation
Views is extensible: hooks alter the query for one-off changes; plugins (sort/filter/field) package reusable behaviors for the UI.

### Question 45

**Domain:** Site Building

What does hook_ENTITY_TYPE_presave() let a module do?

### Options
- Act on an entity just before it is saved (validate or adjust field values, populate derived data)
- Render the entity's HTML
- Delete the entity type
- Register a new theme

### Correct Answers
- [0] Act on an entity just before it is saved (validate or adjust field values, populate derived data)

### Explanation
Entity hooks like presave/insert/update intercept the entity lifecycle, used for computed fields, notifications, and enforcing business rules.

### Question 46

**Domain:** Site Building

You must limit a 'Dealership' reference field to terms of the 'Brands' vocabulary only. Where is this configured?

### Options
- In the field storage/instance settings: target type taxonomy term with the Brands vocabulary checked
- In the theme layer
- Via JavaScript hiding options
- It cannot be constrained

### Correct Answers
- [0] In the field storage/instance settings: target type taxonomy term with the Brands vocabulary checked

### Explanation
Reference field settings choose the target entity type and bundles (or a view-based reference method), constraining selectable values at the data level.

### Question 47

**Domain:** Site Building

A view of nodes should include rows from two content types, Articles and Recipes, with different filters per type. What is the robust approach?

### Options
- One view filtered to both types with grouped OR filter conditions, or reconsider the model; complex divergent logic may need separate views
- Views can only query one content type ever
- Use two databases
- Merge the types into one

### Correct Answers
- [0] One view filtered to both types with grouped OR filter conditions, or reconsider the model; complex divergent logic may need separate views

### Explanation
Views filter groups support AND/OR logic across multiple types; when logic diverges heavily, separate displays or a shared base view keeps things maintainable.

### Question 48

**Domain:** Site Building

How are default views (like /admin/content) overridden to add a custom column?

### Options
- The admin views are regular views; edit them in Views UI and save, creating a site-specific config override
- They cannot be changed
- Only by hacking core
- By writing a new admin theme

### Correct Answers
- [0] The admin views are regular views; edit them in Views UI and save, creating a site-specific config override

### Explanation
Core's admin listings are views config; editing them overrides the shipped defaults (tracked in config sync) — no core hacks required.

### Question 49

**Domain:** Site Building

A module needs to add an operation link to each row on the Content admin page. Which mechanism applies?

### Options
- Views' operation/bulk field handlers or hook_entity_operation() additions surfaced via admin views
- Editing node.module directly
- Operations links are hard-coded forever
- Using CSS pseudo-elements

### Correct Answers
- [0] Views' operation/bulk field handlers or hook_entity_operation() additions surfaced via admin views

### Explanation
Entity operations (edit/delete) come from entity list builders and hooks; admin views render them via the operations field handler.

### Question 50

**Domain:** Site Building

What is the difference between 'Manage display' view modes and custom view modes created at /admin/structure/display-modes?

### Options
- Built-in modes (full, teaser) ship with entity types; custom modes add new render contexts you enable per bundle and select in views/formatters
- Custom modes are stored in JavaScript
- Built-in modes cannot be configured
- There is no difference

### Correct Answers
- [0] Built-in modes (full, teaser) ship with entity types; custom modes add new render contexts you enable per bundle and select in views/formatters

### Explanation
View modes are config entities (core.entity_view_mode.node.card.yml) enabling per-bundle display variations selectable anywhere entities render.

### Question 51

**Domain:** Site Building

A 'Magazine' site needs articles co-edited by multiple authors with per-revision notes. Which core features combine?

### Options
- Node revisions with revision log messages plus content moderation workflows and transition permissions
- A shared text field for notes
- Multiple user accounts per author name
- Sticky flags

### Correct Answers
- [0] Node revisions with revision log messages plus content moderation workflows and transition permissions

### Explanation
Revision logs document each change; workflows gate transitions per role — the core editorial toolkit for collaborative publishing.

### Question 52

**Domain:** Site Building

How would you expose an existing 'Events' view as a JSON feed for a mobile app using core?

### Options
- Add a REST export display with a JSON serializer to the view (RESTful Web Services configured), or enable JSON:API for the entity type
- Rename the view to .json
- Use the RSS row style with JSON checked
- Views cannot output JSON

### Correct Answers
- [0] Add a REST export display with a JSON serializer to the view (RESTful Web Services configured), or enable JSON:API for the entity type

### Explanation
Views REST export displays serialize rows to JSON/hal_json; JSON:API provides full standardized CRUD over entities — both core-supported.

### Question 53

**Domain:** Site Building

What does the 'Sticky' contextual filter option 'Specify validation criteria' do in Views?

### Options
- Validates the argument (e.g. must be a term from a specific vocabulary) and defines fallback actions (404, summary, all results) when validation fails
- It makes the filter sticky in the UI
- It caches the filter forever
- It blocks anonymous users

### Correct Answers
- [0] Validates the argument (e.g. must be a term from a specific vocabulary) and defines fallback actions (404, summary, all results) when validation fails

### Explanation
Contextual filter validation guards bad input and chooses behavior on failure — critical for robust dynamic pages like /guides/{term}.

### Question 54

**Domain:** Site Building

A 'Products' listing needs performance-conscious handling of 50k nodes. Which site-building practices help? (Choose two)

### Options
- Paged views with time-based caching and indexed/simplified filters
- Lazy-loading images and responsive image styles in rows
- Rendering 50k rows on one page with no pager
- Disabling all caches for freshness

### Correct Answers
- [0] Paged views with time-based caching and indexed/simplified filters
- [1] Lazy-loading images and responsive image styles in rows

### Explanation
Large datasets demand pagination, caching, and lean queries on the server, plus asset discipline (lazy images, derivatives) on the client.

### Question 55

**Domain:** Site Building

How do you make a block appear only on node pages of type 'Article' when placing it via Block layout?

### Options
- Use the 'Content types' visibility condition restricted to Article
- Rename the block to include 'article'
- Blocks cannot be type-restricted
- Use a cron rule

### Correct Answers
- [0] Use the 'Content types' visibility condition restricted to Article

### Explanation
Block visibility conditions (content type, pages, roles, languages) control placement context without code; condition plugins extend them further.

### Question 56

**Domain:** Site Building

What does a 'Menu' block's 'Initial menu level' and 'Depth' settings control?

### Options
- Which subtree of the menu renders (starting level) and how many levels deep it expands
- The menu's color depth
- User permission levels
- The cache lifetime

### Correct Answers
- [0] Which subtree of the menu renders (starting level) and how many levels deep it expands

### Explanation
Menu blocks can render sub-menus from a chosen level (e.g. section navigation starting at level 2) with depth limits — key for sectional nav patterns.

### Question 57

**Domain:** Site Building

A 'Documentation' hierarchy of pages needs prev/next book-style navigation. What core module provides this?

### Options
- The Book module (core), organizing nodes into hierarchical book outlines with navigation
- The Menu module alone
- The Comment module
- The Ban module

### Correct Answers
- [0] The Book module (core), organizing nodes into hierarchical book outlines with navigation

### Explanation
Book organizes content into tree-structured manuals with previous/up/next links and an outline tab on nodes — ideal for documentation sites.

### Question 58

**Domain:** Site Building

How can editors change the order of menu links without developer help?

### Options
- Drag-and-drop ordering in the Menu UI at /admin/structure/menu
- Editing menu links in the database
- Reordering is random only
- Via the theme CSS order property

### Correct Answers
- [0] Drag-and-drop ordering in the Menu UI at /admin/structure/menu

### Explanation
Menu link weight/parentage is editor-managed in the UI; menus render as blocks whose order follows the configured tree.

### Question 59

**Domain:** Site Building

What is the purpose of the 'URL alias' bulk generation in Pathauto?

### Options
- Generate or update aliases for many entities at once from patterns (Bulk generate tab)
- Delete all aliases
- Convert aliases to QR codes
- Export aliases to CSV only

### Correct Answers
- [0] Generate or update aliases for many entities at once from patterns (Bulk generate tab)

### Explanation
Pathauto's bulk generate backfills aliases after patterns change, with options to update existing aliases per entity type.

### Question 60

**Domain:** Site Building

A 'Distributor' role should edit only their own company's node. Which approaches implement per-entity access? (Choose two)

### Options
- Grant 'edit own content' and set authorship, or use a reference-based access approach via custom hook_node_access()/contributed access modules
- Contributed modules like Content Access or Group for record-level access control
- Give everyone 'edit any content'
- Hide edit links in CSS only

### Correct Answers
- [0] Grant 'edit own content' and set authorship, or use a reference-based access approach via custom hook_node_access()/contributed access modules
- [1] Contributed modules like Content Access or Group for record-level access control

### Explanation
Own/any permissions cover simple cases; record-level access by company uses node access hooks/grants or Group-style modules — CSS hiding is not security.

### Question 61

**Domain:** Site Building

How is a custom 'Alert' block type with a severity field rendered differently per severity without template code?

### Options
- Field-based CSS classes via Manage display (field formatter class settings) or template suggestions; purely UI-driven options are limited to formatter settings
- Severity changes require a new block type each time
- It is impossible
- Only via JavaScript rewrites

### Correct Answers
- [0] Field-based CSS classes via Manage display (field formatter class settings) or template suggestions; purely UI-driven options are limited to formatter settings

### Explanation
Formatter settings and template suggestions (block--alert--severity.html.twig via hooks) style variants; the UI alone covers formatter-level tweaks.

### Question 62

**Domain:** Site Building

You must ensure 'field_sku' is unique across products. Core field settings can't; what are the developer options? (Choose two)

### Options
- Add a custom validation constraint on the field/entity (Constraint plugin) checking for duplicates
- Enforce a unique index in a custom schema or validate in a presave hook with an entity query
- Ask editors to be careful
- Make the field required, which also makes it unique

### Correct Answers
- [0] Add a custom validation constraint on the field/entity (Constraint plugin) checking for duplicates
- [1] Enforce a unique index in a custom schema or validate in a presave hook with an entity query

### Explanation
Uniqueness is a validation concern: Symfony-style constraint validators (clean, testable) or presave checks with entity queries guard duplicates.

### Question 63

**Domain:** Site Building

What does hook_form_alter() commonly change on node forms?

### Options
- Element properties (titles, descriptions, #states, #access), default values, validation/submit handlers, and field ordering
- The site's theme only
- Database schema directly
- User passwords

### Correct Answers
- [0] Element properties (titles, descriptions, #states, #access), default values, validation/submit handlers, and field ordering

### Explanation
hook_form_alter()/hook_form_FORM_ID_alter() customize forms safely: conditional visibility with #states, extra validators, and altered submit behavior.

### Question 64

**Domain:** Site Building

Which Form API property shows/hides a field based on another field's value without custom JS?

### Options
- #states (e.g. 'visible' => [':input[name="field_type"]' => ['value' => 'event']])
- #hidden_toggle
- #ajax_render only
- #theme_wrappers

### Correct Answers
- [0] #states (e.g. 'visible' => [':input[name="field_type"]' => ['value' => 'event']])

### Explanation
The #states property declaratively binds visibility/enabled/required states to other inputs' values, powered by Drupal's states JavaScript system.

### Question 65

**Domain:** Site Building

A form needs to refresh a city dropdown when the country changes. Which Form API feature enables this?

### Options
- #ajax with a callback rebuilding part of the form (e.g. the city element wrapper)
- #states alone
- #tree disabled
- #markup with inline jQuery

### Correct Answers
- [0] #ajax with a callback rebuilding part of the form (e.g. the city element wrapper)

### Explanation
The #ajax property triggers re-render of specified form regions server-side on element changes, the standard dependent-dropdown pattern in Drupal forms.

### Question 66

**Domain:** Site Building

What is the difference between #markup and #plain_text in render arrays?

### Options
- #plain_text is always escaped; #markup passes through as HTML (and should use safe/known markup or #allowed_tags)
- They are identical
- #markup is escaped; #plain_text is not
- #plain_text renders JSON only

### Correct Answers
- [0] #plain_text is always escaped; #markup passes through as HTML (and should use safe/known markup or #allowed_tags)

### Explanation
Render security: #plain_text escapes everything; #markup is raw and risky with user input; #allowed_tags whitelists when markup is needed.

### Question 67

**Domain:** Site Building

How do you render an entity programmatically with a specific view mode?

### Options
- $viewBuilder = \Drupal::entityTypeManager()->getViewBuilder('node'); $build = $viewBuilder->view($node, 'teaser'); then render $build
- echo $node->toHtml()
- print_r($node)
- Entities render only via Views

### Correct Answers
- [0] $viewBuilder = \Drupal::entityTypeManager()->getViewBuilder('node'); $build = $viewBuilder->view($node, 'teaser'); then render $build

### Explanation
View builders produce render arrays for entities per view mode; render arrays go through the renderer service (\Drupal::service('renderer')->render()).

### Question 68

**Domain:** Site Building

What is the role of *.libraries.yml in a module or theme?

### Options
- Declares CSS/JS asset libraries with dependencies and weights, attachable to render arrays or pages
- Lists PHP class dependencies
- Registers routes
- Stores translations

### Correct Answers
- [0] Declares CSS/JS asset libraries with dependencies and weights, attachable to render arrays or pages

### Explanation
Libraries package assets with dependency ordering; they're attached via '#attached' => ['library' => ['my_module/foo']] or hooks like hook_page_attachments.

### Question 69

**Domain:** Site Building

How does a developer add a 'Settings' config form for a custom module?

### Options
- Extend ConfigFormBase with getEditableConfigNames(), buildForm() using Form API, and store values in a config object
- Write values into settings.php at runtime
- Save settings in the files directory
- Config forms are core-only

### Correct Answers
- [0] Extend ConfigFormBase with getEditableConfigNames(), buildForm() using Form API, and store values in a config object

### Explanation
ConfigFormBase wires forms to configuration objects with typed schema, giving exportable, environment-portable module settings.

### Question 70

**Domain:** Site Building

What is configuration schema (config/schema/*.yml) used for?

### Options
- Declaring the data types and structure of a module's configuration for validation, translation, and typed access
- Database table definitions
- CSS class naming
- JavaScript linting

### Correct Answers
- [0] Declaring the data types and structure of a module's configuration for validation, translation, and typed access

### Explanation
Config schemas make config typed and translatable, enabling validation on import and correct casting — required for well-behaved modules.

### Question 71

**Domain:** Site Building

A custom block plugin should be configurable per instance. Which class/methods are used?

### Options
- BlockBase with defaultConfiguration(), blockForm(), and blockSubmit() storing configuration on the block entity
- hook_block_info only
- Blocks cannot have settings
- Use a text format instead

### Correct Answers
- [0] BlockBase with defaultConfiguration(), blockForm(), and blockSubmit() storing configuration on the block entity

### Explanation
Block plugins (in src/Plugin/Block) define build() for output and configuration methods for per-placement settings, stored with the block config entity.

### Question 72

**Domain:** Site Building

How do you programmatically place an instance of a custom block plugin into a region?

### Options
- Create a block config entity (Drupal\block\Entity\Block::create()) with theme, region, plugin id, and settings, then save it
- Edit the page template directly
- Blocks can only be placed via the UI
- Use drush sql-query

### Correct Answers
- [0] Create a block config entity (Drupal\block\Entity\Block::create()) with theme, region, plugin id, and settings, then save it

### Explanation
Block placements are configuration entities, so modules can ship or create them (config/install or update hooks) for repeatable deployments.

### Question 73

**Domain:** Site Building

What is the purpose of hook_theme()?

### Options
- Registers theme hooks (templates/theme functions) a module provides, with variables or render element definitions
- Downloads themes from drupal.org
- Switches the admin theme
- Compiles Twig templates

### Correct Answers
- [0] Registers theme hooks (templates/theme functions) a module provides, with variables or render element definitions

### Explanation
hook_theme() maps theme hook names to templates and variables, enabling '#theme' => 'my_hook' render arrays and template overrides via suggestions.

### Question 74

**Domain:** Site Building

How are template suggestions (e.g. node--article--full.html.twig) added?

### Options
- Via hook_theme_suggestions_HOOK_alter() (e.g. hook_theme_suggestions_node_alter()) appending new suggestion names
- They appear automatically for all hooks
- By renaming files randomly
- Only core can add suggestions

### Correct Answers
- [0] Via hook_theme_suggestions_HOOK_alter() (e.g. hook_theme_suggestions_node_alter()) appending new suggestion names

### Explanation
Suggestion alter hooks add context-specific template candidates (per bundle, view mode, page), letting themes target overrides precisely.

### Question 75

**Domain:** Site Building

What does the 'Classy' base theme provide that 'Stable9' also provides?

### Options
- A base theme with default templates and markup (Classy adds BEM-style CSS classes; Stable9 is the minimal stable-markup base)
- Nothing; they are admin themes
- A JavaScript framework
- Database drivers

### Correct Answers
- [0] A base theme with default templates and markup (Classy adds BEM-style CSS classes; Stable9 is the minimal stable-markup base)

### Explanation
Stable9 preserves default markup stability; Classy layers sensible class conventions for themers. Custom themes choose either as base (or none with Stable9 deprecation path in D11).

### Question 76

**Domain:** Site Building

How do you attach a CSS/JS library to every page from a module?

### Options
- Implement hook_page_attachments() adding '#attached' => ['library' => ['my_module/global']]
- Edit index.php
- Use <script> tags in node bodies
- Libraries attach only per node

### Correct Answers
- [0] Implement hook_page_attachments() adding '#attached' => ['library' => ['my_module/global']]

### Explanation
hook_page_attachments (or page_attachments_alter) injects libraries/attachments globally, respecting aggregation and caching rules.

### Question 77

**Domain:** Site Building

What is the correct way to include an external CDN script in a library definition?

### Options
- Declare it in *.libraries.yml with a URL and { type: external } (or minified/external metadata), noting external assets aren't aggregated
- Paste the URL into node content
- External scripts are forbidden
- Add it to settings.php

### Correct Answers
- [0] Declare it in *.libraries.yml with a URL and { type: external } (or minified/external metadata), noting external assets aren't aggregated

### Explanation
libraries.yml supports remote assets flagged external; Drupal includes them as-is (no aggregation), preserving SRI/crossorigin options when defined.

### Question 78

**Domain:** Site Building

How do you make an image style from a module so it deploys with code?

### Options
- Ship an image.style.*.yml in config/install (or create ImageStyle::create() in an update hook)
- Define it in the theme CSS
- Image styles cannot be in code
- Store it in the files directory

### Correct Answers
- [0] Ship an image.style.*.yml in config/install (or create ImageStyle::create() in an update hook)

### Explanation
Image styles are config entities; modules provide them via config/install for consistent derivatives across environments.

### Question 79

**Domain:** Site Building

What is a 'display variant' such as provided by Layout Builder or Panels historically?

### Options
- A system controlling how an entity/page renders by swapping layout and block arrangements per context
- A CSS pseudo-class
- A database index type
- A user role level

### Correct Answers
- [0] A system controlling how an entity/page renders by swapping layout and block arrangements per context

### Explanation
Display variants govern rendering pipelines; Layout Builder overrides entity displays per bundle/entity using sections and blocks.

### Question 80

**Domain:** Site Building

How would you restrict an 'Events' view page to HTTPS-only usage concepts and caching correctness behind a proxy? (Choose two)

### Options
- Enforce HTTPS at the infrastructure layer and configure reverse proxy settings in settings.php so URLs/cookies are correct
- Ensure cache contexts account for protocol-sensitive output when needed
- Redirect in node bodies via JavaScript
- Views have a per-display HTTPS checkbox in core

### Correct Answers
- [0] Enforce HTTPS at the infrastructure layer and configure reverse proxy settings in settings.php so URLs/cookies are correct
- [1] Ensure cache contexts account for protocol-sensitive output when needed

### Explanation
TLS is infrastructure-level; Drupal needs trusted proxy config to generate correct absolute URLs, and cache contexts must reflect varying inputs.

### Question 81

**Domain:** Site Building

A 'Staff' view block must refresh immediately when a staff node changes. What ensures this?

### Options
- Correct cache tags on the view display (default in core views) so entity saves invalidate the cached block
- Disabling all caches
- A cron job clearing all caches every minute
- Manual browser refreshes by editors

### Correct Answers
- [0] Correct cache tags on the view display (default in core views) so entity saves invalidate the cached block

### Explanation
Views add list cache tags per entity type (node_list) plus individual tags; saves invalidate precisely, giving freshness with caching retained.

### Question 82

**Domain:** Site Building

How do you add a new view mode programmatically for nodes?

### Options
- Create an entity_view_mode config entity (Drupal\Core\Entity\EntityViewMode::create() with targetEntityType 'node') or ship its YAML
- Add it to settings.php
- View modes are UI-only
- Edit the node module

### Correct Answers
- [0] Create an entity_view_mode config entity (Drupal\Core\Entity\EntityViewMode::create() with targetEntityType 'node') or ship its YAML

### Explanation
View modes are configuration; modules declare them (e.g. core.entity_view_mode.node.card.yml) and bundles opt in via display settings.

### Question 83

**Domain:** Site Building

A content type should capture a video embed AND a fallback local file. Best model?

### Options
- Two media reference fields (remote video media type and file/video media type) with display logic preferring one, or one media field allowing both types
- Two body fields
- A single text field for URLs
- A taxonomy of videos

### Correct Answers
- [0] Two media reference fields (remote video media type and file/video media type) with display logic preferring one, or one media field allowing both types

### Explanation
Media reference fields can allow multiple media types; choosing one media field with both types keeps the model simple while supporting fallbacks in templates.

### Question 84

**Domain:** Site Building

What is the purpose of hook_cron()?

### Options
- Lets a module run periodic tasks during cron (cleanup, syncing, digest emails)
- Runs JavaScript every minute
- Clears the theme registry only
- Registers menu items

### Correct Answers
- [0] Lets a module run periodic tasks during cron (cleanup, syncing, digest emails)

### Explanation
hook_cron() implementations execute on cron runs; heavy work should be queued (Queue API) to avoid long request-time processing.

### Question 85

**Domain:** Site Building

How does a module react when a new user registers?

### Options
- Implement hook_user_insert() (or entity insert hook for 'user') to act on new accounts
- Poll the users table every minute
- Edit user.module
- Use JavaScript on the register page

### Correct Answers
- [0] Implement hook_user_insert() (or entity insert hook for 'user') to act on new accounts

### Explanation
Entity lifecycle hooks (insert/update/delete) fire per entity type, enabling notifications, provisioning, and synchronization on registration.

### Question 86

**Domain:** Site Building

You want a node form to redirect to a custom thank-you page after save. How?

### Options
- Add a submit handler via hook_form_alter() that sets $form_state->setRedirect() to the route
- Rename the node to thank-you
- Redirects after save are impossible
- Use CSS to hide the node

### Correct Answers
- [0] Add a submit handler via hook_form_alter() that sets $form_state->setRedirect() to the route

### Explanation
Form submit handlers control post-save destinations via route redirects (setRedirect/setRedirectUrl) added in alters or custom form classes.

### Question 87

**Domain:** Site Building

What is the 'queue' pattern for sending 10k digest emails without timeouts?

### Options
- Enqueue items in hook_cron() (or on save) and process a batch per cron run via a QueueWorker plugin
- Send all 10k in one page request
- Use JavaScript setTimeout
- Emails cannot be queued

### Correct Answers
- [0] Enqueue items in hook_cron() (or on save) and process a batch per cron run via a QueueWorker plugin

### Explanation
Queue API (QueueWorker plugins with cron processing) spreads heavy work across runs reliably, with retries and leases.

### Question 88

**Domain:** Site Building

A view's exposed filter should use checkboxes instead of a multi-select. Is this configurable?

### Options
- Exposed filter settings offer 'single/ multiple' selection and widget options like checkboxes (bef-style behavior partially in core via 'Expose operator/selection' options)
- Widget changes require hacking views.module
- Exposed filters are always radios
- Only via CSS

### Correct Answers
- [0] Exposed filter settings offer 'single/ multiple' selection and widget options like checkboxes (bef-style behavior partially in core via 'Expose operator/selection' options)

### Explanation
Exposed filter forms inherit element types from the filter; select-based filters can allow multiple (multi-select/checkboxes per element) with BEF (contributed) for richer widgets.

### Question 89

**Domain:** Site Building

How do you programmatically create a node in Drupal 11?

### Options
- Node::create(['type' => 'article', 'title' => 'X', 'field_y' => 'Z'])->save()
- db_insert('node')->execute()
- file_put_contents('node.txt', $data)
- Nodes cannot be created in code

### Correct Answers
- [0] Node::create(['type' => 'article', 'title' => 'X', 'field_y' => 'Z'])->save()

### Explanation
Entity API: static create() with field values then save() — validated, hook-firing, revision-aware; direct SQL bypasses the entity system and is wrong.

### Question 90

**Domain:** Site Building

What does an entity query look like for published articles tagged with term 5?

### Options
- \Drupal::entityQuery('node')->condition('type', 'article')->condition('status', 1)->condition('field_tags', 5)->accessCheck(TRUE)->execute()
- SELECT * FROM node WHERE tags = 5 in raw PHP
- A view can never express this
- entityQuery requires SQL strings

### Correct Answers
- [0] \Drupal::entityQuery('node')->condition('type', 'article')->condition('status', 1)->condition('field_tags', 5)->accessCheck(TRUE)->execute()

### Explanation
Entity queries are database-agnostic, access-aware (accessCheck required in D10+), field-level query builders returning entity IDs to load.

### Question 91

**Domain:** Site Building

Why is accessCheck(TRUE) significant on entity queries in modern Drupal?

### Options
- It explicitly applies content access rules to results; omitting it is deprecated/requires a conscious choice
- It speeds up queries
- It disables caching
- It is required only for users

### Correct Answers
- [0] It explicitly applies content access rules to results; omitting it is deprecated/requires a conscious choice

### Explanation
Since Drupal 10, entity queries must declare access checking; leaving access unchecked without intent can leak restricted content.

### Question 92

**Domain:** Site Building

How can a module add a new tab on node pages (like View/Edit)?

### Options
- Define a local task in my_module.links.task.yml pointing to a route under node/%node
- Edit node.module's template
- Tabs require JavaScript only
- Local tasks are core-only

### Correct Answers
- [0] Define a local task in my_module.links.task.yml pointing to a route under node/%node

### Explanation
*.links.task.yml registers local tasks (tabs) grouped by parent route; access checks come from the target route's requirements.

### Question 93

**Domain:** Site Building

A 'Press' section needs its own admin listing page for editors. What provides this quickly?

### Options
- A custom view with a page display under /admin/content/press with role-based access
- A new database table
- A second Drupal installation
- Editing core admin views is the only way

### Correct Answers
- [0] A custom view with a page display under /admin/content/press with role-based access

### Explanation
Views pages under admin paths with access settings deliver tailored editorial dashboards without custom controllers.

### Question 94

**Domain:** Site Building

How do you add a bulk action 'Assign to editor' on the Content admin page?

### Options
- Create an Action plugin (config action) and enable it for the content view's bulk operations field
- Actions are hard-coded in core only
- Bulk actions require JavaScript frameworks
- Use the Ban module

### Correct Answers
- [0] Create an Action plugin (config action) and enable it for the content view's bulk operations field

### Explanation
Action plugins (system.action.*.yml) appear in Views bulk operations selectors, letting editors apply custom operations to selected rows.

### Question 95

**Domain:** Site Building

A module should add a checkbox 'Show on homepage' to articles and filter a view by it. Steps?

### Options
- Add a boolean field via Field UI (or config), then filter the view on field value = 1
- Booleans cannot filter views
- Use a text field with 'yes/no' strings
- A new content type per checkbox

### Correct Answers
- [0] Add a boolean field via Field UI (or config), then filter the view on field value = 1

### Explanation
Boolean fields render as checkboxes (on/off widget) and filter views cleanly — the simplest flag pattern for curated listings.

### Question 96

**Domain:** Site Building

What does the 'Group' module ecosystem solve that core doesn't?

### Options
- Arbitrary collections of content/users with their own roles and permissions (microsites, teams) beyond core's global roles
- Image cropping
- Menu rendering
- Database replication

### Correct Answers
- [0] Arbitrary collections of content/users with their own roles and permissions (microsites, teams) beyond core's global roles

### Explanation
Group provides group entities with membership and per-group roles/permissions — the standard for multi-tenant or team-based access architectures.

### Question 97

**Domain:** Site Building

A 'Gallery' node embeds a view of its images. Which approaches embed views in content? (Choose two)

### Options
- A 'Views field' style contributed solution or rendering the view via a custom field formatter/code
- Using the view's block display placed via Layout Builder on that node's layout
- Pasting raw SQL into the body
- Views can never be embedded

### Correct Answers
- [0] A 'Views field' style contributed solution or rendering the view via a custom field formatter/code
- [1] Using the view's block display placed via Layout Builder on that node's layout

### Explanation
Embedding listings happens via blocks in Layout Builder, views reference fields (contrib), or programmatic views_embed_view() in code.

### Question 98

**Domain:** Site Building

How do you theme the user login form differently from other pages?

### Options
- Template suggestions for the form/page (e.g. page--user--login.html.twig) and form alters for markup/attributes
- Login theming is impossible
- Only via JavaScript overlays
- Edit user.module directly

### Correct Answers
- [0] Template suggestions for the form/page (e.g. page--user--login.html.twig) and form alters for markup/attributes

### Explanation
Page-level template suggestions target routes like /user/login; form alters adjust elements, and libraries style the page.

### Question 99

**Domain:** Site Building

A 'Document' media type must show a file icon by extension in listings. Implementation options? (Choose two)

### Options
- A custom field formatter or template logic mapping MIME/extension to icon classes
- A contributed module providing file icons, configured in Manage display
- A new media type per extension
- Icons cannot be conditional

### Correct Answers
- [0] A custom field formatter or template logic mapping MIME/extension to icon classes
- [1] A contributed module providing file icons, configured in Manage display

### Explanation
Conditional icons are presentation logic handled in formatters/templates or existing contrib solutions, keyed off the file's MIME type.

### Question 100

**Domain:** Site Building

What is the correct way to add help text under a field on node forms?

### Options
- The field instance's 'Help text' setting, or #description on a form element via alter
- A block under every form
- Help text is not supported
- Using the title attribute only

### Correct Answers
- [0] The field instance's 'Help text' setting, or #description on a form element via alter

### Explanation
Field help text renders below widgets; Form API #description serves the same role for custom elements, improving editorial UX.

### Question 101

**Domain:** Site Building

An update hook must change a field's widget for the Article type on existing sites. What is the safe pattern?

### Options
- Load the entity_form_display config, modify the component for the field, and save it inside hook_update_N()
- Directly UPDATE the config table with SQL
- Ask every site admin to click through the UI
- Widgets cannot change post-install

### Correct Answers
- [0] Load the entity_form_display config, modify the component for the field, and save it inside hook_update_N()

### Explanation
hook_update_N() applies code-driven changes to existing sites via APIs (config entities, entity updates), keeping deployments repeatable and versioned.

### Question 102

**Domain:** Site Building

Why must hook_update_N() functions never be changed after release?

### Options
- Sites record the last run update number; altering released updates breaks the update path and can corrupt state
- They are cached forever by browsers
- Update hooks run on every request
- They are compiled into PHP

### Correct Answers
- [0] Sites record the last run update number; altering released updates breaks the update path and can corrupt state

### Explanation
Update hooks run once per site in numeric order; editing old ones means some sites skip fixes. New changes go in new update numbers.

### Question 103

**Domain:** Site Building

What does 'drush deploy' (or the equivalent sequence) typically do in Drupal workflows?

### Options
- Runs database updates, imports configuration, clears caches — the standard post-code-deploy steps
- Deploys the site to production servers itself
- Creates a new database
- Installs Composer packages

### Correct Answers
- [0] Runs database updates, imports configuration, clears caches — the standard post-code-deploy steps

### Explanation
Deployment tooling chains updatedb, config:import, cache:rebuild (drush deploy wraps these), keeping environments consistent after code changes.

### Question 104

**Domain:** Site Building

A client wants content in English, French, and Arabic with RTL support for Arabic. What must be configured? (Choose two)

### Options
- Add languages and enable Content Translation per bundle; Arabic is marked RTL automatically by core language definitions
- Ensure the theme/CSS handles RTL (core themes provide RTL stylesheets)
- A separate Drupal install per language
- RTL requires a custom PHP extension

### Correct Answers
- [0] Add languages and enable Content Translation per bundle; Arabic is marked RTL automatically by core language definitions
- [1] Ensure the theme/CSS handles RTL (core themes provide RTL stylesheets)

### Explanation
Drupal's language system knows RTL languages and serves RTL variants of stylesheets; translation config enables per-language content.

### Question 105

**Domain:** Site Building

How does language fallback work when a node lacks a German translation?

### Options
- Per content language settings: show the original language version or hide the content from German listings
- The site crashes
- German users see English admin pages only
- Fallback is random

### Correct Answers
- [0] Per content language settings: show the original language version or hide the content from German listings

### Explanation
Content language configuration defines whether untranslated entities render in their source language or are hidden — per entity type/bundle.

### Question 106

**Domain:** Site Building

A 'Read more' link in a view must be translatable. Where does that string get translated?

### Options
- As configuration via Configuration Translation (view display settings are config)
- In the theme .po file only
- It cannot be translated
- Via JavaScript dictionaries

### Correct Answers
- [0] As configuration via Configuration Translation (view display settings are config)

### Explanation
View settings (titles, custom text, rewrites) are configuration; Configuration Translation module provides per-language versions of those strings.

### Question 107

**Domain:** Site Building

What does the 'Masquerade' contributed module let administrators do during support?

### Options
- Temporarily switch to another user's account to reproduce issues, with an audit trail and safe switch-back
- Permanently delete user accounts
- Read user passwords
- Merge two accounts

### Correct Answers
- [0] Temporarily switch to another user's account to reproduce issues, with an audit trail and safe switch-back

### Explanation
Masquerade enables supervised impersonation for debugging permission/UI issues — safer than sharing credentials and logged for accountability.

### Question 108

**Domain:** Site Building

A 'Supplier portal' should show different menus per role. What implements role-based menu visibility?

### Options
- Block visibility by role on each menu block, or menu link access controlled by route access (content the user can't access is hidden)
- Menus are always identical for all roles
- Role-based menus require JS hacks
- Only user 1 sees menus

### Correct Answers
- [0] Block visibility by role on each menu block, or menu link access controlled by route access (content the user can't access is hidden)

### Explanation
Menu items respect route access automatically; placing different menu blocks with role conditions offers explicit per-role navigation.

### Question 109

**Domain:** Site Building

How do you make a field visible only to administrators on node display?

### Options
- Custom field-level access (hook_entity_field_access()) or a display suite-style solution; core Manage display cannot per-role hide fields
- The Hidden label option
- CSS display:none for anonymous users
- It is impossible in any way

### Correct Answers
- [0] Custom field-level access (hook_entity_field_access()) or a display suite-style solution; core Manage display cannot per-role hide fields

### Explanation
Field visibility by role requires code (field access hooks) or contributed modules; CSS hiding is not secure since data still reaches the page.

### Question 110

**Domain:** Site Building

What does hook_node_access() return values mean?

### Options
- AccessResult::allowed/forbidden/neutral per operation; forbidden wins, neutral defers to other grants
- Strings 'yes'/'no'/'maybe'
- HTTP status codes
- Boolean only, no neutral concept

### Correct Answers
- [0] AccessResult::allowed/forbidden/neutral per operation; forbidden wins, neutral defers to other grants

### Explanation
Node access hooks return cacheable AccessResult objects; neutrality lets the grant system decide, forbidden always denies — with proper cacheability metadata.

### Question 111

**Domain:** Site Building

Why do access results need cacheability metadata (cache tags/contexts)?

### Options
- Access checks are cached; without contexts (e.g. per user), one user's result could leak into another's cached page
- They make pages load slower on purpose
- They are required for SEO
- They are decorative metadata

### Correct Answers
- [0] Access checks are cached; without contexts (e.g. per user), one user's result could leak into another's cached page

### Explanation
AccessResult implements CacheableDependencyInterface; varying by user/permissions contexts ensures personalized access decisions don't poison shared caches.

### Question 112

**Domain:** Site Building

A project requires approval emails when content moves to 'Needs review'. Implementation approach?

### Options
- A custom module reacting to moderation state changes (entity update hooks or workflow events) sending mail via the mail manager
- Core sends these emails by default
- Use cron to poll hourly only
- Emails require the Comment module

### Correct Answers
- [0] A custom module reacting to moderation state changes (entity update hooks or workflow events) sending mail via the mail manager

### Explanation
State transitions are detectable in entity hooks/events; the MailManager service sends templated mails (hook_mail) — a typical custom integration.

### Question 113

**Domain:** Site Building

How are automated emails from Drupal sent through an SMTP provider?

### Options
- Install/configure the contributed SMTP module (or a mailsystem setup) with provider credentials; core uses PHP mail() by default
- Core has built-in SMTP settings
- Emails must be hand-sent by editors
- Via the Update Manager

### Correct Answers
- [0] Install/configure the contributed SMTP module (or a mailsystem setup) with provider credentials; core uses PHP mail() by default

### Explanation
Core's default mail backend is PHP mail(); SMTP module routes through authenticated providers improving deliverability (SPF/DKIM alignment).

### Question 114

**Domain:** Site Building

What is the role of hook_mail() and the 'plugin.manager.mail' service?

### Options
- hook_mail() composes message subject/body per module key; the mail manager sends via the configured mail backend
- It manages the contact form only
- It caches emails in the database
- It validates SPF records

### Correct Answers
- [0] hook_mail() composes message subject/body per module key; the mail manager sends via the configured mail backend

### Explanation
Modules define message templates in hook_mail($key, $message, $params); \Drupal::service('plugin.manager.mail')->mail() dispatches them through mail plugins.

### Question 115

**Domain:** Site Building

A view page should live at /reports/sales with an /reports/sales/export CSV twin. Implementation?

### Options
- Two displays on one view: a Page display and a second display (e.g. Data export via contrib or custom plugin) sharing the query
- Views cannot have multiple displays
- Create two unrelated views duplicating filters
- Use a node with an iframe

### Correct Answers
- [0] Two displays on one view: a Page display and a second display (e.g. Data export via contrib or custom plugin) sharing the query

### Explanation
Multiple displays share one query with different output formats; contrib 'Views Data Export' or REST export displays serve file/CSV-style outputs.

### Question 116

**Domain:** Site Building

How do you ensure a view's filters are indexed by search engines correctly (or excluded)?

### Options
- Exposed filter URLs are query strings; canonical handling/nofollow patterns and Pathauto for main paths manage SEO; views have no built-in per-filter sitemap
- Views auto-generate sitemaps per filter
- Search engines cannot see view pages
- Use robots.txt for everything always

### Correct Answers
- [0] Exposed filter URLs are query strings; canonical handling/nofollow patterns and Pathauto for main paths manage SEO; views have no built-in per-filter sitemap

### Explanation
Faceted/filtered pages risk duplicate-content SEO issues; canonical tags, sitemap discipline, and selective indexation are the standard mitigations.

### Question 117

**Domain:** Site Building

What does the 'Rabbit Hole' contributed module prevent?

### Options
- Direct access to entity pages that shouldn't be viewed standalone (e.g. paragraph-like nodes), via redirect/404 per bundle
- Spam registrations
- Broken images
- Slow queries

### Correct Answers
- [0] Direct access to entity pages that shouldn't be viewed standalone (e.g. paragraph-like nodes), via redirect/404 per bundle

### Explanation
Content meant only for embedding (slides, tiles) shouldn't have public node pages; Rabbit Hole per-bundle settings 404/redirect those routes.

### Question 118

**Domain:** Site Building

A 'Knowledge base' needs alphabetical glossary navigation (A–Z filter). How is this built with views?

### Options
- A contextual filter on title first letter (using 'Glossary mode' in the contextual filter settings)
- One view per letter
- A text format per letter
- Glossaries are impossible

### Correct Answers
- [0] A contextual filter on title first letter (using 'Glossary mode' in the contextual filter settings)

### Explanation
Views contextual filters include glossary mode matching the initial character(s), powering A–Z browse interfaces with summaries.

### Question 119

**Domain:** Site Building

How are 'Recent content' and 'Who's online' blocks provided?

### Options
- Core modules (node recent content block; the Who's Online block) placeable via Block layout
- They require custom SQL
- Only via JavaScript widgets
- They are themes, not blocks

### Correct Answers
- [0] Core modules (node recent content block; the Who's Online block) placeable via Block layout

### Explanation
Core ships utility blocks (recent content, who's online/new) demonstrating block plugins; they're placeable like any block.

### Question 120

**Domain:** Site Building

A block should show the current node's author name. What core capability enables context-aware blocks?

### Options
- Block plugins can receive context (e.g. node from route) via context definitions ('@node.node_route_context:node'); in the UI, views blocks with contextual filters do similar
- Blocks cannot know the route
- Contexts require editing settings.php
- Only user 1 sees context

### Correct Answers
- [0] Block plugins can receive context (e.g. node from route) via context definitions ('@node.node_route_context:node'); in the UI, views blocks with contextual filters do similar

### Explanation
The context system injects route entities into plugins (blocks, conditions); UI-equivalent is contextual view blocks pulling the node ID from the URL.

### Question 121

**Domain:** Site Building

What is the purpose of hook_page_top()/hook_page_bottom() vs hook_page_attachments()?

### Options
- page_top/bottom inject render arrays at page regions; page_attachments adds libraries/meta/links to the page head
- They all do identical things
- page_top adds CSS; page_bottom adds routes
- Attachments are for file uploads

### Correct Answers
- [0] page_top/bottom inject render arrays at page regions; page_attachments adds libraries/meta/links to the page head

### Explanation
Page-level hooks place content around the page frame, while attachments wire assets and head elements — distinct extension points for modules.

### Question 122

**Domain:** Site Building

A 'Rate this page' feature stores anonymous votes. What storage approaches fit? (Choose two)

### Options
- A custom entity or key-value store (State API is for environment state, not vote data; a small custom table/entity suits analytics)
- Contributed voting modules (e.g. Voting API ecosystem)
- Store votes in the text format settings
- Votes must be in settings.php

### Correct Answers
- [0] A custom entity or key-value store (State API is for environment state, not vote data; a small custom table/entity suits analytics)
- [1] Contributed voting modules (e.g. Voting API ecosystem)

### Explanation
High-volume user data belongs in purpose-built storage or proven voting modules; State API is for system state flags, not content-like data.

### Question 123

**Domain:** Site Building

How do you provide a downloadable PDF of a node in a maintainable way?

### Options
- Contributed print/PDF solutions (e.g. entity print with a PDF engine) wired to routes/entities
- Screenshot the page manually
- PDFs are impossible from Drupal
- Use the image styles

### Correct Answers
- [0] Contributed print/PDF solutions (e.g. entity print with a PDF engine) wired to routes/entities

### Explanation
PDF generation needs an engine (wkhtmltopdf/dompdf) wrapped by contrib modules rendering entities to PDF — core has no PDF output.

### Question 124

**Domain:** Site Building

A 'Mega menu' with rich content columns is required. What are the Drupal options? (Choose two)

### Options
- Contributed mega menu modules (e.g. TB Mega Menu, Superfish with block content)
- Custom menu tree rendering with menu links containing block content via templates
- Core menus render mega menus natively
- Use a taxonomy instead of a menu

### Correct Answers
- [0] Contributed mega menu modules (e.g. TB Mega Menu, Superfish with block content)
- [1] Custom menu tree rendering with menu links containing block content via templates

### Explanation
Core menus are simple link trees; mega menus come from contrib or custom menu rendering embedding blocks/fields per link.

### Question 125

**Domain:** Site Building

A 'Favorites' flag per user on nodes: which contributed pattern is standard?

### Options
- The Flag module providing per-user or global flags with views integration
- A shared taxonomy term
- A boolean field on the node (shared by all users)
- A menu item per favorite

### Correct Answers
- [0] The Flag module providing per-user or global flags with views integration

### Explanation
Flag models user-scoped markings (bookmarks, likes, follows) with links on entities and views/relations — the canonical 'favorites' solution.

### Question 126

**Domain:** Site Building

How do you show different content to first-time visitors vs returning ones?

### Options
- Contribute-style solutions use cookies/local storage with cache contexts or client-side logic; core alone doesn't segment visitors by history
- Core has a 'first visit' role built in
- Use the Statistics module counters
- It is impossible anywhere

### Correct Answers
- [0] Contribute-style solutions use cookies/local storage with cache contexts or client-side logic; core alone doesn't segment visitors by history

### Explanation
Personalization by visit history needs custom/contrib logic with careful cache contexts (or client-side rendering) to stay cache-friendly.

### Question 127

**Domain:** Site Building

A view should list users who registered in the last week. Which filter supports rolling relative dates on users?

### Options
- A date filter on 'User: Created' with relative value '-1 week' to 'now'
- A text filter on usernames
- User registration dates are not stored
- Only a fixed date filter exists

### Correct Answers
- [0] A date filter on 'User: Created' with relative value '-1 week' to 'now'

### Explanation
User entities expose created/access fields to views; relative date filters produce rolling windows for recent-members listings.

### Question 128

**Domain:** Site Building

What is the 'Frontpage' view's role when a custom homepage is needed?

### Options
- It can be edited in place (or replaced by setting a different default front page path) since it is regular view config
- It is hard-coded PHP
- It only shows users
- It cannot be disabled

### Correct Answers
- [0] It can be edited in place (or replaced by setting a different default front page path) since it is regular view config

### Explanation
The front page is just a view at /node (or set via site info). Teams edit it or point the front page setting at a custom route.

### Question 129

**Domain:** Site Building

How would you add a 'Printer-friendly version' link that renders a simplified page?

### Options
- A dedicated view mode (e.g. 'print') plus a route/template rendering the entity in that mode, or contributed print modules
- The browser's print dialog only
- A second database
- It requires node duplication

### Correct Answers
- [0] A dedicated view mode (e.g. 'print') plus a route/template rendering the entity in that mode, or contributed print modules

### Explanation
Custom view modes give alternate renderings; pairing one with a print route/stylesheet (or contrib print modules) delivers clean print output.

### Question 130

**Domain:** Site Building

A 'Customer' role should see only their orders in /orders. Architecture?

### Options
- A view with a contextual filter on the order's customer reference defaulting to the current user (User ID from logged-in user), plus access checks
- One view per customer
- A shared spreadsheet link
- Filtering by username text input

### Correct Answers
- [0] A view with a contextual filter on the order's customer reference defaulting to the current user (User ID from logged-in user), plus access checks

### Explanation
Contextual defaults 'User ID from logged in user' scope listings to the viewer; entity access adds defense in depth.

### Question 131

**Domain:** Site Building

What is the correct method to invalidate a specific view's caches from custom code?

### Options
- Use Cache::invalidateTags() with the view's cache tags or the relevant entity list tags (e.g. node_list)
- Delete the cache tables manually with SQL
- Caches cannot be invalidated programmatically
- Restart the web server

### Correct Answers
- [0] Use Cache::invalidateTags() with the view's cache tags or the relevant entity list tags (e.g. node_list)

### Explanation
Cache API invalidates by tags; entity saves do this automatically, and custom flows can invalidate precisely without full cache clears.

### Question 132

**Domain:** Site Building

A module provides a settings page that must also set a State API flag (environment-only value, not exported). Which API is right?

### Options
- State API (\Drupal::state()) for non-exported, per-environment runtime values; Config API for exportable settings
- Store it in the session
- Use the files directory
- State and Config are identical

### Correct Answers
- [0] State API (\Drupal::state()) for non-exported, per-environment runtime values; Config API for exportable settings

### Explanation
State stores environment-specific runtime data (last cron, flags) that must not travel via config sync; Config stores portable site settings.

### Question 133

**Domain:** Site Building

What does 'Configuration translation' store per language?

### Options
- Translated values of configuration (e.g. site name, view titles, field labels) as config overrides per language
- Node content translations
- User interface source strings
- Private files

### Correct Answers
- [0] Translated values of configuration (e.g. site name, view titles, field labels) as config overrides per language

### Explanation
Config translation layers language-specific overrides on config objects, separate from content entity translations and interface (.po) strings.

### Question 134

**Domain:** Site Building

A site has 200 aliases to migrate from a legacy site. Efficient approach?

### Options
- Bulk import via the Redirect/Path tools or a migration (Migrate API) mapping old paths to new nodes
- Type each alias manually over weeks
- Aliases cannot be imported
- Use the theme layer

### Correct Answers
- [0] Bulk import via the Redirect/Path tools or a migration (Migrate API) mapping old paths to new nodes

### Explanation
Migrate API (or simple drush/CSV imports for Redirect) moves path mappings at scale, preserving SEO during replatforming.

### Question 135

**Domain:** Site Building

What is the Migrate API's basic unit of work?

### Options
- A migration (config entity) defining source, process (field mappings), and destination plugins
- A Twig template
- A view display
- A cron interval

### Correct Answers
- [0] A migration (config entity) defining source, process (field mappings), and destination plugins

### Explanation
Migrations map source rows (SQL/CSV/XML) through process pipelines into destination entities — the core framework for imports/upgrades.

### Question 136

**Domain:** Site Building

A 'Partner logo' media reference should render at 150px in every context. Robust approach?

### Options
- A dedicated image style selected on the media's image field formatter in the relevant view modes
- Ask partners for exact-size files
- CSS width only, serving full files
- A text field with URLs

### Correct Answers
- [0] A dedicated image style selected on the media's image field formatter in the relevant view modes

### Explanation
View-mode-driven formatter settings with image styles give consistent, optimized logo rendering across listings and pages.

### Question 137

**Domain:** Site Building

How do you add structured data (schema.org JSON-LD) to nodes for SEO?

### Options
- Contributed Schema.org Metatag module or custom attachments adding JSON-LD render arrays/scripts to the page
- Core emits JSON-LD by default
- Via the image toolkit
- Structured data is illegal in Drupal

### Correct Answers
- [0] Contributed Schema.org Metatag module or custom attachments adding JSON-LD render arrays/scripts to the page

### Explanation
Schema.org output is contrib (Schema.org Metatag) or custom code via #attached/html_head, enhancing rich search results.

### Question 138

**Domain:** Site Building

A client wants an approval dashboard showing 'Needs review' content counts per editor. Tools?

### Options
- A view filtered by moderation state with aggregation grouped by author, placed in the admin area
- A spreadsheet emailed weekly
- The cron report
- Moderation states are invisible to views

### Correct Answers
- [0] A view filtered by moderation state with aggregation grouped by author, placed in the admin area

### Explanation
Moderation state is exposed to views; filtering/aggregating by state and author yields editorial dashboards without code.

### Question 139

**Domain:** Site Building

What does 'Workspaces' (core) enable for content staging?

### Options
- Preparing sets of content changes in separate workspaces (e.g. a campaign) and publishing them together to Live
- A project management chat
- File versioning only
- Server workspace provisioning

### Correct Answers
- [0] Preparing sets of content changes in separate workspaces (e.g. a campaign) and publishing them together to Live

### Explanation
Workspaces provides site-wide content staging: edits accumulate in a workspace and deploy atomically to the Live workspace.

### Question 140

**Domain:** Site Building

A view block must not appear on the front page but appear on all other pages. Configuration?

### Options
- Block visibility 'Pages' condition: hide on <front> (negate the pages list)
- Delete the block on the homepage via cron
- It is not possible
- Use a separate theme for the front page

### Correct Answers
- [0] Block visibility 'Pages' condition: hide on <front> (negate the pages list)

### Explanation
Page visibility conditions support negation ('Show for the listed pages' vs hide), giving precise placement control per path.

### Question 141

**Domain:** Site Building

How are custom tokens created for use in Pathauto/Metatag patterns?

### Options
- Implement hook_token_info() and hook_tokens() in a custom module
- Tokens are fixed by core only
- Edit the token module
- Tokens require JavaScript

### Correct Answers
- [0] Implement hook_token_info() and hook_tokens() in a custom module

### Explanation
hook_token_info() declares token names/groups; hook_tokens() computes replacements — extending the token system for patterns and emails.

### Question 142

**Domain:** Site Building

A view's exposed keyword filter should search title AND body. Configuration?

### Options
- Use the 'Search: Search Terms' style exposed filter or a combined fields filter ('Global: Combine fields filter') across title/body
- One filter can only target one field
- Keywords search users only
- Exposed filters cannot search text

### Correct Answers
- [0] Use the 'Search: Search Terms' style exposed filter or a combined fields filter ('Global: Combine fields filter') across title/body

### Explanation
The Global combine-fields filter bundles multiple fields into one text search; Search API offers richer keyword handling for advanced needs.

### Question 143

**Domain:** Site Building

How do you provide an 'Edit own profile fields but not roles' setup?

### Options
- Field-level permissions are not in core; grant 'change own username'-style perms and rely on account form access, using contributed Field Permissions for granular field access
- Core has per-field edit permissions built in
- Hide the fields in CSS
- Profiles are read-only always

### Correct Answers
- [0] Field-level permissions are not in core; grant 'change own username'-style perms and rely on account form access, using contributed Field Permissions for granular field access

### Explanation
Core permissions are coarse on the account form; contributed Field Permissions adds per-field view/edit control where granular control is required.

### Question 144

**Domain:** Site Building

A view of 'Invoices' must total amounts at the bottom. Options?

### Options
- Aggregation with SUM on the amount field in the view (or a computed footer via views hooks/contrib)
- Views cannot sum numbers
- Sum in the theme with JavaScript only
- Export to Excel manually

### Correct Answers
- [0] Aggregation with SUM on the amount field in the view (or a computed footer via views hooks/contrib)

### Explanation
Aggregation supports SUM/AVG/COUNT per field; more complex summaries use footer areas or custom plugins.

### Question 145

**Domain:** Site Building

How would you log every node publish action to an external audit service?

### Options
- React in hook_node_update()/presave detecting status transitions and call the service via HTTP client
- Poll the database every second
- Use a text format filter
- Logging is impossible externally

### Correct Answers
- [0] React in hook_node_update()/presave detecting status transitions and call the service via HTTP client

### Explanation
Entity hooks detect transitions (compare original entity); the Guzzle-based http_client service posts to external APIs — standard integration pattern.

### Question 146

**Domain:** Site Building

A view should hide results until the user picks a filter. Core option?

### Options
- Exposed filter settings include 'Require input before results are shown' (showing an empty state until submitted)
- Views always show everything first
- Requires custom JS only
- Hide the view via CSS

### Correct Answers
- [0] Exposed filter settings include 'Require input before results are shown' (showing an empty state until submitted)

### Explanation
Views can withhold results until exposed input exists ('Exposed form' settings), ideal for search-style pages starting blank.

### Question 147

**Domain:** Site Building

What does the 'Statistics' module add to views/node displays?

### Options
- A 'Number of views' counter field (and recent hits statistics) when enabled
- A/B testing reports
- Server CPU graphs
- SEO scores

### Correct Answers
- [0] A 'Number of views' counter field (and recent hits statistics) when enabled

### Explanation
Statistics logs node views per request (with DB write cost), exposing counters to views for 'most read' listings.

### Question 148

**Domain:** Site Building

A 'Latest comments' block should ignore spam-flagged comments. What governs this?

### Options
- Comment status (approved/unapproved) filtering in the view/block; moderation workflows approve comments per permissions
- Comments have no statuses
- Spam is deleted instantly always
- The block shows everything

### Correct Answers
- [0] Comment status (approved/unapproved) filtering in the view/block; moderation workflows approve comments per permissions

### Explanation
Comments have published status; views filter to approved, and permissions control who can skip/perform approval.

### Question 149

**Domain:** Site Building

How do you add an 'Add to calendar' (ICS) download for events?

### Options
- Contributed date/ICS modules or a custom route generating an ICS file from the event entity
- Core generates ICS natively
- ICS requires a cron job only
- Use an image style

### Correct Answers
- [0] Contributed date/ICS modules or a custom route generating an ICS file from the event entity

### Explanation
ICS output is a serialization concern handled by contrib or a small custom controller streaming text/calendar from entity data.

### Question 150

**Domain:** Site Building

A view lists nodes with their first image only; editors upload 10 per node. Which two settings matter? (Choose two)

### Options
- Multiple field settings limiting display to 1 value in the view field
- The image field's formatter choosing an appropriate image style
- Deleting extra images via cron
- Setting cardinality to 1 on the field

### Correct Answers
- [0] Multiple field settings limiting display to 1 value in the view field
- [1] The image field's formatter choosing an appropriate image style

### Explanation
View-level value limits shape listing output without touching stored data; image styles control the rendered size.

### Question 151

**Domain:** Site Building

What does hook_page_attachments_alter() allow that page_attachments does not?

### Options
- Modify/remove attachments (libraries, meta, links) added by other modules before rendering
- It runs before modules exist
- It only adds, never removes
- It works only on admin pages

### Correct Answers
- [0] Modify/remove attachments (libraries, meta, links) added by other modules before rendering

### Explanation
Alter hooks receive built attachments by reference, letting modules remove core/contrib assets or adjust head elements per page.

### Question 152

**Domain:** Site Building

A 'Dashboard' page for editors should aggregate multiple views (counts, lists) and shortcuts. Construction?

### Options
- A custom page via a controller or a view page with attachment displays, plus shortcut sets per role
- Dashboards require a second site
- Only the core front page can aggregate
- A taxonomy page

### Correct Answers
- [0] A custom page via a controller or a view page with attachment displays, plus shortcut sets per role

### Explanation
Dashboards compose listings (views/attachments) and quick links (shortcuts/custom blocks) under an admin route with role access.

### Question 153

**Domain:** Site Building

How are default images for image fields handled?

### Options
- The image field settings allow a default image (uploaded once) used when no image is provided
- Defaults are random from the web
- A cron job assigns images
- Defaults are not supported

### Correct Answers
- [0] The image field settings allow a default image (uploaded once) used when no image is provided

### Explanation
Field-level default images guarantee visuals in listings when editors skip uploads — configured in the field's default value settings.

### Question 154

**Domain:** Site Building

A 'Jobs' view should close listings automatically after the deadline passes. No-code options? (Choose two)

### Options
- Filter the view to deadlines >= today (expired drop off automatically)
- Use Scheduler (contrib) to unpublish at the deadline date
- Manually unpublish daily
- Deadlines cannot automate anything

### Correct Answers
- [0] Filter the view to deadlines >= today (expired drop off automatically)
- [1] Use Scheduler (contrib) to unpublish at the deadline date

### Explanation
Date filters auto-expire listings from views; Scheduler changes the published state itself at a set time — pick per requirement.

### Question 155

**Domain:** Site Building

What does 'drush state:set system.maintenance_mode 1' do, and when is it used?

### Options
- Puts the site into maintenance mode via CLI during deployments; combined with cache rebuilds and updates
- Deletes user sessions only
- Changes the theme
- It is a development joke command

### Correct Answers
- [0] Puts the site into maintenance mode via CLI during deployments; combined with cache rebuilds and updates

### Explanation
Maintenance mode is a state value togglable via drush for deploy scripts (drush state:set or maint:set in newer drush), protecting users during updates.

### Question 156

**Domain:** Site Building

A 'People' view should exclude blocked users. Filter?

### Options
- 'User: Status' filter equals Active (status = 1)
- 'User: Name' not equal to 'blocked'
- Blocked users don't exist in views
- A text filter on emails

### Correct Answers
- [0] 'User: Status' filter equals Active (status = 1)

### Explanation
User status (active/blocked) is a standard views filter, keeping directories free of disabled accounts.

### Question 157

**Domain:** Site Building

How do you make a view's page respond with 404 for invalid term arguments?

### Options
- In the contextual filter, enable validation (e.g. term ID from vocabulary) and set 'Action to take if filter value does not validate' to 'Page not found'
- Views return 200 always
- 404 requires editing .htaccess
- Use an exposed filter instead

### Correct Answers
- [0] In the contextual filter, enable validation (e.g. term ID from vocabulary) and set 'Action to take if filter value does not validate' to 'Page not found'

### Explanation
Validation failure actions (404, show all, summary) harden dynamic pages against garbage URLs.

### Question 158

**Domain:** Site Building

A view should offer 'sort by newest/oldest/popular' to visitors. Feature?

### Options
- An exposed sort ('Expose sort order'/exposed sort criteria) letting visitors choose
- Sorting is fixed forever
- Visitors sort via URL manually only
- Exposed sorts need JavaScript frameworks

### Correct Answers
- [0] An exposed sort ('Expose sort order'/exposed sort criteria) letting visitors choose

### Explanation
Views can expose sort criteria to visitors as a select/radios, complementing exposed filters for interactive listings.

### Question 159

**Domain:** Site Building

What is the purpose of the 'History' (recently read) core module?

### Options
- Tracks which content a user has viewed, powering 'new/updated' markers on content
- It stores browser history
- It versions content
- It logs admin actions

### Correct Answers
- [0] Tracks which content a user has viewed, powering 'new/updated' markers on content

### Explanation
History records per-user read timestamps so themes/views can flag unread or updated content for logged-in users.

### Question 160

**Domain:** Site Building

A 'Search' page built with core Search should also index custom entities (e.g. products as custom entity type). What's required?

### Options
- A Search plugin for the entity type (search plugins are how entity types integrate with core search), or switch to Search API which indexes any entity
- Custom entities are indexed automatically
- Search only works for users
- Indexing requires XML sitemaps

### Correct Answers
- [0] A Search plugin for the entity type (search plugins are how entity types integrate with core search), or switch to Search API which indexes any entity

### Explanation
Core search indexes via Search plugins per entity type; Search API (contrib) generalizes indexing for arbitrary entities with facets/backends.

## Front end Development (Theming)

### Question 161

**Domain:** Front end Development (Theming)

What are the required files for a minimal custom theme in Drupal 11?

### Options
- my_theme.info.yml (metadata) and my_theme.libraries.yml for assets; templates override core markup as needed
- style.css and index.html only
- A PHP extension file
- Themes require at least 10 files

### Correct Answers
- [0] my_theme.info.yml (metadata) and my_theme.libraries.yml for assets; templates override core markup as needed

### Explanation
.info.yml declares the theme (name, base theme, regions); libraries.yml declares assets. Everything else (templates, preprocess) is optional overrides.

### Question 162

**Domain:** Front end Development (Theming)

What does 'base theme: stable9' vs 'base theme: false' mean in a theme's .info.yml?

### Options
- stable9 inherits stable core markup/templates; false means no inheritance and you must provide all templates
- stable9 is a paid theme
- false installs Bootstrap
- Base theme affects PHP version

### Correct Answers
- [0] stable9 inherits stable core markup/templates; false means no inheritance and you must provide all templates

### Explanation
Base themes supply default templates; stable9 guarantees core's stable markup, while base theme false leaves everything to you (with core providing base styling hooks).

### Question 163

**Domain:** Front end Development (Theming)

How are theme regions declared and used?

### Options
- In .info.yml under 'regions:', then printed in page.html.twig as {{ page.region_name }}
- Regions come from the database
- Regions are declared in JavaScript
- Regions are automatic, no declaration needed

### Correct Answers
- [0] In .info.yml under 'regions:', then printed in page.html.twig as {{ page.region_name }}

### Explanation
Theme regions map to page template variables; blocks placed into regions in the UI render where the template prints them.

### Question 164

**Domain:** Front end Development (Theming)

A theme needs a custom 'Call to action' region below content. Steps?

### Options
- Declare 'cta: Call to action' under regions in .info.yml, render {{ page.cta }} in the page template, clear caches, then place blocks into it
- Regions cannot be added
- Rename the content region
- It requires a new base theme

### Correct Answers
- [0] Declare 'cta: Call to action' under regions in .info.yml, render {{ page.cta }} in the page template, clear caches, then place blocks into it

### Explanation
Custom regions are a .info.yml declaration plus template output; they appear in Block layout after a cache rebuild.

### Question 165

**Domain:** Front end Development (Theming)

What is the template file naming convention for a node's 'card' view mode of the 'article' type?

### Options
- node--article--card.html.twig (suggestions: node--<bundle>--<view-mode>)
- card-article-node.html.twig
- article.card.twig only
- node_card.html (no twig)

### Correct Answers
- [0] node--article--card.html.twig (suggestions: node--<bundle>--<view-mode>)

### Explanation
Template suggestions map theme hooks to file names with double-hyphen separators; the most specific match wins.

### Question 166

**Domain:** Front end Development (Theming)

How do you add a template suggestion like page--node--123.html.twig?

### Options
- hook_theme_suggestions_page_alter() adding 'page__node__123' based on the route node
- Rename page.html.twig directly
- Suggestions require database inserts
- Only blocks have suggestions

### Correct Answers
- [0] hook_theme_suggestions_page_alter() adding 'page__node__123' based on the route node

### Explanation
Suggestion hooks append candidates (underscored names map to hyphenated files); specificity order determines which template renders.

### Question 167

**Domain:** Front end Development (Theming)

What does the {{ attributes }} variable in templates provide?

### Options
- An Attribute object with classes/id/data attributes added by Drupal; printed on the wrapper element
- The site's color palette
- A list of regions
- Database credentials

### Correct Answers
- [0] An Attribute object with classes/id/data attributes added by Drupal; printed on the wrapper element

### Explanation
Attributes objects carry classes/data-* from preprocess and render pipeline; always print them ({{ attributes }}) to keep behaviors working.

### Question 168

**Domain:** Front end Development (Theming)

How do you add a class to the attributes in a preprocess function?

### Options
- $variables['attributes']['class'][] = 'my-class'; (or use Attribute object's addClass method)
- echo 'class="my-class"'
- Classes are added via CSS only
- Preprocess cannot touch attributes

### Correct Answers
- [0] $variables['attributes']['class'][] = 'my-class'; (or use Attribute object's addClass method)

### Explanation
Preprocess functions shape template variables; adding to attributes['class'] merges classes with those Drupal supplies.

### Question 169

**Domain:** Front end Development (Theming)

Which Twig filter safely renders a URL for a route?

### Options
- {{ url('<current>') }} style helpers and path()/url() functions — e.g. {{ url('user.login') }}
- {{ url_raw }}
- URLs cannot be generated in Twig
- {{ href() }}

### Correct Answers
- [0] {{ url('<current>') }} style helpers and path()/url() functions — e.g. {{ url('user.login') }}

### Explanation
Drupal Twig exposes url() (absolute) and path() (relative) functions generating route URLs with parameters safely.

### Question 170

**Domain:** Front end Development (Theming)

What do the Twig functions link() and file_url() do?

### Options
- link(text, url, attributes) builds an anchor; file_url(uri) converts a stream URI (public://x.jpg) to a public URL
- They create image styles
- link() opens a modal; file_url deletes files
- They are database helpers

### Correct Answers
- [0] link(text, url, attributes) builds an anchor; file_url(uri) converts a stream URI (public://x.jpg) to a public URL

### Explanation
Drupal adds Twig helpers for common tasks: link generation and stream-wrapper-to-URL conversion for file/image URIs.

### Question 171

**Domain:** Front end Development (Theming)

How do you dump/debug available variables inside a Twig template during development?

### Options
- Enable Twig debug in development.services.yml and use {{ devel_dump() }}/dpm via Devel, or inspect HTML comments showing template names
- var_dump in production
- Twig variables are hidden forever
- Use console.log in Twig

### Correct Answers
- [0] Enable Twig debug in development.services.yml and use {{ devel_dump() }}/dpm via Devel, or inspect HTML comments showing template names

### Explanation
Twig debug mode adds HTML comments naming templates/suggestions; Devel's dump functions inspect variables — dev-only tools.

### Question 172

**Domain:** Front end Development (Theming)

What does enabling Twig debug output into rendered HTML?

### Options
- HTML comments listing the template used, suggestions, and file locations
- PHP stack traces
- Database queries
- JavaScript bundles

### Correct Answers
- [0] HTML comments listing the template used, suggestions, and file locations

### Explanation
Twig debug comments show theme hook, suggestions, and template path — invaluable for finding which file to override.

### Question 173

**Domain:** Front end Development (Theming)

Which preprocess hook runs for ALL theme hooks?

### Options
- template_preprocess() and hook_preprocess() (theme-agnostic generic preprocess)
- hook_node_presave
- hook_cron
- hook_element_info

### Correct Answers
- [0] template_preprocess() and hook_preprocess() (theme-agnostic generic preprocess)

### Explanation
hook_preprocess(&$variables, $hook) fires for every render; hook_preprocess_HOOK targets specific hooks like page or node.

### Question 174

**Domain:** Front end Development (Theming)

A theme needs the current user ID available in page.html.twig. Implementation?

### Options
- hook_preprocess_page() setting $variables['current_uid'] = \Drupal::currentUser()->id();
- User IDs are private and unavailable
- Only JavaScript can read it
- Add it to settings.php

### Correct Answers
- [0] hook_preprocess_page() setting $variables['current_uid'] = \Drupal::currentUser()->id();

### Explanation
Preprocess injects custom variables into templates; the currentUser service provides account data (mind caching contexts when varying output by user).

### Question 175

**Domain:** Front end Development (Theming)

What is the difference between a theme and an admin theme?

### Options
- The admin theme (Appearance settings) is used for administrative pages regardless of the front-end default theme
- Admin themes cost money
- They are identical always
- Admin themes are set per node

### Correct Answers
- [0] The admin theme (Appearance settings) is used for administrative pages regardless of the front-end default theme

### Explanation
Drupal can render admin routes (and optionally content editing) in a dedicated admin theme like Claro while visitors see the custom theme.

### Question 176

**Domain:** Front end Development (Theming)

How do you opt content editing forms into the admin theme?

### Options
- Appearance settings checkbox 'Use the administration theme when editing or creating content'
- It is automatic always
- Edit node.module
- Admin themes never show node forms

### Correct Answers
- [0] Appearance settings checkbox 'Use the administration theme when editing or creating content'

### Explanation
A setting controls whether node forms render in the admin theme for consistent editorial UX.

### Question 177

**Domain:** Front end Development (Theming)

What is a *.theme file used for?

### Options
- The theme's PHP file holding preprocess functions, theme suggestions, and hook implementations
- The theme's color palette
- A YAML config dump
- JavaScript source maps

### Correct Answers
- [0] The theme's PHP file holding preprocess functions, theme suggestions, and hook implementations

### Explanation
mytheme.theme is the procedural home for theme-level logic: preprocess_HOOK, suggestions alters, form alters.

### Question 178

**Domain:** Front end Development (Theming)

How does a library declare dependencies on core's jQuery or drupalSettings behaviors?

### Options
- In libraries.yml 'dependencies: - core/jquery' or '- core/drupal' ensuring load order
- Dependencies are alphabetical automatically
- jQuery cannot be required
- Only via script tags in templates

### Correct Answers
- [0] In libraries.yml 'dependencies: - core/jquery' or '- core/drupal' ensuring load order

### Explanation
Library dependencies guarantee ordering (jquery before your script); core ships libraries like core/drupal, core/once, core/jquery.

### Question 179

**Domain:** Front end Development (Theming)

What is the standard pattern for Drupal JavaScript behaviors?

### Options
- Drupal.behaviors.myBehavior = { attach: function (context, settings) { once('my-behavior', '.selector', context).forEach(...) } }
- window.onload global handlers only
- Inline onclick attributes
- jQuery(document).ready on full document always

### Correct Answers
- [0] Drupal.behaviors.myBehavior = { attach: function (context, settings) { once('my-behavior', '.selector', context).forEach(...) } }

### Explanation
Behaviors re-run on AJAX-inserted content within 'context'; once() prevents duplicate initialization — Drupal's resilient JS pattern.

### Question 180

**Domain:** Front end Development (Theming)

What does the 'once' utility solve in Drupal JavaScript?

### Options
- Ensures initialization code runs only once per element across repeated behavior attachments (AJAX updates)
- Runs code once per site install
- Minifies JavaScript
- Limits CSS animations

### Correct Answers
- [0] Ensures initialization code runs only once per element across repeated behavior attachments (AJAX updates)

### Explanation
once('id', selector, context) filters already-processed elements, preventing double event binding when behaviors re-attach.

### Question 181

**Domain:** Front end Development (Theming)

How do you pass server-side configuration to JavaScript?

### Options
- drupalSettings via '#attached' => ['drupalSettings' => ['my_module' => ['key' => $value]]], read as drupalSettings.my_module.key
- LocalStorage only
- Settings cannot reach JS
- Via cookies exclusively

### Correct Answers
- [0] drupalSettings via '#attached' => ['drupalSettings' => ['my_module' => ['key' => $value]]], read as drupalSettings.my_module.key

### Explanation
drupalSettings is Drupal's structured bridge from PHP to JS, attached to render arrays and available in behaviors' settings arg.

### Question 182

**Domain:** Front end Development (Theming)

Where should a theme place overrides for field.html.twig of a specific field?

### Options
- templates/field/field--node--field-tags--article.html.twig following suggestions
- In the module's src directory
- Overrides live in the database
- Only one field template exists globally

### Correct Answers
- [0] templates/field/field--node--field-tags--article.html.twig following suggestions

### Explanation
Field templates follow field--[entity-type]--[field-name]--[bundle].html.twig suggestions; organization into subfolders is conventional.

### Question 183

**Domain:** Front end Development (Theming)

What does the |render filter do in Drupal Twig?

### Options
- Renders a render array to markup ({{ content.field_image|render }})
- Removes all markup
- Minifies output
- Translates strings

### Correct Answers
- [0] Renders a render array to markup ({{ content.field_image|render }})

### Explanation
|render triggers Drupal's renderer on a render array from Twig; used when printing children individually.

### Question 184

**Domain:** Front end Development (Theming)

How do you hide a field from {{ content }} in node templates but keep it for later manual printing?

### Options
- {{ content|without('field_image') }} renders everything except that field; print it separately with {{ content.field_image }}
- Delete the field
- |without hides fields permanently
- It cannot be selective

### Correct Answers
- [0] {{ content|without('field_image') }} renders everything except that field; print it separately with {{ content.field_image }}

### Explanation
|without('field_x', 'field_y') prints the rest of a render array, enabling custom layouts of individual fields in templates.

### Question 185

**Domain:** Front end Development (Theming)

What is the purpose of {{ attach_library('my_theme/hero') }}?

### Options
- Attaches a library from within a Twig template when that template renders
- Downloads a library from npm
- It caches the template
- It minifies CSS

### Correct Answers
- [0] Attaches a library from within a Twig template when that template renders

### Explanation
attach_library() lets templates pull in assets conditionally wherever they appear — alternative to #attached in render arrays.

### Question 186

**Domain:** Front end Development (Theming)

How are responsive images (per-breakpoint sizes) delivered in a theme?

### Options
- The Responsive Image module with a responsive image style mapping breakpoints to image styles, used as the field formatter
- Media queries on <img> alone
- Uploading 3 images per field manually
- Responsive images need JavaScript only

### Correct Answers
- [0] The Responsive Image module with a responsive image style mapping breakpoints to image styles, used as the field formatter

### Explanation
Responsive image styles pair theme breakpoints (from breakpoints.yml) with image styles, rendering picture/srcset markup automatically.

### Question 187

**Domain:** Front end Development (Theming)

What does my_theme.breakpoints.yml define?

### Options
- Named breakpoints (narrow, wide...) with media queries used by responsive images and other responsive features
- Database breakpoints for debugging
- Cache lifetimes
- PHP version gates

### Correct Answers
- [0] Named breakpoints (narrow, wide...) with media queries used by responsive images and other responsive features

### Explanation
Breakpoints declared by the theme feed responsive image styles; consistent naming keeps design system and Drupal aligned.

### Question 188

**Domain:** Front end Development (Theming)

How do you remove a core CSS file from all pages in a theme?

### Options
- Use libraries-override in .info.yml (e.g. 'system/base: css: component: system.css: false') or libraries-extend to add assets
- Delete core files on disk
- CSS removal is impossible
- Override in settings.php

### Correct Answers
- [0] Use libraries-override in .info.yml (e.g. 'system/base: css: component: system.css: false') or libraries-extend to add assets

### Explanation
libraries-override surgically removes/replaces assets from any library; libraries-extend appends the theme's files to another library.

### Question 189

**Domain:** Front end Development (Theming)

What are Single Directory Components (SDC) in modern Drupal?

### Options
- Self-contained components (Twig template, CSS, JS, metadata in one directory) rendered via {{ include() }} or as display plugins
- A JavaScript framework
- A base theme requirement
- Database entities

### Correct Answers
- [0] Self-contained components (Twig template, CSS, JS, metadata in one directory) rendered via {{ include() }} or as display plugins

### Explanation
SDC (core in 10.3+/11) packages component markup, styles, scripts, and schema together — a design-system-friendly theming primitive.

### Question 190

**Domain:** Front end Development (Theming)

How do you render an SDC component in a Twig template?

### Options
- {{ include('my_theme:button', { label: 'Save', variant: 'primary' }) }} with props/slots defined in component.yml
- {{ sdc_render() }} global function only
- Components render automatically everywhere
- Via JavaScript imports

### Correct Answers
- [0] {{ include('my_theme:button', { label: 'Save', variant: 'primary' }) }} with props/slots defined in component.yml

### Explanation
SDC components are included by namespaced id with validated props; slots pass nested content, keeping templates component-driven.

### Question 191

**Domain:** Front end Development (Theming)

What does hook_library_info_alter() let a module do?

### Options
- Modify any library definition (add/remove files, change dependencies) after modules/themes declare them
- It deletes libraries entirely
- It registers routes
- It alters hook_theme only

### Correct Answers
- [0] Modify any library definition (add/remove files, change dependencies) after modules/themes declare them

### Explanation
Library alter hooks allow cross-module asset adjustments without editing the declaring module's libraries.yml.

### Question 192

**Domain:** Front end Development (Theming)

Why should JavaScript be placed at the bottom (footer scope) by default?

### Options
- It avoids render-blocking; libraries.yml supports 'header: true' when early execution is required
- Footer JS runs faster CPUs
- It is required by PHP
- There is no reason

### Correct Answers
- [0] It avoids render-blocking; libraries.yml supports 'header: true' when early execution is required

### Explanation
Default footer placement keeps pages renderable sooner; header scope is opt-in per JS asset for critical scripts.

### Question 193

**Domain:** Front end Development (Theming)

How does CSS/JS aggregation interact with libraries in Drupal?

### Options
- With aggregation enabled (Performance page), files are combined per library groups into few requests; individual files served in dev when disabled
- Aggregation is always on and cannot be disabled
- Libraries bypass aggregation
- Aggregation merges databases

### Correct Answers
- [0] With aggregation enabled (Performance page), files are combined per library groups into few requests; individual files served in dev when disabled

### Explanation
Drupal aggregates assets by group/smallest scope; developers disable it locally to debug original files with Twig debug.

### Question 194

**Domain:** Front end Development (Theming)

What does {{ 'Read more'|t }} do in a template?

### Options
- Marks the string for translation through Drupal's translation system
- Truncates the string
- Converts to uppercase
- Escapes HTML

### Correct Answers
- [0] Marks the string for translation through Drupal's translation system

### Explanation
|t (and {% trans %} blocks) register strings for interface translation, enabling multilingual themes.

### Question 195

**Domain:** Front end Development (Theming)

When should {% trans %} with placeholders be preferred over |t?

### Options
- For strings with variables/pluralization, e.g. {% trans %}Posted by @author{% endtrans %} or {% plural %}
- Never, |t covers everything perfectly
- Only in JavaScript
- Only for admin pages

### Correct Answers
- [0] For strings with variables/pluralization, e.g. {% trans %}Posted by @author{% endtrans %} or {% plural %}

### Explanation
{% trans %} handles placeholders; {% plural count %} selects singular/plural forms — safe, translatable dynamic text.

### Question 196

**Domain:** Front end Development (Theming)

How do you create a custom Twig filter for a theme or module?

### Options
- Register a Twig extension service (class extending \Twig\Extension\AbstractExtension) tagged 'twig.extension' exposing getFilters()
- Edit the Twig library vendor files
- Filters cannot be custom
- Add it to settings.php

### Correct Answers
- [0] Register a Twig extension service (class extending \Twig\Extension\AbstractExtension) tagged 'twig.extension' exposing getFilters()

### Explanation
Custom Twig filters/functions come from services tagged twig.extension — e.g. a |price_format filter used across templates.

### Question 197

**Domain:** Front end Development (Theming)

What is the '#cache' render array property used for?

### Options
- Declaring cache tags, contexts, and max-age so rendered output is cached and invalidated correctly
- Setting browser cookies
- Choosing the theme
- Hiding the element

### Correct Answers
- [0] Declaring cache tags, contexts, and max-age so rendered output is cached and invalidated correctly

### Explanation
Render arrays carry cacheability metadata bubbled up the tree; correct tags/contexts make dynamic pages cache-safe.

### Question 198

**Domain:** Front end Development (Theming)

A block shows the current user's name. Which cache context is essential?

### Options
- 'user' (vary per user) so each user's name is cached separately
- 'url' only
- 'languages:language_interface'
- No contexts needed ever

### Correct Answers
- [0] 'user' (vary per user) so each user's name is cached separately

### Explanation
Output varying by user needs the user cache context; missing contexts cause leaked/personalization bugs in cached pages.

### Question 199

**Domain:** Front end Development (Theming)

What are 'theme settings' (the Settings tab per theme) powered by?

### Options
- theme-settings.php (form alters on the theme settings form) plus config my_theme.settings stored per theme
- A database table edited by hand
- They are hard-coded
- Only core themes have settings

### Correct Answers
- [0] theme-settings.php (form alters on the theme settings form) plus config my_theme.settings stored per theme

### Explanation
Themes expose settings forms (logo, slogan, custom options) via theme-settings.php; values live in theme config, accessible in templates via theme settings.

### Question 200

**Domain:** Front end Development (Theming)

How does a theme add a body class 'page-front' only on the front page?

### Options
- hook_preprocess_html() checking \Drupal::service('path.matcher')->isFrontPage() and appending to $variables['attributes']['class'][]
- Editing html.html.twig with hard-coded class
- Body classes are random
- Only via JavaScript

### Correct Answers
- [0] hook_preprocess_html() checking \Drupal::service('path.matcher')->isFrontPage() and appending to $variables['attributes']['class'][]

### Explanation
Body attributes are preprocessed in template_preprocess_html and theme preprocess; conditional classes enable page-scoped styling hooks.

### Question 201

**Domain:** Front end Development (Theming)

What is the 'Seven'/'Claro'/'Gin' distinction?

### Options
- Admin themes: Seven (legacy), Claro (core modern admin), Gin (contributed popular modern admin)
- They are base themes for front-end only
- They are modules
- They are image styles

### Correct Answers
- [0] Admin themes: Seven (legacy), Claro (core modern admin), Gin (contributed popular modern admin)

### Explanation
Admin themes shape the editorial interface; Claro is core default, Gin a widely adopted contrib alternative.

### Question 202

**Domain:** Front end Development (Theming)

A theme must override the 'status messages' markup. Which template?

### Options
- status-messages.html.twig
- messages.php
- system-status.tpl.php
- alert.twig only in modules

### Correct Answers
- [0] status-messages.html.twig

### Explanation
status-messages.html.twig renders success/warning/error messages; overriding it reskins feedback UI site-wide.

### Question 203

**Domain:** Front end Development (Theming)

What does hook_page_attachments() add that hook_page_bottom() cannot?

### Options
- Head elements: libraries, meta tags, link tags (e.g. favicons, preconnect) via '#attached' types
- Render arrays in the page bottom region
- Database indexes
- New routes

### Correct Answers
- [0] Head elements: libraries, meta tags, link tags (e.g. favicons, preconnect) via '#attached' types

### Explanation
Attachments target the HTML head and asset pipeline (html_head, html_link, library), whereas page_bottom injects rendered content.

### Question 204

**Domain:** Front end Development (Theming)

How do you add a <link rel="preconnect"> hint via render arrays?

### Options
- '#attached' => ['html_head_link' => [ [ ['rel' => 'preconnect', 'href' => 'https://cdn.example.com' ] ] ] ]
- Preconnect is impossible
- Only via .htaccess
- In the database

### Correct Answers
- [0] '#attached' => ['html_head_link' => [ [ ['rel' => 'preconnect', 'href' => 'https://cdn.example.com' ] ] ] ]

### Explanation
html_head_link/html_head attachments emit link/meta tags, supporting performance hints and external resource declarations.

### Question 205

**Domain:** Front end Development (Theming)

What is the purpose of the 'html.html.twig' template?

### Options
- Renders the overall HTML document skeleton (doctype, head, page_top/page_bottom placement)
- It lists all modules
- It is the node template
- It renders images only

### Correct Answers
- [0] Renders the overall HTML document skeleton (doctype, head, page_top/page_bottom placement)

### Explanation
html.html.twig wraps page.html.twig, controlling head elements, body classes, and the page frame where regions render.

### Question 206

**Domain:** Front end Development (Theming)

A theme wants SVG icons inlined from a sprite. Implementation approaches? (Choose two)

### Options
- Twig include of the sprite file with use references, or a custom Twig function returning the SVG markup
- An icon library CSS/JS loaded via libraries.yml
- SVGs are banned in Drupal
- Only via database storage

### Correct Answers
- [0] Twig include of the sprite file with use references, or a custom Twig function returning the SVG markup
- [1] An icon library CSS/JS loaded via libraries.yml

### Explanation
Inline SVG via includes/functions gives styling control; sprite+CSS approaches keep templates light — both integrate with libraries/templates.

### Question 207

**Domain:** Front end Development (Theming)

How do you control the <title> tag text for a custom page?

### Options
- In the route definition (_title) or dynamically via a _title_callback/controller returning '#title' in the render array
- Only in settings.php
- Titles cannot be changed
- Via CSS content property

### Correct Answers
- [0] In the route definition (_title) or dynamically via a _title_callback/controller returning '#title' in the render array

### Explanation
Route titles are static (_title) or dynamic (_title_callback); render arrays can also set '#title', feeding the head title.

### Question 208

**Domain:** Front end Development (Theming)

What does the 'Starterkit theme' provide in Drupal 10/11?

### Options
- A core starterkit that `drush generate theme` (or core scripts) clones as the base for new custom themes
- A finished design for corporate sites
- An admin theme
- A module starter only

### Correct Answers
- [0] A core starterkit that `drush generate theme` (or core scripts) clones as the base for new custom themes

### Explanation
The Starterkit is copied (not inherited) when generating a new theme, giving clean default templates without base-theme coupling.

### Question 209

**Domain:** Front end Development (Theming)

Why did Drupal move from PHP-based templates to Twig?

### Options
- Security (auto-escaping by default), a designer-friendly syntax, and sandboxed logic separation
- Twig is faster than PHP itself
- PHP templates were banned by law
- Twig compiles to JavaScript

### Correct Answers
- [0] Security (auto-escaping by default), a designer-friendly syntax, and sandboxed logic separation

### Explanation
Twig autoescaping prevents XSS by default and keeps logic out of templates — the core motivations since Drupal 8.

### Question 210

**Domain:** Front end Development (Theming)

What does {{ vich_uploader_asset }} do in Drupal theming?

### Options
- Nothing — it is a Symfony bundle helper, not part of Drupal's Twig functions
- It renders image styles
- It uploads files
- It minifies assets

### Correct Answers
- [0] Nothing — it is a Symfony bundle helper, not part of Drupal's Twig functions

### Explanation
Drupal's Twig function set is its own (url, path, link, file_url, attach_library, render...); recognizing foreign helpers avoids confusion.

### Question 211

**Domain:** Front end Development (Theming)

How are forms themed with custom wrappers around specific elements?

### Options
- #theme_wrappers on elements (e.g. 'fieldset', 'container') or custom form element templates via hook_theme
- Forms cannot be themed
- Only via CSS absolute positioning
- Edit FormBuilder directly

### Correct Answers
- [0] #theme_wrappers on elements (e.g. 'fieldset', 'container') or custom form element templates via hook_theme

### Explanation
Render elements carry #theme_wrappers determining their markup (container, fieldset, details); custom wrappers come from hook_theme registrations.

### Question 212

**Domain:** Front end Development (Theming)

What element type renders a collapsible 'Advanced' section in forms?

### Options
- 'details' with '#title' and optional '#open' => FALSE
- 'collapsible_div'
- 'accordion' core type
- 'markup' with CSS only

### Correct Answers
- [0] 'details' with '#title' and optional '#open' => FALSE

### Explanation
The details render element outputs an accessible <details>/<summary> collapsible — standard for advanced form sections.

### Question 213

**Domain:** Front end Development (Theming)

How do vertical tabs on node forms work technically?

### Options
- The 'vertical_tabs' render element grouping 'details'/'fieldset' children into tabs via core JavaScript
- Browser-native tabs
- A contrib-only feature
- CSS scroll-snap

### Correct Answers
- [0] The 'vertical_tabs' render element grouping 'details'/'fieldset' children into tabs via core JavaScript

### Explanation
vertical_tabs elements collect group children into tabbed navigation (e.g. node form sidebar settings) handled by core's vertical-tabs JS.

### Question 214

**Domain:** Front end Development (Theming)

What does the 'tableselect' element provide?

### Options
- A table with checkboxes/radios per row for selecting items (e.g. bulk selection forms)
- A dropdown of tables
- A SQL query builder UI
- A spreadsheet editor

### Correct Answers
- [0] A table with checkboxes/radios per row for selecting items (e.g. bulk selection forms)

### Explanation
tableselect combines table display with selection inputs, used for multi-item admin operations outside Views.

### Question 215

**Domain:** Front end Development (Theming)

How do you theme a view's rows without touching views.module?

### Options
- Override the view's templates (views-view--name.html.twig, views-view-fields--name.html.twig, views-view-unformatted...) from the views module templates
- Views output is unthemeable
- Only via CSS transforms
- Edit the database view config

### Correct Answers
- [0] Override the view's templates (views-view--name.html.twig, views-view-fields--name.html.twig, views-view-unformatted...) from the views module templates

### Explanation
Views style plugins map to theme hooks with per-display suggestions; copy core's views templates into the theme and customize.

### Question 216

**Domain:** Front end Development (Theming)

What is a 'theme negotiator' used for?

### Options
- A service deciding which theme renders a request (e.g. admin theme on /admin routes) via theme negotiation rules
- It picks color schemes
- It merges libraries
- It translates strings

### Correct Answers
- [0] A service deciding which theme renders a request (e.g. admin theme on /admin routes) via theme negotiation rules

### Explanation
ThemeNegotiatorInterface implementations (RouteMatchThemeNegotiator) can switch themes per route/context — used by core for admin pages.

### Question 217

**Domain:** Front end Development (Theming)

How would you render the site in a special theme for a specific subdomain or partner campaign?

### Options
- Implement a custom theme negotiator service selecting the theme based on request host/context
- One theme per request is impossible
- Use user-agent sniffing in CSS only
- Edit index.php per campaign

### Correct Answers
- [0] Implement a custom theme negotiator service selecting the theme based on request host/context

### Explanation
Custom negotiators enable per-domain/per-section theming (microsites) while sharing one codebase and database.

### Question 218

**Domain:** Front end Development (Theming)

What renders the maintenance mode page?

### Options
- maintenance-page.html.twig (and install-page.html.twig) with limited variables since the site is not fully bootstrapped
- page.html.twig as usual
- A static HTML file in core root
- The admin theme always

### Correct Answers
- [0] maintenance-page.html.twig (and install-page.html.twig) with limited variables since the site is not fully bootstrapped

### Explanation
Maintenance/install pages use dedicated templates with a reduced pipeline; themes can override them for branded downtime pages.

### Question 219

**Domain:** Front end Development (Theming)

How do you ensure maintenance mode pages use your custom theme's maintenance template?

### Options
- The active default theme's maintenance-page.html.twig override is used; maintenance theming honors the default theme
- It always uses Seven
- Maintenance pages are unthemeable
- Requires a contrib module

### Correct Answers
- [0] The active default theme's maintenance-page.html.twig override is used; maintenance theming honors the default theme

### Explanation
Overriding maintenance-page.html.twig in the theme customizes the offline page (logo, message) shown during updates.

### Question 220

**Domain:** Front end Development (Theming)

What is a custom field formatter and how is it registered?

### Options
- A FieldFormatter plugin class (annotation/plugin in src/Plugin/Field/FieldFormatter) with settingsForm/viewElements, appearing in Manage display
- A Twig file alone
- Formatters are core-only
- A database trigger

### Correct Answers
- [0] A FieldFormatter plugin class (annotation/plugin in src/Plugin/Field/FieldFormatter) with settingsForm/viewElements, appearing in Manage display

### Explanation
Formatter plugins control how field values render (viewElements returns render arrays); settings expose options in the UI.

### Question 221

**Domain:** Front end Development (Theming)

A formatter should output a field as a responsive <picture>. What method returns output?

### Options
- viewElements(FieldItemListInterface $items, $langcode) returning a render array (e.g. responsive_image formatter pattern)
- toHtml() on the plugin
- printMarkup()
- render() is not used for formatters

### Correct Answers
- [0] viewElements(FieldItemListInterface $items, $langcode) returning a render array (e.g. responsive_image formatter pattern)

### Explanation
viewElements builds render arrays per field item list; the render pipeline handles caching and bubbling of cacheability.

### Question 222

**Domain:** Front end Development (Theming)

What is a field widget in Drupal's plugin system?

### Options
- A FieldWidget plugin defining the form element for editing field values (e.g. textfield, select, autocomplete)
- A JavaScript widget framework
- A dashboard gadget
- A CSS component

### Correct Answers
- [0] A FieldWidget plugin defining the form element for editing field values (e.g. textfield, select, autocomplete)

### Explanation
Widgets (FieldWidget plugin) control editing UX per field type; formatters control display; field types define storage — the field plugin trio.

### Question 223

**Domain:** Front end Development (Theming)

How do you add a setting (e.g. 'icon size') to a custom formatter?

### Options
- defaultSettings(), settingsForm(), and settingsSummary() on the formatter plugin; values stored in the display config
- Settings require a new field type
- Formatter settings are hard-coded
- Via JavaScript prompts

### Correct Answers
- [0] defaultSettings(), settingsForm(), and settingsSummary() on the formatter plugin; values stored in the display config

### Explanation
Plugin settings flow through these methods, persisting into entity_view_display configuration per instance.

### Question 224

**Domain:** Front end Development (Theming)

What does '#type' => 'container' with '#attributes' achieve in render arrays?

### Options
- Groups children in a wrapper div with classes/attributes, no form semantics
- Creates a database container
- Triggers AJAX automatically
- It renders a text field

### Correct Answers
- [0] Groups children in a wrapper div with classes/attributes, no form semantics

### Explanation
container elements wrap arbitrary children with attributes — the building block for structured markup in render arrays.

### Question 225

**Domain:** Front end Development (Theming)

How do render arrays express an unordered list?

### Options
- '#theme' => 'item_list' with '#items' array of items (strings or render arrays)
- A 'ul' element type
- Lists are impossible in render arrays
- '#type' => 'table' only

### Correct Answers
- [0] '#theme' => 'item_list' with '#items' array of items (strings or render arrays)

### Explanation
item_list theme hook renders ul/ol with items; nested arrays create nested lists — the canonical list pattern in Drupal.

### Question 226

**Domain:** Front end Development (Theming)

What does '#theme' => 'table' expect for data?

### Options
- '#header' (column definitions), '#rows' (array of row cell arrays), '#attributes', '#empty' for no-data text
- A CSV string
- A database connection
- JSON only

### Correct Answers
- [0] '#header' (column definitions), '#rows' (array of row cell arrays), '#attributes', '#empty' for no-data text

### Explanation
The table theme hook takes structured header/rows, with cells as strings or render arrays; #empty shows when rows are absent.

### Question 227

**Domain:** Front end Development (Theming)

How do you print a raw unescaped string in Twig (and why avoid it)?

### Options
- {{ my_var|raw }} bypasses escaping — dangerous with user input (XSS); prefer safe patterns
- {{ my_var|escape('html') }} does the same
- |raw is the default behavior
- It is fine for any input

### Correct Answers
- [0] {{ my_var|raw }} bypasses escaping — dangerous with user input (XSS); prefer safe patterns

### Explanation
|raw disables autoescaping; use only for known-safe markup (rendered arrays already handle safety via the renderer).

### Question 228

**Domain:** Front end Development (Theming)

What does the |placeholder filter do in Drupal Twig?

### Options
- Emits a placeholder that the render pipeline replaces later (placeholdering for highly dynamic content)
- It hides content
- It translates strings
- It clones elements

### Correct Answers
- [0] Emits a placeholder that the render pipeline replaces later (placeholdering for highly dynamic content)

### Explanation
Placeholdering lets highly dynamic fragments (per-user bits) be rendered lazily while the surrounding page caches aggressively.

### Question 229

**Domain:** Front end Development (Theming)

How does Drupal replace placeholders at render time?

### Options
- The renderer collects placeholders with lazy builders, renders the shell page, then swaps placeholders (BigPipe can stream them)
- Placeholders never get replaced
- Via cron only
- Placeholders require JavaScript frameworks

### Correct Answers
- [0] The renderer collects placeholders with lazy builders, renders the shell page, then swaps placeholders (BigPipe can stream them)

### Explanation
Lazy-builder placeholders decouple dynamic fragments from the cached page; BigPipe streams replacements for perceived speed.

### Question 230

**Domain:** Front end Development (Theming)

What is BigPipe in Drupal?

### Options
- A core module streaming page placeholders as they complete, improving perceived load time on dynamic pages
- A database pipeline
- A CSS methodology
- An image format

### Correct Answers
- [0] A core module streaming page placeholders as they complete, improving perceived load time on dynamic pages

### Explanation
BigPipe sends the static shell first, then JS-inserted placeholder content — Facebook's technique integrated with Drupal's render pipeline.

### Question 231

**Domain:** Front end Development (Theming)

A theme uses Sass/PostCSS. How does Drupal interact with the build?

### Options
- Drupal doesn't compile Sass; themes commit compiled CSS into libraries (build tools like Vite/webpack produce final assets)
- Drupal compiles Sass automatically
- Sass requires a PHP extension
- Only inline styles allowed

### Correct Answers
- [0] Drupal doesn't compile Sass; themes commit compiled CSS into libraries (build tools like Vite/webpack produce final assets)

### Explanation
Asset preprocessing is a front-end build concern; Drupal's libraries point at the built files, keeping runtime lean.

### Question 232

**Domain:** Front end Development (Theming)

How do you version/cache-bust theme assets after deploys?

### Options
- Drupal appends query strings per asset/library automatically on change; build tools can also emit hashed filenames referenced by libraries
- Assets are never cached
- Bust caches by renaming the theme
- Query strings are forbidden

### Correct Answers
- [0] Drupal appends query strings per asset/library automatically on change; build tools can also emit hashed filenames referenced by libraries

### Explanation
Drupal's asset system adds cache-busting query params from file mtimes/versions; hashed filenames from bundlers give even stronger busting.

### Question 233

**Domain:** Front end Development (Theming)

What does hook_js_settings_alter() enable?

### Options
- Modifying drupalSettings before they're sent to the browser (per-page adjustments)
- Editing JS files on disk
- Changing PHP settings
- It alters CSS only

### Correct Answers
- [0] Modifying drupalSettings before they're sent to the browser (per-page adjustments)

### Explanation
js_settings alter hooks finalize the settings payload — useful for computed values or sanitizing data modules attached.

### Question 234

**Domain:** Front end Development (Theming)

A modal dialog should open via Drupal's AJAX system from a link. What core pieces combine?

### Options
- A link with class 'use-ajax' and data-dialog-type/data-dialog-options attributes pointing at a route returning content; core dialog library renders it
- Modals need a JavaScript framework always
- Drupal has no dialog support
- Only alert() is possible

### Correct Answers
- [0] A link with class 'use-ajax' and data-dialog-type/data-dialog-options attributes pointing at a route returning content; core dialog library renders it

### Explanation
Drupal's AJAX/dialog system (core/drupal.ajax, core/drupal.dialog) opens route content in jQuery UI dialogs declaratively.

### Question 235

**Domain:** Front end Development (Theming)

What do AJAX 'commands' do in Drupal's ajax framework?

### Options
- Server returns a JSON command list (insert, replace, css, message) executed client-side to update the page
- They run shell commands
- They clear caches only
- They are SQL statements

### Correct Answers
- [0] Server returns a JSON command list (insert, replace, css, message) executed client-side to update the page

### Explanation
AjaxResponse with commands (InsertCommand, ReplaceCommand, MessageCommand) lets controllers drive DOM updates from the server.

### Question 236

**Domain:** Front end Development (Theming)

How do you return an AJAX response from a custom controller?

### Options
- Build an AjaxResponse object and add commands, returning it from the controller
- echo JSON and exit
- Controllers cannot do AJAX
- Return a string always

### Correct Answers
- [0] Build an AjaxResponse object and add commands, returning it from the controller

### Explanation
Controllers return Response objects; AjaxResponse with commands integrates with the client's ajax.js command dispatcher.

### Question 237

**Domain:** Front end Development (Theming)

A theme wants CSS custom properties (design tokens) per section. Implementation?

### Options
- Set tokens via body/section classes in preprocess, with CSS defining custom property values per class
- Custom properties are unsupported
- Only via JavaScript injection
- Tokens require a contrib module

### Correct Answers
- [0] Set tokens via body/section classes in preprocess, with CSS defining custom property values per class

### Explanation
CSS custom properties scoped by classes (added in preprocess or Layout Builder) implement section themes/design-token systems cleanly.

### Question 238

**Domain:** Front end Development (Theming)

How do you add 'skip to content' accessibility support in a theme?

### Options
- Include a skip-link anchor to #main-content in html/page templates, styled to appear on focus (core pattern)
- Skip links are automatic
- Skip links require JavaScript only
- Accessibility is optional in themes

### Correct Answers
- [0] Include a skip-link anchor to #main-content in html/page templates, styled to appear on focus (core pattern)

### Explanation
Core themes ship the skip-link pattern (visually hidden until focused) pointing at main content — preserve it in overrides for keyboard users.

### Question 239

**Domain:** Front end Development (Theming)

What does the 'visually-hidden' CSS class do in Drupal themes?

### Options
- Hides content visually while keeping it available to screen readers (clip technique)
- Removes elements from the DOM
- Disables animations
- It encrypts text

### Correct Answers
- [0] Hides content visually while keeping it available to screen readers (clip technique)

### Explanation
visually-hidden (core utility class) supports accessible labels/instructions without visual clutter — use instead of display:none for SR-relevant text.

### Question 240

**Domain:** Front end Development (Theming)

How should a theme declare dark-mode support?

### Options
- CSS with prefers-color-scheme media query and/or a class toggle, with assets in libraries; Drupal core has no built-in dark mode switch
- Drupal auto-darkens all themes
- Dark mode requires a base theme change
- It is impossible in Drupal

### Correct Answers
- [0] CSS with prefers-color-scheme media query and/or a class toggle, with assets in libraries; Drupal core has no built-in dark mode switch

### Explanation
Dark mode is a front-end concern: media queries or toggle classes plus custom properties; Drupal merely delivers the assets.

### Question 241

**Domain:** Front end Development (Theming)

What is the correct way to add meta tags (description, og:) per node?

### Options
- Contributed Metatag module mapping fields/tokens to tags, or custom hook_page_attachments/html_head render arrays
- Meta tags are hard-coded in core
- Only robots.txt matters
- Via image styles

### Correct Answers
- [0] Contributed Metatag module mapping fields/tokens to tags, or custom hook_page_attachments/html_head render arrays

### Explanation
Metatag (contrib) provides token-driven meta management; custom needs use html_head attachments keyed per page.

### Question 242

**Domain:** Front end Development (Theming)

How do you make images lazy-load in rendered fields?

### Options
- Drupal core adds loading="lazy" to image field output by default (configurable on the image element/formatter)
- Lazy loading is impossible
- Only via third-party JS always
- It requires a new image toolkit

### Correct Answers
- [0] Drupal core adds loading="lazy" to image field output by default (configurable on the image element/formatter)

### Explanation
Core image rendering sets native lazy loading attributes; above-the-fold hero images can override to eager via formatter/template control.

### Question 243

**Domain:** Front end Development (Theming)

What does hook_form_BASE_FORM_ID_alter() target compared to hook_form_alter()?

### Options
- A family of forms sharing a base form class (e.g. all node forms via form_node_form_alter)
- Only one specific form id
- Theme settings only
- User profile only

### Correct Answers
- [0] A family of forms sharing a base form class (e.g. all node forms via form_node_form_alter)

### Explanation
Base-form alters catch every form built on a base class (node forms across bundles), balancing specificity and coverage.

### Question 244

**Domain:** Front end Development (Theming)

How do you add a template for a custom render element '#type' => 'my_badge'?

### Options
- Define an element plugin (RenderElement) with getInfo() pointing to a theme hook, plus hook_theme registering the template
- Elements cannot have templates
- Use #markup strings only
- Templates require JS frameworks

### Correct Answers
- [0] Define an element plugin (RenderElement) with getInfo() pointing to a theme hook, plus hook_theme registering the template

### Explanation
Render element plugins declare their theme pipeline; pairing with hook_theme templates yields reusable custom elements.

### Question 245

**Domain:** Front end Development (Theming)

What is the role of '#prefix'/'#suffix' on render elements?

### Options
- Raw markup inserted around the element output (avoid where wrappers/#theme_wrappers suffice; risky for structure)
- They set database prefixes
- They translate strings
- They cache the element

### Correct Answers
- [0] Raw markup inserted around the element output (avoid where wrappers/#theme_wrappers suffice; risky for structure)

### Explanation
The #prefix/#suffix properties inject literal markup around elements; prefer structured wrappers to keep markup valid and cacheable.

### Question 246

**Domain:** Front end Development (Theming)

A 'newsroom' theme region should render only when it has blocks. How?

### Options
- In page.html.twig, wrap with {% if page.newsroom %} ... {% endif %}
- Regions auto-hide always
- Requires JavaScript checks
- Regions render empty divs forever

### Correct Answers
- [0] In page.html.twig, wrap with {% if page.newsroom %} ... {% endif %}

### Explanation
Region variables are empty when no blocks render; conditional wrappers prevent empty containers in markup.

### Question 247

**Domain:** Front end Development (Theming)

How do you add a favicon set (multiple sizes) in a theme?

### Options
- Theme settings 'Shortcut icon' for the basic favicon; richer sets via html_head_link attachments or a metatag/favicon contrib
- Favicons are not supported
- Only one ICO file ever
- Via CSS background-image

### Correct Answers
- [0] Theme settings 'Shortcut icon' for the basic favicon; richer sets via html_head_link attachments or a metatag/favicon contrib

### Explanation
Appearance settings upload the standard icon; modern multi-size/manifest icons are added through head link attachments.

### Question 248

**Domain:** Front end Development (Theming)

What is the effect of 'preprocess: false' in a libraries.yml JS entry?

### Options
- Excludes the file from aggregation/preprocessing (served as-is, e.g. already-minified or per-page scripts)
- It skips the file entirely
- It runs PHP preprocessing
- It disables the library

### Correct Answers
- [0] Excludes the file from aggregation/preprocessing (served as-is, e.g. already-minified or per-page scripts)

### Explanation
preprocess: false opts an asset out of aggregation — for dynamic or sensitive scripts that shouldn't be bundled.

### Question 249

**Domain:** Front end Development (Theming)

What does the 'every_page: true' option on a library do?

### Options
- Loads the library on every page without explicit attachment (rare; prefer targeted attachment)
- It disables caching
- It adds the library to cron only
- It marks the library external

### Correct Answers
- [0] Loads the library on every page without explicit attachment (rare; prefer targeted attachment)

### Explanation
every_page libraries attach globally — convenient but wasteful; global theme libraries in .info.yml serve the usual case.

### Question 250

**Domain:** Front end Development (Theming)

How are global theme libraries declared in .info.yml?

### Options
- 'libraries: - my_theme/global' (and libraries-extend for others) loading on all pages using the theme
- In the .theme file
- In a YAML under config/
- Global libraries are impossible

### Correct Answers
- [0] 'libraries: - my_theme/global' (and libraries-extend for others) loading on all pages using the theme

### Explanation
Theme .info.yml 'libraries:' attaches assets site-wide; page- or component-specific assets attach via render arrays/Twig.

### Question 251

**Domain:** Front end Development (Theming)

A block template needs the block's configuration value (e.g. a selected style). Access path?

### Options
- In block preprocess, read $variables['configuration'] (block plugin config) and expose it; or in template via preprocess-provided variables
- Block config is invisible to templates
- Only via database queries in Twig
- It requires editing the block module

### Correct Answers
- [0] In block preprocess, read $variables['configuration'] (block plugin config) and expose it; or in template via preprocess-provided variables

### Explanation
hook_preprocess_block receives configuration; exposing values as variables keeps templates logic-light and cacheable with proper tags.

### Question 252

**Domain:** Front end Development (Theming)

How do you safely render user-entered HTML in a template?

### Options
- Use the processed text field value (check_markup via field formatter) and render the render array — never {{ raw }} on raw input
- Always use |raw for flexibility
- HTML from users is banned entirely
- Escape with CSS

### Correct Answers
- [0] Use the processed text field value (check_markup via field formatter) and render the render array — never {{ raw }} on raw input

### Explanation
Text formats sanitize/filter input at render; relying on formatted output (render arrays) preserves security without |raw.

### Question 253

**Domain:** Front end Development (Theming)

What does hook_theme_registry_alter() do?

### Options
- Modifies the compiled theme registry (template paths, preprocess order) at cache build time
- It registers new users
- It clears all caches per request
- It only affects admin pages

### Correct Answers
- [0] Modifies the compiled theme registry (template paths, preprocess order) at cache build time

### Explanation
The theme registry maps hooks to implementations; altering it enables advanced overrides like redirecting templates per context.

### Question 254

**Domain:** Front end Development (Theming)

How do you check the current route name in a preprocess function?

### Options
- \Drupal::routeMatch()->getRouteName() via the current_route_match service
- Route names are unavailable
- Only in JavaScript
- From the database

### Correct Answers
- [0] \Drupal::routeMatch()->getRouteName() via the current_route_match service

### Explanation
The route match service exposes route name/parameters, enabling context-aware preprocessing (e.g. classes per route).

### Question 255

**Domain:** Front end Development (Theming)

What is the '#lazy_builder' render array key for?

### Options
- Registers a callable that builds content at placeholder-replacement time, keeping the parent cacheable
- It defers cron
- It minifies output lazily
- It is a debugging flag

### Correct Answers
- [0] Registers a callable that builds content at placeholder-replacement time, keeping the parent cacheable

### Explanation
Lazy builders pair with placeholdering: 'service:method' callbacks render dynamic fragments outside the cached shell.

### Question 256

**Domain:** Front end Development (Theming)

How do you add structured breadcrumbs for a section of the site?

### Options
- Implement a BreadcrumbBuilder service (tagged 'breadcrumb') matching routes and returning a Breadcrumb object with links and cacheability
- Breadcrumbs are hard-coded in page.html.twig
- They require a contrib module always
- Edit menu links only

### Correct Answers
- [0] Implement a BreadcrumbBuilder service (tagged 'breadcrumb') matching routes and returning a Breadcrumb object with links and cacheability

### Explanation
Breadcrumb builders (priority-ordered services) compute trails per route; applies() selects the builder per request.

### Question 257

**Domain:** Front end Development (Theming)

What does the 'local actions' concept (links.action.yml) provide?

### Options
- Action buttons on pages (e.g. '+ Add content' on node admin) defined per route
- JavaScript click handlers
- User permissions
- Cron jobs

### Correct Answers
- [0] Action buttons on pages (e.g. '+ Add content' on node admin) defined per route

### Explanation
*.links.action.yml registers local action links appearing as buttons on specified routes (add forms on admin listings).

### Question 258

**Domain:** Front end Development (Theming)

How would you add an 'Add event' button to the /events view page header?

### Options
- Register a local action on that route, or add a header area (Global: Text area) with the add link in the view
- Buttons require JS frameworks
- Views pages cannot have buttons
- Edit the menu system only

### Correct Answers
- [0] Register a local action on that route, or add a header area (Global: Text area) with the add link in the view

### Explanation
Local actions suit route-level buttons; view header areas embed arbitrary links/markup within the listing itself.

### Question 259

**Domain:** Front end Development (Theming)

What is the recommended way to include web fonts with good performance?

### Options
- Self-host subset WOFF2 files in the theme, reference via @font-face in library CSS with font-display: swap
- Load full families from Google without subsetting
- Fonts cannot be self-hosted
- Use JavaScript font loaders only

### Correct Answers
- [0] Self-host subset WOFF2 files in the theme, reference via @font-face in library CSS with font-display: swap

### Explanation
Self-hosted, subset WOFF2 with font-display: swap minimizes CLS/FOUT and avoids third-party dependencies.

### Question 260

**Domain:** Front end Development (Theming)

A theme's JS must behave differently on the front page. Best pattern?

### Options
- Pass a flag via drupalSettings from preprocess and branch in the behavior; or attach a front-page-only library via page_attachments condition
- Inspect document.title in JS
- Use separate themes per page
- JS cannot know the page

### Correct Answers
- [0] Pass a flag via drupalSettings from preprocess and branch in the behavior; or attach a front-page-only library via page_attachments condition

### Explanation
Server-side context reaches JS via drupalSettings or conditional library attachment — reliable unlike client-side guessing.

## Back end Development (Coding)

### Question 261

**Domain:** Back end Development (Coding)

What is the minimal structure of a custom module?

### Options
- A directory with my_module.info.yml (name, type, core_version_requirement); functionality added via .module file, src/ classes, YAML declarations
- A single PHP file anywhere
- A composer.json only
- Modules require a theme

### Correct Answers
- [0] A directory with my_module.info.yml (name, type, core_version_requirement); functionality added via .module file, src/ classes, YAML declarations

### Explanation
.info.yml registers the module; PSR-4 classes live in src/, procedural hooks in .module, and YAML files declare routes/services/menus.

### Question 262

**Domain:** Back end Development (Coding)

How does Drupal autoload module classes?

### Options
- PSR-4: namespace Drupal\my_module maps to modules/[...]/my_module/src
- Via require_once everywhere
- Through the database
- Autoloading is manual in Drupal

### Correct Answers
- [0] PSR-4: namespace Drupal\my_module maps to modules/[...]/my_module/src

### Explanation
Drupal's Composer-based autoloader maps module namespaces to their src directories; class discovery is automatic on cache rebuild.

### Question 263

**Domain:** Back end Development (Coding)

What does my_module.routing.yml define?

### Options
- Route names mapping paths to controllers/forms with requirements (permissions, roles) and options
- Database routes
- Theme regions
- Cron schedules

### Correct Answers
- [0] Route names mapping paths to controllers/forms with requirements (permissions, roles) and options

### Explanation
Routing YAML declares path, _controller/_form/_title, and access _permission/_role; Drupal's router matches requests to these handlers.

### Question 264

**Domain:** Back end Development (Coding)

A controller needs the entity_type.manager service. Correct pattern?

### Options
- Extend ControllerBase, implement create() pulling from the container, and declare the dependency in __construct()
- Use \Drupal static calls only
- Services cannot reach controllers
- new the manager directly

### Correct Answers
- [0] Extend ControllerBase, implement create() pulling from the container, and declare the dependency in __construct()

### Explanation
Dependency injection via create() keeps controllers testable and explicit; ControllerBase helpers (entityTypeManager()) lazily resolve common services.

### Question 265

**Domain:** Back end Development (Coding)

How are custom services registered?

### Options
- In my_module.services.yml: service id, class, arguments (e.g. '@logger.factory'), and optional tags
- In settings.php
- Services are core-only
- Via hook_menu

### Correct Answers
- [0] In my_module.services.yml: service id, class, arguments (e.g. '@logger.factory'), and optional tags

### Explanation
services.yml wires classes into the container with constructor arguments referencing other services (@) and parameters (%).

### Question 266

**Domain:** Back end Development (Coding)

What does 'autowiring' do in modern Drupal service definitions?

### Options
- Automatically resolves constructor dependencies by type-hint, reducing explicit arguments lists
- It wires JavaScript events
- It compiles CSS
- It is unrelated to services

### Correct Answers
- [0] Automatically resolves constructor dependencies by type-hint, reducing explicit arguments lists

### Explanation
Drupal 11 supports autowire: true in service definitions; the container matches type-hints to services, simplifying YAML.

### Question 267

**Domain:** Back end Development (Coding)

What are 'tagged services' (e.g. tags: - { name: event_subscriber }) used for?

### Options
- Letting the container collect all services with a tag (subscribers, breadcrumb builders, plugins) into compiler-pass consumers
- Versioning services
- Styling admin pages
- Marking slow services

### Correct Answers
- [0] Letting the container collect all services with a tag (subscribers, breadcrumb builders, plugins) into compiler-pass consumers

### Explanation
Tags flag services for discovery: event subscribers register with the dispatcher; breadcrumb builders chain by priority.

### Question 268

**Domain:** Back end Development (Coding)

How do you subscribe to Drupal events (e.g. kernel.request)?

### Options
- Create a class implementing EventSubscriberInterface with getSubscribedEvents() and tag it 'event_subscriber' in services.yml
- Events cannot be subscribed
- Use procedural listeners only
- Add a hook in .module

### Correct Answers
- [0] Create a class implementing EventSubscriberInterface with getSubscribedEvents() and tag it 'event_subscriber' in services.yml

### Explanation
Symfony-style events complement hooks; subscribers declare event => method mappings and receive event objects at dispatch.

### Question 269

**Domain:** Back end Development (Coding)

When are events preferred over hooks?

### Options
- For object-oriented, ordered, testable reactions to kernel/entity/config lifecycle points where an event exists
- Events replace all hooks
- Only for theming
- Only for cron

### Correct Answers
- [0] For object-oriented, ordered, testable reactions to kernel/entity/config lifecycle points where an event exists

### Explanation
Events give priorities and typed payloads (e.g. ConfigEvents, entity events in D11); hooks remain the broad extension mechanism.

### Question 270

**Domain:** Back end Development (Coding)

What is hook_entity_insert() vs hook_entity_presave()?

### Options
- presave runs before storage writes (can alter values); insert runs after a new entity is first saved (react to creation)
- They are identical
- insert runs before presave
- presave only runs for users

### Correct Answers
- [0] presave runs before storage writes (can alter values); insert runs after a new entity is first saved (react to creation)

### Explanation
The entity lifecycle: presave → insert/update → post-save hooks; choose presave for mutations, insert/update for reactions.

### Question 271

**Domain:** Back end Development (Coding)

How do you define a custom entity type?

### Options
- An entity class annotated/attributed as ContentEntityType with handlers (storage, list builder, form) and baseFieldDefinitions()
- Entities require a module per field
- Custom entities are impossible
- Only via the UI

### Correct Answers
- [0] An entity class annotated/attributed as ContentEntityType with handlers (storage, list builder, form) and baseFieldDefinitions()

### Explanation
Content entity types declare handlers, keys, links; base fields define schema; fieldable entities accept Field UI fields on top.

### Question 272

**Domain:** Back end Development (Coding)

What does the EntityTypeManager provide?

### Options
- Access to storage handlers and entity type definitions (getStorage('node'), getDefinition('taxonomy_term'))
- Theme switching
- User passwords
- Cron scheduling

### Correct Answers
- [0] Access to storage handlers and entity type definitions (getStorage('node'), getDefinition('taxonomy_term'))

### Explanation
entity_type.manager is the entry point for loading/saving entities via storage handlers and inspecting entity type metadata.

### Question 273

**Domain:** Back end Development (Coding)

How do you load multiple entities by ID efficiently?

### Options
- $storage->loadMultiple([1,2,3]) on the entity storage handler
- Loop load() with SQL each time
- Entities load one per request only
- Use the theme layer

### Correct Answers
- [0] $storage->loadMultiple([1,2,3]) on the entity storage handler

### Explanation
loadMultiple fetches entities in one query with static caching — the performant bulk-loading API.

### Question 274

**Domain:** Back end Development (Coding)

What is the Database API's query builder entry point?

### Options
- \Drupal::database()->select('node_field_data', 'n')->fields('n', ['nid','title'])... for SQL-level queries when Entity API isn't suitable
- Raw mysqli calls
- Only entity queries exist
- PDO is inaccessible

### Correct Answers
- [0] \Drupal::database()->select('node_field_data', 'n')->fields('n', ['nid','title'])... for SQL-level queries when Entity API isn't suitable

### Explanation
The database service offers select/insert/update/delete builders with placeholders — for custom tables or performance-critical reads outside entities.

### Question 275

**Domain:** Back end Development (Coding)

When is raw Database API preferred over Entity queries?

### Options
- Custom tables, complex joins/aggregations, or hot paths where entity loading overhead is unjustified
- Always; entities are slow
- Never; SQL is forbidden
- Only for images

### Correct Answers
- [0] Custom tables, complex joins/aggregations, or hot paths where entity loading overhead is unjustified

### Explanation
Entity API brings hooks/access/fields; database queries suit custom schemas and analytic queries — with care for access and caching.

### Question 276

**Domain:** Back end Development (Coding)

How do you create a custom database table for a module?

### Options
- hook_schema() in my_module.install defining the table columns/keys (applied on install/update)
- CREATE TABLE in a controller
- Tables appear automatically
- Via views UI

### Correct Answers
- [0] hook_schema() in my_module.install defining the table columns/keys (applied on install/update)

### Explanation
hook_schema declares tables Drupal creates on install; schema changes deploy via hook_update_N with db_add_field/db_change_field.

### Question 277

**Domain:** Back end Development (Coding)

What is the Form API workflow in a custom form class?

### Options
- FormBase subclass: getFormId(), buildForm() (elements), validateForm(), submitForm()
- One method does everything
- Forms are Twig-only
- FormBase is for themes

### Correct Answers
- [0] FormBase subclass: getFormId(), buildForm() (elements), validateForm(), submitForm()

### Explanation
Form classes declare element trees, validation, and submission handling; FormState carries values/errors through the lifecycle.

### Question 278

**Domain:** Back end Development (Coding)

How do you set a validation error on a form element?

### Options
- $form_state->setErrorByName('field_x', $this->t('Invalid value')) in validateForm()
- throw new Exception always
- Errors cannot be targeted
- Return FALSE from submit

### Correct Answers
- [0] $form_state->setErrorByName('field_x', $this->t('Invalid value')) in validateForm()

### Explanation
setErrorByName flags elements, blocking submission and highlighting fields; setError targets the whole element array.

### Question 279

**Domain:** Back end Development (Coding)

What does '#required' do server-side vs client-side?

### Options
- Both: adds the required attribute client-side and enforces non-empty submission server-side
- Client-side only decoration
- Server-side only
- Nothing; it's cosmetic

### Correct Answers
- [0] Both: adds the required attribute client-side and enforces non-empty submission server-side

### Explanation
Form API validates required fields on submit regardless of browser behavior — client-side attributes are a UX bonus, not security.

### Question 280

**Domain:** Back end Development (Coding)

How do you add a confirmation step to a destructive action?

### Options
- Extend ConfirmFormBase with getQuestion()/getCancelUrl() and confirmForm() performing the action
- JavaScript confirm() only
- Confirmations are impossible
- Delete without asking

### Correct Answers
- [0] Extend ConfirmFormBase with getQuestion()/getCancelUrl() and confirmForm() performing the action

### Explanation
ConfirmFormBase renders Yes/Cancel forms for destructive operations — the standard Drupal pattern (used by delete forms).

### Question 281

**Domain:** Back end Development (Coding)

What is the Queue API workflow for a custom worker?

### Options
- Define a QueueWorker plugin (@QueueWorker annotation with id/cron time) whose processItem() handles items; add items via queue_factory
- Queues require cron modules only
- Workers are YAML-only
- Queues process instantly always

### Correct Answers
- [0] Define a QueueWorker plugin (@QueueWorker annotation with id/cron time) whose processItem() handles items; add items via queue_factory

### Explanation
QueueWorker plugins declare cron processing time; items enqueued via \Drupal::queue('my_queue')->createItem($data) process in batches each cron.

### Question 282

**Domain:** Back end Development (Coding)

How does the Batch API process a long import?

### Options
- batch_set() with operations (callable + args); Drupal iterates with progress bar across requests until finished, then finished callback runs
- Batches run in one request only
- Batch is JavaScript-only
- Batch API is for images

### Correct Answers
- [0] batch_set() with operations (callable + args); Drupal iterates with progress bar across requests until finished, then finished callback runs

### Explanation
Batch operations chunk work across HTTP requests with $context sandbox tracking progress; used by update.php and imports.

### Question 283

**Domain:** Back end Development (Coding)

What does $context['finished'] signal in batch operations?

### Options
- A 0–1 progress fraction; returning < 1 keeps the operation running
- The batch failed
- The user canceled
- Memory limit hit

### Correct Answers
- [0] A 0–1 progress fraction; returning < 1 keeps the operation running

### Explanation
Operations report completion via $context['finished']; the batch runner re-invokes until 1, tracking state in $context['sandbox'].

### Question 284

**Domain:** Back end Development (Coding)

How do you invalidate a cache tag from code?

### Options
- \Drupal\Core\Cache\Cache::invalidateTags(['node:5']) or $entity->getCacheTagsToInvalidate()
- DELETE FROM cache_* via SQL
- Tags invalidate only via UI
- Caches are immutable

### Correct Answers
- [0] \Drupal\Core\Cache\Cache::invalidateTags(['node:5']) or $entity->getCacheTagsToInvalidate()

### Explanation
Tag-based invalidation marks cached items stale across bins; entity saves do this automatically through their tags.

### Question 285

**Domain:** Back end Development (Coding)

What is the difference between cache tags, contexts, and max-age?

### Options
- Tags invalidate on data changes; contexts vary cache per condition (user, url); max-age bounds freshness by time
- They are synonyms
- Tags vary per user
- Contexts delete data

### Correct Answers
- [0] Tags invalidate on data changes; contexts vary cache per condition (user, url); max-age bounds freshness by time

### Explanation
The cacheability triad: tags (what it depends on), contexts (what it varies by), max-age (how long it lives) — bubbled through render arrays.

### Question 286

**Domain:** Back end Development (Coding)

How do you store a computed value in the cache API?

### Options
- \Drupal::cache('default')->set('my_cid', $data, $expire, $tags) then ->get('my_cid') later
- file_put_contents in /tmp
- The session only
- Static PHP variables persist forever

### Correct Answers
- [0] \Drupal::cache('default')->set('my_cid', $data, $expire, $tags) then ->get('my_cid') later

### Explanation
Cache bins (default, render, data...) store serialized values with expiry/tags — the right tool for expensive computations.

### Question 287

**Domain:** Back end Development (Coding)

What does hook_cache_flush() do?

### Options
- Registers additional cache bins/tables a module maintains so they clear on cache rebuild
- It flushes the toilet cache
- It disables caching
- It runs every request

### Correct Answers
- [0] Registers additional cache bins/tables a module maintains so they clear on cache rebuild

### Explanation
Modules with custom cache tables declare them in hook_cache_flush so drush cr / clear-caches includes them.

### Question 288

**Domain:** Back end Development (Coding)

How does the State API differ from Config API for storing a 'last import timestamp'?

### Options
- State API (not exported, per-environment runtime data) is correct; Config would pollute sync and conflict across environments
- Config API is correct for everything
- Use the keyvalue table directly always
- Timestamps go in the theme

### Correct Answers
- [0] State API (not exported, per-environment runtime data) is correct; Config would pollute sync and conflict across environments

### Explanation
State stores environment-specific volatile values; exporting timestamps via config would cause false diffs and overwrites on import.

### Question 289

**Domain:** Back end Development (Coding)

How do you read a module's configuration in code?

### Options
- \Drupal::config('my_module.settings')->get('api_key') returning immutable config; editable via configFactory()->getEditable()
- parse the YAML manually
- Config is unreadable at runtime
- Use SQL on config table

### Correct Answers
- [0] \Drupal::config('my_module.settings')->get('api_key') returning immutable config; editable via configFactory()->getEditable()

### Explanation
Immutable config reads are cached; getEditable() returns a writable object saved with ->set()->save() — used by forms and update hooks.

### Question 290

**Domain:** Back end Development (Coding)

What does config/install vs config/optional mean in a module?

### Options
- config/install imports when the module installs (fails on conflicts); config/optional imports only if dependencies allow (skips silently otherwise)
- optional is for development only
- install is ignored
- They are identical

### Correct Answers
- [0] config/install imports when the module installs (fails on conflicts); config/optional imports only if dependencies allow (skips silently otherwise)

### Explanation
Optional config (e.g. a view) installs when its dependencies exist without breaking module install; install config is hard-required.

### Question 291

**Domain:** Back end Development (Coding)

What is 'config synchronization' between code and the database?

### Options
- Exporting active config to the sync directory (drush cex) and importing on deploy (drush cim) with UUID-checked diffs
- Copying the database file
- Git-syncing node content
- A theme setting

### Correct Answers
- [0] Exporting active config to the sync directory (drush cex) and importing on deploy (drush cim) with UUID-checked diffs

### Explanation
Config sync moves site configuration through version control; import applies YAML diffs to the active store safely.

### Question 292

**Domain:** Back end Development (Coding)

Why does Drupal block importing config exported from a different site?

### Options
- The site UUID mismatch check prevents applying foreign site config (use --source/site overrides or Config Ignore patterns)
- It doesn't block anything
- Because of file permissions only
- Imports are always allowed

### Correct Answers
- [0] The site UUID mismatch check prevents applying foreign site config (use --source/site overrides or Config Ignore patterns)

### Explanation
UUID binding stops catastrophic cross-site imports; workarounds (setting UUID, config split/ignore) handle intentional multi-site flows.

### Question 293

**Domain:** Back end Development (Coding)

What problem do Config Split and Config Ignore (contrib) solve?

### Options
- Environment-specific config (dev modules, API keys) excluded or split per environment during sync
- They split databases
- They ignore users
- They manage JavaScript

### Correct Answers
- [0] Environment-specific config (dev modules, API keys) excluded or split per environment during sync

### Explanation
Real deployments need per-env differences; Split/Ignore keep dev-only modules/settings out of production sync exports.

### Question 294

**Domain:** Back end Development (Coding)

How do you expose a configuration entity type from a custom module?

### Options
- A ConfigEntityType-annotated class with config_prefix, entity keys, and a config schema; plus a list builder and forms
- Config entities are core-only
- Via hook_menu
- Using State API

### Correct Answers
- [0] A ConfigEntityType-annotated class with config_prefix, entity keys, and a config schema; plus a list builder and forms

### Explanation
Config entities (like image styles, views) are exportable admin-managed objects — defined by annotation, handlers, and schema.

### Question 295

**Domain:** Back end Development (Coding)

What does the 'plugin.manager.*' service pattern provide?

### Options
- Discovery and instantiation of plugins for a type (blocks, field formatters, queue workers) via annotated classes in src/Plugin
- JavaScript plugins only
- Composer plugins
- Editor plugins

### Correct Answers
- [0] Discovery and instantiation of plugins for a type (blocks, field formatters, queue workers) via annotated classes in src/Plugin

### Explanation
Plugin managers scan annotated plugin classes, exposing createInstance($id) — Drupal's core extensibility pattern.

### Question 296

**Domain:** Back end Development (Coding)

How do you define a custom plugin type?

### Options
- A plugin manager extending DefaultPluginManager with an annotation class and interface; modules add plugins in src/Plugin/MyType
- Plugin types are fixed in core
- Via YAML only
- Only core can add types

### Correct Answers
- [0] A plugin manager extending DefaultPluginManager with an annotation class and interface; modules add plugins in src/Plugin/MyType

### Explanation
Custom plugin types = manager + annotation + interface; other modules then contribute plugin classes discoverable by your manager.

### Question 297

**Domain:** Back end Development (Coding)

What are PHP attributes replacing annotations for in Drupal 11?

### Options
- Plugin definitions (e.g. #[Block(...)], #[FieldFormatter(...)]) — attributes are the modern native-PHP metadata form
- Database indexes
- Twig filters
- User roles

### Correct Answers
- [0] Plugin definitions (e.g. #[Block(...)], #[FieldFormatter(...)]) — attributes are the modern native-PHP metadata form

### Explanation
Drupal 11 standardizes on PHP attributes for plugin discovery (annotations still supported in places); new code should use attributes.

### Question 298

**Domain:** Back end Development (Coding)

What does hook_help() provide?

### Options
- Help text on the module's admin help page (admin/help/my_module) with expandable sections
- JavaScript tooltips
- Chat support
- Man pages

### Correct Answers
- [0] Help text on the module's admin help page (admin/help/my_module) with expandable sections

### Explanation
hook_help('help.page.my_module') returns renderable help content; core's Help module lists module help pages.

### Question 299

**Domain:** Back end Development (Coding)

How do you add a custom permission?

### Options
- my_module.permissions.yml (or hook_permission) declaring title/description; enforced via _permission route requirement or ->access()
- Permissions are hard-coded
- Via the theme
- In settings.php

### Correct Answers
- [0] my_module.permissions.yml (or hook_permission) declaring title/description; enforced via _permission route requirement or ->access()

### Explanation
Declared permissions appear on the permissions page per role; routes and code check them via access systems.

### Question 300

**Domain:** Back end Development (Coding)

What does '_custom_access' route requirement expect?

### Options
- A controller/method callable returning AccessResultInterface deciding access dynamically
- A password
- A CSS class
- A cron interval

### Correct Answers
- [0] A controller/method callable returning AccessResultInterface deciding access dynamically

### Explanation
_custom_access wires route access to code (e.g. checking entity ownership) returning AccessResult objects with cacheability.

### Question 301

**Domain:** Back end Development (Coding)

How do you perform an HTTP request to an external API from Drupal?

### Options
- Inject 'http_client' (Guzzle) and call ->request('GET', $url, ['headers' => ...]) handling exceptions/timeouts
- Use curl_* functions directly
- file_get_contents on https URLs
- HTTP is unavailable in Drupal

### Correct Answers
- [0] Inject 'http_client' (Guzzle) and call ->request('GET', $url, ['headers' => ...]) handling exceptions/timeouts

### Explanation
The http_client service wraps Guzzle with Drupal config (proxy, timeouts); catching ClientException/ConnectException handles failures gracefully.

### Question 302

**Domain:** Back end Development (Coding)

What is the 'logger.channel.*' service pattern?

### Options
- Per-module logging channels via logger.factory->get('my_module') writing to watchdog/syslog backends
- Log rotation software
- Theme debugging
- A cache bin

### Correct Answers
- [0] Per-module logging channels via logger.factory->get('my_module') writing to watchdog/syslog backends

### Explanation
Logger channels namespace messages by module; backends (Database logging core, syslog contrib) store/route them.

### Question 303

**Domain:** Back end Development (Coding)

What does hook_requirements() report?

### Options
- Environment/module problems on the Status report page (install and runtime phases) with severity levels
- PHP version to users
- Theme requirements
- Cron schedules

### Correct Answers
- [0] Environment/module problems on the Status report page (install and runtime phases) with severity levels

### Explanation
Requirements hooks surface misconfigurations (missing PHP extensions, writable dirs) on /admin/reports/status with severity/values.

### Question 304

**Domain:** Back end Development (Coding)

How do you implement a custom Drush command in a module?

### Options
- A command class with #[CLI\Command] attributes (or @command annotations) in src/Commands, discovered via drush.services.yml/services tags
- Drush commands are core-only
- By editing drush itself
- Via hook_menu

### Correct Answers
- [0] A command class with #[CLI\Command] attributes (or @command annotations) in src/Commands, discovered via drush.services.yml/services tags

### Explanation
Drush 12+ discovers commands via classes (Symfony Console under the hood); modules ship operational commands (imports, fixups).

### Question 305

**Domain:** Back end Development (Coding)

What does 'drush sql:sync' do between environments?

### Options
- Copies a database from a source site alias to the target (e.g. prod → local) using site aliases
- It syncs CSS files
- It exports config only
- It backs up to cloud storage

### Correct Answers
- [0] Copies a database from a source site alias to the target (e.g. prod → local) using site aliases

### Explanation
Site aliases enable drush operations across environments; sql:sync pulls databases down for local development.

### Question 306

**Domain:** Back end Development (Coding)

How do you sanitize a database pulled from production?

### Options
- 'drush sql:sanitize' running sanitization plugins (obfuscating emails/passwords) per module hooks
- Delete all users manually
- Sanitization is impossible
- Export excludes users automatically

### Correct Answers
- [0] 'drush sql:sanitize' running sanitization plugins (obfuscating emails/passwords) per module hooks

### Explanation
sql:sanitize applies hook_drush_sql_sync_sanitize implementations scrambling personal data — essential for GDPR-safe dumps.

### Question 307

**Domain:** Back end Development (Coding)

What does the 'entity.repository' service help with?

### Options
- Loading entities by UUID, resolving translations (getTranslationFromContext), and canonical entity resolution
- Git integration
- Composer updates
- Theme switching

### Correct Answers
- [0] Loading entities by UUID, resolving translations (getTranslationFromContext), and canonical entity resolution

### Explanation
Entity repository centralizes cross-type lookups (by UUID) and translation context handling — avoiding scattered boilerplate.

### Question 308

**Domain:** Back end Development (Coding)

How do you programmatically create a user with a role?

### Options
- User::create(['name' => ..., 'mail' => ..., 'status' => 1]); $user->addRole('editor'); $user->save();
- INSERT INTO users via SQL
- Users come only from the UI
- Via the theme layer

### Correct Answers
- [0] User::create(['name' => ..., 'mail' => ..., 'status' => 1]); $user->addRole('editor'); $user->save();

### Explanation
Entity API handles users like other entities; addRole() manages role references with proper storage.

### Question 309

**Domain:** Back end Development (Coding)

What does the 'current_user' service expose?

### Options
- The acting account proxy (id, roles, permissions checks via hasPermission) for the request
- The database user
- The admin email
- A list of all users

### Correct Answers
- [0] The acting account proxy (id, roles, permissions checks via hasPermission) for the request

### Explanation
current_user (AccountProxy) is the injectable gateway to the request's user context — always inject rather than global $user.

### Question 310

**Domain:** Back end Development (Coding)

How do you switch to a specific user in code (e.g. for a CLI import)?

### Options
- Use the account_switcher service: switchTo($account) ... switchBack() to restore
- Overwrite global $user permanently
- Impersonation is impossible in code
- Edit sessions table

### Correct Answers
- [0] Use the account_switcher service: switchTo($account) ... switchBack() to restore

### Explanation
account_switcher safely changes acting user for a scope (imports acting as author), restoring context afterwards.

### Question 311

**Domain:** Back end Development (Coding)

What is the 'messenger' service used for?

### Options
- Queueing user-facing status/warning/error messages displayed on the next page render
- Sending emails
- Chat between users
- Clearing caches

### Correct Answers
- [0] Queueing user-facing status/warning/error messages displayed on the next page render

### Explanation
messenger->addStatus()/addError() (or drupal_set_message legacy) queues flash messages rendered by status-messages block.

### Question 312

**Domain:** Back end Development (Coding)

How do you redirect a user after a controller action?

### Options
- Return a RedirectResponse to a route/URL, or set redirect in form state for forms
- echo header('Location: ...')
- meta refresh in markup
- Controllers cannot redirect

### Correct Answers
- [0] Return a RedirectResponse to a route/URL, or set redirect in form state for forms

### Explanation
Controllers return Response objects; RedirectResponse with Url::fromRoute(...)->toString() is the clean redirect pattern.

### Question 313

**Domain:** Back end Development (Coding)

What does hook_menu_links_discovered_alter() modify?

### Options
- Menu link definitions discovered from *.links.menu.yml plugins (titles, parents, weights) before storage
- Node content only
- User sessions
- CSS files

### Correct Answers
- [0] Menu link definitions discovered from *.links.menu.yml plugins (titles, parents, weights) before storage

### Explanation
Menu links from YAML are plugin definitions; this alter hook adjusts them (e.g. reparenting a core link) at discovery time.

### Question 314

**Domain:** Back end Development (Coding)

How do you add a menu link pointing to a custom route?

### Options
- my_module.links.menu.yml with route_name, title, parent, weight
- Only via the UI
- Menu links require SQL
- Links come from the theme

### Correct Answers
- [0] my_module.links.menu.yml with route_name, title, parent, weight

### Explanation
Menu link plugins in YAML place routes into menus; hierarchy via 'parent' and ordering via 'weight'.

### Question 315

**Domain:** Back end Development (Coding)

What does the 'path_alias.manager' service do?

### Options
- Translates between internal paths (/node/5) and aliases (/about) via getAliasByPath()/getPathByAlias()
- It manages DNS
- It rewrites CSS URLs
- It shortens URLs externally

### Correct Answers
- [0] Translates between internal paths (/node/5) and aliases (/about) via getAliasByPath()/getPathByAlias()

### Explanation
path_alias.manager centralizes alias lookups for URL generation and inbound resolution.

### Question 316

**Domain:** Back end Development (Coding)

How are URL objects created safely in code?

### Options
- Url::fromRoute('my_route', ['param' => $x]) or Url::fromUri('https://...') with ->toString() for output
- String concatenation of paths
- URLs are forbidden
- Only in Twig

### Correct Answers
- [0] Url::fromRoute('my_route', ['param' => $x]) or Url::fromUri('https://...') with ->toString() for output

### Explanation
Url objects validate routes/params and generate correct aliased/absolute URLs; toString(TRUE) gives generated URLs with cacheability.

### Question 317

**Domain:** Back end Development (Coding)

What does '#attached' => ['drupalSettings'] require to reach JavaScript?

### Options
- The core/drupalSettings library dependency attached (settings are merged into the drupalSettings JS object)
- Nothing else ever
- A cron run
- A database flush

### Correct Answers
- [0] The core/drupalSettings library dependency attached (settings are merged into the drupalSettings JS object)

### Explanation
drupalSettings attachment depends on the drupalSettings library being present (usually via your library's dependencies).

### Question 318

**Domain:** Back end Development (Coding)

How do you add a contextual link ('Edit') to a custom rendered block of content?

### Options
- '#contextual_links' render array key mapping group ids to route parameters
- Contextual links are automatic everywhere
- Via CSS only
- Only nodes support them

### Correct Answers
- [0] '#contextual_links' render array key mapping group ids to route parameters

### Explanation
Contextual links (the pencil menu) come from render array metadata linking to edit routes — permission-checked automatically.

### Question 319

**Domain:** Back end Development (Coding)

What does hook_entity_view_alter() change?

### Options
- The built render array of an entity after view building (add/remove/reorder elements before rendering)
- Database schema
- User passwords
- Cron timing

### Correct Answers
- [0] The built render array of an entity after view building (add/remove/reorder elements before rendering)

### Explanation
view alter hooks adjust final render arrays (inject sharing links, reorder fields) without template changes.

### Question 320

**Domain:** Back end Development (Coding)

How do you control weight/order of elements in a render array?

### Options
- '#weight' property per child element (lower renders first)
- Order is alphabetical always
- Weights are random
- Only via templates

### Correct Answers
- [0] '#weight' property per child element (lower renders first)

### Explanation
The #weight property sorts render children deterministically; hooks use weights to position injected elements among existing ones.

### Question 321

**Domain:** Back end Development (Coding)

What is the 'renderer' service's render() vs renderPlain()?

### Options
- render() merges into the surrounding render pipeline/bubbling; renderPlain() renders isolated (emails, JSON) without merging cacheability
- They are identical
- renderPlain is for images
- render() is CLI-only

### Correct Answers
- [0] render() merges into the surrounding render pipeline/bubbling; renderPlain() renders isolated (emails, JSON) without merging cacheability

### Explanation
renderPlain suits out-of-band rendering (mail bodies, exports); render participates in cacheability/attachment bubbling within a page.

### Question 322

**Domain:** Back end Development (Coding)

How do you run code on module install and uninstall?

### Options
- hook_install()/hook_uninstall() in my_module.install
- Install hooks are impossible
- Only via update hooks
- In the theme file

### Correct Answers
- [0] hook_install()/hook_uninstall() in my_module.install

### Explanation
Install hooks seed data/tables on enable; uninstall hooks clean up module-owned data on removal.

### Question 323

**Domain:** Back end Development (Coding)

What does 'drush php:eval' (or php-cli) help with in development?

### Options
- Running arbitrary PHP with Drupal bootstrapped (quick entity/DB experiments) without writing a script
- Editing PHP files
- Compiling PHP
- It disables PHP

### Correct Answers
- [0] Running arbitrary PHP with Drupal bootstrapped (quick entity/DB experiments) without writing a script

### Explanation
drush php bootstraps Drupal for ad-hoc API exploration — ideal for testing entity queries and service calls interactively.

### Question 324

**Domain:** Back end Development (Coding)

How do you implement a custom access policy granting editors access to unpublished content of one type?

### Options
- A route/entity access hook: hook_entity_access() returning allowed for that bundle when the user has your custom permission
- Grant 'bypass content access control' to everyone
- Unpublished content is visible to all by default
- CSS-hide the unpublished badge

### Correct Answers
- [0] A route/entity access hook: hook_entity_access() returning allowed for that bundle when the user has your custom permission

### Explanation
hook_entity_access() layers custom rules (bundle + permission) atop core access, returning cache-aware AccessResults.

### Question 325

**Domain:** Back end Development (Coding)

What does the 'datetime' service format helper provide?

### Options
- date.formatter service for locale-aware date formatting using core/custom date formats
- A calendar UI widget
- Timezone detection only
- Cron parsing

### Correct Answers
- [0] date.formatter service for locale-aware date formatting using core/custom date formats

### Explanation
date.formatter->format($timestamp, 'medium') renders localized dates through configured formats; custom formats are config.

### Question 326

**Domain:** Back end Development (Coding)

How do you create a custom date format?

### Options
- At admin/config/regional/date-time or as core.date_format.*.yml config shipped by a module
- Only in PHP constants
- Date formats are fixed
- Via JavaScript

### Correct Answers
- [0] At admin/config/regional/date-time or as core.date_format.*.yml config shipped by a module

### Explanation
Date formats are config entities (PHP date patterns) referenced by formatters throughout views, fields, and code.

### Question 327

**Domain:** Back end Development (Coding)

What does hook_ENTITY_TYPE_create() do that hook_init() cannot?

### Options
- React to creation of a specific entity type instance (set defaults before first save); hook_init runs per page request unrelated to entities
- They are identical
- create() only runs for nodes
- init() sets entity defaults

### Correct Answers
- [0] React to creation of a specific entity type instance (set defaults before first save); hook_init runs per page request unrelated to entities

### Explanation
Entity create hooks initialize new instances; hook_init is a per-request procedural hook (avoid for heavy work).

### Question 328

**Domain:** Back end Development (Coding)

How do you expose a computed property on an entity (e.g. full name from first+last)?

### Options
- A computed base field definition (BaseFieldDefinition with setComputed(TRUE) and a getter/class) or a getter method on the entity class
- Computed fields are impossible
- Only via views
- Store it duplicated in SQL

### Correct Answers
- [0] A computed base field definition (BaseFieldDefinition with setComputed(TRUE) and a getter/class) or a getter method on the entity class

### Explanation
Computed fields derive values at runtime via typed-data callbacks — no storage, available to formatters/APIs.

### Question 329

**Domain:** Back end Development (Coding)

What does the 'typed data' API provide?

### Options
- A typed wrapper over data (fields, config) with validation constraints, used by entities and REST serialization
- A JavaScript type checker
- A database driver
- A CSS type scale

### Correct Answers
- [0] A typed wrapper over data (fields, config) with validation constraints, used by entities and REST serialization

### Explanation
Typed data underpins field items/config with definitions, constraints, and serialization — powering validation and API output.

### Question 330

**Domain:** Back end Development (Coding)

How do you add a validation constraint to an entity field in code?

### Options
- hook_entity_bundle_field_info_alter()/field definitions with addConstraint() referencing constraint plugins (e.g. 'UniqueField' or custom)
- Constraints are UI-only
- Only via JavaScript validation
- Validation cannot be customized

### Correct Answers
- [0] hook_entity_bundle_field_info_alter()/field definitions with addConstraint() referencing constraint plugins (e.g. 'UniqueField' or custom)

### Explanation
Field definitions accept constraint plugins; custom Constraint + ConstraintValidator classes implement complex validation cleanly.

### Question 331

**Domain:** Back end Development (Coding)

What does hook_entity_extra_field_info() add?

### Options
- Pseudo/extra fields (computed or UI-only elements) on entities, configurable in Manage display like real fields
- Real database columns
- New entity types
- User permissions

### Correct Answers
- [0] Pseudo/extra fields (computed or UI-only elements) on entities, configurable in Manage display like real fields

### Explanation
Extra fields (e.g. 'Share links') appear among fields in display settings; hook_entity_view provides their render content.

### Question 332

**Domain:** Back end Development (Coding)

How does JSON:API expose a custom entity type?

### Options
- Automatically once the entity type is JSON:API-enabled (it scans entity types; access and fields map to resources)
- It requires custom controllers per entity
- JSON:API only supports nodes
- Custom entities need XML first

### Correct Answers
- [0] Automatically once the entity type is JSON:API-enabled (it scans entity types; access and fields map to resources)

### Explanation
JSON:API introspects entity types/fields producing spec-compliant endpoints; configuration (JSON:API Extras) can restrict/rename resources.

### Question 333

**Domain:** Back end Development (Coding)

What is the role of a 'normalizer' in Drupal's serialization?

### Options
- Converts typed data/entities to arrays per format (json, hal_json) via tagged serializer.normalizer services
- It minifies JSON
- It normalizes databases only
- It is a CSS tool

### Correct Answers
- [0] Converts typed data/entities to arrays per format (json, hal_json) via tagged serializer.normalizer services

### Explanation
Symfony serializer with Drupal normalizers turns entities into API representations; custom normalizers adjust output (computed fields, renames).

### Question 334

**Domain:** Back end Development (Coding)

How do you authenticate API requests for a decoupled app in Drupal?

### Options
- Core HTTP Basic/ cookie auth, or contrib OAuth2/JWT (Simple OAuth) issuing tokens per consumer
- APIs are always open
- Auth is impossible for REST
- Only IP whitelisting exists

### Correct Answers
- [0] Core HTTP Basic/ cookie auth, or contrib OAuth2/JWT (Simple OAuth) issuing tokens per consumer

### Explanation
Authentication providers in YAML (basic_auth, cookie) plus contrib OAuth flows secure web services per endpoint/role.

### Question 335

**Domain:** Back end Development (Coding)

What does the 'flood control' system prevent?

### Options
- Brute-force/repeated actions (failed logins, contact submissions) via flood->register()/isAllowed() thresholds
- Database flooding only
- Image resizing attacks
- CSS overflow

### Correct Answers
- [0] Brute-force/repeated actions (failed logins, contact submissions) via flood->register()/isAllowed() thresholds

### Explanation
The flood service tracks attempts per identifier/IP with windows/limits — reusable in custom forms prone to abuse.

### Question 336

**Domain:** Back end Development (Coding)

How do you protect a custom form from CSRF?

### Options
- Form API embeds and validates form tokens automatically (form_build_id/token); custom routes can use CSRF token requirement (_csrf_token)
- CSRF is impossible in Drupal
- Add a hidden field manually always
- Only HTTPS matters

### Correct Answers
- [0] Form API embeds and validates form tokens automatically (form_build_id/token); custom routes can use CSRF token requirement (_csrf_token)

### Explanation
Drupal's form tokens plus route-level CSRF requirements (csrf_token service) protect state-changing endpoints.

### Question 337

**Domain:** Back end Development (Coding)

What does the 'machine_name' form element enforce?

### Options
- Lowercase letters, numbers, underscores with a unique-check callback — used for vocabulary/content type machine names
- Any characters
- Only emoji
- It stores MAC addresses

### Correct Answers
- [0] Lowercase letters, numbers, underscores with a unique-check callback — used for vocabulary/content type machine names

### Explanation
machine_name elements validate pattern and existence via '#machine_name' => ['exists' => callable], powering admin config forms.

### Question 338

**Domain:** Back end Development (Coding)

How do entity reference autocomplete widgets resolve results in code?

### Options
- Selection handlers (SelectionPlugin) building entity queries per field settings (target bundles, sort)
- Autocomplete is JavaScript-only with fixed data
- They search the theme
- Only users autocomplete

### Correct Answers
- [0] Selection handlers (SelectionPlugin) building entity queries per field settings (target bundles, sort)

### Explanation
Entity reference selection plugins control which entities are referenceable (default, views-based); custom handlers add business rules.

### Question 339

**Domain:** Back end Development (Coding)

What does hook_stream_wrappers() enable?

### Options
- Registering custom stream wrappers (scheme://) for alternative storage backends alongside public://private://
- Video streaming
- CSS wrappers
- API rate limiting

### Correct Answers
- [0] Registering custom stream wrappers (scheme://) for alternative storage backends alongside public://private://

### Explanation
Stream wrappers abstract file storage (S3 via contrib s3fs) so modules handle URIs uniformly regardless of backend.

### Question 340

**Domain:** Back end Development (Coding)

How does private file serving control access?

### Options
- Private:// files route through Drupal; hook_file_download() grants/denies per file based on access logic
- Private files are public by default
- Access is random
- Only via .htaccess passwords

### Correct Answers
- [0] Private:// files route through Drupal; hook_file_download() grants/denies per file based on access logic

### Explanation
Private files stream via PHP after access checks (headers from hook_file_download), protecting sensitive documents.

### Question 341

**Domain:** Back end Development (Coding)

What does the 'file_system' service offer?

### Options
- File operations (copy/move/delete, realpath, tempnam, prepareDirectory) wrapping PHP functions with stream wrapper support
- FTP clients
- Disk formatting
- Theme CSS only

### Correct Answers
- [0] File operations (copy/move/delete, realpath, tempnam, prepareDirectory) wrapping PHP functions with stream wrapper support

### Explanation
file_system (Drupal\Core\File\FileSystem) is the injectable, wrapper-aware file API replacing procedural file_* calls.

### Question 342

**Domain:** Back end Development (Coding)

How do you save an uploaded file from a custom form?

### Options
- Validate with file_save_upload()/managed_file element, then $file->setPermanent(); $file->save(); record usage via file.usage service
- move_uploaded_file into random dirs
- Uploads are impossible
- Store files in the database blobs only

### Correct Answers
- [0] Validate with file_save_upload()/managed_file element, then $file->setPermanent(); $file->save(); record usage via file.usage service

### Explanation
Managed file elements + permanent status + usage tracking keep files from being garbage-collected and wire them into media/fields.

### Question 343

**Domain:** Back end Development (Coding)

What does the 'image.toolkit' service do?

### Options
- Performs image operations (scale, crop, rotate) via the configured toolkit (GD default, ImageMagick via contrib)
- It draws SVG icons
- It manages users
- It is a JS image editor

### Correct Answers
- [0] Performs image operations (scale, crop, rotate) via the configured toolkit (GD default, ImageMagick via contrib)

### Explanation
Image toolkit plugins execute derivative operations; switching to ImageMagick (contrib) improves quality/format support.

### Question 344

**Domain:** Back end Development (Coding)

What does the 'transliteration' service provide?

### Options
- Converting unicode text to ASCII for machine names/aliases (transliterate($string))
- Language translation
- Speech-to-text
- Font rendering

### Correct Answers
- [0] Converting unicode text to ASCII for machine names/aliases (transliterate($string))

### Explanation
Transliteration normalizes names/aliases (é → e) — used by Pathauto patterns and file naming.

### Question 345

**Domain:** Back end Development (Coding)

How do you add a custom token type usable in Pathauto?

### Options
- hook_token_info() declaring the type/tokens and hook_tokens() producing values for the data object
- Tokens are fixed
- Only via JavaScript
- Edit token module core

### Correct Answers
- [0] hook_token_info() declaring the type/tokens and hook_tokens() producing values for the data object

### Explanation
Token hooks integrate custom data into patterns (aliases, metatags, emails) with cacheable replacements.

### Question 346

**Domain:** Back end Development (Coding)

What is the purpose of '#element_validate' callbacks?

### Options
- Element-level validators (e.g. url, number) added to individual elements, running during form validation
- They validate themes
- They run on cron only
- They validate users

### Correct Answers
- [0] Element-level validators (e.g. url, number) added to individual elements, running during form validation

### Explanation
element_validate attaches reusable validators per element; Form API ships common ones (machine names, URLs, numbers).

### Question 347

**Domain:** Back end Development (Coding)

What does '#process' do on a render/form element?

### Options
- Callbacks expanding an element into a compound structure (e.g. datetime expanding into date/time parts)
- It runs JavaScript
- It processes payments
- It is a cache key

### Correct Answers
- [0] Callbacks expanding an element into a compound structure (e.g. datetime expanding into date/time parts)

### Explanation
The #process callbacks build composite elements at form build time; complementary #value_callback/#element_validate manage values.

### Question 348

**Domain:** Back end Development (Coding)

What is '#after_build' used for?

### Options
- Post-processing the fully built element (e.g. adjusting children after defaults populate) before render
- It runs after site deployment
- It cleans caches
- It is a Twig hook

### Correct Answers
- [0] Post-processing the fully built element (e.g. adjusting children after defaults populate) before render

### Explanation
after_build callbacks receive the finished element array — used to fix states/defaults once all processing completed.

### Question 349

**Domain:** Back end Development (Coding)

How does 'tabledrag' re-order rows in admin forms?

### Options
- tabledrag JS on tables with weight fields (tabledrag-example style classes) submits new weights on save
- It drags files only
- It requires jQuery UI sortable always
- It is for frontend galleries

### Correct Answers
- [0] tabledrag JS on tables with weight fields (tabledrag-example style classes) submits new weights on save

### Explanation
Tabledrag pairs table markup with hidden weight elements; core's tabledrag.js handles drag handles and hierarchy (menu/vocab ordering).

### Question 350

**Domain:** Back end Development (Coding)

What does hook_module_implements_alter() change?

### Options
- Which module implements a hook and their order (rare; e.g. running your hook_entity_insert last)
- It disables modules entirely
- It changes themes
- It reorders CSS

### Correct Answers
- [0] Which module implements a hook and their order (rare; e.g. running your hook_entity_insert last)

### Explanation
This alter adjusts hook invocation order — a last-resort tool when another module's implementation must be overridden.

### Question 351

**Domain:** Back end Development (Coding)

How do you define an alter hook others can implement?

### Options
- \Drupal::moduleHandler()->alter('my_type', $data) invoking hook_my_type_alter() across modules
- Alters are core-only
- Via events only
- It is automatic

### Correct Answers
- [0] \Drupal::moduleHandler()->alter('my_type', $data) invoking hook_my_type_alter() across modules

### Explanation
moduleHandler->alter() dispatches alter hooks so other modules modify your data — the extensibility contract for custom subsystems.

### Question 352

**Domain:** Back end Development (Coding)

What is the ModuleHandler's role beyond hooks?

### Options
- Managing module lifecycle (moduleExists, loadInclude, invokeAll) and alter dispatch
- Rendering pages
- Sending mail
- Minifying CSS

### Correct Answers
- [0] Managing module lifecycle (moduleExists, loadInclude, invokeAll) and alter dispatch

### Explanation
module_handler service introspects enabled modules, includes files, and invokes/orders hook implementations.

### Question 353

**Domain:** Back end Development (Coding)

How do you write a PHPUnit unit test for a Drupal service?

### Options
- Extend UnitTestCase, instantiate the class with mocked dependencies (no container/kernel)
- Unit tests require a database always
- Tests run in the browser only
- PHPUnit is unsupported

### Correct Answers
- [0] Extend UnitTestCase, instantiate the class with mocked dependencies (no container/kernel)

### Explanation
Unit tests isolate classes with mocks; Kernel tests add a minimal container; Browser/FunctionalJavascript test full pages.

### Question 354

**Domain:** Back end Development (Coding)

When are Kernel tests the right choice?

### Options
- Testing code needing Drupal services/database (entity storage, config) without full page requests
- For CSS testing
- Only for JavaScript
- Never; use browser tests always

### Correct Answers
- [0] Testing code needing Drupal services/database (entity storage, config) without full page requests

### Explanation
KernelTestBase boots a minimal Drupal (selected modules/schemas) for integration-ish tests that stay fast.

### Question 355

**Domain:** Back end Development (Coding)

What does a FunctionalJavascript test use to drive the browser?

### Options
- WebDriver (chromedriver) via Mink with JS assertions (waitForElementVisible)
- cURL only
- Twig linting
- SQL assertions only

### Correct Answers
- [0] WebDriver (chromedriver) via Mink with JS assertions (waitForElementVisible)

### Explanation
FunctionalJavascript tests exercise AJAX/JS behavior in a real browser session — crucial for form ajax and dialogs.

### Question 356

**Domain:** Back end Development (Coding)

How do you check coding standards in a custom module?

### Options
- phpcs with the Drupal coder standard (phpcs --standard=Drupal,DrupalPractice) via composer dev dependencies
- Standards are unenforced
- Only manual review exists
- phpcs is for CSS

### Correct Answers
- [0] phpcs with the Drupal coder standard (phpcs --standard=Drupal,DrupalPractice) via composer dev dependencies

### Explanation
drupal/coder provides PHPCS rules enforcing Drupal coding standards and best practices, fixable via phpcbf.

### Question 357

**Domain:** Back end Development (Coding)

What is Drupal Rector used for?

### Options
- Automated code upgrades fixing deprecated API usages across major versions
- A theme generator
- A content migration tool
- A cache clearer

### Correct Answers
- [0] Automated code upgrades fixing deprecated API usages across major versions

### Explanation
drupal-rector rewrites deprecated calls (e.g. drupal_set_message → messenger) easing D10→D11 custom code upgrades.

### Question 358

**Domain:** Back end Development (Coding)

What does the 'webprofiler' (Devel) module show?

### Options
- A debug toolbar with queries, cache hits, routes, events, and timeline per request
- A WYSIWYG editor
- A page builder
- A payment gateway

### Correct Answers
- [0] A debug toolbar with queries, cache hits, routes, events, and timeline per request

### Explanation
Webprofiler surfaces performance/debug data per request (Symfony profiler style) — the standard Drupal dev profiler.

### Question 359

**Domain:** Back end Development (Coding)

How do you send logs to an external log service (e.g. via syslog/Monolog)?

### Options
- Contrib logging backends (syslog core module, Monolog contrib) registered as logger backends
- Logs cannot leave the DB
- Only watchdog exists forever
- Email all errors

### Correct Answers
- [0] Contrib logging backends (syslog core module, Monolog contrib) registered as logger backends

### Explanation
Logger backends are pluggable; core Database logging can be replaced/complemented by syslog/Monolog for centralized logging.

### Question 360

**Domain:** Back end Development (Coding)

What does hook_cronapi() or ECA/Ultimate Cron offer beyond hook_cron()?

### Options
- Granular scheduling/management of cron jobs (per-job timing, locking, UI) via contrib systems
- Cron is fixed to hourly
- They replace PHP with cron
- Nothing; cron is unmanageable

### Correct Answers
- [0] Granular scheduling/management of cron jobs (per-job timing, locking, UI) via contrib systems

### Explanation
Ultimate Cron/ECA provide per-job schedules and monitoring, solving 'everything runs on one cron tick' limitations.

### Question 361

**Domain:** Back end Development (Coding)

How do you prevent two overlapping cron runs of a heavy job?

### Options
- The lock API (lock->acquire('my_job', $timeout)) or State last-run checks
- Sleep for an hour
- Locks are impossible
- Run cron per user

### Correct Answers
- [0] The lock API (lock->acquire('my_job', $timeout)) or State last-run checks

### Explanation
lock service ensures mutual exclusion for long operations (cron overlaps, batch concurrency) with expiring locks.

### Question 362

**Domain:** Back end Development (Coding)

What does the 'keyvalue' store offer modules?

### Options
- Simple key/value collections (expirable via keyvalue.expirable) for lookups not fitting State/Config
- A relational model
- File storage
- Cache tags only

### Correct Answers
- [0] Simple key/value collections (expirable via keyvalue.expirable) for lookups not fitting State/Config

### Explanation
keyvalue (and expirable variants) back State API and offer custom fast lookup stores without schema overhead.

### Question 363

**Domain:** Back end Development (Coding)

How do you implement a 'remember me' style long-lived token feature?

### Options
- Store hashed tokens in a custom table/keyvalue with expiry; set secure cookies and validate on request via an event subscriber
- Save plain passwords in cookies
- Tokens are impossible
- Use session fixation

### Correct Answers
- [0] Store hashed tokens in a custom table/keyvalue with expiry; set secure cookies and validate on request via an event subscriber

### Explanation
Persistent login needs server-side hashed tokens with rotation/expiry validated in request subscribers — never raw credentials client-side.

### Question 364

**Domain:** Back end Development (Coding)

What is the 'csrf_token' service used for outside forms?

### Options
- Generating/validating CSRF tokens for routes/links (e.g. destructive GET endpoints) via token()->get('path') and validation
- It encrypts files
- It manages sessions only
- It is for CSS

### Correct Answers
- [0] Generating/validating CSRF tokens for routes/links (e.g. destructive GET endpoints) via token()->get('path') and validation

### Explanation
CSRF tokens guard state-changing URLs; core uses them for links like comment delete with _csrf_token requirement.

### Question 365

**Domain:** Back end Development (Coding)

How do you expose module data to an external search index (Algolia/Elasticsearch)?

### Options
- Push via hooks/queues on entity save using their PHP SDK, or use Search API backends (Elasticsearch Connector) handling indexing
- Drupal auto-syncs to Algolia
- Search indexes are illegal
- Only via cron wget

### Correct Answers
- [0] Push via hooks/queues on entity save using their PHP SDK, or use Search API backends (Elasticsearch Connector) handling indexing

### Explanation
Search API's backend architecture handles indexing pipelines; custom integrations push changes in entity hooks via queues for scale.

### Question 366

**Domain:** Back end Development (Coding)

What does hook_search_api_index_items_alter()-style hooks do in Search API?

### Options
- Modify indexed items/fields before they go to the backend (add computed data, boost)
- They theme facets
- They clear caches
- They manage users

### Correct Answers
- [0] Modify indexed items/fields before they go to the backend (add computed data, boost)

### Explanation
Search API processors and alter hooks enrich documents (aggregated fields, boosts) shaping relevance without backend code.

### Question 367

**Domain:** Back end Development (Coding)

How do you add a computed field to a Search API index?

### Options
- A Search API 'computed field' processor or hook providing the property value per item
- Computed fields are impossible
- Only via JavaScript
- Index the theme instead

### Correct Answers
- [0] A Search API 'computed field' processor or hook providing the property value per item

### Explanation
Processors extend indexed data (e.g. combined text, related counts), configured per index in the UI.

### Question 368

**Domain:** Back end Development (Coding)

What is a 'facets' widget in Search API ecosystem?

### Options
- Filter widgets (checkbox lists, ranges) built from indexed field aggregations via the Facets module
- A theme grid system
- A database facet type
- A CSS unit

### Correct Answers
- [0] Filter widgets (checkbox lists, ranges) built from indexed field aggregations via the Facets module

### Explanation
Facets map index fields to configurable filters on views/search pages with result counts and URL state.

### Question 369

**Domain:** Back end Development (Coding)

How do you implement a custom Field Type plugin?

### Options
- A FieldType plugin class defining schema(), propertyDefinitions(), plus default widget/formatter references
- Field types are core-only
- Via Twig templates
- Only via YAML

### Correct Answers
- [0] A FieldType plugin class defining schema(), propertyDefinitions(), plus default widget/formatter references

### Explanation
Custom field types (e.g. 'geo point' with lat/lng properties) declare storage schema and typed properties, then widgets/formatters for UI.

### Question 370

**Domain:** Back end Development (Coding)

What does schema() on a field type define?

### Options
- The SQL columns/indexes per field item property so storage can create tables
- The theme schema
- JSON schema only
- Cache bins

### Correct Answers
- [0] The SQL columns/indexes per field item property so storage can create tables

### Explanation
Field type schema maps properties (value, lat, lng) to columns; SQL storage creates field tables accordingly.

### Question 371

**Domain:** Back end Development (Coding)

How do you add a revisionable custom entity?

### Options
- Set 'revisionable' entity keys/handlers (revision metadata fields, revision table) in the entity annotation and base fields
- Revisions are node-only
- Only via contrib
- Revisions require two databases

### Correct Answers
- [0] Set 'revisionable' entity keys/handlers (revision metadata fields, revision table) in the entity annotation and base fields

### Explanation
Revision support is declarative: revision keys, revision_* tables, and the revision log/user base fields — then workflows can moderate.

### Question 372

**Domain:** Back end Development (Coding)

What does hook_entity_revision_create()-style hooks let you do?

### Options
- React to new revisions (default values on the revision, notifications) in the revision lifecycle
- Delete all revisions
- They are theme hooks
- Nothing; revisions are sealed

### Correct Answers
- [0] React to new revisions (default values on the revision, notifications) in the revision lifecycle

### Explanation
Revision hooks fire when revisions are created, enabling defaults (log messages, author) and reactions (audit trails).

### Question 373

**Domain:** Back end Development (Coding)

How do you make a custom entity translatable?

### Options
- Mark fields/entity translatable in the entity definition ('translatable' => TRUE, data_table definitions) enabling Content Translation integration
- Translation is node-only
- Via JavaScript
- Duplicate the entity per language manually

### Correct Answers
- [0] Mark fields/entity translatable in the entity definition ('translatable' => TRUE, data_table definitions) enabling Content Translation integration

### Explanation
Translatable entities declare data tables and translatable field definitions; Content Translation module then manages per-language values.

### Question 374

**Domain:** Back end Development (Coding)

What does the 'entity.form_builder' service do?

### Options
- Builds entity forms programmatically (getForm($entity, 'default')) outside of routes
- It builds themes
- It renders views
- It sends mail

### Correct Answers
- [0] Builds entity forms programmatically (getForm($entity, 'default')) outside of routes

### Explanation
entity.form_builder produces entity edit forms in any context (wizards, modals) honoring form modes.

### Question 375

**Domain:** Back end Development (Coding)

How do form modes differ from view modes?

### Options
- Form modes configure entity form displays (widget order/visibility) selectable per operation; view modes configure output
- They are the same
- Form modes are for users only
- View modes handle input

### Correct Answers
- [0] Form modes configure entity form displays (widget order/visibility) selectable per operation; view modes configure output

### Explanation
Form modes (entity_form_mode) give alternate editing layouts (e.g. 'quick edit'), rendered via entity form builder per mode.

### Question 376

**Domain:** Back end Development (Coding)

What does hook_entity_form_display_alter() change?

### Options
- The form display object before the form builds (hide/reorder widgets conditionally)
- The theme registry
- The database schema
- User roles

### Correct Answers
- [0] The form display object before the form builds (hide/reorder widgets conditionally)

### Explanation
Altering form displays lets modules adjust widget components per context beyond static Manage form display config.

### Question 377

**Domain:** Back end Development (Coding)

How do you add a custom constraint validator for a unique SKU across products?

### Options
- Constraint + ConstraintValidator classes; validator queries for duplicates and adds violations
- JS-only validation
- Unique checks are impossible
- Rely on editors

### Correct Answers
- [0] Constraint + ConstraintValidator classes; validator queries for duplicates and adds violations

### Explanation
Symfony-style constraints validate entities on save; validators inject dependencies (entity type manager) for lookups.

### Question 378

**Domain:** Back end Development (Coding)

What does the 'pathauto' alias type API allow custom modules to do?

### Options
- Provide alias patterns for custom entities by implementing an AliasType plugin
- Pathauto works for nodes only
- It blocks aliases
- It generates sitemaps

### Correct Answers
- [0] Provide alias patterns for custom entities by implementing an AliasType plugin

### Explanation
Pathauto alias types connect entity types to token patterns; custom entities integrate via plugin + hooks for bulk generation.

### Question 379

**Domain:** Back end Development (Coding)

How do you generate an entity's canonical URL in code?

### Options
- $entity->toUrl('canonical')->toString() or toLink()
- Concatenate '/node/' . $id manually
- URLs are unavailable
- Only via Twig

### Correct Answers
- [0] $entity->toUrl('canonical')->toString() or toLink()

### Explanation
Entity toUrl()/toLink() produce route-based URLs/links with cacheability — preferred over manual path building.

### Question 380

**Domain:** Back end Development (Coding)

What does hook_entity_load() being removed in Drupal 8+ imply?

### Options
- Use specific lifecycle hooks (presave, insert, update, delete) or storage-level events; there is no generic post-load hook
- Entities cannot load anymore
- Loading is slower intentionally
- It moved to JavaScript

### Correct Answers
- [0] Use specific lifecycle hooks (presave, insert, update, delete) or storage-level events; there is no generic post-load hook

### Explanation
Generic load hooks were removed for performance (static/entity caching); per-entity-class methods or storage handlers cover transformations.

### Question 381

**Domain:** Back end Development (Coding)

How do you customize entity storage behavior (e.g. post-load enrichment)?

### Options
- Override the entity's storage handler class (hook_entity_type_alter setting 'handlers' => ['storage' => MyStorage]) extending SqlContentEntityStorage
- Storage is fixed forever
- Only via SQL triggers
- Edit core entity classes

### Correct Answers
- [0] Override the entity's storage handler class (hook_entity_type_alter setting 'handlers' => ['storage' => MyStorage]) extending SqlContentEntityStorage

### Explanation
Storage handlers are swappable per entity type; overriding methods (postLoad, save) customizes persistence behavior.

### Question 382

**Domain:** Back end Development (Coding)

What does hook_entity_type_alter() allow?

### Options
- Modifying entity type definitions (handlers, keys, links) provided by other modules
- It deletes entity types
- It only affects nodes
- It is a theming hook

### Correct Answers
- [0] Modifying entity type definitions (handlers, keys, links) provided by other modules

### Explanation
Entity type alters swap handlers (storage/list builders) or adjust definitions — e.g. adding a moderation handler to a contrib entity.

### Question 383

**Domain:** Back end Development (Coding)

How do you add a base field to an existing entity type (e.g. 'rating' integer on nodes)?

### Options
- hook_entity_base_field_info() returning BaseFieldDefinition items; install via update hook with entity definition update manager
- Base fields are impossible on nodes
- Only via Field UI
- Edit node.module

### Correct Answers
- [0] hook_entity_base_field_info() returning BaseFieldDefinition items; install via update hook with entity definition update manager

### Explanation
Base fields (code-defined, all bundles) deploy via definition update manager; bundle fields (config) come from Field UI/config.

### Question 384

**Domain:** Back end Development (Coding)

What does the 'entity_definition_update_manager' handle?

### Options
- Applying entity/field storage definition changes (install/uninstall fields) in update hooks
- Theme updates
- User imports
- Cache clearing only

### Correct Answers
- [0] Applying entity/field storage definition changes (install/uninstall fields) in update hooks

### Explanation
Schema changes for entity storage run through this manager (installFieldStorageDefinition/uninstallFieldStorageDefinition) in hook_update_N.

### Question 385

**Domain:** Back end Development (Coding)

How do you expose a REST resource (custom endpoint) in Drupal 11?

### Options
- A REST Resource plugin class (@RestResource with uri_paths) implementing get/post etc. with permissions
- REST endpoints are core-only
- Only via views
- REST is deprecated entirely

### Correct Answers
- [0] A REST Resource plugin class (@RestResource with uri_paths) implementing get/post etc. with permissions

### Explanation
REST plugin resources expose custom data/actions via the RESTful Web Services module, with granular permissions per method.

### Question 386

**Domain:** Back end Development (Coding)

What is the 'serializer' service used for directly?

### Options
- ->serialize($entity, 'json') producing API payloads outside full REST resources
- It serializes CSS
- It caches pages
- It manages users

### Correct Answers
- [0] ->serialize($entity, 'json') producing API payloads outside full REST resources

### Explanation
The serializer converts entities/typed data to formats programmatically — handy for custom endpoints and exports.

### Question 387

**Domain:** Back end Development (Coding)

How do you add rate limiting to a custom API endpoint?

### Options
- Flood service checks in the controller (register/isAllowed per client) or infrastructure-level limits
- Rate limits are impossible
- Sleep() on every request
- Only robots.txt

### Correct Answers
- [0] Flood service checks in the controller (register/isAllowed per client) or infrastructure-level limits

### Explanation
Flood provides app-level throttling with windows/limits; edge/proxy limits complement for heavy traffic.

### Question 388

**Domain:** Back end Development (Coding)

What does hook_xmlsitemap()-style integration imply about sitemap generation?

### Options
- XML Sitemap (contrib) builds sitemaps from entity links with hooks for custom links/priority settings
- Sitemaps are core
- Sitemaps need manual XML files
- Robots generate them

### Correct Answers
- [0] XML Sitemap (contrib) builds sitemaps from entity links with hooks for custom links/priority settings

### Explanation
Contrib XML Sitemap indexes entity links with per-bundle inclusion/priority and hook_xmlsitemap_link_alter for customization.

### Question 389

**Domain:** Back end Development (Coding)

How do you run custom code during config import (e.g. reacting to a new config entity)?

### Options
- Subscribe to ConfigEvents (config import/crud events) via an event subscriber
- Config import triggers hooks randomly
- It is impossible
- Poll the sync directory

### Correct Answers
- [0] Subscribe to ConfigEvents (config import/crud events) via an event subscriber

### Explanation
ConfigCrudEvent/ConfigImporterEvents let modules react to config changes programmatically (cache clears, derived data).

### Question 390

**Domain:** Back end Development (Coding)

What does hook_config_import_steps_alter() / ConfigImporter steps customize?

### Options
- Additional steps during config import (contrib uses this for post-import processing)
- The theme CSS
- User passwords
- Cron intervals

### Correct Answers
- [0] Additional steps during config import (contrib uses this for post-import processing)

### Explanation
Config import runs staged steps; modules can add steps (e.g. reindexing) ensuring imports complete consistently.

### Question 391

**Domain:** Back end Development (Coding)

How do you add a console progress bar to a long Drush command?

### Options
- Use Symfony Console's ProgressBar helper ($this->io()->progressStart()) in the command class
- Progress is impossible in CLI
- echo dots manually only
- Drush has no I/O helpers

### Correct Answers
- [0] Use Symfony Console's ProgressBar helper ($this->io()->progressStart()) in the command class

### Explanation
Drush commands inherit Symfony Console IO helpers (progress bars, tables, confirms) for polished CLI UX.

### Question 392

**Domain:** Back end Development (Coding)

What does 'drush cache:rebuild' do differently from older cache-clear?

### Options
- Rebuilds the container and all caches safely for a live site (new container on request), the standard clear command
- It deletes the database
- It only clears CSS
- It reinstalls Drupal

### Correct Answers
- [0] Rebuilds the container and all caches safely for a live site (new container on request), the standard clear command

### Explanation
cache:rebuild (cr) rebuilds compiled container, theme registry, and cache bins — required after code/YAML changes.

### Question 393

**Domain:** Back end Development (Coding)

How do you regenerate the service container after adding services.yml?

### Options
- drush cache:rebuild (container compile happens during rebuild)
- Restart Apache only
- It auto-rebuilds per request
- Delete sites/default/files manually

### Correct Answers
- [0] drush cache:rebuild (container compile happens during rebuild)

### Explanation
Container compilation is part of cache rebuild; new/changed service definitions apply after cr.

### Question 394

**Domain:** Back end Development (Coding)

What does a 'ServiceProvider' (my_module/src/MyModuleServiceProvider.php) modify?

### Options
- The container itself: alter/replace service definitions at compile time (e.g. decorating core services)
- Theme CSS
- Cron schedule
- User roles

### Correct Answers
- [0] The container itself: alter/replace service definitions at compile time (e.g. decorating core services)

### Explanation
ServiceProvider::alter() lets modules swap core service classes (e.g. custom mail backend) before the container compiles.

### Question 395

**Domain:** Back end Development (Coding)

What is service decoration used for in Drupal?

### Options
- Wrapping an existing service to extend behavior (e.g. adding caching around a fetcher) keeping the original service id
- Replacing themes
- Removing modules
- Hiding fields

### Correct Answers
- [0] Wrapping an existing service to extend behavior (e.g. adding caching around a fetcher) keeping the original service id

### Explanation
Decorators (services.yml 'decorates' key) intercept calls to an inner service, adding behavior without forking core code.

### Question 396

**Domain:** Back end Development (Coding)

How do you implement 'lazy' heavy service loading?

### Options
- Depend on the service normally; Drupal's container instantiates on demand, or use service closure/proxy patterns for heavy chains
- Services are always eager
- Use static globals
- Lazy loading is impossible

### Correct Answers
- [0] Depend on the service normally; Drupal's container instantiates on demand, or use service closure/proxy patterns for heavy chains

### Explanation
Symfony containers build services lazily by default; 'lazy: true'/proxies defer truly heavy initializations further.

### Question 397

**Domain:** Back end Development (Coding)

What does hook_deploy() (deploy hooks) provide vs hook_update_N()?

### Options
- Post-config-import one-time operations (content transforms) decoupled from schema updates, run by drush deploy
- It deploys servers
- It updates themes only
- It replaces cron

### Correct Answers
- [0] Post-config-import one-time operations (content transforms) decoupled from schema updates, run by drush deploy

### Explanation
Deploy hooks run after updates+config import — the right place for content migrations dependent on new configuration.

### Question 398

**Domain:** Back end Development (Coding)

How do you write a custom cache context (vary by a cookie, say)?

### Options
- A CacheContext plugin/service (cache.context.* tag) implementing getContext()/getCacheableMetadata()
- Contexts are core-only
- Via JavaScript
- Cache contexts need SQL

### Correct Answers
- [0] A CacheContext plugin/service (cache.context.* tag) implementing getContext()/getCacheableMetadata()

### Explanation
Custom cache contexts vary caches by arbitrary conditions (cookies, AB tests), registered as services with cache.context tags.

### Question 399

**Domain:** Back end Development (Coding)

What does 'renderer placeholder' strategy 'placeholder.single' vs BigPipe change?

### Options
- How placeholders render: inline single-pass vs streamed progressive rendering (BigPipe) for perceived performance
- The color scheme
- Database engines
- Cron timing

### Correct Answers
- [0] How placeholders render: inline single-pass vs streamed progressive rendering (BigPipe) for perceived performance

### Explanation
Placeholder strategies decide delivery of dynamic fragments; BigPipe streams them after the shell for faster first paint.

### Question 400

**Domain:** Back end Development (Coding)

A module must react to a user login (e.g. sync last-login to CRM). Best implementation?

### Options
- hook_user_login() receiving the account, or an event subscriber on user login events where available
- Poll sessions table
- Login hooks do not exist
- JavaScript on the login form only

### Correct Answers
- [0] hook_user_login() receiving the account, or an event subscriber on user login events where available

### Explanation
hook_user_login($account) fires on successful authentication — the canonical integration point for post-login actions.
