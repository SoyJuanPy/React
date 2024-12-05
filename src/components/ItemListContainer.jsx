import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "vehiculos",
    price: 35000,
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/02e6846c-6c79-4a0b-8ed9-03e43ce3a048/bvlatuR/std/2880x1800/Desktop-Model3",
  },
  {
    id: 2,
    name: "Ford Mustang",
    category: "vehiculos",
    price: 45000,
    img: "https://media.ford.com/content/fordmedia/fna/us/en/products/cars/mustang/_jcr_content/image.img.881.495.jpg/1601670483940.jpg",
  },
  {
    id: 3,
    name: "Toyota Prius",
    category: "vehiculos",
    price: 24000,
    img: "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2022/09/2023_Toyota_Prius_Preview_001-scaled.jpg",
  },
  {
    id: 4,
    name: "BMW X5",
    category: "vehiculos",
    price: 60000,
    img: "https://www.bmwusa.com/content/dam/bmwusa/X5/2023/X5_Feature-Background_1440x810.jpg",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    category: "vehiculos",
    price: 42000,
    img: "https://media.chevrolet.com/content/dam/media/na/us/chevrolet/vehicles/camaro/2021/Chevrolet-Camaro-gallery-01.jpg",
  },
  {
    id: 6,
    name: "Samsung Galaxy S23",
    category: "tecnologia",
    price: 1000,
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/galaxys23/g990fzbains/gallery/latin-galaxy-s23-5g-g990-sm-g990fzbains-534118170?$720_576_PNG$",
  },
  {
    id: 7,
    name: "iPhone 14 Pro",
    category: "tecnologia",
    price: 1200,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-og-202209?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1661474045536",
  },
  {
    id: 8,
    name: "MacBook Pro",
    category: "tecnologia",
    price: 2000,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-og-202301?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1672457084055",
  },
  {
    id: 9,
    name: "Dell XPS 13",
    category: "tecnologia",
    price: 1500,
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9310-cn94703-xps-laptop-13-touch/hero-cn93103-xps-laptop-13-touch-silver.jpg",
  },
  {
    id: 10,
    name: "Sony WH-1000XM5",
    category: "tecnologia",
    price: 400,
    img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX522_.jpg",
  },
  {
    id: 11,
    name: "Sony PlayStation 5",
    category: "tecnologia",
    price: 500,
    img: "https://m.media-amazon.com/images/I/61IzDxx72dL._SX522_.jpg",
  },
  {
    id: 12,
    name: "Xbox Series X",
    category: "tecnologia",
    price: 500,
    img: "https://cdn.mos.cms.futurecdn.net/D2Sp6FepL5XHPPvCJfQ62Z.jpg",
  },
  {
    id: 13,
    name: "GoPro Hero 11",
    category: "tecnologia",
    price: 500,
    img: "https://m.media-amazon.com/images/I/71VSH9Nlv4L._AC_SL1500_.jpg",
  },
  {
    id: 14,
    name: "Nikon D850",
    category: "tecnologia",
    price: 3000,
    img: "https://m.media-amazon.com/images/I/81Rx1UwOetL._AC_SL1500_.jpg",
  },
  {
    id: 15,
    name: "Canon EOS R5",
    category: "tecnologia",
    price: 3500,
    img: "https://m.media-amazon.com/images/I/7176pT2GmaL._AC_SL1500_.jpg",
  },
  {
    id: 16,
    name: "DJI Mini 3",
    category: "tecnologia",
    price: 600,
    img: "https://m.media-amazon.com/images/I/61zq2GjC1oL._AC_SL1500_.jpg",
  },
  {
    id: 17,
    name: "Samsung 4K Smart TV",
    category: "tecnologia",
    price: 700,
    img: "https://images.samsung.com/is/image/samsung/uk-uhd-tu7020-ue43tu7020kxxu-frontblack-thumb-279492679?$720_576_PNG$",
  },
  {
    id: 18,
    name: "ASUS ROG Gaming Laptop",
    category: "tecnologia",
    price: 1800,
    img: "https://m.media-amazon.com/images/I/71rdY2aG2TL._AC_SL1500_.jpg",
  },
  {
    id: 19,
    name: "Logitech MX Master 3",
    category: "tecnologia",
    price: 120,
    img: "https://m.media-amazon.com/images/I/61X93xGIZWL._AC_SL1500_.jpg",
  },
  {
    id: 20,
    name: "Razer BlackWidow",
    category: "tecnologia",
    price: 140,
    img: "https://m.media-amazon.com/images/I/71wqxWytWeL._AC_SL1500_.jpg",
  },
];

const ItemListContainer = () => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (id) {
      setFilteredProducts(
        products.filter((product) => product.category === id),
      );
    } else {
      setFilteredProducts(products);
    }
  }, [id]);

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
