import React from "react";
import s from './Post.module.css';
import MyPosts from "./Post/MyPosts";


const Post = () => {
    return (
            <div className={s.post}>
                <div className={s.item}>
                    <img src="https://static.cnews.fr/sites/default/files/avatar_2_-_date_de_sortie_histoire_casting._tout_savoir_sur_le_film_de_james_cameron_610a65d33f1b6_0.jpeg"/>
                    post1
                </div>
                <MyPosts/>
        </div>
    );
}
export default Post;