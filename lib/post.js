import matter from "gray-matter";
import { marked } from "marked";
import { readdir, readFile } from "node:fs/promises";
import qs from "qs";

const BACKEND_URL = "http://localhost:1337";
export async function getPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, "utf8");
  const {
    content,
    data: { title, description, image, date, author },
  } = matter(text);
  const body = marked(content);

  return { slug, title, description, date, author, image, body };
}

export async function getAllPosts() {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ["slug", "title", "description", "publishedAt", "body"], // Hapus "author" dari sini
        populate: { image: { fields: ["url"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 3 },
      },
      { encodeValuesOnly: true }
    );

  const response = await fetch(url);
  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    author: attributes.author,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: BACKEND_URL + attributes.image.data.attributes.url,
  }));
}

export async function getSlugs() {
  const files = await readdir("./content/blog");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
