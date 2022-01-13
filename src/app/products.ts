export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image:
      'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },

  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image:
      'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&h=750&w=1260',
  },

  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    // ne fonctionne pas avec un lien relatif sur le ngfor ...image: 'src/assets/img/sams21.jpg',
    image:
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];
