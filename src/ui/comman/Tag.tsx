function Tag({ text }: { text: string | number | undefined }) {
  return (
    <span className="bg-white-600 text-slate-600 text-sm font-semibold px-2 rounded-full flex items-center justify-center ml-2">
      {text}
    </span>
  );
}

export default Tag;
