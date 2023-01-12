"use strict";

/**
 * Clase de excepción base que mejora las instancias
 * creadas de objetos Error.
 */
class BaseException extends Error {
  constructor(message = "", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "BaseException";
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }
  }
}

/**
 * Clase de excepción personalizada para mostrar un
 * mensaje de error en el case de que un constructor haya
 * sido invocado sin new.
 */
class InvalidAccessConstructorException extends BaseException {
    constructor(className, fileName, lineNumber) {
      super("El constructor no puede ser invocado sin new.", fileName, lineNumber);
      this.className = className;
      this.name = "InvalidAccessConstructorException";
    }
}

/**
 * Clase de excepción que genera un error cada vez que intentamos
 * instanciar una clase abstracta.
 */
class AbstractClassException extends BaseException {
    constructor(className, fileName, lineNumber) {
      super(`La clase ${className.name} es abstracta.`, fileName, lineNumber);
      this.className = className;
      this.name = "AbstractClassException";
    }
}

/**
 * Clase de excepción que genera un error si un campo o
 * parametro está vacío.
 */
class EmptyValueException extends BaseException {
    constructor(param, fileName, lineNumber) {
      super("El campo  " + param + " no puede estar vacío.", fileName, lineNumber);
      this.param = param;
      this.name = "EmptyValueException";
    }
}

/**
 * Clase de excepción que genera un error si el objeto que
 * se le pasa no es un objeto correcto.
*/
class NoValidObjectException extends BaseException {
  constructor(param, object, fileName, lineNumber) {
    super("Objeto no válido " + param + " .Se esperaba un objeto de tipo " + object.name, fileName, lineNumber);
    this.name = "NoValidObjectException";
  }
}

/**
 * Clase de excepción que genera un error si el argumento que se
 * recibe no es del tipo esperado.
*/
class InvalidTypeException extends BaseException {
  constructor(param, fileName, lineNumber) {
    super("El tipo del argumento " + param + " que se le está pasando a este constructor no es válido ", fileName, lineNumber);
    this.name = "InvalidTypeException";
  }
}

/**
 * Clase de excepción que genera un error si el campo que se testea
 * con una regex no coincide con el patrón especificado.
*/
class NoValidFieldException extends BaseException {
  constructor(param, fileName, lineNumber) {
    super("El campo " + param + " no es válido.", fileName, lineNumber);
    this.name = "NoValidFieldException";
  }
}

export {
    InvalidAccessConstructorException,
    AbstractClassException,
    NoValidObjectException,
    EmptyValueException,
    InvalidTypeException,
    NoValidFieldException
};