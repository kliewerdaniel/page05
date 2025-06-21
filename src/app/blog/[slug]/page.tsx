import { getPostData, getAllPostSlugs } from '../../../lib/posts';
import BlogPostClient from '@/components/blog-post-client';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <BlogPostClient postData={postData} />
  );
}
