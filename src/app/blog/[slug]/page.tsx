import { getPostData, getAllPostSlugs } from '../../../lib/posts';
import BlogPostClient from '@/components/blog-post-client';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

interface PostPageParams {
  slug: string;
}

interface PostPageProps {
  params: PostPageParams;
}

export default async function Post({ params }: PostPageProps) {
  const postData = await getPostData(params.slug);

  return (
    <BlogPostClient postData={postData} />
  );
}
