let students = [
    {
        name: "Rahul Kumar",
        marks: "89",
        class: "10th",
        address: "Patna"
    },

    {
        name: "Priya Singh",
        marks: "95",
        class: "12th",
        address: "Delhi"
    },

    {
        name: "Amit Sharma",
        marks: "78",
        class: "11th",
        address: "Mumbai"
    },

    {
        name: "Sneha Verma",
        marks: "91",
        class: "10th",
        address: "Lucknow"
    },

    {
        name: "Rohan Gupta",
        marks: "84",
        class: "12th",
        address: "Jaipur"
    }

];

// Function to display student cards

function displayStudents(studentArray){
    let cards = studentArray.map((student) => {

        return `
        <div class="card">
            <h3>Name: ${student.name}</h3>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        </div>
        `;

    });

    document.getElementById("cards").innerHTML = cards.join("");

}

    displayStudents(students);


// Search Student

function searchStudents() {
    let searchName = document.getElementById("searchBox").value.toLowerCase();

    let result = students.filter(function(student) {
        return student.name.toLowerCase().includes(searchName);
    });

    displayStudents(result);
}

document.getElementById("searchBtn").addEventListener("click", searchStudents);