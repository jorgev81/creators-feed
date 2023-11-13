import MainLayout from 'layouts/MainLayout';
import { RouterProvider } from "react-router-dom";
import RenderRoutes from "routes/RenderRoutes";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <RouterProvider router={RenderRoutes} />
      </MainLayout>
    </div>
  );
}

export default App;
