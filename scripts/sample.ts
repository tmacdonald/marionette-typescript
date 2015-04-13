/// <reference path="../typings/tsd.d.ts" />

class Animal {
  constructor(public name: string) {

  }

  move(meters: number) {
    alert(this.name + " moved " + meters + "m.");
  }
}