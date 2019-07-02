import { ResolverMap } from "../../../Utils/gqlUtils";
import { Product } from "../../../Model/Product";
import { ProductChild } from "../../../Model/ProductChild";

const resolvers: ResolverMap = {
  Mutation: {
    createProduct: async (_, args) => {
      const { productname, productimage, price, color, text, size } = args;
      const newProductChild = await new ProductChild({
        price,
        color,
        text,
        size
      });
      await newProductChild.save();
      const newProduct = await new Product({
        productchildid: newProductChild._id,
        productname,
        productimage
      });
      await newProduct.save();
      return true;
    }
  }
};

export default resolvers;
