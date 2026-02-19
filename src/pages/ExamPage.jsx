import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import StepWrapper from "../components/StepWrapper";

export default function ExamsForm() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const [exam, setExam] = useState({
    examName: "",
    eligibility: "",
    ageLimit: "",
    cutoff: "",
    examType: "",
    negativeMarking: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, examDetails: exam });
    navigate("/scholarships");
  };

  return (
    <StepWrapper>
      <h1>Possiable Entrance Examination To Get Into <span style={{color: "red"}}>{formData.educationDetails?.programName}</span> Program, Course: <span style={{color: "yellow"}}>{formData.educationDetails?.courseDetails}</span></h1>


      <h2>Examination : 1</h2>
 
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Exam Name"
          onChange={(e) =>
            setExam({ ...exam, examName: e.target.value })
          }
          required
        />

        <input
          placeholder="Eligibility"
          onChange={(e) =>
            setExam({ ...exam, eligibility: e.target.value })
          }
          required
        />

        <input
          placeholder="Age Limit"
          onChange={(e) =>
            setExam({ ...exam, ageLimit: e.target.value })
          }
          required
        />

        <input
          placeholder="Approx Cutoff"
          onChange={(e) =>
            setExam({ ...exam, cutoff: e.target.value })
          }
          required
        />

        <input
          placeholder="Exam Type (Online/Offline)"
          onChange={(e) =>
            setExam({ ...exam, examType: e.target.value })
          }
          required
        />

        <input
          placeholder="Negative Marking (Yes/No)"
          onChange={(e) =>
            setExam({ ...exam, negativeMarking: e.target.value })
          }
          required
        />

        <button type="submit">Next</button>
          
        
      </form>
    </StepWrapper>
  );
}
