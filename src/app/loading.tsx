import { LoadingDots } from "@components/ui";

export default function Loading() {
  return (
    <div className="flex h-80 w-80 items-center justify-center p-3 text-center">
      <LoadingDots />
    </div>
  );
}
