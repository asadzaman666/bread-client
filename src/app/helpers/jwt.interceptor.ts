import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private loaderService: LoaderService
    ) { }

    private requests: HttpRequest<any>[] = [];

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        let currentUser = this.authenticationService.currentUserValue;

        const token = localStorage.getItem('currentUser');

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        // return next.handle(request);

        this.requests.push(request);
        console.log("No of requests--->" + this.requests.length);
        this.loaderService.isLoading.next(true);
        return Observable.create(observer => {
            const subscription = next.handle(request)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            this.removeRequest(request);
                            observer.next(event);
                        }
                    },
                    err => {
                        alert('error returned');
                        this.removeRequest(request);
                        observer.error(err);
                    },
                    () => {
                        this.removeRequest(request);
                        observer.complete();
                    });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(request);
                subscription.unsubscribe();
            };
        });
    }
}
