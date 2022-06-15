function createCheckDigit(membershipId) {

  // retrieve the sum of the membershipId
  const result = sumDigits(membershipId);

  // check if the sum of the membershipId is more than two digits then return then return the sum if so
  if (result.toString().length > 1) {
     console.log(sumDigits(result.toString()));
  }

  // return the sum if the total of membership id's is one digit 
  else {

    console.log(result);
  }
    

}

function sumDigits(membershipId) {

  // put all the separate values in an array
  const membershipIdArray = membershipId.split("");

  // transform all values from array to numbers
  const membershipIdArrayNumbered = membershipIdArray.map(Number);

  // initial value from reduce operation representing starting sum operation
  const initialValue = 0; 
  
  // sum all the values and return it
  const membershipIdReducedSum = membershipIdArrayNumbered.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
   
      return membershipIdReducedSum;
    
  }

createCheckDigit("55555");

