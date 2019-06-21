import { ResolverMap } from "../../../Utils/gqlUtils";
import { Order } from "../../../Model/Order";

const resolvers: ResolverMap = {
  Mutation: {
    deleteCart: async (_, args, { request }: any) => {
      const { productid } = args;
      const order: any = await Order.findOne({ userid: request.user.id });
      if (!order) {
        throw new Error("해당 제품이 존재하지 않습니다.");
      }
      order.products = order.products.filter(
        (product: any) => product.id !== productid
      );
      return true;
    }
  }
};

export default resolvers;
