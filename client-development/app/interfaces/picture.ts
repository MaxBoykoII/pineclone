export interface Picture {
    _id?: string;
    url: string;
    description: string;
    author?: string;
    thumbnail?: string;
    likedBy?: string[]
}