import posts from "../../../content/posts";

export function GET() {
  return new Response(
    JSON.stringify(
      posts
        .filter(p => p.status === "published")
        .map(p => ({
          title: p.title,
          slug: p.slug,
          date: p.date,
          excerpt: p.excerpt,
          tags: p.tags,
          category: p.category,
        }))
    ),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
