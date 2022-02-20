import { Component, Input, OnInit } from '@angular/core';
import { Resource } from 'src/app/core/interfaces/resource.interface';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  @Input() res!: Resource;

  constructor() { }

  ngOnInit(): void {
  }

}
