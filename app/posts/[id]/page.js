import getPost from "../../../lib/getPost";

export default async function postPage({ params }) {
  const { id } = await params;

  const post = await getPost(id);
  return (
    <div className="my-10 w-11/12 mx-auto shadow-lg p-5 space-y-3">
      <h2 className="text-xl">Title: {post.title}</h2>
      <p>Body: {post.body}</p>
    </div>
  );
}
