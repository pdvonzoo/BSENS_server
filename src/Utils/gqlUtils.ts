export type Resolver = (parent: any, args: any) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
