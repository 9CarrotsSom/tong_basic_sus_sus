export interface infoSkill {
    nameSkill: string,
    score: number
}

export class Skills {
    data: infoSkill[] = [];

    constructor(){}

    getSkills(): infoSkill[] {
        return this.data;
    }

    addSkill(_info: infoSkill): void{
        this.data.push(_info);
    }
}