/**
 * Version Configuration
 *
 * This file controls which portfolio version is shown by default on the root URL (/).
 *
 * To change the default version:
 * - Simply update the DEFAULT_VERSION constant below
 * - Available versions: "v1", "v2", "v3", etc.
 * - Make sure the version folder exists in src/versions/
 *
 * URL Structure:
 * - / (root) → Shows the default version specified below
 * - /v1 → Version 1 (current design)
 * - /v2 → Version 2 (new Figma design)
 * - /v3 → Version 3 (future versions)
 */

export const DEFAULT_VERSION = "v2";

/**
 * Version Registry
 *
 * Add new versions here as you create them.
 * Each version should have:
 * - id: URL path segment
 * - name: Display name
 * - path: Path to the Main component
 */
export const VERSIONS = {
  v1: {
    id: "v1",
    name: "Version 1 - Classic",
    description: "Original portfolio design",
  },
  v2: {
    id: "v2",
    name: "Version 2 - Modern",
    description: "New Figma-based design",
  },
};

/**
 * Get the available version IDs
 */
export const getAvailableVersions = () => Object.keys(VERSIONS);

/**
 * Check if a version exists
 */
export const isValidVersion = (versionId) => {
  return VERSIONS.hasOwnProperty(versionId);
};
