import { PostComment } from '../models/post-comment';
import { Song } from '../models/song';

export class Post {
    id: number;
    title: string;
    postTime: Date;
    songs: Song[];
    comments: PostComment[];
    likes: number;
}
