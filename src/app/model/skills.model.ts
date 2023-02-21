export class SkillsModel {
    
    id?: number;
    description:string;
    grade:number;

    constructor(
        description:string="",
        grade:number=0
    ){
        this.description=description;
        this.grade=grade;
    }
}
