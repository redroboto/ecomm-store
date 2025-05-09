# Welcome to my Sample E-Commerce Website!
This is an e-commerce website that I built to practice using the NextJS framework. Sellers can upload their products on Stripe and start selling online using the platform as the payment channel. Buyers can filter through products and add/deduct from their cart then make a payment once they are ready.

## Features
- Carousel of products
- Search bar for filtering products
- Collapsable Navbar (for Mobile)
- Add, Deduct, or Clear your Items Cart
- Payment processing (via Stripe)
- Inventory Management (via Stripe)

## Tech Stack
- NextJS (v19)
- Typescript

## Dependencies
- Tailwind CSS (v4)
- ShadCN UI
- Hero Icons
- Zustand
- Stripe

## See the project for yourself!

Visit:
[ecomm-store-one.vercel.app](https://ecomm-store-one.vercel.app/)

## Or, clone the project so you can tinker with the code!

1. Create your own Stripe test account
2. Once you have your account, create a .env file with the following environment variables:
   -NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=(paste your stripe public key here)
   -STRIPE_SECRET_KEY=(paste your stripe secret key here)
   -NEXT_PUBLIC_BASE_URL="http://localhost:3000"
3. Install the necessary dependencies
4. Run the dev server via "npm run dev" on your terminal and follow the instructions

## Credits/Acknowledgments

Thank you to PedroTech on YT for the inspiration for this website.
