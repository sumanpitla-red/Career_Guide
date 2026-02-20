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
    city: "",
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
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderLeft: "4px solid orange",
              padding: "12px 16px",
              margin: "15px 0 20px 0",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#e0e0e0",
              lineHeight: "1.5",
            }}
            >
            <p style={{ margin: 0 }}>
              🔒 Your privacy matters. If you are not comfortable sharing your
              email or phone number, you may simply type <strong>“NA”</strong>.
              This platform is built purely for structured career guidance and
              educational impact.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                placeholder="Name" 
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })} 
                required 
              />
              <input 
                placeholder="Email (Optional)" 
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="input-group">
              <input 
                placeholder="Phone (Optional)" 
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })} 
              />
              <input 
                  placeholder="City e.g. Hyderabad" 
                  value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })} 
                required 
              />
            </div>
            <input 
              placeholder="Target Profession (e.g., Software Engineer, Doctor, Lawyer, Collector etc)" 
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
