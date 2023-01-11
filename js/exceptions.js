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
    constructor(fileName, lineNumber) {
      super("El constructor no puede ser invocado sin new.", fileName, lineNumber);
      this.name = "InvalidAccessConstructorException";
    }
}

/**
 * Clase de excepción que genera un error cada vez que intentamos
 * instanciar una clase abstracta.
 */
class AbstractClassException extends BaseException {
    constructor(className, fileName, lineNumber) {
      super(`La clase ${className} es abstracta.`, fileName, lineNumber);
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

export {
    InvalidAccessConstructorException,
    AbstractClassException,
    EmptyValueException
};