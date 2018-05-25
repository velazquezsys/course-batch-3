"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function Employee(name, email, phone, cell, sha256) {
    _classCallCheck(this, Employee);

    this.name = name;
    this.email = email;
    this.phone = phone;
    this.cell = cell;
    this.sha256 = sha256;
};