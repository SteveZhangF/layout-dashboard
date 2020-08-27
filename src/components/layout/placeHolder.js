import { factory } from './factory'
import Node from './node'

class PlaceHolder extends Node {
  static creator (rawData) {
    return new PlaceHolder(rawData)
  }

  get style () {
    const s = super.style
    s.height = '100px'
    return s
  }
}

factory.register('PlaceHolder', PlaceHolder.creator)

export default PlaceHolder
