import BinarySearchAnimation from "./animations/BinarySearchAnimation";
import BubbleSortAnimation from "./animations/BubbleSortAnimation";
import LinearSearchAnimation from "./animations/LinearSearchAnimation";
import StackAnimation from "./animations/StackAnimation";
import BFSAnimation from "./animations/BFSAnimation";
import BankersAlgorithmAnimation from "./animations/BankersAlgorithmAnimation";
import BPlusTreeAnimation from "./animations/BPlusTreeAnimation";
import LRUAnimation from "./animations/LRUAnimation";
import OSIModelAnimation from "./animations/OSIModelAnimation";
import TCPHandshakeAnimation from "./animations/TCPHandshakeAnimation";
import DijkstraAnimation from "./animations/DijkstraAnimation";
import DFSAnimation from "./animations/DFSAnimation";
import QuickSortAnimation from "./animations/QuickSortAnimation";
import LinkedListAnimation from "./animations/LinkedListAnimation";
import HeapAnimation from "./animations/HeapAnimation";
import HashTableAnimation from "./animations/HashTableAnimation";
import BinaryTreeAnimation from "./animations/BinaryTreeAnimation";
import DefaultAnimation from "./animations/DefaultAnimation";

const VisualizationPanel = ({ visualization }) => {

  const renderAnimation = () => {

    switch (visualization) {

      case "binary_search":
        return <BinarySearchAnimation />;

      case "bubble_sort":
        return <BubbleSortAnimation />;

      case "linear_search":
        return <LinearSearchAnimation />;

      case "stack":
        return <StackAnimation />;

      case "bfs":
        return <BFSAnimation />;

      case "bankers_algorithm":
        return <BankersAlgorithmAnimation />;

      case "b_plus_tree":
        return <BPlusTreeAnimation />;

      case "lru":
        return <LRUAnimation />;

      case "osi_model":
        return <OSIModelAnimation />;

      case "tcp_handshake":
        return <TCPHandshakeAnimation />;

      case "dijkstra":
        return <DijkstraAnimation />;

      case "dfs":
        return <DFSAnimation />;

      case "quick_sort":
        return <QuickSortAnimation />;

      case "linked_list":
        return <LinkedListAnimation />;

      case "heap":
        return <HeapAnimation />;

      case "hash_table":
        return <HashTableAnimation />;

      case "binary_tree":
        return <BinaryTreeAnimation />;

      default:
        return <DefaultAnimation />;
    }
  };

  return (
    <div>

      <h2 className="text-3xl font-bold mb-8">
        🎬 Interactive Visualization
      </h2>

      {renderAnimation()}

    </div>
  );
};

export default VisualizationPanel;