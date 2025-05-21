interface DropdownMenuListProps {
  menuOptions: string[];
  onSelect: (option: string) => void;
}

export default function DropdownMenuList({
  menuOptions,
  onSelect,
}: DropdownMenuListProps) {
  return (
    <div className="absolute gap-[0.625rem] rounded-xl border border-gray-100 text-gray-800">
      {menuOptions.map((option) => (
        <div
          key={option}
          onClick={() => onSelect(option)}
          className="cursor-pointer rounded-xl px-[0.75rem] py-[0.5rem] hover:bg-orange-100"
        >
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
}
