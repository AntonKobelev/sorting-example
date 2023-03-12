import React, { useState } from "react";
import { products as productsFromData } from "../data/products";
import Product from "./product";
import SortSelect from "./sortSelect";
import _ from "lodash";

// варианты выбора признака сортировки
const sortOptions = [{ value: "price", label: "Цена" }];

// фильтруем продукты в порядке возрастания
sort: (products) => _.orderBy(products, ["price"], ["desc"]);

const ProductList = () => {
  // Наши товары
  const [products] = useState(productsFromData);

  // Переменная для хранения сортированных товаров
  const [sortProducts, setSortProducts] = useState(productsFromData);
  

  // хранение признака сортировки
  const [sortSign, setSortSign] = useState("price");

  // метод для изменения признака сортировки
  const handleChangeSortSign = (e) => {
    setSortSign(e.target.value);
  };

  return (
    <div className="container mt-t">
      <div>
        <SortSelect
          value={sortSign}
          options={sortOptions}
          onSort={handleChangeSortSign}
        />
      </div>
      <div className="row mt-4">
        {products.map((product) => (
          // Список товаров
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
