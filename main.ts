import { Information } from "./informations";

const person = new Information();
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

person.addSkill({
    nameSkill: "JS",
    score: 30,
});

person.addSkill({
    nameSkill: "TS",
    score: 15,
});

person.addParrent({
    name: "Puttikorn",
    role: "ป้าข้างบ้าน"
});

person.addParrent({
    name: "Tananop",
    role: "หนูท่อ"
});

person.addEducation({
    schoolName: "somewhere",
});

console.log(person.getInfo());