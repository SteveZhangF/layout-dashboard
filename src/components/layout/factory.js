
class NodeFactory {
  constructor () {
    this.creators = {}
  }

  register (name, creator) {
    this.creators[name] = creator
  }

  create (rawData) {
    if (rawData.__inited__) {
      return rawData
    }
    var creator = this.creators[rawData.name]
    if (!creator) {
      creator = this.creators.default
    }
    return creator(rawData)
  }

  static instance

  static getInstance () {
    if (NodeFactory.instance == null) {
      NodeFactory.instance = new NodeFactory()
    }
    return NodeFactory.instance
  }

  findNode (id) {
    return this.root.findNode(id)
  }
}

var factory = NodeFactory.getInstance()

export { factory }
