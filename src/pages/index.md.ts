import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Emil Patrick

Personal site of Emil Patrick.

## Navigation

- [About](/about.md)
- [Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [wangilisasi](https://github.com/wangilisasi)
- Email: wangilisasi@gmail.com

---

*This is the markdown-only version. Visit the full site for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
