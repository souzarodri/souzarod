import { defineConfig } from "tinacms";
import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";
import Tag from "./collection/tag";

const config = defineConfig({
  clientId: "8cc6bbf4-d388-409a-9771-09723f1a5d09",
  token: "1ef5f5d54972d6914ba2357df927273c2e83ebfd",
  branch: "main",
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
    // CRÍTICO: O basePath deve ser uma string vazia para GitHub Pages
    basePath: "",
  },
  schema: {
    collections: [Page, Post, Author, Tag, Global],
  },
});

export default config;