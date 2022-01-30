import React from "react";
import s from './Friends.module.css';


const FriendsPost = (props) => {

    return (
        <div className={s.item + ' ' + s.active}>
            <img className={s.img}
                src="https://static.cnews.fr/sites/default/files/avatar_2_-_date_de_sortie_histoire_casting._tout_savoir_sur_le_film_de_james_cameron_610a65d33f1b6_0.jpeg"/>
            <div>
                <span>40</span>
            </div>
            <img
                src="https://static.cnews.fr/sites/default/files/avatar_2_-_date_de_sortie_histoire_casting._tout_savoir_sur_le_film_de_james_cameron_610a65d33f1b6_0.jpeg"/>
            <div>
                <span>78</span>
            </div>
            <img
                src="https://static.cnews.fr/sites/default/files/avatar_2_-_date_de_sortie_histoire_casting._tout_savoir_sur_le_film_de_james_cameron_610a65d33f1b6_0.jpeg"/>
            <div>
                <span>78</span>
            </div>


        </div>

    );
}
export default FriendsPost;