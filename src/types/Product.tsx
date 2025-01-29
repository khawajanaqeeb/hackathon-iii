export interface Product {
  title: string;
  slug: {
    current: string;  // This is the slug with a 'current' property
  };
  price: number;
  imageUrl: {
    asset: {
      url: string;  // The URL for the product image
    };
  };
  quantity: number;
  description: string;
}
