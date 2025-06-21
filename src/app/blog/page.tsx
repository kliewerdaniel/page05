import { getSortedPostsData } from '../../lib/posts';
import BlogPostsClient from '@/components/blog-posts-client';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <BlogPostsClient posts={allPostsData} />
  );
}
