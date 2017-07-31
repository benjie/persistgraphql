import { DefinitionNode, OperationDefinitionNode, DocumentNode } from 'graphql';
export interface OutputMap {
    [key: string]: QueryId;
}
export declare type QueryId = number | string;
export interface TransformedQueryWithId {
    transformedQuery: DocumentNode;
    id: number | string;
}
export declare type QueryTransformer = (doc: DocumentNode) => DocumentNode;
export declare function sortFragmentsByName(a: DefinitionNode, b: DefinitionNode): number;
export declare function applyFragmentDefinitionSort(document: DocumentNode): DocumentNode;
export declare function applyQueryTransformers(document: DocumentNode, queryTransformers?: QueryTransformer[]): DocumentNode;
export declare function getQueryKey(definition: OperationDefinitionNode, queryTransformers?: QueryTransformer[]): string;
export declare function getQueryDocumentKey(document: DocumentNode, queryTransformers?: QueryTransformer[]): string;
