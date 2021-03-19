export class PostComment {
    id: number;
    comment: string;
    commentTime: Date;
    likes: number;
    user_id: number;

    constructor() {
        this.commentTime = new Date();
        this.comment = "";
        this.likes = 0;
    }
}
