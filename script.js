let abc=0;

async function getdata(data){
      abc=data;
    let res1=await fetch('./data.json')
    let result=await res1.json();
   document.getElementById("v1").innerHTML=result[data-1].id;
    document.getElementById("v2").innerHTML=result[data-1].name;
    document.getElementById("v3").innerHTML=result[data-1].email;


  }

  function pre(){
  if(abc==1){
    alert("There is no previous !!!");
  }
  else{
   getdata(abc-1)
  }
  }

  function next(){
    if(abc==9){
        alert("There is no next data !!!");
      }
      else{
       getdata(abc+1)
      }
  }
