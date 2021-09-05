import 'intl';
import 'intl/locale-data/jsonp/en';

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
};
