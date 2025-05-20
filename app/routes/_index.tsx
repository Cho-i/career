import type { MetaFunction } from "@remix-run/node";
import * as TITLE from './_lib/constant.title';
import { Introduce, Contact, Work, Skill } from "./_about";


export const meta: MetaFunction = () => {
  return [
    { title: TITLE.SITE_TITLE },
    { name: "description", content: TITLE.SITE_TITLE },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-10">
      <Contact />
      <Introduce />
      <Skill />
      <Work />
    </div>
  );
}
