export class Topic {
    id: number;
    name: string;
    createdOn: string;
    about: string;
    createdBy: number; //could just use name of creator when created
    posts: number[]; //posts[post id number]
    //followers[]
}