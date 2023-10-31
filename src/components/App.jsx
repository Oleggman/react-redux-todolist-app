import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { ActivityBar } from "./ActivityBar/ActivityBar";

export const App = () => {
  return (
    <Layout>
      <TaskForm />
      <ActivityBar />
      <TaskList />
    </Layout>
  );
};
