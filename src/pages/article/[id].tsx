import React from "react";
import { Markup } from "react-render-markup";
import Menu from "../../components/blog/MenuBlog";
import Template from "../../components/blog/TemplateBlog";
import { fetchAPI } from "../../hooks/helpers/fetchAPI";
import Head from "next/head";

export async function getServerSideProps(context) {
  const articleID = await context.query.id;
  const post = await fetchAPI(`/api/articles/getByID/${articleID}`, "GET");

  return { props: { post } };
}

interface iArtigo {
  post: {
    _id: string;
    content: string;
    title: string;
    resume: string;
  };
}

export default function Artigo({ post }: iArtigo) {
  return (
    <Menu>
      <Template>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.resume} />
        </Head>
        <div style={{ width: "70vw", wordWrap: "break-word" }}>
          <Markup markup={post.content} />
        </div>
      </Template>
    </Menu>
  );
}
