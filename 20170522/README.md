# Documentacao Tecnica
## Children Routes (Rotas filhas)
1. Children routes ou rotas filhas, sao rotas que derivam de outra rota, por exemplo.  
Uma rota produto mostra a lista de produtos, e nessa rota o usuario e redirecionado para  
a produtoid/4123, e para nao acarretar problemas de rotas com algum outro modulo da  
aplicacao, criamos uma rota filha para englobar ambas as rotas no mesmo sequencial,  
como produto/produtoid/4123.
2. Criando rotas filhas no arquivo de rotas.  
E muito facil criar uma rota filha, apenas especifique como e onde ela entrara pelo modulo  
de rotas, veja a seguir:  
```
export const VariavelRota: Route[] = [
{ path: 'produto', component: ProdutoComponent,
children: [
{ path: '', component: ListaProdudosComponent}, //aqui redirecionamos a pagina para a lista de produtos
{ path: 'produtoid/:id', component: AddProductComponent } //aqui criamos um link com o parametro ID para  
podermos identificar o produto a qual queremos visualizar.
]}
];
```
---
# Impedimentos:
* Nenhum.