import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "xhy0agiy",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export async function getPosts() {
  const posts = await client.fetch('*[_type == "pageInfo"][0]');
  return posts;
}

export default client;
