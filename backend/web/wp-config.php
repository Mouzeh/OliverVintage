<?php
/**
 * Bedrock WordPress Configuration
 * Oliver Vintage 2026
 */

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

// Database Configuration
define('DB_NAME', $_ENV['DB_DATABASE'] ?? 'oliver_vintage');
define('DB_USER', $_ENV['DB_USER'] ?? 'oliver_user');
define('DB_PASSWORD', $_ENV['DB_PASSWORD'] ?? '');
define('DB_HOST', $_ENV['DB_HOST'] ?? 'db-store:3306');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

// WordPress URL
define('WP_HOME', $_ENV['WP_HOME'] ?? 'http://localhost:8080');
define('WP_SITEURL', $_ENV['WP_SITEURL'] ?? 'http://localhost:8080/wp');

// Content Directory
define('WP_CONTENT_DIR', __DIR__ . '/web/app');
define('WP_CONTENT_URL', WP_HOME . '/app');

// Environment
define('WP_ENVIRONMENT_TYPE', $_ENV['WP_ENV'] ?? 'development');

// Debug
define('WP_DEBUG', WP_ENVIRONMENT_TYPE === 'development');
define('WP_DEBUG_LOG', WP_ENVIRONMENT_TYPE === 'development');
define('WP_DEBUG_DISPLAY', WP_ENVIRONMENT_TYPE === 'development');

// Disable file editor
define('DISALLOW_FILE_EDIT', true);
define('DISALLOW_FILE_MODS', true);

// GraphQL
define('GRAPHQL_DEBUG', WP_ENVIRONMENT_TYPE === 'development');

// Salt Keys
define('AUTH_KEY', $_ENV['AUTH_KEY'] ?? '');
define('SECURE_AUTH_KEY', $_ENV['SECURE_AUTH_KEY'] ?? '');
define('LOGGED_IN_KEY', $_ENV['LOGGED_IN_KEY'] ?? '');
define('NONCE_KEY', $_ENV['NONCE_KEY'] ?? '');
define('AUTH_SALT', $_ENV['AUTH_SALT'] ?? '');
define('SECURE_AUTH_SALT', $_ENV['SECURE_AUTH_SALT'] ?? '');
define('LOGGED_IN_SALT', $_ENV['LOGGED_IN_SALT'] ?? '');
define('NONCE_SALT', $_ENV['NONCE_SALT'] ?? '');

$table_prefix = 'wp_';

require_once __DIR__ . '/web/wp/wp-settings.php';
