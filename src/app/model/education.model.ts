export class EducationModel {

    id?:number;
    school:string;
    title:string;
    logoUrl:string;
    startDate:string;
    endDate:string;
    description:string;

    constructor(
        school:string ="",
        title:string ="",
        logoUrl:string ="",
        startDate:string ="",
        endDate:string="",
        description:string =""
    ){
        this.school =school;
        this.title =title;
        this.logoUrl =logoUrl;
        this.startDate =startDate;
        this.endDate=endDate;
        this.description =description;
    }
}