import Balance from "./components/Balance/Balance";
import TransactionsList from "./components/Transactions/TransactionsList";

const App = () => {
  return (
    <div className="p-5">
      <div className="max-w-screen-lg mx-auto">
        <Balance />
        <TransactionsList />
      </div>
    </div>
  );
};

export default App;
