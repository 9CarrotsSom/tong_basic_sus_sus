export interface infoEducation {
    schoolName: string
}

export class Educations {
    data: infoEducation[] = [];

    constructor(){}

    getEducations(): infoEducation[] {
        return this.data;
    }

    addEducation(_info: infoEducation): void{
        this.data.push(_info);
    }
}