import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";


const Profile = () => {
    return <div >
        <div>
            <img width={120}
                src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop "/>
        </div>
        <div>Ava+description
        </div>
        <MyPost/>
    </div>
}
export default Profile;