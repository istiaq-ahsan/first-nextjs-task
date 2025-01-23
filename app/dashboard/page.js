import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.email) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-4xl ">Welcome to your profile!</h1>
      </div>
    </div>
  );
}
