import { ResolverMap } from "../../../Utils/gqlUtils";
import { findProduct, updateProduct } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Mutation: {
    updateProduct: async (_, args) => {
      const { productname } = args;
      console.log(productname);
      const product = await findProduct({ payload: { productname } });
      if (!product) {
        throw new Error("존재하지 않는 제품입니다.");
      }
      await updateProduct({ id: product.id }, { productname });
      return true;
    }
  }
};

export default resolvers;
