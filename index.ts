import {
  Channel,
  Video,
  WaterSubscriber,
  FireSubscriber,
} from "./classes/channel";

// Create YouTube channels
const pewDiePie = new Channel("PewDiePie");
const waterBallAcademy = new Channel("水球軟體學院");

// Create subscribers - need to pass the channel in the constructor
const waterSubscriber = new WaterSubscriber("水球");
const fireSubscriber = new FireSubscriber("火球");
console.log("--- Subscribers subscribing to channels ---");

// 水球訂閱 PewDiePie 和 水球軟體學院
pewDiePie.subscribe(waterSubscriber);
waterBallAcademy.subscribe(waterSubscriber);

// 火球訂閱 PewDiePie 和 水球軟體學院
pewDiePie.subscribe(fireSubscriber);
waterBallAcademy.subscribe(fireSubscriber);

// 水球軟體學院上傳一部影片：標題："C1M1S2"、敘述："這個世界正是物件導向的呢！"、影片長度：4 分鐘。
const video1 = new Video("C1M1S2", "這個世界正是物件導向的呢！", 4);
waterBallAcademy.upload(video1);
// PewDiePie 上傳一部影片：標題："Hello guys"、敘述："Clickbait"、影片長度：30 秒。
const video2 = new Video("Hello guys", "Clickbait", 0.5);
pewDiePie.upload(video2);

// 水球軟體學院上傳一部影片：標題："C1M1S3"、敘述："物件 vs. 類別"、影片長度：1 分鐘。
const video3 = new Video("C1M1S3", "物件 vs. 類別", 1);
waterBallAcademy.upload(video3);

// PewDiePie 上傳一部影片：標題："Minecraft"、敘述："Let's play Minecraft"、影片長度：30 分鐘。
const video4 = new Video("Minecraft", "Let's play Minecraft", 30);
pewDiePie.upload(video4);
