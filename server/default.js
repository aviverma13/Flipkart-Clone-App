import { products } from "./constent/data.js";
import product from "./model/productSchema.js";

const DefaultData = async () => {
  try {
    await product.insertMany(products);
    console.log("Data imported  Successfully");
  } catch (error) {
    console.log("Error While inserting default Data", error.message);
  }
};

export default DefaultData;
