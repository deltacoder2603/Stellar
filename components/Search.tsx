"use client";

import React, { useState } from "react";
import Loading from "@/app/loading";
import { useLazyGetSummaryQuery } from "../utils/services/article";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Article {
  url: string;
  summary: string;
}

interface ArticleError {
  data: {
    error: string;
  };
}

const Search: React.FC = () => {
  const [article, setArticle] = useState<Article>({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle: Article = { ...article, summary: data.summary };
      setArticle(newArticle); 
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({ ...article, url: e.target.value });
  };

  return (
    <section className="mt-16 w-full max-w-full">
      <div className="gap-2 flex flex-col w-full">
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          <Input
            type="url"
            placeholder="Enter A URL"
            value={article.url}
            onChange={handleInputChange} 
            required
            className="url_input peer"
          />
          <Button
            variant="redHover"
            type="submit"
          >
            Generate
          </Button>
        </form>
      </div>

      <div className="my-10 flex items-center max-w-full justify-center">
        {isFetching ? (
          <Loading />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that was not supposed to happen... <br />
            <span className="font-satoshi font-bold text-red-700">
              {(error as ArticleError)?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex-col flex gap-3 mr-[40px] ml-[40px]">
              <h2 className="font-satoshi font-bold text-white text-2xl">
                Article <span className="blue_gradient"> Summary:</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-red-200">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Search;
