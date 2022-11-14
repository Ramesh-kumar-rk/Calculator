let num = ""
    let answer = ""
    function add(value){
        num += value;
       document.querySelector("#input").value = num;
    }
    function clr(){
       num = ""
        document.querySelector("#input").value = "";
    }
    function sum(){
        answer = eval(num);
       document.querySelector("#input").value = answer; 
       num = answer;
    }
    function back(){
       let num = document.querySelector("#input").value;
      // for(let i = num.length - 2; i >= 0 ; i--)
         let num1 = num.toString();
         let newNum  = num1.slice(0,-1);
       
         document.querySelector("#input").value = newNum;
        // num = newNum;
         //alert(newNum);  
       
       
    }
