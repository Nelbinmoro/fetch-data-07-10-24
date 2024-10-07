function change() {
    console.log("btn clicked");


 //step 1
 var nel = new XMLHttpRequest();
 //step 2 
 nel.open("GET","data.txt",true);
 //step 3
 nel.send();
 //step 4
 nel.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        console.log(this.responseText)
        document.getElementById('txt1').innerText=this.responseText
    }

 }



}