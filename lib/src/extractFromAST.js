"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function isOperationDefinition(defn) {
    return (defn.kind === 'OperationDefinition');
}
exports.isOperationDefinition = isOperationDefinition;
function isFragmentSpread(selection) {
    return (selection.kind === 'FragmentSpread');
}
exports.isFragmentSpread = isFragmentSpread;
function isFragmentDefinition(selection) {
    return (selection.kind === 'FragmentDefinition');
}
exports.isFragmentDefinition = isFragmentDefinition;
function isField(selection) {
    return (selection.kind === 'Field');
}
exports.isField = isField;
function isInlineFragment(selection) {
    return (selection.kind === 'InlineFragment');
}
exports.isInlineFragment = isInlineFragment;
function isQueryDefinition(defn) {
    return (isOperationDefinition(defn) && defn.operation === 'query');
}
exports.isQueryDefinition = isQueryDefinition;
function createDocumentFromQuery(definition) {
    return {
        kind: 'Document',
        definitions: [definition],
    };
}
exports.createDocumentFromQuery = createDocumentFromQuery;
function getQueryDefinitions(doc) {
    var queryDefinitions = [];
    doc.definitions.forEach(function (definition) {
        if (isQueryDefinition(definition)) {
            queryDefinitions.push(definition);
        }
    });
    return queryDefinitions;
}
exports.getQueryDefinitions = getQueryDefinitions;
function getOperationDefinitions(doc) {
    return doc.definitions.filter(isOperationDefinition);
}
exports.getOperationDefinitions = getOperationDefinitions;
function getFragmentNames(selectionSet, document) {
    if (!selectionSet) {
        return {};
    }
    var fragmentDefinitions = {};
    document.definitions.forEach(function (definition) {
        if (isFragmentDefinition(definition)) {
            fragmentDefinitions[definition.name.value] = definition;
        }
    });
    var fragmentNames = {};
    selectionSet.selections.forEach(function (selection) {
        if (isFragmentSpread(selection)) {
            fragmentNames[selection.name.value] = 1;
            var innerFragmentNames = getFragmentNames(fragmentDefinitions[selection.name.value].selectionSet, document);
            fragmentNames = _.merge(fragmentNames, innerFragmentNames);
        }
        else if (isInlineFragment(selection) || isField(selection)) {
            var innerFragmentNames = getFragmentNames(selection.selectionSet, document);
            fragmentNames = _.merge(fragmentNames, innerFragmentNames);
        }
    });
    return fragmentNames;
}
exports.getFragmentNames = getFragmentNames;
//# sourceMappingURL=extractFromAST.js.map