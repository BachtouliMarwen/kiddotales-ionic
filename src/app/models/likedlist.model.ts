export class LikedList {
    LikedlistId?: string;
    userId: string;
    storyIds: string[];
    createdAt?: Date;

    constructor(userId: string, storyIds: string[] = []){
        this.userId = userId;
        this.storyIds = storyIds;
        this.createdAt = new Date;
    }
}
