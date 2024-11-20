// Variables
const form = document.getElementById('registrationForm');
const studentTable = document.getElementById('studentTable')?.querySelector('tbody');

// Retrieve data from localStorage
let students = JSON.parse(localStorage.getItem('students')) || [];

// Display existing records on the display.html page
function displayRecords() {
    if (!studentTable) return;
    studentTable.innerHTML = '';
    students.forEach((student, index) => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.email}</td>
            <td>${student.class}</td>
            <td>${student.contact}</td>
            <td>
                <button class="edit-btn" onclick="editRecord(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteRecord(${index})">Delete</button>
            </td>
        </tr>`;
        studentTable.insertAdjacentHTML('beforeend', row);
    });
}

// Add a new record
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.studentName.value.trim();
    const id = form.studentID.value.trim();
    const email = form.emailID.value.trim();
    const cls = form.class.value.trim();
    const contact = form.contactNo.value.trim();

    // Validate input fields
    if (!name || !id || !email || !cls || !contact) return alert('All fields are required!');
    if (!/^[a-zA-Z\s]+$/.test(name)) return alert('Student Name must only contain characters.');
    if (!/^\d{10}$/.test(contact)) return alert('Contact Number must be a 10-digit number.');
    if (!/^\d+$/.test(id)) return alert('Student ID must be a number.');
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert('Please enter a valid email address.');

    const newStudent = { name, id, email, class: cls, contact };

    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    form.reset();
    alert('Student Registered Successfully!');
});

// Edit record
function editRecord(index) {
    const student = students[index];

    // Prompt the user to edit each field
    const newName = prompt('Edit Name:', student.name) || student.name;
    const newId = prompt('Edit Student ID:', student.id) || student.id;
    const newEmail = prompt('Edit Email ID:', student.email) || student.email;
    const newClass = prompt('Edit Class:', student.class) || student.class;
    const newContact = prompt('Edit Contact Number:', student.contact) || student.contact;

    // Validate updated fields
    if (!/^[a-zA-Z\s]+$/.test(newName)) return alert('Student Name must only contain characters.');
    if (!/^\d{10}$/.test(newContact)) return alert('Contact Number must be a 10-digit number.');
    if (!/^\d+$/.test(newId)) return alert('Student ID must be a number.');
    if (!/^\S+@\S+\.\S+$/.test(newEmail)) return alert('Please enter a valid email address.');

    // Update the student record
    students[index] = { name: newName, id: newId, email: newEmail, class: newClass, contact: newContact };
    localStorage.setItem('students', JSON.stringify(students));

    // Refresh the display
    displayRecords();
}

// Delete record
function deleteRecord(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        displayRecords();
    }
}

// Initialize the display
displayRecords();
