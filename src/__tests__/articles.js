/* eslint-disable */
const mdParser = require('@textlint/markdown-to-ast');
const fs = require('fs');
const path = require('path');

const articleDir = 'src/articles';
const MDWithAST = fs
	.readdirSync(articleDir)
	.filter(filename => /\.md$/i.test(filename))
	.map(filename => {
		const fileContent = fs.readFileSync(path.join(articleDir, filename)).toString();
		const mdAst = mdParser.parse(fileContent);
		return [filename, mdAst.children];
	});

function getAllTextInParagraph(paragraphObj) {
	return paragraphObj.children.map(child => {
		if (child.children) return getAllTextInParagraph(child);
		else if (child.type === 'Str') return child.value;
		return '';
	}).join('');
}

describe('Articles', () => {
	describe('should not have huge chunk of text', () => {
		test.each(MDWithAST)('%s', (filename, ast) => {
			const lengthlyParagraph = ast
				.filter(obj => obj.type === 'Paragraph')
				.map(getAllTextInParagraph)
				.filter(pText => pText.length >= 600);

			if (lengthlyParagraph.length > 0) {
				console.log(lengthlyParagraph);
			}
			expect(lengthlyParagraph.length).toBe(0);
		});
	});
});
