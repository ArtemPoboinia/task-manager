interface FilterBarProps {
  filter: 'all' | 'active' | 'completed'
  setFilter: (
    value: 'all' | 'active' | 'completed'
  ) => void
}

function FilterBar({
  filter,
  setFilter,
}: FilterBarProps) {
  const buttonStyle = (value: string) =>
    `rounded-xl px-4 py-2 transition ${
      filter === value
        ? 'bg-blue-600 text-white'
        : 'bg-slate-200 hover:bg-slate-300'
    }`

  return (
    <div className="mt-6 flex gap-3">
      <button
        className={buttonStyle('all')}
        onClick={() => setFilter('all')}
      >
        Все
      </button>

      <button
        className={buttonStyle('active')}
        onClick={() => setFilter('active')}
      >
        Активные
      </button>

      <button
        className={buttonStyle('completed')}
        onClick={() => setFilter('completed')}
      >
        Выполненные
      </button>
    </div>
  )
}

export default FilterBar