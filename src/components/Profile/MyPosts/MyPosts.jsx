import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let PostsElements =
        props.posts.map(p =>
            <Post message={p.message} likesCount={p.likesCount}/>,
        )

    let newPostElement = React.createRef();


    let addPost =() =>{
        let text = newPostElement.current.value;
            props.addPost(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>
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