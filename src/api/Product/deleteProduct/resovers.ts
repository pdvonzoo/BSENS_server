import { ResolverMap } from "../../../Utils/gqlUtils";
import { findProduct, deleteProduct } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Mutation: {
    deleteProduct: async (_, args) => {
      const { productname } = args;
      const product = await findProduct({ payload: { productname } });
      if (!product) {
        throw new Error("존재하지 않는 제품입니다.");
      }
      await deleteProduct({ id: product.id });
      return true;
    }
  }
};

export default resolvers;
