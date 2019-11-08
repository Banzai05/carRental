import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
}

var jsonCont = {
  "car1": {
    "mark": "Nissan",
    "model": "240sx",
    "status": "available"
  },
  "car2": {
    "mark": "Toyota",
    "model": "AE86",
    "status": "unavailable"
  },
  "car3": {
    "mark": "Mitsubishi",
    "model": "EVO III",
    "status": "available"
  },
  "car4": {
    "mark": "Mazda",
    "model": "Rx7",
    "status": "unavailable"
  }
}

