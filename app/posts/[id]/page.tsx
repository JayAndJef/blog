import { getPostData } from "@/lib/get-posts";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getPostData(params.id);

  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex-col">
        <h1 className="flex text-3xl lg:text-4xl p-8 justify-center">
          {data.title}
        </h1>
        <h2 className="flex text-2xl lg:text-3xl py-4 justify-center">
          {data.date}
        </h2>
        <div className="flex justify-center p-5">
          <button>
            <Link href={"/"}>
              <i>&larr; Back to Home</i>
            </Link>
          </button>
        </div>

        <div className="mx-12 md:mx-16 py-12">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: data.content! }}
          ></div>
        </div>
      </div>
    </div>
  );
}
