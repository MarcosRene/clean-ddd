import { UniqueEntityID } from './unique-entity-id'

export class Entity<T> {
  private _id: UniqueEntityID
  protected props: T

  get id() {
    return this._id
  }

  protected constructor(props: T, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID(id)
  }

  public equals(entity: Entity<any>) { //eslint-disable-line
    if (entity === this) {
      return true
    }
    if (entity.id === this._id) {
      return true
    }
    return false
  }
}
