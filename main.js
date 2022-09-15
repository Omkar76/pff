let users = [];
/**
 *  @param {SubmitEvent} event 
 */
function submitHandler(event) {
    event.preventDefault();   
    
    if(!dateValidator()){
        return;
    }

    const formData = new FormData(event.target);
    let user = {
        name: formData.get("name"),
        email: formData.get("email"),
        password : formData.get("password"),
        dob: formData.get("dob"),
        acceptTerms: !!formData.get("acceptTerms")
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    document.querySelector('table').appendChild(makeRow(user));
}

function makeRow(user){
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    <td>${user.dob}</td>
    <td>${user.acceptTerms}</td>
    `;

    return tr;
}

/**
 * 
 * @param {Date} dob 
 * @returns Number
 */
function getAgeInYears(dob) {
    const today = new Date();
  
    const yearsDifference = today.getFullYear() - dob.getFullYear();
  
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      return yearsDifference - 1;
    }
  
    return yearsDifference;
};

function dateValidator(){
    const dobInput = document.querySelector('#dob');
    const dob = new Date(dobInput.value);

    const years = getAgeInYears(dob);

    if(!(years >= 18 && years <= 55)){
        dobInput.setCustomValidity("Age must be 18 to 55");
        dobInput.reportValidity();
        return false;
    }else{
        dobInput.setCustomValidity("");
        dobInput.reportValidity();
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', submitHandler);
    document.querySelector("#dob").addEventListener('input', (e)=>{
        e.target.setCustomValidity("");
    });
    users = JSON.parse(localStorage.getItem('users')) || [];

    for(let user of users){
        document.querySelector('table').appendChild(makeRow(user));
    }
});