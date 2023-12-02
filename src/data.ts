import bambooImage from "./assets/img/bamboo-basket.jpg";
import loveseatImage from "./assets/img/loveseat-sofa.webp";
import tableLampImage from "./assets/img/polar-black-table-lamp.jpg";
import toasterImage from "./assets/img/toaster.webp";

import articles_1 from "./assets/img/igor-starkov-8u-OaI3MZrc-unsplash.jpg";
import articles_2 from "./assets/img/jason-briscoe-GrdJp16CPk8-unsplash.jpg";
import articles_3 from "./assets/img/kam-idris-_HqHX3LBN18-unsplash.jpg";

export const products = [
  {
    id: 1,
    productImage: bambooImage,
    productName: "Bamboo Basket",
    price: 21.99,
    ratings: 4.9,
  },
  {
    id: 2,
    productImage: loveseatImage,
    productName: "Loveseat Sofa",
    price: 540,
    ratings: 4.9,
  },
  {
    id: 3,
    productImage: tableLampImage,
    productName: "Table Lamp",
    price: 102,
    ratings: 4.9,
  },
  {
    id: 4,
    productImage: toasterImage,
    productName: "Toaster",
    price: 200,
    ratings: 4.9,
  },
];

export const articles = [
  {
    id: 1,
    titleArticle: "7 ways to decore kids room",
    imageArticle: articles_1,
  },
  {
    id: 2,
    titleArticle: "Kitchen organization",
    imageArticle: articles_2,
  },
  {
    id: 3,
    titleArticle: "Decor your living room",
    imageArticle: articles_3,
  },
];
