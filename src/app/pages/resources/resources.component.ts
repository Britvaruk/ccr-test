import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ResourceListService } from 'src/app/core/services/resource-list.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(public resListService: ResourceListService,
    private resListApi: ApiService) { }

  ngOnInit(): void {
    this.fetchResources();
  }

  fetchResources() {
    this.resListApi.fetchResourceList()
    .subscribe(response => {
      this.resListService.resList = response.data;
    })
  }

}
