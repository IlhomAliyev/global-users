import { AppDecoration } from "./modules/AppDecoration/AppDecoration";
import { UserControls } from "./modules/UsersControls/UsersControls";
import { UsersTable } from "./modules/UsersTable/UsersTable";

const App = () => {
  return (
    <div className="App">
      <AppDecoration />
      <UserControls />
      <UsersTable />
    </div>
  );
};

export default App;
