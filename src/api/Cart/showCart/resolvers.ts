import { ResolverMap } from "../../../Utils/gqlUtils";
import { Order } from "../../../Model/Order";

const resolvers: ResolverMap = {
  Query: {
    showCart: async (_, __, { request }: any) => {
      await Order.findOne({ userid: request.user.id });
      return true;
    }
  }
};

export default resolvers;
