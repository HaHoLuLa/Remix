import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/home";
import { Bot } from "lucide-react"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "리믹스 테스트" },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}
// <button className="btn btn-primary">버튼</button>
export default function Home() {
  const nav = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="card w-sm shadow-sm">
        <div className="card-body">
          <h1 className="card-title"><Bot />리믹스 테스트</h1>
          <p>리믹스 테스트입니다.</p>
          <div className="card-actions justify-end">
            <Link to={"/about"} className="btn btn-primary">어바웃</Link>
            <button className="btn btn-secondary" onClick={() => nav("/dnd")}>디앤디</button>
          </div>
        </div>
      </div>
    </div>
  );
}
