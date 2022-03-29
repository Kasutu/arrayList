#! /usr/bin/env

import DynamicArray from './modules/dynamicArray';

const arr1 = new DynamicArray();

arr1.push(100);
console.log('before', arr1.getData());
arr1.push(32);
arr1.push(53);
arr1.push(5432);
arr1.push(5242);
arr1.push(5255);
arr1.push(745);
console.log('after', arr1.getData());
