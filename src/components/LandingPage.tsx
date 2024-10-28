// src/components/LandingPage.tsx
import React from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './ui/navigation-menu';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const handleShopNowClick = () => {
    navigate('/shop')
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full fixed top-0 p-4 shadow-md bg-green-400 z-10">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Home</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">About</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Contact</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main
        className="flex flex-col items-center justify-center p-8 mt-16 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-image.jpg')" }}
      >
        <div className="max-w-2xl text-center bg-white bg-opacity-75 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Welcome to Our Nursery
          </h1>
          <p className="text-lg mb-8 text-black">
            From seasonal flowers to house-plants to herbs, we got them all!
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-green-700"
            onClick={handleShopNowClick}
          >
            Shop Now
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;