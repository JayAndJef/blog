import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  id: string;
  date?: string;
  title?: string;
  content?: string;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents); // parse using gray_matter

    const completeData: Post = {
      id,
      ...matterResult.data,
    };

    // Combine the data with the id
    return completeData;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date! < b.date!) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    content: contentHtml,
    ...matterResult.data,
  };
}
