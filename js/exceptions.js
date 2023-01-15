"use strict";

// * OBSERVACIONES:
// También he intentado utilizar factory en el archivo de excepciones.
/* No incluyo la excepción que no permite invocar a un constructor
sin new, ya que estoy utilizando un patrón factory en entities.js*/

export function ExceptionFactory() {
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

  /**
   * Clase de excepción que genera un error si la categoria
   * ya existe en la colección de categorias.
   */
  class CategoryExistsException extends BaseException {
    constructor(fileName, lineNumber) {
      super("La categoria ya existe.", fileName, lineNumber);
      this.name = "CategoryExistsException";
    }
  }

  /**
   * Clase de excepción que genera un error si la categoría
   * no está registrada en el sistema.
   */
  class NotRegisteredCategoryException extends BaseException {
    constructor(fileName, lineNumber) {
      super("La categoria no está registrada.", fileName, lineNumber);
      this.name = "NotRegisteredCategoryException";
    }
  }

  /**
   * Clase de excepción que genera un error si el nombre
   * de usuario ya existe.
   */
  class UsernameExistsException extends BaseException {
    constructor(fileName, lineNumber) {
      super("Este nombre de usuario ya existe.", fileName, lineNumber);
      this.name = "UsernameExistsException";
    }
  }

  /**
   * Clase de excepción que genera un error si el email ya existe.
   */
  class EmailExistsException extends BaseException {
    constructor(fileName, lineNumber) {
      super("Este email ya existe.", fileName, lineNumber);
      this.name = "EmailExistsException";
    }
  }

  this.throwError = function(error, object = null, value = "") {
    let exception = null;

    switch(error) {
      case "AbstractClassException":
        exception = new AbstractClassException(object);
        break;
      case "EmptyValueException":
        exception = new EmptyValueException(value);
        break;
      case "NoValidObjectException":
        exception = new NoValidObjectException(value, object);
        break;
      case "InvalidTypeException":
        exception = new InvalidTypeException(value);
        break;
      case "NoValidFieldException":
        exception = new NoValidFieldException(value);
        break;
      case "CategoryExistsException":
        exception = new CategoryExistsException();
        break;
      case "NotRegisteredCategoryException":
        exception = new NotRegisteredCategoryException();
        break;
      case "UsernameExistsException":
        exception = new UsernameExistsException();
        break;
      case "EmailExistsException":
        exception = new EmailExistsException();
        break;
      default: exception = new BaseException("No se especifico ningún error");
    }

    return exception;
  }
}