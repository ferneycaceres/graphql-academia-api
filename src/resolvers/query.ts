import { database } from "../data/data.store";

const query =  {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(root :any, args: any, context: any) : any {
            const resultado = database.estudiantes.filter(estudiante=>estudiante.id === args.id)[0];
            if (resultado === undefined) {
                return {
                    id:'-1',
                    name:`No se ha encontrado el estudiante con el ID ${args.id}`,
                    email: '',
                    courses: []
                }
            }
            return resultado;
        },
        cursos(): any {
            return database.cursos;
        },
        curso(root :any, args: any, context: any) : any {
            const resultado = database.cursos.filter(curso=>curso.id === args.id)[0];
            if (resultado === undefined) {
                return {
                    id:'-1',
                    title: `No se ha encontrado el curso con el ID ${args.id}`,
                    time: 0,
                    clases: 0,
                    description: '',
                    path:''
                }
            }
            return resultado;
        },
    }

}

export default query;