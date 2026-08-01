# Acquia Certified Drupal Backend Specialist Practice Questions

## Jump to Section:

- [Fundamental Web Development Concepts](#fundamental-web-development-concepts)
- [Drupal Core API](#drupal-core-api)
- [Debug Code and Troubleshooting](#debug-code-and-troubleshooting)
- [Theme Integration](#theme-integration)
- [Performance](#performance)
- [Security](#security)
- [Leveraging Community](#leveraging-community)

## Fundamental Web Development Concepts

### Question 1

**Domain:** Fundamental Web Development Concepts

What does PHP's `declare(strict_types=1)` enforce?

### Options
- Strict type checking for scalar type hints in function calls made from that file
- It enables opcache
- It disables all warnings
- It forces UTF-8 encoding

### Correct Answers
- [0] Strict type checking for scalar type hints in function calls made from that file

### Explanation
strict_types makes int/string/bool/float hints exact (no coercion) for calls originating in the declaring file, surfacing type bugs early.

### Question 2

**Domain:** Fundamental Web Development Concepts

What is the output type of `json_decode($json, true)`?

### Options
- An associative array (true) instead of stdClass objects
- Always a string
- A DOM document
- A resource handle

### Correct Answers
- [0] An associative array (true) instead of stdClass objects

### Explanation
The second argument selects associative arrays over objects; json_last_error()/exceptions validate malformed input.

### Question 3

**Domain:** Fundamental Web Development Concepts

How do PHP 8 enums improve Drupal code over class constants?

### Options
- Typed, exhaustive value sets usable in match/type hints (e.g. enum Status: string { case Published = 'pub'; })
- They replace databases
- They are just constants with no benefits
- Enums require Java

### Correct Answers
- [0] Typed, exhaustive value sets usable in match/type hints (e.g. enum Status: string { case Published = 'pub'; })

### Explanation
Backed enums give type-safe finite values with methods — modern Drupal code uses them for statuses/options instead of loose constants.

### Question 4

**Domain:** Fundamental Web Development Concepts

What does the `match` expression offer over `switch`?

### Options
- Strict comparison, returns a value, no fall-through — concise expression semantics
- It is slower always
- It only works with strings
- match is not PHP

### Correct Answers
- [0] Strict comparison, returns a value, no fall-through — concise expression semantics

### Explanation
match uses identity comparison and yields values directly, eliminating break bugs common in switch statements.

### Question 5

**Domain:** Fundamental Web Development Concepts

What are PHP attributes (#[...]) used for in Drupal 11?

### Options
- Native metadata on classes/methods read via reflection — plugin definitions, Drush commands, route access
- They style HTML
- They replace YAML entirely
- Attributes are deprecated

### Correct Answers
- [0] Native metadata on classes/methods read via reflection — plugin definitions, Drush commands, route access

### Explanation
Attributes supersede doctrine annotations for plugin metadata; Drupal 11 standardizes discovery on native PHP attributes.

### Question 6

**Domain:** Fundamental Web Development Concepts

What is a PHP trait's conflict resolution syntax?

### Options
- use TraitA, TraitB { TraitA::method insteadof TraitB; TraitB::method as altMethod; }
- extends TraitA, TraitB
- Traits cannot conflict
- import TraitA over TraitB

### Correct Answers
- [0] use TraitA, TraitB { TraitA::method insteadof TraitB; TraitB::method as altMethod; }

### Explanation
insteadof picks the winning method; as creates aliases — the manual disambiguation for trait method collisions.

### Question 7

**Domain:** Fundamental Web Development Concepts

What does `array_reduce()` do?

### Options
- Iteratively folds an array to a single value using a callback carrying the accumulator
- It removes empty elements
- It sorts descending
- It splits arrays

### Correct Answers
- [0] Iteratively folds an array to a single value using a callback carrying the accumulator

### Explanation
array_reduce($arr, fn($carry, $item) => ..., $initial) aggregates values — sums, grouping, building maps.

### Question 8

**Domain:** Fundamental Web Development Concepts

Why is `===` preferred over `==` for comparisons in Drupal code?

### Options
- Identity compares type and value, avoiding type-juggling surprises ('0' == false pitfalls)
- === is faster hardware
- == is deprecated entirely
- They are interchangeable

### Correct Answers
- [0] Identity compares type and value, avoiding type-juggling surprises ('0' == false pitfalls)

### Explanation
Loose equality coerces types with notorious edge cases; strict comparison is a core Drupal coding standard for predictability.

### Question 9

**Domain:** Fundamental Web Development Concepts

What does a PHP `finally` block guarantee?

### Options
- Execution after try/catch regardless of exceptions — used for cleanup (closing handles, restoring state)
- It runs only on success
- It prevents exceptions
- It runs before try

### Correct Answers
- [0] Execution after try/catch regardless of exceptions — used for cleanup (closing handles, restoring state)

### Explanation
finally always runs post-try/catch, making it the reliable place for resource cleanup and context restoration.

### Question 10

**Domain:** Fundamental Web Development Concepts

What is the difference between `self::` and `static::` in PHP?

### Options
- self:: binds to the defining class; static:: uses late static binding to the called class (respects inheritance overrides)
- They are identical
- static:: is for variables only
- self:: is deprecated

### Correct Answers
- [0] self:: binds to the defining class; static:: uses late static binding to the called class (respects inheritance overrides)

### Explanation
Late static binding lets base-class code resolve overridden static members in subclasses — key for extensible base classes.

### Question 11

**Domain:** Fundamental Web Development Concepts

How does dependency injection improve testability of a Drupal service?

### Options
- Dependencies arrive via constructor, so tests substitute mocks without a container or database
- DI makes tests slower
- DI requires global state
- Testing is unrelated to DI

### Correct Answers
- [0] Dependencies arrive via constructor, so tests substitute mocks without a container or database

### Explanation
Constructor injection declares collaborators explicitly; unit tests pass fakes/mocks instead of bootstrapping Drupal.

### Question 12

**Domain:** Fundamental Web Development Concepts

What does PHP's `readonly` property modifier enforce (8.1+)?

### Options
- The property can be written only once (typically in the constructor) and never modified after
- The class becomes abstract
- It hides the property
- It enables cloning only

### Correct Answers
- [0] The property can be written only once (typically in the constructor) and never modified after

### Explanation
readonly supports immutable value objects — common for DTO-style data in modern Drupal code.

### Question 13

**Domain:** Fundamental Web Development Concepts

What is a 'value object' in OOP and why use one?

### Options
- An immutable object defined by its attributes (e.g. Money, Email) with validation and no identity, improving domain clarity
- Any object with values
- A database row
- A singleton service

### Correct Answers
- [0] An immutable object defined by its attributes (e.g. Money, Email) with validation and no identity, improving domain clarity

### Explanation
Value objects encapsulate invariants (valid email format) and equality by value, reducing primitive-obsession bugs.

### Question 14

**Domain:** Fundamental Web Development Concepts

What does `spl_autoload_register()` enable?

### Options
- Custom autoloader functions mapping class names to files — the mechanism behind PSR-4 autoloading
- It registers globals
- It speeds up echo
- It manages sessions

### Correct Answers
- [0] Custom autoloader functions mapping class names to files — the mechanism behind PSR-4 autoloading

### Explanation
Autoloaders resolve classes on first use; Composer registers Drupal's PSR-4 mappings through this mechanism.

### Question 15

**Domain:** Fundamental Web Development Concepts

What is the Composite pattern used by Symfony's service container?

### Options
- A container holding service definitions that are instantiated lazily and shared per request lifecycle
- It is a UI pattern only
- The container stores SQL
- Composite refers to Composer

### Correct Answers
- [0] A container holding service definitions that are instantiated lazily and shared per request lifecycle

### Explanation
The DI container builds services on demand with shared instances; Drupal compiles it from services.yml definitions.

### Question 16

**Domain:** Fundamental Web Development Concepts

What does the Decorator pattern achieve in service decoration?

### Options
- Wrapping an object with another implementing the same interface to add behavior transparently
- It deletes services
- It is a CSS concept
- It clones databases

### Correct Answers
- [0] Wrapping an object with another implementing the same interface to add behavior transparently

### Explanation
Decorators intercept calls (add caching/logging) without changing consumers — used via 'decorates' in services.yml.

### Question 17

**Domain:** Fundamental Web Development Concepts

What is the Strategy pattern exemplified by in Drupal?

### Options
- Plugin systems selecting interchangeable implementations at runtime (image toolkits, cache backends)
- The menu system
- Cron scheduling
- CSS grids

### Correct Answers
- [0] Plugin systems selecting interchangeable implementations at runtime (image toolkits, cache backends)

### Explanation
Strategy encapsulates interchangeable algorithms behind one interface — plugins/toolkits swap behavior by configuration.

### Question 18

**Domain:** Fundamental Web Development Concepts

What does the Observer pattern map to in Drupal?

### Options
- Event dispatcher subscribers reacting to dispatched events, and broadly the hook system
- User authentication
- File storage
- Theme regions

### Correct Answers
- [0] Event dispatcher subscribers reacting to dispatched events, and broadly the hook system

### Explanation
Observers register for notifications; Drupal's events (and hooks) decouple producers from reaction logic.

### Question 19

**Domain:** Fundamental Web Development Concepts

How does PHP handle references vs copies for arrays passed to functions?

### Options
- Arrays copy-on-write by default; explicit &$param references share the original
- Arrays are always referenced
- Arrays are immutable
- Only objects copy

### Correct Answers
- [0] Arrays copy-on-write by default; explicit &$param references share the original

### Explanation
PHP arrays copy lazily (copy-on-write); functions mutating input declare by-reference parameters deliberately.

### Question 20

**Domain:** Fundamental Web Development Concepts

What does `preg_replace_callback()` provide over `preg_replace()`?

### Options
- A callback receiving matches to compute replacements dynamically
- Faster regex always
- It disables regex
- It only matches once

### Correct Answers
- [0] A callback receiving matches to compute replacements dynamically

### Explanation
Callback replacements allow logic per match (escaping, lookups) — safer and clearer than /e-modifier hacks.

### Question 21

**Domain:** Fundamental Web Development Concepts

What is the purpose of `mb_*` string functions?

### Options
- Multibyte-safe string handling for UTF-8 (mb_strlen, mb_substr) avoiding byte-count bugs
- They measure bytes intentionally
- They are aliases with no difference
- They only work on ASCII

### Correct Answers
- [0] Multibyte-safe string handling for UTF-8 (mb_strlen, mb_substr) avoiding byte-count bugs

### Explanation
Plain strlen/substr count bytes, corrupting multibyte text; mb_* functions count characters — essential for i18n content.

### Question 22

**Domain:** Fundamental Web Development Concepts

What does `filter_var($email, FILTER_VALIDATE_EMAIL)` return on failure?

### Options
- false (or null with FILTER_NULL_ON_FAILURE) rather than throwing
- An exception
- The string unchanged
- 1

### Correct Answers
- [0] false (or null with FILTER_NULL_ON_FAILURE) rather than throwing

### Explanation
filter_var validates/sanitizes input returning false on failure — a lightweight validation utility outside Drupal's validators.

### Question 23

**Domain:** Fundamental Web Development Concepts

What problem does `password_hash()`/`password_verify()` solve?

### Options
- Secure one-way password storage with modern algorithms (bcrypt/argon2) and timing-safe verification
- Two-way encryption of passwords
- Faster logins
- Password sharing

### Correct Answers
- [0] Secure one-way password storage with modern algorithms (bcrypt/argon2) and timing-safe verification

### Explanation
password_hash applies salted adaptive hashing; Drupal's PhpassHashedPassword predates but modern PHP offers these primitives.

### Question 24

**Domain:** Fundamental Web Development Concepts

What does `random_bytes()` provide that `rand()` does not?

### Options
- Cryptographically secure randomness suitable for tokens/keys
- Faster numbers only
- Sequential numbers
- Random colors

### Correct Answers
- [0] Cryptographically secure randomness suitable for tokens/keys

### Explanation
rand()/mt_rand are predictable; random_bytes/random_int give CSPRNG output required for security tokens.

### Question 25

**Domain:** Fundamental Web Development Concepts

What is the output of `sprintf('%05d', 42)`?

### Options
- '00042' — zero-padded to five characters
- '42'
- '42.00000'
- '  42'

### Correct Answers
- [0] '00042' — zero-padded to five characters

### Explanation
printf-style format specifiers control padding/precision — handy for IDs, dates, and fixed-width output.

### Question 26

**Domain:** Fundamental Web Development Concepts

What does PHP's `static` variable inside a function retain?

### Options
- Its value across calls to that function (per-request static caching)
- Nothing; it resets
- Global state across requests
- Session data

### Correct Answers
- [0] Its value across calls to that function (per-request static caching)

### Explanation
Function-static variables persist during the request — Drupal uses this for in-request caches (drupal_static pattern historically).

### Question 27

**Domain:** Fundamental Web Development Concepts

What does the nullsafe operator `?->` prevent?

### Options
- Errors calling methods on null ($user?->getEmail() returns null instead of fatal)
- SQL injection
- Infinite loops
- Type errors

### Correct Answers
- [0] Errors calling methods on null ($user?->getEmail() returns null instead of fatal)

### Explanation
Nullsafe chaining short-circuits to null on null receivers, removing defensive null checks in chains.

### Question 28

**Domain:** Fundamental Web Development Concepts

What is the role of `__invoke()` in a class?

### Options
- Makes objects callable like functions ($obj() runs __invoke) — used for single-action controllers/callables
- It constructs the object
- It serializes the object
- It clones the object

### Correct Answers
- [0] Makes objects callable like functions ($obj() runs __invoke) — used for single-action controllers/callables

### Explanation
Invokable classes act as callable services — Drupal uses them for single-method controllers and lazy builders.

### Question 29

**Domain:** Fundamental Web Development Concepts

What does `get_class_methods()` vs `method_exists()` tell you?

### Options
- Both reflect available methods; method_exists checks one efficiently (including inherited)
- They check properties
- They modify methods
- They are string functions

### Correct Answers
- [0] Both reflect available methods; method_exists checks one efficiently (including inherited)

### Explanation
Reflection utilities introspect classes at runtime — plugin systems and tooling rely on them for capability checks.

### Question 30

**Domain:** Fundamental Web Development Concepts

What does `call_user_func()`/`call_user_func_array()` enable?

### Options
- Invoking callables dynamically (strings, arrays [class, method], closures) — used in Drupal's hook/callback systems
- It defines functions
- It deletes functions
- It is the only way to call anything

### Correct Answers
- [0] Invoking callables dynamically (strings, arrays [class, method], closures) — used in Drupal's hook/callback systems

### Explanation
Dynamic invocation underpins callback-heavy APIs (batch operations, lazy builders, form callbacks).

### Question 31

**Domain:** Fundamental Web Development Concepts

What is an 'interface' contract guarantee in PHP?

### Options
- Implementing classes provide all declared methods with compatible signatures — enabling polymorphism and DI by type
- Interfaces hold implementations
- Interfaces are optional documentation
- Interfaces store data

### Correct Answers
- [0] Implementing classes provide all declared methods with compatible signatures — enabling polymorphism and DI by type

### Explanation
Interfaces define capabilities without implementation; type-hinting interfaces decouples consumers from concrete classes.

### Question 32

**Domain:** Fundamental Web Development Concepts

What does abstract class vs interface differ on? (Choose two)

### Options
- Abstract classes can carry implementation/state; interfaces only declare contracts (with constants)
- A class extends one abstract class but implements many interfaces
- Interfaces can hold private properties
- Abstract classes cannot have constructors

### Correct Answers
- [0] Abstract classes can carry implementation/state; interfaces only declare contracts (with constants)
- [1] A class extends one abstract class but implements many interfaces

### Explanation
Single inheritance vs multiple interface implementation shapes design: shared base behavior in abstracts, capability contracts in interfaces.

### Question 33

**Domain:** Fundamental Web Development Concepts

What does HTTP status 307 vs 302 communicate?

### Options
- Both redirect temporarily; 307 guarantees the method/body are preserved on the new request
- 307 is permanent
- 302 preserves method always
- They are identical in browsers

### Correct Answers
- [0] Both redirect temporarily; 307 guarantees the method/body are preserved on the new request

### Explanation
302 historically downgrades POST to GET; 307/308 explicitly preserve method (308 permanent) — matters for API redirects.

### Question 34

**Domain:** Fundamental Web Development Concepts

What does a 422 Unprocessable Content response signal for APIs?

### Options
- The request was well-formed but failed semantic validation (e.g. constraint violations)
- Authentication failed
- The server is down
- The URL is wrong

### Correct Answers
- [0] The request was well-formed but failed semantic validation (e.g. constraint violations)

### Explanation
422 distinguishes validation errors from malformed syntax (400); Drupal's REST returns 422 for entity validation failures.

### Question 35

**Domain:** Fundamental Web Development Concepts

What is idempotency and which HTTP methods guarantee it?

### Options
- Repeating the request has the same effect: GET, HEAD, PUT, DELETE are idempotent; POST is not
- All methods are idempotent
- Only POST is idempotent
- Idempotency is a database property

### Correct Answers
- [0] Repeating the request has the same effect: GET, HEAD, PUT, DELETE are idempotent; POST is not

### Explanation
Idempotent methods are safe to retry (load balancers, clients); POST creates side effects per call and needs dedup safeguards.

### Question 36

**Domain:** Fundamental Web Development Concepts

What does the `ETag`/`If-None-Match` pair achieve?

### Options
- Conditional requests: clients revalidate cached representations, receiving 304 when unchanged
- Encryption of responses
- User login
- Image compression

### Correct Answers
- [0] Conditional requests: clients revalidate cached representations, receiving 304 when unchanged

### Explanation
Entity tags fingerprint representations; conditional GETs save bandwidth by confirming freshness with 304 Not Modified.

### Question 37

**Domain:** Fundamental Web Development Concepts

What does the `Vary: Cookie` response header cause?

### Options
- Caches key entries per cookie value, fragmenting shared caches — avoid varying on cookies for public pages
- Nothing; it is decorative
- It deletes cookies
- It merges cache entries

### Correct Answers
- [0] Caches key entries per cookie value, fragmenting shared caches — avoid varying on cookies for public pages

### Explanation
Vary declares request headers affecting the response; cookie variance shatters CDN/proxy hit ratios — Drupal works to minimize it.

### Question 38

**Domain:** Fundamental Web Development Concepts

What does HTTP/2 (and HTTP/3) change for asset delivery best practices?

### Options
- Multiplexing reduces the need for aggressive file concatenation; domain sharding becomes harmful
- It requires more domains
- It disables caching
- It only affects video

### Correct Answers
- [0] Multiplexing reduces the need for aggressive file concatenation; domain sharding becomes harmful

### Explanation
Parallel streams over one connection favor smaller, cacheable assets over monolithic bundles; Drupal aggregation remains useful but less critical.

### Question 39

**Domain:** Fundamental Web Development Concepts

What does Composer's `composer.json` 'require' vs 'require-dev' separate?

### Options
- Production runtime dependencies vs development-only tools (phpunit, coder) excluded from production installs
- Licensed vs free packages
- PHP vs JS packages
- Themes vs modules

### Correct Answers
- [0] Production runtime dependencies vs development-only tools (phpunit, coder) excluded from production installs

### Explanation
composer install --no-dev omits require-dev on production, keeping attack surface and size down.

### Question 40

**Domain:** Fundamental Web Development Concepts

What does `composer outdated` report?

### Options
- Installed packages with newer versions available per your constraints
- Broken packages only
- Unused packages
- License violations

### Correct Answers
- [0] Installed packages with newer versions available per your constraints

### Explanation
outdated compares lock state against repositories — the starting point for update planning (with composer prohibits/why-not for blockers).

### Question 41

**Domain:** Fundamental Web Development Concepts

What does `composer why-not drupal/core 11.x` (prohibits) reveal?

### Options
- Which installed packages' constraints block upgrading to that version
- It deletes packages
- It installs the version anyway
- It lists download counts

### Correct Answers
- [0] Which installed packages' constraints block upgrading to that version

### Explanation
why-not traces conflicting constraints — essential when contrib modules lag behind core major versions.

### Question 42

**Domain:** Fundamental Web Development Concepts

What is the role of `drupal/core-recommended` vs `drupal/core`?

### Options
- core-recommended pins core's dependency versions to tested sets; core allows broader (riskier) dependency resolution
- They are different Drupal editions
- core-recommended is paid
- core is for themes only

### Correct Answers
- [0] core-recommended pins core's dependency versions to tested sets; core allows broader (riskier) dependency resolution

### Explanation
core-recommended locks transitive dependencies (Symfony, Guzzle) to versions core was tested with — the safe default for projects.

### Question 43

**Domain:** Fundamental Web Development Concepts

What does the PSR-3 standard define?

### Options
- A common logging interface (LoggerInterface with debug/info/warning/error methods) used by Drupal's logger services
- Autoloading rules
- Coding style
- HTTP messages

### Correct Answers
- [0] A common logging interface (LoggerInterface with debug/info/warning/error methods) used by Drupal's logger services

### Explanation
PSR-3 loggers standardize levels/channels; Drupal channels wrap PSR-3, so backends like Monolog integrate cleanly.

### Question 44

**Domain:** Fundamental Web Development Concepts

What does PSR-7 standardize?

### Options
- HTTP message interfaces (Request/Response objects) used by frameworks; Drupal's stack wraps Symfony HttpFoundation equivalents
- Database schemas
- CSS units
- Password rules

### Correct Answers
- [0] HTTP message interfaces (Request/Response objects) used by frameworks; Drupal's stack wraps Symfony HttpFoundation equivalents

### Explanation
PSR-7 immutable request/response objects enable middleware pipelines; Drupal controllers return Symfony Response objects aligned with this model.

### Question 45

**Domain:** Fundamental Web Development Concepts

What does PSR-18 define?

### Options
- An HTTP client interface (sendRequest) — Guzzle implements it, and Drupal's http_client wraps Guzzle
- Logging
- Caching
- Autoloading

### Correct Answers
- [0] An HTTP client interface (sendRequest) — Guzzle implements it, and Drupal's http_client wraps Guzzle

### Explanation
PSR-18 abstracts HTTP clients; type-hinting it (or using Drupal's service) keeps integration code portable.

### Question 46

**Domain:** Fundamental Web Development Concepts

What does the MVC separation give Drupal's architecture?

### Options
- Entities/DB (model), render arrays/templates (view), controllers/services (controller) — separation easing testing and theming
- Drupal has no structure
- MVC only applies to Java
- It merges all layers

### Correct Answers
- [0] Entities/DB (model), render arrays/templates (view), controllers/services (controller) — separation easing testing and theming

### Explanation
Drupal isn't pure MVC but follows the separation: logic in services/controllers, presentation via render pipeline, data via entities.

### Question 47

**Domain:** Fundamental Web Development Concepts

What does `git rebase -i` (interactive) allow that plain rebase doesn't?

### Options
- Rewriting commits: squash, reword, reorder, drop — cleaning history before merging
- It pushes automatically
- It creates tags
- It rebases remote branches for you

### Correct Answers
- [0] Rewriting commits: squash, reword, reorder, drop — cleaning history before merging

### Explanation
Interactive rebase polishes feature branches (squash fixups, clarify messages) — never rebase shared/public history.

### Question 48

**Domain:** Fundamental Web Development Concepts

What does `git cherry-pick <sha>` do?

### Options
- Applies a specific commit's changes onto the current branch as a new commit
- Deletes that commit
- Merges all branches
- Tags the commit

### Correct Answers
- [0] Applies a specific commit's changes onto the current branch as a new commit

### Explanation
Cherry-picking ports individual fixes across branches (hotfix to main and develop) without full merges.

### Question 49

**Domain:** Fundamental Web Development Concepts

What does `git bisect` automate?

### Options
- Binary search over history to find the commit introducing a bug (marking good/bad)
- Code formatting
- Branch deletion
- Conflict resolution

### Correct Answers
- [0] Binary search over history to find the commit introducing a bug (marking good/bad)

### Explanation
Bisect halves the candidate range each step — the fastest way to locate regressions in long histories.

### Question 50

**Domain:** Fundamental Web Development Concepts

What does a `.gitattributes` `export-ignore` line control?

### Options
- Files excluded from git archive/distribution bundles (e.g. tests, CI config in package downloads)
- Ignored commits
- Line endings only
- Git hooks

### Correct Answers
- [0] Files excluded from git archive/distribution bundles (e.g. tests, CI config in package downloads)

### Explanation
export-ignore slims distribution archives; drupal.org packages use similar mechanisms excluding dev files.

### Question 51

**Domain:** Fundamental Web Development Concepts

What is semantic versioning's rule for MAJOR.MINOR.PATCH increments?

### Options
- MAJOR for breaking changes, MINOR for backwards-compatible features, PATCH for backwards-compatible fixes
- Any number order is fine
- MAJOR for fixes only
- Versions are marketing labels

### Correct Answers
- [0] MAJOR for breaking changes, MINOR for backwards-compatible features, PATCH for backwards-compatible fixes

### Explanation
SemVer communicates compatibility; Drupal core and contrib follow it (with contrib's 2.x branches per core compatibility).

### Question 52

**Domain:** Fundamental Web Development Concepts

What does Drupal's deprecation policy mean for contributed modules across core minors?

### Options
- APIs deprecated in one minor keep working until the next major; modules should replace deprecated calls proactively
- Deprecated code is removed immediately
- Deprecations are only suggestions forever
- Only themes are affected

### Correct Answers
- [0] APIs deprecated in one minor keep working until the next major; modules should replace deprecated calls proactively

### Explanation
Drupal deprecates with warnings rather than breaking minors; upgrade_status/rector tooling finds usages before majors remove them.

### Question 53

**Domain:** Fundamental Web Development Concepts

What does `drupal/core-dev` provide?

### Options
- Development dependencies for core development (PHPUnit, phpcs rules) — not for production sites
- A second Drupal core
- Admin themes
- Drush itself

### Correct Answers
- [0] Development dependencies for core development (PHPUnit, phpcs rules) — not for production sites

### Explanation
core-dev pins testing tooling versions; projects add it for running tests/standards checks locally.

### Question 54

**Domain:** Fundamental Web Development Concepts

What is the purpose of `composer config platform.php`?

### Options
- Fakes the PHP version for dependency resolution (e.g. resolve as PHP 8.3 when the CLI differs)
- It upgrades PHP itself
- It disables PHP
- It sets the PHP memory limit

### Correct Answers
- [0] Fakes the PHP version for dependency resolution (e.g. resolve as PHP 8.3 when the CLI differs)

### Explanation
Platform overrides align composer resolution with the production PHP when local CLI versions differ.

### Question 55

**Domain:** Fundamental Web Development Concepts

What does `opcache` provide for Drupal performance?

### Options
- Caching compiled PHP bytecode in memory, removing per-request parse/compile cost
- Database caching
- Image optimization
- CSS minification

### Correct Answers
- [0] Caching compiled PHP bytecode in memory, removing per-request parse/compile cost

### Explanation
OPcache is essential for production PHP; tuning memory/interned strings measurably speeds Drupal's large codebase.

### Question 56

**Domain:** Fundamental Web Development Concepts

What does `opcache.preload` (PHP 7.4+) do?

### Options
- Loads chosen classes/functions into shared memory at server start, trimming per-request autoload costs
- It preloads images
- It caches SQL
- It warms browsers

### Correct Answers
- [0] Loads chosen classes/functions into shared memory at server start, trimming per-request autoload costs

### Explanation
Preloading hot framework classes saves autoload/compile time; Drupal projects use generated preload files cautiously.

### Question 57

**Domain:** Fundamental Web Development Concepts

What does the `realpath_cache` PHP setting affect?

### Options
- Caching of file path lookups, reducing stat syscalls for PHP's many file includes
- Browser cache
- DNS cache
- Composer cache

### Correct Answers
- [0] Caching of file path lookups, reducing stat syscalls for PHP's many file includes

### Explanation
Tuning realpath_cache_size/TTL trims filesystem overhead on include-heavy applications like Drupal.

### Question 58

**Domain:** Fundamental Web Development Concepts

What does a 'reverse proxy TTL' control in front of Drupal?

### Options
- How long Varnish/CDN keeps cached responses before revalidating with Drupal
- PHP script timeouts
- Database TTLs
- Cookie lifetimes

### Correct Answers
- [0] How long Varnish/CDN keeps cached responses before revalidating with Drupal

### Explanation
Edge TTLs plus cache-tag purges (Purger modules) balance freshness and offload for anonymous traffic.

### Question 59

**Domain:** Fundamental Web Development Concepts

What is the difference between persistent database connections and standard connections in PHP?

### Options
- Persistent connections reuse connections across requests (rarely recommended; risks stale state vs standard per-request connections)
- Persistent is always better
- Standard connections never close
- There is no difference

### Correct Answers
- [0] Persistent connections reuse connections across requests (rarely recommended; risks stale state vs standard per-request connections)

### Explanation
pconnect historically caused state leakage/connection storms; modern practice uses standard connections with proper pooling proxies.

### Question 60

**Domain:** Fundamental Web Development Concepts

What does `utf8mb4` charset support that `utf8` in MySQL doesn't?

### Options
- Full 4-byte UTF-8 including emoji and rare scripts (MySQL's utf8 was 3-byte-limited)
- Faster queries
- ASCII only
- Binary columns

### Correct Answers
- [0] Full 4-byte UTF-8 including emoji and rare scripts (MySQL's utf8 was 3-byte-limited)

### Explanation
Drupal requires utf8mb4 for full Unicode; collations like utf8mb4_general_ci govern case-insensitive comparisons.

### Question 61

**Domain:** Fundamental Web Development Concepts

What is the N+1 query problem in Drupal terms?

### Options
- Loading entities in a loop (one query each) instead of loadMultiple/batched queries — fix via eager loading
- Having too many nodes
- A CSS bug
- A routing error

### Correct Answers
- [0] Loading entities in a loop (one query each) instead of loadMultiple/batched queries — fix via eager loading

### Explanation
N+1 kills performance at scale; entity queries + loadMultiple (and views relationships) fetch data in constant queries.

### Question 62

**Domain:** Fundamental Web Development Concepts

What does `EXPLAIN` reveal for a slow query?

### Options
- The query execution plan: indexes used, rows scanned, join order — guiding index/rewrites
- It fixes the query
- It shows user passwords
- It clears caches

### Correct Answers
- [0] The query execution plan: indexes used, rows scanned, join order — guiding index/rewrites

### Explanation
Reading EXPLAIN identifies full-table scans and missing indexes — the first step in query optimization.

### Question 63

**Domain:** Fundamental Web Development Concepts

What does `hook_schema` index definition ('indexes' => ['nid' => ['nid']]) accomplish?

### Options
- Creates database indexes on the specified columns for lookup performance
- Indexes content for search
- It orders PHP arrays
- It builds sitemaps

### Correct Answers
- [0] Creates database indexes on the specified columns for lookup performance

### Explanation
Schema indexes/unique keys shape physical storage; choosing columns matching query WHERE/JOIN patterns avoids scans.

### Question 64

**Domain:** Fundamental Web Development Concepts

What is the difference between `UNION` and `UNION ALL`?

### Options
- UNION deduplicates rows (slower); UNION ALL keeps duplicates — prefer ALL when dedup is unnecessary
- They are identical
- ALL sorts results
- UNION is faster always

### Correct Answers
- [0] UNION deduplicates rows (slower); UNION ALL keeps duplicates — prefer ALL when dedup is unnecessary

### Explanation
Skipping the dedup sort saves work; choose UNION ALL for independent result sets in custom queries/views.

## Drupal Core API

### Question 65

**Domain:** Drupal Core API

What does the Entity API's `EntityInterface::save()` orchestrate?

### Options
- Validation hooks, presave hooks, storage writes, and post-save hooks (insert/update) with revision handling
- Only an SQL INSERT
- Theme rendering
- Cache clearing only

### Correct Answers
- [0] Validation hooks, presave hooks, storage writes, and post-save hooks (insert/update) with revision handling

### Explanation
save() runs the full entity lifecycle through the storage handler — the reason direct SQL bypasses critical behaviors.

### Question 66

**Domain:** Drupal Core API

What does `$entity->get('field_tags')->referencedEntities()` return?

### Options
- The loaded target entities of an entity reference field item list
- Raw target IDs only
- The field config
- Render arrays

### Correct Answers
- [0] The loaded target entities of an entity reference field item list

### Explanation
EntityReferenceFieldItemList::referencedEntities() resolves referenced entities in bulk — the idiomatic traversal from reference fields.

### Question 67

**Domain:** Drupal Core API

What does `$entity->toArray()` produce?

### Options
- A plain array of field values (per field/item property) for serialization or comparison
- A render array
- JSON directly
- The entity schema

### Correct Answers
- [0] A plain array of field values (per field/item property) for serialization or comparison

### Explanation
toArray() flattens field item lists to value arrays — useful for diffs, exports, and creating derivative entities.

### Question 68

**Domain:** Drupal Core API

What does `EntityStorageInterface::loadRevision($vid)` do?

### Options
- Loads a specific revision of a revisionable entity
- Deletes a revision
- Creates a revision
- Lists all revisions

### Correct Answers
- [0] Loads a specific revision of a revisionable entity

### Explanation
Revision loading (loadRevision, revisionIds via query) powers history UIs, comparisons, and moderation flows.

### Question 69

**Domain:** Drupal Core API

How do you check whether an entity is newly created within a hook?

### Options
- $entity->isNew() is TRUE before first save completes (in presave); afterwards compare original or use insert hook
- There is no way
- Check $entity->id() === 0 only after save
- Ask the theme

### Correct Answers
- [0] $entity->isNew() is TRUE before first save completes (in presave); afterwards compare original or use insert hook

### Explanation
isNew() flags unsaved entities; in update hooks, $entity->original holds pre-save values for comparisons.

### Question 70

**Domain:** Drupal Core API

What is `$entity->original` in update hooks?

### Options
- The entity as loaded before changes — compare fields to detect what changed
- A backup in files
- The first revision ever
- A cloned theme

### Correct Answers
- [0] The entity as loaded before changes — compare fields to detect what changed

### Explanation
original enables change detection (status flips, field edits) driving conditional logic like notifications on publish.

### Question 71

**Domain:** Drupal Core API

What does the entity query `->condition('field_date', $now, '>=')` support that raw views filters sometimes hide?

### Options
- Field-level conditions with operators across any field column (value, end_value) directly in code
- Only title conditions
- Only user conditions
- Nothing; queries are limited

### Correct Answers
- [0] Field-level conditions with operators across any field column (value, end_value) directly in code

### Explanation
Entity queries expose field columns/operators precisely (IN, BETWEEN, >=) with access checking and tag support.

### Question 72

**Domain:** Drupal Core API

What does `->condition('field_ref.entity:node.title', 'x')` demonstrate?

### Options
- Traversing entity references in entity queries via dot notation
- Invalid syntax
- A join to files only
- Theme conditionals

### Correct Answers
- [0] Traversing entity references in entity queries via dot notation

### Explanation
Dot-notation reference traversal (entity:type.field) queries across relationships without manual joins.

### Question 73

**Domain:** Drupal Core API

What does `->addTag('my_tag')` on an entity query enable?

### Options
- hook_query_my_tag_alter() implementations can modify the underlying SQL query
- It speeds up the query
- It caches results forever
- Tags are cosmetic

### Correct Answers
- [0] hook_query_my_tag_alter() implementations can modify the underlying SQL query

### Explanation
Query tags let modules alter specific queries (add conditions/joins) — e.g. node access uses the node_access tag.

### Question 74

**Domain:** Drupal Core API

What is the node access grant system's 'node_grants' table used for?

### Options
- Precomputed realm/grant pairs checked at query time, restricting listings efficiently
- Storing user passwords
- Caching themes
- Logging visits

### Correct Answers
- [0] Precomputed realm/grant pairs checked at query time, restricting listings efficiently

### Explanation
hook_node_grants()/hook_node_access_records() populate grants; queries join them via the node_access tag for scalable filtering.

### Question 75

**Domain:** Drupal Core API

When is `node_access_rebuild()` required?

### Options
- After changing grant-affecting code/modules so stored grants recalculate for all nodes
- Every page load
- Never
- Only for themes

### Correct Answers
- [0] After changing grant-affecting code/modules so stored grants recalculate for all nodes

### Explanation
Grant records are denormalized; changing access logic requires rebuild (admin prompt appears when needed) to stay consistent.

### Question 76

**Domain:** Drupal Core API

What does `hook_node_access_records()` return?

### Options
- Grant records (realm, gid, view/update/delete flags) for a given node
- Render arrays
- Menu links
- Theme suggestions

### Correct Answers
- [0] Grant records (realm, gid, view/update/delete flags) for a given node

### Explanation
Modules declare per-node grant records; paired with hook_node_grants() mapping users to gids, forming record-level access.

### Question 77

**Domain:** Drupal Core API

What does `AccessResult::allowedIfHasPermission()` add automatically?

### Options
- Permission-based access plus the right cacheability metadata (permissions context, user tags)
- A database table
- A new role
- A cron job

### Correct Answers
- [0] Permission-based access plus the right cacheability metadata (permissions context, user tags)

### Explanation
AccessResult static factories enforce correct cache metadata on access decisions — the reason they replaced raw booleans.

### Question 78

**Domain:** Drupal Core API

What does `AccessResult::orIf()` / `andIf()` combine?

### Options
- Multiple AccessResult objects with OR/AND logic merging cacheability metadata
- SQL joins
- Theme regions
- User accounts

### Correct Answers
- [0] Multiple AccessResult objects with OR/AND logic merging cacheability metadata

### Explanation
Composable access results keep cache contexts/tags correct while expressing complex rules readably.

### Question 79

**Domain:** Drupal Core API

What is the Typed Data API's DataDefinition used for?

### Options
- Declaring data types, labels, constraints, and computed callbacks for structured data (fields/config)
- Defining routes
- Declaring themes
- Menu weights

### Correct Answers
- [0] Declaring data types, labels, constraints, and computed callbacks for structured data (fields/config)

### Explanation
Data definitions describe property types/settings; field definitions build on them, driving validation and serialization.

### Question 80

**Domain:** Drupal Core API

What does `FieldItemListInterface::getValue()` return?

### Options
- Raw property arrays per delta ([['value' => 'x'], ['value' => 'y']])
- Rendered HTML
- Only the first value always
- Field config YAML

### Correct Answers
- [0] Raw property arrays per delta ([['value' => 'x'], ['value' => 'y']])

### Explanation
getValue() exposes item properties; ->value/->get(0)->target_id shortcuts read single properties directly.

### Question 81

**Domain:** Drupal Core API

What does `$node->getTitle()` vs `$node->label()` reflect?

### Options
- Entity-specific getters (title for nodes) and the generic label() across entity types
- They differ in caching
- label() is deprecated entirely
- getTitle renders HTML

### Correct Answers
- [0] Entity-specific getters (title for nodes) and the generic label() across entity types

### Explanation
label() abstracts entity titles for generic code; specific entities add typed getters for their label fields.

### Question 82

**Domain:** Drupal Core API

What does the 'entity.query' service provide beyond entityQuery()?

### Options
- Query factories for entity types and special queries (keys/aggregate) with consistent access handling
- It only runs SQL
- It themes pages
- It sends mail

### Correct Answers
- [0] Query factories for entity types and special queries (keys/aggregate) with consistent access handling

### Explanation
entity.query centralizes query creation (get('node'), getAggregate), replacing static \Drupal::entityQuery in injectable code.

### Question 83

**Domain:** Drupal Core API

What is a 'route enhancer' in the routing system?

### Options
- Code enriching matched routes (e.g. converting {node} params to loaded entities via ParamConverters)
- A theme layer
- A cache bin
- A cron plugin

### Correct Answers
- [0] Code enriching matched routes (e.g. converting {node} params to loaded entities via ParamConverters)

### Explanation
Enhancers/param converters upcast path arguments ({node: 5}) into typed controller arguments automatically.

### Question 84

**Domain:** Drupal Core API

What does `_entity_form: 'node.article'` on a route specify?

### Options
- The route serves the entity form for a given entity operation/bundle via EntityFormBuilder
- It themes the form
- It deletes the entity
- It exports config

### Correct Answers
- [0] The route serves the entity form for a given entity operation/bundle via EntityFormBuilder

### Explanation
_entity_form routes hand control to entity form handlers — the mechanism behind node/add/article style paths.

### Question 85

**Domain:** Drupal Core API

What does `_format: 'json'` on a route do?

### Options
- Declares the response format, enabling format negotiation and serialization of returned data
- It minifies output
- It sets the theme
- It forces HTTPS

### Correct Answers
- [0] Declares the response format, enabling format negotiation and serialization of returned data

### Explanation
Format requirements pair with serializers: returning data (not Response) on _format routes yields encoded JSON via the serializer.

### Question 86

**Domain:** Drupal Core API

What is the `controller_resolver`'s job?

### Options
- Converting route _controller definitions (class::method, service:method) into callable invocations with DI
- Resolving themes
- DNS resolution
- Cron resolution

### Correct Answers
- [0] Converting route _controller definitions (class::method, service:method) into callable invocations with DI

### Explanation
The controller resolver instantiates controllers through the container (create()) enabling dependency injection.

### Question 87

**Domain:** Drupal Core API

What does `hook_entity_bundle_info_alter()` modify?

### Options
- Bundle definitions (labels, classes) reported for an entity type
- User roles
- Theme CSS
- Cron timing

### Correct Answers
- [0] Bundle definitions (labels, classes) reported for an entity type

### Explanation
Bundle info hooks describe available bundles; alters let modules rename/augment bundle metadata.

### Question 88

**Domain:** Drupal Core API

What does the 'entity_display.repository' service manage?

### Options
- View/form display objects per bundle/mode (getViewDisplay('node', 'article', 'teaser'))
- File displays
- User sessions
- Cache bins

### Correct Answers
- [0] View/form display objects per bundle/mode (getViewDisplay('node', 'article', 'teaser'))

### Explanation
The display repository resolves effective displays (with mode fallbacks) — used by view builders and custom render code.

### Question 89

**Domain:** Drupal Core API

What does `hook_entity_view_mode_info_alter()` change?

### Options
- Available view modes per entity type (labels, status) discovered from config
- Menu items
- User permissions
- Cron intervals

### Correct Answers
- [0] Available view modes per entity type (labels, status) discovered from config

### Explanation
View mode info alters adjust the mode registry (e.g. forcing modes on/off for entity types).

### Question 90

**Domain:** Drupal Core API

What does the 'plugin.manager.field.field_type' do?

### Options
- Discovers field type plugins and instantiates them for field storage definitions
- Manages themes
- Sends emails
- Clears caches

### Correct Answers
- [0] Discovers field type plugins and instantiates them for field storage definitions

### Explanation
The field type manager maps storage definitions to typed item classes, powering schema and property handling.

### Question 91

**Domain:** Drupal Core API

What does `FieldStorageConfig` vs `FieldConfig` represent?

### Options
- Storage (per field name, cardinality, settings shared across bundles) vs instance config (per bundle label/widget defaults)
- Two databases
- Storage is for files only
- They are identical

### Correct Answers
- [0] Storage (per field name, cardinality, settings shared across bundles) vs instance config (per bundle label/widget defaults)

### Explanation
Splitting storage/instance lets one field attach to many bundles with per-bundle settings — mirrored in the config YAML files.

### Question 92

**Domain:** Drupal Core API

What does `hook_entity_storage_load()` do?

### Options
- Act on freshly loaded entities from storage (post-load enrichment for all entities of a type)
- Delete storage
- It themes entities
- It caches users

### Correct Answers
- [0] Act on freshly loaded entities from storage (post-load enrichment for all entities of a type)

### Explanation
storage_load fires after loading (before hook_entity_load-style handling) — the remaining post-load hook for transformations.

### Question 93

**Domain:** Drupal Core API

What is the 'entity.last_installed_schema' repository for?

### Options
- Tracking installed entity/field definitions to compute storage updates for update hooks
- A theme registry
- A user log
- A queue store

### Correct Answers
- [0] Tracking installed entity/field definitions to compute storage updates for update hooks

### Explanation
The repository stores last-installed definitions; the definition update manager diffs current vs installed to apply changes.

### Question 94

**Domain:** Drupal Core API

What does `hook_entity_type_build()` do that hook_entity_type_alter() doesn't?

### Options
- Modify the module's own/any entity type definitions during build (before alter hooks run)
- It deletes entity types
- It themes entities
- It sends mail

### Correct Answers
- [0] Modify the module's own/any entity type definitions during build (before alter hooks run)

### Explanation
build hooks construct definitions (providers can adjust their own); alter hooks run after for cross-module tweaks.

### Question 95

**Domain:** Drupal Core API

What does the 'path.validator' service check?

### Options
- Whether a path/route is valid and accessible (used by menu link validation)
- File paths only
- CSS selectors
- Email addresses

### Correct Answers
- [0] Whether a path/route is valid and accessible (used by menu link validation)

### Explanation
path.validator confirms internal paths resolve to routes with access — powering menu link UI validation.

### Question 96

**Domain:** Drupal Core API

What does `Url::fromRoute('<current>')` generate?

### Options
- A URL for the current route (with parameters) — handy for self-referential links/forms
- The homepage
- An external URL
- A file path

### Correct Answers
- [0] A URL for the current route (with parameters) — handy for self-referential links/forms

### Explanation
Special route names (<current>, <front>, <none>) cover common URL cases without hardcoding paths.

### Question 97

**Domain:** Drupal Core API

What does `Link::fromTextAndUrl()` produce?

### Options
- A Link object renderable as an anchor with text/attributes — or ->toRenderable() for render arrays
- A menu entity
- A redirect
- A file

### Correct Answers
- [0] A Link object renderable as an anchor with text/attributes — or ->toRenderable() for render arrays

### Explanation
Link objects encapsulate text+URL with rendering — the typed way to build links in code.

### Question 98

**Domain:** Drupal Core API

What does the 'redirect.repository' (contrib Redirect) provide?

### Options
- Lookup/storage of redirect entities by source path for 301 handling
- DNS records
- Theme regions
- Cron jobs

### Correct Answers
- [0] Lookup/storage of redirect entities by source path for 301 handling

### Explanation
Redirect module's repository resolves source paths to target redirects — integrated via an exception subscriber issuing 301s.

### Question 99

**Domain:** Drupal Core API

What does `hook_menu_local_tasks_alter()` modify?

### Options
- Local task (tab) definitions — titles, weights, access on existing tabs
- Menu blocks only
- Theme CSS
- User roles

### Correct Answers
- [0] Local task (tab) definitions — titles, weights, access on existing tabs

### Explanation
Local task alters adjust discovered tabs (e.g. renaming 'View' on node pages) without touching routes.

### Question 100

**Domain:** Drupal Core API

What does the 'plugin.manager.menu.local_task' provide?

### Options
- Discovery/instantiation of local task plugins defined in *.links.task.yml
- Task scheduling
- User management
- File handling

### Correct Answers
- [0] Discovery/instantiation of local task plugins defined in *.links.task.yml

### Explanation
Local tasks are plugins discovered from YAML derivatives per route — the tab system on entity/admin pages.

### Question 101

**Domain:** Drupal Core API

What does the 'plugin.manager.menu.contextual_link' manage?

### Options
- Contextual link plugins (*.links.contextual.yml) powering the pencil edit menus on rendered content
- User context only
- Cron contexts
- Theme settings

### Correct Answers
- [0] Contextual link plugins (*.links.contextual.yml) powering the pencil edit menus on rendered content

### Explanation
Contextual links attach edit shortcuts via render array metadata; the plugin manager discovers definitions across modules.

### Question 102

**Domain:** Drupal Core API

What does `hook_local_tasks_alter()` vs `hook_menu_links_discovered_alter()` differ on?

### Options
- Tasks alter affects tab plugins; discovered links alter affects menu link plugin definitions
- They are identical
- One is for themes
- One is for cron

### Correct Answers
- [0] Tasks alter affects tab plugins; discovered links alter affects menu link plugin definitions

### Explanation
Distinct plugin systems: local tasks (tabs), contextual links (pencil menus), menu links (navigation) — each with its own alter.

### Question 103

**Domain:** Drupal Core API

What does the Form API '#tree' => TRUE control?

### Options
- Nested value structure in $form_state->getValues() mirroring element hierarchy
- Theme trees
- Menu trees
- Cache trees

### Correct Answers
- [0] Nested value structure in $form_state->getValues() mirroring element hierarchy

### Explanation
The #tree property preserves hierarchy in submitted values (parents[nested][field]) — essential for compound elements.

### Question 104

**Domain:** Drupal Core API

What does `$form_state->getValue('field_x')` vs `->getValues()` return?

### Options
- A single element's submitted value vs the full values array
- Draft vs published content
- Config vs state
- JSON vs XML

### Correct Answers
- [0] A single element's submitted value vs the full values array

### Explanation
FormState accessors read user input; getValue with nested keys retrieves structured values when #tree is used.

### Question 105

**Domain:** Drupal Core API

What does `$form_state->setValue()` / `->setValues()` enable in submit handlers?

### Options
- Overriding computed/normalized values before other handlers consume them
- Deleting the form
- Changing themes
- Redirecting users

### Correct Answers
- [0] Overriding computed/normalized values before other handlers consume them

### Explanation
Handlers normalize input via setValue (trim, map IDs) so downstream handlers/entities receive clean data.

### Question 106

**Domain:** Drupal Core API

What is '#value_callback' on a form element?

### Options
- A function deriving the element's value from raw input (custom input parsing)
- A theme hook
- A cron callback
- A cache clear

### Correct Answers
- [0] A function deriving the element's value from raw input (custom input parsing)

### Explanation
value_callback customizes how raw POST data becomes element values — used by date/datetime compound elements.

### Question 107

**Domain:** Drupal Core API

What does the 'managed_file' element provide over 'file'?

### Options
- AJAX upload with File entity creation, usage tracking, and progress handling
- Plain HTML file input only
- It uploads to external CDNs only
- It disables uploads

### Correct Answers
- [0] AJAX upload with File entity creation, usage tracking, and progress handling

### Explanation
managed_file integrates uploads into Drupal's file system (temp→permanent lifecycle), the standard file input element.

### Question 108

**Domain:** Drupal Core API

What does '#default_value' do for entity form widgets?

### Options
- Pre-populates widget values when the form loads (entity values or defaults)
- It caches the form
- It validates input
- It submits the form

### Correct Answers
- [0] Pre-populates widget values when the form loads (entity values or defaults)

### Explanation
Widgets read entity values as defaults; custom forms set #default_value to prefill elements.

### Question 109

**Domain:** Drupal Core API

What does `#limit_validation_errors` on a submit button do?

### Options
- Restricts validation to specified element sections (partial submits like 'Add another item')
- It disables all validation always
- It limits users
- It caches errors

### Correct Answers
- [0] Restricts validation to specified element sections (partial submits like 'Add another item')

### Explanation
Multistep/AJAX forms use limited validation so auxiliary buttons don't trigger full-form errors.

### Question 110

**Domain:** Drupal Core API

What does the 'form_builder' service provide?

### Options
- buildForm($form_id, $form_state) / getForm(FormInterface) programmatic form construction
- Theme building
- Menu building
- Cache building

### Correct Answers
- [0] buildForm($form_id, $form_state) / getForm(FormInterface) programmatic form construction

### Explanation
form.builder renders any form outside routes — embedding forms in blocks, modals, or controllers.

### Question 111

**Domain:** Drupal Core API

What does `FormState::setRedirectUrl()` vs `setRedirect()` accept?

### Options
- Url objects vs route names with parameters — both steering post-submit navigation
- Only strings
- Only nodes
- Only files

### Correct Answers
- [0] Url objects vs route names with parameters — both steering post-submit navigation

### Explanation
Redirect helpers accept route-based or URL-based destinations; response redirects occur after processing.

### Question 112

**Domain:** Drupal Core API

What does the '#submit' property on a button override/add?

### Options
- Additional submit callbacks for that button beyond the form's submitForm()
- The button label
- The theme
- Form caching

### Correct Answers
- [0] Additional submit callbacks for that button beyond the form's submitForm()

### Explanation
Per-button #submit handlers run before form-level handlers — multi-action forms route logic per button.

### Question 113

**Domain:** Drupal Core API

What does '#validate' on an element add?

### Options
- Extra validation callbacks for that element in addition to form validateForm()
- CSS validation
- Theme checks
- User bans

### Correct Answers
- [0] Extra validation callbacks for that element in addition to form validateForm()

### Explanation
Element-level #validate callbacks scope checks to specific elements (range checks, cross-field rules).

### Question 114

**Domain:** Drupal Core API

What does the Render API's '#cache' => ['max-age' => 0] do?

### Options
- Marks output uncacheable (bubbles up, disabling page cache for that response)
- Caches forever
- Caches per user only
- It minifies output

### Correct Answers
- [0] Marks output uncacheable (bubbles up, disabling page cache for that response)

### Explanation
max-age 0 propagates up the render tree marking the whole response uncacheable — use sparingly; prefer contexts/tags.

### Question 115

**Domain:** Drupal Core API

What does `RendererInterface::renderRoot()` vs `render()` differ on?

### Options
- renderRoot renders a complete top-level array (final response); render is for nested arrays during building
- They are identical
- render is for cron
- renderRoot is for themes only

### Correct Answers
- [0] renderRoot renders a complete top-level array (final response); render is for nested arrays during building

### Explanation
renderRoot finalizes placeholder strategies/attachments for full responses; nested renders use render/renderPlain appropriately.

### Question 116

**Domain:** Drupal Core API

What is the '#pre_render' callback's role?

### Options
- Last-chance transformation of a render array immediately before theming
- Post-render cleanup
- User login
- Cache clearing

### Correct Answers
- [0] Last-chance transformation of a render array immediately before theming

### Explanation
pre_render callbacks finalize arrays (add wrappers, compute values) — used by elements like forms and containers.

### Question 117

**Domain:** Drupal Core API

What does '#post_render' receive?

### Options
- The rendered markup string for final string-level manipulation (rarely needed)
- Database rows
- User objects
- Config entities

### Correct Answers
- [0] The rendered markup string for final string-level manipulation (rarely needed)

### Explanation
post_render callbacks operate on finished markup — last resort when array-level hooks can't express the change.

### Question 118

**Domain:** Drupal Core API

What does `hook_element_info_alter()` change?

### Options
- Element plugin definitions (#process, #theme defaults) for existing element types
- New routes
- User roles
- Cron jobs

### Correct Answers
- [0] Element plugin definitions (#process, #theme defaults) for existing element types

### Explanation
Element alters adjust how core element types build (e.g. adding a #process step to all textfields).

### Question 119

**Domain:** Drupal Core API

What does the 'main_content_renderer' negotiate?

### Options
- How controller results render per request format (HTML dialog/page vs JSON via 'main_content_page_*' renderers)
- The admin theme
- User avatars
- Cron output

### Correct Answers
- [0] How controller results render per request format (HTML dialog/page vs JSON via 'main_content_page_*' renderers)

### Explanation
Main content renderers wrap controller output per format/modal — the pipeline turning render arrays into responses.

### Question 120

**Domain:** Drupal Core API

What does `hook_page_attachments_alter()` commonly remove?

### Options
- Unwanted libraries/head elements added by core or contrib (e.g. stripping a core CSS library site-wide)
- User accounts
- Menu links
- Cron entries

### Correct Answers
- [0] Unwanted libraries/head elements added by core or contrib (e.g. stripping a core CSS library site-wide)

### Explanation
Attachments alters receive the built array; unsetting entries removes assets/metas globally per page type.

### Question 121

**Domain:** Drupal Core API

What does the Config API's `getEditable()` vs `get()` differ on?

### Options
- getEditable returns a mutable config object for writes; get returns immutable cached reads
- They are identical
- get() writes faster
- getEditable is for themes

### Correct Answers
- [0] getEditable returns a mutable config object for writes; get returns immutable cached reads

### Explanation
Immutable reads are performance-cached; edits require the editable variant ending with ->save().

### Question 122

**Domain:** Drupal Core API

What does `$config->set('key', $value)->save()` trigger?

### Options
- Config write plus ConfigCrudEvent dispatch so subscribers react
- Nothing else
- Only file writes
- Theme rebuilds

### Correct Answers
- [0] Config write plus ConfigCrudEvent dispatch so subscribers react

### Explanation
Config CRUD events let modules respond to configuration changes (cache clears, derived updates).

### Question 123

**Domain:** Drupal Core API

What does `hook_config_schema_info_alter()` modify?

### Options
- Config schema definitions (types/mappings) discovered from config/schema YAML
- Database schema
- Theme schema
- User schema

### Correct Answers
- [0] Config schema definitions (types/mappings) discovered from config/schema YAML

### Explanation
Schema alters adjust type mappings — e.g. extending another module's config structure with new keys.

### Question 124

**Domain:** Drupal Core API

What does the 'config.typed' service provide?

### Options
- Typed data wrappers over config values enabling validation and translation introspection
- Typed CSS
- Typed users
- Typed routes

### Correct Answers
- [0] Typed data wrappers over config values enabling validation and translation introspection

### Explanation
Typed config (config.typed) applies schema to config values, powering validation during imports and form handling.

### Question 125

**Domain:** Drupal Core API

What does `StateInterface::set()`/`get()` store best? (Choose two)

### Options
- Environment-specific runtime values (last cron, flags, timestamps)
- Data that must not be exported via config sync
- Content entities
- Theme templates

### Correct Answers
- [0] Environment-specific runtime values (last cron, flags, timestamps)
- [1] Data that must not be exported via config sync

### Explanation
State holds ephemeral per-environment values; exporting them would cause config drift and overwrites.

### Question 126

**Domain:** Drupal Core API

What does `KeyValueStoreExpirableInterface` add over plain keyvalue?

### Options
- setWithExpire()/TTL semantics for auto-expiring entries (used by tempstore-like systems)
- Encryption
- Compression
- Versioning

### Correct Answers
- [0] setWithExpire()/TTL semantics for auto-expiring entries (used by tempstore-like systems)

### Explanation
Expirable keyvalue backs tempstore (form drafts) and lock-like patterns with automatic cleanup.

### Question 127

**Domain:** Drupal Core API

What is 'tempstore' (tempstore.private/shared) designed for?

### Options
- Temporary per-user or cross-request data (multistep forms, preview drafts) with expiry
- Permanent content
- Cache tags
- Theme storage

### Correct Answers
- [0] Temporary per-user or cross-request data (multistep forms, preview drafts) with expiry

### Explanation
TempStore persists transient state across requests (private per session, shared across users) — powering wizards and Layout Builder drafts.

### Question 128

**Domain:** Drupal Core API

What does the 'user.private_tempstore' vs 'shared_tempstore' differ on?

### Options
- Private tempstore isolates data per user/session; shared is visible across users (e.g. entity locks)
- They are identical
- Shared is encrypted only
- Private is for admins only

### Correct Answers
- [0] Private tempstore isolates data per user/session; shared is visible across users (e.g. entity locks)

### Explanation
Private vs shared tempstores suit drafts vs cross-user coordination (Layout Builder locks use shared stores).

### Question 129

**Domain:** Drupal Core API

What does `hook_cron()` execution environment imply for heavy tasks?

### Options
- Cron may be triggered via web/CLI; heavy work should queue items rather than run inline
- Cron runs per user click
- Cron is instant always
- Cron requires JS

### Correct Answers
- [0] Cron may be triggered via web/CLI; heavy work should queue items rather than run inline

### Explanation
Inline heavy cron risks timeouts; Queue API spreads processing across runs with leases and retries.

### Question 130

**Domain:** Drupal Core API

What does the 'cron' service (cron->run()) allow?

### Options
- Triggering cron programmatically (drush cron, automated runs) with locking semantics
- Clearing caches
- Sending mail
- Editing nodes

### Correct Answers
- [0] Triggering cron programmatically (drush cron, automated runs) with locking semantics

### Explanation
The cron service coordinates hook_cron invocations and queue processing under lock to prevent overlap.

### Question 131

**Domain:** Drupal Core API

What does the `plugin.manager.block` `createInstance($id, $config)` produce?

### Options
- A block plugin instance configured with per-placement settings, ready to build() render arrays
- A block entity only
- A theme region
- A menu item

### Correct Answers
- [0] A block plugin instance configured with per-placement settings, ready to build() render arrays

### Explanation
Block plugins are instantiated per placement with merged configuration; the block config entity stores those settings.

### Question 132

**Domain:** Drupal Core API

What does `BlockBase::build()` return?

### Options
- A render array for the block content (with cacheability metadata)
- A string of SQL
- A user object
- A route definition

### Correct Answers
- [0] A render array for the block content (with cacheability metadata)

### Explanation
build() outputs render arrays; blockAccess() controls visibility per account — both required for custom block plugins.

### Question 133

**Domain:** Drupal Core API

What does `hook_block_access()` control?

### Options
- Per-block access overrides beyond plugin blockAccess(), deciding visibility for specific blocks
- Theme access
- User login
- Cron access

### Correct Answers
- [0] Per-block access overrides beyond plugin blockAccess(), deciding visibility for specific blocks

### Explanation
Block access hooks centralize cross-cutting visibility rules (e.g. hiding blocks by section) with AccessResult returns.

### Question 134

**Domain:** Drupal Core API

What does the 'plugin.manager.condition' evaluate?

### Options
- Condition plugins (node type, path, role) deciding block visibility per request context
- Weather conditions
- SQL conditions only
- PHP syntax

### Correct Answers
- [0] Condition plugins (node type, path, role) deciding block visibility per request context

### Explanation
Conditions are plugins with context definitions; blocks evaluate them via the condition manager each request.

### Question 135

**Domain:** Drupal Core API

What is a 'context provider' service (e.g. node.node_route_context)?

### Options
- Supplies context objects (current node from route) consumable by blocks/conditions
- It provides themes
- It stores sessions
- It runs cron

### Correct Answers
- [0] Supplies context objects (current node from route) consumable by blocks/conditions

### Explanation
Context providers extract request-level objects; plugins declare context_requirements mapping onto these providers.

### Question 136

**Domain:** Drupal Core API

What does `EventDispatcherInterface::dispatch($event)` do?

### Options
- Notifies all subscribers registered for the event's class/name in priority order
- It queues emails
- It renders pages
- It clears caches

### Correct Answers
- [0] Notifies all subscribers registered for the event's class/name in priority order

### Explanation
Dispatching events triggers typed subscriber methods; events can be mutable allowing subscribers to modify payloads.

### Question 137

**Domain:** Drupal Core API

What does `getSubscribedEvents()` return for a subscriber?

### Options
- A map of event names/classes to handler methods (optionally with priorities)
- A list of routes
- Theme hooks
- Cron times

### Correct Answers
- [0] A map of event names/classes to handler methods (optionally with priorities)

### Explanation
Subscribers declare handlers per event; priority integers order execution among multiple listeners.

### Question 138

**Domain:** Drupal Core API

What kernel events can modules subscribe to? (Choose two)

### Options
- KernelEvents::REQUEST and KernelEvents::RESPONSE for request/response pipeline interception
- KernelEvents::VIEW for controller result transformation
- KernelEvents::INSTALL for module installs
- KernelEvents::CRON for scheduled tasks

### Correct Answers
- [0] KernelEvents::REQUEST and KernelEvents::RESPONSE for request/response pipeline interception
- [1] KernelEvents::VIEW for controller result transformation

### Explanation
Symfony kernel events (REQUEST, CONTROLLER, VIEW, RESPONSE, EXCEPTION) let modules intercept the HTTP lifecycle.

### Question 139

**Domain:** Drupal Core API

What does subscribing to `KernelEvents::EXCEPTION` enable?

### Options
- Custom handling of thrown exceptions (custom 404/403 pages, API error formats)
- Faster pages
- Cache clears
- User registration

### Correct Answers
- [0] Custom handling of thrown exceptions (custom 404/403 pages, API error formats)

### Explanation
Exception subscribers convert exceptions to responses — e.g. JSON error payloads for API paths or redirect-based 404 handling.

### Question 140

**Domain:** Drupal Core API

What does `hook_entity_bundle_create()` fire on?

### Options
- Creation of a new bundle (content type, vocabulary) enabling reactions like default config
- Entity deletion
- User login
- Cron runs

### Correct Answers
- [0] Creation of a new bundle (content type, vocabulary) enabling reactions like default config

### Explanation
Bundle lifecycle hooks (create/delete) let modules attach per-bundle configuration when editors create types.

### Question 141

**Domain:** Drupal Core API

What does the Database API's `->condition('n.status', [0, 1], 'IN')` build?

### Options
- An IN clause matching any listed value
- A BETWEEN clause
- A LIKE clause
- A JOIN

### Correct Answers
- [0] An IN clause matching any listed value

### Explanation
Condition operators (IN, NOT IN, BETWEEN, LIKE, IS NULL) cover common SQL predicates in the query builder.

### Question 142

**Domain:** Drupal Core API

What does `db_query()` placeholders (':name') protect against?

### Options
- SQL injection by binding values separately from the SQL text
- Slow queries
- Syntax highlighting
- Nothing; placeholders are cosmetic

### Correct Answers
- [0] SQL injection by binding values separately from the SQL text

### Explanation
Placeholders parameterize queries; concatenating raw input into SQL is the classic injection vector — never do it.

### Question 143

**Domain:** Drupal Core API

What does a database transaction (`db_transaction()`) guarantee?

### Options
- Multi-statement atomicity: rollback on exception within scope, commit at scope end
- Faster writes always
- Automatic backups
- Replication setup

### Correct Answers
- [0] Multi-statement atomicity: rollback on exception within scope, commit at scope end

### Explanation
Transaction objects scope commit/rollback; nested transactions use savepoints, keeping multi-write operations consistent.

### Question 144

**Domain:** Drupal Core API

What does `->forUpdate()` on a select query do?

### Options
- Adds SELECT ... FOR UPDATE row locking within transactions
- It updates rows immediately
- It caches the query
- It duplicates rows

### Correct Answers
- [0] Adds SELECT ... FOR UPDATE row locking within transactions

### Explanation
FOR UPDATE locks selected rows until transaction end — preventing race conditions in read-then-write flows.

### Question 145

**Domain:** Drupal Core API

What does `merge queries (db_merge)` accomplish?

### Options
- Insert-or-update semantics (upsert) keyed on a column, e.g. counters tables
- Table merging
- Database merging
- User merging

### Correct Answers
- [0] Insert-or-update semantics (upsert) keyed on a column, e.g. counters tables

### Explanation
db_merge keys update when a record exists, else insert — ideal for counters and idempotent imports.

### Question 146

**Domain:** Drupal Core API

What does the 'entity.query.sql' vs entity.query difference imply?

### Options
- SQL entity queries (default) vs backend-specific implementations; entity.query abstracts the storage's query engine
- They are unrelated
- One is for themes
- One is for users only

### Correct Answers
- [0] SQL entity queries (default) vs backend-specific implementations; entity.query abstracts the storage's query engine

### Explanation
Entity queries adapt to storage backends; the SQL implementation is default but the API stays storage-agnostic.

### Question 147

**Domain:** Drupal Core API

What does `->range(0, 10)` vs `->pager(10)` differ on in queries?

### Options
- range limits results statically; pager adds pagination tied to the current page parameter
- They are identical
- pager is faster always
- range paginates automatically

### Correct Answers
- [0] range limits results statically; pager adds pagination tied to the current page parameter

### Explanation
pager() integrates with the pager system rendering navigation; range() simply caps rows for fixed listings.

### Question 148

**Domain:** Drupal Core API

What does `hook_query_TAG_alter()` receive?

### Options
- The query alterable object (SelectQuery) for tagged queries, modifiable before execution
- Render arrays
- User accounts
- Config objects

### Correct Answers
- [0] The query alterable object (SelectQuery) for tagged queries, modifiable before execution

### Explanation
Tagged query alters modify specific queries (node access, entity queries with tags) — the SQL-level extension point.

### Question 149

**Domain:** Drupal Core API

What does the 'datetime.time' service provide over PHP time()?

### Options
- getRequestTime()/getCurrentTime() with request-consistent timestamps
- Timezone conversions only
- Sleep functions
- Cron parsing

### Correct Answers
- [0] getRequestTime()/getCurrentTime() with request-consistent timestamps

### Explanation
datetime.time exposes request time (consistent within a request) — injectable and mockable in tests.

### Question 150

**Domain:** Drupal Core API

What does `DateTimePlus` add over PHP's DateTime?

### Options
- Drupal-aware date handling (translation, validation tolerance) used across date fields
- Faster parsing only
- SQL generation
- Calendar UI

### Correct Answers
- [0] Drupal-aware date handling (translation, validation tolerance) used across date fields

### Explanation
DateTimePlus wraps DateTime with Drupal locale/format integration and forgiving parsing for field input.

### Question 151

**Domain:** Drupal Core API

What does the 'file.usage' service track?

### Options
- Where files are referenced (module/type/id/count) so unused temporary files can be cleaned
- Disk space only
- User logins
- Cron runs

### Correct Answers
- [0] Where files are referenced (module/type/id/count) so unused temporary files can be cleaned

### Explanation
file.usage->add()/delete() records references; cron deletes files with zero usage after the temporary window.

### Question 152

**Domain:** Drupal Core API

What does `file_save_data()` vs `file_save_upload()` differ on?

### Options
- save_data writes provided content (generated files) as a File entity; save_upload handles HTTP uploads
- They are identical
- One is for images only
- save_data is deprecated entirely

### Correct Answers
- [0] save_data writes provided content (generated files) as a File entity; save_upload handles HTTP uploads

### Explanation
Programmatic file creation uses save_data (e.g. generated PDFs); upload flows use save_upload/managed_file elements.

### Question 153

**Domain:** Drupal Core API

What does `hook_file_url_alter()` change?

### Options
- Generated file URLs (e.g. rewriting to a CDN domain)
- File permissions
- Upload size limits
- Image styles

### Correct Answers
- [0] Generated file URLs (e.g. rewriting to a CDN domain)

### Explanation
file URL alters rewrite public file URLs — the classic CDN integration point (also done via stream wrappers).

### Question 154

**Domain:** Drupal Core API

What does the 'mail.manager' `mail()` flow require modules to define?

### Options
- hook_mail() composing the message for a given key before sending
- An SMTP server
- A mail theme
- User approval

### Correct Answers
- [0] hook_mail() composing the message for a given key before sending

### Explanation
mail.manager->mail(module, key, to, langcode, params) invokes hook_mail for composition then sends via the mail backend plugin.

### Question 155

**Domain:** Drupal Core API

What does the 'plugin.manager.mail' swap when configuring SMTP modules?

### Options
- The mail backend plugin (php_mail default → SMTP) handling actual delivery
- The theme layer
- The user system
- Cron scheduling

### Correct Answers
- [0] The mail backend plugin (php_mail default → SMTP) handling actual delivery

### Explanation
Mail plugins implement format()/mail(); swapping backends routes delivery through SMTP/APIs transparently.

### Question 156

**Domain:** Drupal Core API

What does `Token::replace()` handle?

### Options
- Replacing [node:title]-style tokens in text using provided entity data
- String escaping only
- URL parsing
- Cache clearing

### Correct Answers
- [0] Replacing [node:title]-style tokens in text using provided entity data

### Explanation
token->replace($text, $data, $options) renders token placeholders — with bubbleable metadata for correct caching.

### Question 157

**Domain:** Drupal Core API

What does the Language API's `language_manager()->getCurrentLanguage()` affect in code?

### Options
- Content/interface language context for translations and entity loading per language
- The theme colors
- PHP version
- Database engine

### Correct Answers
- [0] Content/interface language context for translations and entity loading per language

### Explanation
Current language drives t(), entity translations, and date formats; negotiation order determines it per request.

### Question 158

**Domain:** Drupal Core API

What does `$entity->getTranslation('fr')` return?

### Options
- The entity translation object for French (creating it if allowed) with translated field values
- A French user
- A route
- A theme

### Correct Answers
- [0] The entity translation object for French (creating it if allowed) with translated field values

### Explanation
getTranslation()/hasTranslation() manage per-language entity instances; entity.repository->getTranslationFromContext picks the best match.

### Question 159

**Domain:** Drupal Core API

What does `t()` with `@placeholder` vs `:placeholder` vs `%placeholder` mean?

### Options
- @ escaped, : URL-safe/absolute URL, % escaped+emphasis (legacy em styling) — placeholder sanitization levels
- They are identical
- @ is for URLs only
- % is unescaped always

### Correct Answers
- [0] @ escaped, : URL-safe/absolute URL, % escaped+emphasis (legacy em styling) — placeholder sanitization levels

### Explanation
Placeholder prefixes control sanitization; choosing correctly prevents XSS while allowing intended markup/links.

### Question 160

**Domain:** Drupal Core API

What does `format_plural()` produce?

### Options
- Singular/plural-aware translated strings with counts ('1 item' / '@count items')
- Date formats
- User plurals
- CSS plurals

### Correct Answers
- [0] Singular/plural-aware translated strings with counts ('1 item' / '@count items')

### Explanation
format_plural maps counts to language-specific plural forms via PluralTranslatableMarkup — required for correct i18n.

### Question 161

**Domain:** Drupal Core API

What does the AJAX framework's `AjaxResponse` contain?

### Options
- A list of commands (insert/replace/remove/css/invoke) serialized to JSON for ajax.js
- Raw HTML only
- SQL results
- User sessions

### Correct Answers
- [0] A list of commands (insert/replace/remove/css/invoke) serialized to JSON for ajax.js

### Explanation
Server-side command objects map to client DOM operations; the response Content-Type triggers Drupal's ajax handler.

### Question 162

**Domain:** Drupal Core API

What does `OpenDialogCommand` do?

### Options
- Opens a jQuery UI dialog with given content/options on the client
- Opens a new browser tab always
- Opens a file dialog
- Opens cron logs

### Correct Answers
- [0] Opens a jQuery UI dialog with given content/options on the client

### Explanation
Dialog commands (OpenDialogCommand/OpenModalDialogCommand) let AJAX responses spawn dialogs server-driven.

### Question 163

**Domain:** Drupal Core API

What does the '#ajax' => ['wrapper' => 'my-wrapper'] require in markup?

### Options
- An element with id="my-wrapper" present (typically a container) for the replace target
- Nothing; wrappers are created magically
- A special theme
- A cron run

### Correct Answers
- [0] An element with id="my-wrapper" present (typically a container) for the replace target

### Explanation
AJAX replace targets existing wrapper IDs; missing wrappers break updates — build them via '#prefix'/'#suffix' or container attributes.

### Question 164

**Domain:** Drupal Core API

What does `hook_ajax_render_alter()` modify?

### Options
- The command array before an AJAX response sends (add/remove commands)
- Page themes
- User roles
- Cron timing

### Correct Answers
- [0] The command array before an AJAX response sends (add/remove commands)

### Explanation
ajax render alters adjust outgoing commands — e.g. appending a message command after any AJAX action.

### Question 165

**Domain:** Drupal Core API

What does the Update API's `hook_update_N()` numbering enforce?

### Options
- Sequential execution tracked per module in keyvalue; numbers must increase with each release
- Random order
- Alphabetical order
- Per-user updates

### Correct Answers
- [0] Sequential execution tracked per module in keyvalue; numbers must increase with each release

### Explanation
The system records last-run schema per module; update.php/drush run pending numbers in order exactly once.

### Question 166

**Domain:** Drupal Core API

What does `hook_post_update_NAME()` run after?

### Options
- After hook_update_N functions, for content/config operations needing updated code (post-updates)
- Before all updates
- During theme install
- During cron only

### Correct Answers
- [0] After hook_update_N functions, for content/config operations needing updated code (post-updates)

### Explanation
post_update hooks handle content-level migrations after schema updates complete (e.g. resaving entities with new logic).

### Question 167

**Domain:** Drupal Core API

What does `&$sandbox` in update hooks enable?

### Options
- Batch-style chunked updates across requests with progress tracking for large datasets
- Sandboxed PHP execution
- User sandboxes
- File sandboxes

### Correct Answers
- [0] Batch-style chunked updates across requests with progress tracking for large datasets

### Explanation
Update hooks accepting &$sandbox iterate (setting $sandbox['#finished'] < 1) processing thousands of entities safely.

### Question 168

**Domain:** Drupal Core API

What does the Batch API's 'operations' => [[$callable, [$args]]] structure describe?

### Options
- A queue of callbacks with arguments executed across requests until finished
- SQL operations only
- Theme operations
- User operations

### Correct Answers
- [0] A queue of callbacks with arguments executed across requests until finished

### Explanation
Batch definitions list operations + finished callback; the runner iterates with progress, surviving request limits.

### Question 169

**Domain:** Drupal Core API

What does `$context['results']` accumulate in batches?

### Options
- Per-operation outputs available to the finished callback (counts, errors, IDs)
- Cache tags
- Theme names
- User sessions

### Correct Answers
- [0] Per-operation outputs available to the finished callback (counts, errors, IDs)

### Explanation
results collect operation artifacts; the finished callback summarizes (messages, redirects) when processing completes.

### Question 170

**Domain:** Drupal Core API

What does `batch_process()` trigger from a form submit?

### Options
- Redirect into the batch runner page processing the batch set via batch_set()
- Immediate cron run
- Cache clear
- User logout

### Correct Answers
- [0] Redirect into the batch runner page processing the batch set via batch_set()

### Explanation
Forms set a batch then call batch_process($destination) handing users to the progress UI, returning to the destination after.

### Question 171

**Domain:** Drupal Core API

What does the Queue API's `createItem($data)` enqueue?

### Options
- A serialized payload for later processing by the queue's worker plugin
- A database row only
- A cache entry
- A user session

### Correct Answers
- [0] A serialized payload for later processing by the queue's worker plugin

### Explanation
Queues store items (database backend default) claimed with leases; workers processItem() each claimed item.

### Question 172

**Domain:** Drupal Core API

What does `claimItem($lease_time)` guarantee?

### Options
- One worker holds the item for the lease duration; expired leases make items available again
- Items process instantly
- Items delete after claim
- Claims are random

### Correct Answers
- [0] One worker holds the item for the lease duration; expired leases make items available again

### Explanation
Leases enable at-least-once processing with crash recovery — expired items return to the queue for retry.

### Question 173

**Domain:** Drupal Core API

What does a `QueueWorker` plugin's `cron` annotation property set?

### Options
- Maximum seconds per cron run allocated to processing that queue
- The queue name
- The worker's salary
- The item TTL

### Correct Answers
- [0] Maximum seconds per cron run allocated to processing that queue

### Explanation
Cron processes queue workers up to their time budget; heavy queues get longer windows or dedicated runners.

### Question 174

**Domain:** Drupal Core API

What does `suspendQueue()`-style control (Ultimate Cron) add operationally?

### Options
- Pausing specific queues/jobs during incidents without code deploys
- Deleting queues permanently
- Faster queues
- Queue theming

### Correct Answers
- [0] Pausing specific queues/jobs during incidents without code deploys

### Explanation
Operational queue management (suspend/inspect/requeue) comes from contrib tooling; core provides the API primitives.

### Question 175

**Domain:** Drupal Core API

What does the 'plugin.manager.queue_worker' discover?

### Options
- QueueWorker plugins (annotations/attributes) mapping queue names to processing classes
- Theme plugins
- User plugins
- Menu plugins

### Correct Answers
- [0] QueueWorker plugins (annotations/attributes) mapping queue names to processing classes

### Explanation
The queue worker manager instantiates workers for cron and manual processing via drush queue:run.

### Question 176

**Domain:** Drupal Core API

What does `hook_theme_suggestions_HOOK()` provide vs `_alter`?

### Options
- New suggestions for a hook (non-alter variant) vs altering the full ordered suggestion list
- They are identical
- One is for CSS
- One is for cron

### Correct Answers
- [0] New suggestions for a hook (non-alter variant) vs altering the full ordered suggestion list

### Explanation
Suggestions hooks add candidates; alter variants reorder/remove the complete set — used for conditional template targeting.

### Question 177

**Domain:** Drupal Core API

What does `hook_preprocess_HOOK()` receive?

### Options
- &$variables array for the theme hook, modifiable before template rendering
- Database rows
- User sessions
- Config YAML

### Correct Answers
- [0] &$variables array for the theme hook, modifiable before template rendering

### Explanation
Preprocess hooks shape template variables by reference; the final variables feed Twig template context.

### Question 178

**Domain:** Drupal Core API

What does the 'theme.manager' service expose?

### Options
- Active theme objects and theme-related operations (getActiveTheme) for code needing theme context
- CSS minification
- User themes
- Cron themes

### Correct Answers
- [0] Active theme objects and theme-related operations (getActiveTheme) for code needing theme context

### Explanation
theme.manager reports the negotiated active theme(s), enabling theme-aware module logic (asset paths, settings).

### Question 179

**Domain:** Drupal Core API

What does `hook_install_tasks()` add to the installer?

### Options
- Additional tasks during site installation (custom profile steps)
- Cron tasks
- User tasks
- Theme tasks

### Correct Answers
- [0] Additional tasks during site installation (custom profile steps)

### Explanation
Install profiles define tasks via install tasks hooks — custom steps like content seeding during installation.

### Question 180

**Domain:** Drupal Core API

What does an install profile's `.profile` file contain?

### Options
- hook_install() and install task logic for the profile (modules to enable, default config/content)
- The site database
- User passwords
- Cron schedule

### Correct Answers
- [0] hook_install() and install task logic for the profile (modules to enable, default config/content)

### Explanation
Profiles package distributions: dependencies in .info.yml, setup logic in .profile, config in config/install.

### Question 181

**Domain:** Drupal Core API

What does `drupal_get_profile()` return?

### Options
- The machine name of the install profile the site was installed with
- A user profile
- A theme profile
- A server profile

### Correct Answers
- [0] The machine name of the install profile the site was installed with

### Explanation
The profile name conditions module behavior across distributions (standard vs minimal vs custom profiles).

### Question 182

**Domain:** Drupal Core API

What does `ModuleInstallerInterface::install(['my_module'])` do programmatically?

### Options
- Installs modules (schema, config, hooks) with dependency resolution
- Only downloads them
- It deletes modules
- It renames modules

### Correct Answers
- [0] Installs modules (schema, config, hooks) with dependency resolution

### Explanation
module_installer handles installation programmatically (setup scripts, tests) mirroring drush en behavior.

### Question 183

**Domain:** Drupal Core API

What does `hook_modules_installed()` fire after?

### Options
- One or more modules complete installation (react with cross-module setup)
- Cron runs
- User logins
- Theme switches

### Correct Answers
- [0] One or more modules complete installation (react with cross-module setup)

### Explanation
Modules-installed hooks coordinate setup spanning multiple modules (wiring config when both are present).

### Question 184

**Domain:** Drupal Core API

What does the 'extension.list.module' service provide?

### Options
- Available module extension info (all known modules, installed state, dependencies)
- A module marketplace
- Theme CSS
- User lists

### Correct Answers
- [0] Available module extension info (all known modules, installed state, dependencies)

### Explanation
Extension lists scan the filesystem/registry for modules/themes with metadata — used by admin UIs and tooling.

### Question 185

**Domain:** Drupal Core API

What does `hook_system_info_alter()` modify?

### Options
- Module/theme .info data (dependencies, hidden status) before presentation/processing
- User info
- Server info
- Theme CSS

### Correct Answers
- [0] Module/theme .info data (dependencies, hidden status) before presentation/processing

### Explanation
Info alters adjust extension metadata — e.g. hiding modules from the modules page or adjusting dependencies.

### Question 186

**Domain:** Drupal Core API

What does the 'breadcrumb.manager' do with builders?

### Options
- Selects the highest-priority builder whose applies() matches, building the breadcrumb per request
- It caches menus
- It builds forms
- It sends mail

### Correct Answers
- [0] Selects the highest-priority builder whose applies() matches, building the breadcrumb per request

### Explanation
Breadcrumb managers iterate tagged builders by priority; the first applicable builder's trail renders.

### Question 187

**Domain:** Drupal Core API

What does `Breadcrumb::addCacheContexts(['route'])` enforce?

### Options
- Breadcrumb cache varies per route — essential since trails differ per page
- Faster crumbs
- User-specific crumbs only
- Nothing; it's decorative

### Correct Answers
- [0] Breadcrumb cache varies per route — essential since trails differ per page

### Explanation
Breadcrumbs carry cacheability like render arrays; route/context variation prevents wrong trails on cached pages.

### Question 188

**Domain:** Drupal Core API

What does the 'menu.tree_storage' vs 'menu.link_tree' service split?

### Options
- Storage persists menu link trees (parameters/depth); link_tree builds renderable trees with access filtering
- Two databases
- Storage is for files
- They are identical

### Correct Answers
- [0] Storage persists menu link trees (parameters/depth); link_tree builds renderable trees with access filtering

### Explanation
Menu trees load via storage parameters (parent, depth); the link tree service transforms them with access checks for rendering.

### Question 189

**Domain:** Drupal Core API

What does `MenuLinkTreeParameters` control?

### Options
- Which part of a menu tree loads (root, depth, expanded parents, active trail)
- Menu colors
- User roles
- Cron timing

### Correct Answers
- [0] Which part of a menu tree loads (root, depth, expanded parents, active trail)

### Explanation
Parameters scope tree loads (used by menu blocks: initial level/depth) and expand the active trail for navigation.

### Question 190

**Domain:** Drupal Core API

What does `hook_translated_menu_link_alter()` affect?

### Options
- Menu link titles/descriptions during translation handling
- Theme translations
- User names
- Cron labels

### Correct Answers
- [0] Menu link titles/descriptions during translation handling

### Explanation
Translated link alters adjust localized menu strings per language context.

### Question 191

**Domain:** Drupal Core API

What does the 'serializer.entity_resolver' do for REST?

### Options
- Resolves incoming entity references/UUIDs in payloads to entities during denormalization
- It resolves DNS
- It resolves themes
- It resolves users only

### Correct Answers
- [0] Resolves incoming entity references/UUIDs in payloads to entities during denormalization

### Explanation
Entity resolution in the serializer maps API payloads back to entities — enabling writes through REST/JSON:API.

### Question 192

**Domain:** Drupal Core API

What does `hook_rest_resource_alter()` (legacy REST module) adjust?

### Options
- REST resource plugin definitions (formats, authentication per resource)
- Theme resources
- User resources
- Cron resources

### Correct Answers
- [0] REST resource plugin definitions (formats, authentication per resource)

### Explanation
Resource alters modify available formats/auth per endpoint — configuring API surface without code changes.

### Question 193

**Domain:** Drupal Core API

What does the 'validation.constraint' plugin manager provide?

### Options
- Discovery of constraint validators usable on typed data/entities (NotNull, Length, custom)
- Form themes
- User passwords
- Cron validation

### Correct Answers
- [0] Discovery of constraint validators usable on typed data/entities (NotNull, Length, custom)

### Explanation
Constraint plugins declare validators; the typed data/entity systems invoke them on validation calls.

### Question 194

**Domain:** Drupal Core API

What does `$entity->validate()` return?

### Options
- An EntityViolationsInterface list of constraint violations (empty when valid)
- TRUE/FALSE only
- Render arrays
- Cache tags

### Correct Answers
- [0] An EntityViolationsInterface list of constraint violations (empty when valid)

### Explanation
Entity validation returns structured violations with property paths/messages — surfaced in forms and REST 422 responses.

### Question 195

**Domain:** Drupal Core API

What does `hook_entity_field_access()` control per field?

### Options
- view/edit access per field item list and account (hiding sensitive fields)
- Field storage
- Field theming only
- Field deletion

### Correct Answers
- [0] view/edit access per field item list and account (hiding sensitive fields)

### Explanation
Field access hooks restrict specific fields per operation/account with AccessResults — beyond entity-level access.

### Question 196

**Domain:** Drupal Core API

What does the 'logger.factory' `get('my_module')` channel isolate?

### Options
- Log messages namespaced per module, filterable by channel in backends
- PHP errors only
- Theme logs
- User logs

### Correct Answers
- [0] Log messages namespaced per module, filterable by channel in backends

### Explanation
Channels organize logs by origin; severity levels route through configured backends (watchdog/syslog/Monolog).

## Debug Code and Troubleshooting

### Question 197

**Domain:** Debug Code and Troubleshooting

What does the 'error_level' setting in settings.php ($config['system.logging']['error_level']) control?

### Options
- Whether errors display on screen: 'hide' (production), 'some', or 'all'/verbose (development)
- Log file rotation
- Cron frequency
- Theme errors only

### Correct Answers
- [0] Whether errors display on screen: 'hide' (production), 'some', or 'all'/verbose (development)

### Explanation
Error display level gates on-screen PHP error output; production hides errors (logs still capture them) while dev shows verbose traces.

### Question 198

**Domain:** Debug Code and Troubleshooting

What does a WSOD (white screen of death) usually indicate and where do you look first? (Choose two)

### Options
- A fatal PHP error with display_errors off; check web server/PHP error logs
- Increase memory_limit or fix the syntax/fatal error reported in logs
- It means the database is perfect
- It is caused by the theme registry being too small

### Correct Answers
- [0] A fatal PHP error with display_errors off; check web server/PHP error logs
- [1] Increase memory_limit or fix the syntax/fatal error reported in logs

### Explanation
WSODs are unrendered fatals — logs reveal memory exhaustion, syntax errors, or missing classes; fixing the underlying error restores output.

### Question 199

**Domain:** Debug Code and Troubleshooting

What does `drush watchdog:show` (or the dblog UI) provide?

### Options
- Recent log messages with severity/channel filters for runtime debugging
- Server uptime
- Cache stats only
- User passwords

### Correct Answers
- [0] Recent log messages with severity/channel filters for runtime debugging

### Explanation
Watchdog (Database logging) records events/errors; CLI/UI viewers filter by type/severity to trace issues.

### Question 200

**Domain:** Debug Code and Troubleshooting

How do you log a custom debug message with context in Drupal?

### Options
- \Drupal::logger('my_module')->notice('Failed for @id', ['@id' => $id]) via injected logger channel
- echo and die in production
- error_log only, always
- var_dump to the browser

### Correct Answers
- [0] \Drupal::logger('my_module')->notice('Failed for @id', ['@id' => $id]) via injected logger channel

### Explanation
PSR-3 logger channels accept placeholder contexts; severity choice (debug→emergency) routes messages appropriately.

### Question 201

**Domain:** Debug Code and Troubleshooting

What does `debug_backtrace()` help with in custom code?

### Options
- Inspecting the call stack at runtime to find who invoked a function (logged for diagnosis)
- It fixes bugs automatically
- It speeds up code
- It caches results

### Correct Answers
- [0] Inspecting the call stack at runtime to find who invoked a function (logged for diagnosis)

### Explanation
Backtraces reveal call chains to unexpected invocations; pair with logging rather than printing to pages.

### Question 202

**Domain:** Debug Code and Troubleshooting

What does Devel's `dpm()`/`kint()` output?

### Options
- Structured variable dumps (objects, render arrays) via Kint for development inspection
- Minified CSS
- SQL backups
- User lists

### Correct Answers
- [0] Structured variable dumps (objects, render arrays) via Kint for development inspection

### Explanation
Devel dump functions (dpm/dpr/kint) render navigable variable trees — the standard dev-time inspection tool.

### Question 203

**Domain:** Debug Code and Troubleshooting

What does the Webprofiler toolbar's query section reveal?

### Options
- All queries per request with times and callers — spotting N+1 and slow queries
- Only failed queries
- CSS queries
- Browser queries

### Correct Answers
- [0] All queries per request with times and callers — spotting N+1 and slow queries

### Explanation
Query collection exposes per-request database behavior; sorting by time/count targets optimization work precisely.

### Question 204

**Domain:** Debug Code and Troubleshooting

How do you debug why a page isn't being cached by Drupal's page cache?

### Options
- Inspect response headers (X-Drupal-Cache, X-Drupal-Dynamic-Cache) and cacheability metadata/max-age on the response
- Guess based on load time
- Caching cannot be debugged
- Only via server reboots

### Correct Answers
- [0] Inspect response headers (X-Drupal-Cache, X-Drupal-Dynamic-Cache) and cacheability metadata/max-age on the response

### Explanation
Debug headers expose HIT/MISS and why (uncacheable max-age 0, contexts); render array cacheability leaks are the usual cause.

### Question 205

**Domain:** Debug Code and Troubleshooting

What does `X-Drupal-Cache-Contexts`/`Tags` debug headers require to appear?

### Options
- Development config enabling cache debug headers ($config['system.performance'] cache debug or http.response debug)
- They appear always
- A new theme
- A paid module

### Correct Answers
- [0] Development config enabling cache debug headers ($config['system.performance'] cache debug or http.response debug)

### Explanation
Cacheability debug headers list contexts/tags/max-age per response — invaluable for diagnosing cache fragmentation.

### Question 206

**Domain:** Debug Code and Troubleshooting

What does Xdebug provide that logging cannot?

### Options
- Interactive breakpoints, step execution, and variable inspection plus profiling (cachegrind)
- Faster production sites
- Automatic fixes
- Database backups

### Correct Answers
- [0] Interactive breakpoints, step execution, and variable inspection plus profiling (cachegrind)

### Explanation
Xdebug's step debugger (with IDE integration) and profiler identify logic errors and hotspots interactively.

### Question 207

**Domain:** Debug Code and Troubleshooting

What is the MySQL slow query log used for with Drupal?

### Options
- Capturing queries exceeding long_query_time for targeted index/rewrite work
- It speeds up queries
- It stores node content
- It logs user logins

### Correct Answers
- [0] Capturing queries exceeding long_query_time for targeted index/rewrite work

### Explanation
Slow logs surface worst offenders in production; combine with EXPLAIN to fix indexes or restructure views.

### Question 208

**Domain:** Debug Code and Troubleshooting

A form's AJAX callback fails silently. Systematic debugging steps? (Choose two)

### Options
- Check browser network tab for the AJAX request/response (500s reveal PHP errors in logs)
- Verify the wrapper ID exists and the callback returns the rebuilt element
- Rebuild the entire site from scratch
- Disable all modules permanently

### Correct Answers
- [0] Check browser network tab for the AJAX request/response (500s reveal PHP errors in logs)
- [1] Verify the wrapper ID exists and the callback returns the rebuilt element

### Explanation
AJAX failures surface in network responses and watchdog; most stem from missing wrappers or errors inside callbacks.

### Question 209

**Domain:** Debug Code and Troubleshooting

What does 'drush status' confirm when debugging environment issues?

### Options
- Drupal bootstrap health: root, URI, DB connection, PHP version, Drush version per site alias
- The theme's colors
- User counts
- Cron jokes

### Correct Answers
- [0] Drupal bootstrap health: root, URI, DB connection, PHP version, Drush version per site alias

### Explanation
drush status validates bootstrap and environment wiring — the first CLI check when commands misbehave.

### Question 210

**Domain:** Debug Code and Troubleshooting

What does the Status report (/admin/reports/status) aggregate?

### Options
- Requirements hook results: errors/warnings for PHP config, files, cron, updates, trusted hosts
- Only node counts
- Theme previews
- User feedback

### Correct Answers
- [0] Requirements hook results: errors/warnings for PHP config, files, cron, updates, trusted hosts

### Explanation
hook_requirements implementations report environment problems with severities — the canonical health checklist.

### Question 211

**Domain:** Debug Code and Troubleshooting

What does the 'trusted host patterns' setting protect and what breaks when misconfigured?

### Options
- Prevents host header injection; wrong patterns cause site errors/403 for legitimate hostnames
- It blocks spam comments
- It speeds up DNS
- It manages SSL certificates

### Correct Answers
- [0] Prevents host header injection; wrong patterns cause site errors/403 for legitimate hostnames

### Explanation
trusted_host_patterns whitelist Host headers; missing domains (www variants, internal LB names) trigger access failures.

### Question 212

**Domain:** Debug Code and Troubleshooting

An update hook fails midway. What happens and how to recover? (Choose two)

### Options
- Update.php/drush reports the failed update; the site remains at the last successful schema for that module
- Fix the code and re-run updates (consider sandbox resumption); restore from backup if data is inconsistent
- The site self-destructs
- Updates cannot be re-run ever

### Correct Answers
- [0] Update.php/drush reports the failed update; the site remains at the last successful schema for that module
- [1] Fix the code and re-run updates (consider sandbox resumption); restore from backup if data is inconsistent

### Explanation
Failed updates halt the sequence; after fixing, rerun — backups before updates enable rollback for data corruption.

### Question 213

**Domain:** Debug Code and Troubleshooting

What does increasing PHP `max_execution_time` vs using Batch/Queue solve differently?

### Options
- Longer limits merely delay timeouts; Batch/Queue architecturally chunk work so limits aren't hit
- They are identical
- Limits are for CSS
- Batches increase memory only

### Correct Answers
- [0] Longer limits merely delay timeouts; Batch/Queue architecturally chunk work so limits aren't hit

### Explanation
Chunked processing survives web limits and scales; raising timeouts is a band-aid that harms responsiveness under load.

### Question 214

**Domain:** Debug Code and Troubleshooting

What does memory exhaustion in a specific view indicate and how to approach it?

### Options
- Too many rows/entities loaded at once (no pager, heavy fields) — paginate, limit fields, or streamline the query
- It indicates perfect health
- Memory errors are random
- Only themes cause them

### Correct Answers
- [0] Too many rows/entities loaded at once (no pager, heavy fields) — paginate, limit fields, or streamline the query

### Explanation
Unbounded result sets balloon memory loading entities; bound the query (pager/range) and trim relationships/fields.

### Question 215

**Domain:** Debug Code and Troubleshooting

How do you debug a missing template suggestion (template not picked up)?

### Options
- Enable Twig debug to list considered suggestions; verify file naming (double hyphens) and clear cache after adding templates
- Rename randomly until it works
- Templates never need cache clears
- Suggestions are invisible always

### Correct Answers
- [0] Enable Twig debug to list considered suggestions; verify file naming (double hyphens) and clear cache after adding templates

### Explanation
Twig debug comments show exact candidate names; correct file names plus cache rebuild resolve discovery issues.

### Question 216

**Domain:** Debug Code and Troubleshooting

What does `drush sql:cli` (sqlc) help diagnose?

### Options
- Direct SQL inspection of Drupal tables (users, watchdog, config) when the UI/PHP layer misbehaves
- CSS bugs
- Theme errors
- JavaScript errors

### Correct Answers
- [0] Direct SQL inspection of Drupal tables (users, watchdog, config) when the UI/PHP layer misbehaves

### Explanation
A DB shell enables inspecting state (blocked users, watchdog errors, variable tables) bypassing broken application layers.

### Question 217

**Domain:** Debug Code and Troubleshooting

What does `drush user:unblock` / `user:login` help with during lockouts?

### Options
- Regaining admin access (unblock uid 1, generate one-time login links) when logins fail
- Deleting users
- Theme switching
- Cache clearing only

### Correct Answers
- [0] Regaining admin access (unblock uid 1, generate one-time login links) when logins fail

### Explanation
drush user commands rescue locked-out administrators (blocked by flood or lost passwords) without DB edits.

### Question 218

**Domain:** Debug Code and Troubleshooting

A contrib module update breaks a view. Efficient triage order? (Choose two)

### Options
- Check recent log/watchdog and the view's edit UI for missing handlers/fields
- Review the module's release notes/upgrade path and revert via composer if unresolved
- Delete the view immediately
- Reinstall Drupal core

### Correct Answers
- [0] Check recent log/watchdog and the view's edit UI for missing handlers/fields
- [1] Review the module's release notes/upgrade path and revert via composer if unresolved

### Explanation
Module updates can rename plugins/fields; logs pinpoint missing handlers while release notes flag breaking changes — revert as the safety net.

### Question 219

**Domain:** Debug Code and Troubleshooting

What does `drush config:status` (cst) reveal during config debugging?

### Options
- Differences between active config and sync directory (what would import/export)
- Server status
- User sessions
- Theme errors

### Correct Answers
- [0] Differences between active config and sync directory (what would import/export)

### Explanation
config:status previews sync drift — diagnosing unexpected overrides before import overwrites active config.

### Question 220

**Domain:** Debug Code and Troubleshooting

What does disabling CSS/JS aggregation help debug?

### Options
- Which original file contains a style/script issue, since aggregation obscures sources
- Database problems
- PHP syntax errors
- Cron failures

### Correct Answers
- [0] Which original file contains a style/script issue, since aggregation obscures sources

### Explanation
Dev environments disable aggregation (plus enable Twig debug) so browser devtools map issues to real files.

### Question 221

**Domain:** Debug Code and Troubleshooting

What does the Devel 'query log' / 'Execute PHP' (devel/php) provide?

### Options
- Ad-hoc PHP execution in a bootstrapped site and query inspection for quick experiments
- A production feature
- A theme editor
- A user manager

### Correct Answers
- [0] Ad-hoc PHP execution in a bootstrapped site and query inspection for quick experiments

### Explanation
Devel's PHP page and query tools speed hypothesis testing — dev-only modules that must be disabled in production.

### Question 222

**Domain:** Debug Code and Troubleshooting

How do you trace which subscriber/handler responded to an event or request?

### Options
- Webprofiler events section and Xdebug breakpoints in subscribers; Drush/console can list event listeners
- It is untraceable
- Only by reading all code manually
- Via CSS

### Correct Answers
- [0] Webprofiler events section and Xdebug breakpoints in subscribers; Drush/console can list event listeners

### Explanation
Event introspection tools list listeners per event; breakpoints confirm execution order and payload mutation.

### Question 223

**Domain:** Debug Code and Troubleshooting

What does a 'The website encountered an unexpected error' page indicate vs WSOD?

### Options
- A caught exception rendered by Drupal's error handler (logs contain the stack trace); WSOD is an uncaught fatal before Drupal bootstraps
- They are identical
- It means the site is offline forever
- It is a theme feature

### Correct Answers
- [0] A caught exception rendered by Drupal's error handler (logs contain the stack trace); WSOD is an uncaught fatal before Drupal bootstraps

### Explanation
Drupal's exception handling renders friendly errors with log entries (Recent log messages has the trace); pre-bootstrap fatals yield blank pages.

### Question 224

**Domain:** Debug Code and Troubleshooting

How do you debug cron not running?

### Options
- Check 'Last cron run' on Status report, verify external cron triggers the cron key URL or drush cron, and inspect logs for hook_cron fatals
- Cron cannot be debugged
- Cron only runs on Sundays
- Reboot the database only

### Correct Answers
- [0] Check 'Last cron run' on Status report, verify external cron triggers the cron key URL or drush cron, and inspect logs for hook_cron fatals

### Explanation
Cron relies on external schedulers hitting /cron/{key} or drush; failing hook_cron implementations abort runs — logs reveal the culprit.

## Theme Integration

### Question 225

**Domain:** Theme Integration

What does hook_theme() 'variables' vs 'render element' declare?

### Options
- 'variables' for templates receiving named variables; 'render element' for element-type theme hooks receiving $elements
- Two theme systems
- Variables are for CSS
- Render elements are for JS

### Correct Answers
- [0] 'variables' for templates receiving named variables; 'render element' for element-type theme hooks receiving $elements

### Explanation
Theme hook registration chooses variable-based (custom templates) or element-based (render element types) input — shaping preprocess signatures.

### Question 226

**Domain:** Theme Integration

How does a module ship a default template for its theme hook?

### Options
- Place the .html.twig in the module's templates/ directory; themes may override it by copying into the theme
- Modules cannot ship templates
- Templates live in the database
- Only in /core/templates

### Correct Answers
- [0] Place the .html.twig in the module's templates/ directory; themes may override it by copying into the theme

### Explanation
Module templates registered via hook_theme are discovered automatically; theme overrides win via template suggestions.

### Question 227

**Domain:** Theme Integration

What does template_preprocess() vs module-specific preprocess hook cover?

### Options
- template_preprocess runs for every hook (base variables); hook_preprocess_HOOK targets a specific hook
- They are unrelated
- One is for JS
- One is for cron

### Correct Answers
- [0] template_preprocess runs for every hook (base variables); hook_preprocess_HOOK targets a specific hook

### Explanation
Base preprocess sets universal variables (attributes, title_*); specific preprocess hooks shape per-hook data.

### Question 228

**Domain:** Theme Integration

Why must preprocess functions avoid expensive operations (entity loads per item)?

### Options
- Preprocess runs per render (possibly per cached fragment); heavy work belongs in cached render arrays/lazy builders
- Preprocess is free
- It only runs once ever
- It runs on cron

### Correct Answers
- [0] Preprocess runs per render (possibly per cached fragment); heavy work belongs in cached render arrays/lazy builders

### Explanation
Putting heavy computation in preprocess defeats render caching; compute in build() with cache metadata instead.

### Question 229

**Domain:** Theme Integration

How do you pass cacheability metadata from a block plugin to its render?

### Options
- Use CacheableDependencyInterface objects: addCacheTags/addCacheContexts/addCacheMaxAge on the render array via Cache::mergeTags or ->addCacheableDependency()
- Cache metadata is automatic always
- It cannot be added
- Only via themes

### Correct Answers
- [0] Use CacheableDependencyInterface objects: addCacheTags/addCacheContexts/addCacheMaxAge on the render array via Cache::mergeTags or ->addCacheableDependency()

### Explanation
Merging cacheability from rendered dependencies (entities, config) into render arrays keeps cached fragments correct.

### Question 230

**Domain:** Theme Integration

What does `Cache::mergeTags()` combine?

### Options
- Cache tag arrays from multiple dependencies into one set for a render array
- User roles
- Theme regions
- Database tables

### Correct Answers
- [0] Cache tag arrays from multiple dependencies into one set for a render array

### Explanation
mergeTags unions tag lists (entity tags + list tags); render arrays carry them via '#cache' => ['tags' => ...].

### Question 231

**Domain:** Theme Integration

How do you attach a library to a block's render array?

### Options
- $build['#attached']['library'][] = 'my_module/my_library' inside build()
- Libraries attach only in themes
- Via JavaScript only
- It requires cron

### Correct Answers
- [0] $build['#attached']['library'][] = 'my_module/my_library' inside build()

### Explanation
The #attached property on render arrays pulls libraries when the element renders — correct even when cached fragments are reused.

### Question 232

**Domain:** Theme Integration

What does 'bubbleable metadata' refer to?

### Options
- Cacheability/attachments bubbling from nested render arrays up to the page response
- A CSS effect
- A database feature
- A user setting

### Correct Answers
- [0] Cacheability/attachments bubbling from nested render arrays up to the page response

### Explanation
Render pipeline merges child metadata (tags, contexts, libraries) upward — why #attached/#cache work at any depth.

### Question 233

**Domain:** Theme Integration

How do you add classes conditionally to a block wrapper from the block plugin?

### Options
- Set '#attributes' => ['class' => [...]] in the build array, merged by the block template's attributes
- Classes are theme-only
- Via JavaScript only
- It is impossible

### Correct Answers
- [0] Set '#attributes' => ['class' => [...]] in the build array, merged by the block template's attributes

### Explanation
Render array attributes merge with template attributes; plugins add state classes (e.g. 'is-empty') without template edits.

### Question 234

**Domain:** Theme Integration

What does hook_theme_registry_alter() enable for template resolution?

### Options
- Repointing a theme hook to a different template path or adjusting preprocess order at registry build
- It clears caches
- It registers users
- It is for cron

### Correct Answers
- [0] Repointing a theme hook to a different template path or adjusting preprocess order at registry build

### Explanation
Registry alters perform deep overrides (template redirection) when normal suggestions can't express the need.

### Question 235

**Domain:** Theme Integration

How do you expose a custom Twig function usable in all templates?

### Options
- A twig.extension-tagged service extending AbstractExtension with getFunctions() returning TwigFunction entries
- Edit vendor Twig files
- Functions are theme-only
- Twig cannot be extended

### Correct Answers
- [0] A twig.extension-tagged service extending AbstractExtension with getFunctions() returning TwigFunction entries

### Explanation
Twig extension services register functions/filters globally — e.g. a {{ current_language() }} helper.

### Question 236

**Domain:** Theme Integration

What must a custom Twig filter return for HTML output safety?

### Options
- MarkupInterface/TwigMarkup or escaped strings, avoiding double-escaping or XSS
- Any string is fine always
- Raw unfiltered HTML from users
- JSON only

### Correct Answers
- [0] MarkupInterface/TwigMarkup or escaped strings, avoiding double-escaping or XSS

### Explanation
Filters returning HTML should use safe markup wrappers (needs_escaping false) only for trusted content; user input stays escaped.

### Question 237

**Domain:** Theme Integration

How do you render a field with a specific formatter in code?

### Options
- $node->get('field_image')->view(['type' => 'image', 'settings' => ['image_style' => 'medium']])
- Only via Manage display UI
- echo the field raw
- Formatters are fixed per field

### Correct Answers
- [0] $node->get('field_image')->view(['type' => 'image', 'settings' => ['image_style' => 'medium']])

### Explanation
FieldItemList::view() renders fields with chosen formatter/settings — overriding display config programmatically.

### Question 238

**Domain:** Theme Integration

What does the 'image.render' theme hook / responsive_image theme produce?

### Options
- The <img>/<picture> markup for an image (style, attributes, responsive variants)
- A video player
- A gallery only
- A placeholder div

### Correct Answers
- [0] The <img>/<picture> markup for an image (style, attributes, responsive variants)

### Explanation
image/responsive_image theme hooks render derivative markup; formatters wrap them with field-level settings.

### Question 239

**Domain:** Theme Integration

How do you create an image derivative URL programmatically?

### Options
- ImageStyle::load('medium')->buildUrl($uri) generating the styled URL (derivative created on demand)
- Concatenate strings manually
- Derivatives are UI-only
- Via JavaScript

### Correct Answers
- [0] ImageStyle::load('medium')->buildUrl($uri) generating the styled URL (derivative created on demand)

### Explanation
Image styles generate derivative URLs; buildUrl triggers creation pipeline producing optimized images lazily.

### Question 240

**Domain:** Theme Integration

What does hook_preprocess_image_formatter()/image_style alter allow?

### Options
- Adjusting variables for image render elements (attributes, sizes) before markup
- Deleting images
- Cropping photos
- Changing file permissions

### Correct Answers
- [0] Adjusting variables for image render elements (attributes, sizes) before markup

### Explanation
Preprocess hooks on image elements add attributes (eager loading, classes) without template overrides.

### Question 241

**Domain:** Theme Integration

How do you expose view mode-driven template suggestions for a custom entity?

### Options
- hook_theme_suggestions_HOOK() adding entity__bundle__viewmode patterns matching template files
- Suggestions are node-only
- Only via themes
- It is automatic always

### Correct Answers
- [0] hook_theme_suggestions_HOOK() adding entity__bundle__viewmode patterns matching template files

### Explanation
Custom entities declare their theme hook; suggestion hooks mirror node's patterns for bundle/mode templates.

### Question 242

**Domain:** Theme Integration

What does the '#type' => 'link' render element produce?

### Options
- An anchor from '#title' and '#url' (Url object) with optional attributes
- A menu tree
- A redirect
- A file link only

### Correct Answers
- [0] An anchor from '#title' and '#url' (Url object) with optional attributes

### Explanation
Link elements render safe anchors from Url objects — preferred over concatenated HTML in render arrays.

### Question 243

**Domain:** Theme Integration

What does '#theme' => 'links' with '#links' render?

### Options
- A list of links (nav-style markup) used by node links and local actions
- A menu block
- A sitemap
- A breadcrumb only

### Correct Answers
- [0] A list of links (nav-style markup) used by node links and local actions

### Explanation
The links theme hook renders ul-based link sets with attributes/heading — standard for inline action links.

### Question 244

**Domain:** Theme Integration

How do you add a custom pane/section to the node 'links' area (like Read more/Add comment)?

### Options
- hook_node_links_alter() adding link arrays (title, url, attributes) per node
- Links are hard-coded
- Only via themes
- Only via JS

### Correct Answers
- [0] hook_node_links_alter() adding link arrays (title, url, attributes) per node

### Explanation
Node links alter injects entries into the standard links render element on teasers/full pages.

### Question 245

**Domain:** Theme Integration

What does 'Page title' block vs route '#title' relationship look like?

### Options
- Route/controller titles feed the page title block/variable; controllers can set '#title' render property
- Titles come from menus only
- They are unrelated
- Titles are random

### Correct Answers
- [0] Route/controller titles feed the page title block/variable; controllers can set '#title' render property

### Explanation
Title resolution flows from routes (_title, _title_callback) into page render; the Page title block displays it.

### Question 246

**Domain:** Theme Integration

How do you hide the page title on a specific route from code?

### Options
- Block visibility config, or unset the title in the page build/preprocess for that route
- Titles cannot be hidden
- Only via CSS always
- Rename the route

### Correct Answers
- [0] Block visibility config, or unset the title in the page build/preprocess for that route

### Explanation
Page title block visibility conditions hide titles per path; preprocess/page alters can unset title variables too.

### Question 247

**Domain:** Theme Integration

What does hook_preprocess_page_title() adjust?

### Options
- The page title variables (title markup/text) before the block template renders
- User names
- Menu titles only
- Cron labels

### Correct Answers
- [0] The page title variables (title markup/text) before the block template renders

### Explanation
Page title preprocess tweaks title output (prefixes, icons) without overriding templates.

### Question 248

**Domain:** Theme Integration

How do you render a menu tree programmatically for a custom region?

### Options
- menu.link_tree->load('main', $params) then ->transform($tree, $manipulators) and build the render array
- Menus cannot render in code
- Only via blocks
- Via raw SQL

### Correct Answers
- [0] menu.link_tree->load('main', $params) then ->transform($tree, $manipulators) and build the render array

### Explanation
Link tree service loads/transforms (access, active trail) menu trees into render arrays — used by menu blocks and custom code.

### Question 249

**Domain:** Theme Integration

What do menu tree 'manipulators' do during transform()?

### Options
- Access checks, index ordering, and active-trail computation (defaultManipulators) applied to raw trees
- They translate menus
- They cache menus only
- They delete items

### Correct Answers
- [0] Access checks, index ordering, and active-trail computation (defaultManipulators) applied to raw trees

### Explanation
Manipulators filter/order trees; custom manipulators add behaviors like feature-flagged menu items.

### Question 250

**Domain:** Theme Integration

How does a module add markup/attributes to the html head per page from code?

### Options
- hook_page_attachments with '#attached' => ['html_head' => [ [ ['#tag' => 'meta', '#attributes' => [...] ], 'key' ] ] ]
- The head is untouchable
- Only via themes
- Only via JS injection

### Correct Answers
- [0] hook_page_attachments with '#attached' => ['html_head' => [ [ ['#tag' => 'meta', '#attributes' => [...] ], 'key' ] ] ]

### Explanation
html_head attachments render meta/link tags with dedupe keys — the server-side way to inject head elements.

### Question 251

**Domain:** Theme Integration

What does '#type' => 'inline_template' provide?

### Options
- Rendering small Twig snippets from render arrays ({{ var }} placeholders) without a template file
- Inline CSS only
- A theme override
- JS templating

### Correct Answers
- [0] Rendering small Twig snippets from render arrays ({{ var }} placeholders) without a template file

### Explanation
inline_template renders tiny templates inline (with security limits) — convenient for generated fragments.

### Question 252

**Domain:** Theme Integration

When is inline_template risky and avoided?

### Options
- With user input inside the template string (Twig injection) — never concatenate untrusted data into templates
- It is always safe
- Only on Tuesdays
- Only with CSS

### Correct Answers
- [0] With user input inside the template string (Twig injection) — never concatenate untrusted data into templates

### Explanation
Building template strings from user input allows template injection; pass data as variables only.

### Question 253

**Domain:** Theme Integration

What does 'render element' plugin getInfo() declare?

### Options
- Defaults for the element type: #pre_render, #theme/#theme_wrappers, #cache, properties used when building
- Route definitions
- User defaults
- Cron defaults

### Correct Answers
- [0] Defaults for the element type: #pre_render, #theme/#theme_wrappers, #cache, properties used when building

### Explanation
Element info defines processing pipeline defaults; elements merge these with instance properties at build time.

### Question 254

**Domain:** Theme Integration

How do you add a new render element type?

### Options
- A RenderElement plugin class (#[RenderElement('my_element')]) with getInfo(); usage via '#type' => 'my_element'
- Elements are core-only
- Via YAML only
- Via JavaScript

### Correct Answers
- [0] A RenderElement plugin class (#[RenderElement('my_element')]) with getInfo(); usage via '#type' => 'my_element'

### Explanation
Custom element plugins package complex render behaviors (e.g. charts) as reusable render array types.

### Question 255

**Domain:** Theme Integration

What does the '#theme_wrappers' => ['container'] add around an element?

### Options
- The container theme wrapper (div with attributes) around children output
- A database wrapper
- A cache wrapper
- A user wrapper

### Correct Answers
- [0] The container theme wrapper (div with attributes) around children output

### Explanation
Theme wrappers post-process element markup; container adds attribute-bearing divs without form semantics.

### Question 256

**Domain:** Theme Integration

How do you set a custom canonical link for a page?

### Options
- html_head_link attachment with rel 'canonical' and the URL, replacing default
- Canonical is fixed
- Only via themes
- Only via JS

### Correct Answers
- [0] html_head_link attachment with rel 'canonical' and the URL, replacing default

### Explanation
Head link attachments manage canonical/alternate links for SEO (metatag module covers common cases).

### Question 257

**Domain:** Theme Integration

What does hook_preprocess_block() commonly compute for templates?

### Options
- Plugin-derived values (configuration flags) and contextual classes for block templates
- User passwords
- Cron times
- Database rows

### Correct Answers
- [0] Plugin-derived values (configuration flags) and contextual classes for block templates

### Explanation
Block preprocess bridges plugin configuration and template variables — e.g. exposing a 'style' setting as classes.

### Question 258

**Domain:** Theme Integration

How do you make a block plugin's output vary per language correctly?

### Options
- Add 'languages:language_content' (or interface) cache context and render translated values
- Language variance is automatic
- Blocks cannot translate
- Use separate blocks per language manually

### Correct Answers
- [0] Add 'languages:language_content' (or interface) cache context and render translated values

### Explanation
Language-dependent output requires language cache contexts; translated strings via t() bubble interface language context automatically.

### Question 259

**Domain:** Theme Integration

What does the 'view_builder' for comments/nodes do in the render pipeline?

### Options
- Builds entity render arrays per view mode (fields, extra fields, cacheability)
- It builds views module pages
- It builds themes
- It builds forms

### Correct Answers
- [0] Builds entity render arrays per view mode (fields, extra fields, cacheability)

### Explanation
View builders assemble entity output per display settings; ->view() calls feed controllers/templates with render arrays.

### Question 260

**Domain:** Theme Integration

How do you render only one field of an entity in a template?

### Options
- {{ content.field_tags }} after {{ content|without('field_tags') }} for the rest
- Fields cannot render separately
- Only via PHP echo
- Only via JS

### Correct Answers
- [0] {{ content.field_tags }} after {{ content|without('field_tags') }} for the rest

### Explanation
|without excludes fields from bulk rendering so templates place them individually — standard layout technique.

### Question 261

**Domain:** Theme Integration

What does hook_field_widget_form_alter() adjust?

### Options
- Widget form elements before rendering (attributes, states, descriptions)
- Field storage
- Theme regions
- User roles

### Correct Answers
- [0] Widget form elements before rendering (attributes, states, descriptions)

### Explanation
Widget form alters tweak editing UX per widget instance (placeholders, help) beyond display settings.

### Question 262

**Domain:** Theme Integration

How do you render a view programmatically with arguments?

### Options
- views_embed_view('my_view', 'block_1', $arg) or Views::getView()->preview() building render output
- Views render only via blocks
- Only via cron
- Only via themes

### Correct Answers
- [0] views_embed_view('my_view', 'block_1', $arg) or Views::getView()->preview() building render output

### Explanation
views_embed_view renders a display with contextual arguments inline (blocks, fields, controllers).

### Question 263

**Domain:** Theme Integration

What does hook_views_pre_render() allow?

### Options
- Modifying the view object/results just before rendering (inject rows, alter titles)
- Clearing caches
- Editing users
- Changing routes

### Correct Answers
- [0] Modifying the view object/results just before rendering (inject rows, alter titles)

### Explanation
Views lifecycle hooks (pre_view, pre_execute, post_execute, pre_render) intervene at each stage programmatically.

### Question 264

**Domain:** Theme Integration

How do you add rows to a view's output from code?

### Options
- hook_views_post_execute() manipulating $view->result (appending computed rows) before rendering
- Rows cannot be added
- Only via SQL UNION in the UI
- Only via JavaScript

### Correct Answers
- [0] hook_views_post_execute() manipulating $view->result (appending computed rows) before rendering

### Explanation
post_execute receives raw results; computed/external rows merge here before style plugins render.

## Performance

### Question 265

**Domain:** Performance

What are Drupal's two primary page-level caches for anonymous traffic?

### Options
- Internal Page Cache (full anonymous pages) and Dynamic Page Cache (per-context pages incl. authenticated)
- Browser cache and DNS cache
- Twig cache and OPcache only
- Cron cache and queue cache

### Correct Answers
- [0] Internal Page Cache (full anonymous pages) and Dynamic Page Cache (per-context pages incl. authenticated)

### Explanation
Page cache stores complete anonymous responses; Dynamic Page Cache caches per cache-context variations for all users with placeholders for dynamic bits.

### Question 266

**Domain:** Performance

What must any personalized fragment do to stay compatible with Dynamic Page Cache?

### Options
- Use lazy builders/placeholders or correct cache contexts so the surrounding page stays cached
- Disable all caching
- Render in cron
- Use JavaScript only

### Correct Answers
- [0] Use lazy builders/placeholders or correct cache contexts so the surrounding page stays cached

### Explanation
Placeholdering swaps personalized fragments after cache retrieval; missing this forces max-age 0 and kills cacheability.

### Question 267

**Domain:** Performance

What does the render cache store?

### Options
- Rendered render-array fragments keyed by cache keys/contexts with tags for invalidation
- PHP bytecode
- Image derivatives
- User sessions

### Correct Answers
- [0] Rendered render-array fragments keyed by cache keys/contexts with tags for invalidation

### Explanation
Render caching memoizes built fragments (blocks, entities) with metadata; cache keys identify, contexts vary, tags invalidate.

### Question 268

**Domain:** Performance

What does '#cache' => ['keys' => ['my_block', $id]] do?

### Options
- Explicit cache identity for a render element (with contexts/tags completing the metadata)
- It disables caching
- It caches the theme
- It caches users

### Correct Answers
- [0] Explicit cache identity for a render element (with contexts/tags completing the metadata)

### Explanation
Cache keys identify fragments; keys + contexts + tags + max-age form complete cacheability metadata for render arrays.

### Question 269

**Domain:** Performance

What does the 'cache.render' bin vs 'cache.data' bin typically hold?

### Options
- Rendered fragments vs computed data caches; both default to database, swappable to Redis/Memcache
- Sessions vs users
- Files vs images
- Config vs state

### Correct Answers
- [0] Rendered fragments vs computed data caches; both default to database, swappable to Redis/Memcache

### Explanation
Cache bins partition cached data; moving hot bins (render, data, default) to memory backends accelerates cache reads.

### Question 270

**Domain:** Performance

Why move cache storage from database to Redis/Memcache?

### Options
- In-memory reads avoid DB round-trips for every cached fragment, cutting latency and DB load
- It uses more disk
- It is slower always
- It breaks tags

### Correct Answers
- [0] In-memory reads avoid DB round-trips for every cached fragment, cutting latency and DB load

### Explanation
Memory cache backends (Redis/Memcache modules) serve bins fast; tag invalidation still works via backend tag support.

### Question 271

**Domain:** Performance

What does the ChainedFast cache backend combine?

### Options
- Fast local storage (APCu) with persistent backend fallback, syncing writes across web heads
- Two databases
- Two themes
- Two users

### Correct Answers
- [0] Fast local storage (APCu) with persistent backend fallback, syncing writes across web heads

### Explanation
ChainedFast reads APCu locally, falling back to the shared backend — core's default for discovery/bootstrap bins.

### Question 272

**Domain:** Performance

What is APCu best used for in Drupal?

### Options
- Per-server fast caches (class discovery, config) — not shared data, since it's per-process/server
- Session sharing across servers
- File storage
- Database replacement

### Correct Answers
- [0] Per-server fast caches (class discovery, config) — not shared data, since it's per-process/server

### Explanation
APCu is local to each PHP process pool; shared/invalidated data needs network backends (Redis) instead.

### Question 273

**Domain:** Performance

What does 'internal dynamic page cache' module do differently from page_cache?

### Options
- Caches responses for all users varying by cache contexts, with placeholder substitution for dynamic parts
- It only caches images
- It only works for anonymous users
- It replaces the database

### Correct Answers
- [0] Caches responses for all users varying by cache contexts, with placeholder substitution for dynamic parts

### Explanation
Dynamic Page Cache personalizes safely via contexts/placeholders, enabling caching even for authenticated traffic.

### Question 274

**Domain:** Performance

How does BigPipe improve perceived performance?

### Options
- Streams the cached page shell first, then injects placeholders as they render
- It compresses images
- It removes JavaScript
- It caches databases

### Correct Answers
- [0] Streams the cached page shell first, then injects placeholders as they render

### Explanation
BigPipe flushes output progressively; slow personalized fragments arrive without blocking initial paint.

### Question 275

**Domain:** Performance

What does a reverse proxy (Varnish/CDN) need from Drupal to cache correctly? (Choose two)

### Options
- Correct cache headers (Cache-Control max-age) and trusted proxy settings so HTTPS/IP detection works
- Cache-tag based purging integration (Purger modules) for instant invalidation
- Admin credentials to the site
- The database password

### Correct Answers
- [0] Correct cache headers (Cache-Control max-age) and trusted proxy settings so HTTPS/IP detection works
- [1] Cache-tag based purging integration (Purger modules) for instant invalidation

### Explanation
Edge caches honor Drupal's headers; tag purging (Cache-Tags header + purger plugins) keeps content fresh without low TTLs.

### Question 276

**Domain:** Performance

What do $settings['reverse_proxy'] and reverse_proxy_addresses configure?

### Options
- That Drupal trusts X-Forwarded-* headers from listed proxies for client IP/protocol detection
- Database proxies
- Theme proxies
- Cron proxies

### Correct Answers
- [0] That Drupal trusts X-Forwarded-* headers from listed proxies for client IP/protocol detection

### Explanation
Behind load balancers/CDNs, trusting forwarded headers fixes HTTPS detection, IPs for flood control, and absolute URLs.

### Question 277

**Domain:** Performance

What does the Purge module ecosystem do?

### Options
- Sends cache invalidations (by tags/paths) to Varnish/CDN when Drupal content changes
- It clears PHP opcache
- It purges users
- It deletes logs

### Correct Answers
- [0] Sends cache invalidations (by tags/paths) to Varnish/CDN when Drupal content changes

### Explanation
Purge plugins translate Drupal tag invalidations into edge purges (Varnish BAN, Cloudflare API) for fresh CDN caches.

### Question 278

**Domain:** Performance

How do 'cache max-age' settings (system.performance) affect anonymous pages?

### Options
- They set the minimum Cache-Control max-age sent to browsers/proxies for cached pages
- They set cron timing
- They set session length
- They set PHP memory

### Correct Answers
- [0] They set the minimum Cache-Control max-age sent to browsers/proxies for cached pages

### Explanation
Page cache max age bounds browser/proxy freshness; tag-based invalidation handles correctness for logged-out dynamic sites.

### Question 279

**Domain:** Performance

What is the performance impact of Views 'distinct' and heavy relationships?

### Options
- DISTINCT and extra joins multiply scanned rows; prefer indexed filters and minimal relationships
- They are always fast
- They only affect themes
- Relationships are free

### Correct Answers
- [0] DISTINCT and extra joins multiply scanned rows; prefer indexed filters and minimal relationships

### Explanation
Relationship joins and distinct sorts are expensive at scale; slim views (needed joins only) plus caching keep listings fast.

### Question 280

**Domain:** Performance

What does Views 'Query settings' disabling SQL rewriting do, and when is it risky?

### Options
- Skips node access rewriting (faster) but can expose restricted content — only for public data
- It speeds up safely always
- It disables caching
- It is risk-free for private sites

### Correct Answers
- [0] Skips node access rewriting (faster) but can expose restricted content — only for public data

### Explanation
Disabling query rewrite bypasses access conditions — a speed win only when content is uniformly public.

### Question 281

**Domain:** Performance

How do you reduce entity load overhead in listings?

### Options
- Views with fields at SQL level, loadMultiple batching, and avoiding per-row entity loads in templates/preprocess
- Load everything always
- Entity loads are free
- Use raw JS

### Correct Answers
- [0] Views with fields at SQL level, loadMultiple batching, and avoiding per-row entity loads in templates/preprocess

### Explanation
Field-level views avoid full entity hydration; batched loads and precomputed data eliminate N+1 patterns.

### Question 282

**Domain:** Performance

What does the 'sitemap'/'degenerate' images issue on first hit mean, and how is it mitigated?

### Options
- Derivatives generate on first request (slow hit); pre-warm styles after deploys or generate eagerly
- Images never generate
- It is a PHP bug
- Only affects anonymous users

### Correct Answers
- [0] Derivatives generate on first request (slow hit); pre-warm styles after deploys or generate eagerly

### Explanation
Image style URLs create derivatives lazily; warm-up scripts or eager generation (during save/import) smooths launches.

### Question 283

**Domain:** Performance

What does converting images to WebP/AVIF achieve, and how in Drupal?

### Options
- Much smaller files; via image toolkit supporting WebP (GD/Imagick) and image styles or contrib converters
- Larger files
- It requires JavaScript only
- WebP is unsupported everywhere

### Correct Answers
- [0] Much smaller files; via image toolkit supporting WebP (GD/Imagick) and image styles or contrib converters

### Explanation
Modern formats cut transfer size dramatically; Drupal generates them per style when the toolkit supports the format.

### Question 284

**Domain:** Performance

What does enabling CSS/JS aggregation change at runtime?

### Options
- Fewer, larger asset files per page reducing HTTP requests, at the cost of rebuild-on-change
- Slower pages always
- It disables themes
- It merges databases

### Correct Answers
- [0] Fewer, larger asset files per page reducing HTTP requests, at the cost of rebuild-on-change

### Explanation
Aggregation bundles assets by group; on HTTP/2 its value shrinks but it still reduces request overhead on most stacks.

### Question 285

**Domain:** Performance

What does AdvAgg (contributed) add beyond core aggregation?

### Options
- Advanced bundling/minification strategies (smarter grouping, async/defer, DNS prefetch) for asset delivery
- A new theme
- Database caching
- User management

### Correct Answers
- [0] Advanced bundling/minification strategies (smarter grouping, async/defer, DNS prefetch) for asset delivery

### Explanation
AdvAgg tunes asset pipelines (bundler, minifier, modifiers) beyond core basics for high-traffic front-ends.

### Question 286

**Domain:** Performance

What does 'preload'/'preconnect' resource hints improve?

### Options
- Early fetching of critical assets (fonts, hero images, CDN connections) reducing render-blocking time
- Server CPU
- Database speed
- Cron timing

### Correct Answers
- [0] Early fetching of critical assets (fonts, hero images, CDN connections) reducing render-blocking time

### Explanation
Link hints (html_head_link attachments) start critical fetches sooner — LCP wins for hero images and fonts.

### Question 287

**Domain:** Performance

What does OPcache 'validate_timestamps=0' mean for deployments?

### Options
- PHP never rechecks file changes; opcache must be reset on deploy (atomic resets via deploy tooling)
- Files update instantly
- It disables opcache
- It slows PHP permanently

### Correct Answers
- [0] PHP never rechecks file changes; opcache must be reset on deploy (atomic resets via deploy tooling)

### Explanation
Timestamp validation off maximizes speed; deploys must purge opcache (or use symlinked releases) to serve new code.

### Question 288

**Domain:** Performance

What does tuning 'realpath_cache_size' and TTL help on include-heavy sites?

### Options
- Reduces filesystem stat calls resolving PHP includes, cutting per-request syscalls
- It caches images
- It caches users
- It caches themes only

### Correct Answers
- [0] Reduces filesystem stat calls resolving PHP includes, cutting per-request syscalls

### Explanation
Realpath caching trims disk stats for thousands of includes; Drupal benefits with larger size/longer TTL in production.

### Question 289

**Domain:** Performance

How does moving sessions out of the database help?

### Options
- Session storage in Redis/files lowers DB write pressure from every authenticated request
- Sessions must stay in DB always
- It breaks logins
- It slows logins

### Correct Answers
- [0] Session storage in Redis/files lowers DB write pressure from every authenticated request

### Explanation
DB sessions add writes per request; memory-backed sessions scale authenticated traffic better.

### Question 290

**Domain:** Performance

What does disabling unused modules improve measurably?

### Options
- Fewer hook invocations, less schema/config overhead, smaller container — faster bootstrap per request
- Nothing ever
- Only themes
- Only cron

### Correct Answers
- [0] Fewer hook invocations, less schema/config overhead, smaller container — faster bootstrap per request

### Explanation
Every enabled module adds hook calls/service definitions; pruning unused modules trims request bootstrap cost.

### Question 291

**Domain:** Performance

What does the Database Logging (dblog) module cost on busy sites?

### Options
- A DB write per logged message; high-volume logging slows requests — reduce levels or offload to syslog
- It is free
- It speeds up pages
- It caches queries

### Correct Answers
- [0] A DB write per logged message; high-volume logging slows requests — reduce levels or offload to syslog

### Explanation
Watchdog inserts scale with log volume; production sites throttle severity or route logs externally (syslog/Monolog).

### Question 292

**Domain:** Performance

What does 'watchdog pruning' (dblog row limit) prevent?

### Options
- Unbounded watchdog table growth degrading admin/log queries
- Image growth
- User growth
- Cron growth

### Correct Answers
- [0] Unbounded watchdog table growth degrading admin/log queries

### Explanation
dblog retains a configurable row cap; unpruned logs bloat tables — set retention per environment needs.

### Question 293

**Domain:** Performance

What does the Statistics module's hit counter cost?

### Options
- A DB write per node view — significant on high-traffic sites; prefer external analytics
- Nothing
- It speeds up pages
- It caches nodes

### Correct Answers
- [0] A DB write per node view — significant on high-traffic sites; prefer external analytics

### Explanation
Per-request writes for counters hurt under load; external analytics (or queued counting) removes the hot write path.

### Question 294

**Domain:** Performance

How do you handle flood control writes at scale?

### Options
- Flood table writes are per-attempt; offload auth (SSO) or use memory-backed flood storage on large sites
- Flood has no cost
- Disable flood always
- Flood is a theme feature

### Correct Answers
- [0] Flood table writes are per-attempt; offload auth (SSO) or use memory-backed flood storage on large sites

### Explanation
Flood tracking writes during login storms; SSO/OAuth moves authentication load off Drupal entirely.

### Question 295

**Domain:** Performance

What does 'pre-baking' content (static generation) mean for Drupal architectures?

### Options
- Rendering pages to static files (Tome/static generators or CDN full-page caching) removing runtime Drupal from anonymous traffic
- Baking images
- Compiling PHP to C
- It is impossible

### Correct Answers
- [0] Rendering pages to static files (Tome/static generators or CDN full-page caching) removing runtime Drupal from anonymous traffic

### Explanation
Static generation/architectures serve pre-rendered HTML; Drupal becomes the editing backend with sync-on-publish.

### Question 296

**Domain:** Performance

What does horizontal scaling of web heads require from Drupal's shared state? (Choose two)

### Options
- Shared cache/session backends (Redis/Memcache) and shared files (NFS/object storage) across servers
- Centralized database and config consistent via deploys
- Nothing; servers share nothing
- Separate databases per server

### Correct Answers
- [0] Shared cache/session backends (Redis/Memcache) and shared files (NFS/object storage) across servers
- [1] Centralized database and config consistent via deploys

### Explanation
Multi-web setups centralize stateful resources; per-server caches cause inconsistent invalidation and sessions.

### Question 297

**Domain:** Performance

What does a CDN do for global Drupal audiences?

### Options
- Serves cached pages/assets from edge locations near users, cutting latency and origin load
- It replaces the database
- It minifies PHP
- It hosts cron

### Correct Answers
- [0] Serves cached pages/assets from edge locations near users, cutting latency and origin load

### Explanation
CDNs terminate TLS and cache at the edge; Drupal integrates via headers + purge modules for freshness.

### Question 298

**Domain:** Performance

What does gzip/brotli compression reduce, and where is it enabled?

### Options
- Transfer size of text responses (HTML/CSS/JS); enabled at web server/CDN layer, not Drupal
- Image dimensions
- Database size
- PHP memory

### Correct Answers
- [0] Transfer size of text responses (HTML/CSS/JS); enabled at web server/CDN layer, not Drupal

### Explanation
Compression is infrastructure-level (nginx/apache/CDN); Drupal sends uncompressed bodies to the edge.

### Question 299

**Domain:** Performance

What does 'lazy builder' placeholder count tell you about a page?

### Options
- Number of fragments rendered post-cache; many placeholders reduce cache efficiency and can slow TTFB if each is heavy
- The page's SEO score
- Image counts
- User counts

### Correct Answers
- [0] Number of fragments rendered post-cache; many placeholders reduce cache efficiency and can slow TTFB if each is heavy

### Explanation
Placeholders trade cacheability for per-request rendering; consolidating dynamic fragments restores performance.

### Question 300

**Domain:** Performance

How do you identify the slowest part of a Drupal request?

### Options
- Profilers: Xdebug/Webgrind, Blackfire, or Webprofiler timeline showing service/template/query durations
- Guessing
- Only load tests
- It is impossible

### Correct Answers
- [0] Profilers: Xdebug/Webgrind, Blackfire, or Webprofiler timeline showing service/template/query durations

### Explanation
Profiling attributes time across functions/services; Blackfire/Webprofiler visualize hotspots guiding optimization.

### Question 301

**Domain:** Performance

What does Blackfire add for Drupal performance work?

### Options
- Production-safe profiling with call graphs, recommendations, and performance tests
- A theme
- A database
- A user system

### Correct Answers
- [0] Production-safe profiling with call graphs, recommendations, and performance tests

### Explanation
Blackfire profiles real traffic with minimal overhead; assertions gate performance regressions in CI.

### Question 302

**Domain:** Performance

What does caching computed entity lists (top products) at the data layer look like?

### Options
- Cache::set with list tags (node_list) so any content change invalidates the cached list
- Store in PHP globals
- Cache without tags
- It cannot be cached

### Correct Answers
- [0] Cache::set with list tags (node_list) so any content change invalidates the cached list

### Explanation
List caches keyed with entity list tags invalidate on any relevant change — fresh AND fast aggregate queries.

### Question 303

**Domain:** Performance

What does 'cache context' explosion (too many variations) cause?

### Options
- Fragmented caches with low hit ratios (e.g. varying by session unnecessarily); consolidate contexts deliberately
- Faster caches
- Bigger images
- More users

### Correct Answers
- [0] Fragmented caches with low hit ratios (e.g. varying by session unnecessarily); consolidate contexts deliberately

### Explanation
Each context multiplies cache entries; audit contexts (debug headers) and remove unnecessary variation.

### Question 304

**Domain:** Performance

When is max-age -1 (permanent) appropriate?

### Options
- For content whose invalidation is fully tag-driven (entities); eternal max-age with correct tags
- For user dashboards
- For cart pages
- Never appropriate

### Correct Answers
- [0] For content whose invalidation is fully tag-driven (entities); eternal max-age with correct tags

### Explanation
Permanent caching is safe when tags invalidate precisely — entity-based fragments are the canonical case.

### Question 305

**Domain:** Performance

What does 'authenticated user page caching' strategy typically look like?

### Options
- Dynamic Page Cache + placeholders for personal bits; avoid full page_cache-style personalized HTML caches
- No caching possible
- Cache per user forever
- Use cron caching

### Correct Answers
- [0] Dynamic Page Cache + placeholders for personal bits; avoid full page_cache-style personalized HTML caches

### Explanation
Authenticated caching varies by contexts with placeholder substitution; whole-page per-user caches fragment storage.

### Question 306

**Domain:** Performance

How does ESI/hole-punching relate to Drupal placeholders?

### Options
- Edge-side includes assemble fragments at the CDN similar to BigPipe placeholders; Drupal uses placeholders/BigPipe natively
- They are unrelated
- ESI is a database
- Placeholders require ESI

### Correct Answers
- [0] Edge-side includes assemble fragments at the CDN similar to BigPipe placeholders; Drupal uses placeholders/BigPipe natively

### Explanation
Both techniques separate dynamic fragments from cached shells; Drupal's placeholder system achieves it app-side.

### Question 307

**Domain:** Performance

What does tuning MySQL innodb_buffer_pool_size influence most?

### Options
- How much table/index data stays in memory — the dominant factor in MySQL-backed Drupal read performance
- Image quality
- Cron timing
- Theme speed

### Correct Answers
- [0] How much table/index data stays in memory — the dominant factor in MySQL-backed Drupal read performance

### Explanation
Buffer pool sizing keeps working sets in RAM; undersized pools force disk reads slowing all queries.

### Question 308

**Domain:** Performance

What does query cache deprecation in MySQL 8 imply?

### Options
- App-level caches (Drupal bins) matter more; MySQL no longer caches result sets internally
- Queries are always slow now
- MySQL 8 removed SELECT
- Nothing changed

### Correct Answers
- [0] App-level caches (Drupal bins) matter more; MySQL no longer caches result sets internally

### Explanation
MySQL removed its query cache; Drupal's cache layers (and proxies like ProxySQL) absorb repeated-read load.

### Question 309

**Domain:** Performance

What does adding a composite index on (status, created) optimize?

### Options
- Queries filtering status and sorting by created (node listings) — index covers both filter and order
- Only fulltext search
- Only joins to users
- Image queries

### Correct Answers
- [0] Queries filtering status and sorting by created (node listings) — index covers both filter and order

### Explanation
Composite indexes matching WHERE+ORDER BY patterns avoid filesorts; align index column order with query predicates.

### Question 310

**Domain:** Performance

What does 'covering index' mean for a hot query?

### Options
- An index containing all columns the query needs, avoiding row lookups entirely
- An index covering themes
- A cache bin
- A CDN feature

### Correct Answers
- [0] An index containing all columns the query needs, avoiding row lookups entirely

### Explanation
Covering indexes serve queries from the index alone — the fastest possible read path for hot listings.

### Question 311

**Domain:** Performance

How do you keep cron runs from slowing user traffic?

### Options
- Run cron via CLI on a schedule (drush cron in system cron) rather than on user page requests
- Cron runs per request always
- Cron cannot be moved
- Disable cron

### Correct Answers
- [0] Run cron via CLI on a schedule (drush cron in system cron) rather than on user page requests

### Explanation
Automated cron (poor man's cron on requests) steals request time; system cron isolates it from user traffic.

### Question 312

**Domain:** Performance

What does queue backlog monitoring prevent?

### Options
- Silent processing delays (emails, imports) when workers can't keep up — alert on queue size/age
- It prevents nothing
- It prevents caching
- It prevents logins

### Correct Answers
- [0] Silent processing delays (emails, imports) when workers can't keep up — alert on queue size/age

### Explanation
Queue metrics (items pending, oldest age) feed monitoring; backlogs trigger scaled workers or investigation.

### Question 313

**Domain:** Performance

What does 'warm cache' deployment practice involve?

### Options
- Pre-generating caches/derivatives (crawling key pages, warming image styles) after deploys before live traffic
- Heating servers physically
- Deploying at noon
- Clearing all caches

### Correct Answers
- [0] Pre-generating caches/derivatives (crawling key pages, warming image styles) after deploys before live traffic

### Explanation
Cache warmers prevent post-deploy stampedes; scripts crawl top routes/styles immediately after release.

### Question 314

**Domain:** Performance

What is the 'cache stampede' (thundering herd) problem?

### Options
- Many requests regenerating the same expired cache simultaneously; locks/probabilistic early regeneration mitigate it
- Too many users at once
- A database error
- A theme issue

### Correct Answers
- [0] Many requests regenerating the same expired cache simultaneously; locks/probabilistic early regeneration mitigate it

### Explanation
Stampedes overload backends on hot-key expiry; Drupal's lock API and edge request collapsing reduce duplicates.

### Question 315

**Domain:** Performance

How does the lock API help performance beyond correctness?

### Options
- Prevents duplicate heavy work across concurrent requests (only one regenerates while others wait/serve stale)
- It slows everything
- It is unrelated to performance
- It locks users out

### Correct Answers
- [0] Prevents duplicate heavy work across concurrent requests (only one regenerates while others wait/serve stale)

### Explanation
Locks coordinate single regeneration of expensive artifacts — correctness and efficiency under concurrency.

### Question 316

**Domain:** Performance

What does 'serve stale while revalidate' provide at the CDN layer?

### Options
- Serving expired cache while refreshing in the background, hiding revalidation latency from users
- Serving broken pages
- Serving admin pages
- Serving errors

### Correct Answers
- [0] Serving expired cache while refreshing in the background, hiding revalidation latency from users

### Explanation
Stale-while-revalidate keeps responses instant during origin refresh — a key edge directive for perceived speed.

### Question 317

**Domain:** Performance

What does disabling 'internal page cache' for authenticated users change?

### Options
- page_cache only caches anonymous; authenticated rely on Dynamic Page Cache — disabling page_cache affects anonymous only
- It disables all caching
- It caches admin pages
- It speeds up cron

### Correct Answers
- [0] page_cache only caches anonymous; authenticated rely on Dynamic Page Cache — disabling page_cache affects anonymous only

### Explanation
The two caches serve different audiences; understanding their split guides where optimization effort lands.

### Question 318

**Domain:** Performance

What does 'cache bins to separate backend' mean for high-traffic tuning?

### Options
- Routing specific bins (render, data) to Redis while keeping others on DB/default, tuned per access pattern
- All bins must share one backend
- Bins are fixed
- Only one bin exists

### Correct Answers
- [0] Routing specific bins (render, data) to Redis while keeping others on DB/default, tuned per access pattern

### Explanation
Per-bin backend configuration (settings.php $settings['cache']['bins']) matches storage speed to bin hotness.

### Question 319

**Domain:** Performance

What does object caching the container (bootstrap_container) via APCu improve?

### Options
- Faster bootstrap by caching compiled container/discovery locally per server
- It caches users
- It caches images
- It caches cron

### Correct Answers
- [0] Faster bootstrap by caching compiled container/discovery locally per server

### Explanation
Bootstrap caches (container, discovery) in APCu shave milliseconds off every request — core's ChainedFast default does this.

### Question 320

**Domain:** Performance

What does load testing with realistic cache warm-up reveal that cold tests hide?

### Options
- True steady-state performance; cold-cache tests exaggerate misses and mislead capacity planning
- Nothing new
- Only errors
- Only SEO issues

### Correct Answers
- [0] True steady-state performance; cold-cache tests exaggerate misses and mislead capacity planning

### Explanation
Warming caches before benchmarks reflects production hit ratios; cold tests are for worst-case provisioning only.

## Security

### Question 321

**Domain:** Security

What is the primary defense against XSS when rendering text in Drupal?

### Options
- Context-appropriate escaping: Twig autoescaping, #plain_text, Xss::filter for allowed HTML
- Trusting all input
- Disabling JavaScript
- Using HTTP instead

### Correct Answers
- [0] Context-appropriate escaping: Twig autoescaping, #plain_text, Xss::filter for allowed HTML

### Explanation
Drupal escapes by default in Twig/render arrays; Xss::filter()/text formats whitelist markup when HTML is intended.

### Question 322

**Domain:** Security

What does the Xss::filter() / text format pipeline remove from editor HTML?

### Options
- Disallowed tags/attributes (script, on* handlers, javascript: URLs) per the allowed list
- All HTML always
- Only images
- Only links

### Correct Answers
- [0] Disallowed tags/attributes (script, on* handlers, javascript: URLs) per the allowed list

### Explanation
Filtering strips dangerous markup at render time via text formats; 'Limit allowed HTML tags' defines the whitelist.

### Question 323

**Domain:** Security

Why is the PHP Filter module removed from core and dangerous?

### Options
- Arbitrary PHP in content is a code-execution backdoor (and breaks exports) — use custom modules instead
- It was too fast
- It was open source
- It only worked offline

### Correct Answers
- [0] Arbitrary PHP in content is a code-execution backdoor (and breaks exports) — use custom modules instead

### Explanation
eval-in-database enables full compromise from content editing and hides code from version control — universally discouraged.

### Question 324

**Domain:** Security

What does Drupal's CSRF protection rely on for forms?

### Options
- Per-session form tokens validated on submission (form_token), automatically embedded by Form API
- IP checks only
- Cookies alone
- Nothing

### Correct Answers
- [0] Per-session form tokens validated on submission (form_token), automatically embedded by Form API

### Explanation
Form tokens bind submissions to sessions; custom routes add _csrf_token requirements for non-form endpoints.

### Question 325

**Domain:** Security

How does Drupal prevent SQL injection in the Database API?

### Options
- Placeholders/prepared statements for all values via the query builders
- Escaping with addslashes
- It doesn't
- Only via .htaccess

### Correct Answers
- [0] Placeholders/prepared statements for all values via the query builders

### Explanation
Parameterized queries separate code from data; concatenating user input into SQL is the forbidden pattern.

### Question 326

**Domain:** Security

What does 'open redirect' prevention look like in Drupal redirects?

### Options
- Validating destination paths (Url::fromUserInput/internal checks, RedirectDestination) refusing external URLs unless intended
- Redirects are always safe
- Only HTTPS matters
- Random redirects

### Correct Answers
- [0] Validating destination paths (Url::fromUserInput/internal checks, RedirectDestination) refusing external URLs unless intended

### Explanation
destination query params must resolve internally; unchecked external redirects enable phishing via trusted domains.

### Question 327

**Domain:** Security

What does the 'hash_salt' in settings.php protect?

### Options
- Uniqueness of generated tokens/hashes (form tokens, one-time links) per site
- User passwords directly
- File names
- Cron keys

### Correct Answers
- [0] Uniqueness of generated tokens/hashes (form tokens, one-time links) per site

### Explanation
hash_salt feeds HMACs for tokens; missing/duplicated salts weaken CSRF and login-link security.

### Question 328

**Domain:** Security

What does flood control limit by default for user logins?

### Options
- Failed login attempts per user/IP within windows, mitigating brute force
- Successful logins
- Page views
- Cron runs

### Correct Answers
- [0] Failed login attempts per user/IP within windows, mitigating brute force

### Explanation
User module flood settings (5 fails/user, 50/IP defaults) throttle credential attacks; augment with CAPTCHA/2FA.

### Question 329

**Domain:** Security

What do secure session cookie flags accomplish? (Choose two)

### Options
- 'Secure' limits cookies to HTTPS; 'HttpOnly' blocks JavaScript access mitigating XSS theft
- SameSite reduces CSRF risk on cross-site requests
- They speed up sessions
- They enable tracking

### Correct Answers
- [0] 'Secure' limits cookies to HTTPS; 'HttpOnly' blocks JavaScript access mitigating XSS theft
- [1] SameSite reduces CSRF risk on cross-site requests

### Explanation
Cookie hardening (secure/httponly/samesite) defends session confidentiality against network and script-based theft.

### Question 330

**Domain:** Security

What does HSTS enforce for Drupal sites?

### Options
- Browsers must use HTTPS for the domain (set at web server/CDN level), preventing downgrade attacks
- Faster TLS
- Cookie deletion
- DNS security

### Correct Answers
- [0] Browsers must use HTTPS for the domain (set at web server/CDN level), preventing downgrade attacks

### Explanation
Strict-Transport-Security pins HTTPS client-side; combined with HTTP→HTTPS redirects it removes plaintext access.

### Question 331

**Domain:** Security

What does X-Frame-Options/frame-ancestors protect against?

### Options
- Clickjacking by controlling which sites may iframe Drupal pages
- XSS
- SQLi
- Spam

### Correct Answers
- [0] Clickjacking by controlling which sites may iframe Drupal pages

### Explanation
Framing restrictions (header at server/CSP level) stop malicious embedding tricking users into hidden actions.

### Question 332

**Domain:** Security

What is a Content Security Policy (CSP) and Drupal's approach?

### Options
- Headers restricting script/style sources reducing XSS impact; added via contrib (seckit) or server config as core lacks UI
- A backup policy
- A CSS framework
- A cron policy

### Correct Answers
- [0] Headers restricting script/style sources reducing XSS impact; added via contrib (seckit) or server config as core lacks UI

### Explanation
CSP whitelists executable sources; rolling it out on Drupal needs nonce/unsafe-inline planning for core JS.

### Question 333

**Domain:** Security

Why are file upload validations (extensions, MIME, size) essential?

### Options
- Preventing executable/dangerous uploads (double extensions, PHP shells) and storage abuse
- Uploads are always safe
- Only size matters
- Only images matter

### Correct Answers
- [0] Preventing executable/dangerous uploads (double extensions, PHP shells) and storage abuse

### Explanation
Upload validators whitelist extensions and check real MIME; private destinations and non-executable dirs complete the defense.

### Question 334

**Domain:** Security

What does serving uploaded files from a non-executable location prevent?

### Options
- Uploaded scripts executing (PHP in files dir) — web servers must not execute code from files directories
- Faster downloads
- Better SEO
- Cron errors

### Correct Answers
- [0] Uploaded scripts executing (PHP in files dir) — web servers must not execute code from files directories

### Explanation
sites/default/files must deny script execution (server config); Drupal ships .htaccess for Apache to enforce it.

### Question 335

**Domain:** Security

What does hook_file_download() protect for private files?

### Options
- Per-request authorization before streaming a private:// file (headers allow/deny)
- Public files
- Image styles
- Cron files

### Correct Answers
- [0] Per-request authorization before streaming a private:// file (headers allow/deny)

### Explanation
Private file serving funnels through Drupal; hook_file_download returns headers or -1 to deny access programmatically.

### Question 336

**Domain:** Security

What does the 'update manager' security workflow include? (Choose two)

### Options
- Available updates report flagging security releases for core/contrib
- Applying updates promptly via composer with testing and backups
- Hiding all updates
- Updating only yearly

### Correct Answers
- [0] Available updates report flagging security releases for core/contrib
- [1] Applying updates promptly via composer with testing and backups

### Explanation
Security releases (SA-CORE/SA-CONTRIB) require timely updates; the updates report plus composer workflows operationalize patching.

### Question 337

**Domain:** Security

What does 'composer audit' check?

### Options
- Known vulnerabilities (security advisories) in installed PHP dependencies
- Code style
- Test coverage
- Image sizes

### Correct Answers
- [0] Known vulnerabilities (security advisories) in installed PHP dependencies

### Explanation
composer audit reports CVEs from FriendsOfPHP/Packagist advisories — CI gating on it catches vulnerable libraries.

### Question 338

**Domain:** Security

What does the Drupal Security Team's SA process provide?

### Options
- Coordinated advisories (SA-CORE, SA-CONTRIB) with risk levels and patched releases on security Wednesdays
- Marketing announcements
- Theme releases
- Hosting plans

### Correct Answers
- [0] Coordinated advisories (SA-CORE, SA-CONTRIB) with risk levels and patched releases on security Wednesdays

### Explanation
Security advisories rate risk (critical→low) and ship fixes; subscribing to the security list is standard practice.

### Question 339

**Domain:** Security

What does 'least privilege' mean for Drupal roles?

### Options
- Granting only permissions each role needs (no 'administer site' broadly), reviewing periodically
- Everyone gets admin
- Permissions are irrelevant
- Only uid 1 works

### Correct Answers
- [0] Granting only permissions each role needs (no 'administer site' broadly), reviewing periodically

### Explanation
Minimal permissions limit damage from compromised accounts; sensitive perms (PHP filters, config sync) stay tightly held.

### Question 340

**Domain:** Security

Why restrict the 'administer software updates' and 'administer modules' style permissions?

### Options
- They enable code-level changes; compromise equals full site takeover
- They are harmless
- They only clear caches
- They only view reports

### Correct Answers
- [0] They enable code-level changes; compromise equals full site takeover

### Explanation
Permissions allowing code/config changes are effectively root; treat them like server access in reviews.

### Question 341

**Domain:** Security

What does one-time login link security depend on? (Choose two)

### Options
- Time-limited hashed tokens tied to the user and site salt
- HTTPS delivery so links can't be sniffed
- Links never expiring
- Plain text passwords in URLs

### Correct Answers
- [0] Time-limited hashed tokens tied to the user and site salt
- [1] HTTPS delivery so links can't be sniffed

### Explanation
Password-reset links are bearer tokens; expiry + TLS + single-use semantics keep them safe in transit.

### Question 342

**Domain:** Security

What does session fixation defense look like in Drupal?

### Options
- Session ID regeneration on login/privilege change (session_regenerate_id via the session manager)
- Sessions never change
- Cookies are public
- It uses GET session IDs

### Correct Answers
- [0] Session ID regeneration on login/privilege change (session_regenerate_id via the session manager)

### Explanation
Rotating session IDs at authentication prevents attackers reusing planted session identifiers.

### Question 343

**Domain:** Security

What does the 'cron key' protect?

### Options
- The /cron/{key} URL from unauthorized triggering (and information disclosure of cron state)
- User passwords
- File uploads
- Theme settings

### Correct Answers
- [0] The /cron/{key} URL from unauthorized triggering (and information disclosure of cron state)

### Explanation
The cron URL includes a secret token; external schedulers use it, and it stays out of public view.

### Question 344

**Domain:** Security

What does restricting update.php access rely on?

### Options
- $settings['update_free_access'] FALSE plus admin permission; free access only temporarily during emergencies
- It is always open
- A CAPTCHA
- The theme layer

### Correct Answers
- [0] $settings['update_free_access'] FALSE plus admin permission; free access only temporarily during emergencies

### Explanation
update.php runs schema updates; leaving update_free_access TRUE exposes destructive operations publicly.

### Question 345

**Domain:** Security

What file permissions are recommended for settings.php and settings directories?

### Options
- Read-only for the web user (444/440) on settings.php post-install; writable only during changes
- 777 everywhere
- Public write
- No restrictions

### Correct Answers
- [0] Read-only for the web user (444/440) on settings.php post-install; writable only during changes

### Explanation
Locking settings prevents web-layer tampering with DB credentials/config; relax briefly for edits then re-lock.

### Question 346

**Domain:** Security

What does 'SVG sanitization' address for image uploads?

### Options
- SVGs can contain scripts; sanitize (svg sanitizer) or rasterize before serving to prevent XSS
- SVGs are always safe
- Only size matters
- SVGs need no review

### Correct Answers
- [0] SVGs can contain scripts; sanitize (svg sanitizer) or rasterize before serving to prevent XSS

### Explanation
SVG is XML with script/event capabilities; Drupal/contrib sanitize uploaded SVGs or serve them as attachments.

### Question 347

**Domain:** Security

What does MIME sniffing protection (X-Content-Type-Options: nosniff) prevent?

### Options
- Browsers interpreting files as different types than declared (uploaded HTML served as text/plain executing as HTML)
- Slow downloads
- Broken images
- Cron errors

### Correct Answers
- [0] Browsers interpreting files as different types than declared (uploaded HTML served as text/plain executing as HTML)

### Explanation
nosniff forces declared content types, blocking content-confusion attacks via crafted uploads.

### Question 348

**Domain:** Security

What does CORS configuration control for Drupal APIs?

### Options
- Which origins may call REST/JSON:API endpoints from browsers (Access-Control-Allow-Origin rules in services.yml)
- Database access
- Cron access
- Theme access

### Correct Answers
- [0] Which origins may call REST/JSON:API endpoints from browsers (Access-Control-Allow-Origin rules in services.yml)

### Explanation
CORS (cors.config in services.yml/default.services.yml) whitelists cross-origin API consumers; keep it tight in production.

### Question 349

**Domain:** Security

What is SSRF and how do custom integrations avoid it?

### Options
- Server-Side Request Forgery: user-controlled URLs making the server fetch internal resources; validate/allowlist outbound hosts
- A CSS attack
- A cache bug
- A theme flaw

### Correct Answers
- [0] Server-Side Request Forgery: user-controlled URLs making the server fetch internal resources; validate/allowlist outbound hosts

### Explanation
Features fetching remote URLs (webhooks, importers) must validate schemes/hosts and block internal ranges to prevent SSRF.

### Question 350

**Domain:** Security

Why validate JWT/OAuth tokens server-side with proper libraries?

### Options
- Signature/expiry/audience checks prevent forged or replayed tokens; hand-rolled parsing misses attacks
- Tokens are always safe
- Validation slows attackers only
- JWTs are encrypted by default

### Correct Answers
- [0] Signature/expiry/audience checks prevent forged or replayed tokens; hand-rolled parsing misses attacks

### Explanation
Token security hinges on verified signatures and claims; Simple OAuth/league libraries handle this correctly.

### Question 351

**Domain:** Security

What does rate limiting API endpoints mitigate?

### Options
- Credential stuffing, scraping, and DoS amplification on expensive endpoints
- Slow themes
- Cache misses
- Cron drift

### Correct Answers
- [0] Credential stuffing, scraping, and DoS amplification on expensive endpoints

### Explanation
Throttling (flood service, CDN rules) caps abusive request rates on auth/search endpoints.

### Question 352

**Domain:** Security

What does two-factor authentication add for Drupal accounts?

### Options
- A second factor (TOTP via contrib TFA) so password compromise alone doesn't grant access
- Faster logins
- Fewer passwords
- Automatic backups

### Correct Answers
- [0] A second factor (TOTP via contrib TFA) so password compromise alone doesn't grant access

### Explanation
TFA modules require time-based codes at login — standard hardening for administrative accounts.

### Question 353

**Domain:** Security

What does CAPTCHA/honeypot protect on public forms?

### Options
- Automated spam/abuse on comment, contact, and registration forms
- SQL injection
- XSS
- CSRF

### Correct Answers
- [0] Automated spam/abuse on comment, contact, and registration forms

### Explanation
CAPTCHA (contrib) and Honeypot (contrib) block bot submissions on anonymous forms; honeypot is frictionless.

### Question 354

**Domain:** Security

What does the 'password policy' approach (contrib) enforce?

### Options
- Complexity/expiry rules for account passwords beyond core's minimal checks
- Theme policies
- Cron policies
- Cache policies

### Correct Answers
- [0] Complexity/expiry rules for account passwords beyond core's minimal checks

### Explanation
Password Policy contrib adds constraints (length, classes, rotation) meeting organizational compliance.

### Question 355

**Domain:** Security

What is the risk of displaying detailed error messages in production?

### Options
- Information disclosure (paths, SQL, versions) aiding attackers — hide errors, log internally
- Errors help users
- There is no risk
- Errors fix bugs

### Correct Answers
- [0] Information disclosure (paths, SQL, versions) aiding attackers — hide errors, log internally

### Explanation
Verbose errors leak internals; production sets error_level 'hide' while logs retain details for admins.

### Question 356

**Domain:** Security

What does 'security.txt' provide for a Drupal site?

### Options
- A standard contact file for security researchers reporting vulnerabilities
- A password list
- A backup
- A sitemap

### Correct Answers
- [0] A standard contact file for security researchers reporting vulnerabilities

### Explanation
/.well-known/security.txt documents disclosure contacts/policy — good practice for public sites.

### Question 357

**Domain:** Security

Why disable user 1 usage for daily administration?

### Options
- uid 1 bypasses all access checks; using role-limited admin accounts reduces blast radius and improves auditability
- uid 1 is required always
- uid 1 is faster
- uid 1 cannot log in

### Correct Answers
- [0] uid 1 bypasses all access checks; using role-limited admin accounts reduces blast radius and improves auditability

### Explanation
Account 1 skips permissions; day-to-day work should use named accounts with least-privilege roles.

### Question 358

**Domain:** Security

What does blocking XML-RPC/REST write endpoints you don't use reduce?

### Options
- Attack surface: unused services/auth endpoints can't be exploited if disabled
- Nothing
- Only performance
- Only theming

### Correct Answers
- [0] Attack surface: unused services/auth endpoints can't be exploited if disabled

### Explanation
Disabling unused modules/endpoints (REST writes, XML-RPC legacy) shrinks exposure — core hygiene for hardening.

### Question 359

**Domain:** Security

What does 'admin paths obscurity' provide and not provide?

### Options
- Renaming /admin paths slightly raises effort but is not a security control; access control is the real defense
- Full security
- Performance gains
- SEO boosts

### Correct Answers
- [0] Renaming /admin paths slightly raises effort but is not a security control; access control is the real defense

### Explanation
Obscurity complements but never replaces authentication/permissions; treat path renaming as cosmetic hardening.

### Question 360

**Domain:** Security

What does enforcing HTTPS on the login/session layer specifically protect?

### Options
- Credentials and session cookies from network interception
- Images only
- Cron only
- Themes

### Correct Answers
- [0] Credentials and session cookies from network interception

### Explanation
Mixed HTTP/HTTPS leaks sessions (cookie theft); site-wide HTTPS plus secure cookies closes the gap.

### Question 361

**Domain:** Security

What does the 'seckit' contributed module configure?

### Options
- Security headers (CSP, X-Frame-Options, HSTS-style options) from the Drupal UI
- Cron jobs
- Image styles
- User roles

### Correct Answers
- [0] Security headers (CSP, X-Frame-Options, HSTS-style options) from the Drupal UI

### Explanation
Security Kit manages browser security headers where server-level config isn't accessible.

### Question 362

**Domain:** Security

What is the 'session cookie lifetime' trade-off?

### Options
- Longer lifetimes convenience users but extend theft windows; shorter limits exposure (especially for admin roles)
- It has no impact
- Longer is always safer
- Shorter breaks logins

### Correct Answers
- [0] Longer lifetimes convenience users but extend theft windows; shorter limits exposure (especially for admin roles)

### Explanation
Session duration balances UX vs exposure; administrative accounts warrant shorter sessions and 2FA.

### Question 363

**Domain:** Security

What does 'backup and sanitize before distribution' mean for DB dumps?

### Options
- Removing/obfuscating personal data (emails, names) from dumps shared to dev/staging per privacy rules
- Backups need no care
- Dumps are public anyway
- Sanitization deletes content

### Correct Answers
- [0] Removing/obfuscating personal data (emails, names) from dumps shared to dev/staging per privacy rules

### Explanation
drush sql:sanitize scrambles personal data; GDPR/compliance demands minimized real data outside production.

### Question 364

**Domain:** Security

What does 'principle of defense in depth' look like for a Drupal login?

### Options
- Layered controls: flood limits + 2FA + HTTPS + CAPTCHA + least-privilege roles together
- One strong password only
- Obscurity only
- Backups only

### Correct Answers
- [0] Layered controls: flood limits + 2FA + HTTPS + CAPTCHA + least-privilege roles together

### Explanation
Multiple independent controls ensure one failure isn't catastrophic — the guiding principle across Drupal hardening.

### Question 365

**Domain:** Security

What does input validation on REST writes prevent beyond XSS?

### Options
- Invalid/malicious data entering entities (constraint violations, oversize payloads) before persistence
- Slow APIs
- Cache misses
- Cron errors

### Correct Answers
- [0] Invalid/malicious data entering entities (constraint violations, oversize payloads) before persistence

### Explanation
Entity validation on write paths enforces data integrity for API consumers just like forms do for humans.

### Question 366

**Domain:** Security

Why is 'administer site configuration' treated as a root-equivalent permission?

### Options
- It permits config changes (text formats, modules' settings) enabling code execution paths
- It only changes colors
- It is read-only
- It affects cron only

### Correct Answers
- [0] It permits config changes (text formats, modules' settings) enabling code execution paths

### Explanation
Config permissions can unlock dangerous formats/settings; restrict them like server-level access.

### Question 367

**Domain:** Security

What does monitoring file integrity (unexpected changes in code files) detect?

### Options
- Compromises injecting backdoors into core/contrib files on disk
- Theme updates
- Image uploads
- Cron runs

### Correct Answers
- [0] Compromises injecting backdoors into core/contrib files on disk

### Explanation
File integrity monitoring (or read-only code deployment) flags tampering; version control review achieves similar assurance.

### Question 368

**Domain:** Security

What does 'read-only code in production' deployment style prevent?

### Options
- Web-user modification of PHP code (no in-UI module uploads/edits), forcing changes through the release pipeline
- Faster pages
- Better SEO
- Easier theming

### Correct Answers
- [0] Web-user modification of PHP code (no in-UI module uploads/edits), forcing changes through the release pipeline

### Explanation
Immutable code directories block web-shell installation and configuration drift — modern hosting defaults.

### Question 369

**Domain:** Security

What does the 'paranoia' style setting for file permissions do on hosts like Acquia/Pantheon?

### Options
- Restricts web-server writability to designated dirs only (files, tmp), protecting code and config
- It hides the site
- It disables cron
- It blocks users

### Correct Answers
- [0] Restricts web-server writability to designated dirs only (files, tmp), protecting code and config

### Explanation
Restricted write scopes mean even exploited PHP cannot alter code — a platform-level hardening pattern.

### Question 370

**Domain:** Security

What does 'security release embargo' communication discipline mean for teams?

### Options
- Preparing to patch promptly on release windows (Wednesdays) without publicizing unpatched vulnerability details
- Ignoring releases
- Posting exploits publicly
- Delaying patches months

### Correct Answers
- [0] Preparing to patch promptly on release windows (Wednesdays) without publicizing unpatched vulnerability details

### Explanation
Drupal announces security windows in advance; teams staff deploys then and avoid amplifying exploit details.

### Question 371

**Domain:** Security

What does auditing contrib module health before adoption include? (Choose two)

### Options
- Security coverage (module opted into security advisory policy) and maintenance activity
- Usage count and recent commits indicating active stewardship
- The module's color scheme
- The author's username length

### Correct Answers
- [0] Security coverage (module opted into security advisory policy) and maintenance activity
- [1] Usage count and recent commits indicating active stewardship

### Explanation
Stable releases with security coverage get advisories; abandoned/alpha modules carry unpatchable risk.

### Question 372

**Domain:** Security

What does the 'shield'-style environment protection (contrib Shield) do for non-production?

### Options
- HTTP-auth-gates staging/dev sites preventing public/indexed access to sensitive pre-release data
- It blocks production users
- It caches pages
- It disables cron

### Correct Answers
- [0] HTTP-auth-gates staging/dev sites preventing public/indexed access to sensitive pre-release data

### Explanation
Shield (or server basic auth) locks non-prod environments; combined with robots disallow it keeps staging private.

### Question 373

**Domain:** Leveraging Community

What is the correct way to propose a fix to a contributed Drupal module?

### Options
- Create an issue on drupal.org with a patch or GitLab merge request against the module's repository
- Email the maintainer privately only
- Fork it silently
- Post on social media

### Correct Answers
- [0] Create an issue on drupal.org with a patch or GitLab merge request against the module's repository

### Explanation
Drupal.org issues with MRs/patches are the contribution path; maintainers review, and credit is tracked automatically.

### Question 374

**Domain:** Leveraging Community

What does 'security coverage' on a drupal.org project page indicate?

### Options
- The project opted into the security advisory policy; stable releases receive security team support
- The module is paid
- The module is abandoned
- The module is a theme

### Correct Answers
- [0] The project opted into the security advisory policy; stable releases receive security team support

### Explanation
Only covered projects' full releases get SA-CONTRIB advisories; dev/alpha releases are use-at-own-risk.

### Question 375

**Domain:** Leveraging Community

What does the issue credit system on drupal.org reward?

### Options
- Contributions (code, reviews, mentoring) attributed to individuals/organizations, incentivizing community work
- Bug reports only
- Downloads
- Site visits

### Correct Answers
- [0] Contributions (code, reviews, mentoring) attributed to individuals/organizations, incentivizing community work

### Explanation
Credits recognize contribution types across issues; they feed marketplace rankings and community reputation.

### Question 376

**Domain:** Leveraging Community

What is a 'core committer' vs a 'module maintainer'?

### Options
- Committers merge reviewed patches to Drupal core; maintainers steward contrib projects' code/releases
- They are identical
- Committers manage themes only
- Maintainers host servers

### Correct Answers
- [0] Committers merge reviewed patches to Drupal core; maintainers steward contrib projects' code/releases

### Explanation
Core changes flow through committers after community review; contrib governance rests with project maintainers.

### Question 377

**Domain:** Leveraging Community

What does 'Novice' tagging on drupal.org issues signal?

### Options
- Good first issues for new contributors, often with mentoring at contribution events
- Issues for experts only
- Spam issues
- Paid issues

### Correct Answers
- [0] Good first issues for new contributors, often with mentoring at contribution events

### Explanation
Novice issues lower the barrier to entry; sprints pair newcomers with mentors to land first contributions.

### Question 378

**Domain:** Leveraging Community

What is the role of the Drupal Association?

### Options
- The nonprofit supporting drupal.org infrastructure, events, and promotion of the project
- A hosting company
- A module marketplace
- A certification body

### Correct Answers
- [0] The nonprofit supporting drupal.org infrastructure, events, and promotion of the project

### Explanation
The DA funds/operates drupal.org and DrupalCons; Acquia certifications are separate commercial programs.

### Question 379

**Domain:** Leveraging Community

What does 'RTBC' mean in core/contrib issue queues?

### Options
- Reviewed & Tested by the Community — a patch passed peer review and awaits committer action
- Ready To Be Closed
- A server status
- A theme status

### Correct Answers
- [0] Reviewed & Tested by the Community — a patch passed peer review and awaits committer action

### Explanation
Issue workflow: active → needs review → RTBC → fixed; reviewers test patches and move states accordingly.

### Question 380

**Domain:** Leveraging Community

What does 'do not hack core/contrib' mean practically when you need custom behavior?

### Options
- Extend via hooks/plugins/overrides in custom code so updates remain safe; fork only as a last resort
- Edit vendor files freely
- Copy core files anywhere
- It means nothing

### Correct Answers
- [0] Extend via hooks/plugins/overrides in custom code so updates remain safe; fork only as a last resort

### Explanation
Hacked code blocks security updates; Drupal's extension systems (hooks, plugins, alters, decoration) cover nearly all needs.

### Question 381

**Domain:** Leveraging Community

What does a 'distribution' (install profile) package for the community?

### Options
- Preconfigured Drupal + modules + config for a use case (e.g. Open Social, GovCMS) accelerating adoption
- A theme shop
- A hosting plan
- A certification

### Correct Answers
- [0] Preconfigured Drupal + modules + config for a use case (e.g. Open Social, GovCMS) accelerating adoption

### Explanation
Distributions bundle opinionated setups as profiles; they showcase community collaboration beyond single modules.

### Question 382

**Domain:** Leveraging Community

What is the 'Drupal Slack/Discord + issue queue' etiquette when seeking help?

### Options
- Search existing issues first, provide reproduction steps/versions, and contribute findings back to the issue
- Demand instant answers
- Post credentials publicly
- Cross-post spam everywhere

### Correct Answers
- [0] Search existing issues first, provide reproduction steps/versions, and contribute findings back to the issue

### Explanation
Good issue etiquette (clear steps, environment, patches) speeds resolution and leaves reusable knowledge for others.

### Question 383

**Domain:** Leveraging Community

What does 'semantic versioning for contrib' (8.x-1.x → 2.0.x) reflect post-Drupal 9?

### Options
- Contrib adopted core-style semver (2.0.x compatible with D10/D11 declared in info files) replacing 8.x-* branches
- Nothing changed
- Versions are random
- Only core versions matter

### Correct Answers
- [0] Contrib adopted core-style semver (2.0.x compatible with D10/D11 declared in info files) replacing 8.x-* branches

### Explanation
Modern contrib releases use semver majors with core_version_requirement ranges, aligning composer workflows.

### Question 384

**Domain:** Leveraging Community

What does the 'Usage statistics' on project pages help evaluate?

### Options
- Adoption scale of a module (sites reporting via Update module), one signal of reliability/maintenance
- Download speed
- Theme quality
- Code style

### Correct Answers
- [0] Adoption scale of a module (sites reporting via Update module), one signal of reliability/maintenance

### Explanation
Usage counts plus maintenance/security coverage guide module selection — popularity correlates with battle-testing.

### Question 385

**Domain:** Leveraging Community

What is 'mentored contribution' at Drupal events?

### Options
- Guided sprints where experienced contributors help newcomers work real issues end-to-end
- Paid training only
- A certification exam
- A hosting service

### Correct Answers
- [0] Guided sprints where experienced contributors help newcomers work real issues end-to-end

### Explanation
Contribution days pair mentors with novices on tagged issues — the community's primary onboarding engine.

### Question 386

**Domain:** Leveraging Community

What does 'tests required' for core patches enforce?

### Options
- Automated tests accompanying changes, preventing regressions and documenting behavior
- Manual testing only
- No testing
- Screenshots only

### Correct Answers
- [0] Automated tests accompanying changes, preventing regressions and documenting behavior

### Explanation
Core requires test coverage with fixes/features; the testbot runs patches on drupal.org for every issue.

### Question 387

**Domain:** Leveraging Community

What does the 'Drupal testbot' (drupal.org CI) do on issues?

### Options
- Automatically runs the test suite against posted patches/MRs, reporting pass/fail on the issue
- It deploys sites
- It reviews design
- It writes code

### Correct Answers
- [0] Automatically runs the test suite against posted patches/MRs, reporting pass/fail on the issue

### Explanation
Automated testing gates contributions; failing tests block RTBC until fixed.

### Question 388

**Domain:** Leveraging Community

What is the correct response when you discover a security vulnerability in a contrib module?

### Options
- Report privately to the Drupal Security Team (security@drupal.org), never publicly in the issue queue
- Post it on Twitter
- Open a public issue with exploit details
- Email all users

### Correct Answers
- [0] Report privately to the Drupal Security Team (security@drupal.org), never publicly in the issue queue

### Explanation
Coordinated disclosure protects sites; public reports before fixes endanger the ecosystem.

### Question 389

**Domain:** Leveraging Community

What does 'Drupal core initiatives' (e.g. Project Browser, Recipes) organize?

### Options
- Community-wide efforts on strategic features with leads, planning issues, and contribution paths
- Marketing campaigns
- Hosting sales
- Certification exams

### Correct Answers
- [0] Community-wide efforts on strategic features with leads, planning issues, and contribution paths

### Explanation
Initiatives coordinate large features across contributors; tracking them guides where the platform is heading.

### Question 390

**Domain:** Leveraging Community

What does the 'Drupal Coding Standards' document define?

### Options
- Formatting/structure rules for PHP/JS/Twig/YAML enforced by phpcs in core and contrib
- Design guidelines
- Hosting rules
- Certification rules

### Correct Answers
- [0] Formatting/structure rules for PHP/JS/Twig/YAML enforced by phpcs in core and contrib

### Explanation
Standards keep community code uniform; coder module rulesets automate enforcement in CI.

### Question 391

**Domain:** Leveraging Community

What does 'patch vs merge request' workflow difference look like on drupal.org today?

### Options
- GitLab MRs are the modern path (fork, branch, MR); legacy .patch files still supported in some queues
- Patches are required always
- MRs are forbidden
- Neither exists

### Correct Answers
- [0] GitLab MRs are the modern path (fork, branch, MR); legacy .patch files still supported in some queues

### Explanation
Drupal.org's GitLab migration made MRs primary; interdiffs/patches persist for older workflows.

### Question 392

**Domain:** Leveraging Community

What does the 'Local user groups / DrupalCamps' ecosystem provide?

### Options
- Regional meetups/camps for knowledge sharing and contribution beyond global DrupalCon
- Only online forums
- Paid consulting
- Certification testing

### Correct Answers
- [0] Regional meetups/camps for knowledge sharing and contribution beyond global DrupalCon

### Explanation
Local communities (groups.drupal.org, camps) sustain grassroots learning and contribution pipelines.

### Question 393

**Domain:** Leveraging Community

What does 'documentation.drupal.org' contribution involve?

### Options
- Community-maintained guides where anyone with a drupal.org account can propose improvements
- Paid docs only
- Core code only
- Theme sales

### Correct Answers
- [0] Community-maintained guides where anyone with a drupal.org account can propose improvements

### Explanation
Documentation is a contribution track; improving guides counts toward issue credit like code does.

### Question 394

**Domain:** Leveraging Community

What does the 'Drupal Core Mentoring' program connect?

### Options
- New contributors with experienced mentors through tasks, channels, and sprint guidance
- Employers with recruiters
- Hosts with customers
- Themes with buyers

### Correct Answers
- [0] New contributors with experienced mentors through tasks, channels, and sprint guidance

### Explanation
Mentoring programs structure onboarding into core contribution (first patches, reviews) sustainably.

### Question 395

**Domain:** Leveraging Community

What does 'issue forks' on drupal.org provide?

### Options
- Per-issue forked branches where contributors collaborate before merging via the project's MR
- Personal websites
- Backup storage
- Theme previews

### Correct Answers
- [0] Per-issue forked branches where contributors collaborate before merging via the project's MR

### Explanation
Issue forks give every contributor push access to a shared branch tied to the issue — simplifying collaboration.

### Question 396

**Domain:** Leveraging Community

What does 'change records' document for Drupal core?

### Options
- API changes/deprecations per release that module developers must adapt to
- Server changes
- Theme releases
- User accounts

### Correct Answers
- [0] API changes/deprecations per release that module developers must adapt to

### Explanation
Change records on drupal.org list breaking changes; checking them is part of major-version upgrades.

### Question 397

**Domain:** Leveraging Community

What does the 'initiatives and roadmaps' information help agencies decide?

### Options
- When to adopt features (e.g. Recipes, Project Browser) and where client needs could contribute upstream
- Nothing
- Only pricing
- Only design trends

### Correct Answers
- [0] When to adopt features (e.g. Recipes, Project Browser) and where client needs could contribute upstream

### Explanation
Following roadmaps aligns project planning with core direction — and identifies sponsorship/contribution opportunities.

### Question 398

**Domain:** Leveraging Community

What does 'Drupal Certified Partner' (DCP) recognize?

### Options
- Organizations contributing significantly (code, funding) to the project per the contribution credit framework
- Any paying company
- Theme sellers
- Hosting companies only

### Correct Answers
- [0] Organizations contributing significantly (code, funding) to the project per the contribution credit framework

### Explanation
DCP status ties marketplace visibility to measurable community contribution, incentivizing ecosystem investment.

### Question 399

**Domain:** Leveraging Community

What does contributing a module back (vs keeping it custom) benefit?

### Options
- Community review improves quality/security, shares maintenance, and builds reputation — with release/maintenance responsibilities
- Nothing; keep all code private
- Only fame
- Only funding

### Correct Answers
- [0] Community review improves quality/security, shares maintenance, and builds reputation — with release/maintenance responsibilities

### Explanation
Open-sourcing modules multiplies review and maintenance capacity; maintainers commit to stewardship duties.

### Question 400

**Domain:** Leveraging Community

What does 'upstream first' mean for organizations using Drupal?

### Options
- Fixing issues in core/contrib rather than private forks, so improvements persist and maintenance burden drops
- Always building custom
- Ignoring the community
- Using the latest dev release always

### Correct Answers
- [0] Fixing issues in core/contrib rather than private forks, so improvements persist and maintenance burden drops

### Explanation
Upstream contributions compound: patches become maintained features, while private hacks accrue upgrade debt.
