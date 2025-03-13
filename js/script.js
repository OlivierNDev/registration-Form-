// Function to validate the form inputs
function validate(){
    //Get references to the form elements

    const email = document.getElementById('email').value.trim();
    const login = document.getElementById('login').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const pass2 = document.getElementById('pass2').value.trim();
    const newsletter =document.getElementById('newsletter').checked;
    const terms =document.getElementById(terms).checked;
    
    //to Clear previous errors messages and styles 

    clearErrors();

    //Validate email format 

    if(!validateEmail(email)){
        showError('email', 'Please enter a valid email addrss (e.g., xyz@xyz.xyz');
        return false; //will prevent form submission 
    }

}
