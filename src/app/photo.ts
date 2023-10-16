export class Photo {
    albumId : number;
    id : number;
    title : string;
    url : string;
    thumbnailUrl : string;

    constructor (obj:any) {
        this.albumId = obj.albumId;
        this.id = obj.id;
        this.title = obj.title;
        this.url = obj.url;
        this.thumbnailUrl = obj.thumbnailUrl;
    }

}
