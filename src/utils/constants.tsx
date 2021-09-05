import {color} from 'react-native-reanimated';

export const Gender = {
  men: 'men',
  women: 'women',
  boy: 'boy',
  girl: 'girl',
};

export const initialProductCartInfo = {
  size: 'S',
  color: {
    color: 'red',
    code: '1',
  },
};

export const Sizes = [
  {
    size: 'S',
  },
  {
    size: 'M',
  },
  {
    size: 'L',
  },
  {
    size: 'XL',
  },
  {
    size: 'XXL',
  },
];

export const ColourCodes = [
  {
    color: 'red',
    code: '1',
  },
  {
    color: 'blue',
    code: '2',
  },
  {
    color: 'black',
    code: '3',
  },
  {
    color: 'white',
    code: '4',
  },
  {
    color: 'green',
    code: '5',
  },
];

export const ReviewsList = [
  {
    user: {
      userName: 'John Doe',
      profileImage: require('../assets/images/profileImage.jpg'),
    },
    review: {
      rating: 4,
      description:
        'Fusce euismod ipsum ut libero sollicitudin convallis. Sed convallis tortor vel ipsum condimentum eleifend sed at est.',
    },
  },
  {
    user: {
      userName: 'John Doe',
      profileImage: require('../assets/images/profileImage.jpg'),
    },
    review: {
      rating: 2,
      description:
        'Mauris et enim ultrices, fringilla felis eget, congue elit. Suspendisse condimentum augue et iaculis sollicitudin.',
    },
  },
  {
    user: {
      userName: 'John Doe',
      profileImage: require('../assets/images/profileImage.jpg'),
    },
    review: {
      rating: 3,
      description:
        'Donec dignissim lorem non mauris dapibus pulvinar. uspendisse condimentum augue et iaculis sollicitudin.',
    },
  },
];
