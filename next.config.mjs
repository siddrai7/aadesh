/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Lets phones on the same Wi-Fi open the dev server (e.g. http://10.176.134.35:3001).
  // Without this, Next.js blocks the dev JavaScript and the page never comes alive.
  // Add your machine's current LAN IP here if it changes.
  allowedDevOrigins: ["10.176.134.35", "192.168.*.*"],
};

export default nextConfig;
