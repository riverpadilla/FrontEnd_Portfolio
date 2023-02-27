export class SkillsModel {
    
    id?: number;
    description:string;
    grade:string;

    constructor(
        description:string="",
        grade:string=""
    ){
        this.description=description;
        this.grade=grade;
    }
}
