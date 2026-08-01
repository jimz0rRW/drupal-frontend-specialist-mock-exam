# Acquia Certified Drupal Site Builder Practice Questions

## Jump to Section:

- [Understanding Drupal and Working with a Drupal Site](#understanding-drupal-and-working-with-a-drupal-site)
- [Content Modeling](#content-modeling)
- [Site Display](#site-display)
- [Site Configuration](#site-configuration)
- [Contributed Module and Theme Management](#contributed-module-and-theme-management)
- [Security and Performance](#security-and-performance)

## Understanding Drupal and Working with a Drupal Site

### Question 1

**Domain:** Understanding Drupal and Working with a Drupal Site

You are explaining Drupal's architecture to a new team member. Which statement best describes the relationship between Drupal core, modules, and themes?

### Options
- Drupal core provides the base framework and essential features; modules add or extend functionality; themes control the presentation layer
- Drupal core is only the database layer; modules control presentation; themes add functionality
- Modules are part of Drupal core and cannot be disabled; themes provide all site functionality
- Themes define the data model; modules define how pages look; core only handles user authentication

### Correct Answers
- [0] Drupal core provides the base framework and essential features; modules add or extend functionality; themes control the presentation layer

### Explanation
Drupal core ships the framework and essential features. Modules (core or contributed) extend functionality, while themes control look and feel. This separation is fundamental to how Drupal sites are built.

### Question 2

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder needs to add a new article to the site. In a standard Drupal 11 installation, which admin path would they typically use to create this content?

### Options
- /admin/config/content/article
- /node/add/article
- /admin/structure/types/add
- /admin/content/article/new

### Correct Answers
- [1] /node/add/article

### Explanation
Content is created from /node/add/{type} or via the Content overview (Add content button). /admin/structure/types manages content types themselves, not individual nodes.

### Question 3

**Domain:** Understanding Drupal and Working with a Drupal Site

Your organization wants a platform where editors manage content through a web interface without writing code, while developers can extend it with APIs. Which Drupal characteristic makes it a good fit?

### Options
- Drupal is a static site generator that compiles HTML files
- Drupal is a content management framework combining a web-based CMS with a flexible, API-first architecture
- Drupal is a hosted page builder that does not allow custom code
- Drupal is a headless-only service with no administrative interface

### Correct Answers
- [1] Drupal is a content management framework combining a web-based CMS with a flexible, API-first architecture

### Explanation
Drupal is often described as a content management framework: it provides out-of-the-box CMS capabilities plus a framework for custom development, including REST/JSON:API support in core.

### Question 4

**Domain:** Understanding Drupal and Working with a Drupal Site

A stakeholder asks what "nodes" are in Drupal. What is the best answer?

### Options
- Nodes are individual server instances in a Drupal hosting cluster
- Nodes are pieces of content, such as articles or basic pages, stored as Drupal's primary content entity type
- Nodes are menu links in the administration toolbar
- Nodes are reusable CSS classes used by themes

### Correct Answers
- [1] Nodes are pieces of content, such as articles or basic pages, stored as Drupal's primary content entity type

### Explanation
In Drupal, a node is a piece of content (a node entity). Articles and basic pages are node types (bundles). This terminology appears throughout the admin UI and documentation.

### Question 5

**Domain:** Understanding Drupal and Working with a Drupal Site

Under which license is Drupal core distributed, and what does that mean for your client's site?

### Options
- Proprietary license; the client must pay per-site fees
- GNU General Public License (GPL) v2 or later; the software is free to use, modify, and distribute
- MIT license; only non-commercial use is allowed
- Apache license; modifications may not be redistributed

### Correct Answers
- [1] GNU General Public License (GPL) v2 or later; the software is free to use, modify, and distribute

### Explanation
Drupal is licensed under GPL v2 or later, like its dependencies. It can be used, studied, modified, and redistributed freely, which is why there are no license fees for Drupal itself.

### Question 6

**Domain:** Understanding Drupal and Working with a Drupal Site

You are reviewing a fresh Drupal 11 install and want to confirm which core modules are enabled and the exact core version running. Which admin report gives you this directly?

### Options
- Status report at /admin/reports/status
- Recent log messages at /admin/reports/dblog
- Top 'page not found' errors at /admin/reports/page-not-found
- Available updates at /admin/reports/updates

### Correct Answers
- [0] Status report at /admin/reports/status

### Explanation
The Status report shows the Drupal core version, PHP version, web server, and configuration warnings. Available updates shows newer releases but not the full environment picture.

### Question 7

**Domain:** Understanding Drupal and Working with a Drupal Site

Which technologies does Drupal 11 core build upon? (Choose two)

### Options
- Symfony components for the underlying framework
- Twig as the theme templating engine
- jQuery UI as the primary PHP framework
- Smarty templates for all front-end output

### Correct Answers
- [0] Symfony components for the underlying framework
- [1] Twig as the theme templating engine

### Explanation
Since Drupal 8, core uses Symfony components (routing, HTTP kernel, dependency injection, etc.) and the Twig templating engine for theming. Smarty and PHPTemplate are not used by modern Drupal core.

### Question 8

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder wants to change the site's name and slogan shown in the header and outgoing emails. Where is this configured?

### Options
- /admin/config/system/site-information
- /admin/config/people/accounts
- /admin/appearance/settings
- /admin/config/regional/settings

### Correct Answers
- [0] /admin/config/system/site-information

### Explanation
Basic site information (site name, slogan, email address, default front page, error pages) lives under Configuration > System > Basic site settings.

### Question 9

**Domain:** Understanding Drupal and Working with a Drupal Site

Your team needs a listing of all content on the site with the ability to filter by type, status, and language. Which core-provided page provides this out of the box?

### Options
- The Content overview at /admin/content
- The Structure page at /admin/structure
- The Configuration page at /admin/config
- The Extend page at /admin/modules

### Correct Answers
- [0] The Content overview at /admin/content

### Explanation
The Content page (/admin/content) lists all content with filters for type, published status, and language, plus bulk operations like publish, unpublish, and delete.

### Question 10

**Domain:** Understanding Drupal and Working with a Drupal Site

A client asks whether Drupal can run scheduled tasks such as cleaning up temporary files and checking for updates. What core feature handles this?

### Options
- The queue worker UI at /admin/config/system/queue
- Cron, which can be triggered automatically at set intervals or manually from /admin/config/system/cron
- The theme registry rebuild at /admin/appearance
- The content scheduler in the node edit form

### Correct Answers
- [0] Cron, which can be triggered automatically at set intervals or manually from /admin/config/system/cron

### Explanation
Drupal's cron runs periodic maintenance tasks. Core can run it automatically via the Automated Cron module, or it can be triggered externally by hitting the cron URL or running drush cron.

### Question 11

**Domain:** Understanding Drupal and Working with a Drupal Site

A new editor cannot find the admin pages because the black admin toolbar is missing for their account. What is the most likely cause?

### Options
- The Toolbar module is uninstalled
- Their role lacks the 'Use the administration toolbar' permission
- The admin theme is set to a front-end theme
- The user account is blocked

### Correct Answers
- [1] Their role lacks the 'Use the administration toolbar' permission

### Explanation
The toolbar only renders for users with the 'Use the administration toolbar' permission. Granting it to the editor role restores the toolbar without changing themes or modules.

### Question 12

**Domain:** Understanding Drupal and Working with a Drupal Site

What is the role of an installation profile in Drupal?

### Options
- It defines a pre-configured set of modules, themes, and configuration used to set up a new Drupal site
- It stores user profile fields shown on registration
- It manages the list of installed languages
- It configures the PHP version requirements on the server

### Correct Answers
- [0] It defines a pre-configured set of modules, themes, and configuration used to set up a new Drupal site

### Explanation
Installation profiles (like Standard, Minimal, Umami demo) bundle modules, themes, and default configuration so a new site can be set up with a chosen feature set during installation.

### Question 13

**Domain:** Understanding Drupal and Working with a Drupal Site

During installation you chose the "Minimal" profile instead of "Standard". What is the practical difference for the site builder?

### Options
- Minimal installs only a small set of core modules and almost no default configuration, so most content types and features must be created manually
- Minimal removes the ability to install contributed modules later
- Minimal is only for headless sites and has no admin UI
- Minimal skips the database setup to speed up installation

### Correct Answers
- [0] Minimal installs only a small set of core modules and almost no default configuration, so most content types and features must be created manually

### Explanation
The Minimal profile enables very few modules and ships no default content types, views, or editor configuration, whereas Standard sets up Article/Page types, a WYSIWYG editor, comments, and more.

### Question 14

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder wants to place a "Powered by Drupal" block in the footer. Which core subsystem manages placing blocks into theme regions?

### Options
- The Block layout page at /admin/structure/block
- The Menu administration at /admin/structure/menu
- The Views UI at /admin/structure/views
- The Field UI at /admin/structure/types

### Correct Answers
- [0] The Block layout page at /admin/structure/block

### Explanation
Block layout lets you place core, custom, and module-provided blocks into theme regions, with visibility conditions by page, content type, role, and language.

### Question 15

**Domain:** Understanding Drupal and Working with a Drupal Site

Which statement about Drupal's admin theme is correct?

### Options
- The admin theme can be set independently of the default front-end theme, and is used for administration and optionally content editing pages
- The admin theme must always match the front-end theme
- Admin pages cannot be themed and always use Stark
- The admin theme only applies to the user login page

### Correct Answers
- [0] The admin theme can be set independently of the default front-end theme, and is used for administration and optionally content editing pages

### Explanation
At /admin/appearance you choose an administration theme (Claro is the Drupal 11 default). A checkbox controls whether it is also used for content editing pages.

### Question 16

**Domain:** Understanding Drupal and Working with a Drupal Site

A developer tells you Drupal 11 is "entity-based". What does that mean for a site builder?

### Options
- All site content and configuration must be written in YAML files
- Most things in Drupal (nodes, users, taxonomy terms, blocks, media) are entities with fields, which can be extended consistently through the Field UI
- Entities are a contributed module that must be installed separately
- Only nodes can have fields; users and taxonomy cannot

### Correct Answers
- [1] Most things in Drupal (nodes, users, taxonomy terms, blocks, media) are entities with fields, which can be extended consistently through the Field UI

### Explanation
Drupal's entity system means content types, users, taxonomy terms, custom blocks, and media are all fieldable entities. Site builders can add fields to any of them using the same Field UI patterns.

### Question 17

**Domain:** Understanding Drupal and Working with a Drupal Site

You need to give the marketing team a way to manage the main navigation menu without developer help. Which core feature supports this?

### Options
- The Menu UI at /admin/structure/menu, where menu links can be added, edited, reordered, and disabled
- Editing menu.html.twig in the active theme
- The Views bulk operations page
- The configuration synchronization page

### Correct Answers
- [0] The Menu UI at /admin/structure/menu, where menu links can be added, edited, reordered, and disabled

### Explanation
Menus are manageable through the UI: links can be added, drag-and-drop reordered, nested, and disabled. Menus are then placed on the page as blocks.

### Question 18

**Domain:** Understanding Drupal and Working with a Drupal Site

What does the "Extend" page (/admin/modules) allow a site builder to do?

### Options
- Enable and disable modules, and see which are installed with their dependencies
- Write custom PHP modules directly in the browser
- Purchase commercial modules from a marketplace
- Edit the code of installed modules

### Correct Answers
- [0] Enable and disable modules, and see which are installed with their dependencies

### Explanation
The Extend page lists all modules present in the codebase, lets you install (enable) or uninstall them, and shows dependencies and version information. Code changes happen on the filesystem, not in the UI.

### Question 19

**Domain:** Understanding Drupal and Working with a Drupal Site

A stakeholder heard Drupal has a large community. Where is the central hub for Drupal documentation, modules, themes, and issue queues?

### Options
- drupal.org
- symfony.com
- packagist.org
- wordpress.org

### Correct Answers
- [0] drupal.org

### Explanation
Drupal.org hosts the project (core, contributed modules/themes/distributions), documentation, issue queues, and user accounts. It is the canonical source for finding and evaluating contributed projects.

### Question 20

**Domain:** Understanding Drupal and Working with a Drupal Site

An editor reports that their changes to a node are not visible to anonymous visitors even though they saved the node. The site has no workflow module enabled. What is the most likely explanation?

### Options
- The node was saved as unpublished
- The database is corrupt
- The node type does not allow revisions
- Anonymous users cannot view any content by default

### Correct Answers
- [0] The node was saved as unpublished

### Explanation
Each node has a published state. If an editor unchecks "Published" (or it is unset), anonymous users get a 403/404. Republishing the node makes it visible again.

### Question 21

**Domain:** Understanding Drupal and Working with a Drupal Site

Which of the following are ways to navigate administration in a standard Drupal 11 site? (Choose two)

### Options
- The admin toolbar with drop-down menus (Admin Toolbar module provides expanded dropdowns for toolbar)
- The /admin index page listing administrative tasks
- The public REST API documentation page
- The PHP error log viewer at /admin/reports/php

### Correct Answers
- [0] The admin toolbar with drop-down menus (Admin Toolbar module provides expanded dropdowns for toolbar)
- [1] The /admin index page listing administrative tasks

### Explanation
Site builders primarily navigate via the core Toolbar (top black bar) and the /admin task index. The toolbar exposes Manage > Content, Structure, Appearance, Extend, Configuration, People, and Reports.

### Question 22

**Domain:** Understanding Drupal and Working with a Drupal Site

What is the purpose of the Maintenance mode setting at /admin/config/development/maintenance?

### Options
- It puts the site into a state where anonymous users see a maintenance message while administrators can still work on the site
- It disables all contributed modules permanently
- It deletes expired user sessions from the database
- It switches the site to read-only database replication

### Correct Answers
- [0] It puts the site into a state where anonymous users see a maintenance message while administrators can still work on the site

### Explanation
Maintenance mode shows a configurable message to visitors without the 'Access site in maintenance mode' permission, letting admins run updates or make changes safely.

### Question 23

**Domain:** Understanding Drupal and Working with a Drupal Site

You want logged-in users with the role "editor" to administer menus but nothing else in Structure. What should you do?

### Options
- Grant the editor role the 'Administer menus and menu links' permission and nothing else under Structure
- Make each editor an administrator (user 1 equivalent)
- Grant the 'Administer site configuration' permission
- Create a new admin theme for editors

### Correct Answers
- [0] Grant the editor role the 'Administer menus and menu links' permission and nothing else under Structure

### Explanation
Drupal's permission system is granular. Granting only 'Administer menus and menu links' gives editors access to menu administration without opening other structure or configuration areas.

### Question 24

**Domain:** Understanding Drupal and Working with a Drupal Site

What is the "Umami" installation option in Drupal?

### Options
- A demonstration installation profile that installs sample content and configuration to showcase Drupal features
- A contributed SEO module
- A multilingual translation service
- A performance monitoring dashboard

### Correct Answers
- [0] A demonstration installation profile that installs sample content and configuration to showcase Drupal features

### Explanation
The Umami demo profile installs a food magazine demo with content types, views, media, and sample articles, useful for learning and evaluating Drupal's capabilities.

### Question 25

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder needs to check recent errors shown to users, such as 404s and PHP notices. Which reports should they check? (Choose two)

### Options
- Recent log messages (Database logging) at /admin/reports/dblog
- Top 'page not found' errors at /admin/reports/page-not-found
- Available updates at /admin/reports/updates
- Status report at /admin/reports/status

### Correct Answers
- [0] Recent log messages (Database logging) at /admin/reports/dblog
- [1] Top 'page not found' errors at /admin/reports/page-not-found

### Explanation
The Database Logging module records recent events (errors, warnings, content actions) at /admin/reports/dblog, and the 404 report lists missing pages. The status report shows environment health, not event logs.

### Question 26

**Domain:** Understanding Drupal and Working with a Drupal Site

Which core module provides the visual admin theme used by default for Drupal 11 administration pages?

### Options
- Claro
- Bartik
- Seven
- Stark

### Correct Answers
- [0] Claro

### Explanation
Claro is the default administration theme in modern Drupal (10/11), designed for accessibility and usability. Olivero is the default front-end theme; Stark and Bartik are legacy/other themes.

### Question 27

**Domain:** Understanding Drupal and Working with a Drupal Site

A client wants visitors to land on a specific "Welcome" basic page instead of the default front page listing. How can this be changed without code?

### Options
- Set the 'Default front page' to the node's path (e.g. /node/42) in Basic site settings
- Create a new installation profile
- Edit the frontpage view in Views UI only
- Change the site slogan in Block layout

### Correct Answers
- [0] Set the 'Default front page' to the node's path (e.g. /node/42) in Basic site settings

### Explanation
At /admin/config/system/site-information you can set any internal path as the default front page. Alternatively, a View or custom route can be used, but the setting covers the simple case.

### Question 28

**Domain:** Understanding Drupal and Working with a Drupal Site

Which statement best describes taxonomy in Drupal?

### Options
- A system for classifying content using vocabularies and terms, which can have their own fields
- A billing module for e-commerce sites
- A caching layer for taxonomy pages only
- A user role assigned to content editors

### Correct Answers
- [0] A system for classifying content using vocabularies and terms, which can have their own fields

### Explanation
Taxonomy provides vocabularies containing terms (optionally hierarchical) used to categorize content. Terms are fieldable entities and reference fields connect content to terms.

### Question 29

**Domain:** Understanding Drupal and Working with a Drupal Site

Your team needs to keep a record of who changed content and when, and be able to revert to earlier versions of a node. What core feature provides this?

### Options
- Content revisioning, which stores past versions of nodes when 'Create new revision' is enabled
- The recent log messages report
- The Database Logging module's node entries
- The history table shown on user profiles

### Correct Answers
- [0] Content revisioning, which stores past versions of nodes when 'Create new revision' is enabled

### Explanation
Revisions let editors save new versions of content, view the revision history, and revert to earlier revisions. The behavior can be enabled per content type and per save.

### Question 30

**Domain:** Understanding Drupal and Working with a Drupal Site

What is Composer's role in a modern Drupal 11 project?

### Options
- It is the PHP dependency manager used to download Drupal core, contributed modules/themes, and their libraries
- It is a WYSIWYG content editor bundled in core
- It is the web server Drupal runs on
- It is a JavaScript build tool for themes

### Correct Answers
- [0] It is the PHP dependency manager used to download Drupal core, contributed modules/themes, and their libraries

### Explanation
Drupal 11 projects are managed with Composer: drupal/core-recommended plus contributed projects are required via composer require, which resolves dependencies and versions.

### Question 31

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder notices a "Configuration synchronization" section in Configuration. What is it for?

### Options
- Moving configuration (content types, views, fields) between environments via exported YAML files
- Synchronizing user accounts between two live sites
- Replicating the database to a read replica
- Syncing uploaded files to a CDN

### Correct Answers
- [0] Moving configuration (content types, views, fields) between environments via exported YAML files

### Explanation
The configuration management system exports site configuration to YAML (the sync directory) so it can be versioned and imported on other environments, keeping config in code.

### Question 32

**Domain:** Understanding Drupal and Working with a Drupal Site

Which of these are default content types provided by the Standard installation profile? (Choose two)

### Options
- Article
- Basic page
- Product
- Webform

### Correct Answers
- [0] Article
- [1] Basic page

### Explanation
The Standard profile creates the Article and Basic page content types. Product and Webform come from contributed solutions, not Standard core.

### Question 33

**Domain:** Understanding Drupal and Working with a Drupal Site

A stakeholder asks why some admin pages are available under /admin/structure. What kinds of things are managed there?

### Options
- Structural elements like content types, blocks, menus, taxonomy, views, and display modes
- Server-level settings like PHP and database credentials
- User account registration and passwords
- Theme CSS and JavaScript files

### Correct Answers
- [0] Structural elements like content types, blocks, menus, taxonomy, views, and display modes

### Explanation
The Structure section holds site-building structures: content types, block layout, custom blocks, comment types, contact forms, display modes, menus, taxonomy, and views.

### Question 34

**Domain:** Understanding Drupal and Working with a Drupal Site

How does Drupal 11 primarily handle automated periodic tasks if no external cron job is configured?

### Options
- The Automated Cron core module triggers cron runs at configurable intervals when pages are requested
- Cron cannot run without a system crontab entry
- The database runs cron internally via triggers
- The web server executes Drupal cron via mod_cron

### Correct Answers
- [0] The Automated Cron core module triggers cron runs at configurable intervals when pages are requested

### Explanation
Automated Cron runs cron tasks at the end of page requests at a set interval (e.g. every 3 hours). For high-traffic or sensitive sites, an external crontab hitting the cron URL or drush is preferred.

### Question 35

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder needs to allow visitors to contact the site owner through a form without installing anything new. Which core module provides this?

### Options
- Contact
- Webform
- Comment
- Shortcut

### Correct Answers
- [0] Contact

### Explanation
The core Contact module provides site-wide and personal contact forms with configurable recipients, auto-replies, and categories. Webform is a popular contributed alternative.

### Question 36

**Domain:** Understanding Drupal and Working with a Drupal Site

What does the 'People' section (/admin/people) allow an administrator to do?

### Options
- List, filter, and manage user accounts, including blocking, canceling, and assigning roles
- Edit node content authored by users
- Configure the site's contact forms
- Manage taxonomy terms related to users

### Correct Answers
- [0] List, filter, and manage user accounts, including blocking, canceling, and assigning roles

### Explanation
The People page lists user accounts with filters for role, status, and permission, and supports bulk operations such as blocking, canceling accounts, and adding/removing roles.

### Question 37

**Domain:** Understanding Drupal and Working with a Drupal Site

A junior site builder asks what "Drupal core" includes. Which answer is most accurate?

### Options
- The essential framework, core modules, themes, and libraries maintained by the Drupal core team and distributed together
- Only the index.php file and the database
- Every module available on drupal.org
- Just the admin theme and toolbar

### Correct Answers
- [0] The essential framework, core modules, themes, and libraries maintained by the Drupal core team and distributed together

### Explanation
Drupal core is the base download including the framework, core modules (node, user, views, etc.), core themes (Olivero, Claro, Stark), and bundled libraries. Contributed projects extend it.

### Question 38

**Domain:** Understanding Drupal and Working with a Drupal Site

You want to change how dates are displayed (e.g. 'Mar 5, 2026' vs '5 Mar 2026') across the site. Where is this configured?

### Options
- Configuration > Regional and language > Date and time formats
- Configuration > System > Basic site settings
- Appearance > Settings
- The theme's .info.yml file

### Correct Answers
- [0] Configuration > Regional and language > Date and time formats

### Explanation
Date and time formats are defined at /admin/config/regional/date-time, where custom formats can be added and assigned to format types used when dates render.

### Question 39

**Domain:** Understanding Drupal and Working with a Drupal Site

Which core feature allows an editor to jump directly to a piece of content's edit form from the front-end page while browsing the site logged in?

### Options
- The contextual links (the pencil icon) shown on content and blocks
- The Devel module toolbar
- The update manager report
- The user profile page

### Correct Answers
- [0] The contextual links (the pencil icon) shown on content and blocks

### Explanation
Contextual links provide quick actions (edit, configure block, edit view) directly on rendered elements for users with appropriate permissions, via the pencil icon.

### Question 40

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder wants to give anonymous visitors a working search box that indexes node content. What does core provide out of the box?

### Options
- The Search module with node indexing, a search page, and a search block
- Nothing; search requires a contributed module
- Only integration with external search appliances
- The Database Logging search page

### Correct Answers
- [0] The Search module with node indexing, a search page, and a search block

### Explanation
Core Search indexes content during cron, provides /search pages, and ships a search block. Advanced search pages can be configured, and indexing progress is shown on the status report.

### Question 41

**Domain:** Understanding Drupal and Working with a Drupal Site

Which statement about Drupal's database and file storage in a default install is correct?

### Options
- Content and configuration live in the database; uploaded files live in the files directory (sites/default/files by default)
- All uploaded files are stored as BLOBs in the database
- Configuration is stored only in files under /modules
- Content is stored as flat HTML files on disk

### Correct Answers
- [0] Content and configuration live in the database; uploaded files live in the files directory (sites/default/files by default)

### Explanation
Drupal stores entities and configuration in the database, while managed files (uploads, images) are written to the public (or private) files directory, with records in the file_managed table.

### Question 42

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder is asked to disable a feature that is no longer needed. Why is "uninstalling" a module on the Extend > Uninstall tab preferred over just disabling its features?

### Options
- Uninstalling removes the module's data and configuration from the database, keeping the site clean; the code remains in the codebase for reuse
- Uninstalling deletes the module's code from the server
- Uninstalling speeds up PHP by editing composer.json automatically
- There is no difference; both are identical

### Correct Answers
- [0] Uninstalling removes the module's data and configuration from the database, keeping the site clean; the code remains in the codebase for reuse

### Explanation
Drupal distinguishes installing (enabling) and uninstalling. Uninstall removes schema, data, and config owned by the module. Removing code is a separate Composer step.

### Question 43

**Domain:** Understanding Drupal and Working with a Drupal Site

Which of the following best describes a "distribution" in Drupal?

### Options
- A pre-packaged bundle of Drupal core with modules, themes, libraries, and an installation profile for a specific use case
- A CDN for distributing assets
- A way to distribute user accounts across multiple databases
- The packaging of Drupal releases on drupal.org only

### Correct Answers
- [0] A pre-packaged bundle of Drupal core with modules, themes, libraries, and an installation profile for a specific use case

### Explanation
Distributions (e.g. for publishing, intranets, commerce) bundle core plus curated contributed projects and configuration so sites can be set up quickly for a purpose.

### Question 44

**Domain:** Understanding Drupal and Working with a Drupal Site

The marketing team wants short URLs like /about-us instead of /node/123. Which core capability provides this without extra modules?

### Options
- URL aliases, editable per node or managed at /admin/config/search/path
- The Redirect module's alias page
- Editing .htaccess rewrite rules
- The Pathauto module (it is part of core)

### Correct Answers
- [0] URL aliases, editable per node or managed at /admin/config/search/path

### Explanation
Core Path module allows human-friendly URL aliases for content, editable on the node form or under Configuration > Search and metadata > URL aliases. Pathauto (contributed) automates patterns.

### Question 45

**Domain:** Understanding Drupal and Working with a Drupal Site

What is the significance of user 1 in a Drupal site?

### Options
- It is the superuser account created at install time that bypasses all permission checks
- It is the first anonymous visitor recorded
- It is a reserved role name for administrators
- It is the database user Drupal connects as

### Correct Answers
- [0] It is the superuser account created at install time that bypasses all permission checks

### Explanation
User ID 1 is the maintenance/superuser account with unrestricted access, similar to root. Best practice is to use role-based administration accounts for daily work instead.

### Question 46

**Domain:** Understanding Drupal and Working with a Drupal Site

Which core module would you enable to allow content to be translated into multiple languages on a site?

### Options
- Content Translation
- Locale only, with no other modules
- Language must be purchased separately
- Configuration Translation only

### Correct Answers
- [0] Content Translation

### Explanation
Multilingual capability comes from four core modules: Language, Interface Translation, Content Translation, and Configuration Translation. Content Translation enables translating nodes and other entities.

### Question 47

**Domain:** Understanding Drupal and Working with a Drupal Site

A site builder needs to see which tokens like [site:name] or [node:title] are available when configuring patterns or emails. What helps with this in core-adjacent setups?

### Options
- The Token contributed module's 'Browse available tokens' browser
- The core database logging viewer
- The theme registry page
- The cron settings form

### Correct Answers
- [0] The Token contributed module's 'Browse available tokens' browser

### Explanation
Token support exists in core, but a browsable token tree UI comes from the contributed Token module. Many modules (Pathauto, Metatag) rely on it and document this dependency.

### Question 48

**Domain:** Understanding Drupal and Working with a Drupal Site

Which statement correctly describes how Drupal 11 handles administrative access control?

### Options
- Access is controlled by roles and permissions; permissions are granted to roles, and roles are assigned to users
- Access is controlled per user only; roles are not supported
- Access is controlled by IP address ranges only
- All authenticated users share the same permissions by default

### Correct Answers
- [0] Access is controlled by roles and permissions; permissions are granted to roles, and roles are assigned to users

### Explanation
Drupal's access model: permissions (e.g. 'Administer blocks') are granted to roles (e.g. editor), and users hold one or more roles. Anonymous and authenticated are built-in roles.

## Content Modeling

### Question 49

**Domain:** Content Modeling

A university site needs an "Event" content type with a date, location, and registration link. What is the first site-building step to support this?

### Options
- Create a new content type at /admin/structure/types, then add the needed fields to it
- Enable the Event module from core
- Create a new vocabulary called Events
- Install a new theme that supports events

### Correct Answers
- [0] Create a new content type at /admin/structure/types, then add the needed fields to it

### Explanation
New kinds of content are modeled as content types (node bundles). After creating the type, fields such as Date, Text, and Link are added through the Field UI to capture structured data.

### Question 50

**Domain:** Content Modeling

You added an "Author" entity reference field to articles pointing to user accounts. What does the reference field store?

### Options
- A serialized copy of the referenced user's profile data inside the node
- The ID of the referenced user entity, which Drupal resolves when rendering
- The referenced user's email address as plain text
- A duplicate user account owned by the node

### Correct Answers
- [1] The ID of the referenced user entity, which Drupal resolves when rendering

### Explanation
Entity reference fields store only the target entity's ID. The full entity is loaded at render time, so referenced data stays in sync and is never duplicated.

### Question 51

**Domain:** Content Modeling

What is the difference between an entity type and a bundle in Drupal?

### Options
- The entity type is the general kind of thing (node, taxonomy term, user); a bundle is a specific variation of it (article, tags) that can have its own fields
- A bundle is a collection of entity types; an entity type is a single record
- Entity types are created in the UI; bundles only exist in code
- They are two names for the same concept

### Correct Answers
- [0] The entity type is the general kind of thing (node, taxonomy term, user); a bundle is a specific variation of it (article, tags) that can have its own fields

### Explanation
Entity types define the base structure; bundles subdivide them. Nodes have content types as bundles, taxonomy has vocabularies, custom blocks have block types. Fields are attached per bundle.

### Question 52

**Domain:** Content Modeling

An editor wants the "Body" field on Basic pages to allow multiple paragraphs with rich formatting. Which field type and widget combination is standard?

### Options
- Text (formatted, long) field with a text area widget and a text format such as Full HTML or a configured editor format
- Text (plain) field with a text field widget
- Integer field with a number widget
- Link field with a link widget

### Correct Answers
- [0] Text (formatted, long) field with a text area widget and a text format such as Full HTML or a configured editor format

### Explanation
Long formatted text fields store markup and are edited with a text format, typically wired to CKEditor 5. Plain text fields strip formatting and suit short unformatted values.

### Question 53

**Domain:** Content Modeling

A product content type needs a "Color" attribute where editors pick exactly one value from Red, Green, or Blue. Which field type fits best?

### Options
- List (text) with allowed values Red, Green, Blue
- Boolean field
- Text (plain) with a maximum length of 5
- Comment field

### Correct Answers
- [0] List (text) with allowed values Red, Green, Blue

### Explanation
List fields define a fixed set of allowed values stored as keys with labels. They render as select lists, radios, or checkboxes and are ideal for controlled vocabularies that aren't taxonomy.

### Question 54

**Domain:** Content Modeling

What does the "Allowed number of values" (cardinality) setting on a field control?

### Options
- How many values an editor can enter into the field on a single entity (e.g. limited to 1, or unlimited)
- How many content types may use the field
- The maximum file size of uploaded values
- How many users can edit the field per day

### Correct Answers
- [0] How many values an editor can enter into the field on a single entity (e.g. limited to 1, or unlimited)

### Explanation
Cardinality limits the number of values per field per entity. An image gallery field might allow unlimited values, while a "Featured image" field is typically limited to 1.

### Question 55

**Domain:** Content Modeling

You need a "Tags" style field where editors can invent new terms on the fly while editing articles. Which taxonomy setup supports this?

### Options
- An entity reference field to a Tags vocabulary with the 'Create referenced entities if they don't already exist' option enabled (free tagging)
- A List (text) field with allowed values
- A Boolean field per tag
- A plain text field where editors type hashtags

### Correct Answers
- [0] An entity reference field to a Tags vocabulary with the 'Create referenced entities if they don't already exist' option enabled (free tagging)

### Explanation
The autocomplete term widget with the "create referenced entities" option lets editors type new terms that are created on save — the classic free-tagging pattern like core's Tags field on Article.

### Question 56

**Domain:** Content Modeling

Which statement about field storage versus field instances is accurate?

### Options
- Field storage defines how a field's data is stored and its cardinality; a field instance attaches that storage to a specific bundle with its own settings
- Field storage is per-bundle; instances are global
- Field storage only applies to file fields
- There is no distinction in Drupal 11

### Correct Answers
- [0] Field storage defines how a field's data is stored and its cardinality; a field instance attaches that storage to a specific bundle with its own settings

### Explanation
Storage settings (type, cardinality) are shared when a field is reused across bundles; instance settings (label, required, default, help text) are per bundle. Reusing an existing field shares the same underlying storage.

### Question 57

**Domain:** Content Modeling

A content type "Recipe" reuses the existing field_image field that Articles also use. What is the implication?

### Options
- Both bundles share the same field storage settings, so changing cardinality on one affects the other; label and widget can still differ per bundle
- Each bundle gets a fully independent copy of the field
- The field becomes read-only on recipes
- Articles will lose their images

### Correct Answers
- [0] Both bundles share the same field storage settings, so changing cardinality on one affects the other; label and widget can still differ per bundle

### Explanation
Reusing a field shares storage-level settings across bundles, while instance-level settings like label, help text, and widget remain bundle-specific. This is shown on the 'Reuse existing field' form.

### Question 58

**Domain:** Content Modeling

Editors should upload PDF brochures and reuse them across many pages. Which core feature provides a reusable library of such assets?

### Options
- The Media module with a Document media type, browsable via the Media Library
- The Comment module's attachments
- The Shortcut module
- The Color module

### Correct Answers
- [0] The Media module with a Document media type, browsable via the Media Library

### Explanation
Core Media provides media types (image, document, audio, video, remote video) as fieldable entities. Media Library gives an overview and modal browser for selecting and reusing assets.

### Question 59

**Domain:** Content Modeling

What is a "view mode" in Drupal content modeling?

### Options
- A named display configuration for an entity (e.g. Full content, Teaser, RSS) controlling which fields show and their formatters
- A page in the Views module
- A permission that controls who can view content
- A responsive breakpoint for images

### Correct Answers
- [0] A named display configuration for an entity (e.g. Full content, Teaser, RSS) controlling which fields show and their formatters

### Explanation
View modes let the same entity render differently per context. 'Manage display' per bundle configures each view mode's visible fields, order, labels, and formatter settings.

### Question 60

**Domain:** Content Modeling

You want the article teaser to show a cropped 3:2 image while the full page shows the original. How is this achieved with core tools?

### Options
- Create an image style for the 3:2 crop, then set the image field formatter to that style on the Teaser view mode and a different style on Full content
- Upload two separate images to two different fields
- Edit the node template to crop with CSS only
- Create a second content type for teasers

### Correct Answers
- [0] Create an image style for the 3:2 crop, then set the image field formatter to that style on the Teaser view mode and a different style on Full content

### Explanation
Image styles apply effects (scale, crop) to image derivatives. Per view mode, the image formatter selects which style to use, so teasers and full pages render the same field differently.

### Question 61

**Domain:** Content Modeling

A "Department" vocabulary must support a two-level hierarchy (e.g. Faculty > Science). Is this possible with core taxonomy?

### Options
- Yes, taxonomy terms support parent-child relationships configured by dragging terms in the vocabulary overview
- No, taxonomy is flat; use menus instead
- Only one level is allowed unless you install a contributed module
- Hierarchy requires converting the vocabulary to a content type

### Correct Answers
- [0] Yes, taxonomy terms support parent-child relationships configured by dragging terms in the vocabulary overview

### Explanation
Vocabularies allow hierarchical term trees. On the term listing you can drag terms to set parents and weights, and term entities can reference parents.

### Question 62

**Domain:** Content Modeling

Editors need a reusable "Call to action" block with a title, formatted text, and a link field that can be placed in multiple regions. What should you create?

### Options
- A custom block type with those fields, then add custom blocks of that type and place them via Block layout
- A new content type and a view
- A new menu with links
- A text format with link buttons

### Correct Answers
- [0] A custom block type with those fields, then add custom blocks of that type and place them via Block layout

### Explanation
Custom blocks are fieldable entities with block types as bundles. Creating a block type with title/body/link fields lets editors build reusable blocks placed through Block layout.

### Question 63

**Domain:** Content Modeling

What is the purpose of the 'Manage form display' tab on a content type?

### Options
- It controls which fields appear on the edit form, their order, and their widgets (e.g. select list vs checkboxes)
- It controls which theme is used for the node page
- It sets the permissions for viewing the content type
- It manages the fields shown in search results only

### Correct Answers
- [0] It controls which fields appear on the edit form, their order, and their widgets (e.g. select list vs checkboxes)

### Explanation
Manage form display configures the editing experience per bundle and per form mode: widgets, order, and hidden fields. Manage display separately controls the front-end rendering.

### Question 64

**Domain:** Content Modeling

An editor complains that long article bodies are hard to scan. Which modeling change gives structure without custom code? (Choose two)

### Options
- Split content into additional fields (e.g. summary, sections) rendered in order on the full view mode
- Use the Paragraphs contributed module so editors compose content from structured paragraph types
- Remove all fields and use a single plain text field
- Store the whole page as an uploaded HTML file

### Correct Answers
- [0] Split content into additional fields (e.g. summary, sections) rendered in order on the full view mode
- [1] Use the Paragraphs contributed module so editors compose content from structured paragraph types

### Explanation
Granular fields make content scannable and reusable; Paragraphs goes further by letting editors stack structured components (paragraph types with their own fields) in any order.

### Question 65

**Domain:** Content Modeling

What does the "Required" checkbox on a field instance do?

### Options
- Forces editors to provide a value before the entity can be saved
- Makes the field visible to anonymous users
- Adds the field to the search index automatically
- Locks the field so only user 1 can edit it

### Correct Answers
- [0] Forces editors to provide a value before the entity can be saved

### Explanation
Required fields must be filled in on the entity form; Drupal validates this on save. It does not affect visibility or permissions.

### Question 66

**Domain:** Content Modeling

A "Venue" content type stores an address. Editors entering events should pick from existing venues instead of retyping addresses. Which field setup models this best?

### Options
- An entity reference field on Event referencing the Venue content type, using an autocomplete or select widget
- A plain text field where editors type venue names
- A taxonomy vocabulary of venues with addresses in term descriptions
- A Link field pointing to venue pages

### Correct Answers
- [0] An entity reference field on Event referencing the Venue content type, using an autocomplete or select widget

### Explanation
Modeling venues as their own content type keeps address data in one place; the entity reference field links events to venues, enabling filtering and consistent display.

### Question 67

**Domain:** Content Modeling

Which field type should store an external "Buy now" URL plus its link text on a product node?

### Options
- Link field
- Text (plain) field
- Email field
- File field

### Correct Answers
- [0] Link field

### Explanation
The Link field stores a URL with optional link text, supports internal and external links, and renders as an anchor tag. It validates URLs and can autocomplete internal content.

### Question 68

**Domain:** Content Modeling

A news site wants comments enabled on articles but disabled on basic pages. How is this modeled?

### Options
- Add a comment field to the Article content type only, configuring default comment settings per bundle
- Enable comments globally for all content types in one setting
- Comments cannot be controlled per content type in core
- Install a separate commenting platform

### Correct Answers
- [0] Add a comment field to the Article content type only, configuring default comment settings per bundle

### Explanation
The Comment module attaches comment fields to bundles. Each field instance sets defaults (open, closed, hidden) and comment type, allowing per-content-type control.

### Question 69

**Domain:** Content Modeling

What is a comment type in Drupal 11?

### Options
- A bundle of the comment entity, allowing different field configurations for different comment use cases
- A CSS class applied to comments
- A role that allows posting comments
- A text format used in comments

### Correct Answers
- [0] A bundle of the comment entity, allowing different field configurations for different comment use cases

### Explanation
Comments are entities with comment types as bundles (managed at /admin/structure/comment). Each comment field references one comment type, so different content can have differently-fielded comments.

### Question 70

**Domain:** Content Modeling

You need to capture a repeatable set of "Speaker" data (name, photo, bio) on an Event node, with zero to many speakers per event. Which approaches model this well? (Choose two)

### Options
- A Speaker content type plus a multi-value entity reference field on Event
- A multi-value Paragraphs 'Speaker' paragraph type with name, photo, and bio fields embedded on Event
- Three separate single-value fields called speaker_1, speaker_2, speaker_3
- A plain text field where editors paste speaker details

### Correct Answers
- [0] A Speaker content type plus a multi-value entity reference field on Event
- [1] A multi-value Paragraphs 'Speaker' paragraph type with name, photo, and bio fields embedded on Event

### Explanation
Repeating structured data is modeled either as referenced entities (when speakers are reusable content) or embedded Paragraphs (when data belongs only to the parent). Fixed numbered fields don't scale and complicate display.

### Question 71

**Domain:** Content Modeling

What does the "Create new revision" setting on a content type's publishing options do?

### Options
- Makes every save create a revision by default, enabling change tracking and rollback for that type
- Duplicates the node on every save
- Forces all nodes of the type to be unpublished
- Disables the ability to delete nodes

### Correct Answers
- [0] Makes every save create a revision by default, enabling change tracking and rollback for that type

### Explanation
With revisioning enabled per type, each save stores a new revision. Editors can view the Revisions tab, compare versions, and revert to previous ones.

### Question 72

**Domain:** Content Modeling

A content type has "Submitted by" information showing the author's username and date. Where do you hide this from the output without deleting data?

### Options
- Uncheck 'Display author and date information' in the content type's display settings
- Delete the author from the user table
- Remove the authored-on date from each node
- Hide it with a text format

### Correct Answers
- [0] Uncheck 'Display author and date information' in the content type's display settings

### Explanation
Each content type has a 'Display author and date information' display setting. Turning it off hides the submitted-by line for that bundle without touching the underlying data.

### Question 73

**Domain:** Content Modeling

Which statement about taxonomy terms as entities is correct?

### Options
- Terms can have their own fields, view modes, and display configuration just like nodes
- Terms cannot have fields; they only store a name
- Terms are stored as plain strings on nodes
- Only vocabularies can have fields, not terms

### Correct Answers
- [0] Terms can have their own fields, view modes, and display configuration just like nodes

### Explanation
Taxonomy terms are fieldable entities. A 'Category' term could have an image and description fields, and term pages can be themed via view modes and templates.

### Question 74

**Domain:** Content Modeling

A client wants editors to choose an icon for each category term, displayed next to the term name. What is the site-building approach?

### Options
- Add an image field to the vocabulary, upload icons per term, and configure the term's view mode to render it
- Add the icon to the node's body text manually
- Hard-code icons in CSS per term name
- Create a new content type called Icon

### Correct Answers
- [0] Add an image field to the vocabulary, upload icons per term, and configure the term's view mode to render it

### Explanation
Because terms are fieldable, adding an image field to the vocabulary and managing term display lets icons be attached to and rendered with terms wherever term reference formatters show them.

### Question 75

**Domain:** Content Modeling

What happens when you delete a content type that still has nodes?

### Options
- Drupal deletes the content type and all of its nodes after confirmation
- Drupal refuses to delete the type until all nodes are removed
- Nodes are converted to Basic pages automatically
- The content type is only hidden, not deleted

### Correct Answers
- [0] Drupal deletes the content type and all of its nodes after confirmation

### Explanation
Deleting a content type warns that all content of that type will also be deleted. After confirmation, the type and its nodes are removed, so export or migrate data first if needed.

### Question 76

**Domain:** Content Modeling

An "Album" content type needs a gallery of up to 10 images with per-image alt text. What field configuration supports this?

### Options
- An image field with cardinality 10; alt text is available per image item
- Ten separate image fields named image_1 through image_10
- A file field with cardinality 1
- A text field where editors paste image URLs

### Correct Answers
- [0] An image field with cardinality 10; alt text is available per image item

### Explanation
Multi-value image fields handle galleries natively. The image widget provides alt (and optional title) inputs per item, and formatters can style the set in view modes.

### Question 77

**Domain:** Content Modeling

Why might you prefer a taxonomy vocabulary over a List (text) field for "Country" values?

### Options
- Taxonomy terms are entities that can be extended with fields, translated, and managed centrally with their own pages and permissions
- List fields cannot store more than three values
- Taxonomy is always faster to render than lists
- List fields cannot be displayed to users

### Correct Answers
- [0] Taxonomy terms are entities that can be extended with fields, translated, and managed centrally with their own pages and permissions

### Explanation
Lists are fine for small static sets; taxonomy excels when terms need fields (flags, codes), hierarchy, term pages, translations, or editorial management by non-developers.

### Question 78

**Domain:** Content Modeling

A "Staff member" content type should not appear in the site's search results or main content listings. Which settings help achieve this? (Choose two)

### Options
- Exclude the type from the search index in the Search settings' content ranking/indexing configuration or via a custom search view
- Remove the type from the default front page view (e.g. by filtering the Frontpage view to exclude it)
- Unpublish all staff nodes
- Delete the view modes for the type

### Correct Answers
- [0] Exclude the type from the search index in the Search settings' content ranking/indexing configuration or via a custom search view
- [1] Remove the type from the default front page view (e.g. by filtering the Frontpage view to exclude it)

### Explanation
Search indexing and listings are controlled where they're configured (search pages, views). Adjusting those keeps staff published and linkable while out of search and feeds.

### Question 79

**Domain:** Content Modeling

What is the role of the "Promoted to front page" publishing option on a content type?

### Options
- Nodes with this flag appear in the default Frontpage listing/view
- It pins the node to the top of every menu
- It makes the node appear in search engines externally
- It features the node in the admin dashboard

### Correct Answers
- [0] Nodes with this flag appear in the default Frontpage listing/view

### Explanation
The 'Promoted to front page' flag is used by the default front page view to list content. It's a per-type default that editors can override per node, commonly used for articles.

### Question 80

**Domain:** Content Modeling

A site needs press releases to expire and become unpublished automatically after 90 days. Out of the box, what is true?

### Options
- Core has no built-in auto-unpublish scheduling; a contributed module like Scheduler provides publish/unpublish dates per node
- Core automatically unpublishes all content after 90 days
- Setting a past revision date unpublishes the node
- Changing the URL alias archives the node

### Correct Answers
- [0] Core has no built-in auto-unpublish scheduling; a contributed module like Scheduler provides publish/unpublish dates per node

### Explanation
Content moderation states and revisions exist in core, but scheduled publishing transitions are provided by contributed modules such as Scheduler, which adds date fields for state changes via cron.

### Question 81

**Domain:** Content Modeling

How do form modes differ from view modes?

### Options
- Form modes configure the editing form layout for an entity (which fields/widgets show); view modes configure the rendered display
- Form modes are for anonymous users; view modes for admins
- Form modes only apply to user registration
- They are interchangeable names

### Correct Answers
- [0] Form modes configure the editing form layout for an entity (which fields/widgets show); view modes configure the rendered display

### Explanation
Form modes (managed under Structure > Display modes > Form modes) let you define alternate edit forms per bundle; view modes define alternate renderings. Each has a 'Manage' page per bundle.

### Question 82

**Domain:** Content Modeling

A catalog has "Brand" taxonomy terms, and each product references one brand. Marketing wants a page per brand listing its products. What core tools combine to deliver this?

### Options
- The term's own page (or a taxonomy term View override) listing products that reference the term
- A new content type per brand
- A menu per brand
- A block type per brand

### Correct Answers
- [0] The term's own page (or a taxonomy term View override) listing products that reference the term

### Explanation
Core provides taxonomy term pages listing tagged content, and the bundled Taxonomy term view customizes that listing with fields, filters, and sorting — no custom code needed.

### Question 83

**Domain:** Content Modeling

You want the "Full content" view mode of articles to hide the body field's label but show the image field's label above the image. Where is this configured?

### Options
- Manage display for the Article full view mode, setting each field's label option (Above, Inline, Hidden/Visually hidden)
- In the text format settings
- On the user profile
- In the image style configuration

### Correct Answers
- [0] Manage display for the Article full view mode, setting each field's label option (Above, Inline, Hidden/Visually hidden)

### Explanation
Per view mode, every field row has a label position: Above, Inline, Visually hidden, or Hidden. This controls rendering without template changes.

### Question 84

**Domain:** Content Modeling

A field widget and a field formatter are different. Which statement is correct?

### Options
- Widgets are the input controls on edit forms; formatters render stored values on display
- Widgets render output; formatters handle input
- Widgets only exist for file fields
- Formatters are configured per user role

### Correct Answers
- [0] Widgets are the input controls on edit forms; formatters render stored values on display

### Explanation
Manage form display selects widgets (autocomplete, select, media library); Manage display selects formatters (rendered entity, image style, plain text). Both are pluggable per field type.

### Question 85

**Domain:** Content Modeling

An entity reference field's formatter is set to "Rendered entity" with view mode "Teaser". What will editors' visitors see for the referenced items?

### Options
- Each referenced entity rendered using its Teaser view mode configuration
- Only the referenced entity's title as plain text
- The raw entity ID
- A JSON dump of the entity

### Correct Answers
- [0] Each referenced entity rendered using its Teaser view mode configuration

### Explanation
The Rendered entity formatter outputs referenced entities through the chosen view mode, so the referenced bundle's Manage display settings control fields and formatters used.

### Question 86

**Domain:** Content Modeling

A content model requires that events have either an online link OR a physical location, but not necessarily both. What can core field settings accomplish?

### Options
- Neither field can be required; validation of 'one of the two' needs custom code or a contributed module; mark neither required and document the rule
- Core supports XOR required fields natively via field settings
- Making both fields required solves it
- Using a boolean field forces the choice

### Correct Answers
- [0] Neither field can be required; validation of 'one of the two' needs custom code or a contributed module; mark neither required and document the rule

### Explanation
Core field requirements are per-field only. Conditional logic like 'require one of these' needs custom validation or contributed solutions (e.g. Conditional Fields) — a modeling limitation to know.

### Question 87

**Domain:** Content Modeling

Which of these can be added as fields to a user account in Drupal? (Choose two)

### Options
- An image field for an avatar
- A taxonomy term reference field for interests
- Another user's password hash
- A complete view display

### Correct Answers
- [0] An image field for an avatar
- [1] A taxonomy term reference field for interests

### Explanation
User accounts are fieldable entities managed at /admin/config/people/accounts/fields. Common additions are avatars, bios, and interest tags. Display is controlled in account 'Manage display'.

### Question 88

**Domain:** Content Modeling

What is the effect of checking 'Allow users to edit their own account' style field settings like 'Display on user registration form' for a user field?

### Options
- The field appears on the registration form so new users can fill it during sign-up
- The field becomes required for administrators only
- The field is hidden from everyone
- The field value is exported to LDAP

### Correct Answers
- [0] The field appears on the registration form so new users can fill it during sign-up

### Explanation
User field instances have a 'Display on user registration form' option. When enabled, the field shows during account creation; otherwise it only appears when editing the account later.

### Question 89

**Domain:** Content Modeling

An editor wants to embed an existing media image inside the body text. What core capability supports this after configuration?

### Options
- The 'Embed media' button in CKEditor 5 when the Media embed filter/button is enabled for the text format
- Dragging database tables into the editor
- Only developers can embed media via PHP
- The Shortcut module's embed tool

### Correct Answers
- [0] The 'Embed media' button in CKEditor 5 when the Media embed filter/button is enabled for the text format

### Explanation
Text formats can enable the Media Embed button/filter in CKEditor, letting editors insert media library items into formatted text with display settings, rendered via a token-like embed.

### Question 90

**Domain:** Content Modeling

A 'remote video' media type is configured. What does it allow editors to do?

### Options
- Reference externally hosted videos (e.g. from YouTube or Vimeo) by URL, storing them as reusable media entities with thumbnails
- Upload raw video files into the database
- Stream live video from the admin account
- Edit videos inside the browser

### Correct Answers
- [0] Reference externally hosted videos (e.g. from YouTube or Vimeo) by URL, storing them as reusable media entities with thumbnails

### Explanation
The Remote video media type uses oEmbed providers (YouTube/Vimeo by default). Editors paste a URL; Drupal fetches metadata and thumbnails and renders an embedded player.

### Question 91

**Domain:** Content Modeling

Which statement about deleting a field from a content type is true?

### Options
- Deleting the field removes its stored data for that bundle, and the data cannot be recovered without a backup
- Deleting the field keeps all data intact for later reuse
- Only the field label is deleted; values remain visible
- Fields can never be deleted once created

### Correct Answers
- [0] Deleting the field removes its stored data for that bundle, and the data cannot be recovered without a backup

### Explanation
Field deletion drops the field data for that bundle. Drupal confirms before deleting, and purges data via cron/batch. Backups are essential before destructive model changes.

### Question 92

**Domain:** Content Modeling

A client wants "Related articles" chosen manually by editors, showing up to 3 articles at the bottom of each article. Best model?

### Options
- A multi-value entity reference field (limited to 3) on Article referencing Article, rendered with a rendered-entity formatter
- A text field with article titles
- A menu of related links
- A boolean flag for 'related'

### Correct Answers
- [0] A multi-value entity reference field (limited to 3) on Article referencing Article, rendered with a rendered-entity formatter

### Explanation
Self-referencing entity reference fields let editors pick related content explicitly. Cardinality 3 enforces the limit, and teasers of referenced articles render via view modes.

### Question 93

**Domain:** Content Modeling

What does the 'Default value' setting on a field instance do?

### Options
- Pre-fills the field on new entity forms, which editors can override
- Forces the value on existing nodes when edited
- Makes the field required
- Sets the value for search indexing only

### Correct Answers
- [0] Pre-fills the field on new entity forms, which editors can override

### Explanation
Default values initialize the widget when creating new content (e.g. default country, default publish date). They don't rewrite existing entities unless edited and saved.

### Question 94

**Domain:** Content Modeling

Which content modeling approach best supports "landing pages" where marketing assembles hero, text, image, and CTA sections in any order?

### Options
- The Paragraphs module with paragraph types for each component referenced by a multi-value field on the landing page type
- A single body field with manual HTML
- Four separate content types and menus to chain them
- A taxonomy vocabulary of sections

### Correct Answers
- [0] The Paragraphs module with paragraph types for each component referenced by a multi-value field on the landing page type

### Explanation
Paragraphs provides ordered, embedded collections of structured components — the standard solution for flexible landing pages in Drupal site building.

### Question 95

**Domain:** Content Modeling

What is the purpose of the 'Content translation' setting per field when multilingual is enabled?

### Options
- It marks whether the field's values should be translatable per language on entities of that bundle
- It machine-translates the content automatically
- It hides the field from untranslated pages
- It exports the field to translation agencies directly

### Correct Answers
- [0] It marks whether the field's values should be translatable per language on entities of that bundle

### Explanation
With Content Translation enabled, each bundle and field can be marked translatable. Translatable fields get per-language values; untranslatable ones are shared across translations.

### Question 96

**Domain:** Content Modeling

A "FAQ" content type has fields Question (text) and Answer (formatted text). Editors want one FAQ node to hold many question/answer pairs. What is a better model?

### Options
- Use a multi-value Paragraphs 'Q&A' paragraph type containing Question and Answer fields on the FAQ node
- Make the two fields multi-value and hope they stay aligned
- Create a FAQ vocabulary instead
- Only one pair per node is ever possible in Drupal

### Correct Answers
- [0] Use a multi-value Paragraphs 'Q&A' paragraph type containing Question and Answer fields on the FAQ node

### Explanation
Multi-value Paragraphs keep grouped fields together per item. Two independent multi-value fields would lose the pairing between each question and its answer.

### Question 97

**Domain:** Content Modeling

How can you make an existing 'field_tags' from Article also available on the Recipe content type?

### Options
- On Recipe's 'Manage fields', use 'Re-use an existing field' and select field_tags
- Export and re-import the database table
- Recreate a new field with the same machine name manually
- Fields cannot be shared between content types

### Correct Answers
- [0] On Recipe's 'Manage fields', use 'Re-use an existing field' and select field_tags

### Explanation
The Field UI offers reusing existing fields across bundles of the same entity type, sharing storage while allowing per-bundle labels and widgets.

### Question 98

**Domain:** Content Modeling

A 'Price' field must store values like 19.99 with exactly two decimals. Which core field type is most appropriate?

### Options
- Number (decimal) with precision and scale settings
- Text (plain)
- Boolean
- Email

### Correct Answers
- [0] Number (decimal) with precision and scale settings

### Explanation
The decimal field type stores fixed-precision numbers (precision = total digits, scale = decimal places), suited for money-like values where float rounding is undesirable.

### Question 99

**Domain:** Content Modeling

What is the difference between the 'Text (plain)' and 'Text (formatted)' field types?

### Options
- Plain strips/never allows HTML; formatted stores markup and applies a configurable text format on output
- Formatted fields cannot hold more than 255 characters
- Plain text fields are always encrypted
- There is no functional difference

### Correct Answers
- [0] Plain strips/never allows HTML; formatted stores markup and applies a configurable text format on output

### Explanation
Plain text fields output escaped text only. Formatted text fields store HTML and process it through a text format (e.g. Restricted/Full HTML) controlling allowed tags and filters.

### Question 100

**Domain:** Content Modeling

An image field's formatter shows 'Original image' but pages are heavy. What is the standard fix within content modeling/display configuration?

### Options
- Create image styles (e.g. Large 1200px, Medium 480px) and select them on the image formatter per view mode
- Ask editors to resize images before uploading manually
- Disable the image field
- Switch the field to file type

### Correct Answers
- [0] Create image styles (e.g. Large 1200px, Medium 480px) and select them on the image formatter per view mode

### Explanation
Image styles generate derivative images at configured sizes/effects. Assigning styles per view mode balances quality and page weight, and styles can flush/regenerate when changed.

### Question 101

**Domain:** Content Modeling

A 'Download' file field on products should restrict uploads to PDFs up to 10 MB. Where is this enforced?

### Options
- In the field's settings: allowed file extensions (pdf) and maximum upload size
- In the theme's CSS
- In the user's profile preferences
- In the cron configuration

### Correct Answers
- [0] In the field's settings: allowed file extensions (pdf) and maximum upload size

### Explanation
File and image fields validate extensions and size limits configured in field settings (also respecting PHP upload limits). Invalid uploads are rejected on the form.

### Question 102

**Domain:** Content Modeling

Which entity reference 'Reference method' option lets you limit selectable entities by a View (e.g. only published events)?

### Options
- 'Views: Filter by an entity reference view' with a configured entity reference display
- 'Default' with no filtering possible
- The 'Static' reference method
- 'Raw SQL' reference method

### Correct Answers
- [0] 'Views: Filter by an entity reference view' with a configured entity reference display

### Explanation
Reference fields can use a View with an 'Entity Reference' display to define the selectable pool (e.g. only published, promoted items), instead of the default all-entities method.

### Question 103

**Domain:** Content Modeling

A newsroom wants article authors picked from a curated 'Contributors' list rather than any user. How is this modeled?

### Options
- An entity reference field targeting users, filtered by the Contributor role in the field's reference settings
- A plain text field for author names
- Assigning node authorship via the database
- A link field to user profiles

### Correct Answers
- [0] An entity reference field targeting users, filtered by the Contributor role in the field's reference settings

### Explanation
User reference fields can filter by role/status, constraining selectable users to the contributor group while keeping references to real user entities.

### Question 104

**Domain:** Content Modeling

What is stored in a content type's 'publishing options' configuration? (Choose two)

### Options
- Defaults such as 'Published', 'Promoted to front page', and 'Sticky at top of lists'
- Whether 'Create new revision' is on by default
- The theme used for the type
- The list of allowed URL aliases

### Correct Answers
- [0] Defaults such as 'Published', 'Promoted to front page', and 'Sticky at top of lists'
- [1] Whether 'Create new revision' is on by default

### Explanation
Publishing options per type set default published/promoted/sticky states and revision behavior. Editors with permission can override these per node.
### Question 105

**Domain:** Content Modeling

A publisher requires that articles move through Draft > Needs Review > Published before going live. Which core modules provide this?

### Options
- Workflows and Content Moderation, defining states and transitions applied to the content type
- The Comment and History modules
- The Ban and Syslog modules
- The Path and Search modules

### Correct Answers
- [0] Workflows and Content Moderation, defining states and transitions applied to the content type

### Explanation
Core's Workflows module defines states/transitions; Content Moderation applies a workflow to bundles so revisions move through editorial states with permissions per transition.

### Question 106

**Domain:** Content Modeling

With Content Moderation enabled on articles, an editor saves a new draft of an already-published article. What do anonymous visitors see?

### Options
- The last published version remains live until the draft is transitioned to Published
- The new draft immediately replaces the live version
- The article disappears until review
- Anonymous users see a merge of both versions

### Correct Answers
- [0] The last published version remains live until the draft is transitioned to Published

### Explanation
Moderation creates forward revisions: unpublished states don't affect the live version. Visitors keep seeing the published revision until a new published revision exists.

### Question 107

**Domain:** Content Modeling

A "Landing page" type should let editors visually arrange fields and blocks per node with drag-and-drop. Which core feature enables this?

### Options
- Layout Builder enabled per view mode ('Allow each content item to have its layout customized')
- The Color module
- The Update Manager
- The Statistics module

### Correct Answers
- [0] Layout Builder enabled per view mode ('Allow each content item to have its layout customized')

### Explanation
Layout Builder (core) overrides entity displays with sectioned layouts. Per-bundle you can enable it for a view mode and optionally allow per-node customization via the 'Layout' tab.

### Question 108

**Domain:** Content Modeling

What are moderation 'transitions' in the Workflows module?

### Options
- Rules defining which states a revision can move between (e.g. Draft to Needs Review) and which roles may perform them
- Animations between page loads
- URL redirects between nodes
- Theme switching rules

### Correct Answers
- [0] Rules defining which states a revision can move between (e.g. Draft to Needs Review) and which roles may perform them

### Explanation
Transitions connect workflow states with labels, and permissions are generated per transition (e.g. 'Use Draft to Needs Review transition'), enabling editorial role separation.

### Question 109

**Domain:** Content Modeling

A menu item should appear only when the linked node is published and visible to the user. How does core handle this?

### Options
- Menu links respect content access; unauthorized users don't see links they cannot access
- Menus show all links to everyone regardless of access
- Menu visibility requires custom PHP
- Menu links are always public once created

### Correct Answers
- [0] Menu links respect content access; unauthorized users don't see links they cannot access

### Explanation
Drupal's menu system checks access to link routes. Links to nodes a user cannot view are hidden from the rendered menu for that user.

### Question 110

**Domain:** Content Modeling

You need a "Services" menu containing links grouped under parent items for a mega-menu-like structure. What core capability supports nested menus?

### Options
- Menu links support parent-child hierarchy with unlimited nesting, arranged by drag-and-drop in the Menu UI
- Menus are flat lists only
- Nesting requires the Superfish module (it is in core)
- Only two menus exist per site

### Correct Answers
- [0] Menu links support parent-child hierarchy with unlimited nesting, arranged by drag-and-drop in the Menu UI

### Explanation
Core menus allow hierarchical link trees reordered via drag handles. Themes decide how to render child levels (drop-downs, accordions, etc.).

### Question 111

**Domain:** Content Modeling

An editor wants to create content of type "Landing page" but the type doesn't appear on /node/add. The type exists. Most likely cause?

### Options
- The editor's role lacks the 'Landing page: Create new content' permission
- The content type is unpublished
- The Toolbar module is broken
- The type has no URL alias

### Correct Answers
- [0] The editor's role lacks the 'Landing page: Create new content' permission

### Explanation
Node permissions are per type (create/edit/delete own/any). Without the create permission, the type is hidden from the Add content page for that role.

### Question 112

**Domain:** Content Modeling

Which of the following are entity types that can be referenced by an entity reference field in core? (Choose two)

### Options
- Taxonomy terms
- Media
- Permission records
- Image styles

### Correct Answers
- [0] Taxonomy terms
- [1] Media

### Explanation
Entity reference fields can target any entity type: nodes, users, taxonomy terms, media, comments, custom blocks, files, etc. Permissions and image styles are configuration, not content entities.

### Question 113

**Domain:** Content Modeling

A "Job posting" type has a closing date field. HR wants postings sorted by closing date on a listing. Which field type enables proper date sorting?

### Options
- Date field (date only) stored in a sortable format
- Text field where HR types dates as strings
- Integer field with timestamps typed manually
- Boolean field 'is closing soon'

### Correct Answers
- [0] Date field (date only) stored in a sortable format

### Explanation
Date fields store ISO values enabling chronological sorting, date filtering (relative dates like 'next 30 days' in views), and formatted output — impossible with plain text.

### Question 114

**Domain:** Content Modeling

What does the 'Sticky at top of lists' publishing option do?

### Options
- Keeps the node at the top of listings that sort by sticky first, like the default front page
- Pins the node to the admin toolbar
- Prevents the node from being edited
- Locks the node's URL alias

### Correct Answers
- [0] Keeps the node at the top of listings that sort by sticky first, like the default front page

### Explanation
The sticky flag is part of default front-page sorting (sticky, then created date). It's a per-type default that can be toggled per node under Publishing options.

### Question 115

**Domain:** Content Modeling

A product has a 'Datasheet' file field. The team wants downloads tracked with counts. What does core provide?

### Options
- The Statistics module can track content view counts; file download counts per field require contributed modules or custom tracking
- Core file fields count downloads automatically
- The Syslog module counts downloads
- Cron logs every download to the status report

### Correct Answers
- [0] The Statistics module can track content view counts; file download counts per field require contributed modules or custom tracking

### Explanation
Core Statistics logs node view counts ('Number of views') but not per-file download counts. Knowing core's limits helps decide when a contributed solution is needed.

### Question 116

**Domain:** Content Modeling

A site in English and German needs the 'Read more' link and field labels translated. Which modules cover interface and field label translation? (Choose two)

### Options
- Interface Translation for UI strings
- Configuration Translation for field labels and other config
- The Database Logging module
- The Automated Cron module

### Correct Answers
- [0] Interface Translation for UI strings
- [1] Configuration Translation for field labels and other config

### Explanation
Interface Translation handles built-in UI strings; Configuration Translation translates configuration like content type names and field labels; Content Translation handles entity values.

### Question 117

**Domain:** Content Modeling

An editor wants to reorder the sections of a landing page node built with Layout Builder. How is this done?

### Options
- Open the node's Layout tab and drag sections/blocks within the layout canvas, then save
- Reorder rows in the database
- Edit the theme's page template
- Rebuild the site map

### Correct Answers
- [0] Open the node's Layout tab and drag sections/blocks within the layout canvas, then save

### Explanation
With per-node layouts enabled, a Layout tab exposes the visual canvas where editors add, remove, and reorder sections and blocks without touching templates.

### Question 118

**Domain:** Content Modeling

A 'Testimonial' custom block type exists. Where do editors create testimonial blocks?

### Options
- Content > Blocks (/admin/content/block) 'Add content block', choosing the Testimonial type
- Structure > Content types
- Appearance > Blocks
- Configuration > Block settings

### Correct Answers
- [0] Content > Blocks (/admin/content/block) 'Add content block', choosing the Testimonial type

### Explanation
Custom block content is managed under Content > Blocks. Block types are defined under Structure > Block layout > Custom block library types; placement happens in Block layout.

### Question 119

**Domain:** Content Modeling

What is the purpose of the 'Description' field on a custom block instance?

### Options
- An administrative label shown in the block library and Block layout listing (it is not rendered to visitors by default)
- The block's public heading text
- A tooltip on the front end
- The block's CSS class

### Correct Answers
- [0] An administrative label shown in the block library and Block layout listing (it is not rendered to visitors by default)

### Explanation
Custom blocks have an admin description for identification in listings. Display of title on the front end is controlled separately when placing the block.

### Question 120

**Domain:** Content Modeling

A 'Country' vocabulary has 200 terms. On the node form, which widget is most usable for selecting one term?

### Options
- Autocomplete term widget (or select list); autocomplete scales better for large vocabularies
- Checkboxes/radio buttons for all 200 terms
- A plain text field
- A date picker

### Correct Answers
- [0] Autocomplete term widget (or select list); autocomplete scales better for large vocabularies

### Explanation
Widget choice affects editorial UX: checkboxes suit small sets, select lists medium, and autocomplete large vocabularies. Widgets are chosen in Manage form display.

### Question 121

**Domain:** Content Modeling

A 'Slider' paragraph type has an image and caption. Editors report the caption renders above the image but they want it below. Where is this fixed?

### Options
- Manage display for the Slider paragraph type, reordering the caption below the image field
- In the image style settings
- By renaming the caption field
- In the user account settings

### Correct Answers
- [0] Manage display for the Slider paragraph type, reordering the caption below the image field

### Explanation
Paragraph types are bundles with their own Manage display. Field order and formatter settings there control the rendered sequence.

### Question 122

**Domain:** Content Modeling

Why might you create a separate 'SEO page' content type instead of using Basic page? (Choose two)

### Options
- Different fields (e.g. dedicated meta description field) and display configuration per purpose
- Separate permissions and moderation settings per bundle
- Content types are required for every page by law
- Basic pages cannot be indexed by search

### Correct Answers
- [0] Different fields (e.g. dedicated meta description field) and display configuration per purpose
- [1] Separate permissions and moderation settings per bundle

### Explanation
Bundles exist to model different content purposes: distinct fields, displays, permissions, workflows, and defaults per type keep the model clean and editorially safe.

### Question 123

**Domain:** Content Modeling

An image field shows a 'Title' input that the design team never uses. How do you remove just the title input from the widget?

### Options
- In the image field settings, disable the title field option (keep alt enabled)
- Delete the image field and recreate it
- Hide it with a text format
- Uninstall the Image module

### Correct Answers
- [0] In the image field settings, disable the title field option (keep alt enabled)

### Explanation
Image fields have settings to enable/disable alt and title subfields. Alt should stay enabled for accessibility; title is optional and can be turned off.

### Question 124

**Domain:** Content Modeling

What does the 'Alt text' on image fields primarily support?

### Options
- Accessibility: screen readers read the alt text; it is also shown if the image fails to load
- SEO keyword stuffing
- The admin file listing sort order
- The image style used on output

### Correct Answers
- [0] Accessibility: screen readers read the alt text; it is also shown if the image fails to load

### Explanation
Alt text describes images for assistive technology and is required for accessible content. Drupal can enforce alt text by making it required in field settings.

### Question 125

**Domain:** Content Modeling

A 'Gallery' content type references a 'Gallery category' vocabulary. Galleries must be assignable to multiple categories. Which setting enables this?

### Options
- Set the term reference field's allowed number of values to unlimited (or >1)
- Create one field per category
- Enable free tagging only
- Categories cannot be multiple per gallery

### Correct Answers
- [0] Set the term reference field's allowed number of values to unlimited (or >1)

### Explanation
Cardinality controls multi-select. With checkboxes or autocomplete and unlimited values, editors can tag content with multiple terms.

### Question 126

**Domain:** Content Modeling

You want to expose node reference fields as 'Related media' using the media library modal. What widget configuration is needed?

### Options
- Use a media reference field with the 'Media library' widget in Manage form display
- Use the link widget for media
- Enable the colorbox widget from core
- Set the formatter to 'File URL'

### Correct Answers
- [0] Use a media reference field with the 'Media library' widget in Manage form display

### Explanation
Media entity reference fields can use the Media library widget, opening the grid/modal for selecting or uploading media items with bulk selection support.

### Question 127

**Domain:** Content Modeling

A stakeholder asks whether content type fields can be reordered on the edit form without code. Answer?

### Options
- Yes, via Manage form display drag-and-drop ordering
- No, form order is fixed by creation order
- Only via database updates
- Only by editing Twig templates

### Correct Answers
- [0] Yes, via Manage form display drag-and-drop ordering

### Explanation
Manage form display supports drag-and-drop reordering of fields and grouping (e.g. with Field Group contributed module) to optimize the editing experience.

### Question 128

**Domain:** Content Modeling

A product 'SKU' field must be unique across all products. What can core do?

### Options
- Core field settings do not enforce uniqueness; it requires custom validation or contributed solutions
- Set the field to 'unique' in field settings
- Use a boolean field instead
- Uniqueness is automatic for all fields

### Correct Answers
- [0] Core field settings do not enforce uniqueness; it requires custom validation or contributed solutions

### Explanation
Core does not provide per-field uniqueness validation for node fields out of the box. Uniqueness needs custom constraint code or contributed modules — a known modeling limitation.

### Question 129

**Domain:** Content Modeling

Which statement about 'Rendered entity' vs 'Label' formatters for entity reference fields is correct?

### Options
- 'Label' outputs the referenced entity's title (optionally linked); 'Rendered entity' outputs the entity through a chosen view mode
- 'Label' renders the full entity; 'Rendered entity' shows only the title
- Both require custom templates
- 'Label' cannot link to the entity

### Correct Answers
- [0] 'Label' outputs the referenced entity's title (optionally linked); 'Rendered entity' outputs the entity through a chosen view mode

### Explanation
Reference formatters include Label (title, with/without link) and Rendered entity (via view mode). Choosing between them controls how much of the referenced content appears.

### Question 130

**Domain:** Content Modeling

Editors should enter an event's start and end date/time as a pair. Which field configuration supports this?

### Options
- A Date field using the 'Date and time' type with the 'Collect an end date' option enabled (creating field storage with end values)
- Two unrelated text fields
- A boolean field for 'has end date'
- A list field of hours

### Correct Answers
- [0] A Date field using the 'Date and time' type with the 'Collect an end date' option enabled (creating field storage with end values)

### Explanation
The core Date field supports date-only, date and time, and range variants storing start/end values, renderable as ranges and usable in views date filters.

### Question 131

**Domain:** Content Modeling

How do you allow only images (jpg, png, webp) and set a maximum resolution on an image field?

### Options
- Configure allowed extensions and maximum image resolution in the image field's settings; Drupal validates on upload
- Ask editors nicely in the help text only
- Restrict it via the text format
- Set it in the user role configuration

### Correct Answers
- [0] Configure allowed extensions and maximum image resolution in the image field's settings; Drupal validates on upload

### Explanation
Image fields validate extensions, file size, and min/max resolution per field settings, rejecting or scaling invalid uploads at form time.

### Question 132

**Domain:** Content Modeling

A 'Recipe' type has an 'Ingredients' multi-value plain text field. Chefs want rich formatting per ingredient. What change is needed?

### Options
- Recreate the field as Text (formatted, long) — field type cannot be changed in place for existing fields
- Enable formatting in the field widget checkbox
- Add CSS to make text bold
- Plain text fields support HTML natively

### Correct Answers
- [0] Recreate the field as Text (formatted, long) — field type cannot be changed in place for existing fields

### Explanation
Field storage type is immutable once created with data; switching plain to formatted text requires a new field and data migration. Planning field types up front matters.

### Question 133

**Domain:** Content Modeling

What is the 'Summary' field used for on the default Article body?

### Options
- A trimmed version of the body shown in teasers, editable separately via the 'Edit summary' link
- A field for SEO agencies only
- The author's biography
- A private editor note

### Correct Answers
- [0] A trimmed version of the body shown in teasers, editable separately via the 'Edit summary' link

### Explanation
Long text fields with summary let editors craft teaser text; otherwise Drupal trims the body to the configured teaser length for that view mode.

### Question 134

**Domain:** Content Modeling

A content type's teaser view mode trims body text to 600 characters. Where is this trim length adjusted?

### Options
- On the body field's formatter settings ('Trimmed' formatter trim limit) in Manage display for the Teaser view mode
- In the text format configuration
- In the theme settings
- In the user profile

### Correct Answers
- [0] On the body field's formatter settings ('Trimmed' formatter trim limit) in Manage display for the Teaser view mode

### Explanation
The Trimmed formatter has a trim limit setting per view mode, so teasers can be shortened or lengthened without affecting the full view.

### Question 135

**Domain:** Content Modeling

Which options are available for comment default settings on a comment field instance? (Choose two)

### Options
- Open (new comments allowed)
- Closed/Hidden (no new comments; existing shown or hidden per setting)
- Comments are auto-approved after 24 hours
- Comments require payment

### Correct Answers
- [0] Open (new comments allowed)
- [1] Closed/Hidden (no new comments; existing shown or hidden per setting)

### Explanation
Comment field instances default to Open, Closed, or Hidden per bundle, and editors with permission can override per node (e.g. closing a heated thread).

### Question 136

**Domain:** Content Modeling

A 'Department' taxonomy term page should show the department's logo and description above the list of content. What configuration achieves this?

### Options
- Add image and description fields to the vocabulary and configure the term's view mode; the taxonomy term view renders the term header
- Hard-code the logo in page.html.twig
- Create one content type per department
- Use a menu description instead

### Correct Answers
- [0] Add image and description fields to the vocabulary and configure the term's view mode; the taxonomy term view renders the term header

### Explanation
Term entities are fieldable and their pages (via the taxonomy term view) can render the term's fields as a header above the listed content.

### Question 137

**Domain:** Content Modeling

An intranet requires that only HR can create 'Policy' nodes, but everyone authenticated can view them. How is this modeled?

### Options
- Grant 'Policy: Create new content' only to the HR role; leave 'View published content' for authenticated users
- Hide the Policy type from the Structure page
- Set all policies to unpublished by default
- Use a separate installation profile for HR

### Correct Answers
- [0] Grant 'Policy: Create new content' only to the HR role; leave 'View published content' for authenticated users

### Explanation
Create/edit/delete permissions are per content type, while viewing published content is governed by the general 'View published content' permission (and any access modules).

### Question 138

**Domain:** Content Modeling

What is the purpose of 'Publishing status' transitions like 'Archived' in a custom workflow?

### Options
- To move content into a non-live state distinct from Draft (e.g. expired content kept for records) with its own permissions
- To delete content permanently
- To change the content type of a node
- To export content to XML

### Correct Answers
- [0] To move content into a non-live state distinct from Draft (e.g. expired content kept for records) with its own permissions

### Explanation
Workflows support custom states beyond draft/published (archived, needs legal review), each marked published or unpublished, enabling realistic editorial lifecycles.

### Question 139

**Domain:** Content Modeling

A 'Banner' custom block should only appear on the front page. Where is this restriction configured?

### Options
- On the block's placement in Block layout, using the 'Pages' visibility setting to show only on <front>
- In the block type's field settings
- In the text format
- In the menu settings

### Correct Answers
- [0] On the block's placement in Block layout, using the 'Pages' visibility setting to show only on <front>

### Explanation
Block visibility conditions include pages (paths), content types, roles, and languages. '<front>' matches the site front page specifically.

### Question 140

**Domain:** Content Modeling

Why are machine names important when creating content types, fields, and vocabularies?

### Options
- They form the permanent IDs used in configuration, code, and database schema; they cannot easily change later without migrations
- They are only cosmetic labels
- They control SEO rankings directly
- They determine user passwords

### Correct Answers
- [0] They form the permanent IDs used in configuration, code, and database schema; they cannot easily change later without migrations

### Explanation
Machine names (e.g. field_event_date) appear in config exports, templates, and APIs. Choosing clear, consistent names early avoids painful renames and keeps config portable.

### Question 141

**Domain:** Content Modeling

A 'Wiki page' type should be editable by any authenticated user, like a wiki. Which permissions enable this?

### Options
- Grant authenticated users 'Wiki page: Edit any content' (and create permission as needed)
- Give everyone the administrator role
- Enable the Devel module
- Set the type to 'public edit mode' in its settings

### Correct Answers
- [0] Grant authenticated users 'Wiki page: Edit any content' (and create permission as needed)

### Explanation
Per-type edit permissions (own vs any) implement wiki-style collaboration for the authenticated role without elevating other privileges.

### Question 142

**Domain:** Content Modeling

What is the effect of enabling 'Allow each content item to have its layout customized' for a bundle's view mode in Layout Builder?

### Options
- Every node of that type gets a Layout tab to override the default layout individually
- All nodes are forced into one shared layout
- Layout Builder is disabled for the type
- The type becomes headless

### Correct Answers
- [0] Every node of that type gets a Layout tab to override the default layout individually

### Explanation
Per-entity layout overrides let editors customize individual nodes while a default layout governs the rest. Overrides are stored per entity as layout builder sections.

### Question 143

**Domain:** Content Modeling

A media type 'Brand logo' should accept only SVG files. How is this configured?

### Options
- In the media type's source field (Image/File) settings, limit allowed extensions to svg
- By renaming the media type
- In the cron settings
- SVGs are not supported by Drupal at all

### Correct Answers
- [0] In the media type's source field (Image/File) settings, limit allowed extensions to svg

### Explanation
Media types wrap a source field (image, file, oEmbed). Source field settings such as extensions are edited on the media type's Manage fields page.

### Question 144

**Domain:** Content Modeling

You need a teaser list of 'News' nodes on the homepage curated by editors in a fixed manual order. What models this best?

### Options
- A multi-value entity reference field ('Featured news') on a homepage node or custom block, rendered in the order editors select
- Sticky flags on all news nodes
- A text list of titles
- A view sorted randomly

### Correct Answers
- [0] A multi-value entity reference field ('Featured news') on a homepage node or custom block, rendered in the order editors select

### Explanation
Entity reference fields preserve selection order (sortable in the widget), giving editors explicit curation — the classic 'featured content' pattern.

### Question 145

**Domain:** Content Modeling

What does 'Translatable' checkbox on a vocabulary enable?

### Options
- Terms in the vocabulary can be translated per language via Content Translation
- The vocabulary is exported to PO files
- Terms are hidden from other languages
- It enables machine translation of terms

### Correct Answers
- [0] Terms in the vocabulary can be translated per language via Content Translation

### Explanation
Vocabularies (term bundles) can be made translatable, letting term names and fields differ per language, with fallback behavior configured in content language settings.

### Question 146

**Domain:** Content Modeling

A site's 'Biography' field on users should show on user profile pages. Where is this ensured?

### Options
- In account 'Manage display' (/admin/config/people/accounts/display), make the field visible for the default view mode
- In the Views module only
- In the text format settings
- On the registration settings page

### Correct Answers
- [0] In account 'Manage display' (/admin/config/people/accounts/display), make the field visible for the default view mode

### Explanation
User entity display is configured like other entities. Fields hidden in Manage display won't render on profile pages even if filled in.

### Question 147

**Domain:** Content Modeling

A 'FAQ' node references 'FAQ category' terms. Visitors should filter FAQs by category on a public page. What core feature provides faceted filtering?

### Options
- A View with an exposed filter on the FAQ category field
- The Block visibility settings
- The Database Logging filters
- The cron job settings

### Correct Answers
- [0] A View with an exposed filter on the FAQ category field

### Explanation
Exposed filters in Views let visitors choose filter values (e.g. category select list), producing interactive listings without custom code.

### Question 148

**Domain:** Content Modeling

A 'Location' content type has an address field. The city subfield should be its own queryable value for a 'locations by city' listing. What modeling change is recommended?

### Options
- Add a dedicated 'City' taxonomy term or text field so the value is stored and filterable independently
- Parse the city from the address at render time with regex
- Duplicate locations per city manually
- Store cities in the body text

### Correct Answers
- [0] Add a dedicated 'City' taxonomy term or text field so the value is stored and filterable independently

### Explanation
Views filters operate on discrete fields. Any value needed for filtering/sorting/grouping should be modeled as its own field or term reference, not embedded in composite data.

### Question 149

**Domain:** Content Modeling

An 'Alert banner' custom block must expire from pages after a campaign ends. What core capability helps manage this without deleting the block? (Choose two)

### Options
- Remove the block's placement (disable it) in Block layout when the campaign ends
- Use block visibility settings (pages/roles) to control where it shows
- Blocks auto-expire after 30 days in core
- Delete the block type entirely

### Correct Answers
- [0] Remove the block's placement (disable it) in Block layout when the campaign ends
- [1] Use block visibility settings (pages/roles) to control where it shows

### Explanation
Block placements can be disabled or visibility-limited without deleting the block content. Scheduled publishing of blocks needs contributed solutions (e.g. block content moderation/scheduler).

### Question 150

**Domain:** Content Modeling

A 'Project' content type references a 'Client' taxonomy term. Marketing wants the client logo to appear on project pages. What is the cleanest approach?

### Options
- Add an image field to the Client vocabulary; on the Project's reference field formatter use 'Rendered entity' with a term view mode showing the logo
- Upload the logo to every project node
- Embed logos in the body text
- Use a text field with the logo URL

### Correct Answers
- [0] Add an image field to the Client vocabulary; on the Project's reference field formatter use 'Rendered entity' with a term view mode showing the logo

### Explanation
Storing the logo once on the term and rendering the term via a view mode keeps data DRY; updating the logo updates every referencing project automatically.

### Question 151

**Domain:** Content Modeling

Which core field type is appropriate for storing a phone number with basic validation?

### Options
- Telephone field
- Text (formatted, long)
- Boolean field
- Date field

### Correct Answers
- [0] Telephone field

### Explanation
The Telephone field stores phone numbers and renders as tel: links. It is a core field type suited to contact data with appropriate formatting.

### Question 152

**Domain:** Content Modeling

An 'Email' field on a contact form content type should validate email syntax. Which field type provides this?

### Options
- Email field, which validates format on input
- Text (plain) with help text 'please type carefully'
- Integer field
- Link field

### Correct Answers
- [0] Email field, which validates format on input

### Explanation
The Email field validates email syntax at form time and renders mailto: links, purpose-built for email data.

### Question 153

**Domain:** Content Modeling

A content type should default to unpublished so editors review before publishing. How?

### Options
- In the type's publishing options, uncheck 'Published' as a default state
- Delete the published permission
- Hide the type from /node/add
- Set cron to unpublish hourly

### Correct Answers
- [0] In the type's publishing options, uncheck 'Published' as a default state

### Explanation
Per-type publishing options set the initial state of new nodes. Editors with 'Administer content' or publish permissions can publish when ready.

### Question 154

**Domain:** Content Modeling

What happens to URL aliases when a node title changes in core (without Pathauto)?

### Options
- The alias stays as-is; aliases are only updated manually unless Pathauto patterns regenerate them
- The alias always updates automatically to match the new title
- The node gets a 404 immediately
- Aliases are deleted on title change

### Correct Answers
- [0] The alias stays as-is; aliases are only updated manually unless Pathauto patterns regenerate them

### Explanation
Core Path stores aliases statically. Pathauto (contributed) generates and updates aliases from patterns (e.g. [node:title]) with configurable update behavior.

### Question 155

**Domain:** Content Modeling

A 'Course' content type references 'Lesson' nodes via a multi-value field with drag-order. What renders lessons in the editor-chosen sequence?

### Options
- The entity reference field stores values in delta order, which formatters respect
- Lessons render alphabetically always
- Order is random per request
- Ordering requires a custom database query

### Correct Answers
- [0] The entity reference field stores values in delta order, which formatters respect

### Explanation
Multi-value fields persist the order set in the widget (drag handles or weight), and formatters output items in that stored delta sequence.

### Question 156

**Domain:** Content Modeling

A policy requires that only users with the 'Legal' role may transition content from 'Needs legal review' to 'Published'. Where is this controlled?

### Options
- In the workflow transition permissions generated by Content Moderation, granted only to the Legal role
- In the content type description
- In the theme layer
- Via URL alias patterns

### Correct Answers
- [0] In the workflow transition permissions generated by Content Moderation, granted only to the Legal role

### Explanation
Each workflow transition creates a permission (e.g. 'Use Needs legal review to Published transition'), so granular editorial sign-off flows are achievable per role.

### Question 157

**Domain:** Content Modeling

You want to add a 'Download count' integer field that editors should never see on forms. What hides it from editing but keeps it available to display?

### Options
- Set the field to 'Disabled/Hidden' in Manage form display; keep it visible in Manage display
- Delete the field from the type
- Make it a required field
- Hide it with a text format

### Correct Answers
- [0] Set the field to 'Disabled/Hidden' in Manage form display; keep it visible in Manage display

### Explanation
Manage form display can hide fields from the edit form (e.g. system-populated fields) while Manage display controls front-end visibility independently.

### Question 158

**Domain:** Content Modeling

A 'Partner' content type has a logo image field. Logos should render at a fixed 200px width in listings. What is the proper configuration?

### Options
- Create a 200px-wide image style and select it on the formatter in the relevant view mode
- Tell partners to only upload 200px images
- Resize via CSS only, ignoring file weight
- Use the file field instead of image

### Correct Answers
- [0] Create a 200px-wide image style and select it on the formatter in the relevant view mode

### Explanation
Image styles produce optimized derivatives server-side; pairing them with view modes is the standard way to control image dimensions per context.

### Question 159

**Domain:** Content Modeling

How are 'Basic page' and 'Article' related in Drupal's data model?

### Options
- They are bundles (content types) of the node entity type, each with its own fields and settings
- Article is a module; Basic page is a theme
- Basic page is a block; Article is a view
- They are two separate entity types with no shared behavior

### Correct Answers
- [0] They are bundles (content types) of the node entity type, each with its own fields and settings

### Explanation
Both are node bundles sharing node behavior (revisions, publishing, permissions per type) while differing in fields and configuration.

### Question 160

**Domain:** Content Modeling

A site builder wants an overview of all fields used on the Article type with their machine names. Where is this found?

### Options
- Structure > Content types > Article > Manage fields (/admin/structure/types/manage/article/fields)
- Reports > Field list only in contributed modules
- The user profile page
- The cron settings

### Correct Answers
- [0] Structure > Content types > Article > Manage fields (/admin/structure/types/manage/article/fields)

### Explanation
Manage fields lists each field's label, machine name, and field type per bundle, with operations to edit settings, storage, and display.

## Site Display

### Question 161

**Domain:** Site Display

Marketing wants a public page listing the 10 most recent published press releases with a pager. Which core tool is built for this?

### Options
- A View with a Page display, filtered to the Press release type and sorted by created date descending
- A custom PHP page in the theme
- The Database Logging report
- A new content type called Listing

### Correct Answers
- [0] A View with a Page display, filtered to the Press release type and sorted by created date descending

### Explanation
Views builds query-driven listings with page displays (own URL), filters, sorts, and pagers entirely through the UI — the canonical site-building tool for listings.

### Question 162

**Domain:** Site Display

In a View, what is the difference between a 'Page' and a 'Block' display?

### Options
- A Page display provides the listing at its own URL path; a Block display renders the listing as a placeable block in regions
- A Page display is cached; a Block display never is
- Blocks can only show users; Pages only nodes
- They differ only in color scheme

### Correct Answers
- [0] A Page display provides the listing at its own URL path; a Block display renders the listing as a placeable block in regions

### Explanation
Displays are output variants of one view. Page displays map to paths; block displays appear in Block layout for placement with visibility conditions.

### Question 163

**Domain:** Site Display

A view lists events but should only show upcoming ones (event date >= today). What configuration achieves this without code?

### Options
- Add a filter on the event date field with operator 'Is greater than or equal to' and a relative value like 'now'
- Manually unpublish past events every day
- Sort descending and hope
- Use a text filter on titles containing 'upcoming'

### Correct Answers
- [0] Add a filter on the event date field with operator 'Is greater than or equal to' and a relative value like 'now'

### Explanation
Date filters in Views accept relative values (now, +1 week). Filtering on the event date field keeps past events out of listings automatically.

### Question 164

**Domain:** Site Display

What is a contextual filter in Views?

### Options
- A filter whose value comes from the URL or another runtime context (e.g. /articles/{term-id}), rather than a fixed or user-exposed value
- A filter shown to visitors as a form
- A filter that only works on admin pages
- A cached version of a filter

### Correct Answers
- [0] A filter whose value comes from the URL or another runtime context (e.g. /articles/{term-id}), rather than a fixed or user-exposed value

### Explanation
Contextual filters take arguments from the URL path or other context, enabling dynamic listings like 'content by author' at /user/%/articles with validation and fallback actions.

### Question 165

**Domain:** Site Display

An editor should choose an article category from a dropdown on the public /news page to filter results. What view feature provides this?

### Options
- An exposed filter on the category field
- A contextual filter with a default
- A relationship to users
- The pager settings

### Correct Answers
- [0] An exposed filter on the category field

### Explanation
Exposing a filter renders it as a visitor-facing form (select, radios, autocomplete). Combined with 'exposed form in block' it can be placed separately from the listing.

### Question 166

**Domain:** Site Display

A 'Team members' view displays users. The client wants each member's profile photo and job title shown. Which approach is correct?

### Options
- Use a view of Users with Fields format, adding the image and job title fields from the user entity
- Create a view of nodes filtered to users
- Use a view of comments
- Views cannot display users

### Correct Answers
- [0] Use a view of Users with Fields format, adding the image and job title fields from the user entity

### Explanation
Views base tables include Users. With the Fields row style, user fields (photo, title) can be added, configured with formatters and linked to profiles.

### Question 167

**Domain:** Site Display

What does a 'Relationship' in a View do?

### Options
- Joins data from a related entity (e.g. from a node to its referenced taxonomy term) so its fields/filters become available
- Links two views to the same menu
- Creates a user role relationship
- Caches the view output

### Correct Answers
- [0] A relationship joins data from a related entity (e.g. from a node to its referenced taxonomy term) so its fields/filters become available

### Explanation
Relationships traverse entity references (e.g. Content referenced from field_brand). Once added, the related entity's fields, filters, and sorts can be used in the view.

### Question 168

**Domain:** Site Display

A view should show product nodes with the brand term's logo (stored on the term). What is the minimal configuration?

### Options
- Add a relationship on the brand reference field, then add the term's image field using that relationship
- Add a second content type to the view
- Duplicate logos onto products manually
- Use aggregation instead

### Correct Answers
- [0] Add a relationship on the brand reference field, then add the term's image field using that relationship

### Explanation
The relationship joins each product to its brand term; fields selected with that relationship pull from the term, rendering the logo per product row.

### Question 169

**Domain:** Site Display

Which view 'Format' options exist in core for displaying rows? (Choose two)

### Options
- Unformatted list and Table
- Grid and HTML list
- JSON:API explorer
- PowerPoint export

### Correct Answers
- [0] Unformatted list and Table
- [1] Grid and HTML list

### Explanation
Core view formats include Unformatted list, Table, Grid, and HTML list. Row styles can be Fields or Rendered entity (content) with a chosen view mode.

### Question 170

**Domain:** Site Display

A 'News' view page at /news should also offer an RSS feed at /news/feed. What display accomplishes this?

### Options
- A Feed display attached to the Page display, with row style suited to RSS output
- A block display with RSS enabled
- A text format named RSS
- The Syslog module

### Correct Answers
- [0] A Feed display attached to the Page display, with row style suited to RSS output

### Explanation
Feed displays output RSS/XML and can attach an icon to a page display. The feed path and row plugin (e.g. RSS Fields) are configured per display.

### Question 171

**Domain:** Site Display

The default 'Frontpage' view is empty because no content is promoted. How do editors make articles appear there?

### Options
- Ensure articles are published and have 'Promoted to front page' checked, since the Frontpage view filters on that flag
- Clear the browser cache only
- Reinstall the Standard profile
- Add articles to the admin menu

### Correct Answers
- [0] Ensure articles are published and have 'Promoted to front page' checked, since the Frontpage view filters on that flag

### Explanation
The default front page is a view filtering published + promoted content. Unpromoted content won't appear; editing nodes or the view's filters changes membership.

### Question 172

**Domain:** Site Display

A view shows 50 items at once; the client wants 12 per page with 'Previous/Next' links. What setting controls this?

### Options
- The view's Pager settings ('Paged output, full pager' with 12 items per page)
- The theme's grid settings
- The content type's revision settings
- The cron interval

### Correct Answers
- [0] The view's Pager settings ('Paged output, full pager' with 12 items per page)

### Explanation
Pager options include full, mini, or 'Display a specified number of items' (fixed). Items per page and pager element text are configurable per display.

### Question 173

**Domain:** Site Display

How can a view block be limited to appear only on Article pages?

### Options
- Place the block in Block layout with the 'Content types' visibility condition set to Article
- Name the block 'articles only'
- Create the view as a page display instead
- Blocks cannot be conditionally displayed

### Correct Answers
- [0] Place the block in Block layout with the 'Content types' visibility condition set to Article

### Explanation
Block visibility conditions (content type, pages, roles, language) restrict where blocks render, independent of the view's own filters.

### Question 174

**Domain:** Site Display

A view listing nodes should hide unpublished content from editors' screens. By default, what governs this?

### Options
- Views respect node access by default; additionally a 'Published = Yes' filter is typical on admin listings
- Views always show unpublished content to everyone
- Unpublished nodes are deleted from views
- Only user 1 sees unpublished nodes anywhere

### Correct Answers
- [0] Views respect node access by default; additionally a 'Published = Yes' filter is typical on admin listings

### Explanation
Query access tags filter results per the viewer's permissions unless disabled. Admin-oriented views (like Content) explicitly add status filters for editorial oversight.

### Question 175

**Domain:** Site Display

What does the 'Aggregation' setting in a View enable?

### Options
- Grouping and counting results (e.g. number of articles per author) using GROUP BY style queries
- Combining multiple views into one URL
- Caching aggregation across pages
- Merging content types into one bundle

### Correct Answers
- [0] Grouping and counting results (e.g. number of articles per author) using GROUP BY style queries

### Explanation
With aggregation enabled, fields and filters get aggregation settings (count, sum, group results together), supporting summaries like counts per term or author.

### Question 176

**Domain:** Site Display

A view should display 'No results found' text when empty. Where is this configured?

### Options
- In the view's 'No results behavior' advanced settings, adding custom text or a rendered entity
- In the theme settings
- On the content type
- In the block's CSS

### Correct Answers
- [0] In the view's 'No results behavior' advanced settings, adding custom text or a rendered entity

### Explanation
The Advanced section provides No results behavior (e.g. Unformatted text area), letting you render a friendly message or fallback content when the query returns nothing.

### Question 177

**Domain:** Site Display

A 'Sidebar latest news' block should show 5 titles linked to nodes. Which row/format combo is simplest?

### Options
- Fields row style with just the Title field, linked to content, in an unformatted or HTML list format, limited to 5 items
- Table format with all fields
- Rendered entity with Full content view mode
- Grid with 5 columns and pager

### Correct Answers
- [0] Fields row style with just the Title field, linked to content, in an unformatted or HTML list format, limited to 5 items

### Explanation
Fields-based rows with 'Link to content' on the title produce compact linked lists; the pager item limit caps the block at 5 entries.

### Question 178

**Domain:** Site Display

You need to display article teasers (image + trimmed body) rather than bare fields in a view. What row option is best?

### Options
- 'Rendered entity' (Content) with the Teaser view mode, so Manage display controls the teaser layout
- A table with every field
- JSON row style
- Fields with raw SQL

### Correct Answers
- [0] 'Rendered entity' (Content) with the Teaser view mode, so Manage display controls the teaser layout

### Explanation
Rendered entity rows delegate layout to the entity's view mode configuration, keeping display logic in one place (Manage display) reused across views.

### Question 179

**Domain:** Site Display

An image style 'Thumbnail (100x100)' exists. The design now needs 150px thumbnails everywhere. What is the correct process?

### Options
- Edit the image style's scale effect to 150px and flush/regenerate derivatives if prompted; all usages update automatically
- Edit every node to re-upload images
- Create a new content type
- Change the formatter to 'Original image'

### Correct Answers
- [0] Edit the image style's scale effect to 150px and flush/regenerate derivatives if prompted; all usages update automatically

### Explanation
Image styles are reusable named pipelines. Updating the style updates every field/view using it; derivatives regenerate on demand (or via flush).

### Question 180

**Domain:** Site Display

Which effects can core image styles apply? (Choose two)

### Options
- Scale and crop
- Convert (e.g. to a different image format) and desaturate
- AI background removal
- Video transcoding

### Correct Answers
- [0] Scale and crop
- [1] Convert (e.g. to a different image format) and desaturate

### Explanation
Core image style effects include scale, crop, scale and crop, resize, rotate, desaturate, and convert. Effects are stackable in order with weight.

### Question 181

**Domain:** Site Display

What is the purpose of the Responsive Image module in core?

### Options
- It maps breakpoints to image styles so browsers load appropriately sized derivatives via srcset/sizes attributes
- It makes all images float left on mobile
- It resizes the browser window automatically
- It replaces the Image module entirely

### Correct Answers
- [0] It maps breakpoints to image styles so browsers load appropriately sized derivatives via srcset/sizes attributes

### Explanation
Responsive image styles pair theme breakpoints with image styles and output srcset/sizes, letting browsers pick optimal files per viewport and DPR.

### Question 182

**Domain:** Site Display

A 'Hero banner' should use a large image style on desktop and a small cropped style on mobile. Which component implements this?

### Options
- A responsive image style selecting styles per breakpoint, used by the image formatter
- A separate image field per device
- A JavaScript-only image swapper
- The Statistics module

### Correct Answers
- [0] A responsive image style selecting styles per breakpoint, used by the image formatter

### Explanation
The Responsive image formatter (per view mode/field) references a responsive image style mapping breakpoints (from the theme) to image styles, emitting srcset markup.

### Question 183

**Domain:** Site Display

Where do a theme's regions come from when placing blocks?

### Options
- They are declared in the theme's .info.yml file and rendered by its templates
- They are created in the Block layout UI per page
- They are stored in the database per node
- All themes share identical regions by law

### Correct Answers
- [0] They are declared in the theme's .info.yml file and rendered by its templates

### Explanation
Themes declare regions (header, sidebar_first, content, footer...) in .info.yml. Block layout lists the active theme's regions for placement; templates print region content.

### Question 184

**Domain:** Site Display

An editor wants the 'Main navigation' menu moved from the header to the footer. How is this done without code?

### Options
- In Block layout, move the Main navigation block to the Footer region (drag or select region)
- Edit menu.html.twig
- Recreate the menu from scratch
- Menus cannot be relocated

### Correct Answers
- [0] In Block layout, move the Main navigation block to the Footer region (drag or select region)

### Explanation
Menus render as blocks (Menu module). Reassigning the menu block's region in Block layout relocates it instantly.

### Question 185

**Domain:** Site Display

What does the 'Demonstrate block regions' link in Block layout show?

### Options
- A visual overlay of the active theme's regions (and which contain blocks) on the page
- A performance report
- The list of hidden nodes
- The theme's CSS source

### Correct Answers
- [0] A visual overlay of the active theme's regions (and which contain blocks) on the page

### Explanation
'Demonstrate block regions for this theme' renders the site with region outlines, helping site builders see available regions before placing blocks.

### Question 186

**Domain:** Site Display

A view's page display at /events should be restricted to users with the 'Subscriber' role. What controls this?

### Options
- The view display's Access settings (e.g. by role) in the view UI
- The block visibility settings
- The cron configuration
- The text format permissions

### Correct Answers
- [0] The view display's Access settings (e.g. by role) in the view UI

### Explanation
Each page/feed display has Access options (permission or role). Users without access get 403 on the path while other displays remain unaffected.

### Question 187

**Domain:** Site Display

How does a 'View' differ from a 'view mode'?

### Options
- A View is a query-based listing built in Views UI; a view mode is a per-entity display configuration used when rendering one entity
- They are identical features
- View modes are for menus only
- Views store content; view modes store users

### Correct Answers
- [0] A View is a query-based listing built in Views UI; a view mode is a per-entity display configuration used when rendering one entity

### Explanation
Views (module) query and list many entities. View modes (teaser, full) configure how a single entity renders. Views often render rows using view modes.

### Question 188

**Domain:** Site Display

A 'Related products' block on product pages should list other products sharing the same category. Which views feature makes the block context-aware?

### Options
- A contextual filter on the category field taking the term ID from the current node (via URL or a default 'Content ID from URL' + relationship)
- An exposed filter form
- A fixed filter on one category
- Aggregation by author

### Correct Answers
- [0] A contextual filter on the category field taking the term ID from the current node (via URL or a default 'Content ID from URL' + relationship)

### Explanation
Contextual filters with defaults (e.g. content ID from URL, then term via relationship) let blocks vary per page context — the standard pattern for 'related by term' sidebars.

### Question 189

**Domain:** Site Display

A view table of 'Orders' should let visitors click column headers to sort. What enables this?

### Options
- In the Table format settings, mark columns as 'Sortable'
- Add a separate exposed sort per column manually
- Sortable tables require custom JavaScript
- Use the Grid format instead

### Correct Answers
- [0] In the Table format settings, mark columns as 'Sortable'

### Explanation
The Table format offers per-column sortable checkboxes, default sort, and column alignment, generating clickable header links for users.

### Question 190

**Domain:** Site Display

What is the effect of 'Use AJAX' on a view?

### Options
- Pagers and exposed filters update the listing in place without a full page reload
- The view becomes twice as fast on the first load
- It disables caching permanently
- It requires content to be unpublished

### Correct Answers
- [0] Pagers and exposed filters update the listing in place without a full page reload

### Explanation
AJAX-enabled views replace the results region on interaction, improving UX for filtered listings. Views caching settings still apply separately.

### Question 191

**Domain:** Site Display

A view's results should be cached for 15 minutes to reduce database load. Where is this set?

### Options
- In the view display's Advanced > Caching settings (e.g. Time-based, 15 min for query/results)
- In the image style configuration
- In the user role settings
- In the menu item settings

### Correct Answers
- [0] In the view display's Advanced > Caching settings (e.g. Time-based, 15 min for query/results)

### Explanation
Views offer time-based caching of query and rendered output per display, complementing Drupal's page/dynamic caching layers.

### Question 192

**Domain:** Site Display

Which statement about 'Rendered entity' row caching implications is accurate?

### Options
- Rendered entities use Drupal's render cache, so updates to a node invalidate its cached teaser across listings automatically via cache tags
- Rendered entities never update until caches are fully cleared
- Caching requires disabling view modes
- Cache tags only apply to blocks, not entities

### Correct Answers
- [0] Rendered entities use Drupal's render cache, so updates to a node invalidate its cached teaser across listings automatically via cache tags

### Explanation
Drupal's cache-tag system invalidates render arrays when entities change, keeping listings fresh without manual clears — a key Site Display concept.

### Question 193

**Domain:** Site Display

A 'Featured' view should show only 3 manually promoted items in a fixed order set by editors. Which combo works?

### Options
- A view filtered to 'Promoted to front page' or a 'Featured' flag field, sorted by sticky/weight or a draggable admin view
- A text field listing titles
- A menu with three links styled as cards
- An RSS feed display

### Correct Answers
- [0] A view filtered to 'Promoted to front page' or a 'Featured' flag field, sorted by sticky/weight or a draggable admin view

### Explanation
Flag/promoted filters plus sort criteria (sticky, weight, created) provide editor-controlled curation. For explicit ordering, a weight field or draggableviews-style curation is used.

### Question 194

**Domain:** Site Display

Where are 'Header' and 'Footer' texts (e.g. an intro paragraph above results) configured in a view?

### Options
- In the view display's Header/Footer options, adding text areas or rendered entities
- In the theme's page template only
- In the block description field
- In the text format settings

### Correct Answers
- [0] In the view display's Header/Footer options, adding text areas or rendered entities

### Explanation
Views allow header/footer content per display (text with token support, or rendered entities), useful for intros and links around listings.

### Question 195

**Domain:** Site Display

A taxonomy-driven site section needs /guides/{term-name} to show a listing per term with the term name as the page title. How?

### Options
- A view page with a contextual filter on the term (name or ID), path containing a placeholder, and 'Override title' set from the argument
- One view per term created manually
- A block on the homepage
- A text format filter

### Correct Answers
- [0] A view page with a contextual filter on the term (name or ID), path containing a placeholder, and 'Override title' set from the argument

### Explanation
Contextual filters with path placeholders plus title overrides produce dynamic per-term pages from a single view — scalable section architecture.

### Question 196

**Domain:** Site Display

What does enabling 'Distinct' in a view's query settings do?

### Options
- Removes duplicate rows that can arise from multi-value field joins (with the caveat that pure duplicates only are removed)
- Deletes duplicate nodes from the database
- Deduplicates menu items
- Disables the pager

### Correct Answers
- [0] Removes duplicate rows that can arise from multi-value field joins (with the caveat that pure duplicates only are removed)

### Explanation
Joins on multi-value fields can multiply rows; Distinct adds SQL DISTINCT. Because joined values differ, duplicates may persist — aggregation or adjusting fields may be needed.

### Question 197

**Domain:** Site Display

An editor wants the taxonomy term listing pages (e.g. /taxonomy/term/5) to show full teasers with images instead of titles. What does core provide?

### Options
- The bundled 'Taxonomy term' view, which can be edited to change row style to Rendered entity (Teaser)
- The Comment module
- The Ban module
- The Syslog report

### Correct Answers
- [0] The bundled 'Taxonomy term' view, which can be edited to change row style to Rendered entity (Teaser)

### Explanation
The Taxonomy term view overrides default term pages. Editing its format/row style, fields, and sorts customizes all term listings centrally.

### Question 198

**Domain:** Site Display

A view's exposed category filter should default to the term from the URL when embedded on term pages, but remain changeable. Is this possible?

### Options
- Partially: exposed filters and contextual filters are separate; combining them requires contributed modules or careful view design (e.g. contextual with fallback plus exposed filters)
- Yes, with one checkbox in core
- No, filters cannot interact with URLs at all
- Only via deleting the pager

### Correct Answers
- [0] Partially: exposed filters and contextual filters are separate; combining them requires contributed modules or careful view design (e.g. contextual with fallback plus exposed filters)

### Explanation
Contextual filters read URL arguments; exposed filters are user-driven. Defaulting an exposed filter from context is not core behavior — a known exam nuance.

### Question 199

**Domain:** Site Display

A 'Documents' view lists files via a media reference. Visitors should download files directly from the listing. Which field/formatter approach works?

### Options
- Add the media's file field (via relationship) with a 'File' or 'URL to file' formatter rendering download links
- Use a text format with attachment icons
- Add a pager to the file field
- Convert files to images first

### Correct Answers
- [0] Add the media's file field (via relationship) with a 'File' or 'URL to file' formatter rendering download links

### Explanation
File fields render as links (name, URL, or download). Through a relationship from node to media, the underlying file field becomes available to the view.

### Question 200

**Domain:** Site Display

What is the purpose of the 'Attachment' display type in Views?

### Options
- To attach an additional listing before or after another display's output (e.g. a featured item above the main list)
- To add file downloads to nodes
- To attach the view to a menu only
- To clone the database

### Correct Answers
- [0] To attach an additional listing before or after another display's output (e.g. a featured item above the main list)

### Explanation
Attachment displays inherit contextual filters from the attached display and render prepend/append listings — ideal for 'featured first, then the rest' patterns.
### Question 201

**Domain:** Site Display

A view shows 'Title' and 'Event date' as separate fields, but the design wants one line: 'Title — Mar 5, 2026'. Which views feature helps?

### Options
- Rewrite results on a field (or a 'Custom text' field) combining replacement patterns like {{ title }} and {{ field_event_date }}
- A new content type
- The Statistics module
- Merging the fields in the database

### Correct Answers
- [0] Rewrite results on a field (or a 'Custom text' field) combining replacement patterns like {{ title }} and {{ field_event_date }}

### Explanation
Field handlers support 'Rewrite results' with replacement patterns from previously added fields, and 'Custom text' global fields can compose markup from multiple values.

### Question 202

**Domain:** Site Display

In a view's field settings, what does 'Link to content' (or 'Output this field as a link') do?

### Options
- Wraps the field output in an anchor to the entity (or a custom path when rewritten)
- Creates a menu item automatically
- Forces the field to open in a new window
- Adds the field to the sitemap

### Correct Answers
- [0] Wraps the field output in an anchor to the entity (or a custom path when rewritten)

### Explanation
Field handlers can link output to the entity or a rewritten destination, commonly making titles and images clickable without templates.

### Question 203

**Domain:** Site Display

A 'Photo gallery' view should show a 4-column grid of image teasers. What settings achieve the columns without CSS work?

### Options
- Use the Grid format with 4 columns and Rendered entity (teaser) rows
- Use the Table format with sorting
- Use an RSS display
- Use a Block layout region per column

### Correct Answers
- [0] Use the Grid format with 4 columns and Rendered entity (teaser) rows

### Explanation
The Grid format arranges rows into a configurable number of columns with alignment options, paired with teaser rendering for card-like galleries.

### Question 204

**Domain:** Site Display

What does the 'Content: Published status (Yes/No)' filter do in an admin view of content?

### Options
- Restricts the listing to published (or unpublished) content depending on the filter value
- Publishes the listed content
- Changes the front page
- Blocks anonymous users

### Correct Answers
- [0] Restricts the listing to published (or unpublished) content depending on the filter value

### Explanation
Status filters shape which rows appear. The default Content admin view exposes status, type, title, and language filters for editorial triage.

### Question 205

**Domain:** Site Display

A 'People directory' view should group members under their department name headings. Which technique applies?

### Options
- Group the format (e.g. unformatted list) by the department field in the format settings
- Create one view per department
- Use a table format with borders
- Enable the pager

### Correct Answers
- [0] Group the format (e.g. unformatted list) by the department field in the format settings

### Explanation
Format settings offer 'Grouping field' options that wrap rows under headings per value — the standard way to produce sectioned directories.

### Question 206

**Domain:** Site Display

How can a view avoid showing the currently viewed node in a 'More like this' block?

### Options
- Add a contextual filter on Content ID with 'Provide default value: Content ID from URL' and 'Exclude' enabled
- Delete the current node
- Use an exposed filter with no default
- It is impossible in core views

### Correct Answers
- [0] Add a contextual filter on Content ID with 'Provide default value: Content ID from URL' and 'Exclude' enabled

### Explanation
Contextual filters have an Exclude option, inverting the condition — the canonical pattern for removing the current item from related listings.

### Question 207

**Domain:** Site Display

A 'Latest tweets-style updates' view needs JSON output for a decoupled widget. What core options exist? (Choose two)

### Options
- The REST export display in Views (with RESTful Web Services configured)
- The JSON:API core module exposing entity resources
- The RSS row style renamed to .json
- The syslog endpoint

### Correct Answers
- [0] The REST export display in Views (with RESTful Web Services configured)
- [1] The JSON:API core module exposing entity resources

### Explanation
Views can add REST export displays with serializers (json), and JSON:API provides a full standardized API over entities — both core paths for decoupled data.

### Question 208

**Domain:** Site Display

What does 'Show: Content | of type: Article' vs 'Show: Fields' control in a view?

### Options
- Whether rows render entities via a view mode or as individually configured fields
- Whether the view is cached
- Whether the pager shows
- Whether translations are enabled

### Correct Answers
- [0] Whether rows render entities via a view mode or as individually configured fields

### Explanation
The row style chooses entity rendering (view mode driven) or field-by-field output with per-field handlers, rewriting, and linking options.

### Question 209

**Domain:** Site Display

A 'Speakers' view page has a block variant for the sidebar. How should the block show fewer fields than the page?

### Options
- Override the fields on the block display using 'This display (override)' so each display configures its own fields
- Create a second content type
- Duplicate the view's database table
- Blocks cannot override anything

### Correct Answers
- [0] Override the fields on the block display using 'This display (override)' so each display configures its own fields

### Explanation
Displays inherit from the master/default display; per-display overrides (fields, filters, pager, title) tailor variants while sharing the base query.

### Question 210

**Domain:** Site Display

Where are custom view modes like 'Card' or 'Sidebar' created?

### Options
- Structure > Display modes > View modes, then configured per bundle in Manage display
- In the Views module only
- In the theme's CSS file
- They cannot be created in the UI

### Correct Answers
- [0] Structure > Display modes > View modes, then configured per bundle in Manage display

### Explanation
Custom view modes are declared at /admin/structure/display-modes/view and appear as tabs/options on each bundle's Manage display page and in rendered-entity selectors.

### Question 211

**Domain:** Site Display

A 'Card' view mode was created but isn't offered when configuring a view's row style for Articles. Why?

### Options
- The 'Card' view mode is not enabled for the Article bundle in Manage display (custom view modes must be enabled per bundle)
- Views only support Teaser and Full
- The view cache is stale
- Cards require the Grid format

### Correct Answers
- [0] The 'Card' view mode is not enabled for the Article bundle in Manage display (custom view modes must be enabled per bundle)

### Explanation
Custom view modes must be enabled per bundle ('Custom display settings' in Manage display) before they can be configured and selected in views or formatters.

### Question 212

**Domain:** Site Display

An 'Alert' block should show only to anonymous users. How is this done?

### Options
- In the block's visibility settings, restrict by role to 'Anonymous user'
- Name the block 'anonymous only'
- Blocks always show to everyone
- Use a text format rule

### Correct Answers
- [0] In the block's visibility settings, restrict by role to 'Anonymous user'

### Explanation
Role visibility conditions show/hide blocks per user role — common for login prompts shown only to anonymous visitors.

### Question 213

**Domain:** Site Display

A bilingual site needs a 'Welcome' block shown only on French pages. What visibility condition applies?

### Options
- The Language visibility condition set to French
- The Pages condition set to /fr/*
- Both Language condition and path conditions can work; the Language condition is the cleanest
- Blocks cannot be language-aware

### Correct Answers
- [0] The Language visibility condition set to French

### Explanation
Block visibility includes a Language condition when multilingual is enabled. Path-based rules are possible but language conditions are more robust.

### Question 214

**Domain:** Site Display

What does the 'Main page content' block represent in Block layout?

### Options
- The primary page output (node, view page, form) rendered by the active route; it is required for pages to show content
- A custom block with the homepage text
- The site slogan
- The admin toolbar

### Correct Answers
- [0] The primary page output (node, view page, form) rendered by the active route; it is required for pages to show content

### Explanation
The Main page content block (System module) injects route content into the Content region. Removing it leaves pages without their main output.

### Question 215

**Domain:** Site Display

A view's RSS feed shows full HTML bodies, but the podcatcher needs plain trimmed text. Where is this adjusted?

### Options
- In the Feed display's row style settings (e.g. RSS Fields mapping description to a trimmed/plain text field)
- In the cron settings
- In the image style settings
- RSS cannot be customized

### Correct Answers
- [0] In the Feed display's row style settings (e.g. RSS Fields mapping description to a trimmed/plain text field)

### Explanation
Feed displays use row plugins like 'RSS Fields' mapping title/link/description elements to chosen fields with formatter options such as trimmed output.

### Question 216

**Domain:** Site Display

How would you add a 'Read more' link under each trimmed teaser in a view of fields?

### Options
- Add the 'Content: Link to content' field (View content link), optionally with custom text 'Read more'
- Add a menu item per node
- Rewrite the image style
- Enable comments

### Correct Answers
- [0] Add the 'Content: Link to content' field (View content link), optionally with custom text 'Read more'

### Explanation
Views provide a link field handler outputting an anchor to the entity with customizable text — the simple way to add CTA links to field-based rows.

### Question 217

**Domain:** Site Display

A view lists products with a multi-value image field, showing every image per row. The client wants only the first image. What setting fixes this?

### Options
- In the image field's 'Multiple field settings', limit to 1 value
- Delete the other images
- Use a table format
- Change the field cardinality to 1

### Correct Answers
- [0] In the image field's 'Multiple field settings', limit to 1 value

### Explanation
Multi-value field handlers can limit displayed values and offset, so listings show a single representative image without altering stored data or cardinality.

### Question 218

**Domain:** Site Display

What does 'Exclude from display' on a view field do, and why use it?

### Options
- It suppresses the field's output while keeping its value available for rewriting in later fields
- It deletes the field from the database
- It hides the view from anonymous users
- It removes the field from the query entirely

### Correct Answers
- [0] It suppresses the field's output while keeping its value available for rewriting in later fields

### Explanation
Excluded fields feed replacement patterns in subsequent rewrites (order matters), enabling composite output like linking an image to a rewritten URL.

### Question 219

**Domain:** Site Display

A landing page built with Layout Builder needs a two-column section with a view block in one column. Is this supported?

### Options
- Yes; Layout Builder sections can hold blocks, including view blocks, inline within the layout
- No; Layout Builder only renders fields
- Only with a custom theme
- Only on the front page

### Correct Answers
- [0] Yes; Layout Builder sections can hold blocks, including view blocks, inline within the layout

### Explanation
Layout Builder's block placement includes view blocks, custom blocks, and field blocks, letting editors compose field+listing layouts visually.

### Question 220

**Domain:** Site Display

A 'Contact us' page should show the contact form in the main area with a map image in the sidebar. What combination achieves this?

### Options
- The core Contact form at /contact plus a custom image block placed in the sidebar visible only on /contact
- A new content type with PHP enabled
- A view of comments
- The Update Manager

### Correct Answers
- [0] The core Contact form at /contact plus a custom image block placed in the sidebar visible only on /contact

### Explanation
Site-wide contact forms live at /contact (per-category forms too); sidebar content is handled by blocks with page visibility conditions.

### Question 221

**Domain:** Site Display

An editor reports the view at /staff shows oldest members first. What change fixes ordering?

### Options
- Add/adjust a sort criterion (e.g. Created date descending or a weight/last name field ascending) in the view
- Re-create all users
- Clear the image styles
- Change the block region

### Correct Answers
- [0] Add/adjust a sort criterion (e.g. Created date descending or a weight/last name field ascending) in the view

### Explanation
Sort criteria order results by any field (with direction). Multiple criteria chain (e.g. department, then last name).

### Question 222

**Domain:** Site Display

A 'Blog' view page should live at /blog and appear in the main navigation. How is the menu item added?

### Options
- In the view's Page display, set the Menu option ('Normal menu entry') under the Main navigation menu
- By renaming the view 'blog'
- In the theme settings
- Views cannot create menu items

### Correct Answers
- [0] In the view's Page display, set the Menu option ('Normal menu entry') under the Main navigation menu

### Explanation
Page displays can register menu entries or tabs directly from the view UI, placing listing pages into navigation without manual menu work.

### Question 223

**Domain:** Site Display

What is the difference between a view's 'Normal menu entry' and a 'Menu tab'?

### Options
- Normal entries appear as regular menu links; tabs render as local task tabs (like View/Edit on nodes) under a parent path
- Tabs are only for admins; entries for anonymous users
- Tabs require JavaScript
- There is no difference

### Correct Answers
- [0] Normal entries appear as regular menu links; tabs render as local task tabs (like View/Edit on nodes) under a parent path

### Explanation
Menu tabs (local tasks) group related pages under a parent (e.g. /user/%/orders and /user/%/subscriptions as tabs on profiles).

### Question 224

**Domain:** Site Display

A view page at /user/%/orders should show each user their own orders. What enforces per-user results?

### Options
- A contextual filter on the order's user reference with validation against user IDs from the path
- An exposed filter on usernames
- A fixed filter on user 1
- A block visibility rule

### Correct Answers
- [0] A contextual filter on the order's user reference with validation against user IDs from the path

### Explanation
Contextual filters with validators (User ID from URL) scope results to the profile being viewed, powering per-user account pages.

### Question 225

**Domain:** Site Display

How can the number '10' in a view's 'Items per page: 10' be changed to 25?

### Options
- Edit the view display's pager settings and set items per page to 25
- Edit the theme's pager template
- Change it in user account settings
- It requires SQL

### Correct Answers
- [0] Edit the view display's pager settings and set items per page to 25

### Explanation
Pager configuration (type, items per page, offset, pager ID) is per display in the view UI.

### Question 226

**Domain:** Site Display

A 'Gallery' view with AJAX pager sometimes shows stale images after uploads. What core mechanism normally prevents this?

### Options
- Cache tags/bubbles invalidate cached output when entities change; max-age settings bound time-based caching
- Browsers are instructed to never cache Drupal
- AJAX disables all caching
- Uploading images clears the database

### Correct Answers
- [0] Cache tags/bubbles invalidate cached output when entities change; max-age settings bound time-based caching

### Explanation
Drupal's render cache uses tags (node:5, media:12) so edits invalidate affected output; time-based caching adds a bounded fallback for query results.

### Question 227

**Domain:** Site Display

Where do you configure whether a block's title is displayed?

### Options
- When placing/configuring the block in Block layout: 'Display title' checkbox
- In the block type's field settings only
- In the user role settings
- In the cron configuration

### Correct Answers
- [0] When placing/configuring the block in Block layout: 'Display title' checkbox

### Explanation
Block placement forms include a title override and a display-title toggle, separate from the block's admin description.

### Question 228

**Domain:** Site Display

A 'Hero' block should appear above the main content but below the header on every page. What determines this?

### Options
- The block's region (e.g. Highlighted/Content top) and its weight within that region in Block layout
- The block's creation date
- The theme's name
- The user's timezone

### Correct Answers
- [0] The block's region (e.g. Highlighted/Content top) and its weight within that region in Block layout

### Explanation
Blocks are ordered by weight per region; regions are ordered by the theme's templates. Together they fix vertical placement.

### Question 229

**Domain:** Site Display

What is a 'view block' vs a 'custom block'?

### Options
- A view block renders a view's Block display; a custom block stores editor-managed content from a block type
- They are identical
- View blocks store text; custom blocks run queries
- Custom blocks require PHP

### Correct Answers
- [0] A view block renders a view's Block display; a custom block stores editor-managed content from a block type

### Explanation
Views expose Block displays as placeable blocks; custom blocks are content entities. Both are placed via Block layout with visibility rules.

### Question 230

**Domain:** Site Display

A 'Breaking news' banner must be easily toggleable by editors. Which approach is most editor-friendly?

### Options
- A custom block editors enable/disable (or edit) via the block library/placement, possibly restricted to <front>
- Editing the theme template each time
- A cron job per campaign
- A new view mode per campaign

### Correct Answers
- [0] A custom block editors enable/disable (or edit) via the block library/placement, possibly restricted to <front>

### Explanation
Custom blocks give editors direct control of banner content and placement state without developer involvement.

### Question 231

**Domain:** Site Display

In a view, what does the filter 'Content: Has taxonomy term (with depth)' do?

### Options
- Matches content tagged with the selected term or its descendants up to the configured depth
- Filters by term name length
- Only matches the exact term with no hierarchy support
- Filters comments instead of nodes

### Correct Answers
- [0] Matches content tagged with the selected term or its descendants up to the configured depth

### Explanation
Term filters with depth include child terms, essential for hierarchical vocabularies where parent selections should include nested terms.

### Question 232

**Domain:** Site Display

A 'Partners' view should randomly order logos on each page load. Is this possible in core views?

### Options
- Yes; add the 'Global: Random' sort criterion
- No; views cannot sort randomly
- Only via PHP in the theme
- Only with tables

### Correct Answers
- [0] Yes; add the 'Global: Random' sort criterion

### Explanation
Views include a Random sort handler. Note random ordering bypasses some caching benefits, so time-based caching is often paired with it.

### Question 233

**Domain:** Site Display

How would you link each row of a 'Documents' table to edit the document for editors only?

### Options
- Add a 'Content: Link to edit content' field, which respects permissions and shows only to users who can edit
- Add a text field with /edit appended
- Use a menu
- Permission-aware links are not possible

### Correct Answers
- [0] Add a 'Content: Link to edit content' field, which respects permissions and shows only to users who can edit

### Explanation
Views include edit/delete link handlers that check access per row, rendering management links only for authorized users.

### Question 234

**Domain:** Site Display

A view of 'Events' should show a summary count like 'Displaying 1–12 of 87'. Where is this enabled?

### Options
- In the view's Header/Footer or pager settings using the result summary ('Global: Result summary')
- In the block title
- In the image style
- In cron settings

### Correct Answers
- [0] In the view's Header/Footer or pager settings using the result summary ('Global: Result summary')

### Explanation
The Global result summary (with @start/@end/@total placeholders) can be added to header/footer areas of the display.

### Question 235

**Domain:** Site Display

What is the effect of choosing 'Require this relationship' on a view relationship?

### Options
- It turns the join into an inner join, excluding rows lacking the referenced entity
- It makes the relationship optional
- It deletes orphaned content
- It requires admin approval

### Correct Answers
- [0] It turns the join into an inner join, excluding rows lacking the referenced entity

### Explanation
Optional relationships act like left joins (rows kept when no related entity); required ones filter out rows without matches.

### Question 236

**Domain:** Site Display

A 'Staff' view shows a 'Blog posts by this person' count per user. Which combination enables counting related nodes?

### Options
- A relationship to content authored (reverse relationship) plus aggregation with a COUNT on the node field
- A text field with manual counts
- A menu per user
- The Statistics module only

### Correct Answers
- [0] A relationship to content authored (reverse relationship) plus aggregation with a COUNT on the node field

### Explanation
Reverse relationships traverse references backward (user → their content); aggregation then counts related items per row.

### Question 237

**Domain:** Site Display

An 'Events map' view should output addresses as JSON markers for a JS map. Which core building blocks support exposing structured data? (Choose two)

### Options
- REST export display with a serializer (json)
- JSON:API resources over the Event content type
- The Comment RSS row
- The Ban module API

### Correct Answers
- [0] REST export display with a serializer (json)
- [1] JSON:API resources over the Event content type

### Explanation
Both core approaches expose entity data as JSON for decoupled consumers; REST export views offer curated payloads, JSON:API standardized ones.

### Question 238

**Domain:** Site Display

A homepage 'Hero' uses a view with 1 item. The hero should change when editors promote a different article. Minimal setup?

### Options
- A view block filtered to promoted articles sorted by created desc, limit 1; editors promote the new article
- Hard-code the node ID in the block
- A menu link styled large
- A cron script

### Correct Answers
- [0] A view block filtered to promoted articles sorted by created desc, limit 1; editors promote the new article

### Explanation
Promotion flags plus a 1-item block create an editor-controlled hero without code changes.

### Question 239

**Domain:** Site Display

What does 'Display the exposed form in a block' do in a view?

### Options
- Outputs the exposed filter form as a separate placeable block that submits to the view's page
- Hides the filters permanently
- Converts the view to a custom block
- Disables AJAX

### Correct Answers
- [0] Outputs the exposed filter form as a separate placeable block that submits to the view's page

### Explanation
Exposed-form blocks let filters live in sidebars while results render in the main region — standard search/listing page architecture.

### Question 240

**Domain:** Site Display

A view's table should highlight rows where stock is zero. What view-level option exists without custom code?

### Options
- Limited: use field rewriting with replacement patterns/CSS classes per field, or a custom template; core views can't conditionally style whole rows purely via UI
- Enable the 'Highlight zero stock' checkbox
- Use the Grid format instead
- Zero-stock rows are auto-hidden

### Correct Answers
- [0] Limited: use field rewriting with replacement patterns/CSS classes per field, or a custom template; core views can't conditionally style whole rows purely via UI

### Explanation
Views support per-field classes/rewrites and row classes via custom code/templates. Fully conditional row styling is a theming-level task — good exam nuance about view UI limits.

## Site Configuration

### Question 241

**Domain:** Site Configuration

An editor pastes content from Word and the <script> tags are stripped on save. Which configuration controls this?

### Options
- The text format assigned to the field (e.g. Basic HTML) with its 'Limit allowed HTML tags' filter settings
- The cron settings
- The image style settings
- The user profile timezone

### Correct Answers
- [0] The text format assigned to the field (e.g. Basic HTML) with its 'Limit allowed HTML tags' filter settings

### Explanation
Text formats define filters (allowed tags, URL conversion, HTML correction). Tags not in the allowed list are stripped or escaped on output depending on filter config.

### Question 242

**Domain:** Site Configuration

What is the difference between 'Full HTML' and 'Restricted HTML' text formats in a Standard install?

### Options
- Full HTML allows nearly all tags (intended for trusted users); Restricted HTML limits tags to a safe subset for less-trusted roles
- Restricted HTML is for admins only
- Full HTML disables the WYSIWYG editor
- There is no functional difference

### Correct Answers
- [0] Full HTML allows nearly all tags (intended for trusted users); Restricted HTML limits tags to a safe subset for less-trusted roles

### Explanation
Formats are permission-granted per role. Powerful formats like Full HTML should be limited to trusted roles since they permit richer (and riskier) markup.

### Question 243

**Domain:** Site Configuration

How do you add a table button to the CKEditor 5 toolbar for the Basic HTML format?

### Options
- Edit the text format at /admin/config/content/formats, drag the Table button into the active toolbar, and ensure table tags are allowed
- Install a new theme
- Enable the Table module from core
- It requires editing ckeditor.js manually

### Correct Answers
- [0] Edit the text format at /admin/config/content/formats, drag the Table button into the active toolbar, and ensure table tags are allowed

### Explanation
Drupal's editor configuration UI lets you drag toolbar buttons per format; Drupal warns if allowed-tag filters would strip the inserted markup, prompting alignment.

### Question 244

**Domain:** Site Configuration

A role 'Blogger' should use the Basic HTML format but not Full HTML. Where is this enforced?

### Options
- Text formats have role-based permissions on each format's configuration page
- In the theme settings
- In the user's password policy
- Text formats are global and cannot vary by role

### Correct Answers
- [0] Text formats have role-based permissions on each format's configuration page

### Explanation
Each text format lists roles permitted to use it. Users see only formats their roles allow, choosing among them when editing formatted text fields.

### Question 245

**Domain:** Site Configuration

What is the risk of granting untrusted roles a text format that allows <script> or unfiltered HTML?

### Options
- Cross-site scripting (XSS): malicious users could inject scripts executed in other users' browsers
- Nothing; scripts are always escaped
- It only affects the admin theme
- It improves SEO and is harmless

### Correct Answers
- [0] Cross-site scripting (XSS): malicious users could inject scripts executed in other users' browsers

### Explanation
Unfiltered formats enable stored XSS. Drupal's filter system exists precisely to mitigate this — always apply least-privilege to format permissions.

### Question 246

**Domain:** Site Configuration

New user registrations should require administrator approval before accounts become active. Where is this set?

### Options
- Configuration > People > Account settings: 'Who can register accounts?' set to 'Visitors, but administrator approval is required'
- In each user's profile
- In the cron settings
- In the text format settings

### Correct Answers
- [0] Configuration > People > Account settings: 'Who can register accounts?' set to 'Visitors, but administrator approval is required'

### Explanation
Account settings control registration modes (admins only, visitors, visitors with approval), email verification requirement, and cancellation behavior.

### Question 247

**Domain:** Site Configuration

You want to customize the 'Welcome (new user created)' email sent on registration. Where?

### Options
- Account settings page, in the E-mails section where each template can be edited with token support
- In the mail server config only
- In the theme templates
- Emails cannot be customized in core

### Correct Answers
- [0] Account settings page, in the E-mails section where each template can be edited with token support

### Explanation
Account settings include editable subjects/bodies for registration, approval, blocking, cancelation, and password recovery emails, using tokens like [user:display-name].

### Question 248

**Domain:** Site Configuration

A 'Manager' role needs permission to edit any article but not delete them. How is this configured?

### Options
- On /admin/people/permissions, grant 'Article: Edit any content' to the Manager role and leave delete permissions unchecked
- Grant the administrator role to managers
- Create a new text format
- Enable maintenance mode

### Correct Answers
- [0] On /admin/people/permissions, grant 'Article: Edit any content' to the Manager role and leave delete permissions unchecked

### Explanation
The permissions matrix assigns granular capabilities per role. Node permissions split create/edit/delete into 'own' and 'any' variants per content type.

### Question 249

**Domain:** Site Configuration

What does the 'authenticated user' role represent?

### Options
- Every logged-in user automatically has this role; it cannot be removed and serves as the baseline for logged-in permissions
- Only users created by admins
- Only users with verified addresses in LDAP
- A temporary role expiring after 30 days

### Correct Answers
- [0] Every logged-in user automatically has this role; it cannot be removed and serves as the baseline for logged-in permissions

### Explanation
Authenticated is a built-in role assigned to all logged-in accounts. Permissions granted to it apply site-wide to members, so grant conservatively.

### Question 250

**Domain:** Site Configuration

A developer asks how to move the new 'Event' content type from dev to production without recreating it by hand. What is the core mechanism?

### Options
- Export the site's configuration (full archive or single item) and import/sync it on production via Configuration synchronization
- Copy the node via the clipboard
- Email the content type
- Rebuild it manually on prod each time

### Correct Answers
- [0] Export the site's configuration (full archive or single item) and import/sync it on production via Configuration synchronization

### Explanation
Configuration management exports config (content types, fields, views) to YAML for versioning and deployment, imported via the sync UI, drush cim, or deployment hooks.

### Question 251

**Domain:** Site Configuration

Where is the configuration sync directory typically located, and what does it contain?

### Options
- Outside or inside the docroot configured in settings.php (e.g. ../config/sync), containing YAML files of the site's active configuration
- In the database only
- In sites/default/files
- In the vendor directory

### Correct Answers
- [0] Outside or inside the docroot configured in settings.php (e.g. ../config/sync), containing YAML files of the site's active configuration

### Explanation
$config_directories (or settings in D10/11 via settings.php) define the sync directory holding exported config YAML, which should be committed to version control.

### Question 252

**Domain:** Site Configuration

The Configuration synchronization page shows differences between the sync directory and the active site. What does 'Import all' do?

### Options
- Applies the YAML configuration from the sync directory to the site's active configuration
- Exports the database to YAML
- Deletes the sync directory
- Reinstalls Drupal

### Correct Answers
- [0] Applies the YAML configuration from the sync directory to the site's active configuration

### Explanation
Importing syncs active config to match the files, enabling deployments. Content (nodes, users) is not part of config sync and requires other migration tools.

### Question 253

**Domain:** Site Configuration

You need to export just one view's configuration to share with another site. What feature helps?

### Options
- Configuration > Development > Configuration synchronization > Export > Single item, selecting the view
- The Views export to CSV button
- The node clone feature
- Single-item export is not possible

### Correct Answers
- [0] Configuration > Development > Configuration synchronization > Export > Single item, selecting the view

### Explanation
Single-item export/import moves individual config entities between sites, provided dependencies (fields, types) exist on the target.

### Question 254

**Domain:** Site Configuration

What should never be deployed via configuration synchronization?

### Options
- Content like nodes, users, and taxonomy terms — config sync covers configuration only
- View configurations
- Content type definitions
- Field storage settings

### Correct Answers
- [0] Content like nodes, users, and taxonomy terms — config sync covers configuration only

### Explanation
Content entities live in the database per environment. Moving content requires migration tools (Migrate, contributed content-sync modules), not config sync.

### Question 255

**Domain:** Site Configuration

Editors want URLs like /news/2026/05/my-article generated automatically. Which combination delivers this?

### Options
- The Pathauto module (with Token) using a pattern like news/[node:created:custom:Y]/[node:created:custom:m]/[node:title]
- The core Path module alone with manual aliases per node
- The Redirect module only
- Editing .htaccess

### Correct Answers
- [0] The Pathauto module (with Token) using a pattern like news/[node:created:custom:Y]/[node:created:custom:m]/[node:title]

### Explanation
Pathauto generates aliases from token patterns per content type/vocabulary, with bulk update and punctuation/transliteration settings.

### Question 256

**Domain:** Site Configuration

A node was renamed and its Pathauto alias changed, breaking external links. What contributed module creates redirects automatically on alias change?

### Options
- Redirect (with 'Automatically create redirects when URL aliases change' enabled)
- Pathauto alone
- The Ban module
- The Syslog module

### Correct Answers
- [0] Redirect (with 'Automatically create redirects when URL aliases change' enabled)

### Explanation
The Redirect module manages 301 redirects and can auto-create them when aliases change, preserving SEO and inbound links.

### Question 257

**Domain:** Site Configuration

How do you set a custom 'Page not found' (404) page to a friendly node?

### Options
- In Basic site settings, set 'Default 404 (not found) page' to the node's path
- By deleting the missing pages
- In the text format settings
- It cannot be changed in core

### Correct Answers
- [0] In Basic site settings, set 'Default 404 (not found) page' to the node's path

### Explanation
Site information settings accept internal paths for default 403 and 404 pages, letting you design helpful error experiences.

### Question 258

**Domain:** Site Configuration

The site should use the visitor's timezone for displayed dates. What regional settings support timezones? (Choose two)

### Options
- A default time zone in Regional settings
- 'Users may set their own time zone' option on account settings/reminder: configurable in Regional settings
- Timezones are per-block only
- Drupal ignores timezones entirely

### Correct Answers
- [0] A default time zone in Regional settings
- [1] 'Users may set their own time zone' option on account settings/reminder: configurable in Regional settings

### Explanation
/admin/config/regional/settings sets the site default timezone and whether users can choose their own, affecting date display site-wide.

### Question 259

**Domain:** Site Configuration

You need to put the site into maintenance mode before a big update but keep working yourself. What permission allows working during maintenance?

### Options
- 'Use the site in maintenance mode'
- 'Administer themes'
- 'View the administration theme'
- 'Bypass content access control'

### Correct Answers
- [0] 'Use the site in maintenance mode'

### Explanation
Users with 'Use the site in maintenance mode' (and user 1) can access the site while visitors see the maintenance message at /admin/config/development/maintenance.

### Question 260

**Domain:** Site Configuration

Where do you configure how often Automated Cron runs?

### Options
- Configuration > System > Cron, choosing the interval (e.g. every 3 hours)
- In the web server config only
- In each module's settings separately
- Automated Cron has no settings

### Correct Answers
- [0] Configuration > System > Cron, choosing the interval (e.g. every 3 hours)

### Explanation
The cron admin page sets the automated interval, shows last run, and provides the external cron URL with its key for system crontabs.

### Question 261

**Domain:** Site Configuration

Sensitive uploaded contracts must not be publicly accessible via URL. What core capability addresses this?

### Options
- The private file system: set a private files path in settings.php and use a file field with 'Private files' upload destination
- Renaming files to .secret
- Deleting the files directory
- Hiding the files link in CSS

### Correct Answers
- [0] The private file system: set a private files path in settings.php and use a file field with 'Private files' upload destination

### Explanation
Private files are served through Drupal with access checks rather than direct web access. File fields choose public/private destinations per field.

### Question 262

**Domain:** Site Configuration

Where is the public files directory path configured and shown?

### Options
- Configuration > Media > File system (public path, temporary path); the public path defaults to sites/default/files
- In the theme settings
- In the user profile
- It is not visible in the UI

### Correct Answers
- [0] Configuration > Media > File system (public path, temporary path); the public path defaults to sites/default/files

### Explanation
The File system settings page shows/configures public, private, and temporary paths plus download method. Private path requires settings.php definition first.

### Question 263

**Domain:** Site Configuration

The search index shows 80% indexed. What triggers indexing of the remainder?

### Options
- Cron runs index content in batches; you can also manually run cron or set items per cron run in Search settings
- Indexing only happens on module install
- Re-saving the theme
- Restarting PHP

### Correct Answers
- [0] Cron runs index content in batches; you can also manually run cron or set items per cron run in Search settings

### Explanation
The Search module indexes during cron (configurable batch size at /admin/config/search/pages). The status report/search page shows progress and a re-index button.

### Question 264

**Domain:** Site Configuration

Marketing wants 'Press release' results boosted over pages in core search. What setting helps?

### Options
- Search settings' content ranking factors (e.g. keyword relevance, recency) per search page; per-type boosting requires contributed search or custom scoring
- Renaming the content type
- Using sticky flags
- Deleting basic pages from the index

### Correct Answers
- [0] Search settings' content ranking factors (e.g. keyword relevance, recency) per search page; per-type boosting requires contributed search or custom scoring

### Explanation
Core search offers scoring influences (keyword relevance, recency, comments, views). Advanced per-type boosting typically moves teams to Search API + Solr.

### Question 265

**Domain:** Site Configuration

Anonymous users see a cached version of pages, improving speed. Which core modules provide this? (Choose two)

### Options
- Internal Page Cache (anonymous page caching)
- Dynamic Page Cache (per-context caching for all users)
- The Statistics module
- The Ban module

### Correct Answers
- [0] Internal Page Cache (anonymous page caching)
- [1] Dynamic Page Cache (per-context caching for all users)

### Explanation
Page Cache stores full anonymous responses; Dynamic Page Cache caches render arrays per cache context for authenticated users too. Both are enabled by default in Standard.

### Question 266

**Domain:** Site Configuration

Where are CSS and JavaScript aggregation enabled for production?

### Options
- Configuration > Development > Performance: 'Aggregate CSS files' and 'Aggregate JavaScript files' plus cache lifetime settings
- In the theme's CSS file
- In user roles
- Aggregation is always on and hidden

### Correct Answers
- [0] Configuration > Development > Performance: 'Aggregate CSS files' and 'Aggregate JavaScript files' plus cache lifetime settings

### Explanation
The Performance page toggles page cache max-age and asset aggregation. Aggregation reduces requests; changes require cache rebuilds to take effect.

### Question 267

**Domain:** Site Configuration

A client wants errors and warnings logged off-site for compliance. What core option exists beyond Database logging?

### Options
- The Syslog module sends log entries to the system logger (and onward to remote syslog)
- The Comment module
- The Statistics module
- The Tour module

### Correct Answers
- [0] The Syslog module sends log entries to the system logger (and onward to remote syslog)

### Explanation
Syslog core module writes watchdog entries to OS syslog with configurable identity/facility, suited for centralized logging infrastructure.

### Question 268

**Domain:** Site Configuration

During development, all PHP notices should display on screen; in production they should be hidden. Where is this configured?

### Options
- Configuration > Development > Logging and errors: 'Error messages to display' (All / Errors and warnings / None)
- In each user's profile
- In the image toolkit settings
- It is hard-coded and unchangeable

### Correct Answers
- [0] Configuration > Development > Logging and errors: 'Error messages to display' (All / Errors and warnings / None)

### Explanation
The logging settings control on-screen error verbosity. Production sites should use 'None' to avoid leaking sensitive paths and data.

### Question 269

**Domain:** Site Configuration

Which image library does Drupal use by default for image styles, and where is it configured?

### Options
- The GD toolkit (bundled with PHP), selected at Configuration > Media > Image toolkit
- ImageMagick only, with no config page
- The browser's canvas
- FFmpeg

### Correct Answers
- [0] The GD toolkit (bundled with PHP), selected at Configuration > Media > Image toolkit

### Explanation
Image toolkit settings choose the processing library (GD by default; ImageMagick via contributed module) and JPEG quality for generated derivatives.

### Question 270

**Domain:** Site Configuration

What is the purpose of the 'Trusted host patterns' setting?

### Options
- In settings.php, it validates the HTTP Host header to prevent host header attacks
- It whitelists IPs for admin access
- It lists allowed email domains
- It configures CDN origins

### Correct Answers
- [0] In settings.php, it validates the HTTP Host header to prevent host header attacks

### Explanation
trusted_host_patterns restricts which hostnames Drupal responds to, mitigating cache poisoning and password-reset link attacks. It's set in settings.php, not the UI.

### Question 271

**Domain:** Site Configuration

A shortcut set 'Editor shortcuts' should give editors one-click links to common tasks. Where are shortcuts managed?

### Options
- Configuration > User interface > Shortcuts, with sets assignable per user via their profile (Shortcuts module)
- In the theme layer
- In cron settings
- Shortcut sets are hard-coded

### Correct Answers
- [0] Configuration > User interface > Shortcuts, with sets assignable per user via their profile (Shortcuts module)

### Explanation
The core Shortcut module provides customizable shortcut sets shown in the toolbar; users (with permission) pick their set on their account edit form.

### Question 272

**Domain:** Site Configuration

How do you add a second language (e.g. German) to the site for content translation?

### Options
- Configuration > Regional and language > Languages: 'Add language', then configure translation per content type
- Edit settings.php languages array
- Install a new theme
- Languages cannot be added after installation

### Correct Answers
- [0] Configuration > Regional and language > Languages: 'Add language', then configure translation per content type

### Explanation
Languages are added at /admin/config/regional/language. Detection (URL prefix, session, browser) is configured separately under Detection and selection.

### Question 273

**Domain:** Site Configuration

The German site should live under /de/ URLs. Which language detection method achieves this?

### Options
- URL (path prefix) detection with 'de' as the prefix for German
- Browser language detection only
- Session-based detection
- IP-based geolocation

### Correct Answers
- [0] URL (path prefix) detection with 'de' as the prefix for German

### Explanation
URL detection (path prefix or domain) is the standard for SEO-friendly multilingual sites, configured in Language detection and selection with reordered methods.

### Question 274

**Domain:** Site Configuration

What does the 'Re-index site' button on Search settings do?

### Options
- Marks all content for reindexing so cron rebuilds the search index from scratch
- Deletes the search module
- Rebuilds the theme registry
- Resets user passwords

### Correct Answers
- [0] Marks all content for reindexing so cron rebuilds the search index from scratch

### Explanation
Re-indexing queues content for fresh indexing over subsequent cron runs, used after changing indexing-related configuration.

### Question 275

**Domain:** Site Configuration

You need to check available updates for core and contributed modules. Where?

### Options
- Reports > Available updates (/admin/reports/updates), which checks drupal.org for new releases including security updates
- Reports > Recent log messages
- The Extend page footer
- The status report only shows PHP info

### Correct Answers
- [0] Reports > Available updates (/admin/reports/updates), which checks drupal.org for new releases including security updates

### Explanation
The Update Manager compares installed project versions against drupal.org release data (fetched via cron), flagging security and recommended updates.

### Question 276

**Domain:** Site Configuration

A 'No index' requirement for a staging site: what is the standard Drupal practice?

### Options
- Serve staging behind access restrictions (HTTP auth/IP) and/or robots meta via settings; Drupal doesn't offer a global no-index switch in core UI
- Enable the Statistics module
- Delete the robots.txt file
- Set cron to never run

### Correct Answers
- [0] Serve staging behind access restrictions (HTTP auth/IP) and/or robots meta via settings; Drupal doesn't offer a global no-index switch in core UI

### Explanation
Protecting staging relies on server-level auth plus robots control (core ships a robots.txt you can adapt). Knowing core boundaries guides correct deployment hygiene.

### Question 277

**Domain:** Site Configuration

Where do you manage which entity types and bundles are translatable?

### Options
- Configuration > Regional and language > Content language and translation
- In the theme settings
- In each node's path settings
- In cron settings

### Correct Answers
- [0] Configuration > Regional and language > Content language and translation

### Explanation
Content language settings (/admin/config/regional/content-language) toggle translation per entity type/bundle and per field, with default language and hide-untranslated options.

### Question 278

**Domain:** Site Configuration

An editor wants a preview of how an article looks before publishing. What supports this?

### Options
- The 'Preview' button on the node form (per-type 'Preview before submitting' setting: disabled/optional/required)
- The cron preview report
- The Devel generate tool
- Previewing is not possible in core

### Correct Answers
- [0] The 'Preview' button on the node form (per-type 'Preview before submitting' setting: disabled/optional/required)

### Explanation
Content types configure preview behavior; the Preview button renders the node with submitted values (optionally in full or teaser) without saving.

### Question 279

**Domain:** Site Configuration

How is the administration toolbar's orientation or behavior customized for accessibility?

### Options
- The core Toolbar is horizontal; contributed Admin Toolbar expands dropdowns, and the toolbar adapts responsively — orientation is not a core setting
- Vertical orientation is a core checkbox
- The toolbar can be recolored per user in core
- It is configured in image styles

### Correct Answers
- [0] The core Toolbar is horizontal; contributed Admin Toolbar expands dropdowns, and the toolbar adapts responsively — orientation is not a core setting

### Explanation
Core's Toolbar is fixed-position and responsive. The widely-used Admin Toolbar module adds hover dropdown menus, a common enhancement to know about.

### Question 280

**Domain:** Site Configuration

What is the purpose of the 'Development mode' toggles like disabling caches via settings.local.php/services.yml parameters (e.g. twig debug)?

### Options
- They aid debugging in development (template suggestions, no render cache) and must never be enabled in production for security/performance
- They speed up production sites
- They enable the Update Manager
- They translate the site automatically

### Correct Answers
- [0] They aid debugging in development (template suggestions, no render cache) and must never be enabled in production for security/performance

### Explanation
Twig debug and cache-disabling parameters in services files expose template names and skip caching — dev-only tools a site builder should recognize.
### Question 281

**Domain:** Site Configuration

You need multiple contact forms (Sales, Support) emailing different teams. What does the core Contact module provide?

### Options
- Contact form categories (now 'contact forms') at /admin/structure/contact, each with recipients, auto-reply, and a path
- One hard-coded form only
- Email routing requires editing settings.php
- Contact forms require the Webform module

### Correct Answers
- [0] Contact form categories (now 'contact forms') at /admin/structure/contact, each with recipients, auto-reply, and a path

### Explanation
Contact module supports multiple site-wide forms with per-form recipients, replies, and weights, exposed at /contact/{form} and optionally in menus.

### Question 282

**Domain:** Site Configuration

The site should send update notification emails when security releases are available. Where is this configured?

### Options
- Reports > Available updates > Settings: notification email addresses and check frequency
- In the user's profile only
- In the text formats
- Update emails cannot be sent

### Correct Answers
- [0] Reports > Available updates > Settings: notification email addresses and check frequency

### Explanation
Update Manager settings define daily/weekly checks and notification recipients, warning administrators about pending security releases.

### Question 283

**Domain:** Site Configuration

What does 'Rebuild node access permissions' do and when is it needed?

### Options
- It recalculates node access grants, needed after installing/changing modules that implement access control
- It resets all user passwords
- It rebuilds the menu router
- It is required after every cache clear

### Correct Answers
- [0] It recalculates node access grants, needed after installing/changing modules that implement access control

### Explanation
When access-control modules change, the node_access table must be rebuilt (prompted on the status report) so listings and pages enforce the new rules correctly.

### Question 284

**Domain:** Site Configuration

A site ships with English interface; the client adds German and wants core/admin strings translated. What core feature imports translations?

### Options
- Interface Translation: translations are downloaded from localize.drupal.org automatically or imported via .po files at /admin/config/regional/translate
- Machine translation via the Statistics module
- The Update Manager imports them
- Interface strings cannot be translated in core

### Correct Answers
- [0] Interface Translation: translations are downloaded from localize.drupal.org automatically or imported via .po files at /admin/config/regional/translate

### Explanation
Interface Translation syncs community translations for core and contributed projects, with manual .po import/export and per-string override translation in the UI.

### Question 285

**Domain:** Site Configuration

An intranet should force all authenticated users through a specific front dashboard after login. What core-building approaches achieve this? (Choose two)

### Options
- Set the default front page to a dashboard view/page in Basic site settings
- Use a login destination contributed module or custom code for per-role redirects
- Rename the user page to /dashboard manually in the database
- Login redirects are impossible in Drupal

### Correct Answers
- [0] Set the default front page to a dashboard view/page in Basic site settings
- [1] Use a login destination contributed module or custom code for per-role redirects

### Explanation
The front-page setting covers the general landing page; role-specific post-login redirects need contributed modules (Login Destination) or custom event subscribers.

### Question 286

**Domain:** Site Configuration

Where do you control how many items appear per page in RSS feeds generated by core (node feed)?

### Options
- Configuration > Web services > RSS publishing: items per feed and feed content (full text/teaser)
- In the theme settings
- In cron settings
- RSS feed length is fixed at 10

### Correct Answers
- [0] Configuration > Web services > RSS publishing: items per feed and feed content (full text/teaser)

### Explanation
RSS publishing settings control the main /rss.xml feed's item count and whether full text or descriptions are included.

### Question 287

**Domain:** Site Configuration

A security audit requires limiting failed login attempts. What does core provide?

### Options
- Built-in flood control limiting login attempts per user/IP (defaults like 5 failures triggering temporary blocks)
- Nothing; flood control needs a module
- Unlimited attempts are allowed by design
- CAPTCHA is in core

### Correct Answers
- [0] Built-in flood control limiting login attempts per user/IP (defaults like 5 failures triggering temporary blocks)

### Explanation
User module flood control throttles repeated failed logins (per account and IP) out of the box. CAPTCHA/honeypot for forms comes from contributed modules.

### Question 288

**Domain:** Site Configuration

Editors want a 'Save and publish' vs 'Save as unpublished' distinction on forms with moderation. How is this presented?

### Options
- The moderation state drop-down on the node form sidebar selects the target state when saving
- Separate buttons per state must be custom coded
- States are chosen in the URL
- Only user 1 can pick states

### Correct Answers
- [0] The moderation state drop-down on the node form sidebar selects the target state when saving

### Explanation
Content Moderation adds a 'Moderation state' selector to the editorial sidebar; saving moves the new revision into the chosen state per allowed transitions.

### Question 289

**Domain:** Site Configuration

What is stored under Configuration > Media > Media settings regarding oEmbed?

### Options
- Allowed oEmbed providers for remote video (YouTube/Vimeo by default, with an option to allow all providers) and related media behavior
- The list of uploaded images
- JPEG quality for videos
- Video transcoding profiles

### Correct Answers
- [0] Allowed oEmbed providers for remote video (YouTube/Vimeo by default, with an option to allow all providers) and related media behavior

### Explanation
Media settings govern remote video provider whitelisting and other media behaviors, keeping embeds restricted to trusted sources by default.

### Question 290

**Domain:** Site Configuration

A remote video renders on the media's own page at /media/123 which looks unstyled. What setting addresses standalone media pages?

### Options
- Media settings include a 'Standalone media URL' option controlling whether media entities get their own public pages
- The video must be re-uploaded
- Media cannot be viewed at all
- It requires a new theme

### Correct Answers
- [0] Media settings include a 'Standalone media URL' option controlling whether media entities get their own public pages

### Explanation
The standalone URL option (disabled by default in recent core) prevents media items from being indexed as thin pages; media is meant to be viewed in context.

### Question 291

**Domain:** Site Configuration

You need date display like '5 March 2026' instead of '03/05/2026' on events. Steps?

### Options
- Create a custom date format (e.g. j F Y) at Date and time formats, assign it to a format type, then pick that type on the date field's formatter
- Change the server's locale only
- Edit each event's date text manually
- Date formatting is not configurable

### Correct Answers
- [0] Create a custom date format (e.g. j F Y) at Date and time formats, assign it to a format type, then pick that type on the date field's formatter

### Explanation
Custom PHP-date-format strings become format types; date field formatters then select the type per view mode.

### Question 292

**Domain:** Site Configuration

The 'Content' admin page should let editors unpublish 20 articles at once. What provides bulk operations?

### Options
- The Views Bulk Operations-powered Content view at /admin/content with actions like 'Unpublish content'
- The Ban module
- A text format
- Bulk changes are impossible in core

### Correct Answers
- [0] The Views Bulk Operations-powered Content view at /admin/content with actions like 'Unpublish content'

### Explanation
The admin content view (Views Bulk Edit in core) offers checkboxes and an action dropdown for publish/unpublish/delete/promote and more, with confirmation.

### Question 293

**Domain:** Site Configuration

Where do you configure the default front page to a view path like /home?

### Options
- Basic site settings 'Default front page' field, entering /home
- In the view's image style
- In cron settings
- Front pages are random in core

### Correct Answers
- [0] Basic site settings 'Default front page' field, entering /home

### Explanation
Any valid internal path (node, view, custom route) can serve as the front page via site information settings.

### Question 294

**Domain:** Site Configuration

A DDoS-prone login page should get a CAPTCHA. What is the standard Drupal approach?

### Options
- Install a contributed CAPTCHA solution (e.g. CAPTCHA + reCAPTCHA modules); core has no CAPTCHA
- Enable the core CAPTCHA module
- CAPTCHAs are added in the theme CSS
- Use the Statistics module

### Correct Answers
- [0] Install a contributed CAPTCHA solution (e.g. CAPTCHA + reCAPTCHA modules); core has no CAPTCHA

### Explanation
Core lacks CAPTCHA; the CAPTCHA module ecosystem (with reCAPTCHA, hCaptcha, image captcha) plus Honeypot are the standard contributed defenses.

### Question 295

**Domain:** Site Configuration

Which page lets you review and fix problems like 'Public files directory not fully protected'?

### Options
- Status report (/admin/reports/status), which lists environment and configuration issues with guidance
- Recent log messages
- The Extend page
- The cron page

### Correct Answers
- [0] Status report (/admin/reports/status), which lists environment and configuration issues with guidance

### Explanation
The status report surfaces security and health checks (file protections, trusted hosts, updates, PHP limits) and links to fixes — a key configuration dashboard.

### Question 296

**Domain:** Site Configuration

A client wants their logo and favicon changed without editing theme files. What supports this in core themes like Olivero?

### Options
- Appearance > Settings for the theme: toggle/custom logo and shortcut icon uploads
- Editing the database directly
- Only via FTP to the theme folder
- Logos require SVG code changes

### Correct Answers
- [0] Appearance > Settings for the theme: toggle/custom logo and shortcut icon uploads

### Explanation
Theme settings pages allow uploading custom logo/favicon and toggling theme features (site name, slogan, user pictures) per theme.

### Question 297

**Domain:** Site Configuration

What is the role of the 'Color' core module?

### Options
- It allows recoloring compatible themes' palettes via the UI (Olivero supports color sets)
- It colorizes log messages
- It manages image styles
- It themes the database

### Correct Answers
- [0] It allows recoloring compatible themes' palettes via the UI (Olivero supports color sets)

### Explanation
The Color module exposes color pickers for themes declaring color support, letting site builders adjust base/accent colors without CSS edits.

### Question 298

**Domain:** Site Configuration

The team wants separate config for dev (devel enabled) vs prod. Which practices apply? (Choose two)

### Options
- Use config splits/overrides (contributed Config Split) or settings.php overrides per environment
- Keep the sync directory in version control and import per environment
- Manually toggle modules after each deploy by hand
- Use separate databases with no shared config

### Correct Answers
- [0] Use config splits/overrides (contributed Config Split) or settings.php overrides per environment
- [1] Keep the sync directory in version control and import per environment

### Explanation
Environment-specific config is handled via Config Split (contributed) or $config overrides in settings.php; the shared sync directory stays canonical in git.

### Question 299

**Domain:** Site Configuration

An editor's account was blocked by flood control after repeated failed logins. How can an admin help?

### Options
- Edit the user account (People page) to unblock/reset, or wait for the flood window to expire; flood entries clear over time
- Delete and recreate the account always
- Flood blocks are permanent
- Reinstall the user module

### Correct Answers
- [0] Edit the user account (People page) to unblock/reset, or wait for the flood window to expire; flood entries clear over time

### Explanation
Admins can edit the account (status, password reset) to restore access; flood records expire automatically after the threshold window.

### Question 300

**Domain:** Site Configuration

Where is the 'Administrator' role's special power configured?

### Options
- Account settings let you designate a role as 'administrator', which automatically receives all permissions
- Administrators must check every permission manually
- Admin power comes from the theme
- Only user 1 can ever be admin

### Correct Answers
- [0] Account settings let you designate a role as 'administrator', which automatically receives all permissions

### Explanation
The 'administrator role' setting (on Account settings) grants a role all current and future permissions automatically, simplifying admin role management.

### Question 301

**Domain:** Site Configuration

A site must serve uploaded files via a CDN domain. What is the typical Drupal approach?

### Options
- Configure the CDN/origin at the infrastructure level or via contributed CDN integration altering file URLs; core itself does not manage CDN settings
- Rename the files directory to /cdn
- Enable the core CDN module
- It happens automatically on all sites

### Correct Answers
- [0] Configure the CDN/origin at the infrastructure level or via contributed CDN integration altering file URLs; core itself does not manage CDN settings

### Explanation
File URL rewriting for CDNs is done by reverse proxies or contributed modules (CDN). Core keeps files local with public/private delivery only.

### Question 302

**Domain:** Site Configuration

How do you check which modules a given view depends on before exporting it singly?

### Options
- The view's configuration export lists dependencies (module/theme/config) in its YAML 'dependencies' section
- Dependencies are hidden from users
- Ask the database directly
- Views never have dependencies

### Correct Answers
- [0] The view's configuration export lists dependencies (module/theme/config) in its YAML 'dependencies' section

### Explanation
Config entities declare dependencies; single-item exports show them, and missing dependencies block import — ensuring portable configuration packages.

### Question 303

**Domain:** Site Configuration

The marketing team needs forms with conditional fields, multi-page wizards, and email notifications. What is the go-to contributed solution?

### Options
- The Webform module
- The core Contact module
- The Comment module
- The Shortcut module

### Correct Answers
- [0] The Webform module

### Explanation
Webform is the standard contributed form builder: drag-and-drop elements, conditionals, multi-step pages, handlers for emails, and submission management.

### Question 304

**Domain:** Site Configuration

A privacy audit requires that user data export/erasure requests be handled. What does core provide toward GDPR-like workflows?

### Options
- Core provides account cancellation options (block/delete content choices) and a user data model; full GDPR tooling uses contributed modules
- Core auto-deletes all data nightly
- Core emails data to regulators automatically
- Nothing; Drupal cannot cancel accounts

### Correct Answers
- [0] Core provides account cancellation options (block/delete content choices) and a user data model; full GDPR tooling uses contributed modules

### Explanation
Account settings define cancellation methods (disable account, delete account and content variants). Comprehensive GDPR compliance relies on contributed modules and policy.

### Question 305

**Domain:** Site Configuration

A client wants to stop users from registering entirely (intranet). Setting?

### Options
- Account settings: 'Who can register accounts?' → 'Administrators only'
- Disable the user module
- Hide the login block
- Delete the register route

### Correct Answers
- [0] Account settings: 'Who can register accounts?' → 'Administrators only'

### Explanation
Registration modes restrict account creation to admins, common for intranets where accounts are provisioned centrally.

### Question 306

**Domain:** Site Configuration

An 'Access denied' (403) page should show a friendly login prompt node. How?

### Options
- Set 'Default 403 (access denied) page' in Basic site settings to the node's path
- Edit .htaccess
- 403 pages cannot be customized
- Use the cron settings

### Correct Answers
- [0] Set 'Default 403 (access denied) page' in Basic site settings to the node's path

### Explanation
Like 404s, 403 defaults accept an internal path, enabling branded access-denied experiences with login links.

### Question 307

**Domain:** Site Configuration

What does enabling the 'Database Logging' module's page at /admin/reports/dblog provide over server logs?

### Options
- An in-UI, filterable event log (severity, type, user, message) without server access
- Raw access logs with IPs only
- Query performance profiling
- PHP opcode statistics

### Correct Answers
- [0] An in-UI, filterable event log (severity, type, user, message) without server access

### Explanation
Dblog stores watchdog entries in the database with filters for type/severity, letting site builders audit events (logins, content changes, errors) in the UI.

### Question 308

**Domain:** Site Configuration

A view's path conflicts with an existing alias; the view page shows 404. Likely causes? (Choose two)

### Options
- The path is taken by a node alias or another route taking precedence
- Caches were not rebuilt after creating the view
- The view has too many fields
- Views cannot have paths

### Correct Answers
- [0] The path is taken by a node alias or another route taking precedence
- [1] Caches were not rebuilt after creating the view

### Explanation
Route conflicts (aliases shadowing view paths) and stale route caches are classic causes; resolving the alias conflict and rebuilding caches restores the page.

### Question 309

**Domain:** Site Configuration

How can an admin quickly impersonate an editor to reproduce a reported problem?

### Options
- Use the contributed Masquerade module (or drush uli) to log in as that user; core has no impersonation UI
- Ask the editor for their password
- Delete and recreate the account
- Use the Update Manager

### Correct Answers
- [0] Use the contributed Masquerade module (or drush uli) to log in as that user; core has no impersonation UI

### Explanation
Masquerade (contributed) lets privileged admins switch identities safely with audit trails — the standard support pattern to know for the exam.

### Question 310

**Domain:** Site Configuration

The site emails are landing in spam. What configuration areas should be checked? (Choose two)

### Options
- The site's email address in Basic site settings (proper domain)
- Mail infrastructure (SMTP module/contributed, SPF/DKIM on the domain) since core sends via PHP mail by default
- The text format of emails
- The cron color settings

### Correct Answers
- [0] The site's email address in Basic site settings (proper domain)
- [1] Mail infrastructure (SMTP module/contributed, SPF/DKIM on the domain) since core sends via PHP mail by default

### Explanation
Core uses PHP's mail(); deliverability depends on sender domain and SMTP/S SPF/DKIM. Contributed SMTP module routes mail through authenticated providers.

### Question 311

**Domain:** Site Configuration

You must ensure new sites from a template always ship the same content types and views. Best mechanism?

### Options
- A custom installation profile or recipe (D10.3+/11 Recipes) packaging default configuration
- Copy-pasting databases manually
- Rebuilding by hand each time
- Using the Update Manager

### Correct Answers
- [0] A custom installation profile or recipe (D10.3+/11 Recipes) packaging default configuration

### Explanation
Installation profiles and Drupal Recipes (introduced in modern core) package modules/themes/config so new sites start from a repeatable, versioned baseline.

### Question 312

**Domain:** Site Configuration

What is a Drupal Recipe?

### Options
- A composable package of modules and default configuration applied to an existing site (and at install) to add features, introduced in Drupal 10.3+/11 core
- A content type for cooking sites
- A server provisioning script
- A paid Acquia service

### Correct Answers
- [0] A composable package of modules and default configuration applied to an existing site (and at install) to add features, introduced in Drupal 10.3+/11 core

### Explanation
Recipes (core initiative) let site builders apply feature bundles (e.g. 'SEO toolkit') without custom profiles, a notable Drupal 11-era configuration capability.

### Question 313

**Domain:** Site Configuration

Where do you see and purge queued items (e.g. unprocessed search indexing or webhook queues)?

### Options
- Core has limited queue UI (search progress on search/status pages); general queue inspection uses drush or contributed Queue UI
- The Block layout page
- The theme settings
- The Extend page footer

### Correct Answers
- [0] Core has limited queue UI (search progress on search/status pages); general queue inspection uses drush or contributed Queue UI

### Explanation
Drupal's Queue API processes items on cron; visibility is mostly via drush queue commands or contributed tooling — a boundary of core admin UI to know.

### Question 314

**Domain:** Site Configuration

The site must comply with 'only HTTPS' access. Where is this typically enforced for a Drupal site?

### Options
- At the web server/load balancer level (redirects, HSTS), with Drupal respecting the proxy settings in settings.php
- In the text format settings
- In the image toolkit page
- Drupal forces HTTPS via a core UI checkbox

### Correct Answers
- [0] At the web server/load balancer level (redirects, HSTS), with Drupal respecting the proxy settings in settings.php

### Explanation
TLS termination and HTTPS redirects are infrastructure concerns; Drupal needs reverse proxy settings (trusted proxies) to generate correct URLs behind them.

### Question 315

**Domain:** Site Configuration

A 'Page not found' spike after launch: which core tools help diagnose and fix? (Choose two)

### Options
- The 'Top page not found errors' report to identify broken paths
- The Redirect module (contributed) to add 301s from old to new paths
- The Color module
- The Tour module

### Correct Answers
- [0] The 'Top page not found errors' report to identify broken paths
- [1] The Redirect module (contributed) to add 301s from old to new paths

### Explanation
The 404 report aggregates missing paths; pairing it with redirects fixes legacy links, protecting SEO and user experience after migrations.

### Question 316

**Domain:** Site Configuration

How do you limit the number of values shown per day in a multi-day date field's display (e.g. show only start and end)?

### Options
- Use the date range formatter options (e.g. custom format showing start–end) in Manage display
- Delete extra values
- Use a text format
- Date fields cannot be formatted

### Correct Answers
- [0] Use the date range formatter options (e.g. custom format showing start–end) in Manage display

### Explanation
Date formatters offer display styles (date and time, time ago, custom) and range joining, configured per view mode without code.

### Question 317

**Domain:** Site Configuration

A privacy rule: user profiles must not be publicly viewable. What core controls exist?

### Options
- The 'View user information' permission governs access to profiles; revoke it from anonymous roles
- Profiles are always public
- Profiles are hidden by deleting users
- Only via robots.txt

### Correct Answers
- [0] The 'View user information' permission governs access to profiles; revoke it from anonymous roles

### Explanation
User profile access is permission-based ('View user information'), so profile visibility is fully controllable per role.

### Question 318

**Domain:** Site Configuration

You want log retention limited to 1 week to keep the database small. Where?

### Options
- Database Logging settings: 'Discard log messages after' (e.g. 1 week) at /admin/config/development/logging
- In cron color settings
- Logs are kept forever, unchangeable
- In the theme layer

### Correct Answers
- [0] Database Logging settings: 'Discard log messages after' (e.g. 1 week) at /admin/config/development/logging

### Explanation
Dblog retention (1 hour to forever) is configurable; cron purges old entries to bound table growth.

### Question 319

**Domain:** Site Configuration

A translated site shows English content mixed into German listings. What multilingual display setting helps?

### Options
- 'Hide content that is not available in the current language' options / translation filtering in views (language filter 'Interface text language selected for page')
- Disable all languages
- Rebuild image styles
- Use a different text format

### Correct Answers
- [0] 'Hide content that is not available in the current language' options / translation filtering in views (language filter 'Interface text language selected for page')

### Explanation
Views language filters and content language settings control fallback behavior, ensuring listings match the active language or defined fallbacks.

### Question 320

**Domain:** Site Configuration

Where do you define which text format is pre-selected by default for editors on formatted fields?

### Options
- Text formats are ordered by weight at /admin/config/content/formats; the highest-weighted (top) permitted format is the default
- In each user's timezone setting
- In the theme
- Defaults are random per node

### Correct Answers
- [0] Text formats are ordered by weight at /admin/config/content/formats; the highest-weighted (top) permitted format is the default

### Explanation
Format ordering determines the default per user (the first format in the list they may use), and each formatted field can also restrict to a single format.

## Contributed Module and Theme Management

### Question 321

**Domain:** Contributed Module and Theme Management

You need a module that auto-generates URL aliases. Where is the canonical place to find and evaluate it?

### Options
- The project page on drupal.org (e.g. drupal.org/project/pathauto), with usage, releases, and issue information
- A random code hosting site with no metrics
- The theme layer
- The cron report

### Correct Answers
- [0] The project page on drupal.org (e.g. drupal.org/project/pathauto), with usage, releases, and issue information

### Explanation
Drupal.org project pages are the authoritative source for contributed modules, showing install counts, maintenance status, release history, and documentation.

### Question 322

**Domain:** Contributed Module and Theme Management

Which factors indicate a healthy, well-maintained contributed module? (Choose two)

### Options
- High usage counts and recent commits with active maintainers
- Covered by the security advisory policy (stable releases)
- A project page last updated 8 years ago with 12 users
- No documentation and hundreds of open critical bugs

### Correct Answers
- [0] High usage counts and recent commits with active maintainers
- [1] Covered by the security advisory policy (stable releases)

### Explanation
Evaluation criteria include usage statistics, maintenance responsiveness (issue queue, commits), release stability, and whether the project is covered by Drupal's security team policy.

### Question 323

**Domain:** Contributed Module and Theme Management

What does it mean when a contributed project is 'covered by the security advisory policy'?

### Options
- The Drupal Security Team will issue coordinated security advisories (SAs) for vulnerabilities in its stable releases
- The module is guaranteed bug-free
- The module costs money to use
- Security issues are published publicly without fixes

### Correct Answers
- [0] The Drupal Security Team will issue coordinated security advisories (SAs) for vulnerabilities in its stable releases

### Explanation
Projects with stable (non dev/alpha/beta/RC) releases opt into security coverage; vulnerabilities get SAs on security release windows, so covered projects are safer choices.

### Question 324

**Domain:** Contributed Module and Theme Management

Why are dev/alpha/beta releases of contributed modules riskier for production sites?

### Options
- They are not covered by security advisories and may have unstable APIs or unresolved issues
- They install faster, which is suspicious
- They cannot be uninstalled ever
- They disable core updates automatically

### Correct Answers
- [0] They are not covered by security advisories and may have unstable APIs or unresolved issues

### Explanation
Only stable releases receive security coverage. Pre-release versions may change schema/hooks between versions, complicating upgrades — prefer stable releases for production.

### Question 325

**Domain:** Contributed Module and Theme Management

What is the correct way to add the Pathauto module to a Drupal 11 codebase?

### Options
- composer require drupal/pathauto, then enable it on the Extend page or via drush
- Download a zip and extract to /modules manually
- Copy it from another site's database
- Enable it in the theme settings

### Correct Answers
- [0] composer require drupal/pathauto, then enable it on the Extend page or via drush

### Explanation
Composer manages code and dependencies (Pathauto pulls in Token as a dependency automatically). Manual downloads bypass dependency resolution and are discouraged.

### Question 326

**Domain:** Contributed Module and Theme Management

The Extend page shows 'Some required modules must be enabled' when enabling a module. What does this mean?

### Options
- The module declares dependencies; Drupal will enable those dependency modules as well when you confirm
- The module is incompatible with your PHP version only
- The module must be purchased first
- The module conflicts with the theme

### Correct Answers
- [0] The module declares dependencies; Drupal will enable those dependency modules as well when you confirm

### Explanation
Module dependencies (in .info.yml) are resolved at enable time; Drupal prompts to also enable required modules (e.g. Pathauto requiring Token and Path).

### Question 327

**Domain:** Contributed Module and Theme Management

How do you update a contributed module to a newer version in a Composer-managed site?

### Options
- composer update drupal/modulename (or composer require drupal/modulename:^2.0 for major), then run database updates
- Replace the module folder via FTP with any version
- Uninstall Drupal first
- Updates happen automatically every night in core

### Correct Answers
- [0] composer update drupal/modulename (or composer require drupal/modulename:^2.0 for major), then run database updates

### Explanation
Composer fetches new code per version constraints; pending update hooks then run via /update.php or drush updatedb. Core does not auto-update module code.

### Question 328

**Domain:** Contributed Module and Theme Management

After updating a module's code, the status report says 'There are database updates pending'. What should you do?

### Options
- Run the database updates at /update.php (or drush updatedb) after backing up
- Ignore it indefinitely
- Uninstall the module immediately
- Reinstall Drupal core

### Correct Answers
- [0] Run the database updates at /update.php (or drush updatedb) after backing up

### Explanation
Update hooks migrate schema/data between module versions. Running them (with a backup and maintenance mode) completes the update safely.

### Question 329

**Domain:** Contributed Module and Theme Management

What is the difference between uninstalling a module and removing its code with Composer?

### Options
- Uninstall removes the module's data/config from the database; composer remove deletes the code from the codebase afterward
- They are the same action
- Composer remove also deletes the module's data
- Uninstall deletes the code files

### Correct Answers
- [0] Uninstall removes the module's data/config from the database; composer remove deletes the code from the codebase afterward

### Explanation
Proper removal order: uninstall in the UI/drush (data cleanup), then composer remove (code cleanup). Reversing the order can leave orphaned data or break uninstalls.

### Question 330

**Domain:** Contributed Module and Theme Management

Where can you see which installed contributed modules have pending security updates?

### Options
- Reports > Available updates, which flags security releases in red
- The Block layout page
- The user profile
- The text format settings

### Correct Answers
- [0] Reports > Available updates, which flags security releases in red

### Explanation
The Update Manager distinguishes security updates from feature updates and emails configured recipients, prompting timely action on SAs.

### Question 331

**Domain:** Contributed Module and Theme Management

A security advisory (SA-CONTRIB-2026-XXX) is published for a module you run. What are appropriate responses? (Choose two)

### Options
- Update the module to the fixed release promptly, following the SA
- Review the advisory for mitigation steps and check the site's exposure
- Uninstall Drupal core
- Ignore it; contrib SAs are optional by nature

### Correct Answers
- [0] Update the module to the fixed release promptly, following the SA
- [1] Review the advisory for mitigation steps and check the site's exposure

### Explanation
Security releases should be applied quickly (coordinated SA windows help planning). Reviewing the SA clarifies severity, affected versions, and workarounds.

### Question 332

**Domain:** Contributed Module and Theme Management

What is the purpose of the Token module, a common dependency?

### Options
- It provides a browsable UI and extended API for tokens like [node:title] used by Pathauto, Metatag, and others
- It handles payment tokens for commerce
- It generates API keys for REST
- It replaces the user login system

### Correct Answers
- [0] It provides a browsable UI and extended API for tokens like [node:title] used by Pathauto, Metatag, and others

### Explanation
Token adds a token browser and fills gaps in core token support. Many site-building modules require it, which is why it appears as a dependency so often.

### Question 333

**Domain:** Contributed Module and Theme Management

Which module provides meta tag management (title, description, Open Graph) for SEO?

### Options
- Metatag
- Pathauto
- Honeypot
- Devel

### Correct Answers
- [0] Metatag

### Explanation
Metatag manages meta tags globally, per content type, and per entity with token-based defaults — the standard SEO module for Drupal sites.

### Question 334

**Domain:** Contributed Module and Theme Management

You need spam protection on contact and comment forms without annoying puzzles. Which contributed module uses a hidden-field technique?

### Options
- Honeypot
- CAPTCHA (image puzzles)
- Pathauto
- Admin Toolbar

### Correct Answers
- [0] Honeypot

### Explanation
Honeypot adds a hidden field and time checks that bots fill/fail but humans never see, providing unobtrusive spam protection. CAPTCHA is the puzzle-based alternative.

### Question 335

**Domain:** Contributed Module and Theme Management

Which module enhances the admin toolbar with hover drop-down menus for faster navigation?

### Options
- Admin Toolbar
- Toolbar (core alone)
- Shortcut
- Contextual

### Correct Answers
- [0] Admin Toolbar

### Explanation
Admin Toolbar transforms the core toolbar into a dropdown menu system reaching deep admin pages — one of the most-installed contrib modules.

### Question 336

**Domain:** Contributed Module and Theme Management

What is the Devel module used for?

### Options
- Development utilities: generating dummy content/users, inspecting variables, and debugging during development
- Production SEO optimization
- Caching pages for anonymous users
- Managing taxonomy hierarchies

### Correct Answers
- [0] Development utilities: generating dummy content/users, inspecting variables, and debugging during development

### Explanation
Devel (with Devel Generate) creates test content and provides dpm()/kint debugging. It should be uninstalled or disabled on production.

### Question 337

**Domain:** Contributed Module and Theme Management

Which statement about installing a contributed theme is correct?

### Options
- Require it via Composer, then enable and set it as default (or admin theme) on the Appearance page
- Themes are installed by uploading CSS to the files directory
- Themes require a new database
- Only core themes can be used

### Correct Answers
- [0] Require it via Composer, then enable and set it as default (or admin theme) on the Appearance page

### Explanation
Themes install like modules via Composer (drupal/theme_name), are enabled at /admin/appearance, and can be set as default or administration theme.

### Question 338

**Domain:** Contributed Module and Theme Management

A contributed module's page shows 'This project is not covered by Drupal's security advisory policy'. What should you consider?

### Options
- Evaluate risk carefully: vulnerabilities won't receive coordinated SAs; audit usage, code quality, and alternatives before adopting
- It means the module is more secure than covered ones
- It means the module is free of charge
- It means the module auto-updates itself

### Correct Answers
- [0] Evaluate risk carefully: vulnerabilities won't receive coordinated SAs; audit usage, code quality, and alternatives before adopting

### Explanation
Uncovered projects shift security responsibility to you. For sensitive sites, prefer covered alternatives or budget for auditing and monitoring.

### Question 339

**Domain:** Contributed Module and Theme Management

What do version numbers like 2.1.0 vs 8.x-1.4 mean for Drupal contrib in the semantic versioning era?

### Options
- Modern contrib uses semantic versions (major.minor.patch); legacy releases used core-compatibility prefixes like 8.x-
- 8.x- versions are newer than 2.x versions always
- Version numbers are random
- Semantic versions are only for themes

### Correct Answers
- [0] Modern contrib uses semantic versions (major.minor.patch); legacy releases used core-compatibility prefixes like 8.x-

### Explanation
Since Drupal 8/9, contrib moved to semantic versioning (e.g. 2.1.0) with core compatibility declared in info files, replacing the old core-prefixed scheme.

### Question 340

**Domain:** Contributed Module and Theme Management

How can you check a module's compatibility with Drupal 11 before installing?

### Options
- The project page's release table shows core compatibility per release (e.g. ^10 || ^11) and the module's .info.yml declares it
- Compatibility is guesswork
- All modules work on all versions
- Ask in the issue queue only, releases don't declare it

### Correct Answers
- [0] The project page's release table shows core compatibility per release (e.g. ^10 || ^11) and the module's .info.yml declares it

### Explanation
Releases declare supported core versions; Composer also enforces core_version_requirement during require, preventing incompatible installs.

### Question 341

**Domain:** Contributed Module and Theme Management

A bug in a contrib module was fixed in the issue queue but not yet released. How can you apply the patch safely with Composer?

### Options
- Use cweagans/composer-patches to apply the patch from the issue, pinned in composer.json
- Edit the module files directly in /modules (they will be overwritten later)
- Patch the database instead
- Wait years without options

### Correct Answers
- [0] Use cweagans/composer-patches to apply the patch from the issue, pinned in composer.json

### Explanation
Composer patches apply reviewed fixes reproducibly across environments and survive updates, unlike manual file edits which are lost on update.

### Question 342

**Domain:** Contributed Module and Theme Management

Which module would you evaluate for advanced search with facets and Solr integration?

### Options
- Search API (with Search API Solr and Facets)
- The core Search module covers Solr natively
- Pathauto
- Token

### Correct Answers
- [0] Search API (with Search API Solr and Facets)

### Explanation
Search API abstracts indexing backends (database or Solr) and pairs with Facets for filtered search experiences — the standard advanced search stack.

### Question 343

**Domain:** Contributed Module and Theme Management

What is the recommended way to export your database for backup/migration on a schedule?

### Options
- A module like Backup and Migrate, or server-level backups/drush sql-dump in deployment automation
- The core cron does backups automatically
- Copying the files directory is a full backup
- Drupal cannot be backed up

### Correct Answers
- [0] A module like Backup and Migrate, or server-level backups/drush sql-dump in deployment automation

### Explanation
Core has no backup system; Backup and Migrate (contrib) or infrastructure backups (drush sql-dump, hosting snapshots) cover database and file backups.

### Question 344

**Domain:** Contributed Module and Theme Management

Before enabling a newly required module on production, what is a safe workflow?

### Options
- Test on a staging environment, back up the database, enable the module, run updates, and verify functionality
- Enable directly on production during peak traffic
- Enable it and immediately delete its folder
- Skip testing since contrib is always safe

### Correct Answers
- [0] Test on a staging environment, back up the database, enable the module, run updates, and verify functionality

### Explanation
Change management basics: staging validation, backups, maintenance windows, and verification reduce risk when adding contributed code.

### Question 345

**Domain:** Contributed Module and Theme Management

What is the Project Browser initiative in modern Drupal?

### Options
- A core initiative adding in-UI discovery and installation of contributed modules (like an app store), available in newer Drupal versions
- A browser developed by the Drupal association
- A paid marketplace for modules
- A tool for browsing the issue queue only

### Correct Answers
- [0] A core initiative adding in-UI discovery and installation of contributed modules (like an app store), available in newer Drupal versions

### Explanation
Project Browser lets site builders find, evaluate (with usage/maintenance data), and install contrib from within the admin UI — a Drupal 11-era addition.

### Question 346

**Domain:** Contributed Module and Theme Management

You found two modules solving the same problem. What should guide your choice? (Choose two)

### Options
- Maintenance activity, usage, security coverage, and release stability
- Compatibility with your Drupal core version and other installed modules
- Whichever has the catchier name
- Whichever was uploaded first historically

### Correct Answers
- [0] Maintenance activity, usage, security coverage, and release stability
- [1] Compatibility with your Drupal core version and other installed modules

### Explanation
Objective evaluation beats novelty: active maintenance, broad usage, security coverage, stable releases, and verified compatibility predict success.

### Question 347

**Domain:** Contributed Module and Theme Management

A contributed module conflicts with another by altering the same form. What are your options? (Choose two)

### Options
- Check both issue queues for known conflicts and patches
- Adjust module weight/configuration, or write a small custom glue module; sometimes choose an alternative module
- Uninstall Drupal core
- Conflicts are impossible between contrib modules

### Correct Answers
- [0] Check both issue queues for known conflicts and patches
- [1] Adjust module weight/configuration, or write a small custom glue module; sometimes choose an alternative module

### Explanation
Conflicts are usually documented in issue queues with workarounds or patches; module weights and targeted custom code resolve ordering issues, or an alternative may win.

### Question 348

**Domain:** Contributed Module and Theme Management

Which module would you use to schedule nodes to publish/unpublish at set times?

### Options
- Scheduler
- Pathauto
- Token
- Color

### Correct Answers
- [0] Scheduler

### Explanation
Scheduler adds publish-on/unpublish-on datetime fields to content types and processes them on cron — the standard scheduling solution.

### Question 349

**Domain:** Contributed Module and Theme Management

What does the 'core_version_requirement' key in a module's .info.yml declare?

### Options
- The Drupal core versions the module is compatible with (e.g. ^10 || ^11)
- The PHP version of the server
- The module's own release number
- The required theme version

### Correct Answers
- [0] The Drupal core versions the module is compatible with (e.g. ^10 || ^11)

### Explanation
core_version_requirement gates installation per core version, enforced by Composer and the Extend page to prevent incompatible installs.

### Question 350

**Domain:** Contributed Module and Theme Management

A client asks for XML sitemaps for search engines. Which module is standard?

### Options
- Simple XML Sitemap (simple_sitemap)
- Metatag handles sitemaps natively
- The core Statistics module
- Pathauto generates XML

### Correct Answers
- [0] Simple XML Sitemap (simple_sitemap)

### Explanation
Simple XML Sitemap generates configurable sitemaps (per entity type, with inclusion/exclusion) regenerated via cron — distinct from Metatag's meta tag role.

### Question 351

**Domain:** Contributed Module and Theme Management

You need to redirect old legacy URLs to new Drupal paths in bulk. Which module handles this?

### Options
- Redirect (with CSV import capabilities via its UI or drush)
- Pathauto
- Token
- Ban

### Correct Answers
- [0] Redirect (with CSV import capabilities via its UI or drush)

### Explanation
Redirect manages 301/302 redirects, auto-creates them on alias changes, and monitors 404s to suggest redirects — the canonical migration/SEO tool.

### Question 352

**Domain:** Contributed Module and Theme Management

What is the role of the drupal.org issue queue for a module?

### Options
- It tracks bugs, feature requests, and patches for the project; reviewing it reveals health and known problems
- It is a chat room for social discussion
- It hosts the module's marketing videos
- It lists users' passwords

### Correct Answers
- [0] It tracks bugs, feature requests, and patches for the project; reviewing it reveals health and known problems

### Explanation
Issue queues show open critical bugs, maintainer responsiveness, and available patches — key due-diligence before adopting a module.

### Question 353

**Domain:** Contributed Module and Theme Management

Which contributed module provides drag-and-drop layout components (hero, cards, accordions) for editors beyond Layout Builder basics?

### Options
- Paragraphs (or Layout Paragraphs), providing reusable paragraph types
- The core Block module alone
- Syslog
- Ban

### Correct Answers
- [0] Paragraphs (or Layout Paragraphs), providing reusable paragraph types

### Explanation
Paragraphs is the most popular solution for editor-composed pages; Layout Paragraphs integrates it with Layout Builder for visual drag-and-drop.

### Question 354

**Domain:** Contributed Module and Theme Management

A module you rely on is marked 'Maintenance fixes only' / 'Seeking co-maintainers'. What does this signal?

### Options
- Reduced maintainer capacity; plan for potential stagnation, help maintain, or evaluate alternatives
- The module is deprecated immediately
- The module now costs money
- Nothing; it is a routine label

### Correct Answers
- [0] Reduced maintainer capacity; plan for potential stagnation, help maintain, or evaluate alternatives

### Explanation
Maintenance status flags indicate project health. 'Seeking co-maintainers' warns of risk for business-critical dependencies and invites community contribution.

### Question 355

**Domain:** Contributed Module and Theme Management

Which module adds a 'Login once, edit everywhere' style workflow for editors via frontend inline editing of content?

### Options
- Quick Edit was the core inline editing feature (now removed from core in D11; contributed alternatives/Experiences such as Experience Builder are emerging)
- The Ban module
- Syslog
- Core never had any inline editing

### Correct Answers
- [0] Quick Edit was the core inline editing feature (now removed from core in D11; contributed alternatives/Experiences such as Experience Builder are emerging)

### Explanation
Quick Edit allowed in-place editing but was deprecated and removed from core; knowing feature lifecycle changes between major versions matters for upgrades.

### Question 356

**Domain:** Contributed Module and Theme Management

Where should custom and contributed modules live in a Drupal 11 codebase?

### Options
- /modules/custom and /modules/contrib (with Composer managing contrib by default)
- In the /core directory alongside core
- In the database
- In /themes regardless of type

### Correct Answers
- [0] /modules/custom and /modules/contrib (with Composer managing contrib by default)

### Explanation
The conventional split keeps community code (contrib, Composer-managed) separate from project-specific code (custom), easing updates and reviews.

### Question 357

**Domain:** Contributed Module and Theme Management

A contributed module requires a PHP library (e.g. a PDF generator). How is this handled in Drupal 11?

### Options
- Composer dependencies: the module's composer.json declares the library, and composer require installs both
- Upload the library to the files directory manually
- Libraries are forbidden
- Install the library as a theme

### Correct Answers
- [0] Composer dependencies: the module's composer.json declares the library, and composer require installs both

### Explanation
Composer resolves PHP library dependencies (vendor/) automatically — a key reason Composer-based workflows replaced the old Libraries module era.

### Question 358

**Domain:** Contributed Module and Theme Management

What does 'drush en module_name -y' do?

### Options
- Enables the module (and dependencies) from the command line without prompts
- Deletes the module
- Creates a new module scaffold
- Flushes image styles

### Correct Answers
- [0] Enables the module (and dependencies) from the command line without prompts

### Explanation
Drush mirrors UI operations for automation: en (enable), pm:uninstall, updb (updates), cr (cache rebuild), cim (config import) — staples of deployment scripts.

### Question 359

**Domain:** Contributed Module and Theme Management

You want to track and revert changes to configuration made via the UI over time. Best practice?

### Options
- Export config regularly to the sync directory and commit to git, providing history and rollback of configuration
- Configuration changes are untracked by design
- Use the Statistics module for config history
- Copy settings.php daily only

### Correct Answers
- [0] Export config regularly to the sync directory and commit to git, providing history and rollback of configuration

### Explanation
Version-controlling the sync directory gives diffs and revert capability for configuration changes, complementing the UI import workflow.

### Question 360

**Domain:** Contributed Module and Theme Management

Which core modules shipped but are marked 'experimental' and what does that mean?

### Options
- Experimental core modules (e.g. past: Layout Builder pre-stable, Workspaces) ship with core but may change APIs between minor releases; use with caution
- Experimental means paid early access
- They are removed at the next cron run
- Experimental modules cannot be disabled

### Correct Answers
- [0] Experimental core modules (e.g. past: Layout Builder pre-stable, Workspaces) ship with core but may change APIs between minor releases; use with caution

### Explanation
Core marks maturing modules experimental (alpha/beta stability) — fine for evaluation, but production use needs awareness of potential changes.

### Question 361

**Domain:** Contributed Module and Theme Management

Your theme's regions don't match the design. What are the options? (Choose two)

### Options
- Choose a different contributed/base theme closer to the design
- Create a custom sub-theme declaring the needed regions in .info.yml and templates
- Regions can be added in the Block layout UI per page
- Regions are fixed by Drupal core globally

### Correct Answers
- [0] Choose a different contributed/base theme closer to the design
- [1] Create a custom sub-theme declaring the needed regions in .info.yml and templates

### Explanation
Regions are theme-defined. Selecting an appropriate theme or sub-theming with custom region declarations aligns layout with design requirements.

### Question 362

**Domain:** Contributed Module and Theme Management

A security window (Wednesday contrib release day) is coming. What should a site team do?

### Options
- Plan to review SAs and apply relevant security updates promptly, ideally on staging first
- Nothing; contrib windows are informational only
- Take the site offline permanently
- Uninstall all modules preemptively

### Correct Answers
- [0] Plan to review SAs and apply relevant security updates promptly, ideally on staging first

### Explanation
Coordinated release windows (contrib typically Wednesdays, core monthly/third Wednesday) let teams schedule update capacity and respond quickly to SAs.

### Question 363

**Domain:** Contributed Module and Theme Management

What does the 'Metatag' module use to set default meta descriptions per content type?

### Options
- Token-based defaults like [node:summary] configured globally, per type, and overridable per node
- Hard-coded strings only
- The image styles
- Random text generation

### Correct Answers
- [0] Token-based defaults like [node:summary] configured globally, per type, and overridable per node

### Explanation
Metatag's hierarchical defaults (global → entity type → bundle → entity) with tokens provide flexible, maintainable SEO metadata.

### Question 364

**Domain:** Contributed Module and Theme Management

Which module would you add for configurable site map pages for visitors (HTML sitemap)?

### Options
- The 'Site map' module or a custom view; Simple XML Sitemap covers only the XML variant
- The core Statistics module
- The Tour module
- The Ban module

### Correct Answers
- [0] The 'Site map' module or a custom view; Simple XML Sitemap covers only the XML variant

### Explanation
Visitor-facing HTML sitemaps are a separate concern from XML sitemaps; knowing which tools cover which avoids confusion in planning.

### Question 365

**Domain:** Contributed Module and Theme Management

How are contributed modules typically localized into other languages?

### Options
- Their translation templates are served from localize.drupal.org and imported by Interface Translation
- Each site must translate module code directly
- Contrib modules cannot be translated
- Translation requires the Translate tool from Symfony

### Correct Answers
- [0] Their translation templates are served from localize.drupal.org and imported by Interface Translation

### Explanation
Interface Translation fetches contrib translations from localize.drupal.org automatically when languages are added, covering module UI strings.

### Question 366

**Domain:** Contributed Module and Theme Management

A contributed theme looks broken after a core update. What is the likely cause and remedy?

### Options
- The theme may be incompatible with the new core version; check for an updated theme release or its issue queue
- Core updates never affect themes
- Reinstall the database
- Switch PHP versions randomly

### Correct Answers
- [0] The theme may be incompatible with the new core version; check for an updated theme release or its issue queue

### Explanation
Themes (like modules) declare core compatibility; template/API changes across majors can break outdated themes, so track releases and issue queues.

### Question 367

**Domain:** Contributed Module and Theme Management

What is the purpose of the 'drupal/core-recommended' vs 'drupal/core-project' distinction when managing core via Composer?

### Options
- core-recommended pins core plus its tested dependency versions; core-project is the template that scaffolds the project structure
- They are two different Drupal forks
- core-recommended is only for themes
- core-project cannot be updated

### Correct Answers
- [0] core-recommended pins core plus its tested dependency versions; core-project is the template that scaffolds the project structure

### Explanation
Composer templates (drupal/recommended-project) scaffold sites; drupal/core-recommended locks dependencies to vetted versions, ensuring reproducible builds.

### Question 368

**Domain:** Contributed Module and Theme Management

Which modules are commonly installed together as the 'SEO starter kit' on Drupal sites? (Choose two)

### Options
- Pathauto (+ Token) for clean URLs
- Metatag for meta tags, often with Simple XML Sitemap and Redirect
- Ban and Syslog
- Statistics and History

### Correct Answers
- [0] Pathauto (+ Token) for clean URLs
- [1] Metatag for meta tags, often with Simple XML Sitemap and Redirect

### Explanation
The de-facto SEO stack: Pathauto (aliases), Metatag (tags), Simple XML Sitemap (sitemaps), Redirect (301s) — knowing common module groupings aids planning.

## Security and Performance

### Question 369

**Domain:** Security and Performance

What is the single most important routine security task for a Drupal site owner?

### Options
- Promptly applying security updates to core and contributed projects when SAs are released
- Changing the admin theme monthly
- Renaming the index.php file weekly
- Deleting log messages daily

### Correct Answers
- [0] Promptly applying security updates to core and contributed projects when SAs are released

### Explanation
Most Drupal compromises exploit known vulnerabilities with available patches. A disciplined update process (monitor SAs, stage, apply) is the top security control.

### Question 370

**Domain:** Security and Performance

Which practices harden the user 1/admin accounts? (Choose two)

### Options
- Use role-based admin accounts for daily work instead of sharing user 1
- Enforce strong passwords (and ideally 2FA via contributed modules) for privileged roles
- Share the user 1 password with the whole team for convenience
- Post credentials in the project README

### Correct Answers
- [0] Use role-based admin accounts for daily work instead of sharing user 1
- [1] Enforce strong passwords (and ideally 2FA via contributed modules) for privileged roles

### Explanation
Least-privilege roles, individual accounts, strong credentials, and 2FA (contributed TFA module) reduce the blast radius of credential compromise.

### Question 371

**Domain:** Security and Performance

Why should the 'Full HTML' text format be restricted to trusted roles?

### Options
- It can allow markup that enables cross-site scripting if misused by untrusted users
- It slows down the database
- It disables comments
- It breaks the theme

### Correct Answers
- [0] It can allow markup that enables cross-site scripting if misused by untrusted users

### Explanation
Text format permissions are an XSS defense line. Untrusted roles should use restricted formats that filter dangerous tags and attributes.

### Question 372

**Domain:** Security and Performance

A site audit finds the 'PHP Filter'-style capability to enter PHP code in text fields. Why is this dangerous and what's the modern status?

### Options
- The PHP Filter module was removed from core (Drupal 8+) because storing executable PHP in the database is a severe security risk
- It is a recommended best practice in Drupal 11
- It only affects private files
- It improves performance and is safe

### Correct Answers
- [0] The PHP Filter module was removed from core (Drupal 8+) because storing executable PHP in the database is a severe security risk

### Explanation
In-DB executable PHP (the old PHP Filter) was removed from core for security and maintainability; code belongs in version-controlled modules, never in content.

### Question 373

**Domain:** Security and Performance

The status report warns 'Trusted host settings are not configured'. Why does this matter?

### Options
- Without trusted host patterns, attackers can poison caches and password-reset links via forged Host headers
- It only affects RSS feeds
- It slows down cron
- It changes image quality

### Correct Answers
- [0] Without trusted host patterns, attackers can poison caches and password-reset links via forged Host headers

### Explanation
trusted_host_patterns in settings.php restrict accepted hostnames, preventing host header injection attacks flagged by the status report.

### Question 374

**Domain:** Security and Performance

How does Drupal core protect forms from cross-site request forgery (CSRF)?

### Options
- Form API includes per-session form tokens validated on submission
- CSRF is not a real threat
- Forms are CSRF-protected only via JavaScript
- Tokens are optional and off by default

### Correct Answers
- [0] Form API includes per-session form tokens validated on submission

### Explanation
Form API embeds tokens tied to the user's session and form, rejecting forged cross-site submissions automatically for core and contrib forms.

### Question 375

**Domain:** Security and Performance

Which configuration reduces the risk of brute-force login attacks? (Choose two)

### Options
- Core flood control limiting failed attempts per account/IP
- Contributed defenses like CAPTCHA/Honeypot and 2FA for elevated accounts
- Publishing the login URL widely
- Disabling password hashing

### Correct Answers
- [0] Core flood control limiting failed attempts per account/IP
- [1] Contributed defenses like CAPTCHA/Honeypot and 2FA for elevated accounts

### Explanation
Flood throttling slows brute force; adding CAPTCHA/Honeypot on forms and TFA for privileged users layers additional protection.

### Question 376

**Domain:** Security and Performance

Anonymous users should not access admin paths even if they guess URLs. What enforces this?

### Options
- Route/permission checks: admin routes require permissions the anonymous role lacks, returning 403
- Security by obscurity only
- The theme hides links, which is sufficient
- Admin pages are public by default

### Correct Answers
- [0] Route/permission checks: admin routes require permissions the anonymous role lacks, returning 403

### Explanation
Drupal enforces access at the route/controller level, not just by hiding links. Permissions (not URL secrecy) protect administrative functionality.

### Question 377

**Domain:** Security and Performance

Why is it important to keep the files directory protected from executing PHP?

### Options
- Uploaded malicious files could otherwise execute as code on the server; Drupal ships .htaccess protections for Apache and recommends equivalent Nginx rules
- It improves image quality
- It speeds up cron
- It is only cosmetic

### Correct Answers
- [0] Uploaded malicious files could otherwise execute as code on the server; Drupal ships .htaccess protections for Apache and recommends equivalent Nginx rules

### Explanation
Preventing PHP execution in upload directories blocks webshell uploads. The status report verifies these protections exist.

### Question 378

**Domain:** Security and Performance

A security update to core is released while your site runs an older minor version. What's the recommended action sequence?

### Options
- Back up, update on staging via Composer, run database updates, test, then deploy to production promptly
- Wait a year for stability
- Edit core files directly on production
- Disable the Update Manager to hide warnings

### Correct Answers
- [0] Back up, update on staging via Composer, run database updates, test, then deploy to production promptly

### Explanation
Structured update workflows (backup → staging → updatedb → test → deploy) minimize risk while closing the vulnerability window quickly.

### Question 379

**Domain:** Security and Performance

Which two core modules form the base of Drupal's page caching strategy?

### Options
- Internal Page Cache and Dynamic Page Cache
- Statistics and History
- Ban and Syslog
- Color and Shortcut

### Correct Answers
- [0] Internal Page Cache and Dynamic Page Cache

### Explanation
Internal Page Cache serves anonymous users full cached pages; Dynamic Page Cache caches render arrays per context for all users, using cache tags for invalidation.

### Question 380

**Domain:** Security and Performance

What problem does CSS/JS aggregation solve, and where is it enabled?

### Options
- It reduces the number of HTTP requests by combining asset files; enabled on the Performance page
- It fixes broken images; enabled per node
- It compiles PHP; enabled in cron
- It minifies the database; enabled in settings

### Correct Answers
- [0] It reduces the number of HTTP requests by combining asset files; enabled on the Performance page

### Explanation
Aggregation merges many small CSS/JS files into fewer downloads at /admin/config/development/performance, improving page load times.

### Question 381

**Domain:** Security and Performance

Editors upload 8 MB photos straight from cameras, slowing pages. What site-building controls help? (Choose two)

### Options
- Image styles serving appropriately sized derivatives per context
- Reasonable upload size limits and responsive images for device-appropriate files
- Linking directly to original uploads everywhere
- Disabling the image module

### Correct Answers
- [0] Image styles serving appropriately sized derivatives per context
- [1] Reasonable upload size limits and responsive images for device-appropriate files

### Explanation
Derivatives (image styles), responsive images, and sane upload limits keep pages fast while retaining editing flexibility for editors.

### Question 382

**Domain:** Security and Performance

What does 'Maximum age' for page cache on the Performance page control?

### Options
- How long anonymous page cache entries are considered fresh before regeneration
- The age of user accounts
- Image style lifetimes
- Cron frequency

### Correct Answers
- [0] How long anonymous page cache entries are considered fresh before regeneration

### Explanation
Page cache max-age bounds staleness for anonymous pages; cache tags still invalidate entries on content changes, with max-age as the fallback boundary.

### Question 383

**Domain:** Security and Performance

A view page with heavy joins slows the database. Which site-level mitigations apply? (Choose two)

### Options
- Enable time-based caching on the view display
- Reduce result size (pager limits), simplify relationships/filters, and index-friendly filters
- Add more fields to the view
- Disable all caching to 'refresh' faster

### Correct Answers
- [0] Enable time-based caching on the view display
- [1] Reduce result size (pager limits), simplify relationships/filters, and index-friendly filters

### Explanation
Caching and query simplification address expensive views. Over-fetching fields/rows and complex joins are common performance anti-patterns.

### Question 384

**Domain:** Security and Performance

What is cache tag invalidation and why is it superior to time-only caching?

### Options
- Rendered output is tagged with entity dependencies (node:5); edits invalidate exactly the affected caches, keeping content fresh without full flushes
- It deletes the entire cache on every edit
- It only works for images
- It is a contributed-only feature

### Correct Answers
- [0] Rendered output is tagged with entity dependencies (node:5); edits invalidate exactly the affected caches, keeping content fresh without full flushes

### Explanation
Cache tags give surgical invalidation across pages, blocks, and views referencing an entity — a core Drupal performance architecture strength.

### Question 385

**Domain:** Security and Performance

High traffic anonymous homepage: which layers can serve it fastest? (Choose two)

### Options
- Internal Page Cache plus a reverse proxy/CDN (e.g. Varnish, hosting CDN) in front
- Dynamic Page Cache with proper cache contexts
- The Devel module
- The Statistics module counting every view synchronously

### Correct Answers
- [0] Internal Page Cache plus a reverse proxy/CDN (e.g. Varnish, hosting CDN) in front
- [1] Dynamic Page Cache with proper cache contexts

### Explanation
Edge caching with Drupal's internal caches absorbs anonymous traffic; dynamic page cache accelerates authenticated rendering with context-aware reuse.

### Question 386

**Domain:** Security and Performance

The Statistics module's content view counter is enabled on a busy site. What is a performance consideration?

### Options
- It writes to the database on every view, adding write load on high-traffic sites; disable it if not needed
- It has no cost at all
- It speeds up pages
- It only affects images

### Correct Answers
- [0] It writes to the database on every view, adding write load on high-traffic sites; disable it if not needed

### Explanation
Per-request writes (counters) undermine caching scalability. Disabling nonessential write-heavy modules is a standard performance tuning step.

### Question 387

**Domain:** Security and Performance

Why should Devel and similar development modules be disabled on production?

### Options
- They add overhead, expose debugging information, and increase attack surface
- They delete content automatically
- They block user logins
- They are required for caching

### Correct Answers
- [0] They add overhead, expose debugging information, and increase attack surface

### Explanation
Dev tools leak internal data and slow requests; keeping them off production is both a performance and security best practice.

### Question 388

**Domain:** Security and Performance

A site shows stale content to editors after saving. What are likely causes? (Choose two)

### Options
- Overly aggressive page cache max-age or external cache layers (CDN/proxy) not purging
- Custom code or modules suppressing cache tags/invalidation
- The editor used a text format
- The cron ran too often

### Correct Answers
- [0] Overly aggressive page cache max-age or external cache layers (CDN/proxy) not purging
- [1] Custom code or modules suppressing cache tags/invalidation

### Explanation
Stale output usually traces to max-age settings, un-purged edge caches, or broken cache metadata in custom code — invalidation is a core strength when tags are correct.

### Question 389

**Domain:** Security and Performance

What does the 'Bandwidth optimization' of serving scaled images via image styles primarily improve?

### Options
- Page weight and load time by avoiding multi-megabyte originals in listings
- SEO keyword rankings directly
- Database normalization
- Cron scheduling

### Correct Answers
- [0] Page weight and load time by avoiding multi-megabyte originals in listings

### Explanation
Serving right-sized derivatives cuts bytes transferred — often the biggest front-end performance win for image-heavy Drupal sites.

### Question 390

**Domain:** Security and Performance

How do private files affect performance and security compared to public files?

### Options
- Private files are served through Drupal with access checks (slower, secure by permission); public files are served directly by the web server (fast, URL-accessible)
- Private files are always faster
- Public files are access-checked per request
- There is no difference

### Correct Answers
- [0] Private files are served through Drupal with access checks (slower, secure by permission); public files are served directly by the web server (fast, URL-accessible)

### Explanation
The trade-off: private delivery costs a Drupal bootstrap per file but enforces access control; public delivery is maximally fast but unrestricted.

### Question 391

**Domain:** Security and Performance

Why is running cron regularly important beyond maintenance tasks?

### Options
- Security/performance housekeeping depends on it: update checks, search indexing, log purging, temp file cleanup
- Cron only changes the site slogan
- Cron is optional with no side effects
- Cron rebuilds the theme each run

### Correct Answers
- [0] Security/performance housekeeping depends on it: update checks, search indexing, log purging, temp file cleanup

### Explanation
Missed cron means stale update data, bloated logs/temp files, and unindexed content — an external crontab is recommended for reliability.

### Question 392

**Domain:** Security and Performance

A 'Top access denied errors' report shows bots hammering /admin URLs. What mitigations apply? (Choose two)

### Options
- Verify permissions are correctly denying access (they are by default) and consider IP blocking via the Ban module or server-level rules
- Keep core/contrib updated to close known admin vulnerabilities
- Make admin paths public to reduce noise
- Disable the report

### Correct Answers
- [0] Verify permissions are correctly denying access (they are by default) and consider IP blocking via the Ban module or server-level rules
- [1] Keep core/contrib updated to close known admin vulnerabilities

### Explanation
403 noise is normal background scanning; defense in depth (permissions, updates, IP bans, WAF) keeps it harmless.

### Question 393

**Domain:** Security and Performance

Which practice protects against session hijacking on authenticated traffic?

### Options
- Serving the whole site over HTTPS so session cookies aren't sniffed (and secure cookie flags configured)
- Using longer passwords only
- Disabling the user module
- Clearing cron

### Correct Answers
- [0] Serving the whole site over HTTPS so session cookies aren't sniffed (and secure cookie flags configured)

### Explanation
HTTPS with secure cookies prevents credential/session interception. Mixed-mode sites risk exposing sessions on insecure requests.

### Question 394

**Domain:** Security and Performance

What is the performance impact of many enabled-but-unused modules?

### Options
- Extra code loaded/hooks invoked per request increases memory and time; uninstall unused modules
- No impact; modules are free
- Modules speed up the site always
- Only themes matter for performance

### Correct Answers
- [0] Extra code loaded/hooks invoked per request increases memory and time; uninstall unused modules

### Explanation
Every enabled module participates in hook invocation and service loading. Regularly uninstalling unused modules keeps request overhead lean.

### Question 395

**Domain:** Security and Performance

A client wants aggressive full-page caching for logged-in users with personalized blocks. Why is this tricky, and what's the Drupal approach?

### Options
- Personalized regions vary per user; Dynamic Page Cache uses cache contexts (per-user) and placeholders/Drupal Settings for highly dynamic parts instead of full-page caching everything
- Cache everything for everyone identically
- Disable caching for logged-in users entirely
- Personalized blocks are impossible

### Correct Answers
- [0] Personalized regions vary per user; Dynamic Page Cache uses cache contexts (per-user) and placeholders/Drupal Settings for highly dynamic parts instead of full-page caching everything

### Explanation
Cache contexts (user, roles, url) let most of the page stay cacheable while varying or lazy-building personalized fragments — Drupal's smart middle ground.

### Question 396

**Domain:** Security and Performance

What should you check first when a Drupal site suddenly becomes slow after a new module install?

### Options
- Whether the module adds expensive queries/hooks per request; check logs, disable the module on staging to compare, and review its issue queue
- The site slogan
- The theme colors
- The date formats

### Correct Answers
- [0] Whether the module adds expensive queries/hooks per request; check logs, disable the module on staging to compare, and review its issue queue

### Explanation
Regression isolation (toggle the change, measure) plus logs and issue queues quickly identifies misbehaving modules.

### Question 397

**Domain:** Security and Performance

Which database-level practices keep a Drupal site performant long-term? (Choose two)

### Options
- Regular log/temp cleanup via cron retention settings
- Avoiding unbounded table growth (sessions, watchdog, cache bins) with configured lifetimes
- Storing all images as BLOBs in the database
- Disabling cron to save resources

### Correct Answers
- [0] Regular log/temp cleanup via cron retention settings
- [1] Avoiding unbounded table growth (sessions, watchdog, cache bins) with configured lifetimes

### Explanation
Retention policies (dblog, sessions, tempstore) prevent table bloat that degrades queries — configured lifetimes plus cron keep the database lean.

### Question 398

**Domain:** Security and Performance

A penetration test flags that error pages display full PHP stack traces. Fix?

### Options
- Set 'Error messages to display' to None in Logging and errors configuration for production
- Delete the PHP error log
- Disable the Statistics module
- It is not configurable

### Correct Answers
- [0] Set 'Error messages to display' to None in Logging and errors configuration for production

### Explanation
Verbose on-screen errors leak paths and internals. Production sites must set error display to None; errors still go to logs.

### Question 399

**Domain:** Security and Performance

How does enabling a CDN affect Drupal's image style derivatives?

### Options
- Derivatives generated on first request can be cached at the CDN edge, offloading repeat traffic; ensure cache purging strategy when styles flush
- CDNs break image styles
- CDNs only cache the database
- Images cannot be CDN-cached

### Correct Answers
- [0] Derivatives generated on first request can be cached at the CDN edge, offloading repeat traffic; ensure cache purging strategy when styles flush

### Explanation
Image derivative URLs are cacheable like other assets; edge caching absorbs derivative traffic, with flush/purge planning when styles change.

### Question 400

**Domain:** Security and Performance

A site builder asks for a monthly security/performance routine. Which checklist items belong? (Choose two)

### Options
- Review Available updates and apply security releases; review status report warnings
- Review performance settings (caching, aggregation) and audit enabled modules for unused ones
- Delete the sync directory monthly
- Reinstall Drupal from scratch each month

### Correct Answers
- [0] Review Available updates and apply security releases; review status report warnings
- [1] Review performance settings (caching, aggregation) and audit enabled modules for unused ones

### Explanation
Sustainable operations: scheduled update reviews, status report checks, cache/aggregation verification, and module hygiene keep sites secure and fast.
