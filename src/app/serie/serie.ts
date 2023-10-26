export class Serie {
    id: number;
    name: string; 
    channel:string; 
    seasons:number; 
    summary: string; 
    link: string;
    photo: string

    public constructor(
        id: number,
        name: string, 
        channel:string, 
        seasons:number, 
        summary: string, 
        link: string,
        photo: string

    )
    {
        this.id=id;
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.summary=summary;
        this.link=link;
        this.photo=photo;
    }

}
