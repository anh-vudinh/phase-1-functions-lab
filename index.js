// Code your solution in this file!
let blockA;
let blockB;
let blockHQ;
let distanceInBlocks;
let distanceInFeet;
let distanceInFeetConversion;
let start;
let destination;
let fare;
let msg;

function distanceFromHqInBlocks(blockA, blockHQ){
    blockHQ = 42;
    return distanceInBlocks = Math.abs(blockA-blockHQ);
}

function distanceFromHqInFeet(blockA, blockHQ = 42){
    distanceInBlocks = Math.abs(blockA-blockHQ);
    return distanceInFeet = distanceInBlocks*264;
}

function distanceTravelledInFeet(blockA, blockB){
    distanceInBlocks = Math.abs(blockA-blockB);
    return distanceInFeetConversion = distanceInBlocks*264;
}

function calculatesFarePrice(start, destination){
    let x = Math.abs(destination-start)*264;

    if(x <= 400){
        fare = 0;
        return fare;
    }else if(x > 400 && x <= 2000){
        fare = (x-400)*0.02;
        return fare;
    }else if (x > 2000 && x <= 2500){
        fare = 25;
        return fare;
    }else if(x > 2500){
        msg = "cannot travel that far";
          return msg;
    }
}