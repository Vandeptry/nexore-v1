import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {


  return (
    <main>
      <div className="text-center text-5xl">
        This is the testing page for Nexore application!
      </div>
    </main>
  );
}
