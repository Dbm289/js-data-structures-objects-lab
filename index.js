// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, { [key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey (driver, key) {
    const newOne = Object.assign({}, driver);
    delete newOne[key];
    return newOne;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
    delete driver[key];
    return driver;
}