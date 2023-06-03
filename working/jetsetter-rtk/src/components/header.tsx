type HeaderProps = {
  count: number
}

const Header = ({ count = 0 }: HeaderProps) => (
  <header id="page-header">
    <h1 className="text-2xl font-bold">Packing List</h1>
    <p id="number-of-items">
      {count} {count === 1 ? "item" : "items"}
    </p>
  </header>
)

export default Header
