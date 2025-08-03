// Title: Satellite Naming using Earth Engine Strings

// Define satellite name components
var mission = ee.String('Sentinel');
var model = ee.String('2A');
// Concatenate components into a full name
var satelliteName = mission.cat(model);
// Print the final name
print('Full Satellite Name', satelliteName);
// Define satellite name components
var operation = ee.String('Optical');
var agency = ee.String('ESA');
// Concatenate components into a full name
var satName = agency.cat(satelliteName).cat(operation);
// Print the final name
print(satName);
// Define satellite name components
var satName = 'Landsat 8';
// Print the final name
print('The satellite selected is', satName);