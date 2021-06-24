import { NgModule } from "@angular/core";

import { AuthService } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    providers: [
        ShoppingListService, 
        RecipeService, 
        AuthService, 
        {
        provide: HTTP_INTERCEPTORS, 
        useClass: AuthInterceptorService,
        multi: true
        }
    ]
})
export class CoreModule{}