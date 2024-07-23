import { writeFileSync } from "node:fs";
import qs from "qs";

const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
