function nextStep() {
  // Get the number of applicants
  const numApplicants = document.getElementById("numApplicants").value;

  // Convert it to a number
  const count = parseInt(numApplicants);

  if (!isNaN(count) && count > 0) {
    // Generate the forms for the next step
    generateForms(count);
  }
}

function generateForms(count) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = ""; // Clear previous forms

  for (let i = 1; i <= count; i++) {
    // Create a new form element for each applicant
    const form = document.createElement("div");
    form.classList.add("applicant-form");

    form.innerHTML = `
        <h2 class="applicant__title">Applicant ${i}</h2>
        <div class="side__form__step3">
          <div>
            <label for="firstName${i}" class="form-label custom__form__label">First Name</label>
            <input type="text" name="firstName${i}" class="custom__text__input form-control" placeholder="Enter first name" />
          </div>
          <div>
            <label for="lastName${i}" class="form-label custom__form__label">Last Name</label>
            <input type="text" name="lastName${i}" class="custom__text__input form-control" placeholder="Enter last name" />
          </div>
          <div>
            <label for="ageCategory${i}" class="form-label custom__form__label">Age Category</label>
            <select id="ageCategory${i}" class="form-select custom__form__select">
              <option selected disabled class="select__placeholder" value="">Select age category</option>
              <option value="10-18">10-18</option>
            </select>
          </div>
          <div>
            <label for="emailAddress${i}" class="form-label custom__form__label">Email Address</label>
            <input type="email" name="emailAddress${i}" class="custom__text__input form-control" placeholder="Enter email address" />
          </div>
          <div>
            <label for="phoneNumber${i}" class="form-label custom__form__label">Phone Number</label>
            <input type="text" name="phoneNumber${i}" class="custom__text__input form-control" placeholder="Enter phone number" />
          </div>
          <div class="appointment__date__cont">
            <label for="birthDate${i}" class="form-label custom__form__label">Date of Birth</label>
            <input type="date" name="birthDate${i}" id="birthDate${i}" class="custom__date__input form-control" />
          </div>
          <div>
            <label for="gender${i}" class="form-label custom__form__label">Gender</label>
            <select id="gender${i}" class="form-select custom__form__select">
              <option selected disabled class="select__placeholder" value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <hr class="multiple__aplicants__hr" />
      `;

    // Append the form to the container
    formContainer.appendChild(form);
  }

  // Show the submit button
  document.getElementById("submitForm").style.display = "block";
}

function submitForms() {
  alert("Forms submitted successfully!");
}
