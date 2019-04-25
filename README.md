# FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## My notes.
### Binding
```
<button class="btn btn-primary" [disabled]="!isAddServerBtnDisabled" (click)="onCreateServer()">Add Server</button>
<p>{{ severCreationStatus }}</p>
```
* Property binding:
** `[disabled]="!isAddServerBtnDisabled"` -- use `[]` brackets
** `{{ severCreationStatus }}` -- String interpolation
* Event binding:
** `(click)="onCreateServer()">` -- use `()` brackets
* Two way binding 
** `[()]` -- property and event

* Directives
# Structural Directive --- add aelement to DOM.
ngIf
```
<p *ngIf="serverCreated; else noServer">Server was created  with name : {{ serverName }}</p>
<ng-template #noServer>
  <p>No server was created!</p>
</ng-template>
```
ngFor
```
<p *ngFor="let current of currents; let i = index">
1. currents is a variable (list) in the component
2. current will be looped object.
3. index is angular variable holding index of the loop.
4. i can be furhter used in ngStyle or ngClass
```
# Attribute Directive --- change the element they are placed on.
Loading the style as per condition in the function.

```
<p [ngStyle]="{ backgroundColor: getColor() }">
```
Loading the css class as per condition in the function.
```
<p [ngClass]="{ online: getServerStatus() === 'online' }">
```
