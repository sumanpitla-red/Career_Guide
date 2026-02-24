export default function EducationSection({ education, onChange, levelName }) {
    const handleChange = (field, value) => {
        onChange({ ...education, [field]: value });
    };

    return (
        <div className="section-container">
            <h3>Education Details {levelName ? `for ${levelName}` : ""}</h3>
            <div className="form-grid">
                <div>
                    <label>Program Name</label>
                    <input
                        placeholder="e.g. Intermediate, B.Tech"
                        value={education.programName || ""}
                        onChange={(e) => handleChange("programName", e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Course Details</label>
                    <input
                        placeholder="e.g. MPC, CSE"
                        value={education.courseDetails || ""}
                        onChange={(e) => handleChange("courseDetails", e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Duration</label>
                    <input
                        placeholder="e.g. 2 Years, 4 Years"
                        value={education.duration || ""}
                        onChange={(e) => handleChange("duration", e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Program Type</label>
                    <select
                        value={education.programType || ""}
                        onChange={(e) => handleChange("programType", e.target.value)}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Distance">Distance</option>
                        <option value="NA">NA</option>
                    </select>
                </div>
                <div>
                    <label>Eligibility Examination</label>
                    <input
                        placeholder="e.g. SSC, EAMCET"
                        value={education.eligibilityExam || ""}
                        onChange={(e) => handleChange("eligibilityExam", e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Approx Tuition Fee</label>
                    <input
                        placeholder="e.g. ₹50,000"
                        value={education.tuitionFee || ""}
                        onChange={(e) => handleChange("tuitionFee", e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Scholarship Available</label>
                    <select
                        value={education.scholarshipAvailable || ""}
                        onChange={(e) => handleChange("scholarshipAvailable", e.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="NA">NA</option>
                    </select>
                </div>
                <div >
                    <label>Additional Notes / Disclaimer</label>
                    <textarea
                        placeholder="e.g. Admission criteria may vary by college..."
                        value={education.note || ""}
                        onChange={(e) => handleChange("note", e.target.value)}
                        rows={3}
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            backgroundColor: '#fff',
                            color: '#333',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div>
    <label>Top Colleges</label>
    <textarea
        placeholder="e.g. IIT-Bombay, OU, JNTU, HCU"
        value={education.topColleges || ""}
        onChange={(e) => handleChange("topColleges", e.target.value)}
        rows={3}
        style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#333',
            boxSizing: 'border-box'
        }}
    />
</div>
            </div>
        </div>
    );
}
