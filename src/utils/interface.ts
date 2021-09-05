import {ButtonProps} from 'react-native';

export interface ISectionTitle {
  title: string;
  btnText?: string;
}

export interface ISubHeading {
  title: string;
}

export interface IProductDetails {
  product: IProduct;
  navigation?: any;
}

export interface IAddToCart {
  product: IProduct;
  navigation: any;
  productCartInfo: IProductCartInfo;
}

export interface IProductInfo {
  product: IProduct;
  productCartInfo: IProductCartInfo;
  setProductCartInfo: any;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  discount: number;
  gender: string;
  image: any;
}

export interface IProductCartInfo {
  size: string;
  color: IColor;
}

export interface IColor {
  color: string;
  code: string;
}

export interface INotification {
  title: string;
  text: string;
  image: any;
  type: string;
}

export interface ICustButton {
  text: string;
  onPressFunc: any;
  centerAligned?: boolean;
}

export interface ICartItem {
  productName: string;
  productImage: any;
  qty: number;
  price: number;
  size: string;
  color: IColor;
}

export interface IWishlistItem {
  id: number;
  name: string;
  image: any;
  discount: number;
  discountPrice: number;
  price: number;
  gender: string;
}

export interface ICartCost {
  subTotal: number;
  shipping: number;
  total: number;
}

export interface IUserProfile {
  email: string;
  firstName: string;
  isEmailVerified: boolean;
  lastName: string;
  profileImage: any;
  role: string;
  userId: number;
  cart: Array<ICartItem>;
  wishlist: Array<IWishlistItem>;
}
