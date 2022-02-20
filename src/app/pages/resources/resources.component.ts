import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
    this.resListService.resList =
    this.resListApi.fetchResourceList().pipe(
      map(resp => resp.data)
    )
  }
}
