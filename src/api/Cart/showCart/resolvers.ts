import { ResolverMap } from "../../../Utils/gqlUtils";
import { Order } from "../../../Model/Order";
import { Product } from "../../../Model/Product";

const resolvers: ResolverMap = {
  Query: {
    showCart: async (_, __, { request }: any) => {
      const { products }: any = await Order.findOne({ userid: request.userid });
      const cartItems = [];
      if (products) {
        const cartList = products.map(async (product: any) =>
          Product.find({ _id: product.productid })
        );
        for await (const product of cartList) {
          cartItems.push(product);
        }
      }
      return cartItems;
    }
  }
};

export default resolvers;
