import { database } from "../data/data.store";
import _ from 'lodash';
import { cursorTo } from "readline";
const mutation =  {
    Mutation : {
        cursoNuevo(root :any, args: any, context: any) : any {
            const itemCurso = {
                id: String(database.cursos.length + 1),
                title: args.curso.title,
                description: args.curso.description,
                clases: args.curso.clases,
                time: args.curso.time,
                level: args.curso.level,
                logo: args.curso.logo,
                path : args.curso.path,
                teacher: args.curso.teacher,
                reviews: []
            }
            if (database.cursos.filter(item => item.title === itemCurso.title).length === 0 ) {
                database.cursos.push(itemCurso);
                return itemCurso;
            }
            
            return {
                id: -1,
                title: 'El curso ya existe con este titulo',
                description: '',
                clases:0,
                time: 0.0,
                level: 'TODOS',
                logo: '',
                path : '',
                teacher: '',
                reviews: []
            }
        },
        modificarCurso(root :any, args: any, context: any) : any {
            const elementoExiste = _.findIndex(database.cursos, function(o) {
                return o.id === args.curso.id
            });

            if (elementoExiste > -1) {
                const valoraciones = database.cursos[elementoExiste].reviews;
                args.reviews = valoraciones;
                database.cursos[elementoExiste] = args.curso;
                return args.curso;
            }

            return {
                id: -1,
                title: 'El curso no existe en la base de datos',
                description: '',
                clases:0,
                time: 0.0,
                level: 'TODOS',
                logo: '',
                path : '',
                teacher: '',
                reviews: []
            }
        },
        eliminarCurso(root :any, args: any, context: any) : any {
            const borrarCurso = _.remove(database.cursos, function (curso) {
                return curso.id === args.id
            });

            if (borrarCurso[0] === undefined) {
                return {
                    id: -1,
                    title: 'El curso no se puede borrar porque no se ha encontrado con ese ID',
                    description: '',
                    clases:0,
                    time: 0.0,
                    level: 'TODOS',
                    logo: '',
                    path : '',
                    teacher: '',
                    reviews: []
                } 
            }
            return borrarCurso[0];
        }

    }
}

export default mutation;