var uniqueRandomArray = require("unique-random-array");
var employeeNames = require("./data.json");

module.exports = {
	all : employeeNames,

	random : uniqueRandomArray(employeeNames)
}