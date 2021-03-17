import { QuestionResponse } from "./question-response";

export class DailyQuestion {
    id: number;
    question: string;
    responses: QuestionResponse[];
}
