require_relative "board"
require_relative "human_player"
require_relative "computer_player"

class Game

  attr_accessor :player1, :player2, :current_player, :board

  def initialize(player1, player2)
    @player1, @player2 = player1, player2
    @player1.mark = :X
    @player2.mark = :O
    @current_player = @player1
    @board = Board.new
  end


  def switch_players!
    @current_player = @current_player == @player1 ? @player2 : @player1
  end

  def play
    @current_player.display(@board)

    until @board.over?
      play_turn
    end

    if game_winner
       game_winner.display(board)
      puts "#{game_winner.name} wins!"
    else
      puts "cats game"
    end
  end


  def play_turn
    @board.place_mark(@current_player.get_move, @current_player.mark)
    switch_players!
    system("clear")
    @current_player.display(@board)
  end

  def game_winner
    return player1 if board.winner == :X
    return player2 if board.winner == :O
    nil
  end

end


if $PROGRAM_NAME == __FILE__
  print "Enter Your Name  "
  name = gets.chomp
  human = HumanPlayer.new(name)
  computer = ComputerPlayer.new("computer")

  new_game = Game.new(human, computer)
  new_game.play
end
