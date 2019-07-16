import { ResolverMap } from "../../../Utils/gqlUtils";
import { Order } from "../../../Model/Order";
import { Product } from "../../../Model/Product";

const resolvers: ResolverMap = {
  Query: {
    showCart: async (_, __, { request }: any) => {
      const { products }: any = await Order.findOne({ userid: request.userid });
      let cartItems: any = [];
      if (products) {
        const cartList = products.map(async (product: any) =>
          Product.find({ _id: product.productid })
        );
        for await (const product of cartList) {
          cartItems = [...cartItems, ...product];
        }
      }
      return cartItems;
    }
  }
};

export default resolvers;
