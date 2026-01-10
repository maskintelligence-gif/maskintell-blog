import { getCollection } from "astro:content";

export async function getPosts() {
  return (await getCollection("posts")).filter(p => !p.data.draft);
}

export async function getCategories() {
  return await getCollection("categories");
}

export async function getTags() {
  return await getCollection("tags");
}

export async function getPostsByCategory(slug: string) {
  const posts = await getPosts();
  return posts.filter(p => p.data.category === slug);
}

export async function getPostsByTag(slug: string) {
  const posts = await getPosts();
  return posts.filter(p => p.data.tags?.includes(slug));
}
