import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  // Get details about the current signIn user
  const user = await currentUser();
  // console.log(user?.firstName);
  // console.log(user?.lastName);
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* Add your landing page content */}
    </div>
  );
}
