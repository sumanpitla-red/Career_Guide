import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import LevelWrapper from "../components/LevelWrapper";
import StepWrapper from "../components/StepWrapper";

export default function CareerRoadmapPage() {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();

    const handleAddLevel = () => {
        setFormData({
            ...formData,
            careerPath: [
                ...(formData.careerPath || []),
                {
                    id: Date.now(), // simple unique id
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
            console.log("Data submitted:", finalData);
            navigate("/success");
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Error submitting data. Please try again.");
        }
    };

    return (
        <StepWrapper>
            <h1>Build Career Roadmap</h1>
            <p>
                <strong>Profession:</strong> {formData.basicInfo?.profession}
            </p>

            {(formData.careerPath || []).map((level, index) => (
                <LevelWrapper
                    key={level.id || index}
                    index={index}
                    levelData={level}
                    onChange={(data) => handleLevelChange(index, data)}
                    onRemove={() => handleRemoveLevel(index)}
                />
            ))}

            <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                <button type="button" onClick={handleAddLevel}>
                    + Add Career Level
                </button>

                <button
                    type="button"
                    onClick={handleSubmit}
                    style={{ backgroundColor: "#28a745" }}
                >
                    Submit Roadmap
                </button>
            </div>
        </StepWrapper>
    );
}
