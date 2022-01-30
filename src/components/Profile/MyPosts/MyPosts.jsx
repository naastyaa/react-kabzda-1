import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let PostsElements =
        props.posts.map(p =>
            <Post message={p.message} likesCount={p.likesCount}/>,
        )
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button onClick={() => {
                        alert()
                    }}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;