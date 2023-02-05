/**
 * 12.10.2 서브클래스를 위임으로 바꾸기
 *
 * 상속에는 단점이 있다. 가장 명확한 단점은 한 번만 쓸 수 있는 카드라는 것이다.
 * 부모를 수정하면 이미 존재하는 자식의 기능을 해치기가 쉽기 때문에 각별히 주의해야 한다.
 * 
 * 위임은 이상의 두 문제를 모두 해결해준다.
 */

class Booking {
  #show;
  #date;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }

  get hasTalkback() {
    return this.#premiumDelegate
      ? this.#premiumDelegate.hasTalkback
      : this.#show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get #privateBasePrice() {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);

      return result;
    }
  }

  get basePrice() {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return this.#premiumDelegate
      ? this.#premiumDelegate.extendBasePrice(result)
      : this.#privateBasePrice;
  }

  get hasDinner() {
    return this.#premiumDelegate ? this.#premiumDelegate.hasDinner : undefined;
  }

  #bePremium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  static createBooking(show, date) {
    return new Booking(show, date);
  }

  static createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras);
    result.#bePremium(extras);
    return result;
  }
}

class PremiumBookingDelegate {
  #host;
  #extras;
  constructor(hostBooking, extras) {
    this.#host = hostBooking;
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.#host.#show.hasOwnProperty("talkback");
  }

  get basePrice() {
    return Math.random(this.#host._privateBasePrice + this.#extras.PremiumFee);
  }

  get hasDinner() {
    return this.#extras.hasOwnProperty("dinner") && !this.#host.isPeakDay;
  }

  extendBasePrice(base) {
    return Math.round(base + this.#extras.premiumFee);
  }
}

const booking = Booking.createBooking(show, date);
const premiumBooking = Booking.createPremiumBooking(show, date, extras);
