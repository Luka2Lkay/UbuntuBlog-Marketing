import { Code2, Globe, KeyRound, Radio } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Create your site",
    description:
      "Create a site in UbuntuBlog and associate it with your business website.",
    code: `{
  "name": "Home of Commerce",
  "slug": "home-of-commerce"
}`,
  },
  {
    number: "02",
    icon: KeyRound,
    title: "Connect your website",
    description:
      "Configure your website to communicate with the UbuntuBlog API.",
    code: `const API_URL =
  "https://ubuntublog.onrender.com";`,
  },
  {
    number: "03",
    icon: Radio,
    title: "Request content",
    description:
      "Fetch published posts for your site using the site's unique identifier.",
    code: `GET /posts
  ?site=home-of-commerce`,
  },
  {
    number: "04",
    icon: Code2,
    title: "Render the content",
    description:
      "Use the returned data to display posts using your website's own design.",
    code: `posts.map((post) => (
  <PostCard post={post} />
))`,
  },
];
