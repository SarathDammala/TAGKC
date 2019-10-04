export class EditorChoiceData {
    public imageUrl: string;
    public author: string;
    public headLine: string;
    public summary: string;
    public publishedDtTm: string;
    public article;

    constructor(imageUrl: string, headLine: string, summary: string, publishedDtTm: string, article, author: string) {
       this.imageUrl = imageUrl;
       this.headLine = headLine;
       this.summary = summary;
       this.publishedDtTm = publishedDtTm;
       this.article = article;
       this.author  = author;
    }
  }
