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
cofirmAccount: boolean | null;
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
createAccount: boolean;
deleteAccount: boolean;
updateAccount: boolean;
verifyPhoneNumber: boolean;
}

interface ICreateAccountOnMutationArguments {
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

interface IUpdateAccountOnMutationArguments {
userid?: string | null;
username?: string | null;
}

interface IVerifyPhoneNumberOnMutationArguments {
phonenumber?: string | null;
}
}

// tslint:enable
