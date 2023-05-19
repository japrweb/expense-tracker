import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-2 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div className="flex">
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="text-red-400 bg-zinc-700 rounded-md text-xs font-semibold ml-1 items-center px-2.5 pt-0 pb-1 hover:text-red-500 hover:text-bold hover:bg-zinc-800 duration-700 transition-all" >
          x
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
