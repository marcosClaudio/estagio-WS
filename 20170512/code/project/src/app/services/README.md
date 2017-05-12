# Services
Sao os componentes responsaveis pela logica de negocio, podendo se comunicar com o backend podendo buscar ou enviar dados ao servidor. Alem disso, os services podem ser injetados em outras classes, podendo anular a questao de repeticao de codigo

## Criando *services* com o @angular/cli
```sh
$ ng generate service <nome_do_service>
```
ou
```sh
$ ng g s <nome_do_service>
```

Quando o service esta em uma pasta especifica, devemos usar o nome da pasta e "/", como no exemplo
```sh
$ ng g s services/post
```
Esta sintaxe criara, na raiz do source do projeto a estrutura:
```
services
    post.service.ts
```

## Declarando *services* no modulo
--- code da insercao do service no app do modulo ---
Para poder-mos usar a classe Service, precisamos declarar a mesma no *providers* em **app.module.ts**.
```
//app.module.ts
import { Service } from './service/Service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [Service]
})
```

## Usando *services*
Um exemplo bem comum de uso de service e a utilizacao do metodo GET:
```
@Injectable()
export class Service {

constructor(
    private http: Http
  ) { }

list() {
    return this.http.get("url" ou `url/${ parametro }`).map(res => 
      res.json()
    )
     }
```