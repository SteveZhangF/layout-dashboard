class Node {
  constructor (data) {
    this._data = data
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
}

class Container extends Node {
  static creator (rawData) {
    return new Container(rawData)
  }

  doInit () {
    this.children = []
    if (this._data.children && this._data.children.length > 0) {
      this._data.children.forEach(child => {
        this.children.push(factory.create(child))
      })
    }
  }
}

class ScreenerContainer extends Container {
  static creator (rawData) {
    return new ScreenerContainer(rawData)
  }
}

class WaterfallContainer extends Container {
  static creator (rawData) {
    return new WaterfallContainer(rawData)
  }
}

class NodeFactory {
  constructor () {
    this.creators = {}
  }

  register (componentName, creator) {
    this.creators[componentName] = creator
  }

  create (rawData) {
    var node = this.creators[rawData.component](rawData)
    node.init()
    return node
  }

  static instance

  static getInstance () {
    if (NodeFactory.instance == null) {
      NodeFactory.instance = new NodeFactory()
    }
    return NodeFactory.instance
  }
}

var factory = NodeFactory.getInstance()
factory.register('Container', Container.creator)
factory.register('WaterfallContainer', WaterfallContainer.creator)
factory.register('ScreenerContainer', ScreenerContainer.creator)

export { Node, Container, WaterfallContainer, factory }
