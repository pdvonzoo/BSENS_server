import { ResolverMap } from "../../../Utils/gqlUtils";
import { Product } from "../../../Model/Product";

const resolvers: ResolverMap = {
  Query: {
    seeProducts: async (_, __) => {
      const products = await Product.find();
      if (!products) {
        throw new Error("존재하는 제품이 없습니다.");
      }
      return products;
    }
  }
};

export default resolvers;
