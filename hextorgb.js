/* Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX.

Links that helped with conversions & Regex:
https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

*/

function convertColorFormat(color) {
    // Check if the input is in HEX format. (test) searchers for a match between the input and the regex.
    if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
        // Remove the # symbol (substring(1)) and split the color value into RGB components (match)
        const hexComponents = color.substring(1).match(/[0-9A-F]{2}/gi);

        if (hexComponents.length === 3) {
            // Convert HEX to RGB by checking each (rgb) component and converting them to corresponding decimal values
            // The 16 converts the hexadecimal string into a decimal number. 
            const r = parseInt(hexComponents[0], 16);
            const g = parseInt(hexComponents[1], 16);
            const b = parseInt(hexComponents[2], 16);

            return `RGB: ${r}, ${g}, ${b}`;
        }
    }

    // Check if the input is in RGB format. (test) searches for a match between the input and the regex.
    if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(color)) {
        // Extract the RGB components using regular expression
        const rgbComponents = color.match(/\d+/g);

        if (rgbComponents.length === 3) {
            // Convert RGB to HEX
            const r = parseInt(rgbComponents[0]);
            const g = parseInt(rgbComponents[1]);
            const b = parseInt(rgbComponents[2]);

            // Calculating the HEX value.
            const hex = `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
            return `HEX: ${hex}`;
        }
    }

    // If the input format is not recognized
    return "Invalid color format. Please provide either HEX or RGB format.";
}

// Some Examples
console.log(convertColorFormat("#FF0000"));
console.log(convertColorFormat("rgb(0, 255, 0)"));
console.log(convertColorFormat("#00FFFF"));
console.log(convertColorFormat("rgb(255, 0, 255)"));
console.log(convertColorFormat("invalid"));
console.log(convertColorFormat("#000"));
console.log(convertColorFormat("rgb(255, 255, 0)"));
console.log(convertColorFormat("#336699"));
console.log(convertColorFormat("rgb(0, 128, 255)"));
console.log(convertColorFormat("#ABCDEF"));
console.log(convertColorFormat("#HIYA"));

