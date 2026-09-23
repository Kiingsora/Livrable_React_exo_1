"use client";
import styles from "@/app/restaurantCard.module.css";
import React, { useState } from "react";


export default function RestaurantCard({ restaurant }) {

    const [status, setIsLiked] = useState(false);
    const handleChange = () => {
        setIsLiked(!status);

    }

    const badge = restaurant.isNew && (<div className={styles.restaurantCardBadge}> Nouveauté</div>)

    return (
        <article className={styles.restaurantCard}>
            <div className={styles.restaurantCardImageWrapper}>
                {badge}
                <img className={`${styles.restaurantCardImage}`} src={restaurant.image} alt={"Image du restaurant " + restaurant.name} />
            </div>
            <div key={restaurant.id} className={styles.restaurantCardContent}>
                <div>
                    <h3 className={styles.restaurantCardTitle}> {restaurant.name} </h3>
                    <h4 className={styles.restaurantCardLocation}> {restaurant.location} </h4>
                </div>

                <button onClick={handleChange} className="favoriteButton">
                    <svg viewBox="0 0 24 24"
                        fill={status ? "url(#gradient)" : "none"}
                        stroke={status ? "none" : "currentColor"}
                        strokeWidth="2"
                        className="heartIcon">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF79DA" />
                                <stop offset="100%" stopColor="#9356DC" />
                            </linearGradient>
                        </defs>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>
        </article>
    )
}