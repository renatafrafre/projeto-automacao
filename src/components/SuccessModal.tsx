import { useState } from "react";

import { X } from "@phosphor-icons/react";

interface SuccessModalProps {
  closeModal: () => void;
}

export function SuccessModal({ closeModal }: SuccessModalProps) {
  const [invoice, setInvoice] = useState(false);

  function generateInvoice() {
    setInvoice(true);
  }

  return (
    <>
      <div className="z-0 fixed overflow-auto w-screen h-screen bg-zinc-950 bg-opacity-80">
        <div className="flex flex-col gap-3 items-center justify-center h-screen text-zinc-95">
          <h2 className="text-lg">Pedido de compra realizado com sucesso!</h2>
          <span className="text-sm">
            Parabéns, você realizou um pedido de compra, deseja gerar a nota
            fiscal?
          </span>

          {invoice ? (
            <span className="mb-2">
              Código da nota fiscal:{" "}
              {Math.floor(Math.random() * (9999 - 0 + 1)) + 0}
            </span>
          ) : (
            <button
              className="px-4 py-3 w-44 font-semibold rounded-md bg-cyan-500 hover:bg-cyan-400 outline-none focus:outline-cyan-500 transition-colors mb-2"
              onClick={generateInvoice}
            >
              Gerar nota fiscal
            </button>
          )}

          <button className="text-cyan-500" onClick={closeModal}>
            <X size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
