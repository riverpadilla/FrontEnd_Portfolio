export class headerModel{

    id?:Number;
    backImage:String;
    name:String;
    position: String;
    profileImage: String;
    location: String;
    email: String;
    about: String;
    githubUrl:String;
    twitterUrl:String;
    facebookUrl: String;
    instagramUrl: String;

    constructor
    (
        backImage:String="",
        name:String="",
        position: String="",
        profileImage: String="",
        location: String="",
        email: String="",
        about: String="",
        githubUrl:String="",
        twitterUrl:String="",
        facebookUrl: String="",
        instagramUrl: String=""
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