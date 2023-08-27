const os = require("os");
function getIpAddress() {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(networkInterfaces)) {
    const interfaceInfo = networkInterfaces[interfaceName];
    for (const info of interfaceInfo) {
      if (!info.internal && info.family === "IPv4") {
        return info.address;
      }
    }
  }
  return "IP address not found";
}

module.exports = { getIpAddress };
