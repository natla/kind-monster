// Send form data to email through AWS SES and return a success/error message to the user

(() => {
  const form = document.querySelector('form');
  const formResponse = document.querySelector('#js-form-response');

  form.onsubmit = e => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
    formResponse.setAttribute("style", "display: block;");
      if (response.target.status === 200) {
        // The form submission was successful
        form.reset();
        formResponse.innerHTML = 'Thanks for the message. I’ll be in touch shortly.';
      } else {
        // The form submission failed
        formResponse.innerHTML = 'Something went wrong';
        formResponse.classList.add('error');
        console.error(JSON.parse(response.target.response).message);
      }
    };
  };
})();