import { Category } from "./category.model";

export class Story {
    id?: string;
    title: string;
    content: string;
    categoryId: string;
    categoryName?: string;
    

    constructor(
        id: string|undefined = undefined,
        title: string = '',
        content: string = '',
        categoryId: string = '',
        categoryName: string | undefined = ' No Category'
    ){
        this.id = id;
        this.title = title;
        this.content = content;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }
}
