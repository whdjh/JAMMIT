'use client';
import Button from '@/components/commons/Button';

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <h1>large</h1>
      <Button variant="solid" size="large">
        solid
      </Button>
      <Button variant="outline" size="large">
        outline
      </Button>
      <Button variant="solid" size="large" disabled>
        solid disabled
      </Button>
      <Button variant="outline" size="large" disabled>
        outline disabled
      </Button>
      <h1>small</h1>
      <Button variant="solid" size="small">
        solid
      </Button>
      <Button variant="outline" size="small">
        outline
      </Button>
      <Button variant="solid" size="small" disabled>
        s - disabled
      </Button>
      <Button variant="outline" size="small" disabled>
        o - disabled
      </Button>
    </div>
  );
}
