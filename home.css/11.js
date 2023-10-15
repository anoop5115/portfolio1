

   

 document.getElementById("submit1").onclick= function() {
    console.log("s ckj");
    a=document.getElementById("sideA").value;
    b=document.getElementById("sideB").value;
    c=Math.sqrt(Math.pow(Number(a),2)+Math.pow(Number(b),2));
    console.log(c);

    document.getElementById("sideC").innerHTML="side c"+Math.round(c);
  }
