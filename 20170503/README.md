# Documentacao Tecnica
## Md-list
1. Criou-se este elemento com a finalidade de listar um conteudo que futuramente sera buscado por um  metedo get, fazendo sua listagem paginada com um limite de 20 itens por pagina.  
2. Um exemplo:  
```
<md-list>
  <h3 md-subheader (indica que e um cabecalho)>Folders</h3>
  <md-list-item *ngFor="let VariavelLocal of VariavelDoEscopo">
    <h4 md-line>{{VariavelLocal.Propriedade}}</h4>
  </md-list-item>
</md-list>
```
3. Propriedades:  
* **MdList** : Inicia a lista de itens.  
* **MdListItem** : Esta diretiva cria uma linha para o item em questao que deseja-se adicionar.  
4. Dificuldades apenas de entender as outras propriedades nao listadas.  
        
### Ngx-pagination 
1. Esse componente nao e nativo do angular 2, podendo ser instalado por ```npm install ngx-pagination   --save```. Trata-se de um componente que facilita a paginacao de list, facilitando muito a numeracao  de paginas e delimitando o numero de conteudos em cada pagina.  
2. Exemplo detalhado:  
```
<ul>
  <li *ngFor="let VariavelLocal of VarScopo | paginate: { itemsPerPage: (Numero maximo de itens na   pagina), currentPage: p (numero atual da pagina) }"> {{VariavelLocal.propriedade}} </li>
</ul>
<pagination-controls (pageChange)="p = $event"></pagination-controls> <!-- Controlador de paginas -->
```
e  
```
<element *ngFor="let item of collection | paginate: { id: 'foo',
  itemsPerPage: pageSize,
  currentPage: p,
  totalItems: total }">...</element>
```  
ou  
```
<pagination-controls  id="some_id"
  (pageChange)="pageChanged($event)"
  maxSize="9"
  directionLinks="true"
  autoHide="true"
  previousLabel="Previous"
  nextLabel="Next"
  screenReaderPaginationLabel="Pagination"
  screenReaderPageLabel="page"
  screenReaderCurrentLabel="You're on page">
  </pagination-controls>
```  
3. Propriedades:
* **itemsPerPage**: E o numero de itens que e mostrado em cada pagina.  
* **currentPage**: O numero atual da pagina.  
* **id [string]**: Voce pode atribuir um ID caso tenha que instanciar mais de uma paginacao por vez.  
* **totalitems [number]**: Corresponde ao numero total de itens na colecao, e util apenas quando usado  em paginacao no servidor onde o numero de paginacao e limitado pela API.
* **pageChange [manipulador de eventos]**: Essa expressao sera acionada sempre que a pagina for   alterada. O argumento $event sera o numero da nova pagina.
* **maxSize [number]**: Define o maximo de paginas que serao mostradas (o padrao e 7).
* **directionLinks [boolean]**: Se setado como ```false```, os atributos "proximo" e "anterior" nao  serao disponibilizados.
* **autoHide [bollean]**: Se atribuido como ```true```, os controles de paginação não serão exibidos quando todos os itens da coleção se encaixam na primeira página.  
* **previousLabel [string]**: O label exibido no atributo "anterior".  
* **nextLabel [string]**: O label exibido no atributo "proximo".  
* **screenReaderPaginationLabel [string]**: A palavra para "Pagination" usado para rotular os controles  para leitores de tela.  * **screenReaderPageLabel [string]**: A palavra para "página" usada em determinadas cadeias geradas  para leitores de tela, e. "Próxima página".  
* **screenReaderCurrentLabel [string]**: A frase que indica a página actual para leitores de ecrã, e.   Msgstr "Você está na página".

4. Nenhum.	 

---

# Impedimentos:
* Nenhum ate o momento.
