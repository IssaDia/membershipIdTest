function createCheckDigit(membershipId) {
  // while (membershipId.length > 1) {
  //   sumDigits(membershipId);
  // }
}

createCheckDigit("125656");

function sumDigits(membershipId) {
  let membershipIdSum = 0;

  for (let singleMembershipId in membershipId) {
    membershipIdSum += Number(singleMembershipId);
    if (membershipIdSum.toString().length === 1) {
      break;
    }
  }
//   console.log(membershipIdSum);
}
