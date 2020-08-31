var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

const percentagesOfStudents = () => {
    var numberOfStudents = 15;
    var numberOfMentors = 8;
    var total = numberOfStudents+numberOfMentors;
    return console.log(Math.round(numberOfStudents/total));
}

const percentagesOfMentors = () => {
    var numberOfStudents = 15;
    var numberOfMentors = 8;
    var total = numberOfStudents+numberOfMentors;
    return console.log(Math.round(numberOfMentors/total));
}
percentagesOfMentors(15,8);



const message = () => {
    let studentPercentage = percentagesOfStudents();
    let mentorsPercentage = percentagesOfMentors();
    return console.log("The percentage of Students is " + studentPercentage + " and the percentage of mentors is " + mentorsPercentage);
}

percentagesOfStudents();
percentagesOfMentors();
message();

