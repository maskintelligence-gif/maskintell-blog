import rss from "@astrojs/rss";
import posts from "../../content/posts";

export function GET() {
  return rss({
    title: "MASK Intelligence Blog",
    description: "AI, Web, Technology",
    site: "https://maskintelligence-gif.github.io/maskintell-blog",
    items: posts
      .filter(p => p.status === "published")
      .map(post => ({
        title: post.title,
        pubDate: post.date,
        description: post.excerpt,
        link: `/blog/${post.slug}/`,
      })),
  });
}
