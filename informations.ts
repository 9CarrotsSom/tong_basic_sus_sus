import { Skills, infoSkill } from "./skill";
import { Parrents, infoParrent } from "./parrent";
import { Educations, infoEducation } from "./education";
const _skills = new Skills();
const _parrents = new Parrents(); 
const _educations = new Educations(); 


interface info {
    firstname: string
    lastname: string
    email: string
    phoneNumber: string
    passport: string
    age: number
    skills: infoSkill[]
    parrents: infoParrent[]
    education: infoEducation[]
}

export class Information {
    data: info;

    constructor(){
        this.data = {
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            passport: "",
            age: 0,
            skills: [],
            parrents: [],
            education: [],
        }
    }

    getInfo(): info {
        this.data.skills = _skills.getSkills();
        this.data.parrents = _parrents.getParrent();
        this.data.education = _educations.getEducations();
        return this.data;
    }

    setInfo(_info: info): void{
        this.data = _info;
    }

    addSkill(_infoSkill: infoSkill): void {
        _skills.addSkill(_infoSkill);
    }

    addParrent(_infoParrent: infoParrent): void {
        _parrents.addParrent(_infoParrent);
    }

    addEducation(_infoEducation: infoEducation): void {
        _educations.addEducation(_infoEducation);
    }
}