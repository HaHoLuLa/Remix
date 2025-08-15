import type { Route } from "./+types/about";

export const loader = async ({}: Route.LoaderArgs) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  return data.json()
}

export const meta = ({}: Route.MetaArgs) => {
  return [{ title: "About" }]
}

export default function About({ loaderData }: Route.ComponentProps) {
  const posts = loaderData;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {/* <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li> */}
          {posts.map((item: Record<string, string>, index: number) => (
            <li key={index}><a>{item.title}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}