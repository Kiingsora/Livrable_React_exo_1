"use client";
import styles from "@/app/restaurantCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React, {useState} from "react";


export default function RestaurantCard({ restaurant }){
    


    const [status, setIsLiked] = useState(false);

    const styleHeart = "heartIcon";

    const handleChange = () => {
        setIsLiked(!status);
        console.log(status)
    }

    return (
            <article className={styles.restaurantCard}>
                <div className={styles.restaurantCardImageWrapper}>
                    <img className={`${styles.restaurantCardImage}`} src = {restaurant.image} alt = {"Image du restaurant " + restaurant.name}/>
                </div>
                <div key={restaurant.id}className={styles.restaurantCardContent}>
                    <div>
                        <h3 className={styles.restaurantCardTitle}> {restaurant.name} </h3>
                        <h4 className={styles.restaurantCardLocation}> {restaurant.location} </h4>
                    </div>
                    <button onClick={handleChange}>
                        <FontAwesomeIcon icon={faHeart} className={status ? "liked" : styleHeart } />
                    </button>
                </div>
            </article>
    )
}