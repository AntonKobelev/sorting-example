import React, { useEffect, useState } from "react";
import { products as productsFromData } from "../data/products";
import Product from "./product";
import SortSelect from "./sortSelect";
import _ from "lodash";

// варианты выбора признака сортировки
const sortOptions = [
  {
    value: "priceASC",
    label: "Цена по возрастанию",
    // фильтруем продукты в порядке убывания
    sort: (products) => _.orderBy(products, ["price"], ["asc"]),
  },
  {
    value: "priceDESC",
    label: "Цена по убыванию",
    // фильтруем продукты в порядке убывания
    sort: (products) => _.orderBy(products, ["price"], ["desc"]),
  },
  {
    value: "ratingASC",
    label: "Рейтинг по возрастанию",
    sort: (products) => _.orderBy(products, ["rating.rate"], ["asc"])
  },
  {
    value: "ratingDESC",
    label: "Рейтинг по убыванию",
    sort: (products) => _.orderBy(products, ["rating.rate"], ["desc"])
  }
];

const ProductList = () => {
  // Наши товары
  const [products] = useState(productsFromData);
  //console.log("products", products)

  // Переменная для хранения сортированных товаров
  const [sortProducts, setSortProducts] = useState(productsFromData);
  console.log("sortProducts", sortProducts)

  // хранение признака сортировки
  const [sortSign, setSortSign] = useState("priceDESC");

  // метод для изменения признака сортировки
  const handleChangeSortSign = (e) => {
    setSortSign(e.target.value);
  };

  // отслеживаем изменение признака сортировки или списка товаров
  useEffect(() => {
    // в sortOptions ищем признак по которому сортируем
    const findOption = sortOptions.find(({ value }) => value === sortSign);
    console.log("findOption", findOption);
    // если такой признак есть
    if (findOption) {
      setSortProducts(findOption.sort(products));
    } else {
      // если не нашли то просто устанавливаем продкуты
      setSortProducts(products);
    }
  }, [sortSign, products]);

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
        {sortProducts.map((product) => (
          // Список товаров
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
