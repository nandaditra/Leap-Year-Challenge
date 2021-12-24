function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
    var yearEnter = year;

    
    if(yearEnter === 0){
        return yearEnter;
    } else if(yearEnter !== 0){
      var divisibleFour = yearEnter%4;
      var divisibleOneHund = yearEnter%100;
      var divisibleFourHund = yearEnter%400;   
      var result;
      
      if(divisibleFour === 0){
          if(divisibleOneHund === 0){
              if(divisibleFourHund === 0){
                  result = "Leap year.";
              } else {
                  result = "Not leap year.";
              }
          } else if(divisibleOneHund !== 0){
              if(divisibleFourHund === 0){
                  result = "Leap year.";
              } else {
                  result = "Leap year.";
              }
          } 
      } else if(divisibleFour !== 0){
             if(divisibleOneHund === 0){
                 if(divisibleOneFour!==0){
                     result="Not leap year.";
                 } else {
                     result="Not leap year.";
                 }
                 result="";
             } else if(divisibleOneHund !== 0){
                     result="Not leap year.";
             }
      }
      return result;
    }

/**************Don't change the code below****************/    

}
