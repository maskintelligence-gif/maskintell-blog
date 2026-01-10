import redirects from "../content/redirects/redirects.json";
import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const path = ctx.url.pathname;

  const match = redirects.find(r => r.from === path);

  if (match) {
    return Response.redirect(
      new URL(match.to, ctx.url.origin),
      match.status || 301
    );
  }

  return next();
};
