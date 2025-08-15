import type { Route } from "./+types/test";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const search = params.search;
  const data = await fetch(`https://bluesis.atlassian.net/wiki/rest/api/search?cql=text~"${search}"&limit=5`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${btoa(`${process.env.MY_EMAIL}:${process.env.CONFLUENCE_APP_TOKEN}`)}`,
      "Accept": "application/json"
    }
  });
  return {
    search,
    data: await data.json()
  };
}

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  return { hello: `Hello, ${name}!` };
}

// export default function TestRoute({ loaderData }: Route.ComponentProps) {
//   return <div>{loaderData.hello}</div>;
// }