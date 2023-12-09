import { AppDecoration } from "./components/AppDecoration/AppDecoration";
import { Table } from "./components/Table/Table";
import { UserControls } from "./components/UsersControls/UsersControls";

const App = () => {
  console.log("App RENDER");
  
  return (
    <div className="App">
      <AppDecoration />
      <UserControls />
      <Table />
    </div>
  );
};

export default App;
