import { Injectable } from "@angular/core";
import { Resource } from "../interfaces/resource.interface";

@Injectable({
  providedIn: 'root'
})
export class ResourceListService {
  resList: Resource[] = [];  
}