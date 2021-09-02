let day: [number, string]

day = [0, 'Monday']; // valid
//day = ['zero', 'Monday']; // invalid: 'zero' is not numeric
console.log(day[0]); // 0
console.log(day[1]); // Monday
//day[2] = 'Saturday'; // valid: [0, 'Saturday']
//day[3] = false; 