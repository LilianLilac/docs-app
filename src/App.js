import List from "./components/AllDocuments/List";
import { data } from "./utils/data";

const App = () => {
  return (
    <div>
      <List items={data} />
    </div>
  );
};

export default App;
