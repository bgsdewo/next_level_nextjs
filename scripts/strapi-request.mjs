import { writeFileSync } from "node:fs";
import qs from "qs";

const url =
  "http://localhost:1337/api/posts/" +
  "?" +
  qs.stringify(
    {
      filters: {
        slug: {
          $eq: "pengembangan-web-panduan-memilih-framework-terbaik-untuk-proyek-anda",
        },
      },
      fields: ["slug", "title", "description", "publishedAt", "body"], // Hapus "author" dari sini
      populate: { image: { fields: ["url"] } },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 1, withCount: false },
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const posts = JSON.stringify(body, null, 2);
const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
