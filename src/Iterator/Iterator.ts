interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
  reset(): void;
}

export default class Iterator<T> implements IIterator<T> {
  private collection: Array<T>;
  private currentIndex: number;

  constructor(collection: Array<T>) {
    this.collection = collection;
    this.currentIndex = 0;
  }

  public hasNext(): boolean {
    return this.currentIndex < this.collection.length;
  }

  public next(): T {
    if (!this.hasNext())
      throw new Error("No more elements available in the iterator.");

    return this.collection[this.currentIndex++];
  }

  public reset(): void {
    this.currentIndex = 0;
  }
}
