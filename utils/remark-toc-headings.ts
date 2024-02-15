import { visit } from 'unist-util-visit'
import { Heading } from 'mdast'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import { Toc } from '../types/markdown'
import { Parent } from 'hast'
import { VFile } from 'vfile'

/**
 * Extracts TOC headings from markdown file and adds it to the file's data object.
 */
export const remarkTocHeadings: () => (
 tree: Parent,
 file: VFile
) => void = () => (tree: Parent, file: VFile) => {
 const toc: Toc = []
 visit(tree, 'heading', (node: Heading) => {
  const textContent = toString(node)
  toc.push({
   value: textContent,
   url: '#' + slug(textContent),
   depth: node.depth,
  })
 })
 file.data.toc = toc
}

/**
 * Passes markdown file through remark to extract TOC headings
 *
 * @param {string} markdown
 * @return {*}  {Promise<Toc>}
 */
export async function extractTocHeadings(
 markdown: string
): Promise<Toc> {
 const vfile = await remark()
  //@ts-ignore
  .use(remarkTocHeadings)
  .process(markdown)
 //@ts-ignore
 return vfile.data.toc
}
