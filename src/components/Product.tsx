import { Trash } from "@phosphor-icons/react";

interface ProductProps {
  id: number;
  name: string;
  amount: number;
  onDeleteProduct: (id: number) => void;
}

export function Product({ id, name, amount, onDeleteProduct }: ProductProps) {
  function handleDeleteProduct() {
    onDeleteProduct(id);
  }

  return (
    <>
      <span>{id}</span>
      <span className="col-span-2">{name}</span>
      <span className="ml-4">{amount}</span>
      <button
        id="trash"
        onClick={handleDeleteProduct}
        className="outline-none mr-3 rounded-sm focus:outline-cyan-600 hover:text-cyan-600 transition-colors"
      >
        <Trash size={16} />
      </button>
    </>
  );
}
