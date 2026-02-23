import EducationSection from "./forms/EducationSection";
import ExamsSection from "./forms/ExamsSection";
import ScholarshipsSection from "./forms/ScholarshipsSection";
import JobsSection from "./forms/JobsSection";

export default function LevelWrapper({
    levelData,
    onChange,
    onRemove,
    index,
    levelColor
}) {
    const handleChange = (field, value) => {
        onChange({ ...levelData, [field]: value });
    };

    return (
        <div
            style={{
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor:
        levelColor === 0
            ? "rgba(0, 123, 255, 0.08)"
            : levelColor === 1
            ? "rgba(40, 167, 69, 0.08)"
            : "rgba(255, 193, 7, 0.08)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backdropFilter: "blur(10px)",
    marginBottom: "10px"
}}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    paddingBottom: "15px"
                }}
            >
                <h2 style={{ margin: 0, color: "#00d4ff", fontSize: "1.5rem" }}>
                    Level {index + 1}
                </h2>

                {onRemove && (
                    <button
                        onClick={onRemove}
                        style={{
                            backgroundColor: "rgba(255, 77, 77, 0.1)",
                            color: "#ff4d4d",
                            border: "1px solid #ff4d4d",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            transition: "all 0.2s"
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff4d4d";
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 77, 77, 0.1)";
                            e.currentTarget.style.color = "#ff4d4d";
                        }}
                    >
                        Remove Level
                    </button>
                )}
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label><strong>Level Name:</strong></label>
                <select
                    value={levelData.levelName || ""}
                    onChange={(e) =>
                        handleChange("levelName", e.target.value)
                    }
                    style={{ padding: "8px", marginLeft: "10px" }}
                >
                    <option value="">Select Level</option>
                    <option value="Intermediate(12th)">
                        Intermediate(12th)
                    </option>
                    <option value="Diploma">Diploma</option>
                    <option value="Under Graduation">
                        Under Graduation
                    </option>
                    <option value="Post Graduation">
                        Post Graduation
                    </option>
                    <option value="PhD">PhD</option>
                </select>
            </div>

            <EducationSection
                education={levelData.educationDetails || {}}
                onChange={(data) =>
                    handleChange("educationDetails", data)
                }
                levelName={levelData.levelName}
            />

            <ExamsSection
                exams={levelData.examDetails || []}
                onChange={(data) =>
                    handleChange("examDetails", data)
                }
                levelName={levelData.levelName}
            />

            <ScholarshipsSection
                scholarships={levelData.scholarshipDetails || []}
                onChange={(data) =>
                    handleChange("scholarshipDetails", data)
                }
                levelName={levelData.levelName}
            />

            <JobsSection
                jobs={levelData.jobDetails || []}
                onChange={(data) =>
                    handleChange("jobDetails", data)
                }
                levelName={levelData.levelName}
            />
        </div>
    );
}