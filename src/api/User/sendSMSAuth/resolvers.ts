import "dotenv/config";
import * as twilio from "twilio";
import { ResolverMap } from "../../../Utils/gqlUtils";

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const resolvers: ResolverMap = {
  Mutation: {
    sendSMSAuth: async (_, args) => {
      twilioClient.messages
        .create({
          body: "테스트 문자입니다.",
          from: process.env.PHONE_NUMBER,
          to: `+82${args.phonenumber}`
        })
        .then(message => console.log(message));
      return true;
    }
  }
};

export default resolvers;
