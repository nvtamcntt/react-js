import React, { Component } from 'react';
import {createStore} from 'redux';
import {status, sort} from './index'
import myReducer from './../reducers/index'

const store = createStore(myReducer);

console.log(store.getState());

store.dispatch(status());

store.dispatch(sort({by: 'name', value : -1}));

console.log(store.getState());

