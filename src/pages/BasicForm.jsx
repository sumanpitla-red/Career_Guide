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
      <div className="home-container">

        <section className="form-section card">
            <p className="impact-text"> <span style={{color:"orange"}}>Share your path.</span> <span style={{color:"white"}}>Inspire clarity.</span> Create impact.</p>
          <p>Fill in your basic information to begin building your roadmap.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                placeholder="Name" 
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })} 
                required 
              />
              <input 
                placeholder="Email" 
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })} 
                required 
              />
            </div>
            <div className="input-group">
              <input 
                placeholder="Phone" 
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })} 
                required 
              />
              <input 
                placeholder="State" 
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })} 
                required 
              />
            </div>
            <input 
              placeholder="Target Profession (e.g., Software Engineer, Doctor)" 
              value={data.profession}
              onChange={(e) => setData({ ...data, profession: e.target.value })} 
              required 
            />
            <button type="submit" className="cta-button">Next: Build Roadmap</button>
          </form>
        </section>

        

        <footer className="footer">
          <p>&copy; 2026 Career Guide Project. All rights reserved.</p>
        </footer>
      </div>
    </StepWrapper>
  );
}
