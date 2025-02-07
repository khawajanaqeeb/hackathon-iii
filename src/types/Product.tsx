// types/Product.ts
export interface Product {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  price: number;
  productImage: {
    asset: {
      _ref?: string; // Optional, as it might not always be present
      _type?: string; // Optional
      url: string;
    };
  };
  quantity?: number;
  description: string;
  discountPercentage?: number; // Now correctly spelled
  category?: string; // Example of another field
  tags?: string[]; // Example of an array field
  images?: { asset: { _ref?: string; _type?: string; url: string; } }[]; // Example of an array of images

  
}