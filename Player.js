class Player {
  static get VERSION() {
    return "0.3";
  }

  static highCard(hole_cards) {
    let high = hole_cards.filter(card =>
      ["J", "Q", "K", "A"].includes(card.rank)
    );
    return high.length > 0;
  }

  static betRequest(gameState, bet) {
    if (true) {
      // new logic
      if (gameState.players[gameState.in_action].hole_cards.length == 2) {
        if (
          gameState.players[gameState.in_action].hole_cards[0].suit ===
            gameState.players[gameState.in_action].hole_cards[1].suit &&
          highCard(gameState.players[gameState.in_action].hole_cards)
        ) {
          // same suit & high card (J, Q, K, A)
          // go all in
          bet(10000);
        } else {
          bet(
            gameState.current_buy_in -
              gameState.players[gameState.in_action].bet +
              gameState.minimum_raise
          );
        }
      }
    } else {
      // previous logic
      bet(10000);
    }
  }

  static showdown(gameState) {}
}

module.exports = Player;
