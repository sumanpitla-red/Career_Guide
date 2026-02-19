import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";

import BasicForm from "./pages/BasicForm";
import CareerRoadmapPage from "./pages/CareerRoadmapPage";
import Success from "./pages/Success";

export default function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicForm />} />
          <Route path="/career-roadmap" element={<CareerRoadmapPage />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}
