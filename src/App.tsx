import { ChangeEvent, FormEvent, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import "./global.css";

export function App() {
  const [products, setProducts] = useState([
    {
      id: 2,
      name: "Cabo de rede",
      amount: 4,
      price: 54.0,
    },
    {
      id: 1,
      name: "Switch 6 portas",
      amount: 1,
      price: 94.0,
    },
  ]);

  const [newProductName, setNewProductName] = useState("");
  const [newProductAmount, setNewProductAmount] = useState(0);

  function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();

    let newProductId = products.length + 1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id == newProductId) {
        newProductId = newProductId + 1;
      }
    }

    const newProduct = {
      id: newProductId,
      name: newProductName,
      amount: newProductAmount,
      price: newProductAmount,
    };

    setProducts([newProduct, ...products]);
    setNewProductName("");
    setNewProductAmount(0);
  }

  function handleSetNewProductName(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewProductName(event.target.value);
  }

  function handleSetNewProductAmount(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewProductAmount(event.target.valueAsNumber);
  }

  function deleteProduct(productToDelete: number) {
    const productsWithoutDeletedOne = products.filter((product) => {
      return product["id"] != productToDelete;
    });

    setProducts(productsWithoutDeletedOne);
  }

  return (
    <>
      <BrowserRouter>
        <Router
          products={products}
          newProductName={newProductName}
          newProductAmount={newProductAmount}
          handleSetNewProductName={handleSetNewProductName}
          handleSetNewProductAmount={handleSetNewProductAmount}
          handleCreateNewProduct={handleCreateNewProduct}
          deleteProduct={deleteProduct}
        />
      </BrowserRouter>
    </>
  );
}
