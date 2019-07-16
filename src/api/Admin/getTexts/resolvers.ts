import { ResolverMap } from "../../../Utils/gqlUtils";
import { Text } from "../../../Model/Text";

const resolvers: ResolverMap = {
  Query: {
    GetTexts: async (_, __) => {
      const texts = await Text.find();
      if (!texts) {
        throw new Error("존재하는 텍스트가 없습니다.");
      }
      return texts;
    }
  }
};

export default resolvers;
