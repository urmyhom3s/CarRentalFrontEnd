const { setServers } = require("node:dns/promises");
setServers(["1.1.1.1", "8.8.8.8"]);

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
  env:{
    FRONTEND_URL: process.env.FRONTEND_URL,
    BACKEND_URL : process.env.BACKEND_URL
  }
}