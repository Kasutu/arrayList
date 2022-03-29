#! /usr/bin/env

import DynamicArray from './modules/dynamicArray';

const list = new DynamicArray<string>();

list.push('yup');
list.push('hehe2');
console.log('before', list.getData());
list.push('burger');
list.push('ads');
list.push('ham');
list.push('tv');
list.push('jam');
console.log('after', list.getData());
console.log('getting an element at a certain index -> ', list.get(6));
console.log('getter length -> ', list.length);

for (let i = 0; i < list.length; i++) {
	console.log('element on index: ', i, '->', list.get(i));
}
