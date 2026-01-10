export function getRelatedPosts(current, all, limit = 3) {
  if (!current.tags) return [];

  return all
    .filter(p => p.slug !== current.slug && p.tags)
    .map(p => {
      const score = p.tags.filter(t =>
        current.tags.includes(t)
      ).length;

      return { post: p, score };
    })
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(p => p.post);
}
