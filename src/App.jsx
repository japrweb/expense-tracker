import { GlobalProvider } from './context/GlobalState';

import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import ExpenseChart from './components/ExpenseChart';


function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white min-h-screen flex flex-col justify-center items-center px-4 py-4 md:px-8 md:py-8'>
        <div className='container m-auto md:w-full max-w-screen-xl'>
          <div className='bg-zinc-800 p-10 rounded-lg flex flex-col md:flex-row gap-x-10'>
            <div>
              <h1 className='text-4xl font-bold'>Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1'>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App;
