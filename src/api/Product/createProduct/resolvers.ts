import { ResolverMap } from "../../../Utils/gqlUtils";
// import { Product } from "../../../Model/Product";

const resolvers: ResolverMap = {
  Mutation: {
    createProduct: async (_, __, { req }) => {
      console.log(req);
      // const {title, description} = args;
      // const newProduct = await new Product({
      //   role: args.role,
      //   title,
      //   description
      // });
      return true;
    }
  }
};

export default resolvers;
