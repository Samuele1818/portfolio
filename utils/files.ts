import path from 'path'
import fs from 'fs'

const getStaticPost = (name: string) => {
 const jsonDirectory = path.join(
  process.cwd(),
  'posts'
 )

 return fs.readFileSync(
  jsonDirectory + '/' + name + '.mdx',
  'utf8'
 )
}

const getPosts = () => {
 const jsonDirectory = path.join(
  process.cwd(),
  'posts'
 )

 return fs.readdirSync(jsonDirectory)
}

export { getPosts, getStaticPost }
