import Link from "next/link";
import getAllPosts from "../lib/getAllPosts";
import Image from "next/image";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] container mx-auto">
      <main className="my-10">
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="shadow-md p-4">
              <Link href={`/posts/${post.id}`}>
                {index + 1}. Title: {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
