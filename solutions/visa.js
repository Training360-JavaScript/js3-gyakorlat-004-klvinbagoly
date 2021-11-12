const visaRegex = /^4(\d{12}|\d{15})$/
const checkVisa = number => number.match(visaRegex) ? true : false;



export default checkVisa