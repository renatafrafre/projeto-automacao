import { useState } from "react";
import { Product } from "../components/Product";
import { SuccessModal } from "../components/SuccessModal";

interface OrderProps {
  products: {
    id: number;
    name: string;
    amount: number;
    price: number;
  }[];
  deleteProduct: (productToDelete: number) => void;
}

export function Order({ products, deleteProduct }: OrderProps) {
  const [showModal, setShowModal] = useState(false);

  function onSendOrder() {
    setShowModal(true);
  }

  function onCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && <SuccessModal closeModal={onCloseModal} />}

      <form className="flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center gap-2 w-2/5 p-2">
          <div className="flex gap-2 items-center">
            Fornecedor:
            <input
              className="px-4 py-3 w-full bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
              type="text"
              id="supplier"
              placeholder="Nome do fornecedor"
            />
          </div>

          <div className="flex gap-2 items-center">
            Frete:
            <input
              className="px-4 py-3 w-24 bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
              type="number"
              id="shipping"
              min={0}
              placeholder="Valor"
            />
            Pagamento:
            <input
              className="px-4 py-3 w-full bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
              type="text"
              id="payMethod"
              min={0}
              placeholder="Forma de pgto"
            />
          </div>

          <div className="flex gap-2 items-center">
            Tipo de saída:
            <input
              className="px-4 py-3 w-full bg-zinc-700 rounded-md border-2 border-zinc-600 outline-none focus:outline-cyan-600 transition-colors"
              type="text"
              id="exitType"
              min={0}
              placeholder="Informe o tipo da saída"
            />
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <span>Produtos solicitados:</span>
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

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <div className="font-bold mb-3">
          Total R$:
          {products.map((product) => {
            return Math.floor(Math.random() * 10) + product.amount * 2;
          })}
        </div>

        <div>
          <button
            className="px-4 py-3 w-44 font-semibold rounded-md bg-cyan-500 hover:bg-cyan-400 outline-none focus:outline-cyan-500 transition-colors"
            type="submit"
            onClick={onSendOrder}
          >
            Enviar pedido
          </button>
        </div>
      </div>
    </>
  );
}
