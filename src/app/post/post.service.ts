import { Guid } from 'guid-typescript';
import { Post } from './post.model';
import { posts } from './post.mock';

export class PostService {

    private posts:Post[] = posts;

    getNewPost() { 
        return new Post();
    }

    getPosts() {
        return this.posts;
    }

    addPost(post: Post) {
        post.id = Guid.create();
        post.createdAt = new Date();
        post.updatedAt = new Date();
        this.posts.push(post);
    }

    getPost(id: Guid) {
        return this.posts.find((post:Post) => post.id.equals(id));
    }

    updatePost(post: Post) {
        post.updatedAt = new Date();
        const index = this.posts.findIndex((p: Post) => p.id.equals(post.id));
        this.posts.splice(index, 1, post);
    }

    deletePost(id: Guid) {
        const index = this.posts.findIndex((post: Post) => post.id.equals(id));
        this.posts.splice(index, 1);
    }
}
    