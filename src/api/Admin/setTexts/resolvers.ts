import { ResolverMap } from "../../../Utils/gqlUtils";
import { Text } from "../../../Model/Text";

const resolvers: ResolverMap = {
  Mutation: {
    SetTexts: async (_, args: any) => {
      const { title, text } = args;
      const overlapText: any = await Text.findOne({ title });

      if (overlapText) {
        await Text.findOneAndUpdate({ title }, { text });
      } else {
        const newText = await new Text({ title, text });
        await newText.save();
      }
      return true;
    }
  }
};

export default resolvers;
