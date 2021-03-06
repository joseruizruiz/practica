import * as moment from "moment";

import { Pipe, PipeTransform } from '@angular/core';

import "moment/locale/es";
import { Post } from '../models/post';


/*---------------------------------------------------------------------------------------------------------|
 | ~~~ Blue Path ~~~                                                                                       |
 |---------------------------------------------------------------------------------------------------------|
 | Crea el pipe FromNowPipe. Su cometido es, partiendo de una fecha dada, retornar una cadena de texto     |
 | que exprese el tiempo que ha pasado desde dicha fecha hasta ahora. Por ejemplo: hace 2 horas. Para esta |
 | tarea nos apoyamos en la librería Moment.js; ya tienes hecho el import correspondiente, solo tienes que |
 | usarla donde proceda. Haciendo 'moment(fecha).fromNow()' obtenemos justo lo que necesitamos.            |
 |---------------------------------------------------------------------------------------------------------*/

@Pipe ({ name:'fromnow'})

export class FromNowPipe implements PipeTransform {

    fecha : string;

    transform(fecha){
    return moment(fecha).fromNow();
    }
}