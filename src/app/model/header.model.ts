export class header{

    id?:Number;
    backImage:String;
    name:String;
    position: String;
    profileImage: String;
    location: String;
    email: String;
    about: String;

    constructor
    (
        backImage:String="",
        name:String="",
        position: String="",
        profileImage: String="",
        location: String="",
        email: String="",
        about: String=""
    )
    {
        this.backImage=backImage;
        this.name=name;
        this.position=position;
        this.profileImage=profileImage;
        this.location=location;
        this.email=email;
        this.about=about;
    }
}