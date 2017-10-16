class ComputerPlayer

  attr_reader :name, :board
  attr_accessor :mark

  def initialize(name)
    @name = name

  end

  def get_move
    moves = []
    (0..2).each do |row|
      (0..2).each do |col|
        move = [row,col]
        moves << move if @board[move].nil?
      end
    end

    moves.each do |move|
      return move if wins?(move)
    end

    moves.each do |move|
      return move if blocks?(move)
    end

    moves.sample

  end

  def blocks?(move)
    opponent_mark = @mark == :X ? :O : :X
    board[move] = opponent_mark
    if board.winner
      board[move] = nil
      return true
    else
      board[move] = nil
      return false
    end
  end

  def wins?(move)
    board[move] = @mark
    if board.winner
      board[move] = nil
      return true
    else
      board[move] = nil
      return false
    end
  end

  def display(board)
    @board = board
  end





end
