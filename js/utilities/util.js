"use strict";

export default function countProductionsClossure() {
    let _productions = 0;

    function increment() {
        _productions++;
    }

    function decrement() {
        _productions--;
    }

    function returnProductionInstances() {
        return _productions;
    }

    return {
        increment,
        decrement,
        returnProductionInstances
    }
}