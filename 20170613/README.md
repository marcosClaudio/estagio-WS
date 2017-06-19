# Documentacao Tecnica
## Metodo PUT HTML.
1. O metodo PUT, usado para fazer o "edit" dos itens dos modulos.
2. A seguir um exemplo de seu uso:
```
edit(data) {
let headers = new Headers({ 'Content-Type': 'application/json' });
let url: string = 'http://localhost:3000/offer';
return this.http.put(url,data,headers).map(res =>
res.json()
)
}
```
---
# Elementos em pendencia:
* Separar valores arrays de um objeto Json, para mostrar as imagens do produto em sequencia.