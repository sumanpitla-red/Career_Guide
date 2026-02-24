import { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import LevelWrapper from "../components/LevelWrapper";
import StepWrapper from "../components/StepWrapper";

export default function CareerRoadmapPage() {
    const { formData, setFormData, resetForm } = useContext(FormContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Guard: If no basic info, user shouldn't be here (prevents stale data on back)
        if (!formData.basicInfo || Object.keys(formData.basicInfo).length === 0) {
            navigate("/");
            return;
        }

        if (!formData.careerPath || formData.careerPath.length === 0) {
            handleAddLevel();
        }
    }, [formData.basicInfo, navigate]);

    const handleAddLevel = () => {
        setFormData({
            ...formData,
            careerPath: [
                ...(formData.careerPath || []),
                {
                    id: Date.now(),
                    educationDetails: {},
                    examDetails: [],
                    scholarshipDetails: [],
                    jobDetails: [],
                },
            ],
        });
    };

    const handleRemoveLevel = (index) => {
        const updatedPath = formData.careerPath.filter((_, i) => i !== index);
        setFormData({ ...formData, careerPath: updatedPath });
    };

    const handleLevelChange = (index, updatedLevelData) => {
        const updatedPath = [...(formData.careerPath || [])];
        updatedPath[index] = updatedLevelData;
        setFormData({ ...formData, careerPath: updatedPath });
    };

    const handleSubmit = async () => {
        if (!formData.careerPath || formData.careerPath.length === 0) {
            alert("Please add at least one career level.");
            return;
        }

        try {
            const finalData = {
                ...formData,
                createdAt: new Date(),
            };

            await addDoc(collection(db, "careerRoadmaps"), finalData);
            navigate("/success");
        } catch (error) {
            console.error(error);
            alert("Error submitting data. Please try again.");
        }
    };

    return (
        <StepWrapper>
            <div className="roadmap-header">
                <h1>Build Your Career Roadmap</h1>
                <p
                    style={{
                        fontSize: "1.75rem",
                        color: "#ddd",
                        background: "rgba(0, 0, 0, 0.1)",
                        padding: "15px",
                        borderRadius: "8px",
                    }}
                >
                    Target Profession:{" "}
                    <strong style={{ color: "#00d4ff" }}>
                        {formData.basicInfo?.profession}
                    </strong>
                </p>
                <div style={{
                    backgroundColor: "rgba(0, 123, 255, 0.08)",
                    border: "1px solid rgba(0, 123, 255, 0.2)",
                    padding: "10px 14px",
                    margin: "10px 0",
                    borderRadius: "6px",
                    textAlign: "left",
                    color: "#ddd",
                    fontSize: "0.9rem"
                }}>
                    📘 <strong>Before You Begin:</strong> Please review the Workflow Guide below to understand how to structure your career levels properly.
                </div>
                <div style={{
                    backgroundColor: "rgba(0, 212, 255, 0.08)",
                    borderLeft: "4px solid #00d4ff",
                    padding: "15px",
                    margin: "15px 0",
                    borderRadius: "8px",
                    textAlign: "left",
                    color: "#eee",
                    fontSize: "0.95rem",
                    lineHeight: "1.6"
                }}>
                    <strong>Workflow Guide:</strong><br />
                    <strong>Step 1:</strong> Enter <strong>Level 1</strong> as your earliest stage relevant to the targeted profession
                    (e.g., Intermediate / Diploma).<br />
                    <strong>Step 2:</strong> Click <strong>"Add Next Career Level"</strong> and enter the next stage
                    (e.g., Graduation required for eligibility).<br />
                    <strong>Step 3:</strong> Continue adding levels in chronological order
                    (Level 3, Level 4, and so on) until you reach your current position or highest milestone.<br />
                    <strong>Step 4:</strong> Review all entries and click <strong>"Submit Roadmap"</strong> to save your career roadmap.
                </div>
                <div style={{
                    backgroundColor: "rgba(255, 165, 0, 0.1)",
                    borderLeft: "4px solid orange",
                    padding: "15px",
                    margin: "20px 0",
                    borderRadius: "8px",
                    textAlign: "left",
                    color: "#eee",
                    fontSize: "0.95rem",
                    lineHeight: "1.5"
                }}>
                    <strong>Note:</strong> Please respond to all fields before submitting.
                    If any section Field is not relevant or not applicable to your experience, simply enter
                    <strong>"NA"</strong> or select <strong>"NA"</strong>.
                    Kindly ensure each response reflects your professional journey.
                </div>

                {/* Contact Support Box */}
              <div style={{
    background: "rgb(5, 0, 0)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255)",
    borderRadius: "10px",
    padding: "15px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(255, 255, 255, 0.3)",
    maxWidth: "500px"   // 🔥 controls overall size
}}>
    <h3 style={{
        color: "#00d4ff",
        margin: "0 0 8px 0",
        fontSize: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px"
    }}>
        <span style={{ fontSize: "1.2rem" }}>👤</span> Need Assistance?
    </h3>

    <p style={{
        color: "#ddd",
        marginBottom: "12px",
        fontSize: "0.85rem"
    }}>
        If any queries related to data entry or technical issues, please contact:
    </p>

    <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center"
    }}>
        <div style={{
            background: "rgba(0, 212, 255, 0.1)",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            width: "100%",
            maxWidth: "350px"
        }}>
            <span style={{ fontWeight: "600", color: "#00d4ff", fontSize: "0.9rem" }}>
                1. Suman Pitla
            </span>
            <br />
            <span style={{ color: "#eee", fontSize: "0.8rem" }}>
                Mob No: 6305779539
            </span>
        </div>

        <div style={{
            background: "rgba(0, 212, 255, 0.1)",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            width: "100%",
            maxWidth: "350px"
        }}>
            <span style={{ fontWeight: "600", color: "#00d4ff", fontSize: "0.9rem" }}>
                2. Naresh Chary
            </span>
            <br />
            <span style={{ color: "#eee", fontSize: "0.8rem" }}>
                Mob No: 93812 09785
            </span>
        </div>
    </div>
</div>
            </div>

            <div className="roadmap-grid">
                {(formData.careerPath || []).map((level, index) => (
                    <LevelWrapper
                        key={level.id || index}
                        index={index}
                        levelData={level}
                        levelColor={index % 3}
                        onChange={(data) => handleLevelChange(index, data)}
                        onRemove={
                            index === 0 ? null : () => handleRemoveLevel(index)
                        }
                    />
                ))}




                <div className="roadmap-actions">
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={handleAddLevel}
                    >
                        + Add Next Career Level
                    </button>

                    <button
                        type="button"
                        className="btn-success"
                        onClick={handleSubmit}
                    >
                        Submit Roadmap
                    </button>
                </div>
            </div>
        </StepWrapper>
    );
}