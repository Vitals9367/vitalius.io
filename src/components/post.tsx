import dynamic from 'next/dynamic'

interface PostProps {
  slug: string
}

const Post = ({ slug }: PostProps): JSX.Element => {
  const DynamicPost = dynamic(() => import(`~/posts/${slug}.mdx`), {
    loading: () => <div>Loading...</div>
  })
  
  return <DynamicPost />
}

export default Post