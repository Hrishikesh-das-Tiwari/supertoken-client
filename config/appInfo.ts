const port = process.env.APP_PORT || 3000;

export function getApiDomain() {
  const apiUrl = "https://supertoken-backend-production-a15a.up.railway.app";
  return apiUrl;
}

export function getWebsiteDomain() {
  return "https://supertoken-auth-frt2.vercel.app/";
}

export const appInfo = {
  appName: "SuperTokens Demo App",
  apiDomain: "https://supertoken-backend-production-a15a.up.railway.app",
  websiteDomain: getWebsiteDomain(),
  apiBasePath: "/api/auth",
  websiteBasePath: "/auth",
};
