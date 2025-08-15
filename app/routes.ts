import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("api/test/:search", "routes/api/test.tsx"),
  route("dnd", "routes/dnd.tsx")
] satisfies RouteConfig;
