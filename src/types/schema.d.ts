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
something: string;
}

interface IMutation {
__typename: "Mutation";
createAccount: boolean;
deleteAccount: boolean;
updateAccount: boolean;
}

interface ICreateAccountOnMutationArguments {
userid?: string | null;
secret?: string | null;
username?: string | null;
address?: IAddress | null;
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

interface IAddress {
__typename: "Address";
addressType: string | null;
zonecode: string | null;
address: string | null;
roadAddress: string | null;
sido: string | null;
sigungu: string | null;
bname: string | null;
query: string | null;
create_at: string | null;
updated_at: string | null;
}
}

// tslint:enable
