import { PostComment } from '../models/post-comment';
import { Song } from '../models/song';
import { Band } from '../models/band';

export class Post {
    id: number;
    title: string;
    postTime: Date;
    songs: Song[];
    comments: PostComment[];
    likes: number;
    band: Band;
}
