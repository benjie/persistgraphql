"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findTaggedTemplateLiteralsInJS(jsCode, tag) {
    var regex = new RegExp(tag + '\\s*\`([\\s\\S]+?)\`', 'mg');
    var results = [];
    var result;
    while ((result = regex.exec(jsCode)) !== null) {
        results.push(result[1]);
    }
    return results;
}
exports.findTaggedTemplateLiteralsInJS = findTaggedTemplateLiteralsInJS;
function eliminateInterpolations(templateLiteralContents) {
    var regex = /\$\{[\s\S]+?\}/mg;
    return templateLiteralContents.replace(regex, '');
}
exports.eliminateInterpolations = eliminateInterpolations;
//# sourceMappingURL=extractFromJS.js.map