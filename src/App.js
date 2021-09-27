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
      <Title />
      <Balance />
      <Summary />
      <History />
      <AddTrans />
    </GlobalProvider>
  );
}

export default App;
