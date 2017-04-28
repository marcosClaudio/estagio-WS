# O que eu fiz:
    * Configurei o ambiente angular2. 
    * Comecei a colocar os exemplos do material.io em pratica.

## Sao eles:
### Toolbar  
		* Criou-se o toolbar. 
		* Mudou-se suas cores com scss, definindo a cor "primary" em arquivo criado em assets.
        *No arquivo assets/custom-theme.scss (criado manualmente por mim) definiu-se a propriedade " @import  '~@angular/material/prebuilt-themes/deeppurple-amber.css';" que ira importar um tema pre-criado  padrao do material 2 design do angular 2.

### Button 
	  * Dentro de toolbar foi criado um button.
	  * Este button tem uma propriedade ( [mdMenuTriggerFor]= menu ) que ao clicar, ativa uma propriedade de  um MD-menu, cuja id e menu.
	  * Button foi personalizado com a propriedade md-mini-fab, que adiciona forma arredondada ao mesmo, e   foi adicionado um icone dentro do mesmo ( <i class="material-icons">reorder</i> ).

### Md-menu
	  * Logo abaixo do fechamento da tag button, adicionou-se a tag md-menu, que dentro da mesma teremos os itens deste menu.
	  * A tag md-menu tambem tem uma propriedade #menu, que instancia o chamado feito pelo button.
	  * Dentro da propriedade md-menu criou-se os buttons com uma propriedade md-menu-item, que sera um item  da lista do menu.

### Md-card
	 * Criacao de cards para a separacao dos componentes.
	 
---
# Impedimentos:
    * Alguns componentes estao estourando erros ao adicionar-mos ao codigo.
    * Alguns componentes nao estao executando seus eventos (click).