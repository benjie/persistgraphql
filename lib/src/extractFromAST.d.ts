import { DocumentNode, DefinitionNode, OperationDefinitionNode, SelectionSetNode, SelectionNode, FragmentSpreadNode, FieldNode, InlineFragmentNode, FragmentDefinitionNode } from 'graphql';
export declare function isOperationDefinition(defn: DefinitionNode): defn is OperationDefinitionNode;
export declare function isFragmentSpread(selection: SelectionNode): selection is FragmentSpreadNode;
export declare function isFragmentDefinition(selection: DefinitionNode): selection is FragmentDefinitionNode;
export declare function isField(selection: SelectionNode): selection is FieldNode;
export declare function isInlineFragment(selection: SelectionNode): selection is InlineFragmentNode;
export declare function isQueryDefinition(defn: DefinitionNode): defn is OperationDefinitionNode;
export declare function createDocumentFromQuery(definition: OperationDefinitionNode): DocumentNode;
export declare function getQueryDefinitions(doc: DocumentNode): OperationDefinitionNode[];
export declare function getOperationDefinitions(doc: DocumentNode): OperationDefinitionNode[];
export declare function getFragmentNames(selectionSet: SelectionSetNode, document: DocumentNode): {
    [name: string]: number;
};
