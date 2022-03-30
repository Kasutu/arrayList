#! /usr/bin/env

import DynamicArray from './modules/dynamicArray';
import LinkedList from './modules/linkedList';
import Node from './modules/linkedListNode';

const list = new DynamicArray<string>();
const likedList = new LinkedList();

console.log('---------linked list----------');
likedList.add('jam');
likedList.add('gem');
likedList.add('lyzza');
likedList.add('rome');
likedList.getData();
likedList.getData(1);

console.log('---------Dynamic Array----------');
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
