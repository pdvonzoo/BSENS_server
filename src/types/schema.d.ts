// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
showCart: Array<IProduct | null> | null;
seeProducts: Array<IProduct | null> | null;
me: IUser | null;
}

interface IProduct {
__typename: "Product";
_id: string;
productname: string | null;
productimage: string | null;
}

interface IUser {
__typename: "User";
_id: string;
userid: string | null;
password: string | null;
email: string | null;
addressid: string | null;
phonenumber: string | null;
username: string | null;
userimage: string | null;
create_at: string | null;
updated_at: string | null;
count: number | null;
}

interface IMutation {
__typename: "Mutation";
addCart: boolean | null;
deleteCart: boolean | null;
createProduct: boolean | null;
deleteProduct: boolean | null;
updateProduct: boolean | null;
cofirmAccount: boolean | null;
invalidateTokens: boolean | null;
createAccount: boolean;
deleteAccount: boolean;
sendSMSAuth: boolean;
updateAccount: boolean;
verifyPhoneNumber: boolean;
}

interface IAddCartOnMutationArguments {
productid?: string | null;
}

interface IDeleteCartOnMutationArguments {
productid?: string | null;
}

interface ICreateProductOnMutationArguments {
productname?: string | null;
productimage?: string | null;
price?: string | null;
color?: string | null;
text?: string | null;
size?: string | null;
}

interface IDeleteProductOnMutationArguments {
productid?: string | null;
}

interface IUpdateProductOnMutationArguments {
productname?: string | null;
}

interface ICofirmAccountOnMutationArguments {
userid?: string | null;
secret?: string | null;
}

interface ICreateAccountOnMutationArguments {
role?: string | null;
userid?: string | null;
email?: string | null;
secret?: string | null;
username?: string | null;
phonenumber?: string | null;
zonecode?: string | null;
userimage?: string | null;
}

interface IDeleteAccountOnMutationArguments {
userid?: string | null;
secret?: string | null;
username?: string | null;
}

interface ISendSMSAuthOnMutationArguments {
verificationNumber?: string | null;
}

interface IUpdateAccountOnMutationArguments {
userid?: string | null;
username?: string | null;
}

interface IVerifyPhoneNumberOnMutationArguments {
phonenumber?: string | null;
}

interface IAddress {
__typename: "Address";
_id: string;
addressType: string | null;
zonecode: string | null;
address: string | null;
roadAddress: string | null;
jibunAddress: string | null;
sido: string | null;
sigungu: string | null;
bname: string | null;
query: string | null;
create_at: number | null;
updated_at: number | null;
}
}

// tslint:enable
