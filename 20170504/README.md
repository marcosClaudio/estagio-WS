# Documentacao Tecnica
## HTTP
1. O elemento serve para a realizacao de metodos get, set, put, post e delete.  
2. Um exemplo:  
```
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class SuaClasse {
  item: any;
  http: Http;
  constructor(http: Http) {
    this.http = http
    this.getUsers().subscribe(
        (data) => {
          this.item = data;
        };
  }
  getUsers () {
    return this.http.get("url_da_requisicao")
    .map(res =>  res.json())

  }
```
3. Propriedades:  
* **.subscribe**: Um 'subscrible' ouve os eventos executados em um fluxo publicado por uma fonte, e  especifica as acoes a serem tomadas quando a solicitacao Web falha ou sucede.  
* **.get(url)** : Esta diretiva basicamente executa uma funcao 'GET' no endereco de seu parametro.  
4. Dificuldades apenas de entender as outras propriedades nao listadas.
        
### Controle de rotas 
1. Criou-se um controle de rotas para definir a parte de Posts e Users que serao chamados pelos botoes do   md-menu.
2. Exemplo detalhado:  
```
const APP_ROUTES: Routes = [
    { path: '', component: ListIndexComponent},
    { path: 'users', component: UsersIndexComponent},
    { path: 'posts', component: ListIndexComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
```  
3. Propriedades:
* **APP_ROUTES**: E a variavel constante que ira guardar as informacoes das rotas, definindo seus caminhos e  componentes principais.  
* **ModuleWithProviders**: E o tipo que contem a definicao e a configuracao das rotas.  
* **RouterModule**: Declara que o arquivo em questao representa um modulo de rotas.  
* **.forRoot**: Corresponde as rotas Raiz da aplicacao.
4. Nenhum.	 
---
# Impedimentos:
    * Nenhum ate o momento.