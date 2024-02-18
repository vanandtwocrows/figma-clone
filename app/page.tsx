import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";

export default function Page() {
  return (
    <Room>
      <h1 className="font-xl border-2">Testing</h1>
      <CollaborativeApp />
    </Room>
  );
}