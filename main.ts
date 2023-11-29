import { Information } from "./informations";

const person = new Information();

// settting for basic infomation
person.setInfo({
    firstname: "Kanakorn",
    lastname: "Thaiprakhon",
    email: "NOrNor.KnK@outlook.jp",
    phoneNumber: "0864092162",
    passport: "1100703856801",
    age: 17,
    skills: [],
    parrents: [],
    education: [],
});

// Add skill
person.addSkill({
    nameSkill: "JS",
    score: 30,
});
// add one more skill
person.addSkill({
    nameSkill: "TS",
    score: 15,
});
// add parent
person.addParrent({
    firstname: "Puttikorn",
    lastname: "",
    work: "",
    role: "ป้าข้างบ้าน"
});

person.addParrent({
    firstname: "Tananop",
    lastname: "",
    work: "",
    role: "หนูท่อ"
});

person.addEducation({
    schoolName: "SBTVC",
    educationLevel: "Vocational Certificate",
    province: "Chonburi",
});

console.log(person.getInfo());