import Image from "next/image";

import { DataStore } from "@aws-amplify/datastore";
import { Blogs } from "../models";

export default async function Home() {
  const models = await DataStore.query(Blogs);
  console.log(models);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">
        Welcome to <a href="https://nextjs.org">Loctech</a>
      </h1>
      {
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {models.map((model) => (
            <div
              key={model.id}
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">{model.title}</h3>
              <p className="mt-4 text-xl">{model.content}</p>
            </div>
          ))}
        </div>
      }
    </main>
  );
}
