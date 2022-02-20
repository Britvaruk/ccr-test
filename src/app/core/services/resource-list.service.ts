import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Resource } from "../interfaces/resource.interface";

@Injectable({
  providedIn: 'root'
})
export class ResourceListService {
  resList: Observable<Resource[]> | undefined; 
}