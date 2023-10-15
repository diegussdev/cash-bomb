"use client";

interface Props {
  data: any;
}

export function Display({ data }: Props) {
  return (
    <div className="flex w-full justify-center items-center text-2xl bg-gray-300 p-1 mx-1 mb-2 rounded-md shadow-lg">
      {data}
    </div>
  );
}
