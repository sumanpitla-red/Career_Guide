import EducationSection from "./forms/EducationSection";
import ExamsSection from "./forms/ExamsSection";
import ScholarshipsSection from "./forms/ScholarshipsSection";
import JobsSection from "./forms/JobsSection";

export default function LevelWrapper({ levelData, onChange, onRemove, index }) {
    const handleChange = (field, value) => {
        onChange({ ...levelData, [field]: value });
    };

    return (
        <div
            style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "20px",
                margin: "20px 0",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <h2>Career Level {index + 1}</h2>
                <button
                    onClick={onRemove}
                    style={{
                        backgroundColor: "#ff4d4d",
                        color: "white",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Remove Level
                </button>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label><strong>Level Name:</strong> </label>
                <select
                    value={levelData.levelName || ""}
                    onChange={(e) => handleChange("levelName", e.target.value)}
                    style={{ padding: "8px", marginLeft: "10px" }}
                >
                    <option value="">Select Level</option>
                    <option value="After 10th">After 10th</option>
                    <option value="After 12th">After 12th</option>
                    <option value="Under Graduation">Under Graduation</option>
                    <option value="Post Graduation">Post Graduation</option>
                    <option value="PhD">PhD</option>
                </select>
            </div>

            <EducationSection
                education={levelData.educationDetails || {}}
                onChange={(data) => handleChange("educationDetails", data)}
            />

            <ExamsSection
                exams={levelData.examDetails || []}
                onChange={(data) => handleChange("examDetails", data)}
            />

            <ScholarshipsSection
                scholarships={levelData.scholarshipDetails || []}
                onChange={(data) => handleChange("scholarshipDetails", data)}
            />

            <JobsSection
                jobs={levelData.jobDetails || []}
                onChange={(data) => handleChange("jobDetails", data)}
            />
        </div>
    );
}
