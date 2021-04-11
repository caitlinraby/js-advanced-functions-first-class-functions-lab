// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]];
const returnLastTwoDrivers = (drivers) => [drivers[2], drivers[3]];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integerOne) {
    return (fare) => fare * integerOne;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, callBackFunction) {
    return callBackFunction(arrayOfDrivers);
} 