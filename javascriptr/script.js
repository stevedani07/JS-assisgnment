// pascal case: RobertDowneyJunior
// camelCase: robertDowneyJunior
// kebab-case: robert-downey-junior

const student = {
    name: "John",
    standard: 10,
    medium: "english",
    marks: [
        { subject: "tamil", mark: 70 },
        { subject: "english", mark: 50 },
        { subject: "maths", mark: 80 },
    ],
};
const student2 = {
    name: "Jack",
    standard: 10,
    medium: "french",
    marks: [
        { subject: "french", mark: 100 },
        { subject: "english", mark: 90 },
        { subject: "maths", mark: 50 },
    ],
};


function mathsMarks(mathMarks, name) {
    console.log("maths marks of " + name + ":", mathMarks);
}

mathsMarks(student.marks[2].mark, student.name)
mathsMarks(student2.marks[2].mark, student2.name);