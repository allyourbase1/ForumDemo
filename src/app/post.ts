export class Post {
    id: number;
    submittedBy: number;
    title: string;
    timeCreated: string;
    content: string;
    topic: number; // topic is a component
    votes: number;
    contentOn: boolean;
    buttonText: string;
    read: boolean;
    backgroundColor: string;
}