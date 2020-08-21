import { factory } from './factory'
import Node from './node'
class Container extends Node {
  static creator (rawData) {
    return new Container(rawData)
  }

  doInit () {
    const children = []
    if (this._data.children && this._data.children.length > 0) {
      this._data.children.forEach(child => {
        child.rowHeight = this.rowHeight
        children.push(factory.create(child))
      })
    }
    this.children = children
  }

  toJson () {
    const output = super.toJson()
    output.children = []
    for (let index = 0; index < this.children.length; index++) {
      output.children.push(this.children[index].toJson())
    }
    return output
  }
}

class TabContainer extends Container {
  static creator (rawData) {
    return new TabContainer(rawData)
  }
}

class NormalContainer extends Container {
  static creator (rawData) {
    return new NormalContainer(rawData)
  }
}

class WaterfallContainer extends Container {
  constructor () {
    super()
    this._name = 'WaterfallContainer'
  }

  static creator (rawData) {
    return new WaterfallContainer(rawData)
  }

  doInit () {
    super.doInit()
    let width = 0
    this.children.forEach(node => {
      node.x = width
      width = width + node.w
      if (width >= 4) {
        width = 0
      }
    })
  }

  calcWidth (resizedWidth) {
    let width = 0
    this.children.forEach(node => {
      node.x = width
      width = width + node.w
      if (width >= 4) {
        width = 0
      }
    })
  }
}

factory.register('Container', Container.creator)
factory.register('WaterfallContainer', WaterfallContainer.creator)
factory.register('TabContainer', TabContainer.creator)
factory.register('NormalContainer', NormalContainer.creator)

export { Container, WaterfallContainer, TabContainer, NormalContainer }
