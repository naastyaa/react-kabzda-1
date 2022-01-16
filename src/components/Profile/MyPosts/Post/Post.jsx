import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea> fgh</textarea>
                <button> Add post</button>

            </div>

            <div className={s.post}>
               <Post/>
            </div>
        </div>
    );
}
export default MyPosts;