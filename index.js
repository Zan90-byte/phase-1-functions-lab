// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue >= 42){
        return (someValue - 42);
    } else {
        return (42 - Math.abs(someValue));
    }
  }
  //console.log(distanceFromHqInBlocks(34));

//***************************************** */

function distanceFromHqInFeet(someValue) {
    const distInFeet = 264;
    return distanceFromHqInBlocks(someValue) * distInFeet;
  }

  //console.log(distanceFromHqInFeet(34));

  //**************************************** */

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const distInFeet = 264;
    const result = ((start - destination) * distInFeet);
    return Math.abs(result);
  }

  //console.log(distanceTravelledInFeet(43, 44));

  //****************************************** */

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const freeSample = 400;
    const amountPerFoot = 0.02;
    const distance = distanceTravelledInFeet(start, destination);
    const residual = distanceTravelledInFeet(start, destination) - freeSample;
    
    if (distance <= freeSample && distance >= 0){
        return 0;
    } else if (distance > freeSample && distance <= 2000) {
        return residual * amountPerFoot;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}

  //console.log(calculatesFarePrice(50, 58));