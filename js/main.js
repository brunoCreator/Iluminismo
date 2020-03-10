var wordlist = document.getElementById("text").innerHTML.split(' ');
var i = 0;

var n = document.getElementById("n").value;

n = 60000/n;

if(i < wordlist.length){
  setInterval(words, n);
}else{
  document.getElementById("w").innerHTML = "acabo caralho";
}


function words(){  
    document.getElementById("w").innerHTML = wordlist[i];
    i++; 
}

//alert("error");