"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./../index"));
const p = new index_1.default({
    data_per_page: 10
});
console.log(p.getTakeAndSkip(2));
console.log(p.getPageNumberByOffsetAndLimit(30, 10));
