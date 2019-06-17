import * as twilio from "twilio";
import { ResolverMap } from "../../../Utils/gqlUtils";
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const resolvers: ResolverMap = {
  Mutation: {
    sendSMSAuth: async (_, __) => {
      twilioClient.messages
        .create({
          body: "테스트 메세지입니다.",
          from: process.env.PHONE_NUMBER,
          to: "+8201088570194"
        })
        .then(message => console.log(message));
      return true;
    }
  }
};

export default resolvers;
