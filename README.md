# myStockMarketHistory

<p align="center">
  <img height="100" src="https://i.imgur.com/vOjrlin.png" alt="BorisBelloc">                                                  
</p>


### Technos :
- [ElectronJs v12](https://www.electronjs.org/)
- [Angular v11](https://angular.io/)
- [Electron Builder v22](https://www.electron.build/)
    - Package [angular-electron](https://github.com/maximegris/angular-electron) : Template with Typescript + SASS + Hot Reload.

-----------------------

    - Packages installed (node_modules) : 
        - [bootstrap](https://www.npmjs.com/package/bootstrap) : `npm i bootstrap`
        - [fontawesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome) : `npm install --save @fortawesome/fontawesome-free`
        - [@ng-bootstrap/ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap) : `npm i @ng-bootstrap/ng-bootstrap`
          - ngb-Tooltip
    - Required by ng-bootstrap : `ng add @angular/localize`

- [Angular Material](https://material.angular.io/)


- Bouton back-to-top (auto scroll) :
  - [ngx-page-scroll-core](https://www.npmjs.com/package/ngx-page-scroll) : `npm install ngx-page-scroll-core --save`
  - [ngx-page-scroll](https://www.npmjs.com/package/ngx-page-scroll) : `npm i ngx-page-scroll` 
        
- Breadcrumb :
  - [xng-breadcrumb](https://www.npmjs.com/package/xng-breadcrumb) : `npm install --save xng-breadcrumb`
  
- Bootstrap 4        

<hr>

### Run the project :

##### Development (clone both repositories)

###### Front :
- Instal [NodeJS](https://nodejs.org/en/download/)
- Instal [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (Electron-builder [strongly](https://github.com/electron-userland/electron-builder/issues/1147#issuecomment-276284477) recommend Yarn instead of npm) : `npm install --global yarn`
- Install [electron-builder](https://github.com/electron-userland/electron-builder) : `yarn add electron-builder --dev`
- Used (electron-webpack-quick-start*)[https://github.com/electron-userland/electron-webpack-quick-start]
- Inside the *Front* folder : `yarn` to install the required node modules



###### Back :
 - Actually there is no backend.
 
 <hr>
 
###### Others infos : 

## Included Commands angular-electron

|Command|Description|
|--|--|
|`npm run ng:serve`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:build`| Builds your application and creates an app consumable based on your operating system |
