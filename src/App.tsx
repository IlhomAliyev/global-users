import { AppDecoration } from "./components/AppDecoration/AppDecoration";
import { Table } from "./components/Table/Table";
import { UserControls } from "./components/UsersControls/UsersControls";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
  const { users } = useTypedSelector((state) => state.userSlice);

  return (
    <div className="App">
      <AppDecoration />
      <UserControls />
      {!!users?.length && <Table users={users} />}
    </div>
  );
};

export default App;
