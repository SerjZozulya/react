import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import s from "./Products.module.css";
import { Pagination } from "antd";
import { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useDispatch, useSelector } from 'react-redux';
import { setProductsActionCreator } from '../redux/reducers/products-reducer';
import React from 'react';

export const Products = () => {
  const dispatch = useDispatch()
  const [pages, setPage] = useState({ current: 1, total: 0 });
  const products = useSelector(state => state.products.products)
  const [pageSize, setPageSize] = useState(10);

  const changePage = (page) => {
    setPage({ ...pages, current: page });
  };

  const changePageSize = (size) => {
    setPageSize(size);
  };

  const [isProductsLoading, productsError, fetchProducts] = useFetching(
    async () => {
      const response = await PostService.getSeveral(pages.current, pageSize);
      dispatch(setProductsActionCreator(response.products));
      setPage({ ...pages, total: response.total });
    }
  );

  useEffect(() => fetchProducts(), [pages.current, pageSize]);

  const cards = products.map((p) => (
    <Card
      key={p.id}
      cover={
        <img
          alt="example"
          src={p.thumbnail}
          style={{ width: "100%", height: 300 }}
        />
      }
    >
      <Meta title={p.title}></Meta>
      {p.id}
    </Card>
  ));

  return (
    <div className={s.topLevelContainer}>
      <Pagination
        onChange={(e) => {
          changePage(e);
        }}
        onShowSizeChange={(current, size) => {
          changePageSize(size);
        }}
        className={s.pagination}
        defaultCurrent={pages.current}
        total={pages.total}
        pageSize={pageSize}
      />
      {isProductsLoading && <h1>ГРУЖУ...</h1>}
      <div className={s.news}>{cards}</div>
    </div>
  );
};
