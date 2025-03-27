import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ome2d8vg",
  dataset: "production",
  apiVersion: "2025-03-21",
  useCdn: true,
};

const client = createClient(config);

export default client;