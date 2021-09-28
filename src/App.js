import "./App.css";
import { Balance } from "./component/Balance";
import { Summary } from "./component/Summary";
import { Title } from "./component/Title";
import { History } from "./component/History";
import { AddTrans } from "./component/AddTrans";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className='my-3 bg-secondary text-white border border-dark rounded p-3'>
        <Title />
        <Balance />
        <Summary />
        <History />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
