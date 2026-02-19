import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import StepWrapper from "../components/StepWrapper";

export default function BasicForm() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    profession: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, basicInfo: data });

    navigate("/career-roadmap");
  };


  return (
    <StepWrapper>
      <h1>Basic Information</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setData({ ...data, name: e.target.value })} required />
        <input placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} required />
        <input placeholder="Phone" onChange={(e) => setData({ ...data, phone: e.target.value })} required />
        <input placeholder="State" onChange={(e) => setData({ ...data, state: e.target.value })} required />
        <input placeholder="Profession" onChange={(e) => setData({ ...data, profession: e.target.value })} required />
        <button type="submit">Next</button>
      </form>
    </StepWrapper>
  );
}
