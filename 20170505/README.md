# Documentacao Tecnica
## Flex-layout
1. O elemento serve para o posicionamento de conteudos na pagina com a div, podendo ser instalada por  npm install --save @angular/flex-layout.  
2. Um exemplo:  
```
//arquivo .ts
import { FlexLayoutModule } from '@angular/flex-layout';
//html
<div fxLayout="row" fxLayoutAlign="space-around center" >
<div fxLayout="column" fxLayoutAlign="space-around center" >
<div fxLayout="column" fxLayoutAlign="start center" >
```
3. Propriedades:  
* **fxLayout**: Determina a direcao do layout, ou coluna(column), ou linha (row).  
* **fxLayoutAlign** : Determina o alinhamento do conteudo, podendo ser no centro do elemento (center), no  final ou canto (end), separadas mas alinhadas com margem (space-around), ou separadas e alinhadas  sem margem (space-between).  
4. Nenhuma ate o momento.
---
# Impedimentos:
    * Nenhum ate o momento.