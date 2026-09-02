import styles from "@/app/restaurantCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantCard({ restaurant }){
     
    return (
            <article className={styles.restaurantCard}>
                <div className={styles.restaurantCardImageWrapper}>
                     <img className={`${styles.restaurantCardImage}`} src = {restaurant.image} alt = {"Image du restaurant " + restaurant.name}/>
                 </div>

                <div className={styles.restaurantCardContent}>
                    <div>
                        <h3 className={styles.restaurantCardTitle}> {restaurant.name} </h3>
                        <h4 className={styles.restaurantCardLocation}> {restaurant.location} </h4>
                    </div>
                    <FontAwesomeIcon icon={faHeart} className="heartIcon" />
                </div>
            </article>
    )
}