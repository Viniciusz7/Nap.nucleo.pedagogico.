class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.sucesss;
  }
displayError() {
   this.form.innerHTML = this.settings.error;
}

getFormObject () {
  const getFormObject = {};
  const fields = this.form.querySelector ("[name]");
  fields.forEache((field) => {
   getFormObject [field.getAttribute("name")] = field.value;
  });
  return formObject;
}
 
async sendForm(event) {
  try {
    this.onSubmission(event);
  await fetch(this.url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(this.getFormObject()),
  });
  this.displaySuccess();
  } catch (error) {
    this.displayError();
    throw new Error(error);
  }
}


init() {
  if (this.form) this.formButton.addEventListener("click", this.sendForm);
  return this;
}
}

const FormSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  sucesss: "<h1 class='sucess'>Mensagem enviada! </h1>",
  error: "<h1 class='error'>Não Foi possível enviar sua mensagem</h1>"
}); 
FormSubmit.init();