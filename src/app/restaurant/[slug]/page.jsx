import Image from "next/image";
import { notFound } from "next/navigation";
import Restaurants from "@/data/restaurants.json";
import MenuItem from "@/components/MenuItem/MenuItem";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";

const sections = [
    { key: "entrées", title: "Entrées" },
    { key: "plats", title: "Plats" },
    { key: "desserts", title: "Desserts" },
];

export default async function Page({ params }) {
    const { slug } = await params;
    const restaurant = Restaurants.restaurants.find((restaurant) => restaurant.slug === slug);

    if (!restaurant) {
        notFound();
    }

    let itemIndex = 0;

    return (
        <>
            <div className="heroImage">
                <Image
                    src={restaurant.image}
                    alt={`Restaurant ${restaurant.name}`}
                    fill
                    priority
                    sizes="100vw"
                    className="image"
                />
            </div>
            <div className="mainWrapper">
                <div className="contentWrapper">
                    <RestaurantHeader name={restaurant.name} />
                    <div className="menu">
                        {sections.map((section) => (
                            <section key={section.key} aria-labelledby={`menu-${section.key}`}>
                                <h2 className="sectionTitle" id={`menu-${section.key}`}>
                                    {section.title}
                                </h2>
                                {restaurant.menu[section.key].map((plat) => (
                                    <MenuItem item={plat} index={itemIndex++} key={plat.nom} />
                                ))}
                            </section>
                        ))}
                    </div>
                    <button type="button" className="orderButton">Commander</button>
                </div>
            </div>
        </>
    );
}