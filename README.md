# student-registration
# 1. Overview
The Student Registration System is a web-based application designed to facilitate the management of student records. It allows users to:
Add new students with their details.
Edit existing records.
Delete unwanted records.
View the list of registered students in a dynamic and organized format.
The system ensures data persistence using localStorage, which means records remain saved even after refreshing the page. It includes input validations to ensure data accuracy.
# 2. Features
Form to Add Records: Users can input the following student details:
Name (only alphabetic characters).
Student ID (numbers only).
Email (valid email format).
Class.
Contact Number (10 digits only).
Record Management:
Add: Create new student records.
Edit: Modify details of existing records.
Delete: Remove records permanently.
Data Persistence: Uses localStorage to retain data across sessions.
Responsive Design: Optimized for different screen sizes.
Input Validations:
Ensures only valid data is submitted.
Prevents empty rows or invalid entries.
# 3. Usage Guide
Adding a Record
Open index.html.
Fill out the form with valid student details.
Click the Submit button. A confirmation message will appear.
Editing a Record
Navigate to the Display Records page.
Click the Edit button for the desired record.
Enter new values for the fields. Ensure inputs are valid.
Click OK in the prompt. Changes will be updated in the table.
Deleting a Record
Navigate to the Display Records page.
Click the Delete button for the record you want to remove.
Confirm deletion in the pop-up prompt. The record will be removed permanently.
Viewing Records
Navigate to the Display Records page via the navigation bar.
All registered students will be listed in a table.

