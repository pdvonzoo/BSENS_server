import { ResolverMap } from "../../../Utils/gqlUtils";
import { Order } from "../../../Model/Order";

const resolvers: ResolverMap = {
  Mutation: {
    addCart: async (_, args, { request }: any) => {
      const { productid } = args;
      const order: any = await Order.findOne({ userid: request.userid });
      if (order) {
        await order.products.push({ productid });
        await order.save();
        return true;
      }
      const newOrder = await new Order({
        products: [{ productid }],
        userid: request.userid
      });
      await newOrder.save();
      return true;
    }
  }
};

export default resolvers;
