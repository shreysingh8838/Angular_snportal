import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  template: `
<div class="container-wrapper">
  <div class="container-row">

    <div class="row-wrapper">
        <h2>Contact Us</h2>        

        <div class="row">
          <h4>If you have any feedback or encounter any issues, kindly email us at  
            <a> milegisarkarinaukrii@gmail.com </a> For instant support or contact, you can follow us on <a>Twitter</a>.</h4>
        </div>

        <div class="row">
          <h4>Benefit of this portal</h4>
          <p>
            1. Notification Service: After installing the Sarkari Naukari Portal Web App, you will receive notifications/messages about all vacancies, results, admit cards, and other relevant information.          </p>
          <p>
            2. Easy Access to Latest Sarkari Jobs, Results, Admit Cards, Answer Keys, Syllabus, Exam Patterns, and Admission Notifications.          </p>
        </div>
      
        <div class="row">
          <div class="social-media-icons">
            <a href="https://www.facebook.com/your-facebook-page" target="_blank">
              <img style="width: 30px; height: 25px; padding-bottom: 10px" src="../assets/fbfooterLogo.jpg" alt="Facebook">
            </a>
            <a href="https://www.twitter.com/your-twitter-page" target="_blank">
              <img style="width: 30px; height: 25px; padding-bottom: 10px" src="../assets/twitterFooterLogo.png" alt="Twitter">
            </a>
            <a href="https://www.instagram.com/milegisarkarinaukrii/" target="_blank">
              <img style="width: 25px; height: 22px; padding-bottom: 10px" src="../assets/Instagram_logo_2016.png" alt="Twitter">
            </a>
            <!-- Add more social media icons here as needed -->
          </div>
        </div>
    </div>
  </div>
</div>

  `,
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Contact Us | Milegi Sarkari Naukri');
  }
}
