interface FilterBarProps {
  filter: "all" | "active" | "completed";
  setFilter: (value: "all" | "active" | "completed") => void;
}

function FilterBar({ setFilter }: FilterBarProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <button onClick={() => setFilter("all")}>Все</button>

      <button onClick={() => setFilter("active")}>Активные</button>

      <button onClick={() => setFilter("completed")}>Выполненные</button>
    </div>
  );
}

export default FilterBar;
