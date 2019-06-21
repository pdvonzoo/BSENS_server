import { ResolverMap } from "../../../Utils/gqlUtils";
import { Product } from "../../../Model/Product";

const resolvers: ResolverMap = {
  Mutation: {
    createProduct: async (_, args) => {
      const { productname, productimage } = args;
      const newProduct = await new Product({
        productname,
        productimage
      });
      await newProduct.save();
      return true;
    }
  }
};

export default resolvers;
