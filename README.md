# Skeleton Project

**Skeleton Project** is a modern skeleton laravel app built with **Laravel**, **VUE**, **Inertia.js**, **TailwindCSS**, **Ziggy**

Based from: **[github.com/nunomaduro/laravel-starter-kit](https://github.com/nunomaduro/laravel-starter-kit)**

## Getting Started

> **Requires [PHP 8.4+](https://php.net/releases/)**.
> **Requires [Docker](https://www.docker.com/)**.
> **Requires [Docker Compose](https://docs.docker.com/compose/)**.
> **Requires [Git](https://git-scm.com/)**.

### Initial Setup

Navigate to your project and complete the setup:

```bash
cd project-skeleton

Build and start Sail

```bash
./vendor/bin/sail up -d
```

> If `sail` is not available, you can add an alias:

```bash
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
source ~/.bashrc
```

> ⚠️ After starting Sail, set correct folder permissions (important for storage & cache):

```bash
sudo chown -R $USER:www-data .
chmod -R 775 .
```

# Setup project
sail composer setup

# Start the development server
sail composer dev
```

### Optional: Browser Testing Setup

If you plan to use Pest's browser testing capabilities:

```bash
npm install playwright
npx playwright install
```

### Verify Installation

Run the test suite to ensure everything is configured correctly:

```bash
composer test
```

You should see 100% test coverage and all quality checks passing.

## Available Tooling

### Development
- `composer dev` - Starts Laravel server, queue worker, log monitoring, and Vite dev server concurrently

### Code Quality
- `composer lint` - Runs Rector (refactoring), Pint (PHP formatting), and Prettier (JS/TS formatting)
- `composer test:lint` - Dry-run mode for CI/CD pipelines

### Testing
- `composer test:type-coverage` - Ensures 100% type coverage with Pest
- `composer test:types` - Runs PHPStan at level 9 (maximum strictness)
- `composer test:unit` - Runs Pest tests with 100% code coverage requirement
- `composer test` - Runs the complete test suite (type coverage, unit tests, linting, static analysis)

### Maintenance
- `composer update:requirements` - Updates all PHP and NPM dependencies to latest versions

## License

**Laravel Starter Kit** was created by **[Nuno Maduro](https://x.com/enunomaduro)** under the **[MIT license](https://opensource.org/licenses/MIT)**.
