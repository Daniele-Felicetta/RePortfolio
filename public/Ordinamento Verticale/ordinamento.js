console.log("Starting");
text=document.getElementById("text");
button=document.getElementsByTagName("button")[0];
container=document.getElementById("container");
container2=document.getElementById("container2");
result=document.getElementById("result");
charCouneter=document.getElementById("charCounter");
wordsCounter=document.getElementById("wordsCounter");
counters=document.getElementById("counters");

button.addEventListener("click",function(){
    container.style.display="none";
    container2.style.display="flex";
    counters.style.display="flex";
    result.innerHTML=text.value;
    var textNoSpace=text.value.replace(/\s/g,'');
    charCounter.innerHTML=textNoSpace.length;
    console.log(text.value);
    var textWords=text.value.split(" ");
    console.log(textWords);
    wordsCounter.innerHTML=textWords.length;
    console.log(textWords[9]);
});