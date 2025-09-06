
import ProductExplorer from "./components/Product-Explorer/Product-Explorer";
export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Coffee Shop</h1>
      <p>We serve the best coffee in town.</p>
      {/* product-explorer */}
      <ProductExplorer />
    </div>
  );
}
