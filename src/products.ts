import { img9, img10, img11, img12, img13 } from "./assets";

export interface Product {
    id: number;
    name: string;
    price: string | number;
    desc: string;
    image: string;
    category?: string;
}

export const accessoriesItems: Product[] = [
    {
        id: 101,
        name: "Bamboo Whisk (Chasen)",
        price: "$18.00",
        desc: "Handcrafted 100-prong bamboo whisk for achieving the perfect frothy matcha.",
        image: img9
    },
    {
        id: 102,
        name: "Ceramic Matcha Bowl (Chawan)",
        price: "$32.00",
        desc: "Traditional Japanese ceramic bowl, designed for whisking and sipping.",
        image: img11
    },
    {
        id: 103,
        name: "Bamboo Scoop (Chashaku)",
        price: "$8.00",
        desc: "Authentic bamboo scoop for precise measurement of matcha powder.",
        image: img10
    },
    {
        id: 104,
        name: "Stainless Steel Sifter",
        price: "$12.00",
        desc: "Fine mesh sifter to prevent clumps and ensure a smooth matcha texture.",
        image: img12
    },
    {
        id: 105,
        name: "Whisk Holder (Kusenaoshi)",
        price: "$15.00",
        desc: "Ceramic stand to maintain the shape and prolong the life of your bamboo whisk.",
        image: img13
    }
];
