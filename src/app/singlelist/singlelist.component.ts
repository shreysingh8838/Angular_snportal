import { Component, OnInit, OnDestroy} from '@angular/core';
import { CallSingleListService } from '../call-single-list.service';
import { RouterLink, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CallProductDataService } from '../call-product-data.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-singlelist',
  template: `
<!-- Loading Page -->
    <div *ngIf="isLoading; else dataContent" class="loading-container">
      <div class="container-wrapper">
        <h1 class="loading-text">Loading</h1>
      </div>
      <div class="container-wrapper">
        <img          
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Government-of-India-Logo-Vector-PNG.png?fit=660%2C1113&ssl=1"
          class="loadingemblemimg"
        />
      </div>
      <!-- Add your loading UI here -->
    </div>

<!-- When the data is loaded then show this template -->
    <ng-template #dataContent>
      <div class="container-wrapper">
<!-- Emblem Image -->
        <img
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Government-of-India-Logo-Vector-PNG.png?fit=660%2C1113&ssl=1"
          class="emblemimg"
        />
        
<!-- List of Links -->
        <div class="container-row">
          <div class="job-title"> <h2>{{ title }} </h2> </div>
          <div class="link-list" id="jobs">
            <a *ngFor="let set of displayedSet" target="_blank" (click)="HitClick(set.link)" routerLink="/product" [queryParams]="{ link: set.link }">{{ set.title }}</a>
          </div>
<!-- Pagination -->
          <div class="pagination">
            <button (click)="goToPreviousPage()" [disabled]="currentPage === 1"> < </button>
            <button (click)="goToNextPage()" [disabled]="currentPage === getTotalPages()"> > </button>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: ['./singlelist.component.css']
})
export class SinglelistComponent implements OnInit {
  isLoading: boolean = true; // Flag to track loading state
  title: string = '';
  flag: string = '';
  requiredSet: any[] = [];
  link: string = '';

  currentPage: number = 1;
  pageSize: number = 15; // Number of items to display per page
  displayedSet: any[] = []; // Array to hold the items to display on the current page
  dataSize: number = 0;
  totalPages: number = 1;
  setName: string = '';
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private callSingleListService: CallSingleListService,
    private callProductData: CallProductDataService,
    private router : Router,
    private titleService: Title
  ) {}

  HitClick(link: string) {
    this.link = link;
    this.callProductData.sendLink(this.link);
    // console.log("method hit");
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        // Call your component initialization logic here
        this.isLoading = true;
        this.initializeComponent();
      });
  
    // Call the component initialization logic immediately
    this.initializeComponent();

  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  initializeComponent() {
    // Retrieve the query parameters
    const queryParams = this.route.snapshot.queryParams;
  
    // Extract the 'set' parameter value
    this.setName = queryParams['set'];
  
    // Perform the necessary actions based on the 'set' value
    switch (this.setName) {
      case 'resultSet':
        this.titleService.setTitle('Results | Milegi Sarkari Naukri');
        this.callSingleListService.getDataList('resultSet').subscribe((Data: any[]) => {
          this.title = 'Result';
          this.dataSize = Data.length;
          this.requiredSet = Data;
          this.loadPageData(); // Show the first lot of data when the page loads
          this.isLoading = false; // Set loading flag to false once data is fetched
        });
        break;
      case 'latestjob':
        this.titleService.setTitle('Latest Jobs | Milegi Sarkari Naukri');
        this.callSingleListService.getDataList('latestjob').subscribe((Data: any[]) => {
          this.title = 'Latest Jobs';
          this.dataSize = Data.length;
          console.log("this is length" + Data.length);
          this.requiredSet = Data;
          this.loadPageData(); // Show the first lot of data when the page loads
          this.isLoading = false; // Set loading flag to false once data is fetched
        });
        break;
      case 'admitcard':
        this.titleService.setTitle('Admit Cards | Milegi Sarkari Naukri');

        this.callSingleListService.getDataList('admitcard').subscribe((Data: any[]) => {
          this.title = 'Admit Cards';
          this.dataSize = Data.length;
          this.requiredSet = Data;
          this.loadPageData(); // Show the first lot of data when the page loads
          this.isLoading = false; // Set loading flag to false once data is fetched
        });
        break;
      case 'answerkey':
        this.titleService.setTitle('Answer Keys | Milegi Sarkari Naukri');

        this.callSingleListService.getDataList('answerkey').subscribe((Data: any[]) => {
          this.title = 'Answer Keys';
          this.dataSize = Data.length;
          this.requiredSet = Data;
          this.loadPageData(); // Show the first lot of data when the page loads
          this.isLoading = false; // Set loading flag to false once data is fetched
        });
        break;
      case 'admission':
        this.titleService.setTitle('Admissions | Milegi Sarkari Naukri');

        this.callSingleListService.getDataList('admission').subscribe((Data: any[]) => {
          this.title = 'Admission Forms';
          this.dataSize = Data.length;
          this.requiredSet = Data;
          this.loadPageData(); // Show the first lot of data when the page loads
          this.isLoading = false; // Set loading flag to false once data is fetched
        });
        break;
      case 'syllabus':
        this.titleService.setTitle('Syllabus | Milegi Sarkari Naukri');

         this.callSingleListService.getDataList('syllabus').subscribe((Data: any[]) => {
          this.title = 'Syllabus';
          this.dataSize = Data.length;
          this.requiredSet = Data;
          this.loadPageData(); // Show the first lot of data when the page loads
          this.isLoading = false; // Set loading flag to false once data is fetched
        });
        break;
      default:
        // Handle default logic or display an error message
        break;
    }
  }
  
  getTotalPages(): number {
    return Math.ceil(this.dataSize / this.pageSize);
  }

  loadPageData() {
    // Calculate the starting and ending indexes for the current page
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.dataSize);

    // Get the items to display on the current page
    this.displayedSet = this.requiredSet.slice(startIndex, endIndex);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPageData();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.loadPageData();
    }
  }
}
