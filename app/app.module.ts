import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule, UrlSerializer } from "@angular/router";
/* （https://www.angular.cn/api/core/NgModule） */
/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES, TranslateResolver } from "./app.routes";
// App is our top level component
import { AppComponent } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState, InternalStateType } from "./app.service";
import { LabelService } from "./label/label.svc";
import { LoggedInGuard } from "./shared/services/login_guard.service";
import { LoginService } from "./login/service/login.svc";
import { UserProfileService } from "./shared/services/user_profile.svc";
import { SharedModule } from "./shared/common.module";
import { UserModule } from "./user/user.module";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { UserService } from "./user/user.svc";
import { RegisterService } from "./user/register/service/register.svc";
import { ResetPasswordService } from "./user/reset_password/service/reset_password.svc";
import { HttpHandler } from "./shared/services/httpHandler.svc";
import { LocalStorage } from "./shared/services/local.storage";
import { SystemSvc } from "./system/system.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { KitModule } from "../../UIKit/kit_modules/kit.module";
import { ModalService } from "../../UIKit/kit_modules/modal/modal.service";
import { NotificationService } from "../../UIKit/kit_modules/notification/notification.service";
import { IndexModule } from "./index/index.module";
import { NavCallBackService } from "./index/service/navcallback.svc";
import { NoPrivilegeComponent } from "./shared/components/no_privilege/no_privilege.component";
import { NexusUrlSerializer } from "./app.urlSerializer";
import { systemHttpHandler } from "./system/systemhttp.svc";
// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

export function createTranslateLoader(http: HttpClient) {
    let hash = new Date().getTime();
    let json = ".json?" + hash;
    return new TranslateHttpLoader(http, './i18n/', json);
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],//应用的主视图
    declarations: [ // 声明
        AppComponent,
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        KitModule,
        SharedModule,
        UserModule,
        IndexModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot(ROUTES, { useHash: true }),
    ],
    
    providers: [ // expose our Services and Providers into Angular's dependency injection
        LoginService,
        LoggedInGuard,
        LocalStorage,
        LabelService,
        UserProfileService,
        ModalService,
        NotificationService,
        TranslateService,
        UserService,
        APP_PROVIDERS,
        TranslateResolver,
        //FontService,
        RegisterService,
        ResetPasswordService,
        HttpHandler,
        systemHttpHandler,
        SystemSvc,
        NavCallBackService,
        // environment.ENV_PROVIDERS,
        { provide: UrlSerializer, useClass: NexusUrlSerializer }
    ],
    entryComponents: [//启用“树震动”，即只编译项目中实际使用的组件，而不是编译所有在ngModule中声明但从未使用的组件
        NoPrivilegeComponent
    ]
})

export class AppModule {}
