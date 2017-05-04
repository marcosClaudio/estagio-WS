# O que eu fiz:
    * Coloquei mais exemplos do material.io em pratica.

## Sao eles:
### Tabs
		* Criou-se Tabs com o elemento tab-group. 
		* Esse elemento permite a incorporacao de conteudo separado em uma unica parte da pagina, podendo ser  tanto uma pagina e/ou outros elementos em cada parte separada das tabs.
		* Neste caso, estamos instanciando um componente existente em nosso projeto, para servir seu conteudo  na tab.
        * Nessa instancia, foi adicionado o elemento md-cards, que funciona como uma divisao de uma parte da pagina porem  com margem relevante.
		* Nas duas tabs do elemento, foram adicionadas seus elementos padroes que funcionam em conjunto com  este elemento, os "md-card-header", que possui um "md-card-title" e um "md-card-subtitle", que  como  ja diz em seus nomes, o titulo e subtitulo, e "md-card-container", que seria o conteudo do card em si.

### MD-list 
	  * Foi implementando tambem, um elemento chamado md-list, que nada mais e que uma lista gerenciadora de  de arquivos.
	  * Iniciamos a mesma com um md-list.
	  * Com a propriedade md-subheader, padrao do angular 2, foi possivel passar um titulo para a list.
	  * Para cada item, foi criado um md-list-item, que como o nome ja diz, ali passamos o nome e/ou seu(s)  atributos. 
	  * Neste elemento, temos a propriedade ( *ngFor="let items of item" ), que basicamente faz um "for" na  variavel dentro do component.ts e lista um por um, os arquivos (no caso os objetos da variavel), na  lista.

### Progress bar
	  * Foi criado tambem, um progress bar, que basicamente fuciona como um temporizador.
	  * Com a tag md-progress-bar, podemos iniciar esse elemento.
	  * Dentro da propriedade value, setamos seu valor( de 1 a 100) para definirmos ate onde essa barra ira  se expandir.
	  * Em sua propriedade mode, definimos seu modo, ou como determinate, que tera seu valor alterado de   acordo com um determinado evento gerado por algum elemento, ou indeterminate, que seu valor fica nulo e  a barra de progresso fica em looping infinito.

### Md-slider
	 * Foi criado tambem, um slider bar, que nada mais nada menos e, que uma barra de prgresso, que serve  tanto como atribuidor de valores, ou como um controlador de propriedades.
	 
---
# Impedimentos:
    * Nenhum ate o momento.