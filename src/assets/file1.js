//import {wallet} from "./contracts/scripts/wallet";

var walletBtn = document.getElementById("walletBtn");
var email = document.getElementById("walletEmail");
var password1 = document.getElementById("walletPassword1");
var password2 = document.getElementById("walletPassword2");

// walletBtn.addEventListener("click", function() {
// //    if(password1.value === password2.value){//other password validations including email
// //         console.log(email.value);
// //         console.log(password1.value);
// //         console.log(password2.value);

// //         console.log(getWallet());
// //    }
//    //Once validations passes, I need to make an api call to zerver to send email and verification to user email
//    //then I'd collect a code from which I will create a wallet for my users.
//   // getWallet();
// })

function getWallet() {
  var me = {
    name: " Uche",
    age: 23,
  };
  //console.log("Hello logger from the file1.js, your email is "+me.name);
  return me;
}
const wallet = "hello, my wallet is rich";
//export default getWallet;
export { getWallet, wallet };
