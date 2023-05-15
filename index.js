
//question 1


const user = {
    id: 339,
    name: "fred",
    education: {
        degree: "masters"
    }
};

// Destructure the `degree` key from the `education` object
const { education: { degree } } = user;

console.log(degree); // Output: masters


//question 2

function isNumberInRange(number, min, max) {
    return number >= min && number <= max;
}

const number = 60;
const rangeMin = 50;
const rangeMax = 100;

const isInRange = isNumberInRange(number, rangeMin, rangeMax);
console.log(isInRange); // Output: true



//question 3

let name = "Mary";
function greetPeople() {
    let name = "Clause"; console.log(`Hello ${name}`)
}

greetPeople()

//the output is hello clause the priority is given to variable in the fuction since it exists in is scope


//question 4

const studentMarks = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68
};

function calculateAverageMarks(marks) {
    let sum = 0;
    let count = 0;

    for (const student in marks) {
        sum += marks[student];
        count++;
    }

    return sum / count;
}

function determineGrade(average) {
    if (average < 60) {
        return "F";
    } else if (average < 70) {
        return "D";
    } else if (average < 80) {
        return "C";
    } else if (average < 90) {
        return "B";
    } else {
        return "A";
    }
}

const averageMarks = calculateAverageMarks(studentMarks);
const grade = determineGrade(averageMarks);

console.log("Average marks:", averageMarks);
console.log("Grade:", grade);



//question 5

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinals = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
    let ordinalIndex = i + 1;
    let ordinal = (ordinalIndex > 3) ? ordinals[0] : ordinals[ordinalIndex];
    console.log(`${ordinalIndex}${ordinal} choice is ${colors[i]}.`);
}
