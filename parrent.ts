export interface infoParrent {
    firstname: string
    lastname: string
    work: string
    role: string
}

export class Parrents {
    data: infoParrent[] = [];

    constructor(){}

    getParrent(): infoParrent[] {
        return this.data;
    }

    addParrent(_info: infoParrent): void{
        this.data.push(_info);
    }
}