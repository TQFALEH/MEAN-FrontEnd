import { EventEmitter } from "@angular/core";



export class authEmitters {
  static authEmitter = new EventEmitter<boolean>()
}


export class adminEmitters {
  static isAdmin = new EventEmitter<boolean>()
}
