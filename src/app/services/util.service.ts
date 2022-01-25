import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({ 
    providedIn: 'root' 
})
export class UtilService {
    
    constructor(private http: HttpClient) { }

    //Marcas
    getAllMarcas(idClienteI7: string, idProdutoI7: string): Promise<any> {
        return this.http.get(`${environment.apiUrl}/perseus/brands`, { params: { idClienteI7: idClienteI7, idProdutoI7:  idProdutoI7 } }).toPromise();
    }
}
