import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { AppBar } from "./AppBar/AppBar";

export const App = () => {
  return (
    <Layout>
      <TaskForm />
      <AppBar />
      <TaskList />
    </Layout>
  );
};
