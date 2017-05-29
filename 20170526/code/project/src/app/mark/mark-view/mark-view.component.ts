import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MarkServiceService } from '../../service/mark/mark-service.service';

@Component({
  selector: 'app-mark-view',
  templateUrl: './mark-view.component.html'
})
export class MarkViewComponent implements OnInit {
  mark = [];

  constructor(
    private route: ActivatedRoute,
    private markService: MarkServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.markService.getById(id).subscribe( mark => {
      console.log(mark.title),
      this.mark = mark;
    },
     error => {
      alert('error: ');
      });
    });
  }

}
