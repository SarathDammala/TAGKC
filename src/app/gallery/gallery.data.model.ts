export class GalleryData {
    public imageUrl = [];
    public title: string;
    public summary: string;
    public postedOnDtTm: string;

    constructor(imageUrl: [], title: string, summary: string, postedOnDtTm: string) {
       this.imageUrl = imageUrl;
       this.summary = summary;
       this.title = title;
       this.postedOnDtTm = postedOnDtTm;
    }
  }
