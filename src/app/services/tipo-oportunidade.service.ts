import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TipoOportunidade } from '../models/tipo-oportunidade';

@Injectable({
  providedIn: 'root'
})
export class TipoOportunidadeService {

  url = 'http://localhost:8080/api/tipo-oportunidade'; // api rest

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os TipoOportunidade
  getTipoOportunidades(): Observable<TipoOportunidade[]> {
    return this.httpClient.get<TipoOportunidade[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // // Obtem um TipoOportunidade pelo id
  // getTipoOportunidadeById(id: string): Observable<TipoOportunidade> {
  //   return this.httpClient.get<TipoOportunidade>(this.url + '/' + id)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // // salva um TipoOportunidade
  // saveTipoOportunidade(tipoOportunidade: TipoOportunidade): Observable<TipoOportunidade> {
  //   return this.httpClient.post<TipoOportunidade>(this.url, JSON.stringify(TipoOportunidade), this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // // utualiza um TipoOportunidade
  // updateTipoOportunidade(tipoOportunidade: TipoOportunidade): Observable<TipoOportunidade> {
  //   return this.httpClient.put<TipoOportunidade>(this.url + '/' + TipoOportunidade.id, JSON.stringify(TipoOportunidade), this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }

  // // deleta um TipoOportunidade
  // deleteTipoOportunidade(tipoOportunidade: TipoOportunidade) {
  //   return this.httpClient.delete<TipoOportunidade>(this.url + '/' + TipoOportunidade.id, this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
