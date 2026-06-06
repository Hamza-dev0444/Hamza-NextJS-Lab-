import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const theme = request.cookies.get("theme");

  console.log(theme);

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}