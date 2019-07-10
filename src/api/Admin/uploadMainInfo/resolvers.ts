import { ResolverMap } from "../../../Utils/gqlUtils";
import uploadImgToAws from "../../../Utils/uploadAWS";

const resolvers: ResolverMap = {
  Mutation: {
    UploadMainInfo: async (_, args: any) => {
      return uploadImgToAws(args);
    }
  }
};

export default resolvers;
