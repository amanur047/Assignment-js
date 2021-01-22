// https://github.com/amanur047/Assignment-js
function kilometerToMeter(kilometer)
{
     var  meter = kilometer*1000;
     var result = console.log("THE DISTANCE IN METER :",meter);
     return result;
}
 kilometerToMeter(1.5);

 function budgetCalculator(watch,phone,laptop)
 {
         var watchPrice = watch*50;
         var phonePrice = phone*100;
         var laptopPrice = laptop*300;
         var sumPrice = watchPrice+phonePrice+laptopPrice;
         var totalPrice = console.log("TOTAL PRICE :",sumPrice);
         return totalPrice;
 }
 budgetCalculator(2,3,4);

  function hotelCost(days){
      if(days<=10)
      {
          var rent = days*100;
           var totaLRent = console.log("YOUR RENT IS :",rent);
           return totaLRent;
      }
    else  if(days<=20)
      {
          var rent = days*80;
           var totaLRent = console.log( "YOUR RENT IS :",rent);
           return totaLRent;
      }
      else
      {
        var rent = days*50;
        var totaLRent = console.log( "YOUR RENT IS :",rent);
        return totaLRent;
      }
  }
  hotelCost(71);
  
 function megaFriend(str){
     var words = str.split(' ')
     var largest = " "
      for (var i=0; i<=str.length;i++) 
      {
          if(words.length>largest)
          {
             largest = words;
          }
          var longName = console.log(largest.length);
          return longName;
      }
    
 }
 megaFriend("polok naim amanur tazim");
 