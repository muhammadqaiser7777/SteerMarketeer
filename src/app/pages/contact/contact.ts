import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  formSubmitted = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      this.formSubmitted = true;
      form.resetForm();
    } else {
      this.formSubmitted = false;
    }
  }
}
