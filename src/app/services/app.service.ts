import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class AppService {
    public user: any = null;

    constructor(private router: Router, private toastr: ToastrService, private authService: AuthService) {}

    async loginByAuth({email, password}) {
        try {
            const response = await this.authService.login(email, password);

            this.setLocalStorage(response);

            await this.getProfile();

            this.router.navigate(['/restricted']);
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        try {
            this.user = (await this.authService.getProfile())[0];
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    setLocalStorage(response: any): void {
        localStorage.setItem(environment.authTokenKey, response.token);
        localStorage.setItem(environment.uuid, response.id);
        localStorage.setItem(environment.companies, JSON.stringify(response.clientes));
    }

    logout() {
        localStorage.removeItem(environment.authTokenKey);
        localStorage.removeItem(environment.tema);
        localStorage.removeItem(environment.uuid);
        localStorage.removeItem(environment.customerId);
        localStorage.removeItem('companies');
        this.user = null;
        this.router.navigate(['/login']);
    }
}
