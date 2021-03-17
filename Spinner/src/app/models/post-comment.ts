export class PostComment {
    id: number;
    comment: string;
    commentTime: Date;
    likes: number;

    constructor() {
        this.commentTime = new Date();
        this.comment = "";
        this.likes = 0;
    }
}
