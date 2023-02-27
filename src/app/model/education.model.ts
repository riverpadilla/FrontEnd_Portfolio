export class EducationModel {

    id?:number;
    school:string;
    title:string;
    logoUrl:string;
    startYear:string;
    endYear:string;
    description:string;

    constructor(
        school:string ="",
        title:string ="",
        logoUrl:string ="",
        startYear:string ="",
        endYear:string="",
        description:string =""
    ){
        this.school =school;
        this.title =title;
        this.logoUrl =logoUrl;
        this.startYear =startYear;
        this.endYear=endYear;
        this.description =description;
    }
}