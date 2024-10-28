// src/components/ShopPage.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';

const items = [
  {
    id: 1,
    title: 'Peony',
    description: 'Peonies are native to Asia, Europe, and Western North America.',
    price: 'INR.1200',
    imageUrl: '/images/Peony.jpeg',
    category: 'Aromatic',
  },
  {
    id: 2,
    title: 'Kalanchoe',
    description: 'Lush house plants to bring life to your home.',
    price: 'INR.705',
    imageUrl: '/images/kalanchoe.jpg',
    category: 'Air Purifying',
  },
  {
    id: 3,
    title: 'Basil',
    description: 'Fresh herbs for your kitchen garden.',
    price: 'INR.500',
    imageUrl: '/images/basil.jpg',
    category: 'Aromatic',
  },
  {
    id: 4,
    title: 'Spider Plant',
    description: 'Great air purifying plant that removes toxins from the air.',
    price: 'INR.600',
    imageUrl: '/images/spider-plant.jpeg',
    category: 'Air Purifying',
  },
  {
    id: 5,
    title: 'Lavender',
    description: 'Aromatic plant known for its calming scent.',
    price: 'INR.800',
    imageUrl: '/images/lavender.jpeg',
    category: 'Aromatic',
  },
  {
    id: 6,
    title: 'Aloe Vera',
    description: 'Air purifying plant with medicinal properties.',
    price: 'INR.550',
    imageUrl: '/images/aloe-vera.jpg',
    category: 'Air Purifying',
  },
  {
    id: 7,
    title: 'Rosemary',
    description: 'Aromatic herb used in cooking and for its fragrance.',
    price: 'INR.450',
    imageUrl: '/images/rosemary.jpeg',
    category: 'Aromatic',
  },
  {
    id: 8,
    title: 'Snake Plant',
    description: 'Excellent air purifying plant that is easy to care for.',
    price: 'INR.700',
    imageUrl: '/images/snake-plant.jpeg',
    category: 'Air Purifying',
  },
];

const ShopPage: React.FC = () => {
  const { addToCart} = useCart();

  const airPurifyingPlants = items.filter(item => item.category === 'Air Purifying');
  const aromaticPlants = items.filter(item => item.category === 'Aromatic');

  return (
    <div className="min-h-screen bg-background text-foreground p-8 h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-image.jpg')" }}>
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Products</h1>
      
      <h2 className="text-3xl font-bold mb-4">Air Purifying Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {airPurifyingPlants.map((item) => (
          <Card key={item.id} className="overflow-hidden bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{item.price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="default" size="lg" className="w-full bg-green-500" onClick={addToCart}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl mb-4">Aromatic Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aromaticPlants.map((item) => (
          <Card key={item.id} className="overflow-hidden bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{item.price}</p>
            </CardContent>
            <CardFooter>
            <Button variant="default" size="lg" className="w-full bg-green-500" onClick={addToCart}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;