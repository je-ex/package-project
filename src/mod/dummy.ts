/**
 * @name                                    module.ts
 * @description                             Dummy module.
*/


/* ┌─────────────────────────────────────── CORE ───────────────────────────────────────┐  */

    import { t_dummy }                      from '../types';

/* └────────────────────────────────────────────────────────────────────────────────────┘  */


/* ┌─────────────────────────────────────── CORE ───────────────────────────────────────┐  */

    /**
     * Logs a message to the console indicating that the Dummy function was called.
     *
     * @param   { t_dummy   }   val         The value to be logged.
     *
     * @return  {   void    }               This function does not return a value.
    */
    export const Dummy
    = (val : t_dummy)
    : void =>
    {
        console.log(`The dummy value is : ${ val }`);
    }

/* └────────────────────────────────────────────────────────────────────────────────────┘  */