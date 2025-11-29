function firstNonRepeatedChar(str) {

    if (!str || str.length === 0) {
        return null;
    }
    const charCounts = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charCounts[char] === 1) {
            return char;
        }
    }

    return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
	
