import React from "react";
import Template from "../components/UI/Template";
import CardArticle from "../components/UI/Cards/CardArticle";
import usePagination from "../hooks/usePagination";
import { fetchAPI } from "../helpers/fetchAPI";

export async function getServerSideProps() {
  const posts = await fetchAPI(`/api/articles`, "GET");

  return { props: { posts } };
}

export default function Home({ posts }) {
  const { pagination, botaoMostrarMais } = usePagination(5, 5);
  return (
    <Template>
      {posts.slice(0, pagination).map((element) => {
        return (
          <CardArticle
            key={element._id}
            route={"/article/" + element._id}
            title={element.title}
            shortdescription={element.resume}
          />
        );
      })}
      {botaoMostrarMais(posts.length)}
    </Template>
  );
}
