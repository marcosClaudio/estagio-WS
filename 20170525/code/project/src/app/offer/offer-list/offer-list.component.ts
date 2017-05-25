import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  offerList = [{
                nome: '12/12/12 - 22/12/12',
                dataInicio: '12/05/05',
                dataFim: '22/12/12',
                products: [{
                    name: 'Chocolate',
                    id: 1
                  },
                  {
                    name: 'Salgadinho',
                    id: 2
                  },
                  {
                    name: 'Produto de limpeza',
                    id: 3
                  },
                  {
                    name: 'Fruta',
                    id: 4
                  },
                ],
                url: 'http://www.geeral.com.br/img_via2/panfleto_1.jpg'
              },

              {
                nome: '31/02/07 - 05/03/17',
                dataInicio: '31/02/07',
                dataFim: '05/03/17',
                products: [{
                    name: 'Chocolate',
                    id: 1
                  },
                  {
                    name: 'Salgadinho',
                    id: 2
                  },
                  {
                    name: 'Produto de limpeza',
                    id: 3
                  },
                  {
                    name: 'Fruta',
                    id: 4
                  },
                ],
                url: 'http://www.geeral.com.br/img_via2/panfleto_1.jpg'
              },

              {
                nome: '12/02/16 - 14/11/17',
                dataInicio: '12/02/16',
                dataFim: '14/11/17',
                products: [{
                    name: 'Chocolate',
                    id: 1
                  },
                  {
                    name: 'Salgadinho',
                    id: 2
                  },
                  {
                    name: 'Produto de limpeza',
                    id: 3
                  },
                  {
                    name: 'Fruta',
                    id: 4
                  },
                ],
                url: 'http://www.geeral.com.br/img_via2/panfleto_1.jpg'
              },

              {
                nome: '25/09/15 - 17/03/17',
                dataInicio: '25/09/15',
                dataFim: '17/03/17',
                products: [{
                    name: 'Chocolate',
                    id: 1
                  },
                  {
                    name: 'Salgadinho',
                    id: 2
                  },
                  {
                    name: 'Produto de limpeza',
                    id: 3
                  },
                  {
                    name: 'Fruta',
                    id: 4
                  },
                ],
                url: 'http://www.geeral.com.br/img_via2/panfleto_1.jpg'
              },

              {
                nome: '28/01/13 - 18/07/17',
                dataInicio: '28/01/13',
                dataFim: '18/07/17',
                products: [{
                    name: 'Chocolate',
                    id: 1
                  },
                  {
                    name: 'Salgadinho',
                    id: 2
                  },
                  {
                    name: 'Produto de limpeza',
                    id: 3
                  },
                  {
                    name: 'Fruta',
                    id: 4
                  },
                ],
                url: 'http://www.geeral.com.br/img_via2/panfleto_1.jpg'
              }
            ]

  constructor() { }

  ngOnInit() {
  }

}
