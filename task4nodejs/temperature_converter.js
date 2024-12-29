const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to convert temperatures
function convertTemperature(temp, fromUnit, toUnit) {
    let result;

    if (fromUnit === "C") {
        if (toUnit === "F") {
            result = (temp * 9) / 5 + 32; // Celsius to Fahrenheit
        } else if (toUnit === "K") {
            result = temp + 273.15; // Celsius to Kelvin
        } else {
            result = temp; // No conversion needed
        }
    } else if (fromUnit === "F") {
        if (toUnit === "C") {
            result = ((temp - 32) * 5) / 9; // Fahrenheit to Celsius
        } else if (toUnit === "K") {
            result = ((temp - 32) * 5) / 9 + 273.15; // Fahrenheit to Kelvin
        } else {
            result = temp; // No conversion needed
        }
    } else if (fromUnit === "K") {
        if (toUnit === "C") {
            result = temp - 273.15; // Kelvin to Celsius
        } else if (toUnit === "F") {
            result = ((temp - 273.15) * 9) / 5 + 32; // Kelvin to Fahrenheit
        } else {
            result = temp; // No conversion needed
        }
    }

    return result;
}

// Prompt the user for input
rl.question("Enter the temperature (e.g., 30C, 86F, 300K): ", (input) => {
    const temp = parseFloat(input);
    const unit = input[input.length - 1].toUpperCase();

    if (isNaN(temp) || !["C", "F", "K"].includes(unit)) {
        console.log("Invalid input. Please enter a valid temperature (e.g., 30C, 86F, 300K).");
        rl.close();
        return;
    }

    console.log(`\nConverting ${temp}${unit}:`);
    if (unit !== "C") console.log(`Celsius: ${convertTemperature(temp, unit, "C").toFixed(2)}°C`);
    if (unit !== "F") console.log(`Fahrenheit: ${convertTemperature(temp, unit, "F").toFixed(2)}°F`);
    if (unit !== "K") console.log(`Kelvin: ${convertTemperature(temp, unit, "K").toFixed(2)}K`);

    rl.close();
});
