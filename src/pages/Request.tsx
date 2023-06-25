import { ChangeEvent, FormEvent } from "react";
import { Product } from "../components/Product";

interface RequestProps {
  products: {
    id: number;
    name: string;
    amount: number;
  }[];
  newProductName?: string;
  newProductAmount?: number;
  handleSetNewProductName?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSetNewProductAmount?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCreateNewProduct?: (event: FormEvent) => void;
  deleteProduct: (productToDelete: number) => void;
}

export function Request({
  products,
  newProductName,
  newProductAmount,
  handleSetNewProductName,
  handleSetNewProductAmount,
  handleCreateNewProduct,
  deleteProduct,
}: RequestProps) {
  return (
    <>
      <form
        onSubmit={handleCreateNewProduct}
        className="flex justify-center items-center gap-2 w-full"
      >
        <div className="flex flex-row items-center justify-center gap-2 w-2/5 p-2">
          Produto:
          <input
            className="px-4 py-3 w-full bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
            type="text"
            id="name"
            placeholder="Nome do produto"
            value={newProductName}
            onChange={handleSetNewProductName}
          />
          Qtde:
          <input
            className="px-4 py-3 w-20 bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
            type="number"
            id="amount"
            min={0}
            placeholder="Unidades"
            value={newProductAmount}
            onChange={handleSetNewProductAmount}
          />
          <button
            type="submit"
            className="px-4 py-3 w-24 font-semibold rounded-md bg-cyan-500 hover:bg-cyan-400 outline-none focus:outline-cyan-500 transition-colors"
          >
            Add
          </button>
        </div>
      </form>

      <div
        id="productTable"
        className="flex flex-col items-center justify-center gap-4 p-4"
      >
        <div className="grid grid-flow-col grid-cols-4 py-2 px-5 w-2/5 outline-none">
          <span>ID</span>
          <span className="col-span-2 ml-1">Produto</span>
          <span>Unidades</span>
          <span>Ações</span>
        </div>

        {products.map((product) => {
          return (
            <div className="grid grid-flow-col grid-cols-4 py-4 px-5 w-2/5 bg-zinc-700 outline-none rounded-md border-2 border-zinc-600">
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                amount={product.amount}
                onDeleteProduct={deleteProduct}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
