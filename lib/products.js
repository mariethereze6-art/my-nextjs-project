// lib/products.js
export const categories = ["All", "Laptops", "Phones", "Audio"];

export const products = [
  {
    name: "Gaming Laptop X1",
    category: "Laptops",
    image: "/images/laptop.jpg",
    badge: "Best Seller",
    price: "$1,299",
    description: "High-performance laptop built for gaming and professional productivity.",
  },
  {
    name: "UltraBook Pro 14",
    category: "Laptops",
    image: "/images/laptop.jpg",
    badge: "New",
    price: "$1,099",
    description: "Slim and powerful, designed for creators and professionals on the move.",
  },
  {
    name: "Smartphone Pro",
    category: "Phones",
    image: "/images/phone.jpg",
    badge: "New",
    price: "$899",
    description: "Premium smartphone with an advanced triple-camera system and all-day battery.",
  },
  {
    name: "Smartphone Lite",
    category: "Phones",
    image: "/images/phone.jpg",
    badge: "Sale",
    price: "$549",
    description: "Reliable performance and a stunning display, without the premium price tag.",
  },
  {
    name: "Wireless Headphones",
    category: "Audio",
    image: "/images/headphones.jpg",
    badge: "Top Rated",
    price: "$349",
    description: "Studio-quality audio with adaptive noise cancellation and 40-hour playback.",
  },
  {
    name: "Studio Earbuds",
    category: "Audio",
    image: "/images/headphones.jpg",
    badge: "New",
    price: "$199",
    description: "Compact true-wireless earbuds tuned for clarity and all-day comfort.",
  },
];

export const featuredProducts = products.filter((p) =>
  ["Best Seller", "New", "Top Rated"].includes(p.badge)
);