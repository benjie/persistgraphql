import { DocumentNode, OperationDefinitionNode } from 'graphql';
import { OutputMap, QueryTransformer } from './common';
export declare type ExtractGQLOptions = {
    inputFilePath: string;
    outputFilePath?: string;
    queryTransformers?: QueryTransformer[];
    extension?: string;
    inJsCode?: boolean;
};
export declare class ExtractGQL {
    inputFilePath: string;
    outputFilePath: string;
    queryId: number;
    queryTransformers: QueryTransformer[];
    extension: string;
    inJsCode: boolean;
    literalTag: string;
    static getFileExtension(filePath: string): string;
    static readFile(filePath: string): Promise<string>;
    static isDirectory(path: string): Promise<boolean>;
    constructor({inputFilePath, outputFilePath, queryTransformers, extension, inJsCode}: ExtractGQLOptions);
    addQueryTransformer(queryTransformer: QueryTransformer): void;
    applyQueryTransformers(document: DocumentNode): DocumentNode;
    getQueryKey(definition: OperationDefinitionNode): string;
    getQueryDocumentKey(document: DocumentNode): string;
    createMapFromDocument(document: DocumentNode): OutputMap;
    processGraphQLFile(graphQLFile: string): Promise<OutputMap>;
    createOutputMapFromString(docString: string): OutputMap;
    readGraphQLFile(graphQLFile: string): Promise<string>;
    readInputFile(inputFile: string): Promise<string>;
    processInputPath(inputPath: string): Promise<OutputMap>;
    readInputPath(inputPath: string): Promise<string>;
    getQueryFragments(document: DocumentNode, queryDefinition: OperationDefinitionNode): DocumentNode;
    getQueryId(): number;
    writeOutputMap(outputMap: OutputMap, outputFilePath: string): Promise<void>;
    extract(): void;
}
export interface YArgsv {
    _: string[];
    [key: string]: any;
}
export declare const main: (argv: YArgsv) => void;
