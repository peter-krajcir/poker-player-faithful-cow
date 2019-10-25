class Player {
  static get VERSION() {
    return "Skynet";
  }

  static highCard(hole_cards) {
    let high = hole_cards.filter(card =>
      ["J", "Q", "K", "A"].includes(card.rank)
    );
    return high.length;
  }

  static activePlayerReallyRich(players, activePlayerId) {
    const ourBudget = players[activePlayerId].stack;
    let notPoorPlayers = players.filter(
      player => player.id != activePlayerId && player.stack > ourBudget / 4
    );
    return notPoorPlayers.length == 0;
  }

  static someoneRaised(players, activePlayerId) {
    let raised = players.filter(
      player => player.id != activePlayerId && player.bet != 0
    );

    return raised.length > 0;
  }

  static betRequest(gameState, bet) {
    if (true) {
      // new logic
      if (gameState.players[gameState.in_action].hole_cards.length == 2) {
        if (
          Player.activePlayerReallyRich(gameState.players, gameState.in_action)
        ) {
          bet(10000);
        } else if (
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
        } else if (
          Player.highCard(gameState.players[gameState.in_action].hole_cards) ==
            0 &&
          Player.someoneRaised(gameState.players, gameState.in_action)
        ) {
          bet(0);
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
