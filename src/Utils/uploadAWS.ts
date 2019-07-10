import * as aws from "aws-sdk";

const uploadImgToAws = async ({ filename, filetype }: any) => {
  const s3Bucket = process.env.S3BUCKET;
  try {
    aws.config.update({
      accessKeyId: process.env.AMAZON_IAM_PUBLIC,
      secretAccessKey: process.env.AMAZON_IAM_PRIVATE,
      region: "ap-northeast-2"
    });

    const s3 = new aws.S3();

    const s3Params = {
      Bucket: s3Bucket,
      Key: filename,
      ContentType: filetype,
      ACL: "public-read"
    };

    const signedRequest = await s3.getSignedUrl("putObject", s3Params);
    const url = `https://${s3Bucket}.s3.amazonaws.com/${filename}`;
    return { signedRequest, url };
    // const response = await s3
    //   .listObjectsV2({
    //     Bucket: "bsens-storage"
    //   })
    //   .promise();
  } catch (e) {
    console.log("our error", e);
    return e;
  }
};

export default uploadImgToAws;
