import { ResolverMap } from "../../../Utils/gqlUtils";
import { Order } from "../../../Model/Order";

const resolvers: ResolverMap = {
  Mutation: {
    createProduct: async (_, args, { request }: any) => {
      const { productid } = args;
      const order: any = await Order.findOne({ userid: request.user.id });
      if (order) {
        order.products = [...order.products, productid];
        return true;
      }
      const newOrder = await new Order({
        products: { productid },
        userid: request.user.id
      });
      newOrder.save();
      return true;
    }
  }
};

export default resolvers;
