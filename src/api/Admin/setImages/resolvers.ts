import { ResolverMap } from "../../../Utils/gqlUtils";
import { Image } from "../../../Model/Image";

const resolvers: ResolverMap = {
  Mutation: {
    SetImages: async (_, args: any) => {
      const { title, url } = args;
      const overlapImage: any = await Image.findOne({ title });

      if (overlapImage) {
        console.log(overlapImage);
        await Image.findOneAndUpdate({ title }, { url });
      } else {
        const newImage = await new Image({ title, url });
        await newImage.save();
      }
      return true;
    }
  }
};

export default resolvers;
