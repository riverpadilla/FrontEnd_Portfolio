export class headerModel{

    id?:Number;
    backImage:string;
    name:string;
    position: string;
    profileImage: string;
    location: string;
    email: string;
    about: string;
    githubUrl:string;
    twitterUrl:string;
    facebookUrl: string;
    instagramUrl: string;

    constructor
    (
        backImage:string="",
        name:string="",
        position: string="",
        profileImage: string="",
        location: string="",
        email: string="",
        about: string="",
        githubUrl:string="",
        twitterUrl:string="",
        facebookUrl: string="",
        instagramUrl: string=""
    )
    {
        this.backImage=backImage;
        this.name=name;
        this.position=position;
        this.profileImage=profileImage;
        this.location=location;
        this.email=email;
        this.about=about;
        this.githubUrl=githubUrl;
        this.twitterUrl=twitterUrl;
        this.facebookUrl=facebookUrl;
        this.instagramUrl=instagramUrl;
    }
}