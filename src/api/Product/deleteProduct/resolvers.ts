import { ResolverMap } from "../../../Utils/gqlUtils";
import { removeProduct } from "../../../Utils/commonUtils";

const resolvers: ResolverMap = {
  Mutation: {
    deleteProduct: async (_, args) => {
      const { productid } = args;
      console.log(productid);
      const removedProduct = await removeProduct({ _id: productid });
      if (!removedProduct) {
        throw new Error("해당 제품이 존재하지 않습니다.");
      }
      return true;
    }
  }
};

export default resolvers;
