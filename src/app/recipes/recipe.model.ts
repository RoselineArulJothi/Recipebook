export class Recipe{
    public name: String;
    public description: String;
    public imagepath: String;

    constructor(name:string, desc:string, imagepath:string){
        this.name=name;
        this.description=desc;
        this.imagepath=imagepath;
    }
}