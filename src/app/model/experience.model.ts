export class ExperienceModel {

    id?:number;
    logoUrl:string;
    description:string;
    position:string;
    company:string;
    actualJob:boolean;
    startDate:string;
    endDate:string;
    city:string;
    country:string;

    constructor(
        logoUrl:string="",
        description:string="",
        position:string="",
        company:string="",
        actualJob:boolean=false,
        startDate:string="",
        endDate:string="",
        city:string="",
        country:string=""
    ){
        this.logoUrl=logoUrl;
        this.description=description;
        this.position=position;
        this.company=company;
        this.actualJob=actualJob;
        this.startDate=startDate;
        this.endDate=endDate;
        this.city=city;
        this.country=country
    }
    
}
