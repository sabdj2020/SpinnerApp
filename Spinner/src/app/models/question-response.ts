import { Song } from "./song";

export class QuestionResponse {
    id: number;
    song: Song;
    likes: number;
    questionDate: Date;
}
