import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
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
