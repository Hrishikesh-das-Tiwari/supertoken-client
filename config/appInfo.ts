const port = process.env.APP_PORT || 3000;

export function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 3001;
  const apiUrl =
    process.env.REACT_APP_API_URL ||
    "https://vercel.com/hrishikesh-das-tiwari/server/6HN6SwuWDSaVFS4zQwtbnGQ1c6wH";
  return apiUrl;
}

export function getWebsiteDomain() {
  let host = window.location.hostname;
  if (host === "localhost") {
    return "http://localhost:8888";
  }

  let port = window.location.port;
  if (port !== "0" && port !== "80" && port !== "443" && port !== "") {
    return "https://" + host + ":" + port;
  }
  return "https://" + host;
}

export const websiteDomain =
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  "https://vercel.com/hrishikesh-das-tiwari/server/6HN6SwuWDSaVFS4zQwtbnGQ1c6wH";

export const appInfo = {
  appName: "SuperTokens Demo App",
  apiDomain:
    "https://vercel.com/hrishikesh-das-tiwari/server/6HN6SwuWDSaVFS4zQwtbnGQ1c6wH",
  websiteDomain: getWebsiteDomain(),
  apiBasePath: "/.netlify/functions/auth",
  websiteBasePath: "/auth",
};
