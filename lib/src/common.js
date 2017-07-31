"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
function sortFragmentsByName(a, b) {
    var aIsFragment = a.kind === 'FragmentDefinition';
    var bIsFragment = b.kind === 'FragmentDefinition';
    if (!aIsFragment && !bIsFragment) {
        return 0;
    }
    if (aIsFragment && bIsFragment) {
        var aName = a.name.value;
        var bName = b.name.value;
        return aName.localeCompare(bName);
    }
    return aIsFragment ? 1 : -1;
}
exports.sortFragmentsByName = sortFragmentsByName;
function applyFragmentDefinitionSort(document) {
    document.definitions = document.definitions.sort(sortFragmentsByName);
    return document;
}
exports.applyFragmentDefinitionSort = applyFragmentDefinitionSort;
function applyQueryTransformers(document, queryTransformers) {
    if (queryTransformers === void 0) { queryTransformers = []; }
    var currentDocument = document;
    queryTransformers.forEach(function (transformer) {
        currentDocument = transformer(currentDocument);
    });
    return currentDocument;
}
exports.applyQueryTransformers = applyQueryTransformers;
function getQueryKey(definition, queryTransformers) {
    if (queryTransformers === void 0) { queryTransformers = []; }
    var wrappingDocument = {
        kind: 'Document',
        definitions: [definition],
    };
    return graphql_1.print(applyQueryTransformers(wrappingDocument, queryTransformers).definitions[0]);
}
exports.getQueryKey = getQueryKey;
function getQueryDocumentKey(document, queryTransformers) {
    if (queryTransformers === void 0) { queryTransformers = []; }
    return graphql_1.print(applyFragmentDefinitionSort(applyQueryTransformers(document, queryTransformers)));
}
exports.getQueryDocumentKey = getQueryDocumentKey;
//# sourceMappingURL=common.js.map