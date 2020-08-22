import Vue from 'vue'

const defaultNode = {
  x: 0,
  y: 0,
  h: 0,
  w: 0,
  i: '0',
  height: 0,
  innerHeight: 0,
  rowHeight: 0,
  component: '',
  name: ''
}

class Node {
  constructor (data) {
    this._data = Vue.observable(Object.assign(
      {},
      defaultNode,
      data
    ))
  }

  toJson () {
    return ({
      x: this.x,
      y: this.y,
      h: this.h,
      w: this.w,
      i: this.i,
      component: this.component,
      name: this.name
    })
  }

  setLayout (rawLayout) {
    Object.assign(this._data, defaultNode, rawLayout)
    this.init()
  }

  init () {
    this.doInit()
  }

  doInit () {}

  get component () {
    return this._data.component
  }

  get w () {
    return this._data.w
  }

  get h () {
    return this._data.h
  }

  get x () {
    return this._data.x
  }

  get y () {
    return this._data.y
  }

  set w (v) {
    this._data.w = v
  }

  set h (v) {
    this._data.h = v
  }

  set y (v) {
    this._data.y = v
  }

  set x (v) {
    this._data.x = v
  }

  get i () {
    return this._data.i
  }

  set i (v) {
    this._data.i = v
  }

  get height () {
    return this._data.height
  }

  set height (v) {
    this._data.height = v
  }

  get innerHeight () {
    return this._data.innerHeight
  }

  set innerHeight (v) {
    this._data.innerHeight = v
  }

  get rowHeight () {
    return this._data.rowHeight
  }

  set rowHeight (v) {
    this._data.rowHeight = v
  }

  calcSize ({ width, height }) {
    this.calcWidth(width)
    this.calcHeight(height)
  }

  calcHeight (resizedHeight) {
    this.innerHeight = resizedHeight
    setTimeout(() => {
      const remainder = this.innerHeight % this.rowHeight
      const height = this.innerHeight + (this.rowHeight - remainder)
      const h = height / this.rowHeight
      this.h = h
      this.height = h * this.rowHeight + (h - 1) * 10
    }, 500)
  }

  calcWidth () {}
}

export default Node
