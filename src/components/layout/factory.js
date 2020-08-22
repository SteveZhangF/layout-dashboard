
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
    return (node)
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

export { factory }
