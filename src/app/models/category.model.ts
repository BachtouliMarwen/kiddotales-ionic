export class Category {
    id?: string;
    name: string;
    image: string;

    constructor(id: string|undefined = undefined,
        name:string = '',
        image: string = '',){
            this.id = id;
            this.name = name;
            this.image = image;
    }
}
