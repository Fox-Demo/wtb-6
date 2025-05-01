export abstract class SubscriberObserver {
  constructor(private _name: string) {}

  abstract notify(from: Channel, video: Video): void;

  get name(): string {
    return this._name;
  }
}

export class Video {
  private title: string;
  private description: string;
  private length: number;

  constructor(title: string, description: string, length: number) {
    this.title = title;
    this.description = description;
    this.length = length;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getLength(): number {
    return this.length;
  }
}

export class Channel {
  private _name: string;
  private observers: SubscriberObserver[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public unsubscribe(observer: SubscriberObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  public subscribe(observer: SubscriberObserver): void {
    this.observers.push(observer);
    console.log(`${observer.name} 訂閱了 ${this._name}`);
  }

  private notifyAllObservers(video: Video): void {
    for (const observer of this.observers) {
      observer.notify(this, video);
    }
  }

  public upload(video: Video): void {
    console.log(`頻道 ${this.name} 上架了一則新影片 \"${video.getTitle()}\"`);
    this.notifyAllObservers(video);
  }

  get name(): string {
    return this._name;
  }
}

export class WaterSubscriber extends SubscriberObserver {
  constructor(name: string) {
    super(name);
  }

  public notify(from: Channel, video: Video): void {
    if (video.getLength() >= 3) {
      console.log(`${this.name} 對影片 \"${video.getTitle()}\" 按讚`);
    }
  }
}
export class FireSubscriber extends SubscriberObserver {
  constructor(name: string) {
    super(name);
  }

  public notify(from: Channel, video: Video): void {
    if (video.getLength() <= 1) {
      console.log(`${this.name} 取消訂閱了 ${from.name} 的頻道`);
      from.unsubscribe(this);
    }
  }
}
