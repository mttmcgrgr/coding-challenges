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

  def breadth_first_search(item)
   queue = [@root]

   while !queue.empty?
     current_node = queue.shift
     return current_node if current_node.value == item
     queue.unshift(current_node.left_child) if !current_node.left_child.nil?
     queue.unshift(current_node.right_child) if !current_node.right_child.nil?
   end
   puts "Item not found"
   return nil
 end

 def dfs_rec(item, node = @root)

    return nil if node.nil?
    return node if node.value == item

    left_node = dfs_rec(item, node.left_child)
    right_node = dfs_rec(item, node.right_child)

  end

  def insert(value)
    if @root == nil
      BSTNode.new(value)
    else
      BinarySearchTree.insert!(@root, value)
    end

  end

  def find(value)
    self.find!(@root, value)

  end

  def inorder
    BinarySearchTree.inorder!(@root)

  end

  def postorder
    BinarySearchTree.postorder!(@root)

  end

  def preorder
    BinarySearchTree.preorder!(@root)

  end

  def height
    BinarySearchTree.height(@root)

  end

  def min(node)
    BinarySearchTree.min(@root)
  end

  def max(node)
    BinarySearchTree.max(@root)
  end

  def delete(value)
    @root = BinarySearchTree.delete!(@root, value)

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
    return nil unless node
    return node if node.value == value

    if value < node.value
      BinarySearchTree.find!(node.left, value)
    else
      BinarySearchTree.find!(node.right, value)
    end

  end

  def self.preorder!(node)
    return [] unless node

    arr =[node.value]
    arr += BinarySearchTree.preorder!(node.left) if node.left
    arr += BinarySearchTree.preorder!(node.right) if node.right

    arr

  end

  def self.inorder!(node)
    return [] unless node

    result = []
    result += BinarySearchTree.inorder!(node.left) if node.left
    result << node
    result += BinarySearchTree.inorder!(node.right) if node.right

    arr
  end

  def self.postorder!(node)
    return [] unless node

    result = []
    result += BinarySearchTree.inorder!(node.left) if node.left
    result += BinarySearchTree.inorder!(node.right) if node.right
    result += node.value

    arr

  end

  def self.height!(node)
    return -1 unless node

    1 + [BinarySearchTree.height!(node.left), BinarySearchTree.height!(node.left)].max
  end

  def self.max(node)
    return nil unless node
    return node unless node.left

    BinarySearchTree.min(node.left)

  end

  def self.min(node)
    return nil unless node
    return node unless node.left

    BinarySearchTree.min(node.left)

  end

  def self.delete_min!(node)
    return nil unless node
    return node.right unless node.left

    node.left = BinarySearchTree.delete_min!(node.left)
    node
  end

  def self.delete!(node, value)
   return nil unless node

   if value < node.value
     node.left = BinarySearchTree.delete!(node.left, value)
   elsif value > node.value
     node.right = BinarySearchTree.delete!(node.right, value)
   else
     return node.left unless node.right
     return node.right unless node.left
     t = node
     node = BinarySearchTree.min(t.right)
     node.right = BinarySearchTree.delete_min!(t.right)
     node.left = t.left
   end
   node
 end

end
