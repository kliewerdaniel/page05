import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';

const postsDirectory = path.join(process.cwd(), '.', '_posts');

export type PostData = {
  slug: string;
  title: string;
  date: string;
  description: string;
  [key: string]: any; // Allow for other frontmatter properties
};

export function getSortedPostsData() {
  // Get file names under /_posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post frontmatter
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...(matterResult.data as { title: string; date: string; description: string }),
    };
  });
  // Sort posts by date descending
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post frontmatter and content
  const matterResult = matter(fileContents);

  // Serialize the MDX content
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrismPlus],
    },
  });

  // Combine the data with the slug and serialized content
  return {
    slug,
    serializedContent: mdxSource,
    ...(matterResult.data as { title: string; date: string; description: string }),
  };
}
