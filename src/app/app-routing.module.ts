import { IndexCompComponent } from './home/index-comp/index-comp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'servicos',
    loadChildren: () => import ('./portfolio/portfolio.module').then ((m) => m.PortfolioModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import ('./contatos/contatos.module').then((m) => m.ContatosModule)
  },
   {path: '',
   loadChildren: () => import ('./home/home.module').then((m) => m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
