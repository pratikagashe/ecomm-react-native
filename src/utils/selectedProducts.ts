import {Gender} from './constants';

const selectedProducts = [
  {
    id: 1,
    name: "Women's Black Floral Dress Summer collection",
    price: 999,
    discountPrice: 799,
    discount: 20,
    gender: Gender.women,
    image: require('../assets/images/product/product1.jpg'),
  },
  {
    id: 2,
    name: "Women's Red Summer Collection",
    price: 999,
    discountPrice: 799,
    discount: 20,
    gender: Gender.women,
    image: require('../assets/images/product/product2.jpg'),
  },
  {
    id: 3,
    name: "Women's White Praty Collection Top",
    price: 999,
    discountPrice: 799,
    discount: 20,
    gender: Gender.women,
    image: require('../assets/images/product/product3.jpg'),
  },
  {
    id: 4,
    name: "Women's White Satin Cloth Dress Collection",
    price: 999,
    discountPrice: 799,
    discount: 20,
    gender: Gender.women,
    image: require('../assets/images/product/product4.jpg'),
  },
];

export default selectedProducts;
