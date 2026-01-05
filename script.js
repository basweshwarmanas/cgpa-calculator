function calculateSGPA() {
    let grades = document.querySelectorAll(".grade");
    let credits = document.querySelectorAll(".credit");

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        let gradePoint = parseFloat(grades[i].value);
        let credit = parseFloat(credits[i].value);

        totalPoints += gradePoint * credit;
        totalCredits += credit;
    }

    let sgpa = totalPoints / totalCredits;
    document.getElementById("result").innerText = sgpa.toFixed(2);
    document.getElementById("result-box").classList.remove("hidden");
}
