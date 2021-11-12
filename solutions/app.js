import checkVisa from './visa';
import checkIP from './ip';
import checkMac from './mac';


const checker = {
  rules: {
    checkVisa,checkIP,checkMac
  },
  validate(string,pattern){
    return pattern === 'visa' ? this.rules.checkVisa(string) : 
    pattern === 'ip' ? this.rules.checkIP(string) :
    pattern === 'mac' ? this.rules.checkMac(string) : ''
  }
}




export default checker