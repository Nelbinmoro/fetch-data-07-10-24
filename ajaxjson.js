function getdata(){
    console.log("btn clicked");


 //step 1
 var nel = new XMLHttpRequest();
 //step 2 
 nel.open("GET","data.json",true);
 //step 3
 nel.send();
 //step 4
 nel.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        console.log(this.responseText)
        var data = JSON.parse(this.responseText)
        let val="";
        for (let i = 0; i <data.length; i++){
            val += `<li>${data[i].name} ,${data[i].age}</li>`
            document.getElementById('txt2').innerHTML =val
       }
       
        
    }

 }

}