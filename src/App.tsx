import { AppDecoration } from "./components/AppDecoration/AppDecoration";
import { Table } from "./components/Table/Table";
import { UserControls } from "./components/UsersControls/UsersControls";

const App = () => {
  return (
    <div className="App">
      <AppDecoration />
      <UserControls />
      <Table />
    </div>
  );
};

export default App;
