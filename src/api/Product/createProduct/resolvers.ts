import { ResolverMap } from "../../../Utils/gqlUtils";
import { Product } from "../../../Model/Product";

const resolvers: ResolverMap = {
  Mutation: {
    createProduct: async (_, args) => {
      const { productname, description } = args;
      const newProduct = await new Product({
        productname,
        description
      });
      newProduct.save();
      return true;
    }
  }
};

export default resolvers;
