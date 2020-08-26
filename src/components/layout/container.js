import { factory } from './factory'
import Node from './node'

class NormalContainer extends Node {
  static creator (rawData) {
    return new NormalContainer(rawData)
  }
}

factory.register('NormalContainer', NormalContainer.creator)

export { NormalContainer }
