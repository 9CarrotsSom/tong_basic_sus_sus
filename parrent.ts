export interface infoParrent {
    name: string,
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