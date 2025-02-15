// trang chủ
import Link from "next/link";

import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <div className="text-center text-5xl">
        This is the testing page for Nexore application!
        {/* <p><span>{session?.user.email}</span></p> */}
      </div>
    </main>
  );
}
