import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    basicInfo: {},
    careerPath: []
  });
  const resetForm = () => {
    setFormData({
      basicInfo: {},
      careerPath: []
    });
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
}
