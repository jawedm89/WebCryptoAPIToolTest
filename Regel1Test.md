layout: page
title: "Regel1Test"
permalink: /regel1test/


<!DOCTYPE html>
<html>
<body>

<h1 style="background-color: red;">Hello World!</h1>
    <script>
     window.crypto.getRandomValues(new Uint8Array(16)).then(result => {window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    privateKey, //from generateKey or importKey above
    data //ArrayBuffer of data you want to sign
)}).then(result => {let a = result}).then(function(data) {console.log(data, "was kommt hier wohl raus")})
genRandomNumbers = function getRandomNumbers() {
  if (window.crypto || window.msCrypto) 
  {
  var array = new Uint32Array(10);
  window.crypto.getRandomValues(array);
 
  var randText = document.getElementById("myRandText");
  randText.innerHTML = "The random numbers are: "
  for (var i = 0; i < array.length; i++) {
    randText.innerHTML += array[i] + " \n";
  }
} 
    else throw new Error("Your browser can't generate secure random numbers");
    let textenc = new TextEncoder();
    let data = textenc.encode("hallo ich war verschlüsselt");
    console.log("hi");
   let a =  window.crypto.subtle.generateKey(
    {
        name: "AES-CBC",
        length: 256, //can be  128, 192, or 256
    },
    false, //whether the key is extractable (i.e. can be used in exportKey)
    ["encrypt", "decrypt"] //can be "encrypt", "decrypt", "wrapKey", or "unwrapKey"
).then(key =>  window.crypto.subtle.encrypt(
    {
        name: "AES-CBC",
        //Don't re-use initialization vectors!
        //Always generate a new iv every time your encrypt!
        iv: window.crypto.getRandomValues(new Uint8Array(16)),
    },
    key, //from generateKey or importKey above
    data //ArrayBuffer of data you want to encrypt
));
console.log(a);

}
</script>


  

</body>
</html>
