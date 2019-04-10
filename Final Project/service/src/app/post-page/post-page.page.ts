import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {
  post: any;
  constructor(private route: Router, private r: ActivatedRoute) {
    this.r.params.subscribe((params) => {
      this.post = JSON.parse(params['currPost']);
    });
  }

  ngOnInit() {
  }
  goBack() {
    this.route.navigate(['/home']);
  }
}
