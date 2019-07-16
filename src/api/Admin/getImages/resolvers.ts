import { ResolverMap } from "../../../Utils/gqlUtils";
import { Image } from "../../../Model/Image";

const resolvers: ResolverMap = {
  Query: {
    GetImages: async (_, __) => {
      const images = await Image.find();
      if (!images) {
        throw new Error("존재하는 이미지가 없습니다.");
      }
      return images;
    }
  }
};

export default resolvers;
