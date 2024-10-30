export class LikedList {
    userId: string;
    likedStoryIds: string[];

    constructor(userId: string, likedStoryIds: string[] = []) {
        this.userId = userId;
        this.likedStoryIds = likedStoryIds; // Initialize with empty array
    }
}
