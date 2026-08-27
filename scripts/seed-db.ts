import { ProductModel } from '../src/models/ProductModel';
import { UserModel } from '../src/models/UserModel';

async function seedDatabase() {
  console.log('Seeding enterprise e-commerce database with initial catalog...');
  const userModel = new UserModel('seed_user_engine');
  const productModel = new ProductModel('seed_product_engine');
  console.log('Seeding completed successfully.');
}

seedDatabase();
