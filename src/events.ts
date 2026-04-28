import { img1, img2, img3, img4, img5 } from "./assets";

export interface DrinkItem {
    id: number;
    name: string;
    image: string;
}

export interface EventData {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    drinkMenu: DrinkItem[];
}

export const events: EventData[] = [
    {
        id: 1,
        title: "Matcha Under the Stars",
        date: "June 14, 2026",
        time: "6:00 PM – 9:00 PM",
        location: "Horikku Garden Terrace, Sydney",
        description:
            "Join us for an enchanting evening of hand-whisked matcha under the open sky. Sample our exclusive seasonal creations, enjoy live acoustic music, and connect with fellow matcha lovers in a beautiful garden setting.",
        drinkMenu: [
            { id: 1, name: "Classic Ceremonial Matcha", image: img5 },
            { id: 2, name: "Strawberry Jam", image: img1 },
            { id: 3, name: "Banana Bread", image: img4 },
            { id: 4, name: "Earl Grey", image: img3 },
            { id: 5, name: "Vanilla", image: img2 },
        ],
    },
    {
        id: 2,
        title: "Weekend Matcha Market",
        date: "July 5, 2026",
        time: "10:00 AM – 3:00 PM",
        location: "Darling Harbour Pavilion, Sydney",
        description:
            "A vibrant weekend pop-up celebrating all things matcha. Browse our curated accessories, watch live matcha preparation demos, and taste limited-edition flavours crafted exclusively for this event.",
        drinkMenu: [
            { id: 1, name: "Classic Ceremonial Matcha", image: img5 },
            { id: 3, name: "Banana Bread", image: img4 },
            { id: 5, name: "Vanilla", image: img2 },
        ],
    },
];
