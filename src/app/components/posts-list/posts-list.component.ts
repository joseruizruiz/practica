import { Component, Input,OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { User } from '../../models/user';

@Component({
    selector: "posts-list",
    templateUrl: "posts-list.component.html"
})
export class PostsListComponent {

    @Input() posts: Post[];

    

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                                 |
     |------------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección del autor de un post y navega a la  |
     | dirección correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app. |
     | La ruta a navegar es '/posts/users', pasando como parámetro el identificador del autor.                          |
     |------------------------------------------------------------------------------------------------------------------*/

    /*-----------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~                                                                                              |
     |-----------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección de un post y navega a la dirección |
     | correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app.  La ruta |
     | a navegar es '/posts', pasando como parámetro el identificador del post.                                        |
     |-----------------------------------------------------------------------------------------------------------------*/
constructor(
    private _contactosService: PostService,
    private _router: Router
  ) {}
mostrarPost(post:Post): void{
    
    this._contactosService.getPostDetails(post.id);
    this._router.navigate([`/posts/${post.id}`]);
    
}

mostrarPostUser(usuario: User){
    this._contactosService.getUserPosts(usuario.id);
    this._router.navigate([`/posts/users/${usuario.id}`]);

}

}

