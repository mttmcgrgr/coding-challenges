class BSTNode
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value)
      @value = value
      @left = nil
      @right = nil
  end

end

class BinarySearchTree
  def initialize
    @root = nil

  end

  def insert(value)
    if @root == nil
      BSTNode.new(value)
    else
      BinarySearchTree.insert!(@root, value)
    end


  end

  def find(value)

  end

  def inorder

  end

  def postorder

  end

  def preorder

  end

  def height

  end

  def min

  end

  def max

  end

  def delete(value)

  end

  def self.insert!(node, value)
    return BSTNode.new(value) unless node

    if value <= node.value
      node.left = BinarySearchTree.insert!(node.left, value)
    else
      node.right = BinarySearchTree.insert!(node.right, value)
    end

    node
  end

  def self.find!(node, value)

  end

  def self.preorder!(node)

  end

  def self.inorder!(node)

  end

  def self.postorder!(node)

  end

  def self.height!(node)

  end

  def self.max(node)

  end

  def self.min(node)

  end

  def self.delete_min!(node)

  end

  def self.delete!(node, value)

  end
end
