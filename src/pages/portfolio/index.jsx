import React from "react";
import Template from "../../components/Template";
import NavPortfolio from "../../components/NavPortfolio";
import CardPortfolio from "../../components/CardPortfolio";
import usePagination from "../../Hooks/usePagination";

export async function getStaticProps() {
  const dataFetch = await fetch("http://localhost:3000/api/portfolio");
  const data = await dataFetch.json();
  return { props: { data } };
}


export default function portfolio({ data }) {
  const {
    pagination,
    botaoMostrarMais
  } = usePagination();

  return (
    <Template nav={<NavPortfolio data={data} />} >

      {data.slice(0, pagination).map((element) => {
        return (
          <CardPortfolio
            Title={element.title}
            ShortDescription={element.shortdescription}
            Category={element.category}
            id={element.id} />
        )
      })
      }
      {botaoMostrarMais(data.length)}
    </Template>
  )
}
