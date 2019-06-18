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
me: IUser | null;
}

interface IUser {
__typename: "User";
userid: string | null;
password: string | null;
email: string | null;
addtess: string | null;
phonenumber: string | null;
username: string | null;
userimage: string | null;
create_at: string | null;
updated_at: string | null;
}

interface IMutation {
__typename: "Mutation";
createProduct: boolean;
deleteProduct: boolean;
cofirmAccount: boolean | null;
createAccount: boolean;
deleteAccount: boolean;
sendSMSAuth: boolean;
updateAccount: boolean;
verifyPhoneNumber: boolean;
}

interface ICreateProductOnMutationArguments {
productname?: string | null;
description?: string | null;
}

interface IDeleteProductOnMutationArguments {
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
address?: string | null;
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
}

// tslint:enable
