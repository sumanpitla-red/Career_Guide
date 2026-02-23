import { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import LevelWrapper from "../components/LevelWrapper";
import StepWrapper from "../components/StepWrapper";

export default function CareerRoadmapPage() {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!formData.careerPath || formData.careerPath.length === 0) {
            handleAddLevel();
        }
    }, []);

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
                    Targeting Profession:{" "}
                    <strong style={{ color: "#00d4ff" }}>
                        {formData.basicInfo?.profession}
                    </strong>
                </p>
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
                        + Add Career Level
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