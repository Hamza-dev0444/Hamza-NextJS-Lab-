import { comments } from "../data";


export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(id)
  );

  return Response.json(comment);
}


export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  comments[index].text = text;

  return Response.json(comments[index]);
}



export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  const deletedComment = comments[index];

  comments.splice(index, 1);

  return Response.json(deletedComment);
}


export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}