import { HTTPFetchNetworkInterface, NetworkInterface, Request } from 'apollo-client';
import { ExecutionResult } from 'graphql';
import { OutputMap } from '../common';
export declare class PersistedQueryNetworkInterface extends HTTPFetchNetworkInterface {
    queryMap: OutputMap;
    _opts: RequestInit;
    _uri: string;
    enablePersistedQueries: boolean;
    constructor({enablePersistedQueries, uri, queryMap, opts}: {
        enablePersistedQueries?: boolean;
        uri: string;
        queryMap: OutputMap;
        opts?: RequestInit;
    });
}
export declare function addPersistedQueries(networkInterface: NetworkInterface, queryMap: OutputMap): NetworkInterface & {
    query: (request: Request) => Promise<ExecutionResult>;
};
