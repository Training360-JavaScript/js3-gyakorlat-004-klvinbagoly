const macRegex = /^([0-9A-Fa-f]{2}(:|-)){5}[0-9A-Fa-f]{2}$/
const macRegex2 = /^([0-9A-Fa-f]{3}.){3}[0-9A-Fa-f]{3}$/
const checkMac = address => macRegex.exec(address) || macRegex2.exec(address) ? true : false;

export default checkMac