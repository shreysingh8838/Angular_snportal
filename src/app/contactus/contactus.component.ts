import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  template: `
<div class="container-wrapper">
  <div class="container-row">

    <div class="row-wrapper">
        <h2>Contact Us</h2>        

        <div class="row">
          <h4>If Any Feedback or Problem Kindly Mail us on  
            <a> milegisarkarinaukri@gmail.com </a> OR For Instant Support / Contact Kindly Contact Follow <a>Twitter</a></h4>
        </div>

        <div class="row">
          <h4>Benefit of this portal</h4>
          <p>
            Notification Service : After you Install the Sarkari Naukari Portal Web App You Get the All Vacancy, Result, Admit Card and Other Information Through Notification / Message.
          </p>
          <p>
            Easy to Find Latest Sarkari Jobs, Latest Result, Download Admit Card, Answer Key, Syllabus, Exam Pattern, Admission Notification.
          </p>
        </div>
      
        <div class="row">

        <div class="social-media-icons">
    <a href="https://www.facebook.com/your-facebook-page" target="_blank">
      <img src="../assets/fbfooterLogo.jpg" alt="Facebook">
    </a>
    <a href="https://www.twitter.com/your-twitter-page" target="_blank">
      <img src="../assets/twitterFooterLogo.png" alt="Twitter">
    </a>
    <!-- Add more social media icons here as needed -->
  </div>
        </div>

        <div class="row">
          
        </div>

        <div class="row">
          
        </div>

    </div>
  </div>
</div>

  `,
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

}
