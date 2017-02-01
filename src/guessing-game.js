class GuessingGame {
    constructor(min, max) {
      this.min = min
      this.max = max
      this.guessed
    }

    setRange(min, max) {
      this.min = min
      this.max = max
    }

    guess() {
      this.guessed = Math.round((
        this.min + (this.max - this.min) / 2
      ))
      return this.guessed;
    }

    lower() {
      this.setRange(this.min, this.guessed);
    }

    greater() {
      this.setRange(this.guessed, this.max);
    }
}

module.exports = GuessingGame;
