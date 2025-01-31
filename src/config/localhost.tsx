/* eslint-disable import/no-anonymous-default-export */
const backendUrl = `https://broker-bewertungen.de/api`;

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = false;
// const apiDocumentationUrl = `http://localhost:8080/documentation`;

const reCaptchaV2SiteKey =
  '6LcSjmIiAAAAABZ0EGkmeeY9ChO3XsNmN--fjlfb';

/**
 * Frontend Url.
 */
const frontendUrl = {
  host: 'broker-bewertungen.de',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'single';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = false;
const stripePublishableKey = '';

export default {
  frontendUrl,
  backendUrl,
  apiDocumentationUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey,
  reCaptchaV2SiteKey,
};
