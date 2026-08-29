import styles from "./page.module.css";

export default function RestaurantCard({ restaurant }) {
    return (
        <article>
            <div>
                <img className={styles.restaurantsContent} src = {restaurant.image} alt = {"Image du restaurant " + restaurant.name}/>
                <h2> {restaurant.name} </h2>
                <h3> {restaurant.location} </h3>
                <i>coeur</i>
            </div>
        </article>
    )
}