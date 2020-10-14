import { NgModule } from "@angular/core";
import { defineCustomElements } from "@costar/apts-web-components/loader";

import * as Components from '@costar/apts-web-components/dist/angular/directives/proxies';

defineCustomElements(window);

const DECLARATIONS:Array<any> = Object.values(Components);

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [],
    providers: []
})

export class MortarModule {}