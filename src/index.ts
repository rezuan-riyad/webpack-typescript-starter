import { formData } from "./form";

const form = document.querySelector('form')!;

form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const data = formData(form);
    console.log(data)
})