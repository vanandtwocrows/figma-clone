import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";

export default function Page() {
  return (
    <Room>
      <h1 className="text-xl">Testing</h1>
      <CollaborativeApp />
    </Room>
  );
}