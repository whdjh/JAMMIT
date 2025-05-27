import React from 'react';
import TagSelector from '@/components/commons/TagSelector';

interface TagSectionProps {
  label: string;
  tags: string[];
  initialSelected: string[];
  onChange: (selected: string[]) => void;
}

function TagSection({
  label,
  tags,
  initialSelected,
  onChange,
}: TagSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="pt-2 text-lg font-semibold">{label}</p>
      <div className="flex flex-col gap-1">
        <TagSelector
          mode="selectable"
          tags={tags}
          initialSelected={initialSelected}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TagSection;
