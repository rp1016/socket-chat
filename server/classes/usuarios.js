class Usuarios {

    constructor() {
        this.personas = [];
    }


    /**
     * Metodo para agregar Personas.
     * @param {*} id 
     * @param {*} nombre 
     */
    agregarPersona(id, nombre, sala) {

        let persona = {
            id,
            nombre,
            sala
        };


        this.personas.push(persona);

        return this.personas;

    }


    /**
     * Devuelve la persona que tiene el ID. 
     * @param {*} id 
     */
    getPersona(id) {

        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;

    }


    /**
     * Devuelve todas las personas.
     */
    getPersonas() {
        return this.personas;
    }

    /**
     * Devuelve las personas de la sala indicada.
     * @param {*} sala 
     */
    getPersonasPorSala(sala) {
        let personasEnsala = this.personas.filter(persona => persona.sala === sala);
        return personasEnsala;
    }

    /**
     * Borra las personas que tengan el id asociado.
     * @param {*} id 
     */
    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => {
            return persona.id != id;
        });

        return personaBorrada;
    }






}


module.exports = { Usuarios }