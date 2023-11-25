import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/nest-cn-doc/",

  lang: "en-US",
  title: "Docs Demo",
  description: "A chinese docs for nestJs",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
