class Player {
  static get VERSION() {
    return "0.5";
  }

  static highCard(hole_cards) {
    let high = hole_cards.filter(card =>
      ["J", "Q", "K", "A"].includes(card.rank)
    );
    return high.length;
  }

  static betRequest(gameState, bet) {
    if (true) {
      // new logic
      if (gameState.players[gameState.in_action].hole_cards.length == 2) {
        if (
          gameState.players[gameState.in_action].hole_cards[0].suit ===
            gameState.players[gameState.in_action].hole_cards[1].suit &&
          Player.highCard(gameState.players[gameState.in_action].hole_cards) >=
            1
        ) {
          // same suit & high card (J, Q, K, A)
          // go all in
          bet(10000);
        } else if (
          gameState.players[gameState.in_action].hole_cards[0].rank ===
          gameState.players[gameState.in_action].hole_cards[1].rank
        ) {
          // same 2 cards
          // go all in
          bet(10000);
        } else if (
          Player.highCard(gameState.players[gameState.in_action].hole_cards) ==
          2
        ) {
          // 2 high cards
          // go all in
          bet(10000);
        } else {
          // raise

          // bet(
          //   gameState.current_buy_in -
          //     gameState.players[gameState.in_action].bet +
          //     gameState.minimum_raise
          // );

          // call

          bet(
            gameState.current_buy_in -
              gameState.players[gameState.in_action].bet
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
