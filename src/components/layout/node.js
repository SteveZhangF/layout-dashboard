import Vue from 'vue'
import { factory } from './factory.js'
const interact = require('interactjs')

const defaultNode = {
  id: '0',
  name: '',
  size: { sm: 0, md: 0, lg: 0, xm: 0 },
  index: 0,
  children: [],
  draggable: false,
  dropable: false,
  class: '',
  element: null,
  draggableStatus: {
    moving: false, // is moving
    position: { x: 0, y: 0 } // moving delta position
  },
  dropzoneStatus: {
    active: false, // dragged node can be droped into
    in: false // is dragging in the node
  }
}

class Node {
  constructor (data) {
    if (data.children) {
      for (let index = 0; index < data.children.length; index++) {
        const c = data.children[index]
        data.children[index] = factory.create(c)
      }
    }
    const d = Object.assign(
      {},
      JSON.parse(JSON.stringify(defaultNode)),
      data
    )
    this._data = Vue.observable(d)
    if (this.children) {
      for (let index = 0; index < this.children.length; index++) {
        this.children[index].parent = this
        this.children[index].index = index
      }
    }
    this.parent = {}
    this.init()
  }

  init () {
    this.doInit()
    this.__inited__ = true
  }

  doInit () {}

  get index () {
    return this._data.index
  }

  set index (v) {
    this._data.index = v
  }

  get draggableStatus () {
    return this._data.draggableStatus
  }

  set draggableStatus (v) {
    this._data.draggableStatus = v
  }

  get dropzoneStatus () {
    return this._data.dropzoneStatus
  }

  set dropzoneStatus (v) {
    this._data.dropzoneStatus = v
  }

  get element () {
    return this._data.element
  }

  set element (v) {
    this._data.element = v
  }

  get id () {
    return this._data.id
  }

  set id (v) {
    this._data.id = v
  }

  get name () {
    return this._data.name
  }

  set name (v) {
    this._data.name = v
  }

  get children () {
    return this._data.children
  }

  set children (v) {
    this._data.children = v
  }

  get size () {
    return this._data.size
  }

  set size (v) {
    this._data.size = v
  }

  set class (v) {
    this._data.class = v
  }

  get class () {
    let classes = ''
    Object.keys(this.size).forEach(sz => {
      classes = classes + ' col-' + sz + '-' + this.size[sz] / this.parent.size[sz] * 12
    })
    if (this.draggableStatus.moving) {
      classes = classes + ' moving '
    }
    if (this.dropzoneStatus.in) {
      classes = classes + ' in '
    }
    console.log(classes)
    return classes
  }

  get draggable () {
    return this._data.draggable
  }

  set draggable (v) {
    this._data.draggable = v
  }

  get dropable () {
    return this._data.dropable
  }

  set dropable (v) {
    this._data.dropable = v
  }

  get style () {
    return {
      // transform: `translate(${this.draggableStatus.position.x}px, ${this.draggableStatus.position.y}px)`
    }
  }

  resort () {
    const c = []
    this.children.forEach(child => {
      c[child.index] = child
    })
    for (let index = 0; index < c.length; index++) {
      this.children[index] = c[index]
    }
    console.log(this.children)
    const id = this.id
    this.id = id + '_'
    this.id = id
  }

  edit () {
    this.makeDraggable(false, true)
  }

  makeDraggable (draggable, dropable) {
    this.draggable = draggable
    this.dropable = dropable
    this.interact()
    this.children.forEach(c => {
      c.makeDraggable(true, true)
    })
  }

  handleDragNDrop (event) {
    switch (event.type) {
      case 'move':
        var interaction = event.interaction

        // if the pointer was moved while being held down
        // and an interaction hasn't started yet
        if (interaction.pointerIsDown && !interaction.interacting()) {
          // var original = event.currentTarget,
          // create a clone of the currentTarget element
          const clone = event.currentTarget.cloneNode(true)
          this.element.parentElement.appendChild(clone)
          clone.style.position = 'fixed'
          clone.style.left = event.clientX + 'px'
          clone.style.top = event.clientY + 'px'
          clone.style.height = event.currentTarget.clientHeight + 'px'
          clone.style.width = event.currentTarget.clientWidth + 'px'
          this.draggableStatus.moving = true
          // insert the clone to the page
          // TODO: position the clone appropriately
          // start a drag interaction targeting the clone
          interaction.start({ name: 'drag' },
            event.interactable,
            clone)
        }
        break
      case 'dragmove':
        var target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
        // translate the element
        target.style.webkitTransform =
        target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        break
      case 'dragend':
        this.draggableStatus.position.x = 0
        this.draggableStatus.position.y = 0
        this.parent.dropzoneStatus.active = false
        event.target.remove()
        this.draggableStatus.moving = false
        break
      case 'dragenter':
        this.dropzoneStatus.in = true
        console.log('entered into ', this.id)
        break
      case 'dragleave':
        this.dropzoneStatus.in = false
        console.log('leave from ', this.id)
        break
      case 'drop':
        this.dropzoneStatus.in = false
        if (this.parent.id === event.draggable.__node__.parent.id) {
          const idx = this.index
          this.index = event.draggable.__node__.index
          event.draggable.__node__.index = idx
          const size = Object.assign({}, this.size)
          Object.assign(this.size, event.draggable.__node__.size)
          Object.assign(event.draggable.__node__.size, size)
          this.parent.resort()
        }
    }
  }

  interact () {
    if (this.interactObj === null || this.interactObj === undefined) {
      this.interactObj = interact(this.element)
    }
    if (this.draggable) {
      this.interactObj.draggable({ manualStart: true })
      this.interactObj.__node__ = this
      if (!this.dragEventSet) {
        this.dragEventSet = true
        this.interactObj.on('dragstart dragmove dragend move', (event) => {
          this.handleDragNDrop(event)
        })
      }
    } else {
      this.interactObj.draggable({
        enabled: false
      })
    }

    if (this.dropable) {
      this.interactObj.dropzone({
        overlap: 0.25,
        checker: (dragEvent, // related dragmove or dragend
          event, // Touch, Pointer or Mouse Event
          dropped, // bool default checker result
          dropzone, // dropzone Interactable
          dropElement, // dropzone element
          draggable, // draggable Interactable
          draggableElement) => { // draggable element
          // only allow drops into empty dropzone elements
          if (draggable.__node__.parent.id === this.parent.id || this.id === draggable.__node__.parent.id) {
            return true && dropped
          }
          return false
          // dropped && !dropElement.hasChildNodes()
        }
      })
      if (!this.dropEventSet) {
        this.dropEventSet = true
        this.interactObj.on('dropactivate dropdeactivate drop dragenter dragleave', (event) => {
          this.handleDragNDrop(event)
        })
      }
    } else {
      this.interactObj.dropzone({
        enabled: false
      })
    }
  }

  findNode (id) {
    if (this.id === id) {
      return this
    }
    for (let index = 0; index < this.children.length; index++) {
      const node = this.children[index].findNode(id)
      if (node !== null) {
        return node
      }
    }
    return null
  }

  findChild (id) {
    for (let index = 0; index < this.children.length; index++) {
      if (this.children[index].id === id) {
        return this.children
      }
    }
    return null
  }

  toJson () {
    return ({
      name: this.name,
      index: this.index,
      size: this.size
    })
  }

  static creator (rawData) {
    return new Node(rawData)
  }
}

factory.register('default', Node.creator)

export default Node
